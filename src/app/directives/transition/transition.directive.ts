import {
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from "@angular/core";
import { splitClasses } from "src/app/tools/classNames";

export type TransitionDuration =
  | 0
  | 75
  | 100
  | 150
  | 200
  | 300
  | 500
  | 700
  | 1000;

@Directive({
  selector: "[appTransition]",
  standalone: true
})
export class TransitionDirective implements OnChanges {
  @Output() afterLeave = new EventEmitter<void>();
  @Output() afterEnter = new EventEmitter<void>();
  @Output() beforeEnter = new EventEmitter<void>();

  @Input({
    required: true
  })
  appTransition!: HTMLElement;
  @Input() show = false;
  @Input() enter = "";
  @Input() duration: TransitionDuration = 200;
  @Input() enterFrom = "";
  @Input() enterTo = "";
  @Input() leave = "";
  @Input() leaveFrom = "";
  @Input() leaveTo = "";

  currentTimeout?: ReturnType<typeof setTimeout>;

  ngOnChanges(changes: SimpleChanges): void {
    clearTimeout(this.currentTimeout);

    if (changes["show"]?.currentValue) {
      this.resetClassList();
      this.handleEnter();
    } else if (!changes["show"].firstChange) {
      this.handleLeave();
    } else {
      this.appTransition.classList.add("hidden");
    }
  }

  private resetClassList() {
    this.appTransition.classList.remove(
      ...splitClasses(
        this.enter,
        this.enterFrom,
        this.enterTo,
        this.leave,
        this.leaveFrom,
        this.leaveTo,
        "hidden"
      )
    );
  }

  private handleEnter() {
    const classList = this.appTransition.classList;
    classList.add(
      ...splitClasses(this.enter, this.enterFrom, `duration-${this.duration}`)
    );
    this.beforeEnter.emit();

    this.currentTimeout = setTimeout(() => {
      classList.remove(...splitClasses(this.enterFrom));
      classList.add(...splitClasses(this.enterTo));

      setTimeout(() => {
        this.afterEnter.emit();
        classList.remove("hidden");
      }, this.duration);
    }, 100);
  }

  private handleLeave() {
    const classList = this.appTransition.classList;

    classList.remove(...splitClasses(this.enter));
    classList.add(...splitClasses(this.leave, this.leaveFrom));

    this.currentTimeout = setTimeout(() => {
      classList.remove(...splitClasses(this.enterTo, this.leaveFrom));
      classList.add(...splitClasses(this.leaveTo));

      setTimeout(() => {
        this.afterLeave.emit();
        classList.add("hidden");
      }, this.duration);
    }, 100);
  }
}

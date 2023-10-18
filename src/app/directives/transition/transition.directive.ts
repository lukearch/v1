import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from "@angular/core";
import { splitClasses } from "src/app/tools/classNames";

type DurationOption = 0 | 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000;

@Directive({
  selector: "[appTransition]",
  standalone: true
})
export class TransitionDirective implements OnChanges {
  @Output() whenLeave = new EventEmitter<void>();
  @Output() whenEnter = new EventEmitter<void>();

  @Input() show = false;
  @Input() enter = "";
  @Input() enterDuration: DurationOption = 200;
  @Input() enterFrom = "";
  @Input() enterTo = "";
  @Input() leave = "";
  @Input() leaveDuration: DurationOption = 200;
  @Input() leaveFrom = "";
  @Input() leaveTo = "";

  currentTimeout?: ReturnType<typeof setTimeout>;

  constructor(public el: ElementRef<HTMLDivElement>) {}

  ngOnChanges(changes: SimpleChanges): void {
    clearTimeout(this.currentTimeout);

    if (changes["show"]?.currentValue) {
      this.handleEnter();
    } else {
      this.handleLeave();
    }
  }

  private handleEnter() {
    const classList = this.el.nativeElement.classList;
    classList.add(
      ...splitClasses(
        this.enter,
        this.enterFrom,
        `duration-${this.enterDuration}`
      )
    );

    this.currentTimeout = setTimeout(() => {
      classList.remove(...splitClasses(this.enterFrom));
      classList.add(...splitClasses(this.enterTo));

      setTimeout(() => {
        this.whenEnter.emit();
        classList.remove("hidden");
      }, this.enterDuration);
    }, 0);
  }

  private handleLeave() {
    const classList = this.el.nativeElement.classList;

    classList.replace(
      `duration-${this.enterDuration}`,
      `duration-${this.leaveDuration}`
    );
    classList.remove(...splitClasses(this.enter));
    classList.add(...splitClasses(this.leave, this.leaveFrom));

    this.currentTimeout = setTimeout(() => {
      classList.remove(...splitClasses(this.enterTo, this.leaveFrom));
      classList.add(...splitClasses(this.leaveTo));

      setTimeout(() => {
        this.whenLeave.emit();
        classList.add("hidden");
      }, this.leaveDuration);
    }, 0);
  }
}

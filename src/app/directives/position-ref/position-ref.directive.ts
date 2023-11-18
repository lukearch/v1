import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";

@Directive({
  selector: "[appPositionRef]",
  standalone: true
})
export class PositionRefDirective implements AfterViewInit, OnChanges {
  @Input() appPositionRef?: HTMLElement;
  @Input() direction?: "top" | "bottom";

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnChanges(changes: SimpleChanges): void {
    const rootRetcs = this.appPositionRef?.getBoundingClientRect();
    const style = this.el.nativeElement.style;

    if (changes["direction"]) {
      if (this.direction === "top") {
        style.top = `${
          (rootRetcs?.top ?? 0) - this.el.nativeElement.clientHeight
        }px`;
      } else {
        style.top = `${rootRetcs?.bottom}px`;
      }
    }
  }

  ngAfterViewInit(): void {
    const rootRetcs = this.appPositionRef?.getBoundingClientRect();
    const style = this.el.nativeElement.style;

    style.position = "absolute";
    style.width = "100%";
    style.maxWidth = `${rootRetcs?.width}px`;
    style.bottom = "";
  }
}

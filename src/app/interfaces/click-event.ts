import { ElementRef } from "@angular/core";

export type ClickEvent = PointerEvent & {
  target: HTMLElement;
};

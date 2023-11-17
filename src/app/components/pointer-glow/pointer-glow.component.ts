import {
  Component,
  HostBinding,
  HostListener,
  computed,
  signal
} from "@angular/core";

@Component({
  selector: "app-pointer-glow",
  templateUrl: "./pointer-glow.component.html",
  styleUrls: ["./pointer-glow.component.scss"]
})
export class PointerGlowComponent {
  pointer = signal({
    x: "0",
    y: "0"
  });

  background = computed(
    () =>
      `radial-gradient(600px at ${this.pointer().x} ${
        this.pointer().y
      }, rgba(45, 212, 191, 0.15), transparent 80%)`
  );

  @HostListener("window:pointermove", ["$event"])
  handleMouseMove(e: MouseEvent) {
    const x = e.pageX;
    const y = e.pageY - window.scrollY;

    this.pointer.set({
      x: `${x}px`,
      y: `${y}px`
    });
  }

  @HostBinding("style.background") get bg() {
    return this.background();
  }
}

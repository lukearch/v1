import { Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent {
  @Input() type: "button" | "submit" = "button";
  @Input() icon = "";
  @Input() disabled = false;

  @HostBinding("style.opacity")
  get opacity() {
    return this.disabled ? 0.5 : 1;
  }
}

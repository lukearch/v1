import { Component, Input } from "@angular/core";

@Component({
  selector: "app-glass-card",
  templateUrl: "./glass-card.component.html",
  styleUrls: ["./glass-card.component.scss"]
})
export class GlassCardComponent {
  @Input() pointer = true;
}

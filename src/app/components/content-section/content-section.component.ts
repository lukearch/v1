import { Component, Input } from "@angular/core";

@Component({
  selector: "app-content-section",
  templateUrl: "./content-section.component.html",
  styleUrls: ["./content-section.component.scss"]
})
export class ContentSectionComponent {
  @Input() root?: HTMLElement;
  @Input() name = "";
  @Input() register = true;
}

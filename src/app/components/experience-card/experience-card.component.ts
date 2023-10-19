import { Component, Input } from "@angular/core";
import { Experience } from "src/app/interfaces/experience.interface";
@Component({
  selector: "app-experience-card",
  templateUrl: "./experience-card.component.html",
  styleUrls: ["./experience-card.component.scss"]
})
export class ExperienceCardComponent {
  @Input() experience?: Experience;

  get sortedChips() {
    return this.experience?.chips.sort();
  }
}

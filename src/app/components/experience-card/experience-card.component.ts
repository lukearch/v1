import { Component, Input } from "@angular/core";

export type Experience = {
  title: string;
  company: string;
  description: string;
  interval: {
    start: string;
    end: string;
  };
  chips: string[];
  href: string;
  externals?: {
    display: string;
    href: string;
  }[];
};

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

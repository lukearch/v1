import { Component } from "@angular/core";
import experienceData from "../../static/experiences.json";
import { Experience } from "src/app/interfaces/experience.interface";

@Component({
  selector: "app-experience-timeline",
  templateUrl: "./experience-timeline.component.html",
  styleUrls: ["./experience-timeline.component.scss"]
})
export class ExperienceTimelineComponent {
  experiences: Experience[] = experienceData;
}

import { Component, EventEmitter, Input, Output } from "@angular/core";

export type Nav = {
  label: string;
  active: boolean;
};

@Component({
  selector: "app-navigation-timeline",
  templateUrl: "./navigation-timeline.component.html",
  styleUrls: ["./navigation-timeline.component.scss"]
})
export class NavigationTimelineComponent {
  @Output() navigate = new EventEmitter<Nav>();
  @Input() navigation: Nav[] = [];
}

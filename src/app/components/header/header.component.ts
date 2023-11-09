import { Component, Input } from "@angular/core";
import { Nav } from "../navigation-timeline/navigation-timeline.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  @Input() navigate?: (nav: Nav) => void;
}

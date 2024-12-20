import { Component, EventEmitter, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import {
  selectNavigation,
  selectVisibleSections
} from "src/app/state/selectors/app.selectors";

export type Nav = {
  label: string;
  id: string;
};

@Component({
  selector: "app-navigation-timeline",
  templateUrl: "./navigation-timeline.component.html",
  styleUrls: ["./navigation-timeline.component.scss"]
})
export class NavigationTimelineComponent {
  @Output() navigate = new EventEmitter<Nav>();

  navigation = this.store.selectSignal(selectNavigation);
  activeNavs = this.store.selectSignal(selectVisibleSections);

  constructor(private store: Store) {}

  isActive(nav: Nav) {
    return !!this.activeNavs().find((s) => s === nav.id);
  }
}

import { Component, computed } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectCurrentCountry } from "src/app/state/selectors/country.selectors";
import { Nav } from "../navigation-timeline/navigation-timeline.component";
import { TRANSLATIONS } from "./translations.config";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  translations = TRANSLATIONS;
  country = this.store.selectSignal(selectCurrentCountry);

  navigation = computed<Nav[]>(() => [
    {
      label: this.translations["nav_1"][this.country()],
      active: false
    },
    {
      label: this.translations["nav_2"][this.country()],
      active: false
    },
    {
      label: this.translations["nav_3"][this.country()],
      active: false
    }
  ]);

  constructor(private store: Store) {}
}

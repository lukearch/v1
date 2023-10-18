import { Component, Input, computed } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectCurrentCountry } from "src/app/state/selectors/country.selectors";
import { Nav } from "../navigation-timeline/navigation-timeline.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  @Input() navigate?: (nav: Nav) => void;

  country = this.store.selectSignal(selectCurrentCountry);

  navigation = computed<Nav[]>(() => [
    {
      label: "sobre",
      id: "about"
    },
    {
      label: "experiência",
      id: "experience"
    },
    {
      label: "projetos",
      id: "projects"
    }
  ]);

  constructor(private store: Store) {}
}

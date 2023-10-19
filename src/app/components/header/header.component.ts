import { Component, Input } from "@angular/core";
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

  constructor(private store: Store) {}
}

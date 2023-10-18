import { Component, HostBinding, computed, signal } from "@angular/core";
import { Store } from "@ngrx/store";
import { CountryActions } from "src/app/state/actions/country.actions";
import { Country } from "src/app/state/reducers/country.reducer";
import { selectCurrentCountry } from "src/app/state/selectors/country.selectors";

@Component({
  selector: "app-language-selector",
  templateUrl: "./language-selector.component.html",
  styleUrls: ["./language-selector.component.scss"]
})
export class LanguageSelectorComponent {
  expanded = signal(false);
  countries = computed<Country[]>(() => ["br", "us"]);
  selectedCountry = this.store.selectSignal(selectCurrentCountry);
  dropdownDirection = signal("");

  @HostBinding("id") get id() {
    return "language-selector";
  }

  constructor(private store: Store) {}

  getElBoundingClientRect(el: HTMLDivElement) {
    const { y, height } = el.getBoundingClientRect();

    this.dropdownDirection.set(
      height + y >= window.innerHeight ? "bottom-full" : "top-full"
    );
  }

  toggleExpanded() {
    this.expanded.update((e) => !e);
  }

  onBlur() {
    this.expanded.set(false);
  }

  select(country: Country) {
    this.store.dispatch(
      CountryActions.selectCountry({
        country
      })
    );
  }
}

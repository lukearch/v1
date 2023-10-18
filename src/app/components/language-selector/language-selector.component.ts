import {
  Component,
  HostBinding,
  HostListener,
  computed,
  signal
} from "@angular/core";
import { toObservable } from "@angular/core/rxjs-interop";
import { Store } from "@ngrx/store";
import { CountryActions } from "src/app/state/actions/country.actions";
import { Country } from "src/app/state/reducers/country.reducer";

@Component({
  selector: "app-language-selector",
  templateUrl: "./language-selector.component.html",
  styleUrls: ["./language-selector.component.scss"]
})
export class LanguageSelectorComponent {
  expanded = signal(false);
  countries = computed<Country[]>(() => ["br", "us"]);
  selectedCountry = signal<Country>(this.countries()[0]);
  dropdownDirection = signal("");

  changeCountry$ = toObservable(this.selectedCountry).subscribe((country) => {
    this.store.dispatch(
      CountryActions.selectCountry({
        country
      })
    );
  });

  @HostBinding("id") get id() {
    return "language-selector";
  }

  constructor(private store: Store) {}

  @HostListener("window:load", ["$event"])
  load() {
    console.log(window.innerHeight);
  }

  getElBoundingClientRect(el: HTMLDivElement) {
    const { y, height } = el.getBoundingClientRect();

    console.log(el.getBoundingClientRect());

    this.dropdownDirection.set(
      height + y >= window.innerHeight ? "bottom-full" : "top-full"
    );
  }

  toggleExpanded(el: HTMLButtonElement) {
    this.expanded.update((e) => !e);

    console.log("button", el.getBoundingClientRect());
  }

  onBlur() {
    this.expanded.set(false);
  }

  selectCountry(country: Country) {
    this.selectedCountry.set(country);
  }
}

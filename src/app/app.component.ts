import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { CountryActions } from "./state/actions/country.actions";
import { selectCurrentCountry } from "./state/selectors/country.selectors";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  country = this.store.selectSignal(selectCurrentCountry);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(
      CountryActions.selectCountry({
        country: navigator.language === "pt-BR" ? "br" : "us"
      })
    );
  }
}

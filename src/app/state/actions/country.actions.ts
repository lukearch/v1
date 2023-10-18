import { createActionGroup, props } from "@ngrx/store";
import { Country } from "../reducers/country.reducer";

export const CountryActions = createActionGroup({
  source: "Country",
  events: {
    "Select Country": props<{
      country: Country;
    }>()
  }
});

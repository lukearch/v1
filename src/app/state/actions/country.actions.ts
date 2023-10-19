import { createActionGroup, props } from "@ngrx/store";
import { Country } from "src/app/interfaces/country.interface";

export const CountryActions = createActionGroup({
  source: "Country",
  events: {
    "Select Country": props<{
      country: Country;
    }>()
  }
});

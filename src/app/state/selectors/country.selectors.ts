import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromCountry from "../reducers/country.reducer";

export const selectCountryState =
  createFeatureSelector<fromCountry.CountryState>(
    fromCountry.countryFeatureKey
  );

export const selectCurrentCountry = createSelector(
  selectCountryState,
  (state) => state.current
);

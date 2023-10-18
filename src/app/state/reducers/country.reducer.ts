import { createFeature, createReducer, on } from "@ngrx/store";
import { CountryActions } from "../actions/country.actions";

export const countryFeatureKey = "country";

export type Country = "br" | "us";

export interface CountryState {
  current: Country;
}

export const initialState: CountryState = {
  current: "br"
};

export const reducer = createReducer(
  initialState,
  on(
    CountryActions.selectCountry,
    (state, { country }): CountryState => ({
      ...state,
      current: country
    })
  )
);

export const countryFeature = createFeature({
  name: countryFeatureKey,
  reducer
});

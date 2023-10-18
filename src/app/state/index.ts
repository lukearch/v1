import { isDevMode } from "@angular/core";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import * as fromApp from "./reducers/app.reducer";
import * as fromCountry from "./reducers/country.reducer";

export interface State {
  [fromApp.appFeatureKey]: fromApp.AppState;
  [fromCountry.countryFeatureKey]: fromCountry.CountryState;
}

export const reducers: ActionReducerMap<State> = {
  [fromApp.appFeatureKey]: fromApp.reducer,
  [fromCountry.countryFeatureKey]: fromCountry.reducer
};
export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];

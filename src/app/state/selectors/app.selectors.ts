import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromApp from "../reducers/app.reducer";

export const selectAppState = createFeatureSelector<fromApp.AppState>(
  fromApp.appFeatureKey
);

export const selectAppStateLoading = createSelector(
  selectAppState,
  (state) => state.loading
);

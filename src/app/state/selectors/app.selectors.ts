import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromApp from "../reducers/app.reducer";

export const selectAppState = createFeatureSelector<fromApp.AppState>(
  fromApp.appFeatureKey
);

export const selectAppStateLoading = createSelector(
  selectAppState,
  (state) => !!state.requestQueue.length
);

export const selectVisibleSections = createSelector(
  selectAppState,
  (state) => state.visibleSections
);

export const selectNavigation = createSelector(
  selectAppState,
  (state) => state.navigation
);

export const selectCurrentMessage = createSelector(
  selectAppState,
  (state) => state.messages[0] || null
);

import { createFeature, createReducer, on } from "@ngrx/store";
import { AppActions } from "../actions/app.actions";

export const appFeatureKey = "app";

export interface AppState {
  loading: boolean;
  visibleSections: string[];
}

export const initialState: AppState = {
  loading: false,
  visibleSections: []
};

export const reducer = createReducer(
  initialState,
  on(
    AppActions.startLoading,
    (state): AppState => ({
      ...state,
      loading: true
    })
  ),
  on(
    AppActions.endLoading,
    (state): AppState => ({
      ...state,
      loading: false
    })
  ),
  on(
    AppActions.pushVisibleSection,
    (state, { section }): AppState => ({
      ...state,
      visibleSections: [...state.visibleSections, section]
    })
  ),
  on(
    AppActions.removeVisibleSection,
    (state, { section }): AppState => ({
      ...state,
      visibleSections: state.visibleSections.filter((s) => s !== section)
    })
  )
);

export const appFeature = createFeature({
  name: appFeatureKey,
  reducer
});

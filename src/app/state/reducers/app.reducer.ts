import { createFeature, createReducer, on } from "@ngrx/store";
import { AppActions } from "../actions/app.actions";

export const appFeatureKey = "app";

export interface AppState {
  loading: boolean;
}

export const initialState: AppState = {
  loading: false
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
  )
);

export const appFeature = createFeature({
  name: appFeatureKey,
  reducer
});

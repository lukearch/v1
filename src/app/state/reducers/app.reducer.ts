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
    AppActions.toggleLoading,
    (state): AppState => ({
      ...state,
      loading: !state.loading
    })
  )
);

export const appFeature = createFeature({
  name: appFeatureKey,
  reducer
});

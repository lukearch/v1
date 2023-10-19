import { createFeature, createReducer, on } from "@ngrx/store";
import { Nav } from "src/app/components/navigation-timeline/navigation-timeline.component";
import { AppActions } from "../actions/app.actions";

export const appFeatureKey = "app";

export interface AppState {
  loading: boolean;
  visibleSections: string[];
  navigation: Nav[];
}

export const initialState: AppState = {
  loading: false,
  visibleSections: [],
  navigation: []
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
  ),
  on(
    AppActions.addNavigation,
    (state, { nav }): AppState => ({
      ...state,
      navigation: [...state.navigation, nav]
    })
  )
);

export const appFeature = createFeature({
  name: appFeatureKey,
  reducer
});

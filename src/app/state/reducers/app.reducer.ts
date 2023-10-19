import { createFeature, createReducer, on } from "@ngrx/store";
import { Nav } from "src/app/components/navigation-timeline/navigation-timeline.component";
import { AppActions } from "../actions/app.actions";

export const appFeatureKey = "app";

export interface AppState {
  loading: boolean;
  visibleSections: string[];
  navigation: Nav[];
  requestQueue: string[];
}

export const initialState: AppState = {
  loading: false,
  visibleSections: [],
  navigation: [],
  requestQueue: []
};

export const reducer = createReducer(
  initialState,
  on(
    AppActions.pushVisibleSection,
    (state, { section }): AppState => ({
      ...state,
      visibleSections: state.visibleSections.concat(section)
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
      navigation: state.navigation.concat(nav)
    })
  ),
  on(
    AppActions.queueRequest,
    (state, { id }): AppState => ({
      ...state,
      requestQueue: state.requestQueue.concat(id)
    })
  ),
  on(
    AppActions.resolveRequest,
    (state, { id }): AppState => ({
      ...state,
      requestQueue: state.requestQueue.filter((req) => req !== id)
    })
  )
);

export const appFeature = createFeature({
  name: appFeatureKey,
  reducer
});

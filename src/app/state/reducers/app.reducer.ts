import { createFeature, createReducer, on } from "@ngrx/store";
import { Nav } from "src/app/components/navigation-timeline/navigation-timeline.component";
import { AppActions } from "../actions/app.actions";
import { v4 } from "uuid";

export const appFeatureKey = "app";

export type ToastMessage = {
  id: string;
  message: string;
};

export interface AppState {
  loading: boolean;
  visibleSections: string[];
  navigation: Nav[];
  requestQueue: string[];
  messages: ToastMessage[];
}

export const initialState: AppState = {
  loading: false,
  visibleSections: [],
  navigation: [],
  requestQueue: [],
  messages: []
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
    AppActions.resetNavigation,
    (state): AppState => ({
      ...state,
      navigation: initialState.navigation
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
  ),
  on(
    AppActions.queueToast,
    (state, { message }): AppState => ({
      ...state,
      messages: [
        ...state.messages,
        {
          message,
          id: v4()
        }
      ]
    })
  ),
  on(
    AppActions.removeToast,
    (state, { id }): AppState => ({
      ...state,
      messages: state.messages.filter((msg) => msg.id !== id)
    })
  )
);

export const appFeature = createFeature({
  name: appFeatureKey,
  reducer
});

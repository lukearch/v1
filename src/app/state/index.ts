import { isDevMode } from "@angular/core";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import * as fromApp from "./reducers/app.reducer";

export interface State {
  [fromApp.appFeatureKey]: fromApp.AppState;
}

export const reducers: ActionReducerMap<State> = {
  [fromApp.appFeatureKey]: fromApp.reducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];

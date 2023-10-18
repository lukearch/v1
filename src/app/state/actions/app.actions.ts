import { createActionGroup, emptyProps } from "@ngrx/store";

export const AppActions = createActionGroup({
  source: "App",
  events: {
    "Start Loading": emptyProps(),
    "End Loading": emptyProps()
  }
});

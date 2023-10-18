import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const AppActions = createActionGroup({
  source: "App",
  events: {
    "Start Loading": emptyProps(),
    "End Loading": emptyProps(),
    "Push Visible Section": props<{
      section: string;
    }>(),
    "Remove Visible Section": props<{
      section: string;
    }>(),
    "Scroll To": props<{
      section: "string";
    }>()
  }
});

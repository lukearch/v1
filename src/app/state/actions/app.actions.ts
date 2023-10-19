import { createActionGroup, props } from "@ngrx/store";
import { Nav } from "src/app/components/navigation-timeline/navigation-timeline.component";

export const AppActions = createActionGroup({
  source: "App",
  events: {
    "Push Visible Section": props<{
      section: string;
    }>(),
    "Remove Visible Section": props<{
      section: string;
    }>(),
    "Scroll To": props<{
      section: "string";
    }>(),
    "Add Navigation": props<{
      nav: Nav;
    }>(),
    "Queue Request": props<{
      id: string;
    }>(),
    "Resolve Request": props<{
      id: string;
    }>()
  }
});

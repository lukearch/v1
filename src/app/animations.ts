import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger
} from "@angular/animations";

export const fadeAnimation = trigger("routeAnimations", [
  transition("* <=> *", [
    query(
      ":enter",
      [
        style({
          opacity: 0
        })
      ],
      { optional: true }
    ),
    query(":leave", animateChild(), { optional: true }),
    group([
      query(
        ":leave",
        [
          animate(
            "200ms ease-out",
            style({
              opacity: 0
            })
          )
        ],
        { optional: true }
      ),
      query(
        ":enter",
        [
          animate(
            "200ms ease-out",
            style({
              opacity: 1
            })
          )
        ],
        { optional: true }
      )
    ])
  ])
]);

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
  transition("HomePage => *", [
    style({
      position: "relative"
    }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ]),
    query(
      ":enter",
      [
        style({
          left: "100%"
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
            "300ms ease-out",
            style({
              left: "-100%",
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
            "300ms ease-out",
            style({
              left: "0%",
              opacity: 1
            })
          )
        ],
        { optional: true }
      )
    ])
  ]),
  transition("* => HomePage", [
    style({
      position: "relative"
    }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ]),
    query(
      ":enter",
      [
        style({
          left: "-100%"
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
            "300ms ease-out",
            style({
              left: "100%"
            })
          ),
          animate(
            "100ms ease-out",
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
            "300ms ease-out",
            style({
              left: "0%"
            })
          ),
          animate(
            "100ms ease-out",
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

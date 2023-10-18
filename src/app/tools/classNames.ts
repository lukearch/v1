export function classNames(
  ...args: (
    | string
    | {
        [key: string]: boolean;
      }
  )[]
) {
  const classes: string[] = [];

  classes.concat(
    args.filter<string>((arg): arg is string => typeof arg === "string")
  );

  args.forEach((arg) => {
    if (typeof arg === "string") {
      classes.push(arg);
    } else if (typeof arg === "object") {
      Object.entries(arg).map((entry) => {
        if (entry[1]) {
          classes.push(entry[0]);
        }
      });
    }
  });

  return classes.join(" ");
}

export function splitClasses(
  ...args: (
    | string
    | {
        [key: string]: boolean;
      }
  )[]
) {
  return classNames(...args).split(" ");
}

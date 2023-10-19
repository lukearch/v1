export type Experience = {
  title: string;
  company: string;
  description: string;
  interval: {
    start: string;
    end: string;
  };
  chips: string[];
  href: string;
  externals?: {
    display: string;
    href: string;
  }[];
};

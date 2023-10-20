export type Project = {
  title: string;
  description: string;
  chips: string[];
  image: string;
  href?: {
    link: string;
    display: string;
  };
  gh: ProjectGhOptions;
  type: string;
  year: string;
  company?: string;
};

export type ProjectGhOptions = {
  repo?: {
    name: string;
    url?: string;
    stars?: number;
  };
};

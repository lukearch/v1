export type Project = {
  title: string;
  description: string;
  chips: string[];
  image: string;
  href: string;
  gh: ProjectGhOptions;
};

export type ProjectGhOptions = {
  repo?: {
    name: string;
    url?: string;
    stars?: number;
  };
};

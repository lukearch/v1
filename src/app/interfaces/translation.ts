import { Country } from "../state/reducers/country.reducer";

export type Translation = {
  [C in Country]: string;
};

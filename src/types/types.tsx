import { filter } from "../data/filtersData";

export type Screenshot = {
  id: number;
  image: string;
};

export type SystemReq = {
  graphics: string;
  memory: string;
  os: string;
  processor: string;
  storage: string;
};

export interface IGame {
  id: number;
  title: string;
  thumbnail: string;
  developer: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  release_date: string;
  screenshots: Screenshot[];
  minimum_system_requirements: SystemReq;
}

export type filterSelected = {
  platform: string;
  genre: string;
  sortedBy: string;
};

export type GamesState = {
  games: IGame[];
  filtersSelected: filterSelected;
  loading: string;
  filterOptions: filter[];
  error: string | null;
};

import { formatForUrl } from "../helpers/helpers";
import { filterSelected } from "../types/types";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "17dfc66732msh80e1e1d4b04a126p10c86fjsn3d149c34dc12",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

export const fetchMultipleGames = (filters: filterSelected) => {
  const baseUrl = "https://free-to-play-games-database.p.rapidapi.com/api";

  const { platform, genre, sortedBy } = filters;

  const sortByStr = `sort-by=${formatForUrl(sortedBy)}`;
  const platformStr =
    platform !== "All" ? `&platform=${formatForUrl(platform)}` : "";
  const genreStr = genre !== "All" ? `&category=${formatForUrl(genre)}` : "";

  const url = `${baseUrl}/games?${sortByStr}${platformStr}${genreStr}`;

  return fetch(url, options);
};

export const fetchSingleGame = (id: string | undefined) => {
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}}`;

  return fetch(url, options);
};

import { CachedGame } from "../store/sigleGameSlice";

export const dateToRuFormat = (date: string) => {
  const ruDate = new Date(date).toLocaleDateString("ru-RU");
  return ruDate;
};

export const formatForUrl = (value: string) => {
  return value.length > 1
    ? value.toLowerCase().split(" ").join("-")
    : value.toLowerCase();
};

export const saveCachedToLocalStorage = (savedGames: []) => {
  localStorage.setItem("savedGames", JSON.stringify(savedGames));
};

export const getCachedFromLocalStorage = () => {
  const savedGamesRetrieved = localStorage.getItem("savedGames");
  return savedGamesRetrieved ? JSON.parse(savedGamesRetrieved) : [];
};

export const removeCachedFromLocalStorage = (game: CachedGame) => {
  const gameJson = JSON.stringify(game);
  localStorage.removeItem(gameJson);
};

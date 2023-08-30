import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSingleGame } from "../services/gamesApi";
import {
  saveCachedToLocalStorage,
  getCachedFromLocalStorage,
  removeCachedFromLocalStorage,
} from "../helpers/helpers";
import { IGame } from "../types/types";

export const fetchGame = createAsyncThunk(
  "games/fetchSingleGame",
  async (id: string | undefined) => {
    for (let i = 0; i < 4; i++) {
      const response = await fetchSingleGame(id);
      if (response.ok) {
        const data = await response.json();
        return data;
      }
    }
    throw new Error("Something went wrong");
  }
);

export interface CachedGame extends IGame {
  cached: string;
}

export type SingleGameState = {
  game: IGame | {};
  savedGames: any;
  loading: string;
  error: string | null;
};

const initialState: SingleGameState = {
  game: {},
  savedGames: getCachedFromLocalStorage() || [],
  loading: "idle",
  error: "",
};

export const gamesSlice = createSlice({
  name: "singleGame",
  initialState,
  reducers: {
    getFromSaved(state, action) {
      state.loading = "success";
      const id = action.payload;
      const all = getCachedFromLocalStorage();
      const target = all.find((el: any) => el?.id == id);
      state.game = target;
    },

    cacheGame: (state, action) => {
      const casheLimitTime = 5 * 60 * 1000;

      const gameData = action.payload;

      const currentDate = new Date();
      const dateISO = currentDate.toISOString();

      if (!state.savedGames.find((g: any) => g?.id == gameData.id)) {
        state.savedGames = [
          ...state.savedGames,
          { cached: dateISO, ...gameData },
        ];
      }

      const currentTimeStamp = currentDate.getTime();

      saveCachedToLocalStorage(
        state.savedGames.filter((el: any) => el != null)
      );

      state.savedGames.forEach((game: CachedGame, index: number) => {
        if (game?.cached) {
          const cachedTimeStamp = new Date(game.cached).getTime();
          if (currentTimeStamp - cachedTimeStamp > casheLimitTime) {
            state.savedGames = state.savedGames.filter(
              (g: any) => g.id != game.id
            );
            removeCachedFromLocalStorage(game);
          }
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGame.pending, (state) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(fetchGame.fulfilled, (state, action) => {
        state.loading = "success";
        state.game = action.payload;
      })
      .addCase(fetchGame.rejected, (state) => {
        state.loading = "error";
        state.error = "Sorry, couldn't load the game. Please, try again.";
      });
  },
});

export const { cacheGame, getFromSaved } = gamesSlice.actions;

export default gamesSlice.reducer;

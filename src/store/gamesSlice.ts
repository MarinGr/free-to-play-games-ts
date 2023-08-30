import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMultipleGames } from "../services/gamesApi";
import { filtersData } from "../data/filtersData";
import { filterSelected, GamesState } from "../types/types";

export const fetchGames = createAsyncThunk(
  "games/fetchGames",
  async (filters: filterSelected) => {
    for (let i = 0; i < 4; i++) {
      const response = await fetchMultipleGames(filters);
      if (response.ok) {
        const data = await response.json();
        return data;
      }
    }

    throw new Error("Something went wrong");
  }
);

const initialState: GamesState = {
  games: [],
  filtersSelected: { platform: "All", genre: "All", sortedBy: "Relevance" },
  loading: "idle",
  filterOptions: filtersData,
  error: "",
};

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    changeFilters: (state, action) => {
      const [value, filter] = action.payload;
      state.filtersSelected[filter as keyof filterSelected] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.loading = "success";
        state.games = action.payload;
      })
      .addCase(fetchGames.rejected, (state) => {
        state.loading = "error";
        state.error = "Sorry, couldn't load games. Please, try again.";
      });
  },
});

export const { changeFilters } = gamesSlice.actions;

export default gamesSlice.reducer;

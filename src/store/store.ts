import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./gamesSlice";
import singleGameReducer from "./sigleGameSlice";

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    singleGame: singleGameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import GameDetails from "./pages/GameDetails";
import { fetchGames } from "./store/gamesSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="game/:id" element={<GameDetails />} />
    </Route>
  )
);

const App = () => {
  const dispatch = useAppDispatch();
  const { filtersSelected } = useAppSelector((state) => state.games);

  useEffect(() => {
    dispatch(fetchGames(filtersSelected));
  }, [filtersSelected]);

  return <RouterProvider router={router} />;
};

export default App;

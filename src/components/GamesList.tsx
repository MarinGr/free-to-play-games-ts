import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import NoGamesFound from "./NoGamesFound";
import { useAppSelector } from "../hooks/hooks";
import { IGame } from "../types/types";

const GamesList = () => {
  const { games } = useAppSelector((state) => state.games);

  return (
    <>
      {games.length > 0 ? (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing="40px">
          {games.map((game: IGame) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      ) : (
        <NoGamesFound />
      )}
    </>
  );
};

export default GamesList;

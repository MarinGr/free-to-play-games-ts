import Filters from "../components/Filters";
import { Flex } from "@chakra-ui/react";
import GamesList from "../components/GamesList";
import LoadingScreen from "../components/LoadingScreen";
import ErrorScreen from "../components/ErrorScreen";
import { useAppSelector } from "../hooks/hooks";

const Home = () => {
  const { loading, error } = useAppSelector((state) => state.games);

  return (
    <Flex
      as="main"
      flexDir="column"
      alignItems="center"
      gap="40px"
      padding="32px"
      bg="base.900"
      color="text.900"
      minH="100vh"
    >
      <Filters />
      {loading === "loading" && <LoadingScreen />}
      {loading === "success" && <GamesList />}
      {loading === "error" && error && <ErrorScreen error={error} />}
    </Flex>
  );
};

export default Home;

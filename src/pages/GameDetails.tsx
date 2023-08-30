import {
  Box,
  Container,
  Stack,
  Heading,
  HStack,
  Img,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import BreadcrumbNav from "../components/BreadcrumbNav";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchGame, cacheGame, getFromSaved } from "../store/sigleGameSlice";
import Carousel from "../components/Carousel";
import LoadingScreen from "../components/LoadingScreen";
import ErrorScreen from "../components/ErrorScreen";
import { dateToRuFormat } from "../helpers/helpers";
import { getSingleGame } from "../store/selectors/selectors";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

const GameDetails = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const { game, savedGames, loading, error } = useAppSelector(getSingleGame);

  const [systemReqs, setSystemReqs] = useState<any>({
    reqs: {},
    keys: [],
  });

  const [releaseDate, setReleaseDate] = useState(game.release_date);

  useEffect(() => {
    if (savedGames.length > 0 && savedGames.find((g: any) => g?.id == id)) {
      dispatch(getFromSaved(id));
    } else {
      dispatch(fetchGame(id));
    }
  }, []);

  useEffect(() => {
    dispatch(cacheGame(game));
  }, [game]);

  useEffect(() => {
    if (loading === "success" && game.minimum_system_requirements) {
      setSystemReqs({
        reqs: game.minimum_system_requirements,
        keys: Object.keys(game.minimum_system_requirements),
      });
    }

    if (loading === "success" && game.release_date) {
      setReleaseDate(dateToRuFormat(game.release_date));
    }
  }, [loading]);

  return (
    <Box color="text.900" bg="base.900" minH="100vh">
      {loading === "loading" && <LoadingScreen />}
      {loading === "success" && (
        <Box p="32px">
          <BreadcrumbNav title={game.title} />
          <Container as="main" maxW="990px" mt="40px">
            <HStack
              alignItems="flex-start"
              flexDir={{ base: "column", md: "row" }}
              gap="40px"
            >
              <Img
                maxW={{ base: "300px", md: "600px" }}
                src={game.thumbnail}
                alt={game.title}
                marginInline={{ base: "auto ", md: "0" }}
              />
              <Box>
                <Heading>{game.title}</Heading>
                <Stack color="text.500" spacing="4px" mt="24px">
                  <Text>Release date: {releaseDate}</Text>
                  <Text>Publisher: {game.publisher} </Text>
                  <Text>Developer: {game.developer} </Text>
                  <Text>Genre: {game.genre}</Text>
                </Stack>
              </Box>
            </HStack>
            <Stack mt="40px">
              <Text fontSize="xl" color="primary.900">
                System requierments:
              </Text>
              {game.minimum_system_requirements ? (
                <SimpleGrid
                  columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
                  spacing="32px"
                  mt="12px"
                >
                  {systemReqs.keys.map((req: any) => (
                    <Box key={req}>
                      <Text color="primary.900" textTransform="capitalize">
                        {req}
                      </Text>
                      <Text color="text.500">{systemReqs.reqs[req]}</Text>
                    </Box>
                  ))}
                </SimpleGrid>
              ) : (
                <Text>No requirements</Text>
              )}
            </Stack>
            {game.screenshots.length > 0 ? (
              <Box mt="40px">
                <Carousel screenshots={game.screenshots} />
              </Box>
            ) : (
              <Text mt="40px">No screenshots available.</Text>
            )}
          </Container>
        </Box>
      )}
      {loading === "error" && <ErrorScreen error={error} />}
    </Box>
  );
};

export default GameDetails;

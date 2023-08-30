import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Flex,
  Tag,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { dateToRuFormat } from "../helpers/helpers";
import { IGame } from "../types/types";

type GameCardProps = {
  game: IGame;
};

const GameCard = ({ game }: GameCardProps) => {
  const navigate = useNavigate();

  const releaseDateRu = dateToRuFormat(game.release_date);

  return (
    <Card
      onClick={() => navigate(`/game/${game.id}`)}
      cursor="pointer"
      maxW={{ base: "100%", md: "340px" }}
      bg="base.500"
      color="text.900"
      overflow="hidden"
      transition="0.3s ease-in-out"
      _hover={{ transform: "scale(1.1)" }}
      role="group"
    >
      <Image
        src={game.thumbnail}
        alt={game.title}
        _groupHover={{ filter: "saturate(1.5)" }}
      />
      <CardBody>
        <Stack spacing="8px">
          <Heading size="md">{game.title}</Heading>
          <Stack color="text.500" spacing="4px">
            <Text fontSize="xs">Release date: {releaseDateRu}</Text>
            <Text fontSize="xs">Publisher: {game.publisher}</Text>
          </Stack>
        </Stack>
      </CardBody>
      <CardFooter>
        <Flex
          justifyContent="space-between"
          alignItems={{ base: "flex-start", sm: "center" }}
          gap="16px"
          width="100%"
          flexDir={{ base: "column", sm: "row" }}
        >
          <Tag fontSize="xs" bg="primary.900" p="6px">
            {game.platform}
          </Tag>
          <Tag fontSize="xs" bg="primary.900" p="6px">
            {game.genre}
          </Tag>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default GameCard;

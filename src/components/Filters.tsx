import { Flex } from "@chakra-ui/react";
import Filter from "./Filter";
import { getGames } from "../store/selectors/selectors";
import { useAppSelector } from "../hooks/hooks";
import { filter } from "../data/filtersData";

const Filters = () => {
  const { filterOptions } = useAppSelector(getGames);

  return (
    <Flex gap={{ base: "24px", lg: "36px" }} wrap="wrap">
      {filterOptions.map((filter: filter) => (
        <Filter key={filter.id} filter={filter} />
      ))}
    </Flex>
  );
};

export default Filters;

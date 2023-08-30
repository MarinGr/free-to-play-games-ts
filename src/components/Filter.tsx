import { Select, Box, Text } from "@chakra-ui/react";
import { changeFilters } from "../store/gamesSlice";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { filter } from "../data/filtersData";
import { filterSelected } from "../types/types";

type FilterProps = {
  filter: filter;
};

const Filter = ({ filter }: FilterProps) => {
  const dispatch = useAppDispatch();

  const { filtersSelected } = useAppSelector((state) => state.games);

  const [value, setValue] = useState(
    filtersSelected[filter.value as keyof filterSelected]
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    filter: string
  ) => {
    const newValue = e.target.value;
    setValue(newValue);
    dispatch(changeFilters([newValue, filter]));
  };

  return (
    <Box textAlign="center">
      <Text as="label">{filter.title}</Text>
      <Select
        cursor="pointer"
        bg="base.500"
        mt="6px"
        value={value}
        onChange={(e) => {
          handleChange(e, filter.value);
        }}
      >
        {filter.options.map((option) => (
          <option
            style={{
              backgroundColor: "var(--baseLight-color)",
              color: "var(--text-color-primary)",
            }}
            key={uuidv4()}
          >
            {option}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default Filter;

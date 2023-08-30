import { WarningIcon } from "@chakra-ui/icons";
import { Text, Flex } from "@chakra-ui/react";

const NoGamesFound = () => {
  return (
    <Flex
      h="80vh"
      w="100vw"
      justifyContent="center"
      alignItems="center"
      gap="16px"
    >
      <WarningIcon color="primary.900" boxSize={5} />
      <Text maxWidth="80%" fontSize="lg">
        No matching games found.
      </Text>
    </Flex>
  );
};

export default NoGamesFound;

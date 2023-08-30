import { Spinner, Flex } from "@chakra-ui/react";

const LoadingScreen = () => {
  return (
    <Flex h="80vh" w="100vw" justifyContent="center" alignItems="center">
      <Spinner size="xl" />
    </Flex>
  );
};

export default LoadingScreen;

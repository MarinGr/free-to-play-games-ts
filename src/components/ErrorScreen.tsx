import { WarningIcon } from "@chakra-ui/icons";
import { Text, Flex } from "@chakra-ui/react";

type ErrorScreenProps = {
  error: string;
};

const ErrorScreen = ({ error }: ErrorScreenProps) => {
  return (
    <Flex
      h="80vh"
      w="100vw"
      justifyContent="center"
      alignItems="center"
      gap="16px"
    >
      <WarningIcon color="danger.900" boxSize={5} />

      <Text maxWidth="80%" fontSize="lg">
        {error}
      </Text>
    </Flex>
  );
};

export default ErrorScreen;

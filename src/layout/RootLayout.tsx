import { Outlet } from "react-router-dom";
import { Heading } from "@chakra-ui/react";

const RootLayout = () => {
  return (
    <>
      <Heading
        as="h1"
        size="lg"
        textAlign="center"
        bg="base.900"
        color="text.900"
        p="16px"
      >
        Free-To-Play Games
      </Heading>
      <Outlet />
    </>
  );
};

export default RootLayout;

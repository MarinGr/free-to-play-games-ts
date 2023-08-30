import { extendTheme } from "@chakra-ui/react";

const colors = {
  base: {
    900: "var(--base-color)",
    500: "var(--baseLight-color)",
  },
  text: {
    900: "var(--text-color-primary)",
    500: "var(--text-color-secondary)",
  },
  primary: {
    900: "var(--primary-color)",
  },
  danger: {
    900: "var( --danger-color)",
  },
};

const fonts = {
  body: "Poppins",
  heading: "Poppins",
};

export const theme = extendTheme({
  colors,
  fonts,
});

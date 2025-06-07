import { createTheme } from "@mantine/core";

export const Apptheme = createTheme({
  colors: {
    primary: [
      "#101010",
      "#141414",
      "#232323",
      "#2d2d2d",
      "#363636",
      "#404040",
      "#4a4a4a",
      "#191919",
      "#5d5d5d",
      "#000000", // darkest
    ],
    secondary: [
      "#fff2eb",
      "#fbaf85",
      "#fbc1a8",
      "#f9a784",
      "#f88f65",
      "#d87d4a",
      "#dc5d30", // #D87D4A-ish
      "#ac4825",
      "#7c3215",
      "#4d1c07",
    ],
    tertiary: [
      "#ffffff", // lightest
      "#fefefe",
      "#fcfcfc",
      "#fafafa",
      "#f7f7f7",
      "#f4f4f4",
      "#f1f1f1", // #F1F1F1
      "#dddddd",
      "#c9c9c9",
      "#b5b5b5",
    ],
  },

  primaryColor: "primary",

  fontFamily: "Manrope, sans-serif",
});

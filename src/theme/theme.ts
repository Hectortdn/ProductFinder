import { createTheme } from "@shopify/restyle";
import { ViewStyle } from "react-native";

const palette = {
  skyBlue: "rgba(37, 103, 232, 1)",
  crimsonRed: "rgba(185, 28, 28, 1)",
  fieryRed: "rgba(230, 53, 53, 1)",

  white: "#FFFFFF",
  black: "rgba(0, 0, 0, 1)",
  darkCharcoal: "rgba(38, 38, 39, 1)",
  charcoalGray: "rgba(69, 69, 69, 1)",
  slateGray: "rgba(101, 101, 101, 1)",
  ashGray: "rgba(140, 140, 140, 1)",
  lightGray: "rgba(211, 211, 211, 1)",

  overlay: "rgba(0, 0, 0, 0.5)",
};

export const theme = createTheme({
  colors: {
    ...palette,
    background: palette.white,
    primary: palette.skyBlue,
    secondary: palette.fieryRed,
    outlines: palette.lightGray,
    error: palette.crimsonRed,
    textDefault: palette.darkCharcoal,
  },
  spacing: {
    s32: 32,
    s24: 24,
    s20: 20,
    s16: 16,
    s14: 14,
    s12: 12,
    s10: 10,
    s8: 8,
  },
  borderRadii: {
    s16: 16,
    s12: 12,
    s10: 10,
    s8: 8,
  },

  textVariants: {
    defaults: {},
  },

  zIndices: undefined,
});

export const $shadowProps: ViewStyle = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 4,
};

export type Theme = typeof theme;
export type ThemeColors = keyof Theme["colors"];

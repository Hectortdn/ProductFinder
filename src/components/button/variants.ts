import { TextStyle, ViewStyle } from "react-native";
import { theme } from "../../theme";

export type ButtonVariantsTypes = "primary" | "secondary" | "outline";

interface ButtonVariantProps {
  container: ViewStyle;
  title: TextStyle;
}

export const $buttonVariants: Record<ButtonVariantsTypes, ButtonVariantProps> =
  {
    outline: {
      container: {
        borderWidth: 1,
        backgroundColor: "transparent",
        borderColor: theme.colors.ashGray,
      },
      title: {
        color: theme.colors.ashGray,
      },
    },
    primary: {
      container: {
        backgroundColor: theme.colors.primary,
      },
      title: {
        color: "white",
      },
    },

    secondary: {
      container: {
        backgroundColor: theme.colors.fieryRed,
      },
      title: {
        color: "white",
      },
    },
  };

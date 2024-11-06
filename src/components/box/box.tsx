import {
  PressableProps,
  TouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from "react-native";

import {
  layout,
  border,
  spacing,
  position,
  createBox,
  BorderProps,
  LayoutProps,
  PositionProps,
  SpacingProps,
  backgroundColor,
  spacingShorthand,
  BackgroundColorProps,
  SpacingShorthandProps,
  createRestyleComponent,
} from "@shopify/restyle";
import { Theme } from "../../theme";

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

type RestyleTypes = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  PositionProps<Theme> &
  SpacingShorthandProps<Theme>;

export type TouchableOpacityBoxProps = RNTouchableOpacityProps & RestyleTypes;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, spacingShorthand, layout, border, position],
  TouchableOpacity
);

export type PressableBoxProps = PressableProps & RestyleTypes;
export const PressableBox = createRestyleComponent<PressableBoxProps, Theme>(
  [backgroundColor, spacing, spacingShorthand, layout, border, position],
  TouchableOpacity
);

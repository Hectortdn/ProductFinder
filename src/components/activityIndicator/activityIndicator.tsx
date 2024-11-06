import React from "react";
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from "react-native";

import { ThemeColors } from "../../theme";
import { useAppTheme } from "../../hooks";

export interface ActivityIndicatorProps extends RNActivityIndicatorProps {
  color?: ThemeColors;
}

export function ActivityIndicator({
  size = "large",
  color = "primary",
  ...activityIndicatorProps
}: ActivityIndicatorProps) {
  const { colors } = useAppTheme();
  return (
    <RNActivityIndicator
      size={size}
      color={colors[color]}
      {...activityIndicatorProps}
    />
  );
}

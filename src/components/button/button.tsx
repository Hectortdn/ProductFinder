import React from "react";

import { TouchableOpacityBox, TouchableOpacityBoxProps } from "../box/box";
import { ActivityIndicator } from "../activityIndicator/activityIndicator";
import { $buttonVariants, ButtonVariantsTypes } from "./variants";
import { Icon, IconProps } from "../icon/icon";
import { Text } from "../text/text";

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  isLoading?: boolean;
  rightIcon?: IconProps;
  variant?: ButtonVariantsTypes;
}

export function Button({
  title,
  style,
  disabled,
  isLoading,
  rightIcon,
  variant = "primary",
  ...touchableProps
}: ButtonProps) {
  const variantTheme = $buttonVariants?.[variant];

  return (
    <TouchableOpacityBox
      gap="s8"
      px="s12"
      height={45}
      borderRadius="s8"
      activeOpacity={0.6}
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      backgroundColor="primary"
      disabled={disabled || isLoading}
      style={[variantTheme.container, disabled && { opacity: 0.6 }, style]}
      {...touchableProps}
    >
      {isLoading ? (
        <ActivityIndicator color="white" size="small" />
      ) : (
        <Text size={16} weight="500" color="white" style={variantTheme.title}>
          {title}
        </Text>
      )}

      {rightIcon && <Icon color="white" {...rightIcon} />}
    </TouchableOpacityBox>
  );
}

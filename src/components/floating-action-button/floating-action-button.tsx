import React from "react";

import { TouchableOpacityBox, TouchableOpacityBoxProps } from "../box/box";
import { Icon, IconName } from "../icon/icon";
import { $shadowProps } from "../../theme";

interface FloatingActionButtonProps extends TouchableOpacityBoxProps {
  size?: number;
  iconName?: IconName;
  sizeIcon?: number;
  onAction?: () => void;
}

export function FloatingActionButton({
  iconName = "plus",
  size = 50,
  sizeIcon,
  onAction,
  ...touchableProps
}: FloatingActionButtonProps) {
  return (
    <TouchableOpacityBox
      right={16}
      bottom={16}
      overflow="hidden"
      alignItems="center"
      activeOpacity={0.6}
      position="absolute"
      justifyContent="center"
      backgroundColor="primary"
      style={[
        $shadowProps,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
      onPress={onAction}
      {...touchableProps}
    >
      <Icon name={iconName} size={sizeIcon ?? size * 0.35} color="white" />
    </TouchableOpacityBox>
  );
}

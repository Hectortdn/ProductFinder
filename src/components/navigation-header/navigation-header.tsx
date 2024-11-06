import React from "react";
import { router } from "expo-router";

import { Box, PressableBox } from "../box/box";
import { Text } from "../text/text";
import { Icon } from "../icon/icon";

export interface NavigationHeaderProps {
  title?: string;
}

export function NavigationHeader({ title }: NavigationHeaderProps) {
  return (
    <Box p="s16" gap="s16" flexDirection="row" alignItems="center">
      <PressableBox hitSlop={24} onPress={router.back}>
        <Icon name="arrow-left" size={16} />
      </PressableBox>

      {title && (
        <Text size={24} weight="600">
          {title}
        </Text>
      )}
    </Box>
  );
}

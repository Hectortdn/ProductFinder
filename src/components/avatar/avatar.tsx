import React from "react";
import { StyleSheet, ViewStyle } from "react-native";

import { Image } from "../image/image";
import { Box } from "../box/box";

interface AvatarProps {
  size?: number;
  style?: ViewStyle;
  avatarUri: string;
}

export function Avatar({ avatarUri, style, size = 100 }: AvatarProps) {
  return (
    <Box
      borderWidth={1}
      bg="background"
      overflow="hidden"
      borderColor="outlines"
      style={[{ height: size, width: size, borderRadius: size / 2 }, style]}
    >
      <Image
        width="100%"
        height="100%"
        source={{ uri: avatarUri }}
        loadIndicatorProps={{ size: "large" }}
      />
    </Box>
  );
}

const st = StyleSheet.create({
  avatarImage: {
    width: "100%",
    height: "100%",
  },
});

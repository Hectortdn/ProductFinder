import React from "react";
import { Box, BoxProps } from "../box/box";
import { StyleProp, StyleSheet } from "react-native";
import {
  ImageStyle,
  Image as EXImage,
  ImageProps as EXImageProps,
} from "expo-image";

import {
  ActivityIndicator,
  ActivityIndicatorProps,
} from "../activityIndicator/activityIndicator";

interface ImageProps
  extends BoxProps,
    Pick<EXImageProps, "contentFit" | "source"> {
  imageStyle?: StyleProp<ImageStyle>;
  loadIndicatorProps?: ActivityIndicatorProps;
}

export function Image({
  imageStyle,
  source,
  loadIndicatorProps = { size: "small" },
  ...containerProps
}: ImageProps) {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <Box alignItems="center" justifyContent="center" {...containerProps}>
      {isLoading && (
        <ActivityIndicator style={st.loadIndicator} {...loadIndicatorProps} />
      )}

      <EXImage
        source={source}
        contentFit="contain"
        style={[st.image, imageStyle]}
        onLoadEnd={() => setIsLoading(false)}
        onLoadStart={() => setIsLoading(true)}
      />
    </Box>
  );
}

const st = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
  },

  loadIndicator: {
    zIndex: 2,
    position: "absolute",
  },
});

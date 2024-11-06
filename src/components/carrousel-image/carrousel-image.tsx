import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  interpolateColor,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from "react-native-reanimated";

import { useAppTheme } from "../../hooks";
import { Image } from "../image/image";
import { Box } from "../box/box";

const screen = Dimensions.get("screen");
export const IMAGE_WIDTH = screen.width;

interface CarrouselImageProps {
  images: string[];
}

export function CarrouselImage({ images = [] }: CarrouselImageProps) {
  const scrollX = useSharedValue(0);
  const { colors } = useAppTheme();

  const scrollHandler = useAnimatedScrollHandler(
    {
      onScroll: (e) => {
        const contentOffsetX = e.contentOffset.x;
        scrollX.value = contentOffsetX;
      },
    },
    []
  );

  const renderDotPagination = (index: number) => {
    const inputRange = [
      (index - 1) * IMAGE_WIDTH,
      index * IMAGE_WIDTH,
      (index + 1) * IMAGE_WIDTH,
    ];

    const style = useAnimatedStyle(() => ({
      backgroundColor: interpolateColor(scrollX.value, inputRange, [
        colors.lightGray,
        colors.primary,
        colors.lightGray,
      ]),
    }));
    return <Animated.View style={[st.dopPagination, style]} key={index} />;
  };

  return (
    <Box>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        style={st.container}
        overScrollMode="never"
        onScroll={scrollHandler}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={st.contentContainerStyle}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            height="100%"
            width={IMAGE_WIDTH}
            source={{ uri: image }}
            loadIndicatorProps={{ size: "large" }}
          />
        ))}
      </Animated.ScrollView>
      <Box
        py="s8"
        gap="s8"
        bottom={0}
        alignSelf="center"
        position="absolute"
        flexDirection="row"
      >
        {React.Children.toArray(
          Array.from({ length: images.length }).map((_, index) =>
            renderDotPagination(index)
          )
        )}
      </Box>
    </Box>
  );
}

const st = StyleSheet.create({
  container: { flexGrow: 0 },
  contentContainerStyle: {
    height: screen.height * 0.3,
    backgroundColor: "rgba(218, 218, 218, 0.2)",
  },

  dopPagination: {
    height: 10,
    width: 10,
    borderRadius: 25,
  },
});

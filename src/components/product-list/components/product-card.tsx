import React from "react";
import { Dimensions } from "react-native";

import { Box, TouchableOpacityBox } from "../../box/box";
import { Image } from "../../image/image";
import { Text } from "../../text/text";

const screen = Dimensions.get("screen");

const SPACES_BETWEEN_ITEMS = 16;
const CARD_WIDTH = (screen.width - SPACES_BETWEEN_ITEMS * 3) * 0.5;

export interface ProductCard {
  title: string;
  price: string;
  imageUrl: string;
  description: string;
  priceDiscount: string;
  onPressCard?: () => void;
}

export function ProductCard({
  price,
  title,
  imageUrl,
  description,
  onPressCard,
  priceDiscount,
}: ProductCard) {
  return (
    <TouchableOpacityBox
      borderWidth={1}
      overflow="hidden"
      borderRadius="s8"
      width={CARD_WIDTH}
      activeOpacity={0.5}
      onPress={onPressCard}
      borderColor="outlines"
      backgroundColor="background"
    >
      <Image
        width="100%"
        source={{ uri: imageUrl }}
        height={screen.height * 0.12}
      />

      <Box gap="s8" p="s8" borderTopWidth={1} borderColor="outlines">
        <Text weight="600" numberOfLines={1}>
          {title}
        </Text>

        <Text
          size={10}
          color="slateGray"
          numberOfLines={4}
          ellipsizeMode="tail"
        >
          {description}
        </Text>

        <Box>
          <Text weight="600" size={14} style={{ marginTop: 8 }}>
            R$ {priceDiscount}
          </Text>

          {price && (
            <Text
              mt="s8"
              size={10}
              weight="600"
              color="slateGray"
              decorationLine="line-through"
            >
              R$ {price}
            </Text>
          )}
        </Box>
      </Box>
    </TouchableOpacityBox>
  );
}

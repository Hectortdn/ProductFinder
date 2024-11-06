import React from "react";

import { ActivityIndicator } from "../../activityIndicator/activityIndicator";
import { Text } from "../../text/text";
import { Box } from "../../box/box";

interface ProductListEmptyProps {
  isLoading: boolean;
}

export function ProductListEmpty({ isLoading }: ProductListEmptyProps) {
  return (
    <Box px="s16" py="s24">
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text>Nenhum produto encontrado.</Text>
      )}
    </Box>
  );
}

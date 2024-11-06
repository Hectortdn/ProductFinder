import React from "react";
import { TextStyle } from "react-native";
import { createText } from "@shopify/restyle";

import { Theme } from "../../theme";

const SRText = createText<Theme>();
type SRTextProps = React.ComponentProps<typeof SRText>;

interface TextProps extends SRTextProps {
  size?: TextStyle["fontSize"];
  weight?: TextStyle["fontWeight"];
  transform?: TextStyle["textTransform"];
  decorationLine?: TextStyle["textDecorationLine"];
}

export function Text({
  style,
  size = 16,
  transform,
  weight = "400",
  decorationLine,
  ...props
}: TextProps) {
  return (
    <SRText
      style={[
        {
          fontSize: size,
          fontWeight: weight,
          textTransform: transform,
          textDecorationLine: decorationLine,
        },
        style,
      ]}
      {...props}
    />
  );
}

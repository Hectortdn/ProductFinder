import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../../components/icon/icon";

export function Home({ color, size }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 21 18">
      <Path fill={color} d="M8.25 17.5v-6h4v6h5v-8h3l-10-9-10 9h3v8z" />
    </Svg>
  );
}

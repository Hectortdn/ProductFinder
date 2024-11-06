import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../../components/icon/icon";

export function ChevronRight({ color, size }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 11 16">
      <Path fill={color} d="M.453 14.12 6.56 8 .453 1.88 2.333 0l8 8-8 8z" />
    </Svg>
  );
}

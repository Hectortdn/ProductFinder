import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../../components/icon/icon";

export function Plus({ color, size }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14">
      <Path
        fill={color}
        d="M13 7.998H8v5a1 1 0 1 1-2 0v-5H1a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 1 1 0 2"
      />
    </Svg>
  );
}

import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../../components/icon/icon";

export function User({ color, size }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M11 11a5.33 5.33 0 0 0 5.333-5.333A5.33 5.33 0 0 0 11 .334a5.33 5.33 0 0 0-5.334 5.333A5.33 5.33 0 0 0 11 11.001m0 2.667c-3.56 0-10.667 1.787-10.667 5.334v2.666h21.333v-2.666c0-3.547-7.106-5.334-10.666-5.334"
      />
    </Svg>
  );
}

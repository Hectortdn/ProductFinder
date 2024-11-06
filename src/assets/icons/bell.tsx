import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../../components/icon/icon";

export function Bell({ color, size }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 27">
      <Path
        fill={color}
        d="M11 26.334c1.466 0 2.666-1.2 2.666-2.667H8.333A2.666 2.666 0 0 0 11 26.334m8-8v-6.667c0-4.093-2.187-7.52-6-8.426v-.907c0-1.107-.894-2-2-2-1.107 0-2 .893-2 2v.907c-3.827.906-6 4.32-6 8.426v6.667L.333 21.001v1.333h21.333v-1.333z"
      />
    </Svg>
  );
}

import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { IconBase } from "../../components/icon/icon";

export function Edit({ color, size }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 14 14">
      <G
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.167}
        clipPath="url(#a)"
      >
        <Path d="M6.418 2.332H2.335a1.167 1.167 0 0 0-1.167 1.167v8.166a1.167 1.167 0 0 0 1.167 1.167H10.5a1.167 1.167 0 0 0 1.167-1.167V7.582" />
        <Path d="M10.793 1.456a1.237 1.237 0 1 1 1.75 1.75L7.001 8.748l-2.333.583.583-2.333z" />
      </G>
    </Svg>
  );
}

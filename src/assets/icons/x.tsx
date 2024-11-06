import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../../components/icon/icon";

export function X({ color, size }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 12 12">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M11.03.97a.75.75 0 0 1 0 1.06l-9 9A.75.75 0 1 1 .97 9.97l9-9a.75.75 0 0 1 1.06 0"
        clipRule="evenodd"
      />
      <Path
        fill={color}
        fillRule="evenodd"
        d="M.97.97a.75.75 0 0 1 1.06 0l9 9a.75.75 0 1 1-1.06 1.06l-9-9a.75.75 0 0 1 0-1.06"
        clipRule="evenodd"
      />
    </Svg>
  );
}

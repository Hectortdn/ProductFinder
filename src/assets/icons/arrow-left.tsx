import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../../components/icon/icon";

export function ArrowLeft({ color, size }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 22 22">
      <Path
        fill={color}
        d="M21.333 9.333H5.107L12.56 1.88 10.667 0 0 10.667l10.667 10.666 1.88-1.88L5.107 12h16.226z"
      />
    </Svg>
  );
}

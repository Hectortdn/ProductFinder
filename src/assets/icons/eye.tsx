import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../../components/icon/icon";

export function Eye({ color, size }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 14 10">
      <Path
        stroke={color}
        strokeWidth={1.17}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.583 5.084a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.17}
        d="M1 5.083C1.933 2.693 4.113 1 6.833 1s4.9 1.693 5.834 4.083c-.934 2.39-3.113 4.084-5.834 4.084S1.933 7.473 1 5.083"
      />
    </Svg>
  );
}

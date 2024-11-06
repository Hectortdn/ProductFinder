import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../../components/icon/icon";

export function EyeOff({ color, size }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 14 15">
      <Path
        stroke={color}
        strokeWidth={1.17}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.76 6.266a1.75 1.75 0 1 0 2.473 2.473M6.258 3.465q.37-.047.74-.047c4.084 0 5.834 4.083 5.834 4.083a7.7 7.7 0 0 1-.974 1.564"
      />
      <Path
        stroke={color}
        strokeWidth={1.17}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.853 4.36a7.9 7.9 0 0 0-2.689 3.144s1.75 4.083 5.833 4.083a5.7 5.7 0 0 0 3.145-.94M1.164 1.668l11.667 11.667"
      />
    </Svg>
  );
}

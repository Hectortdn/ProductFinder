import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../../components/icon/icon";

export function AlertCircle({ color, size }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 16 16">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M.668 8.005a7.333 7.333 0 1 1 14.667 0 7.333 7.333 0 0 1-14.667 0m7.333-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12"
        clipRule="evenodd"
      />
      <Path
        fill={color}
        fillRule="evenodd"
        d="M8.003 4.672c.368 0 .666.298.666.667v2.666a.667.667 0 0 1-1.333 0V5.34c0-.369.298-.667.667-.667M7.336 10.667c0-.368.298-.667.667-.667h.006a.667.667 0 0 1 0 1.333h-.006a.667.667 0 0 1-.667-.666"
        clipRule="evenodd"
      />
    </Svg>
  );
}

import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../../components/icon/icon";

export function FileEdit({ color, size }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 26 28">
      <Path
        fill={color}
        d="M13.666 24.507v2.826h2.827l6.893-6.893-2.827-2.827zM21.666 8.666l-8-8H3A2.663 2.663 0 0 0 .346 3.333L.333 24.666a2.663 2.663 0 0 0 2.653 2.667H11v-3.934l10.666-10.666zm-9.333 1.333V2.666l7.333 7.333zM25.28 16.667l-.948-.947c-.52-.52-1.36-.52-1.88 0l-.946.947 2.826 2.826.947-.946c.52-.52.52-1.36 0-1.88"
      />
    </Svg>
  );
}

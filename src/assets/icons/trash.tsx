import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../../components/icon/icon";

export function Trash({ color, size }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 12 14">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M.164 3.505c0-.322.261-.583.583-.583h10.5a.583.583 0 1 1 0 1.167H.747a.583.583 0 0 1-.583-.584"
        clipRule="evenodd"
      />
      <Path
        fill={color}
        fillRule="evenodd"
        d="M1.911 2.922c.323 0 .584.261.584.583v8.167c0 .102.057.253.194.39.136.136.287.193.39.193H8.91c.102 0 .253-.057.39-.194.137-.136.194-.287.194-.39V3.506a.583.583 0 1 1 1.167 0v8.167c0 .481-.235.914-.536 1.214-.3.301-.733.536-1.215.536H3.078c-.481 0-.914-.235-1.214-.536-.301-.3-.536-.733-.536-1.214V3.505c0-.322.261-.583.583-.583"
        clipRule="evenodd"
      />
      <Path
        fill={color}
        fillRule="evenodd"
        d="M4.442 1.946c-.136.137-.193.288-.193.39v1.167a.583.583 0 1 1-1.167 0V2.336c0-.481.235-.914.535-1.215.301-.3.734-.535 1.215-.535h2.333c.482 0 .914.235 1.215.535.3.301.535.734.535 1.215v1.167a.583.583 0 1 1-1.166 0V2.336c0-.102-.057-.253-.194-.39s-.288-.193-.39-.193H4.832c-.102 0-.253.056-.39.193"
        clipRule="evenodd"
      />
    </Svg>
  );
}

import React from "react";

import { PressableBox, PressableBoxProps } from "../box/box";
import { useAppTheme } from "../../hooks";
import { ThemeColors } from "../../theme";

//Icons
import { ChevronRight } from "../../assets/icons/chevron-right";
import { AlertCircle } from "../../assets/icons/alert-circle";
import { ArrowLeft } from "../../assets/icons/arrow-left";
import { FileEdit } from "../../assets/icons/file-edit";
import { EyeOff } from "../../assets/icons/eye-off";
import { Trash } from "../../assets/icons/trash";
import { Gear } from "../../assets/icons/gear";
import { Home } from "../../assets/icons/home";
import { User } from "../../assets/icons/user";
import { Plus } from "../../assets/icons/plus";
import { Bell } from "../../assets/icons/bell";
import { Edit } from "../../assets/icons/edit";
import { Eye } from "../../assets/icons/eye";
import { X } from "../../assets/icons/x";

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps extends IconBase, PressableBoxProps {
  name: IconName;
  color?: ThemeColors;
}

export function Icon({
  name,
  size = 16,
  color = "black",
  onPress,
  ...pressableProps
}: IconProps) {
  const { colors } = useAppTheme();
  const SVGIcon = iconRegistry[name];

  if (!SVGIcon) return null;

  return (
    <PressableBox
      disabled={!onPress}
      hitSlop={10}
      onPress={onPress}
      {...pressableProps}
    >
      <SVGIcon size={size} color={colors[color]} />
    </PressableBox>
  );
}

const iconRegistry = {
  x: X,
  eye: Eye,
  gear: Gear,
  home: Home,
  plus: Plus,
  user: User,
  edit: Edit,
  bell: Bell,
  trash: Trash,
  "eye-off": EyeOff,
  "file-edit": FileEdit,
  "arrow-left": ArrowLeft,
  "alert-circle": AlertCircle,
  "chevron-right": ChevronRight,
};

export type IconName = keyof typeof iconRegistry;

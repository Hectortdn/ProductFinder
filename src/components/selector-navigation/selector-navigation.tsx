import React from "react";
import { router, Routes } from "expo-router";

import { Box, TouchableOpacityBox, TouchableOpacityBoxProps } from "../box/box";
import { Icon, IconName } from "../icon/icon";
import { Text } from "../text/text";

interface SelectorNavigationProps extends TouchableOpacityBoxProps {
  label: string;
  iconName: IconName;
  navigateRoute?: Routes;
}

export function SelectorNavigation({
  label,
  iconName,
  navigateRoute,
  ...touchableProps
}: SelectorNavigationProps) {
  const handleNavigate = () => {
    if (navigateRoute) {
      router.navigate(navigateRoute);
    }
  };

  return (
    <TouchableOpacityBox
      activeOpacity={0.6}
      onPress={handleNavigate}
      {...containerProps}
      {...touchableProps}
    >
      <Box gap="s12" alignItems="center" flexDirection="row" flex={1}>
        <Icon size={24} name={iconName} color="charcoalGray" />

        <Text size={16} weight="500" color="charcoalGray">
          {label}
        </Text>
      </Box>

      <Icon name="chevron-right" size={14} color="charcoalGray"/>
    </TouchableOpacityBox>
  );
}

const containerProps: TouchableOpacityBoxProps = {
  gap: "s8",
  padding: "s8",
  width: "100%",
  borderWidth: 1,
  borderRadius: "s8",
  alignItems: "center",
  flexDirection: "row",
  borderColor: "outlines",
  justifyContent: "space-between",
};

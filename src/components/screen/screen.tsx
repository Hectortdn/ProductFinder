import React from "react";
import {
  Platform,
  ViewProps,
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import {
  NavigationHeader,
  NavigationHeaderProps,
} from "../navigation-header/navigation-header";
import { KeyboardAvoiding } from "../keyboard-avoiding/keyboard-avoiding";
import { ScrollContainer, ViewContainer } from "./components/containers";
import { ThemeColors } from "../../theme";
import { useAppTheme } from "../../hooks";

interface ScreenProps extends ViewProps {
  bgColor?: ThemeColors;
  scrollable?: boolean;
  headerProps?: NavigationHeaderProps & { headerShow?: boolean };
}

export function Screen({
  style,
  children,
  scrollable = false,
  bgColor = "background",
  headerProps = { headerShow: true, title: "" },
  ...props
}: ScreenProps) {
  const { colors } = useAppTheme();
  const { headerShow = true, title } = headerProps;

  const Container = scrollable ? ScrollContainer : ViewContainer;

  return (
    <KeyboardAvoiding>
      <SafeAreaView
        style={[st.container, { backgroundColor: colors[bgColor] }]}
        {...props}
      >
        {headerShow && <NavigationHeader title={title} />}
        <Container style={style}>{children}</Container>
      </SafeAreaView>
    </KeyboardAvoiding>
  );
}

const st = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

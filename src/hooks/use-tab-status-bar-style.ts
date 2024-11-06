import { useFocusEffect } from "expo-router";
import { useIsFocused } from "@react-navigation/native";
import { StatusBar, StatusBarStyle } from "react-native";

export function useTabStatusBarStyle(
  style: StatusBarStyle,
  animated: boolean = false
) {
  const isFocused = useIsFocused();

  useFocusEffect(() => {
    if (isFocused) {
      StatusBar.setBarStyle(style, animated);
    }
  });
}

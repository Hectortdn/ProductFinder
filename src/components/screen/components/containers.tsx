import React from "react";
import {
  View,
  ViewStyle,
  StyleProp,
  StyleSheet,
  ScrollView,
} from "react-native";

interface Container {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function ScrollContainer({ children, style }: Container) {
  return (
    <ScrollView
      children={children}
      nestedScrollEnabled
      overScrollMode="never"
      keyboardShouldPersistTaps='always'
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[st.scrollContainer, style]}
    />
  );
}

export function ViewContainer({ children, style }: Container) {
  return <View children={children} style={[st.viewContainer, style]} />;
}

const st = StyleSheet.create({
  viewContainer: { flex: 1 },
  scrollContainer: { flexGrow: 1 },
});

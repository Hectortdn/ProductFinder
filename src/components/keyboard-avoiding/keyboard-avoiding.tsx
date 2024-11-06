import React from "react";
import {
  Platform,
  StyleSheet,
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
} from "react-native";

export function KeyboardAvoiding({
  style,
  ...props
}: Omit<KeyboardAvoidingViewProps, "behavior">) {
  return (
    <KeyboardAvoidingView
      style={[style, st.container]}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      {...props}
    />
  );
}

const st = StyleSheet.create({ container: { flex: 1 } });

import React from "react";
import {
  Platform,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";

import { Box, BoxProps } from "../box/box";
import { useAppTheme } from "../../hooks";
import { Text } from "../text/text";
import { Icon } from "../icon/icon";

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  errorMessage?: string;
  rightIcon?: React.ElementType;
}

export function TextInput({
  label,
  style,
  errorMessage,
  rightIcon: RightIcon,
  ...textInputProps
}: TextInputProps) {
  const hasError = !!errorMessage;
  const { colors } = useAppTheme();

  return (
    <Box width="100%" gap="s8">
      {label && (
        <Text size={16} weight="500">
          {label}
        </Text>
      )}

      <Box
        {...inputContainer}
        style={[hasError && { borderColor: colors.error, borderWidth: 2 }]}
      >
        <RNTextInput
          selectionColor={colors.primary}
          style={[style, st.input, { color: colors.slateGray }]}
          {...textInputProps}
        />

        {RightIcon && <RightIcon />}
      </Box>

      {hasError && (
        <Box gap="s8" flexDirection="row" alignItems="center">
          <Icon name="alert-circle" color="error"/>
          <Text size={12} weight="500" color="error">
            {errorMessage}
          </Text>
        </Box>
      )}
    </Box>
  );
}

const inputContainer: BoxProps = {
  borderWidth: 1,
  borderRadius: "s8",
  alignItems: "center",
  flexDirection: "row",
  paddingHorizontal: "s12",
  borderColor: "lightGray",
  paddingVertical: Platform.select({ ios: "s12", android: "s8" }),
};

const st = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 14,
  },
});

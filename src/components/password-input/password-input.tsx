import React from "react";

import { TextInput, TextInputProps } from "../text-input/text-input";
import { Icon } from "../icon/icon";

export interface PasswordInputProps
  extends Omit<TextInputProps, "rightIcon" | "secureTextEntry"> {}

export function PasswordInput({ ...props }: PasswordInputProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleIconPress = () => setShowPassword((prev) => !prev);

  return (
    <TextInput
      autoCapitalize="none"
      secureTextEntry={!showPassword}
      rightIcon={() => (
        <Icon
          size={20}
          color="slateGray"
          onPress={handleIconPress}
          name={showPassword ? "eye-off" : "eye"}
        />
      )}
      {...props}
    />
  );
}

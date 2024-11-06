import React from "react";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";

import {
  PasswordInput,
  PasswordInputProps,
} from "../password-input/password-input";

export type FormPasswordInputProps<TForm extends FieldValues> =
  PasswordInputProps & UseControllerProps<TForm>;

export function FormPasswordInput<FormType extends FieldValues>({
  name,
  rules,
  label,
  control,
}: FormPasswordInputProps<FormType>) {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <PasswordInput
          label={label}
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={error?.message}
        />
      )}
    />
  );
}

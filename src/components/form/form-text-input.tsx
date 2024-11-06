import React from "react";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";

import { TextInput, TextInputProps } from "../text-input/text-input";

export type FormTextInputProps<TForm extends FieldValues> = TextInputProps &
  UseControllerProps<TForm>;

export function FormTextInput<FormType extends FieldValues>({
  name,
  rules,
  label,

  control,
  ...textInputProps
}: FormTextInputProps<FormType>) {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextInput
          label={label}
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={error?.message}
          {...textInputProps}
        />
      )}
    />
  );
}

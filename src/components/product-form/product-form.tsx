import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { productFormSchema, ProductFormSchema } from "./schema";
import { FormTextInput } from "../form/form-text-input";
import { Button } from "../button/button";
import { Box } from "../box/box";

interface ProductFormProps {
  isLoadingSubmit?: boolean;
  defaultValues?: ProductFormSchema;
  onSubmit: (product: ProductFormSchema) => void;
}

export function ProductForm({
  onSubmit,
  defaultValues,
  isLoadingSubmit,
}: ProductFormProps) {
  const { handleSubmit, control, formState } = useForm<ProductFormSchema>({
    mode: "onChange",
    defaultValues,
    resolver: zodResolver(productFormSchema),
  });

  return (
    <Box px="s20" pb="s20" flex={1} gap="s32">
      <Box flex={1} gap="s20" pt="s16">
        <FormTextInput
          label="Nome"
          name="title"
          control={control}
          placeholder="Nome do produto"
        />
        <FormTextInput
          label="Descrição"
          control={control}
          name="description"
          placeholder="Descrição do produto"
        />
        <FormTextInput
          name="price"
          control={control}
          label="Preço (R$)"
          keyboardType="numeric"
          placeholder="Preço do produto"
        />
        <FormTextInput
          control={control}
          label="Desconto (%)"
          name="discountPercentage"
          keyboardType="numeric"
          placeholder="Desconto do produto"
        />
        <FormTextInput
          name="images"
          control={control}
          label="URL da imagem"
          autoCapitalize="none"
          placeholder="URL da imagem do produto"
        />
      </Box>
      <Button
        title="Salvar"
        isLoading={isLoadingSubmit}
        onPress={handleSubmit(onSubmit)}
        disabled={!formState.isValid || !formState.isDirty}
      />
    </Box>
  );
}

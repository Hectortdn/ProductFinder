import React from "react";
import { router, useLocalSearchParams } from "expo-router";

import { Modal, Screen, ProductForm, ModalProps } from "../../components";
import { ProductFormSchema } from "../../components/product-form/schema";
import { ProductProps, useUpdateProduct } from "../../domain";

export default function ProductEdit() {
  const screenParams = useLocalSearchParams<{ productDetails: string }>();
  const productDetails: ProductProps = JSON.parse(screenParams.productDetails);

  const { isLoading, productUpdate } = useUpdateProduct(productDetails.id, {
    onError: () => Modal.set(MODAL_PRODUCT_SAVE_ERROR),
    onSuccess: () =>
      Modal.set({
        ...MODAL_PRODUCT_SAVE_SUCCESS,
        buttonPrimary: {
          title: "Ok",
          variant: "primary",
          onPress: () => {
            Modal.hide();
            router.back();
          },
        },
      }),
  });

  const handleSave = (productFormData: ProductFormSchema) => {
    Modal.set({
      ...MODAL_PRODUCT_SAVE,
      buttonPrimary: {
        variant: "primary",
        title: "Editar",
        onPress: () => {
          Modal.hide();
          const { images, ...props } = productFormData;
          productUpdate({
            ...props,
            images: images.split(", "),
          });
        },
      },
    });
  };
  return (
    <Screen scrollable headerProps={{ title: "Editar produto" }}>
      <ProductForm
        onSubmit={handleSave}
        isLoadingSubmit={isLoading}
        defaultValues={{
          ...productDetails,
          images: productDetails.images.join(", "),
        }}
      />
    </Screen>
  );
}

const MODAL_PRODUCT_SAVE: ModalProps = {
  title: "Editar produto",
  description:
    "Você tem certeza que deseja editar esse produto? Essa ação não poderá ser desfeita.",

  buttonSecondary: { title: "Cancelar", onPress: Modal.hide },
};

const MODAL_PRODUCT_SAVE_SUCCESS: ModalProps = {
  title: "Successo!",
  description: "Seu produto foi editado com sucesso.",
};

const MODAL_PRODUCT_SAVE_ERROR: ModalProps = {
  title: "Erro!",
  description:
    "Não foi possivel atualizar o produto no momento, tente novamente mais tarde.",
  buttonPrimary: {
    title: "Entendi",
    onPress: Modal.hide,
    variant: "secondary",
  },
};

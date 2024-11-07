import { router } from "expo-router";

import { ProductFormSchema } from "@components/product-form/schema";
import { Modal, ModalProps, ProductForm, Screen } from "@components";
import { useRegisterProduct } from "@domain";

export default function ProductRegister() {
  const { registerProduct, isLoadingProductRegister } = useRegisterProduct({
    onError: () => Modal.set(MODAL_PRODUCT_REGISTER_ERROR),
    onSuccess: () =>
      Modal.set({
        ...MODAL_PRODUCT_REGISTER_SUCCESS,
        buttonPrimary: {
          title: "OK",
          variant: "primary",
          onPress: () => {
            Modal.hide();
            router.back();
          },
        },
      }),
  });

  const handleRegister = (productForm: ProductFormSchema) => {
    registerProduct({
      ...productForm,
      price: Number(productForm.price),
      images: productForm.images.split(", "),
      discountPercentage: Number(productForm.discountPercentage),
    });
  };

  return (
    <Screen scrollable headerProps={{ title: "Adicionar produto" }}>
      <ProductForm
        onSubmit={handleRegister}
        isLoadingSubmit={isLoadingProductRegister}
      />
    </Screen>
  );
}

const MODAL_PRODUCT_REGISTER_SUCCESS: ModalProps = {
  title: "Sucesso!",
  description: "Seu produto foi registrado com sucesso",
};

const MODAL_PRODUCT_REGISTER_ERROR: ModalProps = {
  title: "Erro!",
  buttonPrimary: { title: "Entendi", onPress: Modal.hide },
  description:
    "Não foi possível registrar este produto no momento, tente novamente mais tarde.",
};

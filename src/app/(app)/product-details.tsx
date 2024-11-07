import React from "react";
import { router, useLocalSearchParams } from "expo-router";

import {
  Box,
  Text,
  Modal,
  Button,
  Screen,
  ModalProps,
  CarrouselImage,
  ActivityIndicator,
} from "@components";
import { useDeleteProduct, useGetProductDetails } from "@domain";

export default function ProductDetails() {
  const screenParams = useLocalSearchParams<{ productId: string }>();
  const productId: number = JSON.parse(screenParams.productId);

  const { productDetails, isLoadingProductDetails } =
    useGetProductDetails(productId);
  const { deleteProduct } = useDeleteProduct(productId, {
    onSuccess: () => {
      Modal.set({
        ...MODAL_PRODUCT_DELETE_SUCCESS,
        buttonPrimary: {
          title: "OK",
          onPress: () => {
            router.back();
            Modal.hide();
          },
        },
      });
    },
    onError: () => Modal.set(MODAL_PRODUCT_DELETE_ERROR),
  });

  const handleProductEdit = () => {
    if (productDetails) {
      router.navigate({
        pathname: "/product-edit",
        params: { productDetails: JSON.stringify(productDetails) },
      });
    }
  };

  const handleProductDelete = () => {
    Modal.set({
      ...MODAL_PRODUCT_DELETE,
      buttonPrimary: { title: "Excluir", onPress: () => deleteProduct() },
    });
  };

  if (isLoadingProductDetails) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator size={"large"} />
      </Box>
    );
  }

  return (
    <Screen>
      <CarrouselImage images={productDetails?.images ?? []} />

      <Box flex={1} g="s8" p="s20">
        <Text size={24} weight="600">
          {productDetails?.title}
        </Text>

        <Box flexDirection="row" g="s8" alignItems="center">
          <Text size={20} color="error" weight={700}>
            {productDetails?.priceDiscount}
          </Text>
          <Text decorationLine="line-through" weight={700} color="slateGray">
            {productDetails?.price}
          </Text>
        </Box>

        <Text size={16} color="slateGray">
          {productDetails?.description}
        </Text>
      </Box>

      <Box g="s8" p="s20">
        <Button
          title="Editar"
          onPress={handleProductEdit}
          rightIcon={{ name: "edit" }}
          disabled={isLoadingProductDetails}
        />
        <Button
          title="Excluir"
          variant="secondary"
          rightIcon={{ name: "trash" }}
          onPress={handleProductDelete}
          disabled={isLoadingProductDetails}
        />
      </Box>
    </Screen>
  );
}

const MODAL_PRODUCT_DELETE_SUCCESS: ModalProps = {
  title: "Successo!",
  description: "Produto deletado com sucesso.",
};

const MODAL_PRODUCT_DELETE: ModalProps = {
  title: "Excluir produto",
  description:
    "Você tem certeza que deseja excluir esse produto? Essa ação não poderá ser desfeita.",

  buttonSecondary: { title: "Cancelar", onPress: Modal.hide },
};

const MODAL_PRODUCT_DELETE_ERROR: ModalProps = {
  title: "Erro!",
  description:
    "Não foi possível deletar este produto no momento, tente novamente mais tarde.",

  buttonPrimary: { title: "Entendi", onPress: Modal.hide },
};

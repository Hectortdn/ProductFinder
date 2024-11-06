import React from "react";
import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";

import {
  ProductProps,
  ProductCategories,
} from "../../domain/product/productTypes";
import { ProductListEmpty } from "./components/product-list-empty";
import { useGetProductByCategories } from "../../domain";
import { ProductCard } from "./components/product-card";

type ProductGenderTypes = "man" | "women";

interface ProductListProps {
  gender: ProductGenderTypes;
  onProductDetails: (id: number) => void;
}

export function ProductList({ onProductDetails, gender }: ProductListProps) {
  const categories = productsCategoriesByGender?.[gender];
  const { isLoadingProducts, products } = useGetProductByCategories(categories);

  const renderItem = React.useCallback(
    ({ item }: ListRenderItemInfo<ProductProps>) => (
      <ProductCard
        title={item.title}
        price={item.price}
        imageUrl={item.images[0]}
        description={item.description}
        priceDiscount={item.priceDiscount}
        onPressCard={() => onProductDetails(item.id)}
      />
    ),
    []
  );

  return (
    <FlatList
      numColumns={2}
      data={products}
      overScrollMode="never"
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={({ id }) => id.toString()}
      columnWrapperStyle={st.columnWrapperStyle}
      contentContainerStyle={st.contentContainerStyle}
      ListEmptyComponent={<ProductListEmpty isLoading={isLoadingProducts} />}
    />
  );
}

const st = StyleSheet.create({
  contentContainerStyle: {
    gap: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  columnWrapperStyle: { gap: 16 },
});

const productsCategoriesByGender: Record<
  ProductGenderTypes,
  ProductCategories[]
> = {
  man: ["mens-shirts", "mens-shoes", "mens-watches"],
  women: [
    "womens-bags",
    "womens-shoes",
    "womens-dresses",
    "womens-watches",
    "womens-jewellery",
  ],
};

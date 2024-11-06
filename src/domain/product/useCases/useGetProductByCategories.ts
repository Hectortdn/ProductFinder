import { useQueries, UseQueryOptions } from "@tanstack/react-query";

import { ProductCategories, ProductProps } from "../productTypes";
import { productServices } from "../productServices";

export function useGetProductByCategories(categories: ProductCategories[]) {
  const enabledQueries = categories?.length > 0;

  const queries: UseQueryOptions<ProductProps[]>[] = categories.map(
    (category) => ({
      enabled: enabledQueries,
      queryKey: ["productByCategory", category],
      queryFn: () => productServices.getProductByCategory(category),
    })
  );

  const queriesResponse = useQueries({
    queries,
    combine: (results) => {
      return {
        data: results.map((result) => result.data ?? []).flat(),
        isLoading: results.some((result) => result.isPending),
      };
    },
  });

  return {
    products: queriesResponse.data,
    isLoadingProducts: queriesResponse.isLoading,
  };
}

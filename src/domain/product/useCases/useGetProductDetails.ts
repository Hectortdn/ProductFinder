import { useQuery } from "@tanstack/react-query";

import { productServices } from "../productServices";

export function useGetProductDetails(productId: number) {
  const query = useQuery({
    queryKey: ["productDetails", productId],
    queryFn: () => productServices.getProductDetails(productId),
  });

  return {
    productDetails: query.data,
    isLoadingProductDetails: query.isPending,
  };
}

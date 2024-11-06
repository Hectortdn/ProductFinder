import { useMutation } from "@tanstack/react-query";

import { ProductProps } from "../productTypes";
import { productServices } from "../productServices";
import { RequestOptions } from "../../types";

export function useUpdateProduct(productId: number, options?: RequestOptions) {
  const mutation = useMutation<ProductProps, unknown, Partial<ProductProps>>({
    mutationKey: [productId],
    mutationFn: (dataUpdated) =>
      productServices.updateProduct(productId, dataUpdated),
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  });

  return {
    isLoading: mutation.isPending,
    productUpdate: mutation.mutate,
  };
}

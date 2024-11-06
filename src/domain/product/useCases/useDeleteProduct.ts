import { useMutation } from "@tanstack/react-query";
import { productServices } from "../productServices";
import { RequestOptions } from "../../types";

export function useDeleteProduct(productId: number, options?: RequestOptions) {
  const mutation = useMutation({
    mutationFn: () => productServices.deleteProduct(productId),
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  });

  return {
    deleteProduct: mutation.mutate,
    isLoadingProductDelete: mutation.isPending,
  };
}

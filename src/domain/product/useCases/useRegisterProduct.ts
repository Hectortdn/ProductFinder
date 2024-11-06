import { useMutation, useQueryClient } from "@tanstack/react-query";

import { productServices } from "../productServices";
import { RequestOptions } from "../../types";

export function useRegisterProduct(options?: RequestOptions) {
  const mutation = useMutation({
    mutationFn: productServices.registerProduct,
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  });

  return {
    registerProduct: mutation.mutate,
    isLoadingProductRegister: mutation.isPending,
  };
}

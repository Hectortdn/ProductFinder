import { useMutation } from "@tanstack/react-query";

import { userServices } from "../../../services";
import { authServices } from "../authServices";
import { RequestOptions } from "../../types";

export function useAuthLogin(options?: RequestOptions) {
  const { setUser } = userServices();
  const mutation = useMutation({
    retry: false,
    mutationFn: authServices.login,
    onSuccess: (adaptedUser) => {
      setUser(adaptedUser);
      options?.onSuccess?.();
    },
    onError: () => {
      options?.onError?.();
    },
  });

  return {
    login: mutation.mutate,
    isLoading: mutation.isPending,
  };
}

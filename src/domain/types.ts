export interface RequestOptions {
  onSuccess?: <TData>(data?: TData) => void;
  onError?: <TError>(data?: TError) => void;
}

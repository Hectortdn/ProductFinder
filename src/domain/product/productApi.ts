import {
  ProductCategories,
  ProductProps,
  ProductPropsAPI,
  ProductRegister,
} from "./productTypes";
import { api } from "../../api";

async function getProductByCategory(
  category: ProductCategories
): Promise<ProductPropsAPI[]> {
  const productResponse = await api.get<{ products: ProductPropsAPI[] }>(
    `products/category/${category}`
  );

  return productResponse.data.products;
}

async function getProductDetails(productId: number): Promise<ProductPropsAPI> {
  const productDetailsResponse = await api.get(`products/${productId}`);

  return productDetailsResponse.data;
}

async function updateProduct(
  productId: number,
  dataUpdated: Partial<ProductPropsAPI>
): Promise<ProductPropsAPI> {
  const productUpdatedResponse = await api.put(
    `products/${productId}`,
    dataUpdated
  );

  return productUpdatedResponse.data;
}

async function deleteProduct(
  productId: number
): Promise<ProductPropsAPI & { isDeleted: boolean; deletedOn: string }> {
  const productDeletedResponse = await api.delete(`products/${productId}`);

  return productDeletedResponse.data;
}

async function registerProduct(
  productForm: ProductRegister
): Promise<ProductPropsAPI & { isDeleted: boolean; deletedOn: string }> {
  const productDeletedResponse = await api.post("products/add", productForm);

  return productDeletedResponse.data;
}

export const productApi = {
  updateProduct,
  deleteProduct,
  registerProduct,
  getProductDetails,
  getProductByCategory,
};

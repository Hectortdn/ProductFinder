import {
  ProductCategories,
  ProductProps,
  ProductRegister,
} from "./productTypes";
import { productAdapter } from "./productAdapter";
import { productApi } from "./productApi";

async function getProductByCategory(category: ProductCategories) {
  const products = await productApi.getProductByCategory(category);

  return products.map((product) => productAdapter.toProduct(product));
}

async function getProductDetails(productId: number) {
  const productDetails = await productApi.getProductDetails(productId);

  return productAdapter.toProduct(productDetails);
}

async function updateProduct(
  productId: number,
  dataUpdated: Partial<ProductProps>
) {
  const productUpdated = await productApi.updateProduct(
    productId,
    productAdapter.toUpdateProduct(dataUpdated)
  );

  return productAdapter.toProduct(productUpdated);
}

async function deleteProduct(productId: number) {
  const productDeleted = await productApi.deleteProduct(productId);

  return productDeleted;
}

async function registerProduct(productForm: ProductRegister) {
  const productRegistered = await productApi.registerProduct(productForm);

  return productRegistered;
}

export const productServices = {
  updateProduct,
  deleteProduct,
  registerProduct,
  getProductDetails,
  getProductByCategory,
};

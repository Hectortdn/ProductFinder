import { calculateDiscountedProductPrice } from "../../utils";
import { ProductProps, ProductPropsAPI } from "./productTypes";

function toProduct(product: ProductPropsAPI): ProductProps {
  const priceDiscount = calculateDiscountedProductPrice(
    product.price,
    product.discountPercentage
  );

  return {
    priceDiscount,
    id: product.id,
    title: product.title,
    images: product.images,
    price: product.price.toString(),
    description: product.description,
    discountPercentage: product.discountPercentage.toString(),
  };
}

function toUpdateProduct(
  productForm: Partial<ProductProps>
): Partial<ProductPropsAPI> {
  const updatedProduct: Partial<ProductPropsAPI> = {};

  if (productForm.price) {
    updatedProduct.price = Number(productForm.price);
  }

  if (productForm.discountPercentage) {
    updatedProduct.price = Number(productForm.price);
  }

  return Object.assign(updatedProduct, productForm);
}

export const productAdapter = {
  toProduct,
  toUpdateProduct,
};

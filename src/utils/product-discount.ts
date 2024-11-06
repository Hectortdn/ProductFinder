export function calculateDiscountedProductPrice(
  price: number,
  discountPercentage: number
) {
  const discountAmount = price * (discountPercentage / 100);
  const newPrice = price - discountAmount;
  return newPrice.toFixed(2);
}

type ManCategory = "mens-shirts" | "mens-shoes" | "mens-watches";
type WomanCategory =
  | "womens-bags"
  | "womens-shoes"
  | "womens-dresses"
  | "womens-jewellery"
  | "womens-watches";

export type ProductCategories = ManCategory | WomanCategory;

interface ProductReviewProps {
  rating: number;
  date: string;
  comment: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductPropsAPI {
  id: number;
  sku: string;
  price: number;
  stock: number;
  tags: string[];
  brand: string;
  weight: number;
  title: string;
  rating: number;
  category: string;
  description: string;
  returnPolicy: string;
  discountPercentage: number;
  availabilityStatus: string;
  warrantyInformation: string;
  shippingInformation: string;
  minimumOrderQuantity: number;
  reviews: ProductReviewProps[];
  dimensions: { width: number; height: number; depth: number };
  meta: {
    qrCode: string;
    barcode: string;
    createdAt: string;
    updatedAt: string;
  };
  thumbnail: string;
  images: string[];
}

export interface ProductProps {
  id: number;
  title: string;
  price: string;
  images: string[];
  description: string;
  priceDiscount: string;
  discountPercentage: string;
}

export type ProductRegister = Pick<
  ProductPropsAPI,
  "title" | "description" | "price" | "discountPercentage" | "images"
>;

import { z } from "zod";

export const productFormSchema = z.object({
  title: z.string().min(1, "Campo Obrigatorio"),
  price: z.string().min(1, "Campo Obrigatorio"),
  description: z.string().min(1, "Campo Obrigatorio"),
  discountPercentage: z.string().min(1, "Campo Obrigatorio").optional(),
  images: z.string().min(1, "Campo Obrigatorio")
});

export type ProductFormSchema = z.infer<typeof productFormSchema>;

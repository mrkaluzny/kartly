import { BASE_URL } from "@/utils/base-url";
import { Product } from "@/types/product";

export const requestProduct = async (id: string): Promise<Product> => {
  const res: Response = await fetch(`${BASE_URL}/products/${id}`);
  const json: Product = await res.json();

  return json;
};

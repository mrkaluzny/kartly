import { BASE_URL } from "@/utils/base-url";
import { Product } from "@/types/product";

export const requestProducts = async (): Promise<Product[]> => {
  const res: Response = await fetch(`${BASE_URL}/products`);
  const json: Product[] = await res.json();

  return json;
};

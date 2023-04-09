import { Product } from "@/types/product";
import { UseProducts } from "@/types/use-products";
import { requestProducts } from "@/utils/request-products";
import { useQuery } from "@tanstack/react-query";

export const useProducts = (): UseProducts => {
  const { data, isLoading, error } = useQuery<Product[]>(
    ["products"],
    requestProducts
  );

  return { data, isLoading, error };
};

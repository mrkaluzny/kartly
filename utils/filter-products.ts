import { Product } from "@/types/product";

export const filterProducts = (
  products: Product[] = [],
  productSearchQuery: string
): Product[] => {
  const titleFilter = (product: Product): boolean => {
    const title = product.title.toLowerCase();
    const searchQuery = productSearchQuery.toLowerCase();

    return title.includes(searchQuery);
  };

  const filteredProducts: Product[] = products.filter(titleFilter);

  return filteredProducts;
};

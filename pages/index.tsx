import LoadingProductCard from "@/components/loadingProductCard";
import NoProductMessage from "@/components/noProductMessage";
import ProductCard from "@/components/productCard";
import ProductCardsContainer from "@/components/productCardsContainer";
import SearchProducts from "@/components/searchProducts";
import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/types/product";
import { filterProducts } from "@/utils/filter-products";
import { requestProducts } from "@/utils/request-products";
import ErrorPage from "next/error";
import { useState } from "react";

const Home = ({ initialProducts }): JSX.Element => {
  console.log(initialProducts);
  const [productSearchQuery, setProductSearchQuery] = useState<string>("");

  const { data: products, isLoading, error } = useProducts(initialProducts);

  console.log("products", products);

  const filteredProducts = filterProducts(products, productSearchQuery);

  if (error) {
    return (
      <ErrorPage
        title="There was an error retrieving the products. Please refresh the page and try again"
        statusCode={404}
        withDarkMode={false}
      />
    );
  }
  return (
    <>
      <SearchProducts
        productSearchQuery={productSearchQuery}
        setProductSearchQuery={setProductSearchQuery}
      />
      <ProductCardsContainer>
        {isLoading && !filteredProducts ? (
          Array.from({ length: 10 }).map((_, index) => (
            <LoadingProductCard key={index} />
          ))
        ) : filteredProducts.length ? (
          filteredProducts.map((product: Product) => (
            <ProductCard key={product.id} {...product} />
          ))
        ) : (
          <NoProductMessage message="No product found!" />
        )}
      </ProductCardsContainer>
    </>
  );
};

export async function getStaticProps() {
  const initialProducts = await requestProducts();
  return {
    props: {
      initialProducts,
    },
  };
}
export default Home;

import LoadingProductCard from "@/components/loadingProductCard";
import NoProductMessage from "@/components/noProductMessage";
import ProductCard from "@/components/productCard";
import ProductCardsContainer from "@/components/productCardsContainer";
import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/types/product";
import ErrorPage from "next/error";

const Home = (): JSX.Element => {
  const { data: products, isLoading, error } = useProducts();

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
      <ProductCardsContainer>
        {isLoading ? (
          Array.from({ length: 10 }).map((_, index) => (
            <LoadingProductCard key={index} />
          ))
        ) : products?.length ? (
          products?.map((product: Product) => (
            <ProductCard key={product.id} {...product} />
          ))
        ) : (
          <NoProductMessage message="No product found!" />
        )}
      </ProductCardsContainer>
    </>
  );
};
export default Home;

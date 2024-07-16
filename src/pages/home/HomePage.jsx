import Banner from "../../components/home/Banner";
import ProductList from "../../components/home/ProductList";
import CategoryList from "../../components/home/category/CategoryList";
import BestSellList from "../../components/home/bestSell/BestSellList";
import MainProductList from "../../components/home/mainProduct/MainProductList";
import { useProduct } from "../../store/store";
import { useEffect } from "react";
function HomePage() {
  const { getProducts } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mx-auto">
      <Banner />
      <ProductList />
      <CategoryList />
      <BestSellList />
      <MainProductList />
    </div>
  );
}

export default HomePage;


import NavBar from '../../components/home/NavBar';
import Banner from '../../components/home/Banner';
import ProductList from '../../components/home/ProductList';
import CategoryList from '../../components/home/category/CategoryList';
import BestSellList from '../../components/home/bestSell/BestSellList';
import MainProductList from '../../components/home/mainProduct/MainProductList';
function HomePage() {
  return (
    <div className="container mx-auto">
      <NavBar />
      <Banner />
      <ProductList />
      <CategoryList />
      <BestSellList />
      <MainProductList />
    </div>
  );
}

export default HomePage;

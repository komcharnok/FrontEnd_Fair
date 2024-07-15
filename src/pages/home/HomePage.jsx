
import NavBar from '../../components/Home/NavBar';
import Banner from '../../components/Home/Banner';
import ProductList from '../../components/Home/ProductList';
import CategoryList from '../../components/Home/category/CategoryList';
import BestSellList from '../../components/Home/bestSell/BestSellList';
import MainProductList from '../../components/Home/mainProduct/MainProductList';
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

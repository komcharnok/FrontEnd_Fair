import NavBar from "../../components/home/NavBar";
import MainProductList from '../../components/searchProduct/mainProduct/MainProductList';

function searchProduct() {
  return (
    <div className="container mx-auto">
      <NavBar />
      {/* <ProductList />
      <CategoryList />
      <BestSellList /> */}
      <MainProductList />
    </div>
  );
}

export default searchProduct;

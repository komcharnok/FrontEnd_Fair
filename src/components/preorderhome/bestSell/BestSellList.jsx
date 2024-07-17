import ProductCard from "../ProductCard";
import { Link } from "react-router-dom";
import { useProduct } from "../../../store/store";
import { getBestProducts } from "../../../utils/bestSell";


function BestSellList() {
  const { products } = useProduct();

  const bestSell = getBestProducts(products, 4);
  return (
    <div className="px-4 py-2">
      <div className="flex items-center mt-6 my-10">
        <div className="bg-red-500 w-2 h-6 mr-2 rounded-sm"></div>
        <h2 className="text-red-500 text-xl font-semibold">สินค้าขายดี</h2>
        <div className="flex justify-center  ml-auto">
          <Link
            to="best"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-8 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            กดดูสินค้าเพิ่มเติม
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bestSell.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <hr className="my-10 border-b-2 border-gray-200" />
    </div>
  );
}

export default BestSellList;

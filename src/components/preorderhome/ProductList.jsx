import ProductCard from "./ProductCard";
import { useProduct } from "../../store/store";
import { getBestreOrder } from "../../utils/bestSell";

function ProductList() {
  const { products } = useProduct();
  const bestPre = getBestreOrder(products, 4);
  return (
    <div className="px-4 py-12">
    <div className="flex items-center my-6">
      <div className="bg-red-500 w-2 h-6 mr-2 rounded-sm"></div>
      <h2 className="text-red-500 text-xl font-semibold">รับหัวสินค้า</h2>
    </div>
    <h2 className="text-2xl font-bold my-6">ได้รับความนิยมมากสุด</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {bestPre.map((product, index) => (
        <ProductCard key={index} product={product} typeProduct="Pre"/>
      ))}
    </div>
    <div className="flex justify-center mt-6">
      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-8 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
        กดดูสินค้าเพิ่มเติม
      </button>
    </div>
    <hr className="my-10 border-b-2 border-gray-200" />
  </div>
  );
}

export default ProductList;

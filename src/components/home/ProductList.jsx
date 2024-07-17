// import ProductCard from "./ProductCard";

import { useProduct } from "../../store/store";
import { getBestreOrder } from "../../utils/bestSell";
import ProductCard from "./ProductCard";

// const products = [
//   {
//     name: "HAVIT HV-G92 Gamepad",
//     price: 120,
//     originalPrice: 160,
//     discount: 40,
//     rating: 5,
//     reviews: 88,
//     image:
//       "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with actual image path
//   },
//   {
//     name: "AK-900 Wired Keyboard",
//     price: 960,
//     originalPrice: 1160,
//     discount: 35,
//     rating: 4,
//     reviews: 75,
//     image:
//       "https://images.pexels.com/photos/459762/pexels-photo-459762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with actual image path
//   },
//   {
//     name: "IPS LCD Gaming Monitor",
//     price: 370,
//     originalPrice: 400,
//     discount: 30,
//     rating: 5,
//     reviews: 99,
//     image:
//       "https://images.pexels.com/photos/164827/pexels-photo-164827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with actual image path
//   },
//   {
//     name: "S-Series Comfort Chair",
//     price: 375,
//     originalPrice: 400,
//     discount: 25,
//     rating: 4,
//     reviews: 99,
//     image:
//       "https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with actual image path
//   },
// ];

function ProductList() {
  const { products } = useProduct();

  // filter bestPreOrder
  const bestPre = getBestreOrder(products, 4);

  // chage to productDetail
  // const

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

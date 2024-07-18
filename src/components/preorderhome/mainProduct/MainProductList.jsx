import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import { useProduct } from "../../../store/store";
import { useEffect } from "react";
// import useProductStore from "../../../store/mocupstore/useProductStore";

function MainProductList() {
  const { products, getProducts } = useProduct();
  const [itemsPerPage, setItemsPerPage] = useState(10);
  // const products = useProductStore((state) => state.products);

  useEffect(() => {
    const getAll = () => {
      getProducts();
    };
    getAll();
  }, []);

  // Filter products by product_type "PreOrder"
  const preOrderProducts = products.filter(
    (product) => product.product_type === "PreOrder"
  );

  const moreDataHandle = () => {
    setItemsPerPage((prevItemsPerPage) => prevItemsPerPage + 10);
  };

  const displayedProducts = preOrderProducts.slice(0, itemsPerPage);
  // const displayedProducts = products.slice(0, itemsPerPage);

  return (
    <div className="px-4 py-12">
      <h2 className="text-red-500 text-xl font-semibold text-center">
        สินค้าหิ้วยอดฮิต
      </h2>
      <hr className="my-10 border-b-4 border-red-500" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <Link
            to={`/preoderhome/productdetail/${product.product_id}`}
            key={product.product_id}
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
      {itemsPerPage < products.length && (
        <div className="flex justify-center my-10">
          <button
            onClick={moreDataHandle}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-8 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            กดดูสินค้าเพิ่มเติม
          </button>
        </div>
      )}
      <hr className="my-10 border-b-2 border-gray-200" />
    </div>
  );
}

export default MainProductList;
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function ProductCard({ product, typeProduct }) {
  // const BACKEND_URL = `http://localhost:8080/image`;
  // const imageUrl = `${BACKEND_URL}/${product.product_pic}`;
  // console.log("imageUrl = ", imageUrl);

  const percen =
    ((product.price - product.real_price) / product.real_price) * 100;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let randomRating = getRandomInt(1, 5);
  let randomReview = getRandomInt(1, 150);

  // set productType
  const type =
    typeProduct == "Pre"
      ? `/preoderhome/productdetail/${product.product_id}`
      : `/home/productdetail/${product.product_id}`;

  return (
    <Link
      to={type}
      className="bg-white shadow-md rounded-lg overflow-hidden relative"
    >
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
        {Math.floor(percen)}%
      </div>
      <img
        // src={product.image}
        src={product.product_pic}
        alt={product.product_id}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h2 className="text-sm font-semibold">{product.product_title}</h2>
        <div className="flex items-center mt-2">
          <span className="text-red-500 font-bold"> ฿{product.price}</span>
          <span className="text-gray-500 line-through ml-2">
            ฿{product.real_price}
            {/* ฿{product.originalPrice} */}
          </span>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">
            {"★".repeat(randomRating)}
            {"☆".repeat(5 - randomRating)}
            {/* {"★".repeat(product.rating)}
            {"☆".repeat(5 - product.rating)} */}
          </span>
          <span className="text-gray-500 ml-2">
            ({randomReview}){/* ({product.reviews}) */}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;

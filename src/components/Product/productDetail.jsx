// import React from "react";
import { useParams, useNavigate } from "react-router-dom";
// import useProductStore from "../../store/mocupstore/useProductStore";
import { useProduct } from "../../store/store";

function ProductDetail() {
  const { product_id } = useParams();
  const navigate = useNavigate();
  // const products = useProductStore((state) => state.products);
  const { products } = useProduct();
  const product = products.find((p) => p.product_id === parseInt(product_id));

  if (!product) {
    return <div>Product not found</div>;
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let randomRating = getRandomInt(1, 5);
  let randomReview = getRandomInt(1, 150);

  const handleAddToCart = () => {
    navigate("/order", { state: { product_id: product.product_id } });
  };

  return (
    <div className="w-5/6 min-w-[600px] flex flex-col gap-3 mx-auto p-3">
      <div className="breadcrumbs text-sm">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Documents</a></li>
          <li>Add Document</li>
        </ul>
      </div>

      <section className="border pt-6 pb-6 lg:py-32 flex items-center">
        <div className="container mx-auto px-2">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-1 mb-8 lg:mb-0 justify-center items-center">
              <img
                // src={product.image}
                src={product.product_pic}
                alt={product.product_id}
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="flex-1 text-center lg:text-left border p-2 ">
              <h1 className="text-[26px] text-center font-medium mb-2 max-w-[450px] mx-auto">
                {product.product_title}
              </h1>
              <div className="text-xl text-center font-medium mb-6">
                <span className="text-red-500 font-bold"> ฿{product.price}</span>
                <span className="text-gray-500 line-through ml-2">
                  ฿{product.real_price}
                  {/* ฿{product.originalPrice} */}
                </span>
              </div>
              <h1 className="text-center mb-8">
                ฿{product.description}
              </h1>
              <div className="flex justify-center">
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
              <hr />
              <div className="flex gap-2 px-2 py-2">
                <h1>Colors:</h1>
                <input type="radio" name="radio-2" className="radio bg-red-400" defaultChecked />
                <input type="radio" name="radio-2" className="radio bg-orange-400" />
                <input type="radio" name="radio-2" className="radio bg-lime-500" />
              </div>
              <div className="flex gap-2 px-2 py-2">
                <h1>Size:</h1>
                <button className="btn btn-sm btn-outline btn-info">M</button>
                <button className="btn btn-sm btn-outline btn-success">L</button>
                <button className="btn btn-sm btn-outline btn-warning">XL</button>
                <button className="btn btn-sm btn-outline btn-error">XXL</button>
              </div>
              <div className="flex justify-center">
                <button className="bg-primary btn-sm px-20 text-white"
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetail;

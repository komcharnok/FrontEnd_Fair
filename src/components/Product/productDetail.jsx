// import React from "react";
import { useParams } from "react-router-dom";
import useProductStore from "../../store/mocupstore/useProductStore";
import axios from "axios";

function ProductDetail() {
  const { product_id } = useParams();
  const products = useProductStore((state) => state.products);
  const product = products.find((p) => p.product_id === parseInt(product_id));
	

  // console.log(product_id)
  // console.log(product)

  if (!product) {
    return <div>Product not found</div>;
  }
  const addproduct = async (id, quantity) => {
    try {
        const rs = await axios.post(`http://localhost:8080/order/${id}`, { quantity }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        console.log(rs);
    } catch (err) {
        console.log(err);
    }
}


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
              <img className="max-w-[200px] lg:max-w-sm" src={product.image} alt={product.name} />
            </div>
            <div className="flex-1 text-center lg:text-left border p-2 ">
              <h1 className="text-[26px] text-center font-medium mb-2 max-w-[450px] mx-auto">
                {product.name}
              </h1>
              <div className="text-xl text-red-500 text-center font-medium mb-6">
                ฿{product.price}
              </div>
              <h1 className="text-center mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, delectus?
              </h1>
              <div className="flex justify-center">
                <div className="flex rating rating-sm">
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" defaultChecked />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                  <h1>({product.reviews} reviews)</h1>
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
                <button onClick={() => addproduct(product.product_id,1)} className="bg-primary btn-sm px-20 text-white">
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

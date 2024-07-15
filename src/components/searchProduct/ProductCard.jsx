function ProductCard({ product }) {
  const BACKEND_URL = `http://localhost:8080/image`;
  const imageUrl = `${BACKEND_URL}/${product.product_pic}`;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden relative">
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
        {/* -{product.discount}% */}-{35}%
      </div>
      <img
        src={imageUrl}
        alt={product.product_id}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h2 className="text-sm font-semibold">{product.product_title}</h2>
        <div className="flex items-center mt-2">
          <span className="text-red-500 font-bold"> ฿{product.price}</span>
          <span className="text-gray-500 line-through ml-2">฿{product.real_price}</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">
            {"★".repeat(3)}
            {"☆".repeat(5 - 3)}
          </span>
          <span className="text-gray-500 ml-2">
            ({99}){/* ({product.reviews}) */}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

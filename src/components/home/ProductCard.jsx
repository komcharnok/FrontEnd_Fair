function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden relative">
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
        -{product.discount}%
      </div>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h2 className="text-sm font-semibold">{product.name}</h2>
        <div className="flex items-center mt-2">
          <span className="text-red-500 font-bold"> ฿{product.price}</span>
          <span className="text-gray-500 line-through ml-2">
            ฿{product.originalPrice}
          </span>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">
            {"★".repeat(product.rating)}
            {"☆".repeat(5 - product.rating)}
          </span>
          <span className="text-gray-500 ml-2">({product.reviews})</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

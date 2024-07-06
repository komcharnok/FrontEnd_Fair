function CategoryCard({ category }) {
  return (
    <div className="bg-white shadow-md rounded-sm flex flex-col items-center p-2">
      <div className="bg-gray-100 rounded-full p-2 mb-2">
        <img
          src={category.image}
          alt={category.name}
          className="w-16 h-16 object-cover"
        />
      </div>
      <h3 className="text-sm font-semibold text-center">{category.name}</h3>
    </div>
  );
}

export default CategoryCard;

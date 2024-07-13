import { useState } from "react";
import { useProduct } from "../../../store/store";
import Filter from "../Filter";
import Pagination from "../Pagination";
import ProductCard from "../ProductCard";
import RecommendedShops from "../RecommendedShops";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

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

function MainProductList() {
  const { keyword } = useParams();
  const { searchProducts, searchProduct } = useProduct();
  const [paginatorData, setpaginatorData] = useState([]);

  // fetch search product
  useEffect(() => {
    const fetchData = async () => {
      await searchProduct(keyword);
    };
    fetchData();
  }, [keyword]);

  return (
    <div className="px-4 py-12">
      <RecommendedShops />
      <Filter />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatorData.map((product) => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </div>
      <Pagination
        searchProducts={searchProducts}
        setpaginatorData={setpaginatorData}
      />
      {/* <hr className="my-10 border-b-2 border-gray-200" /> */}
    </div>
  );
}

export default MainProductList;

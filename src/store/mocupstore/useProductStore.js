/* eslint-disable no-unused-vars */
import create from 'zustand';

const useProductStore = create((set) => ({
  products: [
    {
      product_id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      originalPrice: 160,
      discount: 40,
      rating: 5,
      reviews: 88,
      image: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      product_id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 4,
      reviews: 75,
      image: "https://images.pexels.com/photos/459762/pexels-photo-459762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      product_id: 3,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      originalPrice: 400,
      discount: 30,
      rating: 5,
      reviews: 99,
      image: "https://images.pexels.com/photos/164827/pexels-photo-164827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        product_id: 4,
        name: "S-Series Comfort Chair",
        price: 375,
        originalPrice: 400,
        discount: 25,
        rating: 4,
        reviews: 99,
        image:
          "https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        product_id: 5,
        name: "HAVIT HV-G92 Gamepad",
        price: 120,
        originalPrice: 160,
        discount: 40,
        rating: 5,
        reviews: 88,
        image:
          "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        product_id: 6,
        name: "AK-900 Wired Keyboard",
        price: 960,
        originalPrice: 1160,
        discount: 35,
        rating: 4,
        reviews: 75,
        image:
          "https://images.pexels.com/photos/459762/pexels-photo-459762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        product_id: 7,
        name: "IPS LCD Gaming Monitor",
        price: 370,
        originalPrice: 400,
        discount: 30,
        rating: 5,
        reviews: 99,
        image:
          "https://images.pexels.com/photos/164827/pexels-photo-164827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        product_id: 8,
        name: "S-Series Comfort Chair",
        price: 375,
        originalPrice: 400,
        discount: 25,
        rating: 4,
        reviews: 99,
        image:
          "https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        product_id: 9,
        name: "HAVIT HV-G92 Gamepad",
        price: 120,
        originalPrice: 160,
        discount: 40,
        rating: 5,
        reviews: 88,
        image:
          "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        product_id: 10,
        name: "AK-900 Wired Keyboard",
        price: 960,
        originalPrice: 1160,
        discount: 35,
        rating: 4,
        reviews: 75,
        image:
          "https://images.pexels.com/photos/459762/pexels-photo-459762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        product_id: 11,
        name: "IPS LCD Gaming Monitor",
        price: 370,
        originalPrice: 400,
        discount: 30,
        rating: 5,
        reviews: 99,
        image:
          "https://images.pexels.com/photos/164827/pexels-photo-164827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        product_id: 12,
        name: "S-Series Comfort Chair",
        price: 375,
        originalPrice: 400,
        discount: 25,
        rating: 4,
        reviews: 99,
        image:
          "https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        product_id: 13,
        name: "HAVIT HV-G92 Gamepad",
        price: 120,
        originalPrice: 160,
        discount: 40,
        rating: 5,
        reviews: 88,
        image:
          "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        product_id: 14,
        name: "AK-900 Wired Keyboard",
        price: 960,
        originalPrice: 1160,
        discount: 35,
        rating: 4,
        reviews: 75,
        image:
          "https://images.pexels.com/photos/459762/pexels-photo-459762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        product_id: 15,
        name: "IPS LCD Gaming Monitor",
        price: 370,
        originalPrice: 400,
        discount: 30,
        rating: 5,
        reviews: 99,
        image:
          "https://images.pexels.com/photos/164827/pexels-photo-164827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        product_id: 16,
        name: "S-Series Comfort Chair",
        price: 375,
        originalPrice: 400,
        discount: 25,
        rating: 4,
        reviews: 99,
        image:
          "https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        product_id: 17,
        name: "HAVIT HV-G92 Gamepad",
        price: 120,
        originalPrice: 160,
        discount: 40,
        rating: 5,
        reviews: 88,
        image:
          "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        product_id: 18,
        name: "AK-900 Wired Keyboard",
        price: 960,
        originalPrice: 1160,
        discount: 35,
        rating: 4,
        reviews: 75,
        image:
          "https://images.pexels.com/photos/459762/pexels-photo-459762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        product_id: 19,
        name: "IPS LCD Gaming Monitor",
        price: 370,
        originalPrice: 400,
        discount: 30,
        rating: 5,
        reviews: 99,
        image:
          "https://images.pexels.com/photos/164827/pexels-photo-164827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        product_id: 20,
        name: "S-Series Comfort Chair",
        price: 375,
        originalPrice: 400,
        discount: 25,
        rating: 4,
        reviews: 99,
        image:
          "https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
  ],
}));

export default useProductStore;

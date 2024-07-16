// import React from 'react'

import Banner from "../../components/home/Banner"
import BestSellList from "../../components/preorderhome/bestSell/BestSellList"
import CategoryList from "../../components/preorderhome/category/CategoryList"
import MainProductList from "../../components/preorderhome/mainProduct/MainProductList";
import ProductList from "../../components/preorderhome/ProductList"
// import StorePage from "../vendor/storePage"
import { useProduct } from "../../store/store";
import { useEffect } from "react";
function PreOderHome() {
  const { getProducts } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container mx-auto">
      <Banner />
      <MainProductList />
      <ProductList />
      <CategoryList />
      <BestSellList />
    </div>
  )
}

export default PreOderHome
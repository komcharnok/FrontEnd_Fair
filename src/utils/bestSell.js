export function getBestProducts(products, count) {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function getBestreOrder(products, count) {
  const preOrderProducts = products.filter(
    (product) => product.product_type === "PreOrder"
  );

  const shuffled = [...preOrderProducts].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, count);
}

export function getBestProductPage(products) {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled
}

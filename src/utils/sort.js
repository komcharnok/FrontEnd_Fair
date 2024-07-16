export function sortByPriceDescending(products) {
    return [...products].sort((a, b) => b.price - a.price);
}

export function sortByPriceAscending(products) {
    return [...products].sort((a, b) => a.price - b.price);
}


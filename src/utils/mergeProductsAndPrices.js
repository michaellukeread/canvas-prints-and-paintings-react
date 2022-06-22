/**
 * @param {array} products - Array of stripe products
 * @param {array} prices - Array of stripe prices
 * @returns {array} An array of merged products and prices
 */
const mergeProductsAndPrices = (products, prices) =>
  products.data
    .filter(a => prices.data.some(b => a.id === b.product))
    .map(item => ({ ...prices.data.find(elem => item.id === elem.product), ...item }))

export default mergeProductsAndPrices

import centsToDollars from './centsToDollars'

const summariseProduct = product => ({
  ...product,
  frameColours: product?.metadata.frameColours?.toLowerCase().replace(' ', '').split(',') || null,
  orientation: product.metadata.orientation || null,
  category: product.metadata.category || null,
  price_id: product.id || null,
  id: product.product || null,
  dollarAmount: centsToDollars(product.unit_amount) || null,
  tags: [
    product.metadata.frameColours?.toLowerCase().replace(' ', '').split(',') || null,
    product.metadata.orientation?.toLowerCase() || null,
    product.metadata.category?.toLowerCase() || null
  ]
})

export default summariseProduct

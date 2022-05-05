import { useSelector } from 'react-redux'

import { selectProducts } from 'redux/slices/productsSlice'
import { useRouter } from 'next/router'

const useProducts = () => {
  const products = useSelector(selectProducts)
  const router = useRouter()

  const { query } = router

  const filters = Object.keys(query).reduce(
    (acc, key) => ({
      ...acc,
      [key]: [...query[key].toString().split(',')]
    }),
    {}
  )

  const filteredProducts = products.filter(product =>
    Object.keys(filters).every(key => filters[key].some(elem => product[key]?.includes(elem)))
  )

  const count = filteredProducts.length
  const hasContent = Boolean(count)

  return { products: filteredProducts, count, hasContent }
}

export default useProducts

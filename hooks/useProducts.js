import { useCallback } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getProducts, selectProducts } from 'redux/slices/productsSlice'

const useProducts = () => {
  const dispatch = useDispatch()

  const fetchProducts = useCallback(() => dispatch(getProducts()), [dispatch])

  const products = useSelector(selectProducts)

  return { fetchProducts, products }
}

export default useProducts

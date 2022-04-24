import { useSelector, useDispatch } from 'react-redux'

import {
  selectCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity
} from 'redux/slices/cartSlice'
import { selectProducts } from 'redux/slices/productsSlice'

const useCart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(selectCart)
  const products = useSelector(selectProducts)

  const productsInCart = cart
    .filter(a => products.some(b => a.id === b.id))
    .map(item => ({ ...item, ...products.find(elem => item.id === elem.id) }))

  const handleRemoveFromCart = id => () => dispatch(removeFromCart(id))
  const handleIncrementQuantity = id => () => dispatch(incrementQuantity(id))
  const handleDecrementQuantity = id => () => dispatch(decrementQuantity(id))

  return { productsInCart, handleRemoveFromCart, handleIncrementQuantity, handleDecrementQuantity }
}

export default useCart

import { useSelector, useDispatch } from 'react-redux'

import {
  selectCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity
} from 'redux/slices/cartSlice'

const useCart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(selectCart)

  const handleRemoveFromCart = id => () => dispatch(removeFromCart(id))
  const handleIncrementQuantity = id => () => dispatch(incrementQuantity(id))
  const handleDecrementQuantity = id => () => dispatch(decrementQuantity(id))

  return {
    cart,
    handleRemoveFromCart,
    handleIncrementQuantity,
    handleDecrementQuantity
  }
}

export default useCart

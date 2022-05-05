import { useSelector } from 'react-redux'

import { selectCart } from 'redux/slices/cartSlice'

const useCartCount = () => {
  const cart = useSelector(selectCart)

  const cartCount = cart.reduce((acc, elem) => acc + elem.quantity, 0)

  return { cartCount }
}

export default useCartCount

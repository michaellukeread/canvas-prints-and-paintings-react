import PureCart from './Cart'
import useCartCount from './hooks'

const Cart = () => {
  const { cartCount } = useCartCount()
  return <PureCart cartCount={cartCount} />
}

export default Cart

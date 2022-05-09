import { ShoppingCartIcon } from '@heroicons/react/solid'

const Cart = ({ cartCount }) => (
  <div className="flex items-center gap-2">
    <ShoppingCartIcon className="h-6 w-6" />
    <p>{cartCount}</p>
  </div>
)

export default Cart

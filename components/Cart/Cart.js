import { ShoppingCartIcon } from '@heroicons/react/solid'
import Badge from 'components/Badge'

const Cart = ({ cartCount }) => (
  <div className="relative">
    <ShoppingCartIcon className="h-8 w-8" />
    <Badge className="absolute -top-1.5 -right-1.5" count={cartCount} />
  </div>
)

export default Cart

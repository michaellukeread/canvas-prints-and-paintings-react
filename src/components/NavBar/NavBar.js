import Cart from 'components/Cart'
import Link from 'components/Link'

import Dropdown from './Dropdown'
import { NAV_ITEMS } from './config'

const NavigationBar = () => (
  <nav className="border-b border-slate-700 px-8 py-4">
    <div className="container top-0 z-10 mx-auto flex h-12 flex-row items-center justify-between text-white">
      <h1 className="text-center text-2xl tracking-widest md:text-left">Paintings</h1>
      <ul className="mt-0 hidden w-max flex-row items-center gap-8 md:flex">
        {NAV_ITEMS.map(({ title, to }) => (
          <Link key={title} className="text-sm font-medium tracking-widest hover:underline" to={to}>
            {title}
          </Link>
        ))}
      </ul>
      <Link to="/cart">
        <Cart />
      </Link>
      <div className="block md:hidden">
        <Dropdown items={NAV_ITEMS} />
      </div>
    </div>
  </nav>
)

export default NavigationBar

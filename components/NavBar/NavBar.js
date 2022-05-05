import Cart from 'components/Cart'
import Link from 'components/Link'

import Dropdown from './Dropdown'
import { NAV_ITEMS } from './config'

const NavigationBar = () => (
  <nav className="bg-indigo-700 p-4">
    <div className="container top-0 z-10 mx-auto flex h-12 flex-row items-center justify-between px-8 text-white">
      <h1 className="text-center text-2xl tracking-widest md:text-left">Paintings UI</h1>
      <ul className="mt-0 hidden w-max flex-row items-center gap-4 md:flex">
        {NAV_ITEMS.map(({ title, to }) => (
          <Link key={title} className="text-sm" to={to}>
            {title}
          </Link>
        ))}
        <Link to="/cart">
          <Cart />
        </Link>
      </ul>
      <div className="block md:hidden">
        <Dropdown items={NAV_ITEMS} />
      </div>
    </div>
  </nav>
)

export default NavigationBar

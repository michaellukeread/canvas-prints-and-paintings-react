import Cart from 'components/Cart'
import Link from 'components/Link'

import Dropdown from './Dropdown'
import { NAV_ITEMS } from './config'

const NavigationBar = () => (
  <nav className="bg-primary px-8 py-4" aria-label="Primary Navigation">
    <div className="container top-0 z-10 mx-auto flex h-12 flex-row items-center justify-between text-white">
      <Link to="/" className="text-2xl font-bold">
        Canvas Prints & Paintings
      </Link>
      <ul className="mt-0 hidden w-max flex-row items-center gap-8 md:flex">
        {NAV_ITEMS.map(({ title, to }) => (
          <Link key={title} className="text-sm font-medium tracking-widest hover:underline" to={to}>
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

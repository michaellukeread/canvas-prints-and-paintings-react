import { scrollTo } from '../../utils'

const NavigationBar = () => (
  <nav className="sticky top-0 z-10 flex h-24 items-center justify-between bg-stone-900 px-8 text-white">
    <h1 className="col-span-3 col-start-2 text-2xl tracking-widest">
      Canvas Prints and Paintings
    </h1>
    <ul className="col-start-11 flex gap-4">
      <li className="cursor-pointer rounded-sm p-2 tracking-widest duration-150 hover:bg-stone-200 hover:text-stone-900">
        <button className="text-sm" onClick={scrollTo('about')}>
          About Us
        </button>
      </li>
      <li className="cursor-pointer rounded-sm p-2 tracking-widest duration-150 hover:bg-stone-200 hover:text-stone-900">
        <button className="text-sm" onClick={scrollTo('service')}>
          Our Services
        </button>
      </li>
      <li className="cursor-pointer rounded-sm p-2 tracking-widest duration-150 hover:bg-stone-200 hover:text-stone-900">
        <button className="text-sm" onClick={scrollTo('contact')}>
          Contact Us
        </button>
      </li>
      <li className="cursor-pointer rounded-sm bg-stone-200 p-2 tracking-widest text-stone-900 duration-150 hover:bg-stone-100">
        <button className="text-sm" onClick={scrollTo('gallery')}>
          Browse Products
        </button>
      </li>
    </ul>
  </nav>
)

export default NavigationBar

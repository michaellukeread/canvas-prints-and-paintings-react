import { scrollTo } from '../../utils'

const NavigationBar = () => (
  <nav className="bg-stone-900 flex text-white px-8 h-24 flex justify-between items-center z-10">
    <h1 className="col-start-2 col-span-3 text-2xl tracking-widest">
      Canvas Prints and Paintings
    </h1>
    <ul className="col-start-11 flex gap-4">
      <li className="cursor-pointer hover:bg-stone-200 hover:text-stone-900 p-2 rounded-sm tracking-widest duration-150">
        <button className="text-sm" onClick={scrollTo('about')}>
          About
        </button>
      </li>
      <li className="cursor-pointer hover:bg-stone-200 hover:text-stone-900 p-2 rounded-sm tracking-widest duration-150">
        <button className="text-sm" onClick={scrollTo('gallery')}>
          Products
        </button>
      </li>
      <li className="cursor-pointer hover:bg-stone-200 hover:text-stone-900 p-2 rounded-sm tracking-widest duration-150">
        <button className="text-sm" onClick={scrollTo('contact')}>
          Contact
        </button>
      </li>
    </ul>
  </nav>
)

export default NavigationBar

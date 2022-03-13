import { scrollTo } from '../../utils'

const NavigationBar = () => (
  <nav className="top-0 z-10 flex w-full flex-col items-center justify-between bg-stone-900 p-4 text-white md:sticky md:h-24 md:flex-row md:px-8">
    <h1 className="text-center text-2xl tracking-widest md:text-left">
      Canvas Prints and Paintings
    </h1>
    <ul className="mt-4 flex w-full flex-col gap-4 bg-stone-900 md:mt-0 md:w-max md:flex-row">
      <li className="flex cursor-pointer items-center justify-center rounded-sm bg-slate-50 p-2 tracking-widest text-stone-900 duration-150 hover:bg-stone-200 hover:text-stone-900 md:bg-transparent md:text-white">
        <button className="text-sm" onClick={scrollTo('about')}>
          About Us
        </button>
      </li>
      <li className="flex cursor-pointer items-center justify-center rounded-sm bg-slate-50 p-2 tracking-widest text-stone-900 duration-150 hover:bg-stone-200 hover:text-stone-900 md:bg-transparent md:text-white">
        <button className="text-sm" onClick={scrollTo('service')}>
          Our Services
        </button>
      </li>
      <li className="flex cursor-pointer items-center justify-center rounded-sm bg-slate-50 p-2 tracking-widest text-stone-900 duration-150 hover:bg-stone-200 hover:text-stone-900 md:bg-transparent md:text-white">
        <button className="text-sm" onClick={scrollTo('contact')}>
          Contact Us
        </button>
      </li>
      <li className="flex cursor-pointer items-center justify-center rounded-sm bg-slate-50 p-2 tracking-widest text-stone-900 duration-150 hover:bg-stone-100 md:bg-stone-200 md:text-stone-900">
        <button className="text-sm" onClick={scrollTo('gallery')}>
          Browse Products
        </button>
      </li>
    </ul>
  </nav>
)

export default NavigationBar

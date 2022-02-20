import abstractFashion from '../../assets/images/abstract-fashion.webp'
import abstractFlow from '../../assets/images/abstract-flow.webp'
import africanBeauty from '../../assets/images/african-beauty.webp'

import { scrollTo } from '../../utils'

const Landing = () => (
  <section
    id="landing"
    className="bg-stone-600 h-[calc(100vh-6rem)] flex flex-col items-center justify-center p-4 space-y-8"
  >
    <div className="bg-stone-100 rounded-sm shadow-lg p-8 flex flex-col gap-4">
      <h1 className="text-7xl text-stone-900 tracking-tight font-bold text-left w-[1216px]">
        Beautiful Wall Art for your Home or Business
      </h1>
      <div className="flex gap-4">
        <img
          className="rounded-sm w-96 h-96"
          src={abstractFashion}
          alt="landing painting 1"
        />
        <img
          className="rounded-sm w-96 h-96"
          src={abstractFlow}
          alt="landing painting 2"
        />
        <img
          className="rounded-sm w-96 h-96"
          src={africanBeauty}
          alt="landing painting 3"
        />
      </div>
      <button
        className="bg-stone-900 uppercase text-stone-100 w-max cursor-pointer hover:bg-stone-200 hover:text-stone-900 p-4 rounded-sm tracking-widest duration-150 text-lg"
        onClick={scrollTo('gallery')}
      >
        View all products
      </button>
    </div>
  </section>
)

export default Landing

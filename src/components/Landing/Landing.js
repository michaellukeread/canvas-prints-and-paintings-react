import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { scrollTo } from '../../utils'

const Landing = ({ heading, images }) => (
  <section
    id="landing"
    className="bg-stone-600 h-[calc(100vh-6rem)] flex flex-col items-center justify-center p-4 space-y-8"
  >
    <div className="bg-stone-100 rounded-sm shadow-lg p-8 flex flex-col gap-4">
      <div className="text-7xl text-stone-900 tracking-tight font-bold text-left w-[1216px]">
        {documentToReactComponents(heading?.text)}
      </div>
      <div className="flex gap-4">
        {images?.map((image) => (
          <img
            key={image.fields.title}
            className="rounded-sm w-96 h-96"
            src={image.fields.file.url}
            alt={image.fields.title}
          />
        ))}
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

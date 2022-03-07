import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { scrollTo } from '../../utils'

const Landing2 = ({ heading, images }) => (
  <section id="landing" className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      {Boolean(images) && (
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt={images[0]?.fields?.title}
          src={images[0]?.fields?.file?.url}
        />
      )}

      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 capitalize">
          {documentToReactComponents(heading?.text)}
        </h1>
        <p className="mb-8 leading-relaxed">
          Is your interior design itching? Explore our wide range of beautifully
          design Canvas and Paintings. All artworks can be shipped of collected
          from Australia.
        </p>
        <div className="flex justify-center">
          <button
            className="text-md text-stone-100 cursor-pointer bg-stone-900 hover:ring-4 ring-stone-800 px-6 py-2 rounded-sm tracking-widest duration-300 "
            onClick={scrollTo('gallery')}
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default Landing2

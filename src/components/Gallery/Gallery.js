import Article from './Article'

const groupByKey = (arr, key) =>
  arr.reduce(
    (acc, elem) => ({
      ...acc,
      [elem[key]]: [...(acc[elem[key]] || []), elem],
    }),
    {}
  )

const Gallery = ({ products, doOpen }) => {
  const groupedBySize = groupByKey(products, 'printOrientation')

  return (
    <section
      id="gallery"
      className="flex scroll-mt-12 flex-col items-center pt-8"
    >
      <h1 className="text-center text-4xl font-bold tracking-wider text-stone-900">
        Products
      </h1>
      <div className="space-y-16 divide-y-2 p-8">
        {Object.keys(groupedBySize).map((item) => (
          <div>
            <h2 className="my-8 rounded-sm border-b-2 border-stone-400 px-4 py-2 text-center text-2xl capitalize text-stone-900">
              {item} Images
            </h2>
            <div className="grid grid-cols-3 gap-8">
              {groupedBySize[item].map(({ id, title, image, now, was }) => (
                <Article
                  id={id}
                  key={id}
                  title={title}
                  image={image}
                  now={now}
                  was={was}
                  doOpen={doOpen}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery

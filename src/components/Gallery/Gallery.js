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
      className="flex scroll-mt-12 flex-col items-center bg-stone-900 pt-8"
    >
      <h1 className="text-center text-4xl font-bold tracking-wider text-white">
        Products
      </h1>
      <div className="space-y-16 p-8">
        {Object.keys(groupedBySize).map((item) => (
          <div>
            <h2 className="my-8 rounded-sm  px-4 py-2 text-center text-2xl capitalize text-white">
              {item} Images
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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

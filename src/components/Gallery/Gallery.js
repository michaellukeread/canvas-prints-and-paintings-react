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
    <section id="gallery" className="pt-8 flex items-center flex-col">
      <h1 className="text-4xl tracking-wider font-bold text-center text-stone-900">
        Products
      </h1>
      <div className="p-8 divide-y-2 space-y-16">
        {Object.keys(groupedBySize).map((item) => (
          <div>
            <h2 className="text-center px-4 py-2 rounded-sm border-b-2 border-stone-400 text-stone-900 text-2xl capitalize my-8">
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

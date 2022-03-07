// import Article from './Article'
import Placeholder from './Placeholder'

const groupBy = (array, key) => {
  // Return the end result
  return array.reduce((result, currentValue) => {
    // If an array already present for key, push it to the array. Else create an array and push the object
    ;(result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    )
    // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
    return result
  }, {}) // empty object is the initial value for result object
}

const Gallery = ({ products, doOpen }) => {
  const groupedBySize = groupBy(products, 'size')

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
              {groupedBySize[item].map(({ id, size }) => (
                <Placeholder key={id} size={size} />
              ))}
            </div>
          </div>
        ))}
        {/* {groupedBySize.map(({ id, size }) => (
          <Placeholder key={id} size={size} />
        ))} */}
        {/* {products.map(({ id, title, image, now, was }) => (
          <Article
            id={id}
            key={id}
            title={title}
            image={image}
            now={now}
            was={was}
            doOpen={doOpen}
          />
        ))} */}
      </div>
    </section>
  )
}

export default Gallery

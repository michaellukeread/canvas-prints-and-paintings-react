import Article from './Article'

const Gallery = ({ products, doOpen }) => (
  <section
    id="gallery"
    className="pt-8 bg-stone-900 flex items-center flex-col gap-8"
  >
    <h1 className="text-4xl tracking-wider font-bold text-center text-stone-100 ">
      Products
    </h1>
    <div className="mx-16 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {products.map(({ id, title, image, now, was }) => (
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
  </section>
)

export default Gallery

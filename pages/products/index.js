import Layout from 'components/Layout'
import Card from 'components/Card'
import Filter from 'components/Filter'

import { useProducts } from 'hooks'

import { FILTERS } from './config'

const AllProducts = () => {
  const { products, count } = useProducts()

  return (
    <Layout>
      <section className="my-8 grid grid-cols-12 gap-8">
        <div className="col-span-2 flex flex-col gap-8">
          {Object.keys(FILTERS).map(filter => (
            <Filter key={filter} filter={filter} items={FILTERS[filter]} />
          ))}
        </div>

        <div className="col-span-9">
          <h2 className="title mb-8">Artworks found: {count}</h2>
          <div className="grid grid-cols-12 gap-8">
            {' '}
            {products?.map(({ id, name, images, dollarAmount }) => (
              <Card key={id} id={id} title={name} image={images[0]} dollarAmount={dollarAmount} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AllProducts

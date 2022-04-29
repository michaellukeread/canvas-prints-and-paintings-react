import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { selectProducts } from 'redux/slices/productsSlice'

import Layout from 'components/Layout'
import Card from 'components/Card'
import Filter from 'components/Filter'

import { FILTERS } from './config'

const AllProducts = () => {
  const products = useSelector(selectProducts)
  const router = useRouter()
  const { query } = router

  //TODO: Add to utils
  // const filters = Object.values(query).reduce((acc, elem) => acc.concat(elem?.split(',')), [])
  const filters = Object.keys(query).reduce(
    (acc, key) => ({
      ...acc,
      [key]: [...query[key].toString().split(',')]
    }),
    {}
  )

  console.debug(filters)

  // const filteredProducts = products.filter(product =>
  //   Object.keys(filters).every(key => {
  //     console.debug(filters[key])

  //     return filters[key].includes(product[key])
  //   })
  // )

  const filteredProducts = products.filter(product =>
    Object.keys(filters).every(key => filters[key].some(elem => product[key]?.includes(elem)))
  )

  //  ['birds', 'cliffs'].includes => 'birds' === 'birds' // 'birds' === ['birds', 'cliffs']
  // 'black'

  const resultCount = filteredProducts.length

  return (
    <Layout>
      <section className="my-8 grid grid-cols-12 gap-8">
        <div className="col-span-2 flex flex-col gap-8">
          {Object.keys(FILTERS).map(filter => (
            <Filter key={filter} filter={filter} items={FILTERS[filter]} />
          ))}
        </div>

        <div className="col-span-9">
          <h2 className="title mb-8">Artworks found: {resultCount}</h2>
          <div className="grid grid-cols-12 gap-8">
            {' '}
            {filteredProducts?.map(({ id, name, images, dollarAmount }) => (
              <Card key={id} id={id} title={name} image={images[0]} dollarAmount={dollarAmount} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AllProducts

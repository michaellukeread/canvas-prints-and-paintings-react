import { useSelector } from 'react-redux'
import { selectProducts } from 'redux/slices/productsSlice'

import Layout from 'components/Layout'
import Card from 'components/Card'
import Filter from 'components/Filter'

const AllProducts = () => {
  const products = useSelector(selectProducts)

  return (
    <Layout>
      <section className="my-8 grid grid-cols-12 gap-8">
        <div className="col-span-2 flex flex-col gap-8">
          <Filter filter="category" items={['Michael', 'Rohan']} />
          <Filter filter="frame colour" items={['blue', 'raspberry']} />
        </div>

        <div className="col-span-9 grid grid-cols-12 gap-8">
          {products?.map(({ id, name, images, dollarAmount }) => (
            <Card key={id} id={id} title={name} image={images[0]} dollarAmount={dollarAmount} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default AllProducts

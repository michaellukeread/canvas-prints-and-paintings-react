import { useSelector } from 'react-redux'
import { selectProducts } from 'redux/slices/productsSlice'

import Layout from 'components/Layout'
import Card from 'components/Card'

const AllProducts = () => {
  const products = useSelector(selectProducts)

  return (
    <Layout>
      <section className="my-8 grid grid-cols-auto-fill gap-8">
        {products?.map(({ id, name, images }) => (
          <Card key={id} id={id} title={name} image={images[0]} />
        ))}
      </section>
    </Layout>
  )
}

export default AllProducts

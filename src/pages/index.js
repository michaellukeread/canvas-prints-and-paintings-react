import Stripe from 'stripe'

import { GridLayout } from 'components/Layout'
import Link from 'components/Link'
import Card from 'components/Card'

import { summariseProduct, mergeProductsAndPrices, filterBy } from 'utils'
import { LIMIT as limit } from 'config'

export async function getStaticProps() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const allProducts = await stripe.products.list({ limit })
  const allPrices = await stripe.prices.list({ limit })

  const allItems = mergeProductsAndPrices(allProducts, allPrices)
  const products = allItems.map(item => summariseProduct(item))
  const filterProducts = filterBy(products, 'isFeatured', (item, key) => item[key])

  return { props: { products: filterProducts }, revalidate: 10 }
}

const Home = ({ products }) => {
  if (!products) return <div>Loading...</div>

  return (
    <>
      <div className="home--pattern flex w-full flex-col items-center justify-center gap-4 py-24 text-center">
        <h1 className="text-4xl font-bold text-white">Canvas Prints & Paintings</h1>
        <p className="max-w-[50%] text-white">
          Is your interior design itching? Explore our wide range of beautifully design Canvas and
          Paintings. All artworks can be shipped of collected from Australia.
        </p>
        <Link
          to="/products"
          className="rounded bg-primary px-4 py-2 text-white duration-150 hover:bg-white hover:text-black">
          Browse all products
        </Link>
      </div>

      <h3 className="my-8 text-center text-2xl font-semibold italic">Featured artworks</h3>

      <GridLayout className="container mx-auto my-8 px-8 md:px-0">
        {products?.map(item => (
          <article key={item.id} className="col-span-full md:col-span-1 lg:col-span-2">
            <Card {...item} />
          </article>
        ))}
      </GridLayout>
    </>
  )
}

export default Home

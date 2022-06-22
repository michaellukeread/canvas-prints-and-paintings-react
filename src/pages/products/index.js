import { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { FilterIcon } from '@heroicons/react/solid'
import Stripe from 'stripe'

import { classNames, summariseProduct } from 'utils'
import { LIMIT as limit, FILTERS } from 'config'

import { MainLayout } from 'components/Layout'
import Card from 'components/Card'
import Filter from 'components/Filter'

export async function getStaticProps() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const _products = await stripe.products.list({ limit })
  const prices = await stripe.prices.list({ limit })

  const mergedItems = _products.data
    .filter(a => prices.data.some(b => a.id === b.product))
    .map(item => ({ ...prices.data.find(elem => item.id === elem.product), ...item }))

  const products = mergedItems.map(item => summariseProduct(item))

  return { props: { products }, revalidate: 10 }
}

const AllProducts = ({ products }) => {
  const [toggle, setToggle] = useState(false)
  const router = useRouter()

  const { query } = router
  const count = products.length

  const filters = Object.keys(query).reduce(
    (acc, key) => ({
      ...acc,
      [key]: [...query[key].toString().split(',')]
    }),
    {}
  )

  const filteredProducts = products.filter(product =>
    Object.keys(filters).every(key => filters[key].some(elem => product[key]?.includes(elem)))
  )

  const handleToggle = useCallback(() => setToggle(prev => !prev), [setToggle])

  return (
    <MainLayout className="mt-8 space-y-8">
      <h1 className="text-teriary50 text-4xl font-semibold uppercase">Products</h1>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <button
            className={classNames(
              toggle ? 'text-teriary50' : 'text-teriary600',
              'inline-flex gap-2 font-medium tracking-wider duration-150'
            )}
            onClick={handleToggle}>
            <FilterIcon
              className={classNames(
                toggle ? 'text-teriary50' : 'text-teriary600',
                'h-6 w-6 duration-150'
              )}
            />
            Filter
          </button>
          <p className="text-teriary50 tracking-wider">({count}) Products</p>
        </div>

        {toggle && (
          <div className="bg-slate-900 flex gap-8 divide-x-2 rounded py-8 px-4">
            {Object.keys(FILTERS).map(filter => (
              <Filter key={filter} filter={filter} items={FILTERS[filter]} />
            ))}
          </div>
        )}

        {count > 0 ? (
          <div className="grid grid-cols-12 gap-8">
            {filteredProducts.map(({ id, name, images, dollarAmount }) => (
              <Card key={id} id={id} title={name} image={images[0]} dollarAmount={dollarAmount} />
            ))}
          </div>
        ) : (
          <h5 className="text-teriary50 text-center text-lg">
            No products found matching your filters.
          </h5>
        )}
      </section>
    </MainLayout>
  )
}

export default AllProducts

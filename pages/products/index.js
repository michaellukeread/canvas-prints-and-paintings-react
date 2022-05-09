import { useState, useCallback } from 'react'

import { FilterIcon } from '@heroicons/react/solid'

import Layout from 'components/Layout'
import Card from 'components/Card'
import Filter from 'components/Filter'

import { classNames } from 'utils'
import { FILTERS } from 'config'
import { useProducts } from 'hooks'

const AllProducts = () => {
  const [toggle, setToggle] = useState(false)
  const { products, count } = useProducts()

  const handleToggle = useCallback(() => setToggle(prev => !prev), [setToggle])

  return (
    <Layout className="mt-8 space-y-8">
      <h1 className="text-4xl font-semibold uppercase text-slate-50">Products</h1>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <button
            className={classNames(
              toggle ? 'text-slate-50' : 'text-slate-600',
              'inline-flex gap-2 font-medium tracking-wider duration-150'
            )}
            onClick={handleToggle}>
            <FilterIcon
              className={classNames(
                toggle ? 'text-slate-50' : 'text-slate-600',
                'h-6 w-6 duration-150'
              )}
            />
            Filter
          </button>
          <p className="tracking-wider text-slate-50">({count}) Products</p>
        </div>

        {toggle && (
          <div className="flex gap-8 divide-x-2 rounded bg-slate-900 py-8 px-4">
            {Object.keys(FILTERS).map(filter => (
              <Filter key={filter} filter={filter} items={FILTERS[filter]} />
            ))}
          </div>
        )}

        {count > 0 ? (
          <div className="grid grid-cols-12 gap-8">
            {products.map(({ id, name, images, dollarAmount }) => (
              <Card key={id} id={id} title={name} image={images[0]} dollarAmount={dollarAmount} />
            ))}
          </div>
        ) : (
          <h5 className="text-center text-lg text-slate-50">
            No products found matching your filters.
          </h5>
        )}
      </section>

      {/* <section className="my-8 grid grid-cols-12 gap-8">
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
      </section> */}
    </Layout>
  )
}

export default AllProducts

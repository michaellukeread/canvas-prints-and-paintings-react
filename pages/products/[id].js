import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { addToCart } from 'redux/slices/cartSlice'
import { selectProducts } from 'redux/slices/productsSlice'

import Layout from 'components/Layout'
import Disclosure from 'components/Disclosure'

import { DISCLOSURE_ITEMS } from 'config'
import { classNames } from 'utils'

const FRAME_COLOURS = {
  black: 'bg-black',
  white: 'bg-white'
}

const Product = () => {
  const { query: id } = useRouter()
  const dispatch = useDispatch()

  const products = useSelector(selectProducts)
  const product = products.find(({ id: pId }) => pId === id.id)

  const handleAddToCart = id => () => {
    dispatch(addToCart(id))
    toast.success(`Added ${product.name} to cart`, {
      position: toast.POSITION.BOTTOM_RIGHT
    })
  }

  return (
    <Layout>
      <section className="my-8 flex items-start justify-center gap-8">
        <Image src={product?.images[0]} width={300} height={300} alt="" />
        <div className="flex flex-col gap-4">
          <h1 className="title">{product?.name}</h1>
          <h2 className="price">${product?.dollarAmount}</h2>
          <p className="text-xl font-medium capitalize">{product?.orientation}</p>
          <p className="max-w-lg">{product?.description}</p>
          <p>Frame colours available:</p>
          <div className="flex gap-4">
            {product?.frameOptions.map(option => (
              <div
                key={option}
                className={classNames(
                  FRAME_COLOURS[option],
                  'h-4 w-4 rounded-full ring-2 ring-gray-500'
                )}
              />
            ))}
          </div>

          <button
            onClick={handleAddToCart(id)}
            className="rounded-lg bg-indigo-600 p-2 text-center font-bold text-white duration-150  hover:bg-indigo-700">
            Add to cart
          </button>
          <Disclosure items={DISCLOSURE_ITEMS} />
        </div>
      </section>
    </Layout>
  )
}

export default Product

import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import Image from 'next/image'
import Stripe from 'stripe'

import { DISCLOSURE_ITEMS, LIMIT as limit } from 'config'
import { classNames, summariseProduct } from 'utils'

import { addToCart } from 'redux/slices/cartSlice'
import Layout from 'components/Layout'
import Disclosure from 'components/Disclosure'
import Button from 'components/Button'

const FRAME_COLOURS = {
  black: 'bg-black',
  white: 'bg-white'
}

export async function getStaticPaths() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const products = await stripe.products.list({ limit })

  const paths = products.data.map(product => ({
    params: { id: product.id }
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const _product = await stripe.products.retrieve(params.id)
  const _prices = await stripe.prices.list({ limit })

  const price = _prices.data.find(({ product }) => product === _product.id)

  const productWithPrice = { ..._product, ...price }

  const product = summariseProduct(productWithPrice)

  return { props: { product } }
}

const Product = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = product => () => {
    dispatch(addToCart(product))
    toast.success(`Added ${product.name} to cart`, {
      position: toast.POSITION.BOTTOM_RIGHT
    })
  }

  return (
    <Layout>
      <section className="my-8 flex items-start justify-center gap-8">
        <Button variant="link" to="/products">
          Continue Shopping
        </Button>
        <Image src={product.images[0]} width={300} height={300} alt="" />
        <div className="flex flex-col gap-4">
          <h1 className="title">{product?.name}</h1>
          <h2 className="price">${product?.dollarAmount}</h2>
          <p className="text-xl font-medium capitalize">{product?.orientation}</p>
          <p className="max-w-lg">{product?.description}</p>
          <p>Frame colours available:</p>
          <div className="flex gap-4">
            {product?.frameColours?.map(option => (
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
            onClick={handleAddToCart(product)}
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

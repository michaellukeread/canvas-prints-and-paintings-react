import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import Image from 'next/image'
import Stripe from 'stripe'

import { DISCLOSURE_ITEMS, LIMIT as limit, CSS_FRAME_COLOURS } from 'config'
import { classNames, summariseProduct } from 'utils'

import { addToCart } from 'redux/slices/cartSlice'
import { MainLayout } from 'components/Layout'
import Disclosure from 'components/Disclosure'
import Button from 'components/Button'

export async function getStaticPaths() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const products = await stripe.products.list({ limit })

  //TODO: use title instead of id for better UX - this involves changing the getStaticProps method
  const paths = products.data.map(({ id }) => ({
    params: { id }
  }))

  // true, false or 'blocking'
  // https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

  const _product = await stripe.products.retrieve(params.id)
  const _prices = await stripe.prices.list({ limit })

  const price = _prices.data.find(({ product }) => product === _product.id)

  const productWithPrice = { ...price, ..._product }

  const product = summariseProduct(productWithPrice)

  return { props: { product }, revalidate: 10 }
}

const Product = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = product => () => {
    dispatch(addToCart(product))
    toast.success(`Added ${product.name} to cart`, {
      position: toast.POSITION.BOTTOM_RIGHT
    })
  }

  if (!product) <div>Loading...</div>

  return (
    <MainLayout>
      <section className="my-8 flex items-start justify-center gap-8">
        <Button variant="link" to="/products">
          Continue Shopping
        </Button>
        <Image
          placeholder="blur"
          blurDataURL={product.images[0]}
          src={product.images[0]}
          width={300}
          height={300}
          alt=""
          priority
        />
        <div className="flex flex-col gap-4">
          <h1 className="title">{product.name}</h1>
          <h2 className="price">${product.dollarAmount}</h2>
          <p className="text-xl font-medium capitalize">{product?.orientation}</p>
          <p className="max-w-lg">{product.description}</p>
          <p>Frame colours available:</p>
          <div className="flex gap-4">
            {product.frameColours.map(colour => (
              <div
                key={colour}
                className={classNames(
                  CSS_FRAME_COLOURS[colour],
                  'ring-gray-500 h-4 w-4 rounded-full ring-2'
                )}
              />
            ))}
          </div>

          <button
            onClick={handleAddToCart(product)}
            className="bg-indigo-600 hover:bg-indigo-700 rounded-lg p-2 text-center font-bold text-white duration-150">
            Add to cart
          </button>
          <Disclosure items={DISCLOSURE_ITEMS} />
        </div>
      </section>
    </MainLayout>
  )
}

export default Product

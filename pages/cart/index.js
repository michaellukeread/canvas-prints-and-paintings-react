import Image from 'next/image'
import { XIcon } from '@heroicons/react/solid'

import Layout from 'components/Layout'
import CheckoutForm from 'components/CheckoutForm'
import { SHIPPING_COST } from 'config'

import { useCart } from 'hooks'

const Cart = () => {
  const { productsInCart, handleRemoveFromCart, handleIncrementQuantity, handleDecrementQuantity } =
    useCart()

  const subtotal = productsInCart.reduce(
    (acc, elem) => (acc += elem.dollarAmount * elem.quantity),
    0
  )

  const total = subtotal + SHIPPING_COST

  return (
    <Layout>
      <h1 className="my-8 border-b-8 border-indigo-100 pb-8 text-5xl font-bold">Shopping Cart</h1>
      <section className="grid grid-cols-12 gap-8">
        <div className="col-span-8 flex flex-col items-center justify-center divide-y-4">
          {productsInCart.map(({ id, name, images, quantity, dollarAmount }) => (
            <div key={id} className="flex w-full items-start justify-between py-8">
              <div className="flex gap-8">
                <Image src={images[0]} alt={name} width={250} height={250} className="rounded" />
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p className="text font-semibold">${dollarAmount}</p>
                  </div>

                  <span>
                    <button onClick={handleIncrementQuantity(id)}>increase +</button>
                    <p>Quantity: {quantity}</p>
                    <button onClick={handleDecrementQuantity(id)}>decrease -</button>
                  </span>
                </div>
              </div>

              <button onClick={handleRemoveFromCart(id)}>
                <XIcon className="h-6 w-6 text-black" />
              </button>
            </div>
          ))}
        </div>
        <div className="col-span-4 rounded bg-indigo-50 p-4">
          <h2 className="text-2xl">Order summary</h2>
          <div className="divide-y-2 divide-indigo-100">
            <span className="flex items-center justify-between py-4">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </span>
            <span className="flex items-center justify-between py-4">
              <p>Shipping</p>
              <p>${SHIPPING_COST}</p>
            </span>
            <span className="flex items-center justify-between py-4">
              <p className="font-bold">Total</p>
              <p className="font-bold">${total.toFixed(2)}</p>
            </span>
          </div>
          <CheckoutForm />
        </div>
      </section>
    </Layout>
  )
}

export default Cart

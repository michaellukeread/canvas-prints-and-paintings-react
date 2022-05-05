import Image from 'next/image'
import { XIcon } from '@heroicons/react/solid'

import { DELIVERY_OPTIONS } from 'config'
import { useCart, useCheckout } from 'hooks'

import Layout from 'components/Layout'
import RadioGroup from 'components/RadioGroup'

import { useState } from 'react'

const Cart = () => {
  const { productsInCart, handleRemoveFromCart, handleIncrementQuantity, handleDecrementQuantity } =
    useCart()
  const [deliveryStatus, setDeliveryStatus] = useState(DELIVERY_OPTIONS[0].value)

  const { handleSubmit } = useCheckout(deliveryStatus)
  const subtotal = productsInCart.reduce(
    (acc, elem) => (acc += elem.dollarAmount * elem.quantity),
    0
  )

  return (
    <Layout>
      <section className="my-8 ">
        <h1 className=" border-b-8 border-indigo-100 py-8 text-5xl font-bold">Shopping Cart</h1>
        <div className="grid grid-cols-12 gap-8">
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
                <RadioGroup
                  onChange={setDeliveryStatus}
                  title="Delivery Method"
                  value={deliveryStatus}
                  items={DELIVERY_OPTIONS}
                />
              </span>
              <span className="flex items-center justify-between py-4">
                <p className="font-bold">Total</p>
                <p className="font-bold">${subtotal.toFixed(2)}</p>
              </span>
              <span className="flex items-center justify-between py-4">
                <p>Tax and Delivery at checkout</p>
              </span>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full rounded bg-indigo-600 p-2 font-bold text-white">
              Submit
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Cart

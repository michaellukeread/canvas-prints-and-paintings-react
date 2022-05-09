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
      <h1 className="my-8 text-4xl font-semibold uppercase text-slate-50">Shopping Cart</h1>
      <section className="flex gap-16">
        <div className="flex-1">
          <div className="col-span-8 flex flex-col items-center justify-center divide-y-4">
            {productsInCart.map(({ id, name, images, quantity, dollarAmount }) => (
              <div key={id} className="flex w-full items-start justify-between py-8">
                <div className="flex gap-8">
                  <Image src={images[0]} alt={name} width={250} height={250} />
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
        </div>
        <div className="sticky top-4 col-span-4 h-max rounded bg-slate-900 p-4">
          <h2 className="text-lg font-medium tracking-widest text-slate-50">Order summary</h2>
          <div className="divide-y-2 divide-slate-50">
            <span className="flex items-center justify-between py-4">
              <RadioGroup
                onChange={setDeliveryStatus}
                title="Delivery Method"
                value={deliveryStatus}
                items={DELIVERY_OPTIONS}
              />
            </span>
            <span className="flex items-center justify-between py-4 tracking-widest text-slate-50">
              <p className="font-medium">Total</p>
              <p className="font-medium">${subtotal.toFixed(2)}</p>
            </span>
            <span className="flex items-center justify-between py-4 text-slate-50">
              <p>Tax and Delivery at checkout</p>
            </span>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full rounded bg-slate-600 p-2 font-medium uppercase tracking-widest text-slate-50 duration-150 hover:bg-slate-200 hover:text-slate-900">
            Submit
          </button>
        </div>
      </section>
    </Layout>
  )
}

export default Cart

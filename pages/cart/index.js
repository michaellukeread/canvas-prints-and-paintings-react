import Image from 'next/image'

import { DELIVERY_OPTIONS } from 'config'
import { useCart, useCheckout } from 'hooks'
import empty_cart from 'assets/images/empty_cart.svg'

import Layout from 'components/Layout'
import RadioGroup from 'components/RadioGroup'
import Link from 'components/Link'
import QuantitySelector from 'components/QuantitySelector'

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

  const hasContent = productsInCart.length > 0

  return (
    <Layout>
      <section className="my-8 flex items-end justify-between">
        <h1 className="page-title">Your cart</h1>
        <Link to="/products" className="link" arrow>
          Continue shopping
        </Link>
      </section>

      <section>
        {hasContent && (
          <div className="mb-8 grid grid-cols-3 border-b border-slate-700 pb-2">
            <h6 className="subtitle">Product</h6>
            <h6 className="subtitle">Quantity</h6>
            <h6 className="subtitle text-right">Total</h6>
          </div>
        )}

        {hasContent &&
          productsInCart.map(({ id, name, images, quantity, dollarAmount }) => (
            <div
              key={id}
              className="my-8 grid grid-cols-3 border-b-2 border-slate-600 pb-8 text-slate-50">
              <article className="flex flex-col gap-4 lg:flex-row">
                <div>
                  <Image src={images[0]} alt={name} width={100} height={100} className="rounded" />
                </div>

                <div>
                  <h2 className="product-title">{name}</h2>
                  <p className="price">${dollarAmount}</p>
                </div>
              </article>

              <div>
                <QuantitySelector
                  id={id}
                  decrement={handleDecrementQuantity}
                  increment={handleIncrementQuantity}
                  remove={handleRemoveFromCart}
                  quantity={quantity}
                />
              </div>

              <p className="price text-right">
                ${Math.round((dollarAmount * quantity + Number.EPSILON) * 100) / 100}
              </p>
            </div>
          ))}

        {!hasContent && (
          <div className="flex flex-col items-center rounded-lg bg-slate-50 p-8">
            <h1 className="text-2xl font-medium uppercase tracking-wide">
              Your cart is currently empty...
            </h1>
            <Image src={empty_cart} width={300} height={300} alt="empty cart" />
          </div>
        )}
        {hasContent && (
          <div className="space-y-4 text-right text-slate-50">
            <span className="inline-flex items-center gap-2">
              <h5 className="product-title">Subtotal:</h5>
              <p className="price ">${subtotal.toFixed(2)} AUD</p>
            </span>
            <p className="text-xs font-extralight tracking-wider">
              Taxes and shipping cost calculated at checkout
            </p>
            <span className="flex items-center justify-end py-4">
              <RadioGroup
                onChange={setDeliveryStatus}
                title="Delivery Method"
                value={deliveryStatus}
                items={DELIVERY_OPTIONS}
              />
            </span>
            <div className="border-t-2 border-slate-500 pt-8">
              <button
                onClick={handleSubmit}
                className="w-max bg-lime-200 p-4 text-sm text-slate-900 duration-300 hover:bg-slate-50 hover:text-slate-900">
                Check out
              </button>
            </div>
          </div>
        )}
      </section>
    </Layout>
  )
}

export default Cart

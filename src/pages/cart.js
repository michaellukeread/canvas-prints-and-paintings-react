import { useState } from 'react'
import Image from 'next/image'

import { DELIVERY_OPTIONS } from 'config'
import { useCart, useCheckout } from 'hooks'

import empty_cart from 'assets/images/empty_cart.svg'
import { MainLayout } from 'components/Layout'
import RadioGroup from 'components/RadioGroup'
import Link from 'components/Link'
import Button from 'components/Button'
import QuantitySelector from 'components/QuantitySelector'

const Cart = () => {
  const { cart, handleRemoveFromCart, handleIncrementQuantity, handleDecrementQuantity } = useCart()
  const [deliveryStatus, setDeliveryStatus] = useState(DELIVERY_OPTIONS[0].value)

  const { handleSubmit } = useCheckout(deliveryStatus)
  const subtotal = cart.reduce((acc, elem) => (acc += elem.price * elem.quantity), 0)

  const hasContent = cart.length > 0

  return (
    <MainLayout>
      <section className="my-8 flex items-end justify-between">
        <h1 className="page-title">Your cart</h1>
        <Button variant="link" to="/products">
          Continue Shopping
        </Button>
      </section>

      <section>
        {hasContent && (
          <div className="border-slate-700 mb-8 grid grid-cols-3 border-b pb-2">
            <h6 className="subtitle">Product</h6>
            <h6 className="subtitle">Quantity</h6>
            <h6 className="subtitle text-right">Total</h6>
          </div>
        )}

        {hasContent &&
          cart.map(({ id, name, images, quantity, price }) => (
            <div
              key={id}
              className="border-slate-600 text-teriary50 my-8 grid grid-cols-3 border-b-2 pb-8">
              <article className="flex flex-col gap-4 lg:flex-row">
                <Link className="product-title" to={`/products/${id}`}>
                  <Image src={images[0]} alt={name} width={100} height={100} className="rounded" />
                </Link>

                <div>
                  <Link className="product-title" to={`/products/${id}`}>
                    {name}
                  </Link>
                  <p className="price">${price}</p>
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
                ${Math.round((price * quantity + Number.EPSILON) * 100) / 100}
              </p>
            </div>
          ))}

        {!hasContent && (
          <div className="bg-slate-50 flex flex-col items-center rounded-lg p-8">
            <h1 className="text-2xl font-medium uppercase tracking-wide">
              Your cart is currently empty...
            </h1>
            <Image src={empty_cart} width={300} height={300} alt="empty cart" />
          </div>
        )}
        {hasContent && (
          <div className="text-teriary50 space-y-4 text-right">
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
            <div className="border-slate-500 border-t-2 pt-8">
              <button
                onClick={handleSubmit}
                className="bg-lime-200 text-teriary900 hover:bg-slate-50 hover:text-teriary900 w-max p-4 text-sm duration-300">
                Check out
              </button>
            </div>
          </div>
        )}
      </section>
    </MainLayout>
  )
}

export default Cart

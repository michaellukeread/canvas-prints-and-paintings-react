import { useSelector } from 'react-redux'

import { selectCart } from 'redux/slices/cartSlice'
import { selectProducts } from 'redux/slices/productsSlice'

import { CURRENCY, SHIPPING_COST } from 'config'
import { fetchPostJSON, getStripe, formatAmountForStripe } from 'utils'

const useCheckoutForm = () => {
  const cart = useSelector(selectCart)
  const products = useSelector(selectProducts)
  const productsInCart = cart
    .filter(a => products.some(b => a.id === b.id))
    .map(item => ({ ...item, ...products.find(elem => item.id === elem.id) }))

  const line_items = productsInCart.map(({ name, dollarAmount, quantity }) => ({
    name,
    amount: formatAmountForStripe(dollarAmount, CURRENCY),
    currency: CURRENCY,
    quantity
  }))

  const subtotal = productsInCart.reduce(
    (acc, elem) => (acc += elem.dollarAmount * elem.quantity),
    0
  )

  const total = subtotal + SHIPPING_COST
  console.debug('total', total)

  const handleSubmit = async e => {
    e.preventDefault()
    // Create a Checkout Session.
    const checkoutSession = await fetchPostJSON('/api/checkout_sessions', {
      amount: total,
      line_items
    })

    if (checkoutSession.statusCode === 500) {
      console.error(checkoutSession.message)
      return
    }

    // Redirect to Checkout.
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: checkoutSession.id
    })
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message)
  }

  return { handleSubmit }
}

export default useCheckoutForm

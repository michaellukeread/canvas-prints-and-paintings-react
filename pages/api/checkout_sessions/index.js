/* https://stripe.com/docs/api/checkout/sessions/create */

import Stripe from 'stripe'

import {
  MIN_AMOUNT,
  MAX_AMOUNT,
  POST,
  DOMESTIC_SHIPPING_ID,
  PAYMENT_METHOD,
  SUBMIT_TYPE
} from 'config'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const checkoutHandler = async (req, res) => {
  const {
    method,
    body: { amount, line_items },
    headers: { origin }
  } = req

  if (method !== POST) {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }

  if (!(amount >= MIN_AMOUNT && amount <= MAX_AMOUNT))
    throw new Error(`${amount} is an invalid amount.`)

  const params = {
    shipping_rates: [DOMESTIC_SHIPPING_ID],
    submit_type: SUBMIT_TYPE,
    payment_method_types: [PAYMENT_METHOD],
    line_items,
    success_url: `${origin}/`,
    cancel_url: `${origin}/cart`,
    phone_number_collection: {
      enabled: true
    }
  }

  try {
    const checkoutSession = await stripe.checkout.sessions.create(params)
    res.status(200).json(checkoutSession)
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Internal server error'
    res.status(500).json({ statusCode: 500, message: errorMessage })
  }
}

export default checkoutHandler

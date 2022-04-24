import Stripe from 'stripe'

import { MIN_AMOUNT, MAX_AMOUNT } from 'config'
// import { formatAmountForStripe } from 'utils'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-08-27'
})

const checkoutHandler = async (req, res) => {
  if (req.method === 'POST') {
    const amount = req.body.amount
    try {
      // Validate the amount that was passed from the client.
      if (!(amount >= MIN_AMOUNT && amount <= MAX_AMOUNT)) {
        throw new Error('Invalid amount.')
      }
      // Create Checkout Sessions from body params.
      const params = {
        shipping_rates: ['shr_1KqZAYAsKMmbQm49fbk5AeJN'],
        submit_type: 'pay',
        payment_method_types: ['card'],
        line_items: req.body.line_items,
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cart`
      }
      const checkoutSession = await stripe.checkout.sessions.create(params)

      res.status(200).json(checkoutSession)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Internal server error'
      res.status(500).json({ statusCode: 500, message: errorMessage })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}

export default checkoutHandler

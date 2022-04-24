/* https://stripe.com/docs/api/prices/list */

import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

import { LIMIT as limit, GET } from 'config'

const priceHandler = async (req, res) => {
  const { method } = req

  if (method !== GET) {
    res.setHeader('Allow', 'GET')
    res.status(405).end('Method Not Allowed')
  }

  try {
    const data = await stripe.prices.list({ limit })
    res.status(200).json(data)
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Internal server error'
    res.status(500).json({ statusCode: 500, message: errorMessage })
  }
}

export default priceHandler

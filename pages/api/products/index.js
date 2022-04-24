/* see https://stripe.com/docs/api/products/list */

import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

import { LIMIT as limit, GET } from 'config'

const productsHandler = async (req, res) => {
  const { method } = req

  if (method !== GET) {
    res.setHeader('Allow', 'GET')
    res.status(405).end('Method Not Allowed')
  }

  try {
    const data = await stripe.products.list({ limit })
    res.status(200).json(data)
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Internal server error'
    res.status(500).json({ statusCode: 500, message: errorMessage })
  }
}

export default productsHandler

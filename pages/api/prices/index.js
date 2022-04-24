import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const priceHandler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const data = await stripe.prices.list({
        limit: 100
      })
      res.status(200).json(data)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Internal server error'
      res.status(500).json({ statusCode: 500, message: errorMessage })
    }
  } else {
    res.setHeader('Allow', 'GET')
    res.status(405).end('Method Not Allowed')
  }
}

export default priceHandler

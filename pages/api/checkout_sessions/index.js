/* https://stripe.com/docs/api/checkout/sessions/create */

import Stripe from 'stripe'

import { MIN_AMOUNT, MAX_AMOUNT, POST, PAYMENT_METHOD, SUBMIT_TYPE } from 'config'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const checkoutHandler = async (req, res) => {
  const {
    method,
    body: { amount, line_items, delivery_status },
    headers: { origin }
  } = req

  if (method !== POST) {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }

  if (!(amount >= MIN_AMOUNT && amount <= MAX_AMOUNT))
    throw new Error(`${amount} is an invalid amount.`)

  const isDelivery = delivery_status === 'delivery'

  const shipping_address_collection = isDelivery
    ? {
        allowed_countries: ['AU']
      }
    : {}

  const PICKUP = {
    shipping_rate_data: {
      type: 'fixed_amount',
      fixed_amount: {
        amount: 0,
        currency: 'aud'
      },
      display_name: 'Pickup'
    }
  }

  const METRO_DELIVERY = {
    shipping_rate_data: {
      type: 'fixed_amount',
      fixed_amount: {
        amount: 1500,
        currency: 'aud'
      },
      display_name: 'Metro delivery',
      // Delivers in exactly 1 business day
      delivery_estimate: {
        minimum: {
          unit: 'business_day',
          value: 3
        },
        maximum: {
          unit: 'business_day',
          value: 5
        }
      }
    }
  }

  const RURAL_DELIVERY = {
    shipping_rate_data: {
      type: 'fixed_amount',
      fixed_amount: {
        amount: 3000,
        currency: 'aud'
      },
      display_name: 'Rural delivery',
      // Delivers in exactly 1 business day
      delivery_estimate: {
        minimum: {
          unit: 'business_day',
          value: 8
        },
        maximum: {
          unit: 'business_day',
          value: 10
        }
      }
    }
  }

  const shipping_options = isDelivery ? [METRO_DELIVERY, RURAL_DELIVERY] : [PICKUP]

  const params = {
    shipping_address_collection,
    shipping_options,
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

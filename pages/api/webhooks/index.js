/* https://stripe.com/docs/api/webhook_endpoints */

import Cors from 'micro-cors'

import { ALLOWED_METHODS, POST } from 'config'

const cors = Cors({ allowMethods: ALLOWED_METHODS })
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

const webhookHandler = async (req, res) => {
  const { method } = req

  if (method !== POST) return

  const buf = await buffer(req)
  const sig = req.headers['stripe-signature']

  try {
    const event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret)
    console.log('✅ Success:', event.id)
  } catch (err) {
    console.log(`❌ Error message: ${err.message}`)
    res.status(400).send(`Webhook Error: ${err.message}`)
    return
  }
}

export default cors(webhookHandler)

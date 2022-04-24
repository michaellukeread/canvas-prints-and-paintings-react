import Cors from 'micro-cors'
import { METHODS } from './config'

const cors = Cors({
  allowMethods: METHODS
})
// ...

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

// Stripe requires the raw body to construct the event.
export const config = {
  api: {
    bodyParser: false
  }
}

const webhookHandler = async (req, res) => {
  if (req.method === 'POST') {
    const buf = await buffer(req)
    const sig = req.headers['stripe-signature']

    let event

    try {
      event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret)
    } catch (err) {
      // On error, log and return the error message
      console.log(`❌ Error message: ${err.message}`)
      res.status(400).send(`Webhook Error: ${err.message}`)
      return
    }

    // Successfully constructed event
    console.log('✅ Success:', event.id)
  }
}

export default cors(webhookHandler)

import CheckoutForm from 'components/CheckoutForm'
import Layout from 'components/Layout'

const Checkout = () => (
  <Layout className="py-4 flex items-center justify-center">
    <div className="w-1/2 p-4  rounded bg-gray-50 flex items-center justify-center flex-col gap-4">
      <h1 className="font-bold text-4xl">Checkout</h1>
      <CheckoutForm />
    </div>
  </Layout>
)

export default Checkout

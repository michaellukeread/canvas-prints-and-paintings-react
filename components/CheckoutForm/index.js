import PureCheckoutForm from './CheckoutForm'
import useCheckoutForm from './hooks'

const CheckoutForm = () => {
  const { handleSubmit } = useCheckoutForm()

  return <PureCheckoutForm handleSubmit={handleSubmit} />
}

export default CheckoutForm

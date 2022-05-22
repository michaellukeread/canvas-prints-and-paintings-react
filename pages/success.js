import Layout from 'components/Layout'

const Success = () => {
  return (
    <Layout className="flex flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-4xl">Your order was successfully purchased</h1>
      <p className="max-w-lg text-xl">Please check your email for the receipt.</p>
    </Layout>
  )
}

export default Success

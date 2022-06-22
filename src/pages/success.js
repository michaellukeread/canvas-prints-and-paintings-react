import { MainLayout } from 'components/Layout'

import { useCart } from 'hooks'
import { useEffect } from 'react'

const Success = () => {
  // Logic to wipe cart here
  const { handleClearCart } = useCart()
  useEffect(() => {
    handleClearCart()
  }, [handleClearCart])

  return (
    <MainLayout className="flex flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-4xl text-white">Your order was successfully completed.</h1>
      <p className="text-teriary100 max-w-lg text-xl">Please check your email for the receipt.</p>
    </MainLayout>
  )
}

export default Success

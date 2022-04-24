// import { useEffect } from 'react'
// import { fetchGetJSON } from 'utils'

import Layout from 'components/Layout'

const Contact = () => {
  // useEffect(() => {
  //   const fetch = async () => {
  //     const response = await fetchGetJSON('/api/price')

  //     console.debug(response)
  //   }

  //   fetch()
  // }, [])

  return (
    <Layout className="flex flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-7xl uppercase">Contact</h1>
    </Layout>
  )
}

export default Contact

import Image from 'next/image'

import Layout from 'components/Layout'
import Link from 'components/Link'

const Home = () => (
  <Layout className="flex flex-col items-center justify-center gap-4 text-center">
    <Image src="/home_artwork.jpg" alt="" width="600" height="420" />
    <h1 className="text-4xl">Beautiful Wall Art For Your Home Or Business</h1>
    <p className="max-w-lg text-xl">
      Is your interior design itching? Explore our wide range of beautifully design Canvas and
      Paintings. All artworks can be shipped of collected from Australia.
    </p>
    <Link
      to="/products"
      className="rounded p-2 font-bold text-indigo-900 ring-2 ring-indigo-900 duration-150 hover:bg-indigo-600 hover:text-white hover:ring-0">
      View all products
    </Link>
  </Layout>
)

export default Home

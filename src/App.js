import { useState, useEffect } from 'react'

import NavigationBar from './components/NavigationBar'
import Landing from './components/Landing'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { createClient } from 'contentful'

const client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_API_CONTENT_DELIVERY,
})

const App = () => {
  const [products, setProducts] = useState([])
  const [aboutSummary, setAboutSummary] = useState()
  const [aboutFooter, setAboutFooter] = useState()

  useEffect(() => {
    const getProducts = async () => {
      const response = await client.getEntries()
      const filteredProducts = response.items.filter(
        (item) => item.sys.contentType.sys.id === 'product'
      )
      const filteredAbout = response.items.filter(
        (item) => item.sys.contentType.sys.id === 'about'
      )
      const aboutSummary = filteredAbout.find((item) => item.fields.id === 2)
      const aboutFooter = filteredAbout.find((item) => item.fields.id === 1)

      console.debug(aboutSummary)

      setAboutSummary(aboutSummary.fields)
      setAboutFooter(aboutFooter.fields)

      const items = filteredProducts.reduce(
        (acc, item) => [
          ...acc,
          { ...item.fields, image: item.fields.image.fields.file },
        ],
        []
      )
      setProducts(items)
    }

    getProducts()
  }, [])

  return (
    <>
      <NavigationBar />
      <main>
        <Landing />
        <About aboutSummary={aboutSummary} />
        <Gallery products={products} />
        <Contact />
      </main>
      <Footer aboutFooter={aboutFooter} />
    </>
  )
}

export default App

import { useState, useEffect } from 'react'
import { createClient } from 'contentful'

const client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_API_CONTENT_DELIVERY,
})

const useGallery = () => {
  const [open, setOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [article, setArticle] = useState({})

  useEffect(() => {
    const getProducts = async () => {
      const response = await client.getEntries()

      console.debug('response', response)

      const items = response.items.reduce(
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

  const findArticle = (id) => {
    const a = products.find((item) => item.id === id)
    setArticle(a)
  }

  const doClose = () => setOpen(false)
  const doOpen = (id) => () => {
    findArticle(id)
    setOpen(true)
  }

  return { open, doOpen, doClose, article, products }
}

export default useGallery

import { useState } from 'react'

const useGallery = (products) => {
  const [open, setOpen] = useState(false)
  const [article, setArticle] = useState({})

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const response = await client.getEntries()
  //     console.debug(response)
  //     const filteredResponse = response.items.filter(
  //       (item) => item.sys.contentType.sys.id === 'product'
  //     )

  //     const items = filteredResponse.reduce(
  //       (acc, item) => [
  //         ...acc,
  //         { ...item.fields, image: item.fields.image.fields.file },
  //       ],
  //       []
  //     )
  //     setProducts(items)
  //   }

  //   getProducts()
  // }, [])

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

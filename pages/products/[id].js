import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Layout from 'components/Layout'
import Disclosure from 'components/Disclosure'
import { addToCart } from 'redux/slices/cartSlice'
import { selectProducts } from 'redux/slices/productsSlice'
import { useDispatch } from 'react-redux'

import { DISCLOSURE_ITEMS } from 'config'

const Product = () => {
  const { query: id } = useRouter()
  const dispatch = useDispatch()

  const products = useSelector(selectProducts)
  const product = products.find(({ id: pId }) => pId === id.id)

  const handleAddToCart = id => () => {
    dispatch(addToCart(id))
    toast.success(`Added ${product.name} to cart`, {
      position: toast.POSITION.BOTTOM_RIGHT
    })
  }

  return (
    <Layout>
      <section className="my-8 flex items-start justify-center gap-8">
        <Image src={product?.images[0]} width={300} height={300} alt="" />
        <div className="flex flex-col gap-4">
          <h1 className="title">{product?.name}</h1>
          <h2 className="price">${product?.dollarAmount}</h2>
          <p className="max-w-lg">
            Do eiusmod ullamco proident exercitation ad amet ipsum non deserunt non sunt ex duis. Ut
            amet aliqua id qui quis minim sunt. Non duis nulla enim et laboris exercitation
            cupidatat qui do. Ut incididunt mollit fugiat commodo ullamco amet tempor ex ipsum.
            Ullamco voluptate in ex eiusmod occaecat. Velit ullamco aliqua Lorem eu in adipisicing
            cillum deserunt do. Quis id in anim velit proident minim eiusmod occaecat excepteur
            officia voluptate.
          </p>
          <button
            onClick={handleAddToCart(id)}
            className="rounded-lg bg-indigo-600 p-2 text-center font-bold text-white duration-150  hover:bg-indigo-700">
            Add to cart
          </button>
          <Disclosure items={DISCLOSURE_ITEMS} />
        </div>
      </section>
    </Layout>
  )
}

export default Product

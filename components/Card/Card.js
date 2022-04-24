import Link from 'next/link'
import Image from 'next/image'

const Card = ({ id, title, image }) => (
  <Link href={`/products/${id}`}>
    <a className="overflow-hidden rounded bg-slate-50">
      {image && <Image src={image} alt={title} width={250} height={250} />}
      <h1>{title}</h1>
    </a>
  </Link>
)

export default Card

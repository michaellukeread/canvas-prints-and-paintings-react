import Link from 'next/link'
import Image from 'next/image'

const Card = ({ id, title, image, dollarAmount }) => (
  <Link href={`/products/${id}`}>
    <a className="col-span-12 flex flex-col gap-4 overflow-hidden rounded-md md:col-span-6 lg:col-span-4">
      {image && (
        <Image
          src={image}
          alt={title}
          width="100%"
          height="100%"
          layout="responsive"
          className="duration-150 hover:scale-105"
        />
      )}
      <span className="flex items-center justify-between px-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-2xl font-bold">${dollarAmount}</p>
      </span>
    </a>
  </Link>
)

export default Card

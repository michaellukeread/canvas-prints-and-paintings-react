import Link from 'next/link'
import Image from 'next/image'

const Card = ({ id, title, image, dollarAmount }) => (
  <div className="col-span-12 flex flex-col gap-4  md:col-span-6 lg:col-span-4">
    <Link href={`/products/${id}`}>
      <a className="overflow-hidden rounded-md">
        {image && (
          <Image
            src={image}
            alt={title}
            width="100%"
            height="100%"
            layout="responsive"
            className="rounded-md duration-150 hover:scale-105"
          />
        )}
      </a>
    </Link>
    <span className="flex items-center justify-between px-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-2xl font-bold">${dollarAmount}</p>
    </span>
  </div>
)

export default Card

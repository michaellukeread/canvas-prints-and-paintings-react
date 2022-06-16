import Link from 'next/link'
import Image from 'next/image'

const Card = ({ id, title, image, dollarAmount }) => (
  <div className="col-span-12 flex flex-col gap-2 text-slate-300 md:col-span-6 lg:col-span-3">
    <Link href={`/products/${id}`}>
      <a className="mb-1 overflow-hidden">
        {image && (
          <Image
            placeholder="blur"
            blurDataURL={image}
            src={image}
            alt={title}
            width="100%"
            height="100%"
            layout="responsive"
            className="duration-150 hover:scale-105"
            priority
          />
        )}
      </a>
    </Link>
    <h4 className="text-lg font-medium leading-tight tracking-wider">{title}</h4>
    <p className="text-sm leading-tight">${dollarAmount} AUD</p>
  </div>
)

export default Card

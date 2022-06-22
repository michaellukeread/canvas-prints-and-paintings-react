import Link from 'next/link'
import Image from 'next/image'

import { number, string } from 'prop-types'

const Card = ({ id, name, featuredImage, price }) => (
  <div className="flex flex-col gap-2 text-black">
    <Link href={`/products/${id}`}>
      <a className="overflow-hidden">
        {featuredImage && (
          <Image
            placeholder="blur"
            blurDataURL={featuredImage}
            src={featuredImage}
            alt={name}
            width="100%"
            height="100%"
            layout="responsive"
            className="duration-150 hover:scale-105"
            priority
          />
        )}
        <h4 className="mt-4 text-lg font-medium leading-tight tracking-wider">{name}</h4>
        <p className="text-sm font-bold leading-tight">${price} AUD</p>
      </a>
    </Link>
  </div>
)

Card.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  price: number.isRequired,
  featuredImage: string
}

Card.defaultProps = {
  featuredImage: undefined
}

export default Card

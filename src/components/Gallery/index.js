import PureGallery from './Gallery'
import Slideover from '../Slideover'
import Button from '../Button'

import useGallery from './hooks'

const Gallery = () => {
  const { open, doOpen, doClose, article, products } = useGallery()
  const { id, title, image, now, was, width, height, summary, paymentLink } =
    article

  return (
    <>
      <PureGallery products={products} doOpen={doOpen} />
      <Slideover open={open} doClose={doClose} title={title} subtitle={id}>
        <div className="flex flex-col items-center gap-4">
          <img src={image?.url} alt={title} />
          <p className="text-xl text-center">
            <del>$AUD {was}</del> $AUD {now}
          </p>
          <p className="text text-center">
            W: {width}cm H: {height}cm
          </p>
          <p>{summary}</p>
          <Button link={paymentLink}>Purchase</Button>
        </div>
      </Slideover>
    </>
  )
}

export default Gallery

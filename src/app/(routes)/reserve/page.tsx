import { Carousel } from '@/components/Carousel'
import img1 from '../../../../public/photos/07.avif'

const IMAGES = [img1, img1, img1]

const ReservePage = () => {
  return (
    <div>
      <Carousel images={IMAGES} />
    </div>
  )
}

export default ReservePage

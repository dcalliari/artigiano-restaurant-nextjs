import { Carousel } from '@/components/Carousel'

import img1 from '../../../../public/images/menus/02.jpg'
import img2 from '../../../../public/images/menus/01.jpg'
import img3 from '../../../../public/images/menus/03.jpg'

const IMAGES = [img1, img2, img3]

const MenuPage = () => {
  return (
    <div>
      <Carousel images={IMAGES} />
      <div className="m-auto block w-[58rem]">
        <h1 className="m-10 text-wrap text-center font-serif text-5xl italic text-white">
          Comunidade
        </h1>
        <p className="text-justify font-serif text-lg text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          soluta voluptates molestias veritatis suscipit asperiores sed, illo
          nisi omnis voluptatem vel aspernatur vero dicta laborum quibusdam
          culpa ipsum illum magnam!
        </p>
      </div>
    </div>
  )
}

export default MenuPage

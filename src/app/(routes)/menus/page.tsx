import { Carousel } from '@/components/Carousel'
import { Tabs } from '@/components/Tabs'
import img1 from '../../../../public/photos/07.avif'

const IMAGES = [img1, img1, img1]

const MenuPage = () => {
  return (
    <div>
      <Carousel images={IMAGES} />
      <div className="m-auto block w-[58rem]">
        <h1 className="m-10 text-wrap text-center font-serif text-5xl italic text-white">
          Menu
        </h1>
        <p className="text-justify font-serif text-lg text-white">
          Our kitchen is rooted in an appreciation for exceptional homegrown
          ingredients, thoughtful-yet-simple preparations, and a passion for
          breathing new life into Old World recipes. Desserts borrow from
          treasured family recipes extending back four generations. In addition
          to the menus listed here, we offer a selection of daily specials.
        </p>
        <div>
          <Tabs />
        </div>
      </div>
    </div>
  )
}

export default MenuPage

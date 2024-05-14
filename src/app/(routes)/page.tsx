import { BoxLeft } from '@/components/box/BoxLeft'
import { BoxRight } from '@/components/box/BoxRight'
import { Gallery } from '@/components/gallery'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Gallery />
      <section className="container content-center items-center px-8 pb-12 pt-16 text-center">
        <h2 className="mx-auto text-wrap font-serif text-3xl italic text-white lg:w-3/4 xl:w-1/2">
          A cozy, nostalgic Mediterranean restaurant and wine bar in the heart
          of Belém
        </h2>
      </section>
      <div className="flex flex-col bg-zinc-700">
        <BoxLeft
          name="Menu"
          description="Reimagining Belém’s rich culinary history through comforting, eclectic
        Brazilian cuisine with deep Mediterranean influences."
          button="Menus"
          buttonHref="/menus"
          imageSrc="/images/menu.jpg"
        />
        <BoxRight
          name="Reservations"
          description="Artigiano is very much a neighborhood restaurant, and we always
      reserve seats for walk-in guests in our dining room. Reservations are
      available via Google."
          button="Reserve a Table"
          buttonHref="/reserve"
          imageSrc="/images/reservation.jpg"
        />
      </div>
    </div>
  )
}

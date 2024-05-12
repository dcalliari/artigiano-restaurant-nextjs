import Gallery from '@/components/gallery'
import Grid from '@/components/grid'

const DashboardPage = () => {
  return (
    <div className="flex flex-col">
      <Gallery />
      <section className="container content-center items-center px-8 pb-12 pt-16 text-center">
        <h2 className="mx-auto text-wrap font-serif text-3xl italic text-white lg:w-3/4 xl:w-1/2">
          A cozy, nostalgic Mediterranean restaurant and wine bar in the heart
          of Belém
        </h2>
      </section>
      <Grid />
    </div>
  )
}

export default DashboardPage

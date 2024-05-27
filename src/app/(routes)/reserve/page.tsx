import { Carousel } from '@/components/Carousel'
import { Button } from '@/components/Button'

import img1 from '../../../../public/images/reserve/01.jpg'
import img2 from '../../../../public/images/reserve/02.jpg'
import img3 from '../../../../public/images/reserve/03.jpg'

const IMAGES = [img1, img2, img3]

const ReservePage = () => {
  return (
    <div>
      <Carousel images={IMAGES} />
      <div className="m-auto block w-[58rem]">
        <h1 className="m-10 text-wrap text-center font-serif text-5xl italic text-white">
          Reservas
        </h1>
        <p className="mb-5 text-justify font-serif text-lg text-white">
          Aceitamos reservas todos os dias da semana, com até 30 dias de
          antecedência, através do Google.
        </p>
        <p className="mb-5 text-justify font-serif text-lg text-white">
          Para grupos de nove ou mais pessoas, por favor envie um e-mail para{' '}
          <a href="mailto:feasts@artigiano.com">feasts@artigiano.com</a>.
        </p>
        <p className="mb-5 text-justify font-serif text-lg text-white">
          Por favor, observe que não aceitamos reservas para lugares no bar. O
          Artigiano é um restaurante de bairro e sempre reservamos um número de
          lugares para clientes sem reserva em nosso salão e bar. Quando o
          restaurante estiver cheio, teremos prazer em anotar seu nome e número
          e avisar quando uma mesa estiver disponível.
        </p>
        <Button href="#" title="RESERVAS" />
      </div>
    </div>
  )
}

export default ReservePage

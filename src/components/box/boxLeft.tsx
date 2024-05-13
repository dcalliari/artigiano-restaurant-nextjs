import Image from 'next/image'
import Button from '../button'

interface BoxLeftProps {
  name: string
  description: string
  button: string
  buttonHref: string
  imageSrc: string
}

const BoxLeft = ({
  name,
  description,
  button,
  buttonHref,
  imageSrc,
}: BoxLeftProps) => {
  return (
    <div className="m-2 mt-4 flex flex-row">
      <div className="mx-2 w-1/2 bg-zinc-900 px-12 py-24 text-white">
        <h2 className="mb-4 text-wrap font-serif text-3xl italic text-white lg:w-3/4 xl:w-1/2">
          {name}
        </h2>
        <p className="mb-16 font-serif text-lg">{description}</p>
        <Button href={buttonHref} title={button} />
      </div>
      <div className="relative mx-2 w-1/2 bg-slate-500">
        <Image src={imageSrc} alt="Image" fill={true} objectFit="cover" />
      </div>
    </div>
  )
}

export default BoxLeft

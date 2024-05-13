import Image from 'next/image'
import Link from 'next/link'

interface BoxRightProps {
  name: string
  description: string
  button: string
  buttonHref: string
  imageSrc: string
}

const BoxRight = ({
  name,
  description,
  button,
  buttonHref,
  imageSrc,
}: BoxRightProps) => {
  return (
    <div className="m-2 mb-4 flex flex-row">
      <div className="relative mx-2 w-1/2 bg-slate-500">
        <Image src={imageSrc} alt="Image" fill={true} objectFit="cover" />
      </div>
      <div className="mx-2 w-1/2 bg-zinc-900 px-12 py-24 text-white">
        <h2 className="mb-4 text-wrap font-serif text-3xl italic text-white lg:w-3/4 xl:w-1/2">
          {name}
        </h2>
        <p className="mb-16 font-serif text-lg">{description}</p>
        <Link href={buttonHref}>
          <button className="btn hover:border-gray-500 hover:text-gray-500">
            {button}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default BoxRight

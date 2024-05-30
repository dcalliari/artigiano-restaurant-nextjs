import { Button } from '@/components/Button'

import Image from 'next/image'

type BoxRightProps = {
  name: string
  description: string
  button: string
  buttonHref: string
  imageSrc: string
}

export function BoxRight({
  name,
  description,
  button,
  buttonHref,
  imageSrc,
}: BoxRightProps) {
  return (
    <div className="m-2 mb-4 flex flex-row">
      <div className="relative mx-2 w-1/2 bg-slate-500">
        <Image
          loading="lazy"
          src={imageSrc}
          alt="Image"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="mx-2 w-1/2 bg-zinc-900 px-12 py-24 text-white">
        <h2 className="mb-4 text-wrap font-serif text-3xl italic text-white lg:w-3/4 xl:w-1/2">
          {name}
        </h2>
        <p className="mb-16 font-serif text-lg">{description}</p>
        <Button href={buttonHref} title={button} />
      </div>
    </div>
  )
}

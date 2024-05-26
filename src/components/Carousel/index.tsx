'use client'

import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

type CarouselProps = {
  images: StaticImageData[]
}

export function Carousel({ images }: CarouselProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [imageIndex, setImageIndex] = useState(0)

  // const goToPreviousImage = () => {
  //   setImageIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1,
  //   )
  // }

  // const goToNextImage = () => {
  //   setImageIndex((prevIndex) =>
  //     prevIndex === images.length - 1 ? 0 : prevIndex + 1,
  //   )
  // }

  return (
    <div className="relative m-4 overflow-hidden">
      <Image
        fill={true}
        objectFit="cover"
        src={images[imageIndex].src}
        alt={`Image ${imageIndex}`}
      />
    </div>
  )
}

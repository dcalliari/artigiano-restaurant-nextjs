import Image from 'next/image'

const FetchImages = async ({ images }: { images: Array<string> }) => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <ul>
          {images.slice(0, Math.ceil(images.length / 2)).map((el: string) => (
            <li key={el} className="mb-4 mr-4">
              <Image
                width={2000}
                height={2000}
                alt={el}
                src={`/photos/${el}`}
                className="size-full"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2">
        <ul>
          {images.slice(Math.ceil(images.length / 2)).map((el: string) => (
            <li key={el} className="mb-4">
              <Image
                width={2000}
                height={2000}
                alt={el}
                src={`/photos/${el}`}
                className="size-full"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FetchImages

import Image from 'next/image'

export async function FetchImages({ images }: { images: Array<string> }) {
  return (
    <div className="flex px-2">
      <div className="w-1/2">
        <ul>
          {images.slice(0, Math.ceil(images.length / 2)).map((el: string) => (
            <li key={el}>
              <Image
                width={1800}
                height={1200}
                alt={el}
                src={`/photos/${el}`}
                className="size-full px-2 pt-4"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2">
        <ul>
          {images.slice(Math.ceil(images.length / 2)).map((el: string) => (
            <li key={el}>
              <Image
                width={1800}
                height={1200}
                alt={el}
                src={`/photos/${el}`}
                className="size-full px-2 pt-4"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

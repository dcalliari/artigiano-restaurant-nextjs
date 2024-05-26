import Link from 'next/link'

type ButtonProps = {
  href: string
  title: string
}

export function Button({ href, title }: ButtonProps) {
  return (
    <Link href={href}>
      <button className="btn hover:border-gray-500 hover:text-gray-500">
        {title}
      </button>
    </Link>
  )
}

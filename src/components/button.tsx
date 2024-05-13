import Link from 'next/link'

interface ButtonProps {
  href: string
  title: string
}

const Button = ({ href, title }: ButtonProps) => {
  return (
    <Link href={href}>
      <button className="btn hover:border-gray-500 hover:text-gray-500">
        {title}
      </button>
    </Link>
  )
}

export default Button

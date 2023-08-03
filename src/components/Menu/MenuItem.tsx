import Link from 'next/link'
import { usePathname } from 'next/navigation'

export type MenuItemProps = {
  index: number
  item: string
  link: string
  icon: React.ReactNode
  isMenuOpen?: boolean
}

export default function MenuItem({
  item,
  link,
  icon,
  isMenuOpen = false,
}: MenuItemProps) {
  const pathname = usePathname()

  return (
    <Link
      href={link}
      className={`flex h-10 w-full items-center justify-start gap-7 rounded-xl px-6 py-2 text-left transition-all duration-75 hover:bg-sky-400 hover:text-zinc-200 ${
        pathname === link ? 'bg-sky-400 text-zinc-200' : ''
      }`}
    >
      {icon}
      {isMenuOpen && <span className="font-medium">{item}</span>}
    </Link>
  )
}

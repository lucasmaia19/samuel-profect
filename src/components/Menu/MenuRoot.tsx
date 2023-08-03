import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type MenuRootProps = {
  children: React.ReactNode
  toggleMenu: (state?: boolean) => void
  isMenuOpen?: boolean
}

export default function MenuRoot({
  children,
  toggleMenu,
  isMenuOpen = true,
}: MenuRootProps) {
  return (
    <div
      onMouseOver={() => toggleMenu(true)}
      onMouseLeave={() => toggleMenu(false)}
      className={`absolute left-0 top-0 h-full flex-col items-center gap-1 rounded-xl bg-gray-100 p-4 shadow-xl shadow-gray-200 transition-all duration-500 lg:static lg:flex lg:bg-gray-200 lg:p-7 lg:px-2 ${
        isMenuOpen ? 'w-full lg:w-56' : 'hidden lg:w-20'
      }`}
    >
      <div className="flex w-full justify-end py-2 lg:hidden">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="h-5 w-5"
          onClick={() => toggleMenu()}
        />
      </div>
      {children}
    </div>
  )
}

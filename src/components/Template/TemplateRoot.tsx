'use client'

import React from 'react'
import { Menu } from '../Menu'
import { useMenu } from '../../hooks/useMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faTruck,
  faDog,
  faCartPlus,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons'
import Body from '../Body'
import { usePathname } from 'next/navigation'

type TemplateRootProps = {
  children: React.ReactNode
}

const menuItems = [
  {
    item: 'Home',
    link: '/',
    icon: <FontAwesomeIcon icon={faHome} />,
  },
  {
    item: 'Fornecedores',
    link: '/suppliers',
    icon: <FontAwesomeIcon icon={faTruck} />,
  },
  {
    item: 'Produtos',
    link: '/products',
    icon: <FontAwesomeIcon icon={faDog} />,
  },
  {
    item: 'Vendas',
    link: '/sales',
    icon: <FontAwesomeIcon icon={faMoneyBill} />,
  },
  {
    item: 'Pedidos',
    link: '/orders',
    icon: <FontAwesomeIcon icon={faCartPlus} />,
  },
]

const returnNamePage = () => {
  const pathname = usePathname()
  const name = menuItems.find((item) => item.link === pathname)
  return name?.item
}

export default function TemplateRoot({ children }: TemplateRootProps) {
  const { isMenuOpen, toggleMenu } = useMenu()

  return (
    <>
      <Menu.Root isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}>
        {menuItems.map((item, index) => {
          return (
            <Menu.Item
              index={index}
              item={item.item}
              link={item.link}
              icon={item.icon}
              isMenuOpen={isMenuOpen}
            />
          )
        })}
      </Menu.Root>
      <Body namePage={returnNamePage()} toggleMenu={toggleMenu}>
        {children}
      </Body>
    </>
  )
}

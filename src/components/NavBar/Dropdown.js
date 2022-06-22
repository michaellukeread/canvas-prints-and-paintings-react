import { forwardRef } from 'react'
import { Menu } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/solid'

import Link from 'next/link'
import { classNames } from 'utils'

const MenuLink = forwardRef(({ href, active, children }, ref) => (
  <Link href={href}>
    <a
      ref={ref}
      className={classNames(
        active ? 'bg-secondary text-white' : 'bg-primary',
        'cursor-pointer px-12 py-8 font-semibold hover:bg-secondary hover:text-white'
      )}>
      {children}
    </a>
  </Link>
))

const Dropdown = ({ items }) => (
  <Menu as="div" className="relative flex">
    {({ open }) => (
      <>
        <Menu.Button>
          {open ? (
            <XIcon className="h-8 w-8 text-white" />
          ) : (
            <MenuIcon className="h-8 w-8 text-white" />
          )}
        </Menu.Button>
        <Menu.Items className="absolute top-14 -right-12 z-10 flex w-screen flex-col divide-y divide-tertiary border-t-4 border-tertiary shadow outline-none">
          {items.map(({ title, to }) => (
            <Menu.Item key={title}>
              {({ active }) => (
                <MenuLink href={to} active={active}>
                  {title}
                </MenuLink>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </>
    )}
  </Menu>
)

export default Dropdown

import { Menu } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/solid'

import Link from 'components/Link'
import { classNames } from 'utils'

const Dropdown = ({ items }) => (
  <Menu as="div" className="relative">
    {({ open }) => (
      <>
        <Menu.Button>
          {open ? (
            <XIcon className="h-5 w-5 text-blue-500" />
          ) : (
            <MenuIcon className="h-5 w-5 text-blue-500" />
          )}
        </Menu.Button>
        <Menu.Items className="absolute top-14 -right-12 z-10 flex w-screen flex-col gap-4 bg-white px-12 py-8">
          {items.map(({ title, to }) => (
            <Menu.Item key={title}>
              {({ active }) => (
                <Link className={classNames(active ? 'bg-blue-500' : 'bg-green-500')} to={to}>
                  {title}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </>
    )}
  </Menu>
)

export default Dropdown

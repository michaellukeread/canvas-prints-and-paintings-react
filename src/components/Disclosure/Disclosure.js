import { Disclosure as DisclosureReact } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/solid'

import { classNames } from 'utils'

const Disclosure = ({ items }) => (
  <div className="max-w-lg divide-y-2">
    {items.map(({ title, body }) => (
      <DisclosureReact key={title}>
        {({ open }) => (
          <>
            <DisclosureReact.Button className="flex w-full items-center justify-between py-4">
              <p className={classNames(open ? 'text-indigo-600' : 'text-black', 'font-semibold')}>
                {title}
              </p>
              {open ? (
                <MinusIcon className="h-4 w-4 text-indigo-600" />
              ) : (
                <PlusIcon className="h-4 w-4 text-stone-600" />
              )}
            </DisclosureReact.Button>

            <DisclosureReact.Panel className="py-4">{body}</DisclosureReact.Panel>
          </>
        )}
      </DisclosureReact>
    ))}
  </div>
)

export default Disclosure

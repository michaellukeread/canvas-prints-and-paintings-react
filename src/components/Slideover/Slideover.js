import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/solid'

const SlideOver = ({ open, doClose, title, subtitle, children }) => (
  <Transition.Root show={open} as={Fragment}>
    <Dialog
      as="div"
      className="fixed inset-0 z-50 overflow-hidden"
      onClose={doClose}
    >
      <div className="absolute inset-0 overflow-hidden">
        <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <div className="fixed inset-y-0 right-0 flex w-full md:w-1/3  md:max-w-full">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="w-full">
              <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-lg">
                <div className="h-0 flex-1 overflow-y-auto">
                  <div className="bg-stone-900 py-6 px-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <Dialog.Title className="text-lg font-medium uppercase text-white">
                        {title}
                      </Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="rounded-md bg-stone-900 p-2 text-indigo-200 duration-150 hover:bg-stone-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={doClose}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-5 w-5 text-stone-100" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-6">{children}</div>
                </div>
                <div className="flex flex-row-reverse gap-x-2 bg-gray-50 px-4 py-4"></div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition.Root>
)

export default SlideOver

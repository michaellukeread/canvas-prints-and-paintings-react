import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/solid'

const SlideOver = ({ open, doClose, title, subtitle, children }) => (
  <Transition.Root show={open} as={Fragment}>
    <Dialog
      as="div"
      className="fixed inset-0 overflow-hidden z-50"
      onClose={doClose}
    >
      <div className="absolute inset-0 overflow-hidden">
        <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <div className="fixed inset-y-0 max-w-full right-0 flex w-1/3">
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
              <div className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-lg">
                <div className="flex-1 h-0 overflow-y-auto">
                  <div className="py-6 px-4 bg-stone-900 sm:px-6">
                    <div className="flex items-center justify-between">
                      <Dialog.Title className="uppercase text-lg font-medium text-white">
                        {title}
                      </Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="bg-stone-900 hover:bg-stone-500 duration-150 p-2 rounded-md text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
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
                <div className="px-4 py-4 flex flex-row-reverse gap-x-2 bg-gray-50"></div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition.Root>
)

export default SlideOver

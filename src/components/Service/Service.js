import { TruckIcon, CashIcon, ReceiptRefundIcon } from '@heroicons/react/solid'

const Service = () => (
  <section
    id="service"
    className="body-font scroll-mt-12 bg-gray-50 text-gray-600"
  >
    <div className="container mx-auto px-5 py-24">
      <div className="mb-20 text-center">
        <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
          Our Services
        </h1>
        <p className="mx-auto text-base leading-relaxed text-gray-500 lg:w-3/4 xl:w-2/4">
          We offer a range of services that make getting your painting as easy
          as possible.
        </p>
        <div className="mt-6 flex justify-center">
          <div className="inline-flex h-1 w-16 rounded-full bg-stone-500"></div>
        </div>
      </div>
      <div className="-mx-4 -mb-10 -mt-4 flex flex-wrap space-y-6 sm:-m-4 md:space-y-0">
        <div className="flex flex-col items-center p-4 text-center md:w-1/3">
          <div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-500">
            <TruckIcon className="h-8 w-8 text-stone-900" />
          </div>
          <div className="flex-grow">
            <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
              Delivery from our warehouse
            </h2>
            <p className="text-base leading-relaxed">
              $15 delivery fee from our Melbourne warehouse to anywhere in
              Melbourne metro.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4 text-center md:w-1/3">
          <div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-500">
            <CashIcon className="h-8 w-8 text-stone-900" />
          </div>
          <div className="flex-grow">
            <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
              Pick-up
            </h2>
            <p className="text-base leading-relaxed">
              We offer pick-up options if you prefer to save on a delivery fee.
              Our Office is located in Beveridge.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4 text-center md:w-1/3">
          <div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-500">
            <ReceiptRefundIcon className="h-8 w-8 text-stone-900" />
          </div>
          <div className="flex-grow">
            <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
              Refund Policy
            </h2>
            <p className="text-base leading-relaxed">
              We have a 7 day return policy, which means you have 7 days after
              receiving your item to request a return.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Service

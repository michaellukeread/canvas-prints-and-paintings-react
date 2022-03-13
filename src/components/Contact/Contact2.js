const Contact2 = () => (
  <section
    id="contact"
    className="body-font relative scroll-mt-12 border-t-2 text-gray-600"
  >
    <div className="container mx-auto px-5 py-24">
      <div className="mb-12 flex w-full flex-col text-center">
        <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
          Contact Us
        </h1>
        <p className="mx-auto text-base leading-relaxed lg:w-2/3">
          Have a question? Write it in the following fields below and we'll get
          back to you as soon as possible.
        </p>
      </div>
      <form
        action="https://formsubmit.co/af8d433c7b8b984dafe6492b00387ae0"
        method="POST"
      >
        <div className="mx-auto md:w-2/3 lg:w-1/2">
          <div className="-m-2 flex flex-wrap">
            <div className="w-1/2 p-2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="text-sm leading-7 text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-stone-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                />
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="text-sm leading-7 text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-stone-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                />
              </div>
            </div>
            <div className="w-full p-2">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="text-sm leading-7 text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-stone-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                ></textarea>
              </div>
            </div>
            <div className="p-2">
              <input
                type="submit"
                className="text-md cursor-pointer rounded-sm bg-stone-900 px-6 py-2 tracking-widest text-stone-100 ring-stone-800 duration-300 hover:ring-4"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
)

export default Contact2

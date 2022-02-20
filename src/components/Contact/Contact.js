const Input = ({ title, type, placeholder, ...props }) => (
  <div className="flex flex-col gap-2">
    <label className="w-96 text-sm tracking-wider text-stone-900">
      {title}
    </label>
    {type === 'textarea' ? (
      <textarea
        className="w-[32rem] bg-stone-100 text-sm text-stone-900 rounded-sm border-none focus:ring-2 focus:ring-stone-900"
        placeholder={placeholder}
        {...props}
      />
    ) : (
      <input
        className="w-96 bg-stone-100 text-sm  text-stone-900 rounded-sm border-none focus:ring-2 focus:ring-stone-900"
        type={type}
        placeholder={placeholder}
        {...props}
      />
    )}
  </div>
)

const Contact = () => (
  <section
    id="contact"
    className="py-32 bg-stone-100 flex items-center justify-center"
  >
    <div className="bg-white rounded-sm shadow-lg p-8">
      <h1 className="text-stone-900 text-4xl font-bold tracking-wide mb-6 text-center">
        Have any questions? Send us a message
      </h1>
      <form
        action="https://formsubmit.co/canvas.prints.and.paintings@gmail.com"
        method="POST"
      >
        <div className="flex flex-col gap-4">
          <Input
            title="Full name"
            type="text"
            placeholder="Enter your full name here"
          />
          <Input
            title="Email"
            type="email"
            placeholder="Enter a valid email address here"
          />
          <Input
            title="Message"
            type="textarea"
            placeholder="Enter a message here"
          />
          <input
            type="submit"
            className="bg-stone-900 text-stone-100 w-min cursor-pointer hover:bg-stone-200 hover:text-stone-900 p-2 rounded-sm tracking-widest duration-150 text-sm"
          />
        </div>
      </form>
    </div>
  </section>
)

export default Contact

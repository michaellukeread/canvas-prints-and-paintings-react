const Button = ({ link, children }) => (
  <a
    className="bg-stone-900 text-stone-100 w-min cursor-pointer hover:bg-stone-200 hover:text-stone-900 p-2 rounded-sm tracking-widest duration-150 text-sm"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)

export default Button

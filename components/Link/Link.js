import NextLink from 'next/link'

const Link = ({ to, className, children, arrow, ...props }) => (
  <NextLink href={to} {...props}>
    <a className={className ? className : 'text-sm'}>
      {children}
      {arrow && <span>{' >'}</span>}
    </a>
  </NextLink>
)

export default Link

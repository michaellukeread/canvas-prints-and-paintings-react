import NextLink from 'next/link'

const Link = ({ to, className, children, ...props }) => (
  <NextLink href={to} {...props}>
    <a className={className ? className : 'text-sm'}>{children}</a>
  </NextLink>
)

export default Link

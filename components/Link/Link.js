import NextLink from 'next/link'

const Link = ({ to, className, children }) => (
  <NextLink href={to}>
    <a className={className ? className : 'text-sm'}>{children}</a>
  </NextLink>
)

export default Link

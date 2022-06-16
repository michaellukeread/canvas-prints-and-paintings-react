import NextLink from 'next/link'
import { string, node } from 'prop-types'

const LinkButton = ({ to, children }) => (
  <NextLink href={to}>
    <a className="link text-sm">
      {children}
      <span>{' >'}</span>
    </a>
  </NextLink>
)

LinkButton.propsTypes = {
  to: string,
  children: node.isRequired
}

LinkButton.defaultProps = {
  to: '/'
}

export default LinkButton

import { node, string } from 'prop-types'

import { classNames } from 'utils'

const Layout = ({ children, className }) => (
  <main className={classNames(className, 'container mx-auto px-4 min-h-[calc(100vh-96px)]')}>
    {children}
  </main>
)

Layout.propTypes = {
  children: node.isRequired,
  className: string
}

Layout.defaultProps = {
  className: undefined
}

export default Layout

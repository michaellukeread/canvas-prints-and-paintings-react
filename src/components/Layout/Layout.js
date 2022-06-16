import { node, string } from 'prop-types'

import { classNames } from 'utils'

const Layout = ({ children, className }) => (
  <main className={classNames(className, 'container mx-auto min-h-[calc(100vh-11rem)] px-8')}>
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

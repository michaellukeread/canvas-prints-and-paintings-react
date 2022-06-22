import { node, string } from 'prop-types'

import { classNames } from 'utils'

const MainLayout = ({ children, className }) => (
  <main className={classNames(className, 'container mx-auto min-h-[calc(100vh-11rem)] px-8')}>
    {children}
  </main>
)

MainLayout.propTypes = {
  children: node.isRequired,
  className: string
}

MainLayout.defaultProps = {
  className: undefined
}

export default MainLayout

import { node, string } from 'prop-types'

import { classNames } from 'utils'

const GridLayout = ({ children, className }) => (
  <section
    className={classNames(className, 'grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6')}>
    {children}
  </section>
)

GridLayout.propTypes = {
  children: node.isRequired,
  className: string
}

GridLayout.defaultProps = {
  className: undefined
}

export default GridLayout

import { classNames } from 'utils'

const Badge = ({ count, className }) => (
  <p
    className={classNames(
      className,
      'inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-300 px-1 text-xs text-black ring-2 ring-indigo-400'
    )}>
    {count}
  </p>
)

export default Badge

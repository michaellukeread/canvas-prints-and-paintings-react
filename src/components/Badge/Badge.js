import { classNames } from 'utils'

const Badge = ({ count, className }) => (
  <p
    className={classNames(
      className,
      'inline-flex h-6 w-6 items-center justify-center rounded bg-slate-500 px-1 text-xs font-medium text-black'
    )}>
    {count}
  </p>
)

export default Badge

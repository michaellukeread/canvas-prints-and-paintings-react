import { CheckIcon } from '@heroicons/react/solid'

import { classNames } from 'utils'

const Steps = ({ steps }) => {
  const amountCompleted = steps.reduce((acc, elem) => (acc += elem.isComplete), 0)
  const percentageWidth = Math.min((amountCompleted / (steps.length - 1)) * 100, 100)

  return (
    <div className="relative flex gap-24">
      {steps.map(({ label, isComplete }, index) => (
        <>
          <div
            aria-label={label}
            key={label}
            className={classNames(
              isComplete ? 'border-indigo-600 bg-indigo-600' : 'bg-white',
              index === amountCompleted && 'border-indigo-600',
              index > amountCompleted && 'border-gray-200',
              'flex h-8 w-8 items-center justify-center rounded-full border-4 duration-500 ease-in-out'
            )}>
            <CheckIcon
              className={classNames(
                isComplete ? 'opacity-100' : 'opacity-0',
                'h-4 w-4 text-white  duration-500 ease-in-out'
              )}
            />
            <p
              className={classNames(
                isComplete ? 'font-medium text-indigo-700' : 'text-gray-600',
                'absolute -bottom-12 whitespace-nowrap capitalize '
              )}>
              {label}
            </p>
          </div>

          {index > 0 && (
            <div
              className="absolute left-0 top-3.5 -z-10 h-1 bg-indigo-600 duration-700 ease-in-out"
              style={{ width: `${percentageWidth}%` }}
            />
          )}
          {index > 0 && <div className="absolute left-0 top-3.5 -z-20 h-1 w-full bg-gray-200" />}
        </>
      ))}
    </div>
  )
}

export default Steps

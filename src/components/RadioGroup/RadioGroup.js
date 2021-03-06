import React, { Fragment } from 'react'

import { RadioGroup as HeadlessRadioGroup } from '@headlessui/react'

import { classNames } from 'utils'

const RadioGroup = ({ items, onChange, value }) => (
  <HeadlessRadioGroup value={value} onChange={onChange}>
    {/* <HeadlessRadioGroup.Label>{title}</HeadlessRadioGroup.Label> */}
    <div className={classNames('flex gap-2')}>
      {items.map(({ value, label, icon }) => (
        <HeadlessRadioGroup.Option key={value} value={value} as={Fragment}>
          {({ checked }) => (
            <div
              className={classNames(
                checked ? 'bg-lime-400 text-teriary900' : 'bg-slate-700 text-teriary300',
                'flex cursor-pointer items-center gap-2 p-4 '
              )}>
              {label}
              {icon}
            </div>
          )}
        </HeadlessRadioGroup.Option>
      ))}
    </div>
  </HeadlessRadioGroup>
)

export default RadioGroup

import { RadioGroup as HeadlessRadioGroup } from '@headlessui/react'

const RadioGroup = ({ title, items, onChange, value }) => {
  return (
    <HeadlessRadioGroup value={value} onChange={onChange}>
      <HeadlessRadioGroup.Label>{title}</HeadlessRadioGroup.Label>
      {items.map(({ value, label }) => (
        <HeadlessRadioGroup.Option key={value} value={value}>
          {({ checked }) => <span className={checked ? 'bg-indigo-400' : ''}>{label}</span>}
        </HeadlessRadioGroup.Option>
      ))}
    </HeadlessRadioGroup>
  )
}

export default RadioGroup

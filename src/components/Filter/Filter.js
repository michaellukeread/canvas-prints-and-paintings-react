import Checkbox from 'components/Checkbox'

const Filter = ({ filter, handleSelect, items }) => (
  <div className="flex flex-col gap-4 px-8">
    <h3 className="text-teriary50 text-2xl font-bold capitalize">{filter}</h3>
    <div className="flex flex-col">
      {items.map(({ label, isChecked }) => (
        <Checkbox key={label} handleSelect={handleSelect} isChecked={isChecked} label={label} />
      ))}
    </div>
  </div>
)

export default Filter

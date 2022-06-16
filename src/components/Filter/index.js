import PureFilter from './Filter'
import useFilter from './hooks'

const Filter = ({ filter, items }) => {
  const { handleSelect, newItems } = useFilter({ filter, items })

  return <PureFilter filter={filter} handleSelect={handleSelect} items={newItems} />
}

export default Filter

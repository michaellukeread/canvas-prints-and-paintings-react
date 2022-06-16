import { TrashIcon } from '@heroicons/react/solid'

const QuantitySelector = ({ id, increment, decrement, quantity, remove }) => (
  <div className="flex items-center gap-4">
    <div className="flex h-12 w-28 flex-shrink items-center justify-between border px-4 text-slate-50">
      <button onClick={decrement(id)}>-</button>
      <p>{quantity}</p>
      <button onClick={increment(id)}>+</button>
    </div>
    <button onClick={remove(id)}>
      <TrashIcon className="h-5 w-5 text-slate-50" />
    </button>
  </div>
)

export default QuantitySelector

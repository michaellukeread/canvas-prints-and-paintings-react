import { TrashIcon } from '@heroicons/react/solid'

const QuantitySelector = ({ id, increment, decrement, quantity, remove }) => (
  <div className="flex items-center gap-4">
    <div className="text-teriary50 flex h-12 w-28 flex-shrink items-center justify-between border px-4">
      <button onClick={decrement(id)}>-</button>
      <p>{quantity}</p>
      <button onClick={increment(id)}>+</button>
    </div>
    <button onClick={remove(id)}>
      <TrashIcon className="text-teriary50 h-5 w-5" />
    </button>
  </div>
)

export default QuantitySelector

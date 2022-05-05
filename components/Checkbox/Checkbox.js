import { bool, func, string } from 'prop-types'

const Checkbox = ({ label, handleSelect, isChecked }) => (
  <div className="mb-6 flex items-start">
    <div className="flex h-5 items-center">
      <input
        value={label}
        id={label}
        aria-describedby={label}
        onChange={handleSelect()}
        checked={isChecked}
        type="checkbox"
        className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
      />
    </div>
    <div className="ml-3 text-sm">
      <label htmlFor={label} className="font-medium text-gray-900 dark:text-gray-300">
        {label}
      </label>
    </div>
  </div>
)

Checkbox.propTypes = {
  label: string.isRequired,
  handleSelect: func.isRequired,
  isChecked: bool.isRequired
}

export default Checkbox

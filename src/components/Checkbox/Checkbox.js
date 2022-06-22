import { bool, func, string } from 'prop-types'

const Checkbox = ({ label, handleSelect, isChecked }) => (
  <div className="mb-6 flex items-start">
    <div className="flex h-5 items-center">
      <input
        value={label}
        id={label}
        aria-describedby={label}
        onClick={handleSelect()}
        checked={isChecked}
        type="checkbox"
        className="focus:ring-3 border-slate-300 bg-slate-50 text-teriary50 focus:ring-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:ring-offset-slate-800 dark:focus:ring-slate-600 h-4 w-4 cursor-pointer rounded border"
      />
    </div>
    <div className="ml-3 text-sm">
      <label
        htmlFor={label}
        className="text-teriary50 dark:text-teriary300 cursor-pointer font-medium capitalize">
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

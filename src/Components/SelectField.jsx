/* eslint-disable react/prop-types */

const SelectField = ({ label, name, options }) => (
  <div>
    <label className="block mb-1">{label}</label>
    <select name={name} className="w-full border rounded px-2 py-1">
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default SelectField;

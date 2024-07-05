function InputList({ label, name, value, options, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-white">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-blue-500 bg-transparent text-current"
        required
      >
        <option value="" disabled>
          Seleccione una categoría
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputList;

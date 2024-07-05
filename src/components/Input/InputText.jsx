function InputText({ label, name, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-white">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-blue-500 bg-transparent "
        required
      />
    </div>
  );
}

export default InputText;

import InputText from "../Input/InputText";
import InputList from "../Input/InputList";

function Form({
  formData,
  categories,
  handleChange,
  handleSubmit,
  handleReset,
}) {
  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 -md shadow-md">
      <InputText
        label="Título"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <InputList
        label="Categoría"
        name="category"
        value={formData.category}
        options={categories}
        onChange={handleChange}
      />
      <InputText
        label="URL de la Imagen"
        name="image"
        value={formData.image}
        onChange={handleChange}
      />
      <InputText
        label="URL del Video"
        name="video"
        value={formData.video}
        onChange={handleChange}
      />
      <div className="mb-4">
        <label className="block text-white">Descripción</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border border-blue-500 bg-gray-900 text-white"
        />
      </div>
      <button type="submit" className=" bg-blue text-white px-8 py-3">
        Crear
      </button>
      <button
        type="button"
        onClick={handleReset}
        className=" ml-6 bg-red-500 text-white px-8 py-3"
      >
        Limpiar
      </button>
    </form>
  );
}

export default Form;

import { useState, useEffect } from "react";
import InputText from "../Input/InputText";
import InputList from "../Input/InputList";

function EditForm({ course, isOpen, onClose, onSubmit, categories }) {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    category: "",
    image: "",
    video: "",
    description: "",
  });

  useEffect(() => {
    setFormData(course);
  }, [course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-5">
      <form
        onSubmit={handleSubmit}
        className="text-blue bg-white p-6 -md w-full max-w-[650px]"
      >
        <h2 className="font-bold mb-4 text-black text-center text-[24px]">
          Editar Curso
        </h2>
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
          label="Imagen"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
        <InputText
          label="Video"
          name="video"
          value={formData.video}
          onChange={handleChange}
        />
        <div className="mb-4">
          <label className="block text-gray-700">Descripción</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button type="submit" className="bg-blue text-white px-4 py-2">
            Confirmar
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;

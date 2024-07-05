import { useState, useEffect } from "react";
import { getCategories, createCourse } from "../services/courseService";
import Form from "../components/Form/Form";

function Create() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    image: "",
    video: "",
    description: "",
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetData = () => {
    setFormData({
      title: "",
      category: "",
      image: "",
      video: "",
      description: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCourse(formData);
    resetData();
  };

  return (
    <div className="container mx-auto p-4 my-[60px]">
      <h2 className="text-xl font-bold mb-4 text-white text-center text-[32px] uppercase">
        Crear Nuevo Curso
      </h2>
      <Form
        formData={formData}
        categories={categories}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleReset={resetData}
      />
    </div>
  );
}

export default Create;

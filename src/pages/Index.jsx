import { useState, useEffect } from "react";
import {
  getCourses,
  deleteCourse,
  updateCourse,
  getCategories,
} from "../services/courseService";
import Main from "../components/Main/Main";
import Category from "../components/Category/Category";
import EditForm from "../components/EditForm/EditForm";

function Index() {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  useEffect(() => {
    fetchCourses();
    fetchCategories();
  }, []);

  const fetchCourses = async () => {
    const data = await getCourses();
    setCourses(data);
  };

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  const handleDelete = async (id) => {
    await deleteCourse(id);
    fetchCourses();
  };

  const handleEdit = (course) => {
    setCurrentCourse(course);
    setIsEditFormOpen(true);
  };

  const handleFormSubmit = async (updatedCourse) => {
    await updateCourse(updatedCourse);
    setCurrentCourse(null);
    setIsEditFormOpen(false);
    fetchCourses();
  };

  const handleCloseEditForm = () => {
    setCurrentCourse(null);
    setIsEditFormOpen(false);
  };

  return (
    <>
      <Main />
      <div className="container">
        {categories.map((category) => (
          <Category
            key={category.id}
            name={category.name}
            courses={courses.filter(
              (course) => course.category === category.name
            )}
            deleteCourse={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
      {currentCourse && (
        <EditForm
          course={currentCourse}
          isOpen={isEditFormOpen}
          onClose={handleCloseEditForm}
          onSubmit={handleFormSubmit}
          categories={categories}
        />
      )}
    </>
  );
}

export default Index;

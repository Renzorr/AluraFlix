import Banner from "../Banner/Banner";
import Course from "../Course/Course";

function Category({ name, courses, deleteCourse, onEdit }) {
  return (
    <>
      {courses.length > 0 && (
        <section className="container mb-[100px] tablet:mt-[50px]">
          <Banner category={name} />
          <div className="w-full flex items-center gap-6 overflow-x-auto pb-5">
            {courses.map((course) => (
              <Course
                course={course}
                key={course.id}
                onDelete={deleteCourse}
                onEdit={onEdit}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default Category;

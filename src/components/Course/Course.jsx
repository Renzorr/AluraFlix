function Course({ course, onEdit, onDelete }) {
  const colorVariants = {
    "Front End": "border-aquamarine",
    "Back End": "border-green",
    "Innovación y Gestión": "border-ambar",
  };

  return (
    <div
      className={`relative w-[420px] bg-transparent border-4 ${
        colorVariants[course.category]
      } overflow-hidden group flex-[0_0_auto]`}
    >
      <a href={course.video} target="_blank">
        <img src={course.image} alt="" />
      </a>
      <div className="py-2 pr-2 absolute w-full bottom-[-100%] left-0 group-hover:bottom-0 duration-200 glassmorphism  tablet:bottom-0 ">
        <div className="w-fit ml-auto space-x-2">
          <button className="p-3 bg-amber-500 " onClick={() => onEdit(course)}>
            Editar
          </button>
          <button
            className="p-3 bg-red-500 "
            onClick={() => onDelete(course.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Course;

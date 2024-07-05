function CourseModal({ course, isOpen, onClose }) {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-md shadow-md w-[90%] max-w-3xl text-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{course.title}</h2>
          <button onClick={onClose} className="text-white text-xl">
            &times;
          </button>
        </div>
        <div className="mb-4">
          <iframe
            width="100%"
            height="315"
            src={course.video}
            title={course.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <p>{course.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CourseModal;

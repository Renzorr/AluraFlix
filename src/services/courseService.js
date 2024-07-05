const API_URL = 'http://localhost:5000';


export const getCourses = async () => {
    const response = await fetch(`${API_URL}/courses`);
    return response.json();
};

export const deleteCourse = async (id) => {
    await fetch(`${API_URL}/courses/${id}`, {
        method: 'DELETE',
    });
};

export const updateCourse = async (course) => {
    await fetch(`${API_URL}/courses/${course.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(course),
    });
};

export const getCategories = async () => {
    const response = await fetch(`${API_URL}/categories`);
    return response.json();
};




export const createCourse = async (course) => {
    await fetch(`${API_URL}/courses`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(course),
    });
};





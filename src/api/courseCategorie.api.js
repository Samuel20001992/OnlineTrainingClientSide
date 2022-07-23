import axios from 'axios';

const url = 'http://localhost:5000/courseCategories';

export const fetchCourseCategories = () => axios.get(url);
export const createCourseCategorie = (newCourseCategorie) => axios.post(url, newCourseCategorie);
export const updateCourseCategorie = (id, updatedCourseCategorie) => axios.patch(`${url}/${id}`, updatedCourseCategorie);
export const deleteCourseCategorie = (id) => axios.delete(`${url}/${id}`);

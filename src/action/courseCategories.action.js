
import * as api from '../api/courseCategorie.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getCourseCategories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCourseCategories();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCourseCategorie = (courseCategorie) => async (dispatch) => {
  try {
    const { data } = await api.createCourseCategorie(courseCategorie);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCourseCategorie = (id, courseCategorie) => async (dispatch) => {
  try {
    const { data } = await api.updateCourseCategorie(id, courseCategorie);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteCourseCategorie = (id) => async (dispatch) => {
  try {
    await api.deleteCourseCategorie(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

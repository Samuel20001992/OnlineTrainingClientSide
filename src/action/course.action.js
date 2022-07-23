
import * as api from '../api/course.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getCourses = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCourses();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const createCourse = (course) => async (dispatch) => {
  try {
    const { data } = await api.createCourse(course);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCourse = (id, course) => async (dispatch) => {
  try {
    const { data } = await api.updateCourse(id, course);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteCourse = (id) => async (dispatch) => {
  try {
    await api.deleteCourse(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

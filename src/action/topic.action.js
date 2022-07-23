
import * as api from '../api/topic.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getTopics = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTopics();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createTopic = (topic) => async (dispatch) => {
  try {
    const { data } = await api.createTopic(topic);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateTopic = (id, topic) => async (dispatch) => {
  try {
    const { data } = await api.updateTopic(id, topic);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteTopic = (id) => async (dispatch) => {
  try {
    await api.deleteTopic(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

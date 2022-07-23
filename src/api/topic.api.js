import axios from 'axios';

const url = 'http://localhost:5000/topics';
const url1 = 'http://localhost:5000/topics/learn';
const url2 = 'http://localhost:5000/topics/status';

export const fetchTopics = () => axios.get(url);
export const createTopic = (newTopic) => axios.post(url, newTopic);
export const getLanguage = (language) => axios.get(url1, language);
export const getStatus = (status) => axios.get(url2, status);
export const updateTopic = (id, updatedTopic) => axios.patch(`${url}/${id}`, updatedTopic);
export const deleteTopic = (id) => axios.delete(`${url}/${id}`);

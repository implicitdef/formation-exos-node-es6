

import axios from "axios";

const myAxios = axios.create({
  baseURL: 'http://localhost:4000'
});


export const getColumns = () => {
  return myAxios.get('/columns?_embed=tasks')
    .then(r => r.data);
};


export const deleteColumn = (id) => {
  return myAxios.delete(`/columns/${id}`)
    .then(r => r.data);
};

export const deleteTask = (id) => {
  return myAxios.delete(`/tasks/${id}`)
    .then(r => r.data);
};

export const addColumn = (name) => {
  return myAxios.post(`/columns/`, { name })
    .then(r => r.data);
};

export const addTask = (text, columnId) => {
  return myAxios.post(`/tasks/`, { text, columnId })
    .then(r => r.data);
};
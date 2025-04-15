import axios from "axios";
const API = "http://localhost:5000/api/items";

export const getAll = () => axios.get(API);
export const search = (q) => axios.get(`${API}/search?q=${q}`);
export const create = (data) => axios.post(API, data);
export const update = (id, data) => axios.put(`${API}/${id}`, data);
export const remove = (id) => axios.delete(`${API}/${id}`);

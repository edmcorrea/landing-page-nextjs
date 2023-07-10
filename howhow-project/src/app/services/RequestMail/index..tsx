import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const requestMail = async (endpoint: string, body: IContact) => {
  const { data } = await api.post(endpoint, body);
  return data;
};
import axios from "axios";

export type User = {
  id: number;
  name: string;
  email: string;
};

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Отримання користувачів
export const fetchUsers = async (): Promise<User[]> => {
  const response = await api.get<User[]>("/users");
  return response.data;
};

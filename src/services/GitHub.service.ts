import axios from "axios";
import { UserModel } from "../models";

const api = axios.create({
  baseURL: "https://api.github.com",
});

export const getUser = async (username: string) => {
  const response = await api.get<UserModel>(`/users/${username}`);
  return response.data;
};

import { api } from "@/config/axios.config";
import { User } from "@/app/api/user/data";

export const registerUser = async (data: User) => {
  try {
    const response = await api.post("/user/register", {
      name: data.name,
      email: data.email,
      password: data.password,
    });

    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
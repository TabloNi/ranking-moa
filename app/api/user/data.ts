import { promises as fs } from "fs";
import path from "path";

export interface User {
  id: number;
  name: string;
  image: string;
  password: string;
  email: string;
  resetToken: string | null;
  resetTokenExpiry: string | null;
  profile: any;
}

const usersFilePath = path.join(process.cwd(), "app", "api", "user", "users.json");

export const getUsers = async (): Promise<User[]> => {
  try {
    const data = await fs.readFile(usersFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading users.json:", error);
    return [];
  }
};

export const addUser = async (newUser: Omit<User, "id">): Promise<User | null> => {
  try {
    const users = await getUsers();
    const userExists = users.find((u) => u.email === newUser.email);
    if (userExists) {
      return null; // User already exists
    }

    const user: User = {
      id: users.length + 1,
      ...newUser,
    };

    users.push(user);
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));
    return user;
  } catch (error) {
    console.error("Error writing to users.json:", error);
    return null;
  }
};
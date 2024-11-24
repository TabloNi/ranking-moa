import CredentialsProvider from "next-auth/providers/credentials";
import { User, getUsers } from "@/app/api/user/data";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) { // 수정된 시그니처
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const users = await getUsers();
        const foundUser = users.find((u) => u.email === email);

        if (!foundUser) {
          return null;
        }

        const isValid = password === foundUser.password;

        if (!isValid) {
          return null;
        }

        // id를 문자열로 변환하여 반환
        return { ...foundUser, id: foundUser.id.toString() };
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,

  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV !== "production",
};
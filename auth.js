import { loginService } from "./Service/LoginService";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { auth, signOut, signIn } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        const res = await loginService({ email, password });
        return res;
      },
    }),
  ],
  callbacks: {
    async jwt(token) {
      return token;
    },
    async session(props) {
      const { token } = props;
      // console.log("session in session ", token);
      return token;
    },
  },
  strategy: "jwt",

  pages: {
    signIn: "/login",
  },
});

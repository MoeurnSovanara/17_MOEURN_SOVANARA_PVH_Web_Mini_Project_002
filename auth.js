import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { signIn } = NextAuth({
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
});
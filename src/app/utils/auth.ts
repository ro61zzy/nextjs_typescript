import { NextAuthOptions, User as NextAuthUser, Session as NextAuthSession } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "./db";
import GitHubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";

const allowedDomains = ["sokofresh.co.ke", "anotherdomain.com"];

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        // user login with gmail
        if (user.email && user.email.endsWith('sokofresh.co.ke')) {
          return true
        }

        return false
      } catch (error) {
        return false
      }
    },
}
};

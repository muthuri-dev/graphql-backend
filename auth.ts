import NextAuth, { Session } from "next-auth";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { getSession as authGetSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const { handlers, auth, signOut, signIn } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub],
});

export const getSession = async () => {
  const session = await authGetSession();
  return session;
};

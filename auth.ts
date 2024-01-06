import NextAuth, { Session } from "next-auth";
import GitHub from "next-auth/providers/github";
export const { handlers, auth, signOut, signIn } = NextAuth({
  providers: [GitHub],
});

import { getSession as authGetSession } from "next-auth/react";

export const getSession = async () => {
  const session = await authGetSession();
  return session;
};

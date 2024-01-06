import NextAuth, { Session } from "next-auth";
import GitHub from "next-auth/providers/github";
export const { handlers, auth, signOut } = NextAuth({ providers: [GitHub] });

// export const getSession = async (): Promise<Session | null> => {
//   const session = await auth();
//   return session;
// };
// auth.ts
import { getSession as authGetSession } from "next-auth/react";

export const getSession = async () => {
  const session = await authGetSession();
  return session;
};

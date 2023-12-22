"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "@/graphql/queries";
import { User } from "@prisma/client";

export default function Home() {
  const { data, loading, error } = useQuery(GET_USERS);
  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10">{error.toString()}</p>;
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="underline text-center">List of Users</h1>
      {data?.users.map((user: User) => {
        if (user.isAuthor === true) {
          return (
            <div key={user.id}>
              <p className="text-center">Name:{user.name}</p>
              <p className="text-center">Email:{user.email}</p>
              <p className="text-center">
                Followers:{user.followers.toString()}
              </p>
              <p className="text-center">
                Date:{user.createdAt.toLocaleString()}
              </p>
            </div>
          );
        }
      })}
    </main>
  );
}

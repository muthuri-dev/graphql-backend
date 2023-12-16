"use client"
import React from "react";
import {useQuery} from "@apollo/client";
import {GET_AUTHORS} from "@/graphql/queries";
import {Author} from ".prisma/client";

export default function Home() {
  const {data,loading,error} = useQuery(GET_AUTHORS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="underline text-center">List of Authors</h1>
      {
        data?.authors.map((author:Author)=>(
            <div key={author.id}>
              <h3>{author.name}</h3>
              <h3>{author.email}</h3>
              <h3>{author.role}</h3>
            </div>
        ))
      }
    </main>
  )
}

"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "@/graphql/queries";
import { Blog } from "@prisma/client";
export default function Blogs() {
  const { data, loading, error } = useQuery(GET_BLOGS);
  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10">{error.toString()}</p>;
  return (
    <div>
      <h1 className="underline text-center">List of Blogs</h1>
      {data?.blogs.map((blog: Blog) => {
        console.log(blog.category);
        return (
          <div key={blog.id}>
            <p className="text-center">Title:{blog.title}</p>
            <p className="text-center">Content:{blog.description}</p>
            <p className="text-center">Image:{blog.imageUrl}</p>
            <p className="text-center">Category:{blog.category}</p>
            <p className="text-center">
              Date:{blog.createdAt.toLocaleString()}
            </p>
          </div>
        );
      })}
    </div>
  );
}

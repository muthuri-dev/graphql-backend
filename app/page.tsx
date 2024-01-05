"use client";
import Blog from "@/components/shared/Blog";
import { CategoryNav } from "@/data/data";
import Link from "next/link";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "@/graphql/queries";
import { IBlogs } from "@/types";

export default function Home() {
  const { data, loading, error } = useQuery(GET_BLOGS);
  const blogs: IBlogs = data?.blogs;
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-6 md:col-span-4">
        <div>
          <ul className="flex flex-wrap border-b">
            {CategoryNav.map((item) => (
              <div key={item.id}>
                <li className="mr-2">
                  <Link
                    href={item.url}
                    aria-current="page"
                    className="inline-block rounded-2xl font-thin text-slate-950 rounded-t-lg py-4 px-4 text-sm text-center"
                  >
                    {item.value}
                  </Link>
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div>
          {loading ? (
            <div className="h-screen ">
              <p>Loading...</p>
            </div>
          ) : error ? (
            <p>Error</p>
          ) : (
            data?.blogs.map((blog: IBlogs) => (
              <div>
                <Blog blog={blog} />
              </div>
            ))
          )}
        </div>
      </div>
      <div className="col-span-2 border border-l border-gray-200 font-thin hidden md:flex ">
        Trending and adverts
      </div>
    </div>
  );
}

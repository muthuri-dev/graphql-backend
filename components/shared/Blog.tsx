import React from "react";
import { IoPersonCircle } from "react-icons/io5";
import Image from "next/image";
import { IBlogs } from "@/types";
import { AiOutlineLike } from "react-icons/ai";
import { useQuery } from "@apollo/client";
import { GET_USER } from "@/graphql/queries";
import { TfiComment } from "react-icons/tfi";
import { useRouter } from "next/navigation";

export default function Blog({ blog }: { blog: IBlogs }) {
  const { data } = useQuery(GET_USER, {
    variables: { id: blog.userId },
  });
  const author = data?.user;
  const router = useRouter();
  return (
    <div
      className="m-10 flex justify-center cursor-pointer"
      onClick={() => router.push(`/blog/${blog.id}`)}
      key={blog.id}
    >
      <div className=" flex flex-col bg-transparent border border-slate-300 rounded-2xl hover:border-slate-500 dark:hover:border-slate-600 dark:border-slate-800/80 p-6 my-3 w-full md:w-11/12">
        <div className="flex gap-3 items-center">
          <IoPersonCircle className=" w-10 h-10 rounded-full" />
          <div className=" flex flex-col">
            <h1 className="font-mono text-slate-950">{author?.name}</h1>
            <a
              href="#"
              className="text-sm text-slate-300 font-normal cursor-pointer hover:text-slate-600 hover:dark:text-slate-500"
            >
              Author
            </a>
          </div>
        </div>
        <div className=" flex gap-3 mt-3 flex-row">
          <div className=" flex flex-col">
            <h1 className="font-heading text-base sm:text-xl font-semibold sm:font-bold  text-slate-950 cursor-pointer">
              {blog.title}
            </h1>
            <p className="text-base font-normal text-slate-500 dark:text-slate-400 cursor-pointer line-clamp-3 md:block">
              {blog.content.slice(0, 130)}...
            </p>
          </div>
          <div className=" h-32 md:w-[1000px] rounded-md">
            <Image
              src={blog.imageUrl}
              alt="blogimage"
              width={100}
              height={500}
              className=" w-full h-full rounded-md object-contain"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex justify-between mt-4 text-slate-700 dark:text-slate-200 w-full">
          <span className="flex items-center gap-7">
            <p className=" font-mono flex text-black text-center">
              <AiOutlineLike />
              {blog.likes.length}
            </p>
            <p className=" font-mono flex text-black text-center">
              <TfiComment />
              {blog.comments.length}
            </p>
          </span>
          <span className="flex gap-1 items-center">
            <span className=" flex flex-wrap gap-1 justify-end">
              {blog.tags.map((tag) => (
                <p className="rounded-full px-2 py-1 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-300 hover:bg-slate-400 dark:bg-slate-900 dark:hover:bg-slate-700 w-min max-w-[126px] truncate text-left">
                  {tag.tag}
                </p>
              ))}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

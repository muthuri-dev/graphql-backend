import React from "react";
import { IoPersonCircle } from "react-icons/io5";
import Image from "next/image";
import { IBlogs } from "@/types";

export default function Blog({ blog }: { blog: IBlogs }) {
  return (
    <div className="m-10 flex justify-center">
      <div className=" flex flex-col bg-transparent border border-slate-300 rounded-2xl hover:border-slate-500 dark:hover:border-slate-600 dark:border-slate-800/80 p-6 my-3 w-3/4 md:w-11/12">
        <div className="flex gap-3 items-center">
          <IoPersonCircle className=" w-10 h-10 rounded-full" />
          <div className=" flex flex-col">
            <h1 className="font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">
              Mark Gatere
            </h1>
            <a
              href="#"
              className="text-sm text-slate-500 dark:text-slate-400 font-normal cursor-pointer hover:text-slate-600 hover:dark:text-slate-500"
            >
              Author
            </a>
          </div>
        </div>
        <div className=" flex gap-3 mt-3 flex-col md:flex-row">
          <div
            className=" flex flex-col"
            // onClick={() => router.push(`/blog/${id}`)}
          >
            <h1 className="font-heading text-base sm:text-xl font-semibold sm:font-bold  text-slate-700 dark:text-slate-200 cursor-pointer">
              Python for Data Science and Machine Learning
            </h1>
            <p className="text-base font-normal text-slate-500 dark:text-slate-400 cursor-pointer line-clamp-3 hidden md:block">
              Blog Subtitle - Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ut inventore pariatur suscipit voluptatem quod
              cum blanditiis veniam, quidem,
            </p>
          </div>
          <div className=" h-32 md:w-[1000px] rounded-md">
            <Image
              src="https://images.unsplash.com/photo-1622837137190-4f8b9e2b9b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1"
              alt="blogimage"
              width={100}
              height={500}
              className=" w-full h-full rounded-md bg-slate-800"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex justify-between mt-4 text-slate-700 dark:text-slate-200 w-full">
          <span className="flex gap-1 items-center">
            <p className=" font-medium"> Likes</p>
          </span>
          <span className="flex gap-1 items-center">
            <span className=" flex flex-wrap gap-1 justify-end">
              <p className="rounded-full px-2 py-1 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-300 hover:bg-slate-400 dark:bg-slate-900 dark:hover:bg-slate-700 w-min max-w-[126px] truncate text-left">
                Python
              </p>
              <p className="rounded-full px-2 py-1 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-300 hover:bg-slate-400 dark:bg-slate-900 dark:hover:bg-slate-700 w-min max-w-[120px] truncate text-left">
                Data Science
              </p>
              <p className="rounded-full px-2 py-1 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-300 hover:bg-slate-400 dark:bg-slate-900 dark:hover:bg-slate-700 w-min max-w-[120px] truncate text-left">
                Machine Learning
              </p>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

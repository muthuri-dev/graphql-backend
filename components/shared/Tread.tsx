import { ITrend } from "@/types";
import Image from "next/image";
import React from "react";
import { CiLock } from "react-icons/ci";
import { IoPersonCircle } from "react-icons/io5";

type TTread = {
  treading: ITrend;
};

export default function Tread({ treading }: TTread) {
  return (
    <div className="relative flex w-full min-w-fit flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-md border border-gray-200 border-r p-3">
      <div className="relative flex items-center gap-4 pt-0 pb-2 mx-0 mt-2 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
        <IoPersonCircle className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center" />

        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <h5 className="block font-sans text-lg antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
              {treading.name}
            </h5>
            <div className="flex items-center gap-0 5">
              <CiLock />
              members only
            </div>
          </div>
        </div>
      </div>
      <div className="p-0 mb-6">
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {treading.blogs.map((blog) => (
            <div>{blog.title}</div>
          ))}
        </p>
      </div>
    </div>
  );
}

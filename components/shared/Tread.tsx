import { ITrend } from "@/types";
import Image from "next/image";
import React from "react";
import { CiLock } from "react-icons/ci";

type TTread = {
  treading: ITrend;
};

export default function Tread({ treading }: TTread) {
  return (
    <div>
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-slate-800">
          {treading.blogs.map((blog) => (
            // <Image src={blog.imageUrl} alt="image" width={20} height={20} />
            <h3>{blog.imageUrl}</h3>
          ))}
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              <CiLock />
              members only
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">
              {treading.blogs.map((blog) => (
                <div>{blog.title}</div>
              ))}
            </div>
          </div>
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{treading.name}</p>
            <div className="text-gray-900 font-bold text-xl mb-2">
              <p className="text-gray-400 font-thin">date</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

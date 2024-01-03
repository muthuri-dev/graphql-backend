import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TREDING_BLOGS } from "@/graphql/queries";
import LoadingSkeleton from "./LoadingSkeleton";
import { CiLock } from "react-icons/ci";
import { ITrend } from "@/types";

export default function Tread() {
  const { data, loading, error } = useQuery(GET_TREDING_BLOGS);
  const trending: ITrend = data?.users;
  console.log(trending);
  if (loading) return <LoadingSkeleton />;
  if (error) return <p>Server error</p>;

  return (
    <h1>data</h1>
    // <div>
    //   {data?.blog.map((trend: Blog) => (
    //     <div className="max-w-sm w-full lg:max-w-full lg:flex">
    //       <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"></div>
    //       <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    //         <div className="mb-8">
    //           <p className="text-sm text-gray-600 flex items-center">
    //             <CiLock />
    //             Members only
    //           </p>
    //           <div className="text-gray-900 font-bold text-xl mb-2">
    //             {trend.title}
    //           </div>
    //         </div>
    //         <div className="text-sm">
    //           <p className="text-gray-900 leading-none">{trend.userId}</p>
    //           <p className="text-gray-600">
    //             {new Date(trend.updatedAt).toLocaleDateString()}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
}

"use client";
import Button from "@/components/shared/Button";
import Tread from "@/components/shared/Tread";
import Image from "next/image";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TREDING_BLOGS } from "@/graphql/queries";
import LoadingSkeleton from "@/components/shared/LoadingSkeleton";
import { ITrend } from "@/types";
import { MdOutlineDownloading } from "react-icons/md";

export default function Home() {
  const { data, loading, error } = useQuery(GET_TREDING_BLOGS);
  const trending: ITrend = data?.users;
  console.log(trending);
  if (error) return <p>Server error</p>;

  return (
    <div>
      <section className="flex justify-center flex-col items-center mt-5 md:mt-10 p-16">
        <h1 className="font-extrabold text-black text-3xl text-center italic mb-3">
          Discover stories from writers
          <span className="text-blue-500">
            Because Every Developer Has a Story to Tell!
          </span>
        </h1>
        <p className="text-gray-700 text-center mb-3">
          Tech Stories That Ignite Your Imagination. Start Writing Yours!
        </p>
        <Button
          type="solid"
          method={() => console.log("clicked")}
          children="Start reading"
        />
      </section>
      <div className="flex justify-center items-center flex-col">
        <h1 className="font-thin underline text-lg">Trending on Tech</h1>

        {loading ? (
          <div className="flex justify-center items-center">
            <MdOutlineDownloading className="text-3xl" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:mr-7 ">
            {data?.users.map((trend: ITrend) => (
              <Tread treading={trend} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

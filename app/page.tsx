"use client";
import Button from "@/components/shared/Button";
import Image from "next/image";
import React from "react";
export default function Home() {
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:mr-7 ">
          {/* one */}
          <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"></div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  icon Members only
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Can coffee make you a better developer?
                </div>
              </div>
              <div className="text-sm">
                <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
          {/* two */}
          <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"></div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  icon Members only
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Can coffee make you a better developer?
                </div>
              </div>
              <div className="text-sm">
                <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
          {/* two */}
          <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"></div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  icon Members only
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Can coffee make you a better developer?
                </div>
              </div>
              <div className="text-sm">
                <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
          {/* two */}
          <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"></div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  icon Members only
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Can coffee make you a better developer?
                </div>
              </div>
              <div className="text-sm">
                <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
          {/* two */}
          <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"></div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  icon Members only
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Can coffee make you a better developer?
                </div>
              </div>
              <div className="text-sm">
                <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
          {/* two */}
          <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"></div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  icon Members only
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Can coffee make you a better developer?
                </div>
              </div>
              <div className="text-sm">
                <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
          {/* two */}
        </div>
      </div>
    </div>
  );
}

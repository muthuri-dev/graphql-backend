import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import React from "react";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center sm:p-6 md:p-24">
      <Navbar />
      <div className="mockup-browser border border-base-300 w-full h-fit">
        <div className="mockup-browser-toolbar">
          <div className="input border border-base-300">Hello developers</div>
        </div>
        <div className="grid md:grid-cols-5 border-t border-base-300">
          <div className="col-span-5 md:col-span-3 flex justify-center items-center text-center flex-col">
            <h1 className="font-extrabold text-white text-6xl italic">
              Learn and teach in one platform
            </h1>
            <p className="text-gray-700 font-bold text-xl">
              ...thoughts? share them here
            </p>
          </div>
          <div className=" md:col-span-2 flex justify-center p-24">
            <Image src="posting.svg" height={500} width={500} alt="image" />
          </div>
        </div>
      </div>
    </main>
  );
}

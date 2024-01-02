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
            <h1 className="font-extrabold text-white text-6xl italic ml-20 mr-20">
              Learn and teach in one platform
            </h1>
            <p className="text-gray-700 font-bold text-xl">
              ...thoughts? share them here
            </p>
            <button className="btn glass">Go to Blogs</button>
          </div>
          <div className="hidden md:col-span-2 md:flex justify-center p-24">
            <div className="stack">
              <div className="card shadow-md bg-primary text-primary-content">
                <div className="card-body">
                  <h2 className="card-title">Notification 1</h2>
                  <p>You have 3 unread messages. Tap here to see.</p>
                </div>
              </div>
              <div className="card shadow bg-primary text-primary-content">
                <div className="card-body">
                  <h2 className="card-title">Notification 2</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius ea amet perspiciatis dolore. Omnis, in molestiae esse
                    quasi doloremque ut minus
                  </p>
                </div>
              </div>
              <div className="card shadow-sm bg-primary text-primary-content">
                <div className="card-body">
                  <h2 className="card-title">Technology</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi minus inventore, harum voluptatum porro vero odio
                    consequuntur quas quod. Labore omnis tempora magnam illo
                    pariatur blanditiis a. Possimus, veritatis atque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

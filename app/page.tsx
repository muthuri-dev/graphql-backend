import Navbar from "@/components/shared/Navbar";
import React from "react";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Navbar />
      <div className="mockup-browser border border-base-300 w-full">
        <div className="mockup-browser-toolbar">
          <div className="input border border-base-300">Hello developers</div>
        </div>
        <div className="flex justify-center px-4 py-16 border-t border-base-300">
          Hello!
        </div>
      </div>
    </main>
  );
}

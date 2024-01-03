"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { Navigation } from "@/data/data";
import { MdModeNight } from "react-icons/md";

const Navbar = React.memo(() => {
  const [active, setActive] = useState(Navigation[0].id);

  return (
    <div className="flex justify-between pl-16 pr-16 pt-3 pb-3 items-center z-30 shadow-md rounded-2xl sticky top-10 bg-opacity-80">
      <div>
        <Image src="/whiteLogo.jpg" height={60} width={60} alt="logo" />
      </div>
      <div className="flex gap-3">
        <div className="gap-5 flex items-center">
          {Navigation.map((nav) => (
            <Link
              key={nav.id}
              href={nav.url}
              onClick={() => setActive(nav.id)}
              className={
                nav.id === active
                  ? "bg-blue-600 py-2 px-4 rounded-2xl hover:text-white"
                  : "underline italic hover:no-underline"
              }
            >
              {nav.value}
            </Link>
          ))}
          <MdModeNight className="text-3xl" />
        </div>
        <div>
          <Button
            children="Get started"
            type="outline"
            method={() => console.log("clicked")}
          />
        </div>
      </div>
    </div>
  );
});
export default Navbar;

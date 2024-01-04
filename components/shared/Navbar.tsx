"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { Navigation } from "@/data/data";
import { MdModeNight } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = React.memo(() => {
  const [active, setActive] = useState(Navigation[0].id);
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => setToggle(!toggle);
  return (
    <div className="flex justify-between md:pl-16 md:pr-16 pt-3 pb-3 items-center z-30 shadow-md rounded-2xl sticky w-full top-0 bg-opacity-80 bg-white ">
      <div>
        <Image
          src="/whiteLogo-removebg.png"
          height={60}
          width={60}
          alt="logo"
        />
      </div>
      <div className="flex gap-3">
        <div className="gap-5 md:flex items-center hidden">
          {Navigation.map((nav) => (
            <Link
              key={nav.id}
              href={nav.url}
              onClick={() => setActive(nav.id)}
              className={
                nav.id === active
                  ? "bg-blue-600 py-2 px-4 font-thin rounded-2xl hover:text-white"
                  : "underline font-mono hover:no-underline"
              }
            >
              {nav.value}
            </Link>
          ))}
          <MdModeNight className="text-3xl" />
        </div>
        <div className="flex md:hidden">
          <Button
            type="outline"
            method={toggleMenu}
            children={<RxHamburgerMenu />}
          />
          {toggle && (
            <div className="min-w-screen h-screen animated fadeIn faster right-0-0 top-0 flex justify-end  inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
              <div className="absolute bg-black opacity-95 inset-0 z-0 text-white flex justify-end">
                navigation menu
              </div>
            </div>
          )}
        </div>
        <div>
          <Button
            children="Get Started"
            type="outline"
            method={() => console.log("clicked")}
          />
        </div>
      </div>
    </div>
  );
});
export default Navbar;

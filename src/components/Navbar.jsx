import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FadeIn } from "./FadeIn";

const navlinkes = [
  {
    name: "home.",
    path: "/",
  },
  {
    name: "blog.",
    path: "/blog",
  },
  {
    name: "contact.",
    link: "#contact",
  },
];

function Navbar() {
  const location = useLocation();

  return (
    <div>
      <FadeIn>
        <div className="flex max-w-[1240px] justify-between max-sm:justify-center items-center bg-[#131315] mx-auto px-8 py-4 max-lg:mx-2 rounded-[999px] mt-6">
          <Link
            to="/"
            className="text-lg leading-6 -translate-x-[0.01em] hover:opacity-80 transition-opacity cursor-pointer"
          >
            Mark H4ck
          </Link>
          <div className="flex justify-end items-center gap-x-8 gap-y-8 max-md:gap-3 max-sm:hidden">
            {navlinkes.map((navlink, idx) => (
              navlink.path ? (
                <Link
                  key={idx}
                  to={navlink.path}
                  className={`md:w-[120px] transition-all duration-300 ease-[ease-out] text-lg leading-6 text-center tracking-[-0.01em] px-6 max-md:px-2 py-0 ${
                    location.pathname === navlink.path
                      ? "text-white"
                      : "text-[#8a8a93] hover:text-white"
                  }`}
                >
                  {navlink.name}
                </Link>
              ) : (
                <a
                  key={idx}
                  href={navlink.link}
                  className="md:w-[120px] transition-all duration-300 ease-[ease-out] text-[#8a8a93] text-lg leading-6 text-center tracking-[-0.01em] px-6 max-md:px-2 py-0 hover:text-white"
                >
                  {navlink.name}
                </a>
              )
            ))}
          </div>
        </div>

        <div className="flex w-full justify-center items-center sm:hidden">
          <div className="flex justify-around items-center gap-x-8 gap-y-8 max-w-[1240px]  bg-[#131315] px-8 py-4 rounded-full fixed bottom-5 mx-auto">
            {navlinkes.map((navlink, idx) => (
              navlink.path ? (
                <Link
                  key={idx}
                  to={navlink.path}
                  className={`md:w-[120px] transition-all duration-300 ease-[ease-out] text-lg leading-6 text-center tracking-[-0.01em] px-6 max-md:px-2 py-0 ${
                    location.pathname === navlink.path
                      ? "text-white"
                      : "text-[#8a8a93] hover:text-white"
                  }`}
                >
                  {navlink.name}
                </Link>
              ) : (
                <a
                  key={idx}
                  href={navlink.link}
                  className="md:w-[120px] transition-all duration-300 ease-[ease-out] text-[#8a8a93] text-lg leading-6 text-center tracking-[-0.01em] px-6 max-md:px-2 py-0 hover:text-white"
                >
                  {navlink.name}
                </a>
              )
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Navbar;

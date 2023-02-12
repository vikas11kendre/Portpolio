import Link from "next/link";
import React from "react";
import { routes } from "@/data/global";

function Navbar({ currentPage }) {
  return (
    <nav className="flex items-center justify-between">
      <li className="text-lg font-bold list-none cursor-pointer">
        <Link href="/">
          <span className="flex items-center text-xl font-black">
            <img
              className="mr-2 transition-transform duration-500 transform hover:rotate-360 hover:scale-75"
              src="/static/logos/logo_no_text.svg"
              width="60"
            />
            {"Vikas".split("").map((letter, index) => {
              return (
                <span
                  key={index}
                  className="transition-all duration-500 hover:text-fun-pink hover:-mt-2 hover:duration-100 click:goodbyeLetterAnim"
                >
                  {letter}
                </span>
              );
            })}
          </span>
        </Link>
      </li>
      <ul className="flex items-center space-x-10">
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`list-none text-white ${
                currentPage === item.title
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100 transition-opacity"
              }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;

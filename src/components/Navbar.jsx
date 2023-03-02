import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between py-4 px-8">
        <h2 className="font-bold text-2xl brightness-75 hover:brightness-150 transition-all">
          <Link to={"/"}>Blog</Link>
        </h2>

        <ul className="flex gap-4 items-center">
          <li className="opacity-[0.7] hover:opacity-100 transition-all">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="opacity-[0.7] hover:opacity-100 transition-all font-bold border-[1px] border-white rounded-2xl py-2 px-4">
            <Link to={"/new"}>New post</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

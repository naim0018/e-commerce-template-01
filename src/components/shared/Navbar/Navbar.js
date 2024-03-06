"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [hoverValue, setHoverValue] = useState("");
  const [category, setCategory] = useState("");
  const books = ["School", "College", "Islamic", "Language"];
  const macrameCrafts = [
    "Mirror Set",
    "1 Layer",
    "2 Layer",
    "3 Layer",
    "Wall Hanging",
  ];
  const electronics = ["Mobile", "Computer"];

  const pathName = usePathname();

  useEffect(() => {
    if (hoverValue === "Book") {
      setCategory(books);
    } else if (hoverValue === "Macrame Crafts") {
      setCategory(macrameCrafts);
    } else if (hoverValue === "Electronics") {
      setCategory(electronics);
    }else{
      setCategory('')
    }
  }, [hoverValue]);

  console.log(hoverValue);
  console.log(category);

  const navItems = [
    {
      route: "Book",
      pathname: "/book",
    },
    {
      route: "Macrame Crafts",
      pathname: "/macramecrafts",
    },
    {
      route: "Electronics",
      pathname: "/electronics",
    },
    {
      route: "Gifts",
      pathname: "/gifts",
    },
    {
      route: "Ornaments",
      pathname: "/ornaments",
    },
  ];

  return (
    <div>
        <div className="text-center mt-5">

      <input type="text" className="w-1/3 h-10 rounded-full pl-5 border" placeholder="Search By Category" />
        <button className="btn btn-">Search</button>
        </div>
      <div className="navbar bg-base-100">
        <div className="navbar-start gap-5">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-outline lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-5 shadow bg-base-100 rounded-box w-52 space-y-7 text-base font-bold"
            >
              {navItems?.map((items) => (
                <div key={items.route} href={items.pathname}>
                  <Link href={items.pathname}>
                    <button
                      className={
                        pathName === items.pathname
                          ? "border-b-2 border-blue-500 text-blue-800 hover:text-blue-600"
                          : "text-black hover:text-blue-600"
                      }
                    >
                      {items.route}
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <Link href="/" className="btn btn-ghost text-xl text-black">
            daisyUI
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex space-x-10 text-lg font-bold ">
          {navItems?.map((items) => (
            <div
              key={items.route}
              href={items.pathname}
              className="group relative"
            >
              <div>
                <Link
                  href={items.pathname}
                  onMouseEnter={() => setHoverValue(items.route)}
                  className={
                    pathName === items.pathname
                      ? " border-b-2 border-blue-500 text-blue-800 hover:text-blue-600"
                      : " text-black hover:text-blue-600"
                  }
                >
                  {items.route}
                </Link>
              </div>
              <div className="hidden absolute group-hover:flex transform -translate-x-1/2 translate-y-0 gap-5 bg-white rounded-xl shadow-md p-8">
                {
              category &&
            category?.map(item=>
              <div key={item} className="inline-block mr-2">
                  <p className="text-nowrap">{item}</p>
              </div>
              )
           }
              </div>
            </div>
          ))}
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

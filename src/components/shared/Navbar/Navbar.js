"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosSearch } from "react-icons/io";

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
    } else {
      setCategory("");
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
    <div className="container mx-auto">
      <div className="w-96 lg:w-2/5 mx-auto h-10 rounded-full text-center mt-5 flex items-center justify-center  border relative">
        <input
          type="text"
          className="w-full h-full rounded-full pl-5 border placeholder-shown:border-blue-500 "
          placeholder="Search By Category "
        />
        <div className=" hidden sm:flex border-black absolute right-5">
          <IoIosSearch className=" text-3xl"/>
        </div>
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
                        <div
                        key={items.route}
                        href={items.pathname}
                        onMouseEnter={() => setHoverValue(items.route)}
                        className="group relative flex"

                      >
                        <div>
                          <Link
                            href={items.pathname}
                            
                            className={
                              pathName === items.pathname
                                ? " border-b-2 border-blue-500 text-blue-800 hover:text-blue-600"
                                : " text-black hover:text-[#375E97]"
                            }
                          >
                            {items.route}
                          </Link>
                        </div>
                        <div className="z-10 hidden absolute transform translate-x-40 group-hover:grid  gap-5 bg-white rounded-xl shadow-md p-8">
                          {category &&
                            category?.map((item) => (
                              <div key={item} className="inline-block mr-2">
                                <p className="text-nowrap">{item}</p>
                              </div>
                            ))}
                        </div>
                      </div>
              ))}
            </div>
          </div>
          <Link href="/" className=" text-4xl text-[#05386B] font-bold  h-16 w-40 flex items-center justify-center">
            Lakh <span className="text-[#5CDB95] bg-blue-800 rounded-full p-3">Takar</span> Site
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex space-x-10 text-lg font-bold ">
          {navItems?.map((items) => (
            <div
              key={items.route}
              href={items.pathname}
              onMouseEnter={() => setHoverValue(items.route)}
              className="group relative"
            >
              <div>
                <Link
                  href={items.pathname}
                  
                  className={
                    pathName === items.pathname
                      ? " border-b-2 border-blue-500 text-[#05386B] hover:text-blue-600"
                      : " text-blue-600 hover:text-[#375E97]"
                  }
                >
                  {items.route}
                </Link>
              </div>
              <div className="hidden absolute group-hover:flex transform -translate-x-1/2 translate-y-0 gap-5 bg-white rounded-xl shadow-md p-8">
                {category &&
                  category?.map((item) => (
                    <div key={item} className="inline-block mr-2">
                      <p className="text-nowrap">{item}</p>
                    </div>
                  ))}
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

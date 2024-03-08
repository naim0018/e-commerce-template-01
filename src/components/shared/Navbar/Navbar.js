"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TiShoppingCart } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Search from "./Search";

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
    <div className="container mx-auto mt-10 space-y-5 ">
     
     <Search/>
      {/* Navbar */}
      <div className="flex h-20 items-center justify-center ">
        <div className="basis-1/7 lg:flex-grow-0  gap-5  flex items-center">
          <div className=" dropdown  lg:hidden ">
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
              className=" menu menu-sm dropdown-content mt-3 z-[50] p-5 shadow bg-base-100 rounded-box w-52 space-y-7 text-base font-bold"
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
        </div>
        {/* logo  */}
        <div className="basis-1/9 flex-grow lg:flex-grow-0   flex items-center justify-center">
          <Link
            href="/"
            className="   text-[1.2rem] text-[#05386B] font-bold  h-16  flex items-center justify-center"
          >
            Lakh{" "}
            <span className="text-[#5CDB95] bg-blue-800 rounded-full p-3">
              Takar
            </span>{" "}
            Site
          </Link>
        </div>
        {/* menu content */}
        <div className="hidden lg:flex  lg:items-center lg:justify-center lg:flex-grow space-x-10 text-lg font-bold ">
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
              <div className="hidden absolute group-hover:flex z-50 transform -translate-x-1/2 translate-y-0 gap-5 bg-white rounded-xl shadow-md p-8">
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
        {/* end button */}
        <div className="basis-1/9   flex items-center justify-center gap-">
          <a className="btn btn-ghost ">
            <TiShoppingCart className="text-3xl" />
          </a>
          <a className="btn btn-ghost">
            <FaUserCircle className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

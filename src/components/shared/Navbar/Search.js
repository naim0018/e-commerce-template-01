import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Select by Category");

  // array of options
  const options = ["Search All", "Books","Macrame Crafts","Electronics","Gifts","Ornaments"];
  return (
    <div className=" relative">
      <div className="flex justify-center">
        {/* dropdown - btn */}
        <div className=" sm:w-56 flex relative ">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-grow h-12 items-center justify-between rounded-full rounded-r-none border-blue-500 px-6 border"
          >
            <h4 className="font-medium text-gray-600">{selectedValue}</h4>
            <svg
              className={`${isOpen ? "-rotate-180" : "rotate-0"} duration-300`}
              width={25}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M7 10L12 15L17 10"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </div>
          {/* dropdown - options  */}
          <div
            className=
            {`
            ${
              isOpen
                ? "visible  opacity-100"
                : "invisible -top-4 opacity-0"
            }
            absolute top-14  z-50 w-72 rounded-xl py-4 border duration-300 bg-white`}
          >
            {options?.map((option, idx) =>(
              <div
                key={idx}
                onClick={(e) => {
                  setSelectedValue(e.target.textContent);
                  setIsOpen(false);
                }}
                className="px-6 py-2 text-gray-500 hover:bg-gray-100"
              >
                {option}
              </div>
            ))}
          </div>
        </div>

        {/* Search Input  */}
        <div className=" w-48 md:w-96  rounded-full text-center flex  justify-center items-center relative">
          <input
            type="text"
            className="w-full  px-5 h-12 text-wrap  border rounded-r-full border-blue-500 "
            placeholder="Search By Category"
          />
          <div className=" hidden md:flex border-black absolute right-5">
            <IoIosSearch className=" text-3xl"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

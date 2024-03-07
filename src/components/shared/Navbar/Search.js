import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Choose One");

  // array of options
  const options = ["Apple", "banana", "chips"];
  return (
 
      <div className="border h-12 relative">
        <div className="flex items-center justify-center ">
        {/* dropdown - btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className=" flex basis-2/12 h-12  items-center justify-between rounded-full rounded-r-none border-blue-500 px-6  border "
        >
          <h1 className="font-medium text-gray-600">{selectedValue}</h1>
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
        {/* Search Input  */}
          <div className=" basis-1/3  rounded-full text-center flex items-center justify-center  relative ">
            <input
              type="text"
              className="w-full  px-5 h-12  border rounded-r-full border-blue-500 "
              placeholder="Search By Category"
            />
            <div className=" hidden sm:flex border-black absolute right-5">
              <IoIosSearch className=" text-3xl" />
            </div>
          </div>
    
        </div>
        {/* dropdown - options  */}
        <div
          className={`${
            isOpen ? "visible  top-0 opacity-100  " : " invisible -top-4 opacity-0"
          } relative mx-auto  my-4 w-72 rounded-xl py-4 border duration-300  bg-white z-50`}
        >
          {options?.map((option, idx) => (
            <div
              key={idx}
              onClick={(e) => {
                setSelectedValue(e.target.textContent);
                setIsOpen(false);
              }}
              className="px-6 py-2 text-gray-500 hover:bg-gray-100 "
            >
              {option}
            </div>
          ))}
        </div>
      </div>

  );
};

export default Search;

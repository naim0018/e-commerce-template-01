"use client";
import React, { useState } from "react";
import { MdOutlineChevronRight } from "react-icons/md";
import SidebarHover from "./SidebarHover";

// From Component
const Sidebar = ({ title, navItems }) => {
  const [show, setShow] = useState(false);
  const [subCategory,setSubCategory] = useState('');
  const options = [
    "price low to high",
    "price high to low",
    "ratings",
    "best selling",
  ];
  return (
    <div className="my-20 text-center p-5 space-y-5">
      <p className="text-xl text-black/80 font-bold">{title}</p>

      <div  className="relative ">
        <div onClick={()=>setShow(!show)} className="  flex items-center justify-between p-2 ">
        <p className="text-black font-medium">Sort by Price</p>
        <div className={show ? `rotate-0 duration-200 ease-in` : 'rotate-90 duration-200 ease-out'}>
        <MdOutlineChevronRight className="text-xl"/>
        </div>

        </div>

        {show &&
        <div className="opacity-100 duration-1000 ease-in bg-white absolute z-10 -top-2 -right-48 space-y-3 p-4 border ">
          {options?.map((option, inx) => (
            <SidebarHover key={inx} option={option} />
          ))}
        </div>
        }
      </div>
     
      <div className="space-y-1  relative group">
        {navItems?.map((nav, inx) => (
          <div onClick={()=>setSubCategory(nav)} key={inx} className="flex items-center justify-between p-2 ">
            <p className="text-black font-medium">{nav}</p>
            <div className={  nav === subCategory ? `rotate-0 duration-200 ease-in` : 'rotate-90 duration-200 ease-out'}>
        <MdOutlineChevronRight className="text-xl"/>
        </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { MdOutlineChevronRight } from "react-icons/md";

const Sidebar = ({ title, navItems }) => {
  return (
    <div className="my-20 text-center p-5 space-y-5">
      <p>{title}</p>

     
        <div className="flex items-center justify-between ">
          <p>Sort by Price</p>
          <MdOutlineChevronRight />
        </div>

      <div className="space-y-4 ">
        {navItems?.map((nav, inx) => (
          <div key={inx} className="flex items-center justify-between ">
            <p>{nav}</p>
            <MdOutlineChevronRight />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

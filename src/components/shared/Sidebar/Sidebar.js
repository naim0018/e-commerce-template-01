import React from "react";
import { MdOutlineChevronRight } from "react-icons/md";
import SidebarHover from "./SidebarHover";

const Sidebar = ({ title, navItems }) => {
  const options =["price low to high","price high to low","ratings" , "best selling"]
  return (
    <div className="my-20 text-center p-5 space-y-5">
      <p>{title}</p>
      
     
        <div className="flex items-center justify-between relative group border px-5">
          <p>Sort by Price</p>
          <MdOutlineChevronRight />


          <div className="border bg-white absolute z-10 -top-2 -right-36 hidden group-hover:flex  flex-col space-y-3 p-3 ">
        {
          options?.map((option,inx)=><SidebarHover key={inx} option={option}/>)
        }
        
      </div>
        </div>

      <div className="space-y-4 px-5 relative group">
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

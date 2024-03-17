
import ElectronicsSideNav from "@/components/Electronics/ElectronicsSideNav/ElectronicsSideNav";
import React from "react";

const AboutLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-6  container mx-auto min-h-screen">
      <ElectronicsSideNav />
      <div className="col-span-4">
      {children}
      </div>
    </div>
  );
};

export default AboutLayout;

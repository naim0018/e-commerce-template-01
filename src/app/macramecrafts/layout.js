
import MacrameCraftsSideNav from "@/components/MacrameCrafts/MacrameCraftsSideNav/MacrameCraftsSideNav";
import React from "react";

const MacrameCraftsLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-6  container mx-auto min-h-screen">
      <MacrameCraftsSideNav />
      <div className="col-span-4">
      {children}
      </div>
    </div>
  );
};

export default MacrameCraftsLayout;

import BookSideNav from "@/components/Books/BookSideNav/BookSideNav";
import React from "react";

const AboutLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-6  container mx-auto min-h-screen">
      <BookSideNav />
      <div className="col-span-4">
      {children}
      </div>
    </div>
  );
};

export default AboutLayout;

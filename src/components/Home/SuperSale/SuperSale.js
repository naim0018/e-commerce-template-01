import React from "react";

const SuperSale = () => {
  return (
    <div className="container mx-auto relative ">
      <div
        className=" absolute inset-0 bg-cover bg-center z-0 bg-[url('https://i.ibb.co/86ZgHfh/glossy-abstract-3840x1080-9602.jpg')]"
      />
      <div className="  container mx-auto w-full text-center space-y-2 relative z-10 text-white py-5 backdrop-filter backdrop-blur-md">
        <h3 className="font-lobster text-3xl font-medium p-2">
          SuperSale
        </h3>
        <h1 className="font-pd text-6xl tracking-wider font-medium">UP TO 30% OFF</h1>
        <p className="text-white">Explore our Shop for More</p>
        <button className="btn btn-primary">Shop Now</button>
      </div>
    </div>
  );
};

export default SuperSale;

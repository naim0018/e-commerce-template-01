"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import HotDeals from "./HotDeals";
const HotDealsBanner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const products = [
    {
      "id": 1,
      "productName": "AMD-Ryzen-5-5600x",
      "image": "https://i.ibb.co/5kdNb1r/AMD-Ryzen-5-5600x.jpg",
      "price": 250,
      "discountPrice": 220,
      "description": "Description of AMD Ryzen 5 5600x",
      "stock": 50,
      "sold": 10
    },
    {
      "id": 2,
      "productName": "ryzen-3500-500x500",
      "image": "https://i.ibb.co/Fhw3VqW/ryzen-3500-500x500.jpg",
      "price": 150,
      "description": "Description of Ryzen 3500",
      "stock": 30,
      "sold": 5
    },
    {
      "id": 3,
      "productName": "AMD-Ryzen-95050-X",
      "image": "https://i.ibb.co/dfHb9w9/AMD-Ryzen-95050-X.webp",
      "price": 350,
      "description": "Description of AMD Ryzen 95050 X",
      "stock": 20,
      "sold": 2
    },
    {
      "id": 4,
      "productName": "amd-ryzen-7-5700g-desktop-pc-01",
      "image": "https://i.ibb.co/K9HxfjY/amd-ryzen-7-5700g-desktop-pc-01.jpg",
      "price": 400,
      "discountPrice": 380,
      "description": "Description of AMD Ryzen 7 5700g",
      "stock": 15,
      "sold": 3
    }
  ]
  

  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === products?.length - 1 ? 0 : currentSlider + 1
    );
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 2000);
    return () => clearInterval(intervalId);
  }, [currentSlider]);
  return (
    <div>
      <div className="w-full mx-auto flex flex-col  items-center overflow-hidden ">
        <div className="relative overflow-hidden">
          {/* dots */}
          <div className="flex h-fit rounded-full z-50 absolute -right-6 bottom-1/2 w-fit gap-1 rotate-90">
            {products?.map((_, inx) => (
              <button
                key={inx}
                onClick={() => setCurrentSlider(inx)}
                className={`rounded-full duration-300 bg-blue-500 ${
                  currentSlider === inx ? "w-10" : "w-2"
                } h-2`}
              ></button>
            ))}
          </div>
          {/* slider container */}
          <div
            className="ease-linear duration-300 flex flex-col md:h-[330px] transform-gpu relative "
            style={{ transform: `translateY(-${currentSlider * 100 }%)` }}
          >
            {/* sliders */}
            {products?.map((product,inx) => (
               
                 <div key={inx} className=" min-w-full duration-200   before:-z-10 before:absolute before:text-3xl before:flex before:justify-center before:items-center  relative">
                     <HotDeals key={inx} product={product}/>
                 </div>
            
             
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDealsBanner;


// className="min-w-full duration-200 before:content-['Image'] before:bg-black/20 before:-z-10 before:absolute before:text-3xl before:flex before:justify-center before:items-center before:text-black/40 before:inset-0 relative"
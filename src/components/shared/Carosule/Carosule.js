"use client";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import DealsofTheDayData from "./DealsofTheDayData";

const Carosule = ({ item }) => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (item) {
      setProducts(item);
    }
  }, [item]);

 

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? products?.length - 1 : currentSlider - 1
    );
  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === products?.length - 1 ? 0 : currentSlider + 1
      ),
    [products?.length]
  );

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       nextSlider();
//     }, 3000);
//     return () => clearInterval(intervalId);
//   }, [nextSlider]);
  return (
    <div>
      <div className=" relative overflow-hidden bg-red-500">
        {/* arrow left */}
        <button
          onClick={prevSlider}
          className="absolute  right-20 z-50 flex justify-center items-center bg-white border border-blue-500 rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            className="w-4 h-4 md:w-6 md:h-6 icon"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#0095FF"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </g>
          </svg>
        </button>
        {/* arrow right */}
        <button
          onClick={nextSlider}
          className="absolute  z-50 right-10  flex justify-center items-center bg-white border border-blue-500 rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            className="w-4 h-4 md:w-6 md:h-6 icon"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            transform="rotate(180)"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#0095FF"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </g>
          </svg>
        </button>

        {/* Carousel container */}
        <div
          className="ease-linear duration-300 flex transform-gpu "
          style={{ transform: `translateX(-${currentSlider * 100}%)` }}
        >
          {/* sliders */}
          {products?.map((product, inx) =>  
          <div className="min-w-full  min-h-[400px]" key={inx}>
              <DealsofTheDayData key={inx} product={product}/>
          </div>
          
          
          )}
        </div>
      </div>
    </div>
  );
};

export default Carosule;

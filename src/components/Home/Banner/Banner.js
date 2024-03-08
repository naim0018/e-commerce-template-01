"use client";
import React, { useCallback, useEffect, useState } from "react";

const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliderImages = [
    "https://i.ibb.co/5kdNb1r/AMD-Ryzen-5-5600x.jpg",
    "https://i.ibb.co/Fhw3VqW/ryzen-3500-500x500.jpg",
    "https://i.ibb.co/dfHb9w9/AMD-Ryzen-95050-X.webp",
    "https://i.ibb.co/K9HxfjY/amd-ryzen-7-5700g-desktop-pc-01.jpg",
    "https://i.ibb.co/3RbvmXV/asus-rog-strix-g15-g513im-01-500x500.webp",
    "https://i.ibb.co/ZSVWwtQ/intel-core-i5-6400t-quad-core-processor.jpg",
    "https://i.ibb.co/4N04rWj/large14-gen-intel-processor-binary-logic.webp",
    "https://i.ibb.co/wWLns4b/arc-pro-group-with-portal-png-rendition-intel-web-480-270.png",
    "https://i.ibb.co/KqrZRZH/Prometheus1.jpg",
    "https://i.ibb.co/r6rGPWB/intel-13th-gen-core-i5-13400-desktop-pc-001-500x500.webp",
    "https://i.ibb.co/yW869sH/Apple-01.webp",
    "https://i.ibb.co/NL60PSK/Apple-02.webp",
    "https://i.ibb.co/qrG1bXw/Apple-03.jpg",
    "https://i.ibb.co/stQwMWK/Ipad.jpg",
    "https://i.ibb.co/Bt6XBmr/Ipad-02.jpg",
    "https://i.ibb.co/WPnJ5Hw/hp-01.jpg",
    "https://i.ibb.co/7bhJrFM/hp-03.png",
    "https://i.ibb.co/QF9WW7B/hp-02.jpg",
    "https://i.ibb.co/dWZsFTP/hp-05.webp",
    "https://i.ibb.co/X24bK3v/hp-04.jpg",
    "https://i.ibb.co/6nQLkNZ/Asus-laptop.jpg",
    "https://i.ibb.co/0XbPN2Y/Asus-Laptop-1.jpg",
    "https://i.ibb.co/41L0T8x/asus-laptop-2.jpg",
    "https://i.ibb.co/6yjShT0/Asus-laptop-3.jpg",
    "https://i.ibb.co/jvC2pJy/Asus-Laptop4.jpg",
    "https://i.ibb.co/mNHLmMy/intel-logo-generic-678-678x452.png",
    "https://i.ibb.co/DwbVBs8/apple-new-store-visual-identity-campaign-the-branding-journal-5.jpg",
    "https://i.ibb.co/rQpy983/amd-ryzen-badge-circle-1024x576.jpg",
    "https://i.ibb.co/nCN1nqh/hp.png",
    "https://i.ibb.co/7WLGvSj/Asus.jpg",
    "https://i.ibb.co/t3kGcdf/Symphony.png"
];
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 1
    );
  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1
      ),
    [sliderImages.length]
  );

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 4000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);



  return (
    <div className="container mx-auto shadow-lg bg-red-500">
      <div className="h-[240px] w-full md:h-[470px] lg:h-[670px] bg-black relative overflow-hidden">
        {/* arrow left */}
        <button
          onClick={prevSlider}
          className="absolute transform top-1/2 -translate-y-1/2 left-3 z-10 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-12"
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
          className="absolute transform top-1/2 -translate-y-1/2 z-10 right-3  flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-12"
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
        {/* dots */}
        <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
          {sliderImages.map((_, inx) => (
            <button
              key={_}
              onClick={() => setCurrentSlider(inx)}
              className={`rounded-full duration-300 bg-white ${
                currentSlider === inx ? "w-8" : "w-2"
              } h-2`}
            ></button>
          ))}
        </div>
        {/* Carousel container */}
        <div
          className="ease-linear duration-300 flex transform-gpu"
          style={{ transform: `translateX(-${currentSlider * 100}%)` }}
        >
          {/* sliders */}
          {sliderImages.map((slide, inx) => (
            <img
              key={slide}
              src={slide}
              className="min-w-full h-72 sm:h-96 md:h-[670px] object-cover"
              alt={`Slider - ${inx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;

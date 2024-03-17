import Image from "next/image";
import React from "react";


const ShowProducts = ({ item }) => {
  const {
    title,
    image,
    author,
    ratings,
    stock,
    sold,
    price,
    discountPrice,
    discountAmount,
    category,
    review,
    height,
    width,
  } = item;
  return (
    <div className="border flex flex-col  gap-3 relative">
      {discountPrice && (
        <div className="absolute right-2 top-2  px-5 py-1 bg-green-400">
          <p className="  text-white">{discountAmount}%</p>
        </div>
      )}
      <div className="flex items-center justify-center w-full  p-5 h-72">
        <Image
          className=""
          src={image}
          alt={title}
          width={200}
          height={200}
        />
      </div>
      <hr className="mx-5" />
      <div className="w-full flex-col items-center justify-center p-2 space-y-2">
        <h4 className="text-center text-black">{title}</h4>
        <p className="text-center">{author}</p>
        <div className=" flex items-center justify-evenly">
          <p>
            {" "}
            <span className="text-black">Stock :</span> {stock}
          </p>
          <p>
            <span className="text-black"> Sold : </span>
            {sold}
          </p>
        </div>

        {height && width && (
          <div className=" flex items-center justify-evenly">
            <p>
              {" "}
              <span className="text-black">Width :</span> {width}
            </p>
            <p>
              <span className="text-black">Height : </span>
              {height}
            </p>
          </div>
        )}
        <div className="">
          
        </div>

        <div className="text-center ">
          {discountPrice ? (
            <div className="flex items-center justify-center gap-5">
              <p className="text-lg text-green-800">{discountPrice}</p>
              <del className="text-red-400">{price}</del>
            </div>
          ) : (
            <p className="text-lg text-green-800">{price}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowProducts;

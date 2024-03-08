"use client";
import Image from "next/image";

import { TbCurrencyTaka } from "react-icons/tb";

const HotDeals = ({ product }) => {
  if (product) {
    var {
      id,
      productName,
      image,
      price,
      description,
      stock,
      sold,
      discountPrice,
    } = product;
  }

  // const {id,productName,image,price,discountPrice,description,stock,sold} = product

  return (
    <div className="container mx-auto sm:w-96 h-[330px] flex items-center justify-between border rounded gap-2 px-2 py-8 space-y-2 ">
      {/* <h3 className=''>Top Product</h3> */}
      {/* <hr className='my-2 w-1/2 border-sky-500'/> */}
      <Image
        src={image}
        width={200}
        height={200}
        alt="Product Name"
        className="w-1/3 sm:w-1/2"
      />

      <div className="flex-grow items-center justify-center space-y-3">
        <h2 className="text-center">{productName}</h2>
        <div className="flex items-center justify-center text-base font-medium gap-5">
          {discountPrice ? (
            <div className="flex flex-row-reverse items-center justify-evenly gap-5">
              <p className="text-green-500 text-lg  font-medium flex items-center">
                <TbCurrencyTaka className="text-xl" /> {discountPrice}
              </p>
              <del className="text-red-500">{price}</del>
            </div>
          ) : (
            <div className="">
              <p className="text-green-500 text-lg  font-medium flex items-center">
                <TbCurrencyTaka className="text-lg" />{price}
              </p>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between px-5">
          <p>
            Stock : <span className="text-black">{stock}</span>
          </p>
          <p>
            Sold : <span className="text-black">{sold}</span>
          </p>
        </div>
        <div className="w-full grid">
          <button className="btn h-7 min-h-7 px-3 btn-success text-white place-self-center">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotDeals;

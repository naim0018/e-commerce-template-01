"use client"
import Image from 'next/image';
import React, { useState } from 'react'
// import Carosule from '../Carosule/Carosule';
import { TbCurrencyTaka } from 'react-icons/tb';
import RelatedProducts from '../RelatedProducts/RelatedProducts';

const ProductDetails = () => {
  const [amount, setAmount] = useState(1);
  const electronics = [
    {
      id: 1,
      title: "AMD-Ryzen-5-5600x",
      image: "https://i.ibb.co/5kdNb1r/AMD-Ryzen-5-5600x.jpg",
      price: 250,
      discountPrice: 220,
      discountAmount: 30,
      ratings: 4,
      description: "Description of AMD Ryzen 5 5600x",
      stock: 50,
      sold: 10,
    },
    {
      id: 2,
      title: "ryzen-3500-500x500",
      image: "https://i.ibb.co/Fhw3VqW/ryzen-3500-500x500.jpg",
      price: 150,
      discountPrice: 140,
      discountAmount: 10,
      ratings: 3,
      description: "Description of Ryzen 3500",
      stock: 30,
      sold: 5,
    },
    {
      id: 3,
      title: "AMD-Ryzen-95050-X",
      image: "https://i.ibb.co/dfHb9w9/AMD-Ryzen-95050-X.webp",
      price: 350,
      ratings: 4,
      description: "Description of AMD Ryzen 95050 X",
      stock: 20,
      sold: 2,
    },
    {
      id: 4,
      title: "amd-ryzen-7-5700g-desktop-pc-01",
      image: "https://i.ibb.co/K9HxfjY/amd-ryzen-7-5700g-desktop-pc-01.jpg",
      price: 400,
      discountPrice: 380,
      discountAmount: 20,
      ratings: 4.5,
      description: "Description of AMD Ryzen 7 5700g",
      stock: 15,
      sold: 3,
    },
    {
      id: 5,
      title: "AMD-Ryzen-5-5600x",
      image: "https://i.ibb.co/5kdNb1r/AMD-Ryzen-5-5600x.jpg",
      price: 250,
      discountPrice: 220,
      discountAmount: 30,
      ratings: 4,
      description: "Description of AMD Ryzen 5 5600x",
      stock: 50,
      sold: 10,
    },
    {
      id: 6,
      title: "ryzen-3500-500x500",
      image: "https://i.ibb.co/Fhw3VqW/ryzen-3500-500x500.jpg",
      price: 150,
      discountPrice: 140,
      discountAmount: 10,
      ratings: 3,
      description: "Description of Ryzen 3500",
      stock: 30,
      sold: 5,
    },
  ];

  const {id,title,image,price, discountPrice, discountAmount,ratings, description,stock,sold,height,width,category,subCategory} =electronics[1]

  



  const handleDecrement = () => {
    if (amount > 1) {
      setAmount((count) => count - 1);
    }
  };
  const handleIncrement = () => {
    setAmount((count) => count + 1);
  };
  if (amount > 0) {
    var totalPrice = amount * (discountPrice || price);
  }



  return (
    <div className="min-h-screen ">
    {/* {isLoading && <Loadingui />} */}
    {
    // productId && 
    (
      <div className="h-[600px] grid  p-8  md:grid-cols-2 justify-center ">
        <div className="grid  w-full h-full ">
        
            <Image
              className="w-1/2   mx-auto  rounded-lg"
              width={200}
              height={200}
              src={image}
              alt={title}
              title={title}
            />
         
        </div>


        <div className="my-20  sticky top-24 h-fit">
          <div className="space-y-5">
            <h2 className="text-4xl font-medium">{title}</h2>
            <p className="w-2/3 text-lg font-normal text-gray-500">
              {description}
            </p>

{
  height && width &&
            <p>
              <span className="text-lg font-semibold">Height : </span>
              <span className="text-xl font-normal text-gray-500">
                {height}
              </span>
              <span className="h-20 border-l-[1px] border-black mx-5"></span>
              <span className="text-lg font-semibold"> Width : </span>
              <span className="text-xl font-normal text-gray-500">
                {width}
              </span>
            </p>
}
         
            <p>
              <span className="text-lg font-semibold">Category : </span>
              <span className="text-lg font-normal text-gray-500 ">
                {category}
              </span>
            </p>
          </div>

          <div className="mt-14">
            {discountPrice ? (
              <div className="">
                <div className="flex gap-4 items-center w-fit">
                  <p className="text-4xl font-medium flex items-center text-emerald-400">
                    <TbCurrencyTaka />
                    {discountPrice}
                  </p>
                  <del className=" text-red-400">৳{price}</del>
                </div>
              </div>
            ) : (
              <p className="text-4xl font-medium flex items-center text-emerald-400">
                <TbCurrencyTaka />
                {price}
              </p>
            )}
            <div className="flex items-center gap-4 mt-8">
              <div className="">
                <div className="border border-black w-fit  flex items-center gap-4">
                  <button
                    onClick={handleDecrement}
                    className="btn btn-ghost text-lg font-bold hover:bg-yellow-300 rounded-none "
                  >
                    -
                  </button>
                  <p className="text-xl font-bold w-5 text-center">
                    {amount}
                  </p>
                  <button
                    onClick={handleIncrement}
                    className="btn btn-ghost text-lg font-bold hover:bg-yellow-300 rounded-none "
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                // onClick={handelAddToCart}
                className="btn btn-lg bg-yellow-300 hover:bg-emerald-400 hover:text-gray-500"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    )}

        <div className="mb-20 ">
          <RelatedProducts/>
        </div>
  </div>
  )
}

export default ProductDetails
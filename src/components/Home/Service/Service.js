"use client"
import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlinePayment } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";



const Service = () => {
  return (
    <div className='my-10 container mx-auto grid grid-cols-4 items-center justify-center '>

<div className="w-full h-full flex items-center justify-center gap-5 p-5 text-center place-self-center  border-r-2 border-black">
    <div className="">
        <LiaShippingFastSolid className='text-sky-500 text-7xl'/>
    </div>
    <div className="flex flex-col items-center justify-center">
        <h2>Free Shipping</h2>
        <p>Free Shipping Over $100</p>
    </div>
</div>
<div className="w-full h-full flex items-center justify-center gap-5 p-5 text-center place-self-center border-r-2 border-black">
    <div className="">
        <MdOutlinePayment className='text-sky-500 text-7xl'/>
    </div>
    <div className="flex flex-col items-center justify-center">
        <h2>Free Shipping</h2>
        <p>Free Shipping Over $100</p>
    </div>
</div>
<div className="w-full h-full flex items-center justify-center gap-5 p-5 text-center place-self-center border-r-2 border-black">
    <div className="">
        <MdSupportAgent className='text-sky-500 text-7xl'/>
    </div>
    <div className="flex flex-col items-center justify-center">
        <h2>Free Shipping</h2>
        <p>Free Shipping Over $100</p>
    </div>
</div>
<div className="w-full h-full flex items-center justify-center gap-5 p-5 text-center place-self-center">
    <div className="">
        <BiSolidLike  className='text-sky-500 text-7xl'/>
    </div>
    <div className="flex flex-col items-center justify-center">
        <h2>Free Shipping</h2>
        <p>Free Shipping Over $100</p>
    </div>
</div>

</div>
  )
}

export default Service
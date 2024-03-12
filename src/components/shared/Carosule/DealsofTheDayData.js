import React from "react";

const DealsofTheDayData = ({ product }) => {
  const {
    id,
    productName,
    image,
    price,
    discountPrice,
    description,
    stock,
    sold,
  } = product;
  return (
    <div className="bg-white h-[400px] flex flex-col items-center justify-center space-y-5 ">
      <div className="p-10 grid grid-cols-2 items-center justify-center">
        <div className=" shadow-xl place-self-center">
          <img src={image} alt="" className="w-full h-full bg-cover" />
        </div>

        <div className="place-self-center text-center space-y-2">
          <h3>{productName}</h3>
          <p>Gaming Processor</p>
          <div className="flex items-center justify-center gap-5">
            {discountPrice ? (
              <div className="flex items-center justify-center gap-5 flex-row-reverse">
                <p className="text-green-500 text-xl font-bold">${discountPrice}</p>
                <del className="text-red-500 ">${price}</del>
              </div>
            ) : (
              <p className="text-green-500 text-xl font-bold">${price}</p>
            )}
          </div>
          <div className="font-bold">
            <p className="text-black font-medium">Sold : {sold}</p>
            <p className="text-black font-medium">Available : {stock}</p>
          </div>
          <div className="">
            <h4 className="text-xl font-bold" >Hurry up! Offer ends in : </h4>
          </div>
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default DealsofTheDayData;

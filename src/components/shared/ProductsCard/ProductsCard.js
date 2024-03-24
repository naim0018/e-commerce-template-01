import Image from "next/image";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const ProductsCard = ({ product }) => {
  const {
    title,
    image,
    author,
    publisher,
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
  } = product;
  return (
    <div className="relative flex flex-col  cursor-pointer ">
      {discountAmount && (
        <p className="absolute top-8 right-0 bg-green-500 px-4 py-1 text-white font-lobster rounded-full">
          {discountAmount} %
        </p>
      )}

      <div className=" flex items-center justify-center w-full h-72 ">
        <Image src={image} alt={title} width={200} height={200} className="" />
      </div>
        <hr className="mx-5"/>
      <div className="p-3 space-y-1 w-full">
        <h3 className="font-bold truncate">{title}</h3>
        {author && <p>{author}</p>}
        {publisher && <p>Publisher : {publisher}</p>}
        {category && <p>Category : {category}</p>}

        <div className="flex items-center justify-between">
          <p className="text-sm">Stock : {stock}</p>
          <p className="text-sm">Sold : {sold}</p>
        </div>


        <div className="">
          {discountPrice ? (
            <div className="flex items-center justify-center gap-5">
              <del className="text-red-300">{price}</del>
              <p className="text-green-500 text-xl font-bold flex items-center justify-center">
                {discountPrice} <TbCurrencyTaka />
              </p>
            </div>
          ) : (
            <p className="text-green-500 text-xl font-bold flex items-center justify-center">
              {price} <TbCurrencyTaka />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;

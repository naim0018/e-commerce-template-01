import React from "react";
import DealsOfTheDay from "./DealsOfTheDay";
import ExclusiveProducts from "./ExclusiveProducts";

const DealsandExclusive = () => {
  return (
    <div className="  w-full h-[540px] flex items-center justify-center  border border-red-400 relative">

      <div className='absolute inset-0 bg-[url("https://i.ibb.co/vkhJ3TJ/cz-Nmcy1wcml2-YXRl-L3-Jhd3-Bpe-GVs-X2lt-YWdlcy93-ZWJza-XRl-X2-Nvbn-Rlbn-Qvb-HIvdj-Ew-MTYt-Yy0w-OF8x.webp")] bg-cover opacity-30 '/>

      
      <div className="relative container mx-auto grid grid-cols-2 items-center justify-center gap-5 ">
        <div className=" bg-white place-self-center rounded shadow-lg ">
        <DealsOfTheDay />
        </div>
        <div className="place-self-center border border-black">
        <ExclusiveProducts />
        </div>
      </div>
    </div>
  );
};

export default DealsandExclusive;

import React from "react";
import DealsOfTheDay from "./DealsOfTheDay";
import ExclusiveProducts from "./ExclusiveProducts";




const DealsandExclusive = () => {




  return (
    <div className="  w-full min-h-[550px] flex items-center justify-center  relative ">

      <div className='absolute inset-0 bg-[url("https://i.ibb.co/vkhJ3TJ/cz-Nmcy1wcml2-YXRl-L3-Jhd3-Bpe-GVs-X2lt-YWdlcy93-ZWJza-XRl-X2-Nvbn-Rlbn-Qvb-HIvdj-Ew-MTYt-Yy0w-OF8x.webp")] bg-cover opacity-20 grayscale-[40%] bg-fixed'/>
      
      <div className="relative container mx-auto grid lg:grid-cols-2 items-center justify-center gap-5 ">
        <div className="  place-self-center rounded shadow-lg ">
        <DealsOfTheDay />
        </div>
        <div className="place-self-center ">
        <ExclusiveProducts />
        </div>
      </div>
    </div>
  );
};

export default DealsandExclusive;

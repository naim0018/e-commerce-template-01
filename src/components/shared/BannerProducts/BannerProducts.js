
import BannerProductsData from '@/components/shared/BannerProducts/BannerProductsData';
import Image from 'next/image'
import React from 'react'
const BannerProducts = ({title,products,productsNav}) => {
   
  return (
    <div className='grid grid-cols-6 items-center justify-center container mx-auto '>
        <div className= " w-full h-full relative">
            <Image src={"https://i.ibb.co/NpT3F1x/photo.jpg"} width={400} height={400} alt='bookBanner ' className='h-full w-full '/>
            <div className="absolute top-0 bg-sky-600/90 h-full w-full text-center">

            <p className='text-white mt-10 text-4xl font-lobster tracking-widest'>{title}</p>
            <div className="space-y-8 mt-8">
                {
                    productsNav?.map((product,inx)=><p className='text-white text-lg ' key={inx}>{product}</p>)
                }
            </div>
            </div>
        </div>
        <div className="col-span-5  grid grid-cols-4 items-center justify-center ">
            {
                products?.slice(0,8).map((product,inx)=> <BannerProductsData key={inx} product={product}/>)
            }

           

        </div>

    </div>
  )
}

export default BannerProducts
import Image from 'next/image'
import React from 'react'

const BannerProductsData = ({product}) => {
    const {title,image,price} = product
  return (
    <div className=' space-y-1 w-full h-full  flex flex-col items-center justify-center p-2'>
    <div className="w-32 h-40 ">
    <Image src={image} alt='title' width={200} height={200} className='w-full h-full' />
    </div>
   
    <p className='flex-grow w-52  text-center text-gray-600 text-sm font-medium '>{title}</p>
    <p className='text-gray-500 text-sm font-bold'>{price}</p>
   
</div>
  )
}

export default BannerProductsData
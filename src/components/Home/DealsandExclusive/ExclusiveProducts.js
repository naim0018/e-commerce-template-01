import Carosule from '@/components/shared/Carosule/Carosule'
import React from 'react'

const ExclusiveProducts = () => {
  const products = [
    {
      "id": 1,
      "productName": "AMD-Ryzen-5-5600x",
      "image": "https://i.ibb.co/5kdNb1r/AMD-Ryzen-5-5600x.jpg",
      "price": 250,
      "discountPrice": 220,
      "description": "Description of AMD Ryzen 5 5600x",
      "stock": 50,
      "sold": 10
    },
    {
      "id": 2,
      "productName": "ryzen-3500-500x500",
      "image": "https://i.ibb.co/Fhw3VqW/ryzen-3500-500x500.jpg",
      "price": 150,
      "description": "Description of Ryzen 3500",
      "stock": 30,
      "sold": 5
    },
    {
      "id": 3,
      "productName": "AMD-Ryzen-95050-X",
      "image": "https://i.ibb.co/dfHb9w9/AMD-Ryzen-95050-X.webp",
      "price": 350,
      "description": "Description of AMD Ryzen 95050 X",
      "stock": 20,
      "sold": 2
    },
    {
      "id": 4,
      "productName": "amd-ryzen-7-5700g-desktop-pc-01",
      "image": "https://i.ibb.co/K9HxfjY/amd-ryzen-7-5700g-desktop-pc-01.jpg",
      "price": 400,
      "discountPrice": 380,
      "description": "Description of AMD Ryzen 7 5700g",
      "stock": 15,
      "sold": 3
    }
  ]
  return (
    <div className='bg-white border border-blue-500 flex flex-col items-center justify-center ' >
        <h2 className='pl-5 pt-5 w-full text-indigo-600'>Exclusive Products</h2>
       <div className="">
       {
        <Carosule item={products}/>
       }
       </div>
    </div>
  )
}

export default ExclusiveProducts
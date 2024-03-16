import BannerProducts from '@/components/shared/BannerProducts/BannerProducts';
import React from 'react'

const StationaryBanner = () => {
    const electronics = ["Mobile", "Computer"];

    const electronicsData = [
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
  return (
    <div>
          <BannerProducts title={"Stationary"} products={electronicsData} productsNav={electronics}/>
    </div>
  )
}

export default StationaryBanner
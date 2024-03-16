

import BannerProducts from '@/components/shared/BannerProducts/BannerProducts'


const MacrameCraftsBanner = () => {
    const macrameCrafts = [
        "Mirror Set",
        "1 Layer",
        "2 Layer",
        "3 Layer",
        "Wall Hanging",
      ];

    const macrameCraftsData = [
        {
          id: 1,
          title: "Macrame Wall hanging crafts single Layer",
          image: "https://i.ibb.co/g7Vnh5G/producat11.png",
          height: "3.5 feet",
          width: "20 inches",
          description:
            "Beautiful Macrame wall hanging crafted with precision knotting. Elevate your decor with this unique and stylish piece.",
          price: 1350,
          material: "Cotton rope and Kerasin Wood",
          category: "2 Layer",
          discountPrice: 1250,
          discountAmount: 40,
          stock: 50,
          sold: 10,
        },
        {
          id: 2,
          title: "Macrame Wall hanging crafts single Layer",
          image: "https://i.ibb.co/H41Wp2q/producat-8.png",
          height: "3.5 feet",
          width: "20 inches",
          description:
            "Unique Macrame wall hanging with a blend of traditional and modern elements. Handcrafted for a one-of-a-kind look.",
          price: 1400,
          material: "Cotton rope and Kerasin Wood",
          category: "2 Layer",
          discountPrice: 1150,
          discountAmount: 20,
          stock: 30,
          sold: 5,
        },
        {
          id: 3,
          title: "Macrame tree plant wall hanging",
          image: "https://i.ibb.co/yp3C4Nf/producat-2.png",
          height: "3.5 feet",
          width: "20 inches",
          description:
            "Modern Macrame wall hanging with a unique blend of textures. Crafted to bring a modern and artistic flair to your home decor.",
          price: 1000,
          material: "Cotton rope and Kerasin Wood",
          category: "2 layer",
          discountPrice: 850,
          discountAmount: 30,
          stock: 20,
          sold: 2,
        },
        {
          id: 4,
          title: "Macrame Wall hanging crafts 2 Layer",
          image: "https://i.ibb.co/gM8JD8b/producat19.png",
          height: "3.5 feet",
          width: "20 inches",
          description:
            "Modern Macrame wall hanging with a unique blend of textures. Crafted to bring a modern and artistic flair to your home decor.",
          price: 1700,
          material: "Cotton rope and Kerasin Wood",
          category: "2 layer",
          discountPrice: 1500,
          discountAmount: 50,
          stock: 15,
          sold: 3,
        },
        {
          id: 5,
          title: "Macrame Wall hanging crafts single Layer",
          image: "https://i.ibb.co/hC8pX6R/producat24.png",
          height: "2 feet",
          width: "20 inches",
          description:
            "Modern Macrame wall hanging with a unique blend of textures. Crafted to bring a modern and artistic flair to your home decor.",
          price: 1000,
          material: "Cotton rope and Kerasin Wood",
          category: "1 Layer",
          discountPrice: 750,
          discountAmount: 15,
          stock: 25,
          sold: 5,
        },
        {
          id: 6,
          title: "Macrame Wall hanging crafts single Layer",
          image: "https://i.ibb.co/svgg1nS/producat13.png",
          height: "2.5 feet",
          width: "20 inches",
          description:
            "Modern Macrame wall hanging with a unique blend of textures. Crafted to bring a modern and artistic flair to your home decor.",
          price: 1200,
          material: "Cotton rope and Kerasin Wood",
          category: "1 Layer",
          discountPrice: 950,
          discountAmount: 35,
          stock: 35,
          sold: 8,
        },
      ];

  return (
    <div>
        <BannerProducts title={"Macrame Crafts"} products={macrameCraftsData} productsNav={macrameCrafts}/>
    </div>
  )
}

export default MacrameCraftsBanner
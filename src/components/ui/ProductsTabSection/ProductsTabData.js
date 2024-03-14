import React from "react";
import ShowProducts from "./ShowProducts";

const ProductsTabData = ({ productCategory }) => {
  const books = [
    {
      title: "The Da Vinci Code",
      image: "https://i.ibb.co/q5Rd9JV/bookopen.png",
      author: "Dan Brown",
      ratings: 48,
      stock: 80,
      sold: 20,
      price: 39.99,
      category: "Mystery",
      review: "This book exceeded my expectations! Highly recommended.",
    },
    {
      title: "To Kill a Mockingbird",
      image: "https://i.ibb.co/DMcQCpt/book-93152023-10-16-1697435294.jpg",
      author: "Harper Lee",
      ratings: 42,
      stock: 120,
      sold: 80,
      price: 49.99,
      discountPrice: 44.99,
      discountAmount: 15,
      category: "Fiction",
      review: "Great quality and compelling storyline. Will read again.",
    },
    {
      title: "The Great Gatsby",
      image:
        "https://i.ibb.co/gDbMdN4/bangladeshi-primary-school-students-hold-new-textbooks-after-receiving-them-for-the-new-classes-at-s.jpg",
      author: "F. Scott Fitzgerald",
      ratings: 46,
      stock: 60,
      sold: 10,
      price: 19.99,
      discountPrice: 14.99,
      discountAmount: 30,
      category: "Classic",
      review: "A timeless masterpiece. I'm satisfied with my purchase.",
    },
    {
      title: "1984 sbv",
      image: "https://i.ibb.co/B4N1BVM/Class-1-Mathematics-Book.jpg",
      author: "George Orwell",
      ratings: 39,
      stock: 150,
      sold: 30,
      price: 9.99,
      category: "Dystopian",
      review: "Thought-provoking and relevant. Highly recommended!",
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      image: "https://i.ibb.co/Xj4xPm7/3bc0259e910c483fc3b88b2f4cf6e70f.jpg",
      author: "J.K. Rowling",
      ratings: 49,
      stock: 90,
      sold: 70,
      price: 59.99,
      discountPrice: 54.99,
      discountAmount: 25,
      category: "Fantasy",
      review: "Magical! It transported me to a world of wonder.",
    },
    {
      title: "The Hobbit",
      image: "https://i.ibb.co/zR118Wb/1574698285.jpg",
      author: "J.R.R. Tolkien",
      ratings: 44,
      stock: 110,
      sold: 50,
      price: 79.99,
      discountPrice: 74.99,
      discountAmount: 60,
      category: "Fantasy",
      review: "An enchanting journey. Highly recommend for all ages.",
    },
  ];

  const electronics = [
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

  const macrameCrafts = [
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
    <div className="m-5 p-5 ">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {productCategory === "Books" &&
          books
            ?.slice(0, 8)
            .map((item, inx) => <ShowProducts key={inx} item={item} />)}
        {productCategory === "Stationary" &&
          books
            ?.slice(0, 8)
            .map((item, inx) => <ShowProducts key={inx} item={item} />)}
        {productCategory === "Macrame Crafts" &&
          macrameCrafts
            ?.slice(0, 8)
            .map((item, inx) => <ShowProducts key={inx} item={item} />)}
        {productCategory === "Electronics" &&
          electronics
            ?.slice(0, 8)
            .map((item, inx) => <ShowProducts key={inx} item={item} />)}
        {productCategory === "Gifts" &&
          electronics
            ?.slice(0, 8)
            .map((item, inx) => <ShowProducts key={inx} item={item} />)}
        {productCategory === "Ornaments" &&
          electronics
            ?.slice(0, 8)
            .map((item, inx) => <ShowProducts key={inx} item={item} />)}
      </div>
    </div>
  );
};

export default ProductsTabData;

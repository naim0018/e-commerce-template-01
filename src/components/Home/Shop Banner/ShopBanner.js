"use client";
import BannerProducts from "@/components/shared/BannerProducts/BannerProducts";
import React, { useState } from "react";

const ShopBanner = () => {
  const booksNav = ["School", "College", "Islamic", "Language"];
  const books = [
    {
      title: "Class-5",
      image: "https://i.ibb.co/Csg7pZT/Cam-Scanner-01-05-2024-16-16-5.jpg",
      publisher: "Lecture",
      ratings: 48,
      stock: 80,
      sold: 20,
      price: 800,
      category: "Book",
      subCategory: "School",
    },
    {
      title: "Class-4",
      image: "https://i.ibb.co/7jvxf8M/Cam-Scanner-01-05-2024-16-16-6.jpg",
      publisher: "Lecture",
      ratings: 42,
      stock: 120,
      sold: 80,
      price: 600,
      category: "Book",
      subCategory: "School",
    },
    {
      title: "Class-5",
      image: "https://i.ibb.co/gVz3xQv/Cam-Scanner-01-05-2024-16-16-3.jpg",
      publisher: "Panjeree",
      ratings: 46,
      stock: 60,
      sold: 10,
      price: 850,
      category: "Book",
      subCategory: "School",
    },
    {
      title: "Class-5 (English Version)",
      image: "https://i.ibb.co/chN4NzK/Cam-Scanner-01-05-2024-16-16-4.jpg",
      publisher: "Panjeree",
      ratings: 39,
      stock: 150,
      sold: 30,
      price: 1000,
      category: "Book",
      subCategory: "School",
    },
    {
      title: "Class-2",
      image: "https://i.ibb.co/GF0dQY8/Cam-Scanner-01-05-2024-16-16-1.jpg",
      publisher: "Lecture",
      ratings: 49,
      stock: 90,
      sold: 70,
      price: 300,
      category: "Book",
      subCategory: "School",
    },
    {
      title: "Class-4",
      image: "https://i.ibb.co/48gVQdh/Cam-Scanner-01-05-2024-16-16-2.jpg",
      publisher: "Panjeree",
      ratings: 49,
      stock: 90,
      sold: 70,
      price: 640,
      category: "Book",
      subCategory: "School",
    },
  ];

  const electronicsNav = ["Mobile", "Computer", "Gadgets"];
  const electronics = [
    {
      id: 1,
      category: "Electronics",
      subCategory: "Processors",
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
      category: "Electronics",
      subCategory: "Processors",
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
      category: "Electronics",
      subCategory: "Processors",
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
      category: "Electronics",
      subCategory: "Processors",
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
      category: "Electronics",
      subCategory: "Processors",
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
      category: "Electronics",
      subCategory: "Processors",
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
  const macrameCraftsNav = [
    "Mirror Set",
    "1 Layer",
    "2 Layer",
    "3 Layer",
    "Wall Hanging",
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
      category: "Macrame Crafts",
      subcategory: "2 Layer",
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
      category: "Macrame Crafts",
      subcategory: "2 Layer",
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
      category: "Macrame Crafts",
      subcategory: "2 layer",
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
      category: "Macrame Crafts",
      subcategory: "2 layer",
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
      category: "Macrame Crafts",
      subcategory: "1 Layer",
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
      category: "Macrame Crafts",
      subcategory: "1 Layer",
      discountPrice: 950,
      discountAmount: 35,
      stock: 35,
      sold: 8,
    },
  ];
  
  const booksData = [booksNav, books,'red-500'];
  const macrameCraftsData=[macrameCraftsNav,macrameCrafts,'sky-500']
  const electronicsData = [electronicsNav, electronics,'green-500'];


  const items = [macrameCraftsData,booksData, electronicsData];


  return (
    <div className="space-y-10">
      {items?.map((item, inx) => (
        <BannerProducts key={inx} productsNav={item[0]} products={item[1]} color={item[2]} />
      ))}
    </div>
  );
};

export default ShopBanner;

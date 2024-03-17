import ProductsCard from '@/components/shared/ProductsCard/ProductsCard';
import React from 'react'

const BookProducts = () => {
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
          image:
            "https://i.ibb.co/gVz3xQv/Cam-Scanner-01-05-2024-16-16-3.jpg",
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
    subCategory:"School"
          
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
    subCategory:"School"
    
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
    subCategory:"School"
    
        },
      ];
    
  return (
    <div   className='grid grid-cols-4 items-center justify-center'>
        {
            books.map((book,inx)=>
            <ProductsCard key={inx} product={book}/>
            )
        }
    </div>
  )
}

export default BookProducts
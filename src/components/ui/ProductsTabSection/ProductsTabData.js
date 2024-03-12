import React from 'react'
import ShowProducts from './ShowProducts'

const ProductsTabData = ({productCategory}) => {





    const books = [
        {
            "title": "The Da Vinci Code",
            "image": "https://example.com/image1.jpg",
            "author": "Dan Brown",
            "ratings": 48,
            "stock": 80,
            "sold_amount": 20,
            "price": 39.99,
            "discountPrice": 34.99,
            "discountAmount": 20,
            "category": "Mystery",
            "review": "This book exceeded my expectations! Highly recommended."
        },
        {
            "title": "To Kill a Mockingbird",
            "image": "https://example.com/image2.jpg",
            "author": "Harper Lee",
            "ratings": 42,
            "stock": 120,
            "sold_amount": 80,
            "price": 49.99,
            "discountPrice": 44.99,
            "discountAmount": 15,
            "category": "Fiction",
            "review": "Great quality and compelling storyline. Will read again."
        },
        {
            "title": "The Great Gatsby",
            "image": "https://example.com/image3.jpg",
            "author": "F. Scott Fitzgerald",
            "ratings": 46,
            "stock": 60,
            "sold_amount": 10,
            "price": 19.99,
            "discountPrice": 14.99,
            "discountAmount": 30,
            "category": "Classic",
            "review": "A timeless masterpiece. I'm satisfied with my purchase."
        },
        {
            "title": "1984",
            "image": "https://example.com/image4.jpg",
            "author": "George Orwell",
            "ratings": 39,
            "stock": 150,
            "sold_amount": 30,
            "price": 9.99,
            "discountPrice": 7.99,
            "discountAmount": 45,
            "category": "Dystopian",
            "review": "Thought-provoking and relevant. Highly recommended!"
        },
        {
            "title": "Harry Potter and the Philosopher's Stone",
            "image": "https://example.com/image5.jpg",
            "author": "J.K. Rowling",
            "ratings": 49,
            "stock": 90,
            "sold_amount": 70,
            "price": 59.99,
            "discountPrice": 54.99,
            "discountAmount": 25,
            "category": "Fantasy",
            "review": "Magical! It transported me to a world of wonder."
        },
        {
            "title": "The Hobbit",
            "image": "https://example.com/image6.jpg",
            "author": "J.R.R. Tolkien",
            "ratings": 44,
            "stock": 110,
            "sold_amount": 50,
            "price": 79.99,
            "discountPrice": 74.99,
            "discountAmount": 60,
            "category": "Fantasy",
            "review": "An enchanting journey. Highly recommend for all ages."
        }
    ]

    const electronics=[
        {
            "title": "Sony TV 55-inch 4K Ultra HD Smart LED TV",
            "image": "https://example.com/image1.jpg",
            "brand": "Sony",
            "ratings": 48,
            "stock": 80,
            "sold_amount": 20,
            "price": 39.99,
            "discountPrice": 34.99,
            "discountAmount": 20,
            "category": "Electronics",
            "subcategory": "Televisions",
            "type": "TV",
            "review": "This product exceeded my expectations! Highly recommended."
        },
        {
            "title": "Samsung Galaxy S20 Ultra 5G",
            "image": "https://example.com/image2.jpg",
            "brand": "Samsung",
            "ratings": 42,
            "stock": 120,
            "sold_amount": 80,
            "price": 49.99,
            "discountPrice": 44.99,
            "discountAmount": 15,
            "category": "Electronics",
            "subcategory": "Smartphones",
            "type": "Smartphone",
            "review": "Great quality and compelling storyline. Will read again."
        },
        {
            "title": "LG 65-inch OLED 4K UHD Smart TV",
            "image": "https://example.com/image3.jpg",
            "brand": "LG",
            "ratings": 46,
            "stock": 60,
            "sold_amount": 10,
            "price": 19.99,
            "discountPrice": 14.99,
            "discountAmount": 30,
            "category": "Electronics",
            "subcategory": "Televisions",
            "type": "TV",
            "review": "A timeless masterpiece. I'm satisfied with my purchase."
        },
        {
            "title": "Apple MacBook Pro 13-inch",
            "image": "https://example.com/image4.jpg",
            "brand": "Apple",
            "ratings": 39,
            "stock": 150,
            "sold_amount": 30,
            "price": 9.99,
            "discountPrice": 7.99,
            "discountAmount": 45,
            "category": "Electronics",
            "subcategory": "Laptops",
            "type": "Laptop",
            "review": "Thought-provoking and relevant. Highly recommended!"
        },
        {
            "title": "Dell XPS 15 9500",
            "image": "https://example.com/image5.jpg",
            "brand": "Dell",
            "ratings": 49,
            "stock": 90,
            "sold_amount": 70,
            "price": 59.99,
            "discountPrice": 54.99,
            "discountAmount": 25,
            "category": "Electronics",
            "subcategory": "Laptops",
            "type": "Laptop",
            "review": "Magical! It transported me to a world of wonder."
        },
        {
            "title": "Microsoft Xbox Series X",
            "image": "https://example.com/image6.jpg",
            "brand": "Microsoft",
            "ratings": 44,
            "stock": 110,
            "sold_amount": 50,
            "price": 79.99,
            "discountPrice": 74.99,
            "discountAmount": 60,
            "category": "Electronics",
            "subcategory": "Gaming Consoles",
            "type": "Gaming Console",
            "review": "An enchanting journey. Highly recommend for all ages."
        }
    ]
    
    
      

  return (
    <div className='border m-5 p-5'>
        
        <p>{productCategory}</p>
        
        <div className="">
            {
               
                books?.map((item,inx)=> <ShowProducts key={inx} item={item}/> )
            }

        </div>
        </div>
  )
}

export default ProductsTabData
import BannerProducts from "@/components/shared/BannerProducts/BannerProducts";


const BookShopBanner = () => {
    const booksNav = ["School", "College", "Islamic", "Language"];
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
      
  return (
   <div className="">
    <BannerProducts products={books} productsNav={booksNav} title={"Books"}/>
   </div>
  )
}

export default BookShopBanner
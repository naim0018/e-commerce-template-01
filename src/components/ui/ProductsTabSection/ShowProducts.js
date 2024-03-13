import Image from 'next/image'
import React from 'react'

const ShowProducts = ({item}) => {
    const { title, image, author, ratings, stock, sold_amount, price, discountPrice, discountAmount, category, review } = item
  return (
    <div>
     <Image
     src={image}
     alt={title}
     width={200}
      height={200}
     />
    </div>
  )
}

export default ShowProducts
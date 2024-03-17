import Sidebar from '@/components/shared/Sidebar/Sidebar'
import React from 'react'

const BookSideNav = () => {
    const books = ["School", "College", "Islamic", "Language"];
  return (
    <div>
        <Sidebar title={"Books"} navItems={books}/>
    </div>
  )
}

export default BookSideNav
import React from 'react'

// From Sidebar
const SidebarHover = ({option}) => {
  return (
    <div className='flex items-center justify-start gap-2'>
      <input type="checkbox" />
      <label className='text-start hover:text-black'>{option}</label>
    </div>
  )
}

export default SidebarHover

import Sidebar from '@/components/shared/Sidebar/Sidebar'
import React from 'react'

const MacrameCraftsSideNav = () => {
    const macrameCrafts = [
        "Mirror Set",
        "1 Layer",
        "2 Layer",
        "3 Layer",
        "Wall Hanging",
      ];
  return (
    <div  className=''>
        <Sidebar title={"MacrameCrafts"} navItems={macrameCrafts}/>
    </div>
  )
}

export default MacrameCraftsSideNav
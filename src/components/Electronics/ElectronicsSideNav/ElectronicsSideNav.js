import Sidebar from '@/components/shared/Sidebar/Sidebar'
import React from 'react'

const ElectronicsSideNav = () => {
    const electronics = ["Mobile", "Computer"];
  return (
    <div>
        
        <Sidebar title={"Electronics"} navItems={electronics}/>
    </div>
  )
}

export default ElectronicsSideNav
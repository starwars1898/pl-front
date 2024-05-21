import React from 'react'
import TopBarLeftSection from './left-section'
import TopBarRightSection from './right-section'

function TopBar() {
  return (
    <div className='w-full h-[4rem] flex items-center bg-red-600 text-white'>
        <TopBarLeftSection />
        <TopBarRightSection />
    </div>
  )
}

export default TopBar
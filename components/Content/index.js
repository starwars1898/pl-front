import React from 'react'

function Content({children}) {
  return (
    <div className='w-full lg:w-[calc(100%-14rem)] h-full p-1 bg-gray-100'>
        {/* Content */}
      {children}
    </div>
  )
}

export default Content
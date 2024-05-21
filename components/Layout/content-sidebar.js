import React from 'react'

function ContentSidebar({children}) {
  return (
    <div className='w-full h-[calc(100%-4rem)] flex'>
      {children}
    </div>
  )
}

export default ContentSidebar
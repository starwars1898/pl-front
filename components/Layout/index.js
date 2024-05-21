import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

function Layout({children}) {

  return (
    <div 
      className={`
        w-screen
        h-screen
        flex 
        flex-col
        tracking-wider
      ` + inter.className}
    >
      {children}
    </div>
  )
}

export default Layout
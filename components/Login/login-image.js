import React from 'react'
import Image from 'next/image'
import LogisticsImage from '@/public/logistics.svg'

function LoginImage() {
  return (
    <div 
        className={`
        w-0 md:w-1/2
        h-full
        hidden md:flex
        bg-white
        items-center
        p-2
      `}
    >
      <Image
        src={LogisticsImage}
        width={700}
        height={700}
        alt="Logistics Image"
        className='mx-auto my-auto'
      />
    </div>
  )
}

export default LoginImage
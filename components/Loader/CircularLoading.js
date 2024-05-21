import React from 'react'
import { LuLoader2 } from "react-icons/lu";

function CircularLoading(props) {

  const { 
    className, 
    size = 'small',
    color = 'blue'
  } = props

  return (
    <div className={`${className} flex justify-center items-center backdrop-blur-sm`}>
      {
        size === 'large'
        ? <LuLoader2 className={`animate-spin h-16 w-16 ${color === 'blue' ? 'text-blue-400' : 'text-red-400'} font-bold mx-auto my-auto`}/>
        : <LuLoader2 className={`animate-spin h-10 w-10 ${color === 'blue' ? 'text-blue-400' : 'text-red-400'} font-bold mx-auto my-auto`}/>
      }
    </div>  
  )
}

export default CircularLoading
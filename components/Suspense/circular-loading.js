import React from 'react'
import CircularLoading from '../Loader/CircularLoading'

function CircularLoadingBody() {
  return (
    <div className='w-screen h-screen z-40 text-2xl flex items-center justify-center'>
      <CircularLoading size='large' color='red'/>
    </div>
  )
}

export default CircularLoadingBody
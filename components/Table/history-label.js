import React from 'react'
import Icon from '../Icon'
import { MdOutlineHistory } from "react-icons/md"

function HistoryLabel() {
  return (
    <div className='w-full h-[3rem] bg-white rounded-t-md flex p-2'>
        <Icon icon={<MdOutlineHistory />} className='my-auto mx-1 text-2xl'/>
        <span className='my-auto mx-1 font-semibold'>HISTORY LOGS</span>
    </div>
  )
}

export default HistoryLabel
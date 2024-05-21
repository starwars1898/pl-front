import React from 'react'
import SideBarButtons from './sidebar-buttons'
import { Links } from '@/utils/links'
import { useRouter } from 'next/router'

function SideBar() {

  const router = useRouter()
  const { pathname } = router
  const routeName = pathname.substring(1)
 
  return (
    <div className='h-full lg:w-[14rem] hidden lg:flex overflow-y-auto bg-white'>
      <ul className='w-full h-full flex flex-col p-1'>
        {
          Links.map((val) => 
            <SideBarButtons 
              key={val.key}
              className={`${routeName === val.key ? 'rounded-md bg-slate-100 shadow-md' : ''}`}
              iconSelect={val.icon}
              text={val.name}
              onClick={() => router.push(val.url)}
            />
          )
        }
      </ul>
    </div>
  )
}

export default SideBar
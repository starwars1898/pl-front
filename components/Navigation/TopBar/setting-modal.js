import React from 'react'
import { UserStore } from '@/utils/store'
import Icon from '@/components/Icon'
import { MdAccountCircle } from "react-icons/md"
import { IoLogOutOutline } from "react-icons/io5"
import toast from 'react-hot-toast'
import { LogOut } from '@/utils/function'

function SettingModal() {

    const { UserModel } = UserStore()

    //EVENTS
    const handleLogoutButton = () => {
        toast.success('Successfully Logged Out!')
        LogOut()
    }

    return (
        <div 
            className='
            w-[12rem] 
            h-[7rem] 
            p-2
            z-20 
            absolute 
            rounded-l-lg
            top-[4rem]
            flex
            flex-col
            bg-white
            shadow-lg'
        >

            <div className='h-[3rem] w-full flex border-b-2 mb-1 items-center text-black px-3'>
                <Icon className='text-2xl mr-2' icon={<MdAccountCircle />}/>
                <span className='text-sm overflow-x-hidden'>{UserModel.real_name || 'NotAuth'}</span>
            </div>

            <div 
                className='h-[2.5rem] w-full flex items-center rounded-md text-sm hover:cursor-pointer hover:bg-gray-100 text-red-600 px-3'
                onClick={() => handleLogoutButton()}
            >
                <Icon className='text-2xl' icon={<IoLogOutOutline />}/>
                <span className='overflow-x-hidden ml-2'>LOGOUT</span>
            </div>
           
        </div>
    )
}

export default SettingModal
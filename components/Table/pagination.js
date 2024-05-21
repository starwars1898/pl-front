import React, { useState } from 'react'
import Button from '../Button'
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"

function Pagination({page, onPageChange}) {

    const handleNextPage = () => {
        onPageChange(page + 1)
    }

    const handlePrevPage = () => {
        if(page !== 1){
            onPageChange(page - 1)
        }
    }

    const handleFirstPage = () => {
        if(page !== 1){
            onPageChange(1)
        }
    }

    return (
        <div className='w-[200px] h-[3rem] flex mx-auto mt-[2rem]'>

            <Button 
                type='gray'
                text='Latest'
                buttonClass='h-[2rem] w-[4rem] flex text-sm items-center p-1 my-auto mr-1' 
                textClass='mx-auto'
                onClick={() => handleFirstPage()}
            />

            <Button 
                type='gray'
                buttonClass='h-[2rem] w-[2rem] flex text-sm items-center p-1 my-auto' 
                iconClass='text-xl' 
                icon={<MdNavigateBefore />}
                onClick={() => handlePrevPage()}
            />

            <div className='h-[2rem] w-[4rem] w-auto min-w-[2rem] flex text-sm items-center p-1 my-auto'>
                <span className='mx-auto font-semibold text-gray-400'>{page}</span>
            </div>

            <Button 
                type='gray'
                buttonClass='h-[2rem] w-[2rem] flex text-sm items-center p-1 my-auto' 
                iconClass='text-xl' 
                icon={<MdNavigateNext />}
                onClick={() => handleNextPage()}
            />

        </div>
    )
}

export default Pagination
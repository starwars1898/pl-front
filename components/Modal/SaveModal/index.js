import React from 'react'
import Button from '@/components/Button'

function SaveModal(props) {

    const {
        title,
        message,
        open = false,
        onClose,
        onSave
    } = props

    return (
        <>
            {/* BACKGROUND */}
            {
                open === true && 
                <div className='absolute top-0 left-0 w-[100vw] h-[100vh] z-30 bg-gray-800 opacity-75'>
    
                </div>
            }

            {/* MODAL FORM */}
            {
                open === true &&
                <div className='w-full lg:w-[500px] h-[200px] absolute top-[50%] left-[50%] p-2 translate-x-[-50%] translate-y-[-50%] bg-white z-40 rounded-md shadow-lg'>
                    <div className='text-lg w-full h-[35px] border-b border-gray-300'>{title}</div>
                    <div className='text-base w-full h-[100px] flex items-center justify-center text-center'>{message}</div>
                    <div className='w-full h-[60px] border-t border-gray-300 flex justify-center'>
                        <Button 
                            text='Save' 
                            buttonClass='my-auto mx-1 h-[2rem] w-[5rem]'
                            onClick={() => onSave()}
                        />
                        <Button 
                            text='Close' 
                            type='secondary' 
                            buttonClass='my-auto mx-1 h-[2rem] w-[5rem]'
                            onClick={() => onClose()}
                        />
                    </div>
                </div>  
            }
        </>
    )
}

export default SaveModal
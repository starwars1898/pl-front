import React from 'react'

function Label(props) {

    const {
        text,
        className
    } = props

    return  (
        <div className='w-full p-2 flex justify-center'>
            <label className={className}>{text}</label>
        </div>
    )
}

export default Label
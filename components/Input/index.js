import React from 'react'

function Input(props) {

    const {
        placeholder,
        icon = null,
        value,
        className,
        onChange,
        type = 'text',
        status = 'default'
    } = props

    const classes = {
        default: `focus:outline-blue-400`,
        error: `
            border-[3px]
            border-red-400
            focus:outline-none
        `,
        success: `
            border-[3px]
            border-green-400
            focus:outline-none
        `
    }

    const statusSelector = (status) => {
        switch (status) {
            case 'success':
                return classes.success
            case 'error':
                return classes.error
            case 'default':
                return classes.default
        }
    }

    return (
        <div className='p-2 flex w-full justify-center'>
            {
                icon !== null && <>{icon}</>
            }
            <input 
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={
                    className + ` 
                    ${statusSelector(status)}
                    mx-2 
                    h-[2.8rem] 
                    py-2 px-4 
                    text-xl 
                    rounded-md
                `}
            />
        </div>
    )
}

export default Input
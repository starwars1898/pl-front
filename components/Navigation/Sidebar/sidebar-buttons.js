import React from 'react'
import Icon from '@/components/Icon'

function SideBarButtons(props) {

    const {
        className,
        iconSelect,
        text,
        onClick
    } = props
    
    return (
        <li 
            key={text}
            className={`
                ${className}
                w-full 
                h-auto min-h-[2.8rem]
                rounded-sm
                hover:cursor-pointer
                flex
                items-center
                `}
            onClick={onClick}
        >
            <Icon icon={iconSelect} className='mx-2 text-2xl' />
            <span>{text}</span>
        </li>
    )
}

export default SideBarButtons
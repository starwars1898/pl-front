import React from 'react'

function Button(props) {

    const {
        icon = null,
        text,
        type = 'primary',
        disabled = false,
        buttonClass,
        iconClass,
        textClass,
        onClick
    } = props

    const classes = {
        primary: `
            bg-blue-600 text-white hover:bg-blue-700 duration-100
        `,
        secondary: `
            bg-red-600 text-white hover:bg-red-700 duration-100
        `,
        tertiary: `
            bg-green-600 text-white hover:bg-green-700 duration-100
        `,
        disabled: `
            bg-gray-300 text-white
        `,
        gray: `
            bg-gray-400 text-white hover:bg-gray-500 duration-100
        `
    }

    const typeSelector = (type) => {
        switch (type) {
            case 'primary':
                return classes.primary
            case 'secondary':
                return classes.secondary
            case 'tertiary':
                return classes.tertiary
            case 'gray':
                return classes.gray
        }
    }

    const disabledSelector = (val) => {
       if(val === true){
        return classes.disabled
       } 
    }

    return (
        <button 
            className={buttonClass + ` ${disabled ? disabledSelector(disabled) : typeSelector(type)} shadow-md rounded-md focus:outline-none`} 
            onClick={onClick}
            disabled={disabled}
        >
            {
                icon !== null
                && 
                <span className={iconClass}>{icon}</span>
            }
            <span className={textClass}>{text}</span>
        </button>
    )
}

export default Button
import React from 'react'

function Icon(props) {

    const {
        icon,
        className,
        onClick
    } = props

    return (
        <div className={className} onClick={onClick}>
            {icon}
        </div>
    )
}

export default Icon
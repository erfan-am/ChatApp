import React from 'react'

const Button = (props) => {
    return (
        <button onClick={props.onClick} type={props.type} className={`
        bg-blue-400
          hover:bg-red-600 focus:outline-none p-3  w-36 outline-none 
         rounded ${props.className}`}>{props.children}</button>
    )
}

export default Button

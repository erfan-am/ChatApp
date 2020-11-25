import React from 'react'
import { NavLink } from 'react-router-dom'
const Link = (props) => {
    return (
        <NavLink exact={true} to={props.to} 
        className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900">{props.children}</NavLink>

    )
}

export default Link

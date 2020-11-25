import React from 'react'
import *as icon from '../../SVG/SVG'
const userListsAcoount=[
    {
        onClick:()=>{},
        id:Math.random().toString(),
        title:"Add Account",
        icon:icon.add
    },
    {
        onClick:()=>{},
        id:Math.random().toString(),
        title:"Account",
        icon:icon.user

    },
    {
        onClick:()=>{},
        id:Math.random().toString(),
        title:"Logout",
        icon:icon.logout
    }
]
const lists=[
    {
        onClick:()=>{},
        id:Math.random().toString(),
        title:"Contacts",
        icon:icon.contact
    },
   {
        onClick:()=>{},
        id:Math.random().toString(),
        title:"Calls",
        icon:icon.call
    },
    {
        onClick:()=>{},
        id:Math.random().toString(),
        title:"Saved Messages",
        icon:icon.saveMessage
    },
    {
        onClick:()=>{},
        id:Math.random().toString(),
        title:"Settings",
        icon:icon.setting
    }
]
const UserPannel = () => {
    return (
        <div style={{
            width:'15%'
        }} className=" text-white min-h-full p-2">
            <div className="p-3">
                {userListsAcoount.map(rgk=>
                <span key={rgk.id} onClick={rgk.onClick} className="block  p-1 flex   hover:text-red-600">
                     {rgk.icon}  _ {rgk.title}
                    </span>
                )}
            </div>
            <hr/>
            <ul className="p-2">
                {lists.map(list=>(
                <li key={list.id} onClick={list.onClick} 
                className="p-2 flex hover:text-red-500 bg-white bg-opacity-10">
                    {list.icon}{" __"}{list.title}</li>
                ))}
            </ul>
            <hr/>
            
        </div>
    )
}

export default UserPannel

import React, { useContext } from 'react';
import { ChatApp } from '../../Context/ContextAPI';
import { user } from '../../data/users';
import { channel, pv, users } from '../../SVG/SVG';
import UserProfileDetails from '../UI/UserProfileDetails';

const PannelSide = () => {
    const {userActivity,getTarget,chooseTargetHandler,chooseTarget,target}=useContext(ChatApp);

const pannelOption=[
    {
        id:Math.random().toString(),
        title:"All",
        icon:pv,
        onClick:()=>getTarget("All")
    },
    {
        id:Math.random().toString(),
        title:"private",
        icon:pv,
        onClick:()=>getTarget("private")
    },
    {
        id:Math.random().toString(),
        title:"group",
        icon:users,
        onClick:()=>getTarget("group")
    },
    {
        id:Math.random().toString(),
        title:"channel",
        icon:channel,
        onClick:()=>getTarget("channel")
    },
];
console.log(chooseTarget);
    return (
        <div className=" bg-gray-900 min-h-screen " style={{width:'25%',height:"100vh",overflowY:'scroll',overflowX:'hidden'}}>
            <div className=" flex  justify-around font-bold bg-white  p-5" style={{
                backgroundImage:user.back !=='' && ` url(${user.back})`,
                color:user.back !=="" && "#ffff"
                }}>
              <UserProfileDetails user={user} />
            </div>
                <hr/>
               <ul className=" flex justify-around">
                    {pannelOption.map((option)=>
                    <li style={{
                        color:option.title === target ? 'red' : '#ffff'
                    }} onClick={option.onClick} key={option.id} 
                    className="p-1 hover:text-red-700">
                        {option.icon}{option.title}</li>
                    )}
               </ul>
                <div className="users  pb-11">
                    <ul className="p-2 ">
                        {userActivity.map(rel=>(
                        <div className="p-1" onClick={()=>chooseTargetHandler(rel)} key={rel.id}>
                           <UserProfileDetails  fontSize="12px" sizeImg="50px" key={rel.id} user={rel} color="#ffff" />
                            <hr className="bg-white mt-2 w-40 ml-20" />
                            </div>
                     ))}
                    </ul>
                </div>
        </div>
    )
}

export default PannelSide

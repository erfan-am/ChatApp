import React from 'react'
import { user } from '../../data/users'
import { channel, pv, users } from '../../SVG/SVG'
import UserProfileDetails from '../UI/UserProfileDetails';


const rels=[
    {
        name:"Faeze",
        photo:"https://brinawilliamson.files.wordpress.com/2010/04/cafe-girl-1.jpg",
        email:"test.test@gmail.com",
        id:Math.random().toString()
    },
    {
        name:"Ali",
        photo:"https://i.pinimg.com/originals/05/35/3e/05353eae3cdc3b7a31658f4cbd0ad05a.jpg",
        email:"man.testfe@gmail.com",
        id:Math.random().toString()
    }
]
const PannelSide = () => {
    return (
        <div className=" bg-gray-900 min-h-screen " style={{width:'25%',height:"100vh",overflowY:'scroll',overflowX:'hidden'}}>
            <div className=" flex  justify-around font-bold bg-white  p-5" style={{
                backgroundImage:user.back !=='' && ` url(${user.back})`,
                color:user.back !=="" && "#ffff"
                }}>
              <UserProfileDetails user={user} />
            </div>
                <hr/>
               <ul className="text-white flex justify-around">
            <li className="p-1 hover:text-red-700">{pv}Private</li>
            <li className="p-1 hover:text-red-700">{users}Group</li>
            <li className="p-1 hover:text-red-700">{channel} Channel</li>
               </ul>
                <div className="users  pb-11">
                    <ul className="p-2 ">
                        {rels.map(rel=>(
                        <div className="p-1" key={rel.id}>
                           <UserProfileDetails fontSize="12px" sizeImg="50px" key={rel.id} user={rel} color="#ffff" />
                            <hr className="bg-white mt-2 w-40 ml-20" />
                            </div>
                     ))}
                    </ul>
                </div>
        </div>
    )
}

export default PannelSide

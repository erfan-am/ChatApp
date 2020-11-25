import React from 'react'
import { user } from '../../data/users'
import Mesage from '../UI/Mesage'
import UserProfileDetails from '../UI/UserProfileDetails'
import UserMedia from '../UserMedia/UserMedia'
const messages=[
        {
            name:"Faeze",
            photo:"https://brinawilliamson.files.wordpress.com/2010/04/cafe-girl-1.jpg",
            id:Math.random().toString(),
            message:{
                msg:"Hello Dears !",
                timeHour:new Date().getHours(),
                timeMin:new Date().getMinutes()
            }
        }
]
const MessagePart = () => {
    return (
        <div  className="bg-white p-3 " style={{
            width:'55%',
            height:'100vh',
            backgroundImage:user.theme.ChatBack && `url(${user.theme.ChatBack})`,
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center'
}}>
    <div className="bg-white opacity-50 pb-1">
        <UserProfileDetails user={messages[0]} />        
    </div>
            <div className="container">
                    <Mesage message={messages[0].message} />
            </div>
            <UserMedia/>
        </div>
    )
}

export default MessagePart

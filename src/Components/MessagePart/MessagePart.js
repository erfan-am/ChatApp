import React, { useContext } from 'react'
import { ChatApp } from '../../Context/ContextAPI'
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
    const context=useContext(ChatApp);
    return (
        <div  className="bg-white p-3 " style={{
            width:'55%',
            height:'100vh',
            backgroundImage:user.theme.ChatBack && `url(${user.theme.ChatBack})`,
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center'
}}>
    {context.chooseTarget !==null ? <div className="bg-white opacity-50 pb-1">
        <UserProfileDetails user={context.chooseTarget} />        
    </div> : <h1 className="bg-white text-center p-2">Chose Your Target</h1>}
         {context.chooseTarget && context.chooseTarget.messages &&   <div className="container">
                   { context.chooseTarget.messages.map((message)=> 
                   <Mesage key={message.id} message={message} />)}
            </div>}
            <UserMedia/>
        </div>
    )
}

export default MessagePart

import React from 'react'

const UserProfileDetails = ({user,color,sizeImg,fontSize,claasName}) => {
    return (
        <div className={`flex   font-bold ${claasName}`}  style={{
            color:color && color
        }}>
            <img src={user.photo}  style={{
                width:sizeImg && sizeImg ,
                height:sizeImg && sizeImg
            }} className="hover:opacity-75 h-16  w-16 rounded-full ml-5  mt-4" alt=""/>
            <div className="container-small mt-5 ml-2" style={{
                fontSize:fontSize && fontSize
            }} >
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
        </div>
    )
}

export default UserProfileDetails

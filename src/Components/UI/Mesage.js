import React from 'react'

const Mesage = ({message}) => {
    return (
        <div className="block  p-1 bg-white rounded rounded-b-none hover:text-yellow-600 w-60 mt-3"> 
            <p>{message.msg}</p>
            <h1 className=" ml-auto w-10 text-gray-500"> {message.timeHour}:{message.timeMin}</h1>
        </div>
    )
}

export default Mesage

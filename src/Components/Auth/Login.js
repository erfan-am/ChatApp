import React, { useState } from 'react'
import INPUT from '../UI/Input'
import Button from '../UI/Button'
import { Link } from 'react-router-dom';

const Login = () => {
    const [text,setText]=useState({email:"",password:""});
    const onChnageHandler=(e)=>setText({...text,[e.target.name]:e.target.value});
    return (
        <div className=" opacity-80 bg-blue-700 flex justify-center min-h-screen relative">
             <h1 className="text-white text-center mt-36  font-bold  font-serif">Login To ER.ChAT With Email And Password</h1>
         <div  className="bg-white p-3  fixed mt-44 rounded">
         <form className="mt-10">
                    <INPUT
                        type="email"
                        name="email"
                        label="Email"
                        placeholder="Enter Valid Email"
                        value={text.email}
                        onChange={onChnageHandler}
                    />
                         <INPUT
                        type="password"
                        placeholder="Enter Valid Password"
                        name="password"
                        label="Password"
                        value={text.password}
                        onChange={onChnageHandler}
                    />
                    <p className="text-center">If you don't have account please click  <Link  className="text-blue-600 hover:text-red-60" to="/signup">here</Link></p>
                    <Button type="button" children="Login" className="mx-36" />
            </form>
         </div>
        </div>
    )
}

export default Login

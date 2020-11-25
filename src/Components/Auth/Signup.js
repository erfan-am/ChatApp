import React, { useState } from 'react'
import INPUT from '../UI/Input'
import Button from '../UI/Button'
import { Link } from 'react-router-dom';

const Login = () => {
    const [text,setText]=useState({name:"",email:"",password:"",confirm:""});
    const onChnageHandler=(e)=>setText({...text,[e.target.name]:e.target.value});
    return (
        <div className=" opacity-80 bg-blue-700 flex justify-center min-h-screen relative">
         <div  className="bg-white p-2  fixed mt-20 rounded">
         <h1 className=" text-center  font-bold  font-serif">Create your accunt in ER.ChAT</h1>
         <form className="mt-10">
                   <INPUT
                        type="name"
                        name="name"
                        label="Name"
                        placeholder="Enter Valid Name"
                        value={text.name}
                        onChange={onChnageHandler}
                    />
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
                      <INPUT
                        type="password"
                        placeholder="Enter Password Again"
                        name="password"
                        label="Confirm"
                        value={text.confirm}
                        onChange={onChnageHandler}
                    />
                    <p className="text-center">If you don't have account please click  <Link  className="text-blue-600 hover:text-red-600" to="/login">here</Link></p>
                    <Button type="button" children="Signup" className="mx-36" />
            </form>
         </div>
        </div>
    )
}

export default Login

import React, { useState } from 'react';
import "./App.css";
import { Route, Switch } from 'react-router';
import Home from './container/Home';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import { DataApp } from './Context/ContextAPI';
const App =()=>{
    return (
   <DataApp>
     <div className=" overflow-hidden">
      <Switch>
        <Route path="/" exact render={()=><Home/>} />
        <Route path="/login"  render={()=><Login/>} />
        <Route path="/signup"  render={()=><Signup/>} />
      </Switch>
   </div>
   </DataApp>
    )
} 
 
export default App

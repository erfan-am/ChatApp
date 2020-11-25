import React, { useState } from 'react';
import "./App.css";
import { Route, Switch } from 'react-router';
import Home from './container/Home';
const App =()=>{
    return (
   <div className=" overflow-hidden">
      <Switch>
        <Route path="/" exact render={()=><Home/>} />
      </Switch>
   </div>
    )
} 
 
export default App

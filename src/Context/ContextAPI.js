import { createContext, useState } from "react";
import { rels } from "./data";

export const ChatApp=createContext({
   getTarget:()=>{},
   chooseTargetHandler:()=>{},
   userActivity:[],
   target:'All',
   chooseTarget:null
});


export const DataApp=(props)=>{
    const [userActivity,setUserActivity]=useState(rels);
    const [chooseTarget,setChooseTarget]=useState(null);
    const [target,setTarget]=useState('All');
    const getTarget=(val)=>{
        setUserActivity( val !=="All" ?  rels.filter(item=>item.title === val ) : rels )
        setTarget(val)
    }
    const chooseTargetHandler=(val)=>{
      setChooseTarget(val)
    }
    return(
    <ChatApp.Provider value={{
        userActivity,
        getTarget,
        chooseTarget,
        target,
        chooseTargetHandler
    }}>{props.children}</ChatApp.Provider>
    )
}
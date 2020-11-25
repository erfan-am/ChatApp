import React, { useState } from 'react'
import { user } from '../data/users'
import Link from '../Components/UI/Link'
import Smallnav from './smallnav'

const Layout = (props) => {
    const [showUserFomr,setshowUserFomr]=useState(false)
    const [showNav,setShownav]=useState(false);
    const onClickNavLink=()=>{
      setShownav(false)
    }
    return (
<nav className="bg-gray-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex items-center justify-between h-16">
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
      </div>
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
        <Link to="/" children="ER.CHAT" />
        </div>
      </div>
    </div>
    <div className="hidden md:block">
      <div className="ml-4 flex items-center md:ml-6">
        <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">View notifications</span>
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>

        <div className="ml-3 relative">
          <div>
            <button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
              <span className="sr-only">Open user menu</span>
              <img onClick={()=>setshowUserFomr(!showUserFomr)} className="h-8 w-8 rounded-full"
               src={user.photo} alt=""/>
            </button>
          </div>
         
          {showUserFomr !==false && 
          <div style={{
              zIndex:'10000'
          }} 
          className=" origin-top-right absolute transition-opacity right-0 mt-2 w-48
           rounded-md shadow-lg py-1 bg-white 
           ring-1 ring-black ring-opacity-5" 
           role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">{user.name}</a>

            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>

            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
          </div>}
        </div>
      </div>
    </div>
    <div className="-mr-2 flex md:hidden">
      <button onClick={()=>setShownav(!showNav)} className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
        <span className="sr-only">Open main menu</span>
       
        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        
        <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</div>
{ showNav !==false && <Smallnav onClickNavLink={onClickNavLink}/>}
</nav>

    )
}

export default Layout
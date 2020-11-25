import React, { useState } from 'react'
import {  withRouter } from 'react-router'
import MessagePart from '../Components/MessagePart/MessagePart'
import PannelSide from '../Components/PanelSide/PannelSide'
import UserPannel from '../Components/UserPannel/UserPannel'
const Home = ({history}) => {
    return (
        <React.Fragment>
            <div className="container flex min-w-full opacity-75 bg-black min-h-screen">
              <PannelSide/>
              <MessagePart/>
              <UserPannel/>
            </div>
        </React.Fragment>
    )
}

export default withRouter(Home)

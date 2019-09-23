import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
    faBolt,
    faKeyboard,
    faRocket,
    faCode,
    faCoffee,
    faPlusCircle,
    faSkull,
} from "@fortawesome/free-solid-svg-icons";

// import {  } from "@fortawesome/fontawesome-svg-core"; 

// imp

import { NavBar } from './styles'

const Nav = () => {
    return (
        <NavBar>
            <FontAwesomeIcon icon = {faSkull} className = 'icon' />
            <FontAwesomeIcon icon = {faCode} className = 'icon' />
            <FontAwesomeIcon icon = {faPlusCircle} className = 'icon' />
        </NavBar>
    )
}

export default Nav

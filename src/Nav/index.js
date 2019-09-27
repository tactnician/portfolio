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

const Nav = props => {
    return (
        <NavBar>
            <FontAwesomeIcon icon = {faSkull} className = 'icon' onClick={ props => props.setPage(1) } />
            <FontAwesomeIcon icon = {faCode} className = 'icon' onClick = { props => props.setPage() } /> 
            <FontAwesomeIcon icon = {faPlusCircle} className = 'icon' onClick = { props => props.setPage() } />
            <FontAwesomeIcon icon = {faCoffee} className = 'icon' onClick = { props => props.setPage() } />
        </NavBar>
    )
}

export default Nav

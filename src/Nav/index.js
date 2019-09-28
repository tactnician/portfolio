import React from 'react'
import { Link } from "react-router-dom";

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

// import Context from "../App/context";

import { NavBar } from './styles'



const Nav = () => {

    return (
        <NavBar>
            <Link to= '/'>
                <FontAwesomeIcon icon = {faSkull} className = 'icon' />
            </Link>
            <Link to= '/projects'>
                <FontAwesomeIcon icon = {faCode} className = 'icon'  />
            </Link>
            <Link to= '/resume'>
                <FontAwesomeIcon icon = {faPlusCircle} className = 'icon'  />
            </Link>
            <Link to= '/contact'>
                <FontAwesomeIcon icon = {faCoffee} className = 'icon'  />
            </Link>
            {/* <Link to= '/'></Link> */}
        </NavBar>
    )

    // const Context = useContext(GlobalContext)

    // return (
    //     <Context.Consumer>
    //         {context => (
                // <NavBar>
                //     <FontAwesomeIcon icon = {faSkull} className = 'icon' onClick={ context.pageSet(1) } />
                //     <FontAwesomeIcon icon = {faCode} className = 'icon' onClick = { context.pageSet(2) } /> 
                //     <FontAwesomeIcon icon = {faPlusCircle} className = 'icon' onClick = { context.pageSet(3) } />
                //     <FontAwesomeIcon icon = {faCoffee} className = 'icon' onClick = { context.pageSet(4) } />
                // </NavBar>
    //         )}
    //     </Context.Consumer>
    // )
}

export default Nav

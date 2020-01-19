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

// import laughingMan from './img/laughingMan.gif'

import {makeStyles} from '@material-ui/core/styles'
import {
    Avatar,
    Tabs,
    Tab,
    Typography,
    Box,
} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100px',
        position: 'fixed'
    },
    tabs: {
        borderRight: `1px solid white`,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100px'
    },
    tab: {
        color: 'white'
    },
    icon: {
        fontSize: '35px',
        margin: '15px',
        color: 'white'
    },
    avatar: {
        justifySelf: 'flex-start',
        width: 70,
        height: 70
    }
}))

const Nav = () => {
    const classes = useStyles()
    return (
    <div className={classes.root}>
        {/* <Avatar alt="@Tactnician" src={laughingMan} className={classes.avatar} /> */}
        <Tabs
        orientation="vertical"
        variant="scrollable"
        // value={value}
        // onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        >
            <Link to = '/' >
                <Tab label="Home" 
                    className={classes.tab} 
                    icon={
                        <FontAwesomeIcon icon = {faSkull} className = {classes.icon} />
                    } 
                />
            </Link>
            <Link to = '/projects' >
                <Tab label="Projects" 
                    className={classes.tab} 
                    icon={
                        <FontAwesomeIcon icon = {faCode} className = {classes.icon} />
                    } 
                />
            </Link>
            <Link to = '/resume' >
                <Tab label="Resume" 
                    className={classes.tab} 
                    icon={
                        <FontAwesomeIcon icon = {faRocket} className = {classes.icon} />
                    } 
                />
            </Link>
            <Link to = '/contact' >
                <Tab label="Contact" 
                    className={classes.tab} 
                    icon={
                        <FontAwesomeIcon icon = {faCoffee} className = {classes.icon} />
                    } 
                />
            </Link>
        </Tabs>     
    </div>
    )
}

export default Nav

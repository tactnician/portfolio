import React, { useState } from 'react'
// import { CSSTransition } from 'react-transition-group'

import { Main, Headline, Subtitle }  from "./styles";
// import laughingMan from './img/laughingMan.gif'
// import ghostShell from './img/ghostShell3D.jpg'

import { Avatar } from "@material-ui/core";

const Home = () => {

    return(
        <Main className = 'page' id = 'p1' >
            {/* <img src={ghostShell} alt='ghost in the shell wallpaper' /> */}
            <Headline className='headline' >
                <h1>Lloyd @Tactnician</h1>
                {/* <h1>{<Avatar alt="@Tactnician" src={ laughingMan} />}Tactnician</h1>s */}
            </Headline>
            <Subtitle className='countdown'>
                <p className='subtitle'>
                    Fullstack Javascript and Python. 
                </p>
            </Subtitle>
        </Main>
    )


    // const [inProp, setInProp] = useState(false)
    // return (
        // <CSSTransition in={inProp} timeout={250} classNames="page">
            // <h1>Home</h1>
        // </CSSTransition>
    // )
}

export default Home

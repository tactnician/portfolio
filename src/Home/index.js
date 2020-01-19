import React, { useState } from 'react'
// import { CSSTransition } from 'react-transition-group'

import { Main, Headline, Subtitle }  from "./styles";


const Home = () => {

    return(
        <Main className = 'page' id = 'p1' >
            <Headline className='headline' >
                <h1>Lloyd @Tactnician</h1>
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

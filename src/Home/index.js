import React, { useState } from 'react'
// import { CSSTransition } from 'react-transition-group'

import { Main } from "./styles";

const Home = () => {

    return(
        <Main className = 'page' id = 'p1' >
            <h2>Home</h2>
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

import styled from 'styled-components'

// let bgColor = 'darkslateblue'
// import ghostShell from './img/ghostShell3D.jpg'

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        z-index: -1;
        min-width: 100vw;
        min-height: 100vh;
        position: fixed;
    }
`

export const Headline = styled.div`
    display: flex;
    flex-direction: row;

    h1 {
        display:flex;
        flex-direction: row;
        color: white;
        font-size: 5vw;
        // text-transform: uppercase;
        font-family: monospace;
        overflow: hidden;
        border-right: 1.9em dotted #CE6093;
        white-space: nowrap;
        margin: 0 auto;
        letter-spacing: .15em;
        animation: 
            typing 3.5s steps(30, end),
            blink-caret .5s step-end;
    }
    
    /* Typewriter */
    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }
    
    /* Cursor */
    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: #CE6093 }
    }
`
    
export const Subtitle = styled.div`
    p {
        font-family: Tahoma, Arial, sans-serif;
        font-size: 22px;
        font-weight: bold;
        text-align: center;
        color: #6BC39A;
        // text-transform: uppercase;
        margin-top: 0px;
        animation: pulse 7s;
    }
    
    @keyframes pulse {
        0% {
        color: #7391CF;
        }
        100% {
        color: #6BC39A;
        }
    }
`
export const Splash = styled.section`
`


//     display:flex;
//     justfy-content: center;
//     align-items: center; 
//     background-color: ${bgColor};

//     width: 100vw;

// `

// import React from 'react'
// import { useSpring, animated } from "react-spring";

// const Main = () => {
//     const props = useSpring({
//         from : { left : '200vw', }, 
//         to: async next => {
//             await next({ left: '192vw' })
//         }
//     })

//     return <animated.div className = 'page' style = {props} />
// }

// export default Main




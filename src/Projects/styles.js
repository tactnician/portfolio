import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
// import { Transition } from "react-transition-group";

export const Main = styled.main`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px;

    // width: 60vw;
    // max-width: 90vw;
    // margin: 0;
    // padding: 0;
    // background: rgb(230,230,230);

    // color: rgb(50,50,50);
    // font-family: 'Open Sans', sans-serif;
    // font-size: 112.5%;
    // line-height: 1.6em;
`

export const Headline = styled.div`
    h1 {
        color: white;
        font-size: 5vw;
        text-transform: uppercase;
        font-family: monospace;
        overflow: hidden;
        border-right: 1.9em dotted #CE6093;
        white-space: nowrap;
        // margin: 0 auto;
        padding: 1vh;
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

export const useStyles = makeStyles(
    {
        root: {
            margin: 'auto',
            // padding: 0,
            // backgroundColor: 'black',
            padding: '15px',
            // height: '100%',
            maxHeight: '1900px',
            justifyContent: 'space-between',
            // alignContent: 'center',
            alignItems: 'center'
            // flexGrow: 1,
            // position: "relative",
            // maxWidth: 450
            
        },
        card: {
            maxWidth: 400,
            minWidth: 275
        },
        
    }
);



// const duration = 300

// const defaultStyle = {
//     transition : `opacity ${duration}ms ease-in-out`,
//     opacity: 0   
// }

// const transitionStyles = {
//     entering: { opacity : 1 },
//     entered:  { opacity: 1 },
//     exiting:  { opacity: 0 },
//     exited:  { opacity: 0 },
// }

// export const Main = ({in: inProp}) => (
//     <Transition in={inProp} timeout={duration} >
//         {state => (
//             <div style={{
//                 ...defaultStyle,
//                 ...transitionStyles
//             }}>
//                 Let's see the Magic
//             </div>
//         )}
//     </Transition>
// ) 
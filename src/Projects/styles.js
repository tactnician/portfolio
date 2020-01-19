import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
// import { Transition } from "react-transition-group";

export const Main = styled.main`
    display: flex; 
    justify-content: space-between;
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
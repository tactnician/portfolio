import React, { useState, useRef, useEffect } from 'react'
import { Main,  } from "./styles"
import { TweenMax } from "gsap";
// import { Transition, CSSTransition } from "react-transition-group";

const Projects = () => {
    let imgRef = useRef(null)
    let logo = 'https://'

    const [animation, setAnimation] = useState(null)    
    
    useEffect(() => {
        setAnimation(
            TweenMax.to(imgRef, 10, {
                rotation: 360,
                repeat: -1 
            }).pause()
        )
    }, [])
    
    return (
        <div className = 'App'>
    https://github.com/          <header className = 'App-header'>
                <img
                    src={ logo }
                    className="App-logo"
                    alt="logo"
                    ref={element => {
                        imgRef = element;
                    }}
                />
            

            </header>
        </div>
)
}

export default Projects

// const duration = 3000

// const defaultStyle = {
//     transition : `opacity 5s`,
//     opacity: 1,
//     width: '92vw',
//     height: '100vh',
//     margin: 0,
//     padding: 0,
//     color: '#fff',
//     overflow: 'hidden', 
//     position: 'absolute',
//     left: '8vw',
    
        
// }

// const transitionStyles = {
//     entering: { opacity : 1 },
//     entered:  { opacity: 1 },
//     exiting:  { opacity: 0 },
//     exited:  { opacity: 0 },
// }

// const Projects = () => {
//     const [inProp, setInProp] = useState(true)

//     return (
//         <CSSTransition 
//             in={inProp} 
//             timeout={duration} 
//             // style={{
//             //     ...defaultStyle,
//             //     ...transitionStyles
//             // }}
//             classNames = 'page'
//             unmountOnExit
//             // onEnter={}
//         >
//                 <Main className = 'page' id = 'p2'  >
//                     <h3>Projects</h3>
//                 </Main>
            
//         </CSSTransition>
            
// )} 

// export default Projects


//Wells Fargo 109 3019 66 84
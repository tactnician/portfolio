

import styled from 'styled-components'

let iconColor = '#fff'
let backgColor = 'black'

export const NavBar = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    z-index: 1;
    width: 8vw;
    height: 100vh;
    background-color: ${backgColor};

    .icon {
        font-size: 32px;
        display: flex;
        align-items: space-between;
        padding: 3vh;
        color: ${iconColor};
    }

    .icon:hover {
        opacity: 0.5;
    }
        
`

// export const NavBar = styled.nav`
//     position: fixed;
//     z-index: 1;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     margin: auto;
//     height: 280px;
//     width: 10%;
//     padding: 0;
//     text-align: center;

//     .icon {
//         font-size: 32px;
//         display: block;
//         line-height: 2;
//         margin: 30px 0;
//     }

//     .icon:hover {
//         opacity: 0.5;
//     }

    
// `


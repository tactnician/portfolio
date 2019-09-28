import React, { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import Routes from './routes'


import { Main } from './styles'
import Nav from '../Nav'
// import Home from '../Home'
// import Projects from '../Projects'
// import Resume from '../Resume'
// import Contact from '../Contact'

// import GlobalContext from './context'

const App = () => {
    

    return (
        <BrowserRouter>
            <Main>
                <Nav />
                <Routes />
            </Main>
        </BrowserRouter>
        

    )
    

    // const [page, setPage] = useState(1)
    // const pageSet = () => setPage

    // const Page = props => {
    //     console.log(props.pageNum)
    //     switch (props.pageNum) {
    //         case 1:
    //             return <Home className = 'page' id='p1' />
    //         case 2: 
    //             return <Projects className ='page' id='p2' />
    //         case 3: 
    //             return <Resume className = 'page' id='p3' />
    //         case 4: 
    //             return <Contact className = 'page' id='p4' />
    //         default:
    //             return <Home className = 'page' id='p1' />;
    //     }
    // }


    // return (
    //     <GlobalContext.Provider value = { { pageSet: setPage } } >
    //         <Main>
    //             <Nav />
    //             <Page pageNum = { page } />
    //         </Main>
    //     </GlobalContext.Provider>
    // )

}

export default App




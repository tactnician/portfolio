import React, {
    useState, useEffect, createContext
} from 'react'


import { Main } from './styles'
import Nav from '../Nav'
import Home from '../Home'
import Projects from '../Projects'
import Resume from '../Resume'
import Contact from '../Contact'

const GlobalContext = createContext()

const App = () => {
    

    const [page, setPage] = useState(1)
    
    const Page = (() => {
        switch (page) {
            case 1:
                return <Home className = 'page' id='p1' />
            case 2: 
                return <Projects className ='page' id='p2' />
            case 3: 
                return <Resume className = 'page' id='p3' />
            case 4: 
                return <Contact className = 'page' id='p4' />
            default:
                return <Home className = 'page' id='p1' />;
        }
    })


    return (
        <GlobalContext.Provider value = { setPage } >
            <Main>
                <Nav />
                <Page />
            </Main>
        </GlobalContext.Provider>
    )

}

export default App




import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Routes from './routes'


import { Main } from './styles'

const App = () => {
    

    return (
        <BrowserRouter>
            <Main>
                <Routes />
            </Main>
        </BrowserRouter>
        

    )
    
}

export default App




import React, { useState } from 'react'
import { Route } from "react-router-dom";

// import Nav from '../Nav'
import Home from '../Home'
import Projects from '../Projects'
import Resume from '../Resume'
import Contact from '../Contact'


const Routes = () => {
    
    return (
        <>
            <Route path='/'
                component={Home} 
            /> 
            <Route path='/projects'  
                component={Projects} 
            /> 
            <Route path='/resume'  
                component={Resume} 
            /> 
            <Route path='/contact'
                component={Contact} 
            />
            
            {/* <Route path='/'  component={} />  */}
            {/* <Route path='/'  component={} />  */}
            {/* <Route path='/'  component={} />  */}
            {/* <Route path='/'  component={} />  */}
        </>
    )
}

export default Routes

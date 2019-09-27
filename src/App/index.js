import React, {useState, useEffect} from 'react'
import Nav from '../Nav'
import { Main } from './styles'
import Home from '../Home'
import Projects from '../Projects'
import Resume from '../Resume'
import Contact from '../Contact'

const App = () => {

    const [page, setPage] = useState(1)


    
    switch(page){
        case 1 :
            return (
                <Main>
                    <Nav />
                    <Home className = 'page' id='p1' />
                </Main>
            )
        case 2 : 
            return (
                <Main>
                    <Nav />
                    <Projects className = 'page' id='p3' />
                </Main>
            ) 
        case 3 : 
            return (
                <Main>
                    <Nav />
                    <Resume className = 'page' id='p2' /> 
                </Main>
            )
        case 4 : 
            return (
                <Main>
                    <Nav />
                    <Contact className = 'page' id='p4' />
                </Main>
            ) 
        default:
            return <Home className = 'page' id='p1' />

    }
    

    // return (
    //     <Main>
    //         <Nav id='menu'/>
    //         <Home className = 'page' id='p1' />
    //         <Resume className = 'page' id='p2' /> 
    //         <Projects className = 'page' id='p3' /> 
    //         <Contact className = 'page' id='p4' />      
    //     </Main>
        
        

    // )
}

export default App



// <div class="ct" id="t1">
        //     <div class="ct" id="t2">
        //         <div class="ct" id="t3">
        //         <div class="ct" id="t4">
        //             <div class="ct" id="t5">
        //             <ul id="menu">
        //                 <a href="#t1"><li class="icon fa fa-bolt" id="uno"></li></a>
        //                 <a href="#t2"><li class="icon fa fa-keyboard-o" id="dos"></li></a>
        //                 <a href="#t3"><li class="icon fa fa-rocket" id="tres"></li></a>
        //                 <a href="#t4"><li class="icon fa fa-dribbble" id="cuatro"></li></a>
        //                 <a href="#t5"><li class="icon fa fa-plus-circle" id="cinco"></li></a>
        //             </ul>
        //             <div class="page" id="p1">
        //                 <section class="icon fa fa-bolt"><span class="title">Bolt</span><span class="hint">Like this pen to see the magic!...<br /> Just kidding, it won't happen anything but I'll be really happy If you do so.</span></section>  
        //             </div>
        //             <div class="page" id="p2">
        //                 <section class="icon fa fa-keyboard-o"><span class="title">Type</span></section>
        //             </div>  
        //             <div class="page" id="p3">
        //                 <section class="icon fa fa-rocket"><span class="title">Rocket</span></section>
        //             </div>
        //             <div class="page" id="p4">
        //                 <section class="icon fa fa-dribbble">
        //                 <span class="title">Dribbble</span>
        //                 <p class="hint">
        //                     <a href="https://dribbble.com/albertohartzet" target="_blank">Im ready to play, <span class="hint line-trough">invite me </span> find me</a>
        //                 </p>
        //                 <p class="hint">Already invited by <a href="http://www.dribbble.com/mrpeters" target="_blank">Stan Peters</a></p>
        //                 </section>
        //             </div> 
        //             <div class="page" id="p5">
        //                 <section class="icon fa fa-plus-circle">
        //                 <span class="title">More</span>
        //                 <p class="hint">
        //                     <span>You love one page & CSS only stuff? </span><br/>
        //                     <a href="https://codepen.io/hrtzt/details/pgXMYb/" target="_blank">check this pen "Pure CSS One page vertical navigation"</a>
        //                 </p>
        //                 </section>
        //             </div> 
        //             </div>
        //         </div>
        //         </div>
        //     </div>
        //     </div>


import React from 'react'
import Nav from '../Nav'

import { 
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core";

import {
    Main,
    useStyles,
} from './styles'


const Projects = () => {
    const classes = useStyles()
    return (
        <Main className='page' id='p3'>
            <div className={classes.root } >
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                
                
                </Grid>
            </div>
        </Main>
    )
}

export default Projects




// import React, { useState, useRef, useEffect } from 'react'
// import { Main,  } from "./styles"
// import { TweenMax } from "gsap";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { 
//     faHeart,
//     faComment
// } from "@fortawesome/free-solid-svg-icons";


// const Projects = () => {
//     return (
//         <Main>
//             <div className="row">
//                 <div className="example-1 card">
//                     <div className="wrapper">
//                     <div className="date">
//                         <span className="day">12</span>
//                         <span className="month">Aug</span>
//                         <span className="year">2016</span>
//                     </div>
//                     <div className="data">
//                         <div className="content">
//                         <span className="author">Jane Doe</span>
//                         <h1 className="title"><a href="#">Boxing icon has the will for a couple more fights</a></h1>
//                         <p className="text">The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.</p>
//                         <label for="show-menu" className="menu-button"><span></span></label>
//                         </div>
//                         <input type="checkbox" id="show-menu" />
//                         <ul className="menu-content">
//                         <li>
//                             <a href="#" className="fa fa-bookmark-o"></a>
//                         </li>
//                         <li><a href="#" className="fa fa-heart-o"><span>47</span></a></li>
//                         <li><a href="#" className="fa fa-comment-o"><span>8</span></a></li>
//                         </ul>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="example-2 card">
//                     <div className="wrapper">
//                     <div className="header">
//                         <div className="date">
//                         <span className="day">12</span>
//                         <span className="month">Aug</span>
//                         <span className="year">2016</span>
//                         </div>
//                         <ul className="menu-content">
//                         <li>
//                             <a href="#" className="fa fa-bookmark-o"></a>
//                         </li>
//                         <li><a href="#" ><span>18</span></a></li>
//                         <li><a href="#" ><span>3</span></a></li>
//                         </ul>
//                     </div>
//                     <div className="data">
//                         <div className="content">
//                         <span className="author">Jane Doe</span>
//                         <h1 className="title"><a href="#">Stranger Things: The sound of the Upside Down</a></h1>
//                         <p className="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
//                         <a href="#" className="button">Read more</a>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//             </div>
//         </Main>
//     )
// }


// // import { Transition, CSSTransition } from "react-transition-group";

// // const Projects = () => {
// //     let imgRef = useRef(null)
// //     let logo = 'https://'

// //     const [animation, setAnimation] = useState(null)    
    
// //     useEffect(() => {
// //         setAnimation(
// //             TweenMax.to(imgRef, 10, {
// //                 rotation: 360,
// //                 repeat: -1 
// //             }).pause()
// //         )
// //     }, [])
    
// //     return (
// //         <Main className='page' id='p2'>
// //             <div className = 'App'>
// //                 <header className = 'App-header'>
// //                     <img
// //                         src={ logo }
// //                         className="App-logo"
// //                         alt="logo"
// //                         ref={element => {
// //                             imgRef = element;
// //                         }}
// //                     />
// //                 </header>
// //                 <div>
// //                     ### Projects
// //                     1. WildfireWatchApp.com
// //                     - Utilizes intergovernmental rss feed and nasa satalite data locate wildfires and send push notifications via Twilio Api to users within a certain radius.
// //                     - https://wildfirewatchapp.com/
// //                     1. Griipe.me
// //                     - Utilizes Deepgram GPU Voice Recognition api to transcribe consumer complaints and post to Twitter via Api
// //                     - https://griipe.me
// //                     1. Delphe
// //                     - Get Answer to your most pressing questions by connecting to a community of experts
// //                     - https://flamboyant-blackwell-be93e6.netlify.com/
// //                     1. Market Organizer
// //                     - An all in one platform for connecting farmers markets to vendors
// //                     - https://nostalgic-wing-420c23.netlify.com/
// //                     1. Best Places To Live
// //                     - Aggregates Consumer Price Index and safety scores to determine the best places to live. (not currently deployed)
// //                 </div>
// //             </div>
// //         </Main>
// //     )
// // }

// export default Projects

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
// https://p0.pxfuel.com/preview/1005/501/319/cyberpunk-chongqing-night.jpg
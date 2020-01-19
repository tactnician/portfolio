import React from 'react'
import { 
    Main, 
    Headline,
    Timeline, 
    Footer 
} from "./styles";

const Resume = () => {
    return (
        <Main className='page' id='p3'>
            <Headline className='headline' >
                <h1>Resume</h1>
            </Headline>
            <Timeline>
            <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic' rel='stylesheet' type='text/css' />
                <ul class="timeline">
                
                    {/* <!-- Item 1 --> */}
                    <li>
                        <div class="direction-r">
                            <div class="flag-wrapper">
                                <span class="flag">Team Lead @ Lambda School</span>
                                <span class="time-wrapper"><span class="time">05/19 - 11/19</span></span>
                            </div>
                            <div class="desc">
                                <ul>
                                    <li>Lead Product Teams for Lamda Labs In-house Internship</li>
                                    <li>List Item Test</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    
                    {/* <!-- Item 2 --> */}
                    <li>
                        <div class="direction-l">
                            <div class="flag-wrapper">
                                <span class="flag">Teaching Assistant @ Lambda School.</span>
                                <span class="time-wrapper"><span class="time">2011 - 2013</span></span>
                            </div>
                            <div class="desc">
                                <li></li>
                                <li></li>
                            </div>
                        </div>
                    </li>
                
                    {/* <!-- Item 3 --> */}
                    <li>
                        <div class="direction-r">
                            <div class="flag-wrapper">
                                <span class="flag">Harvard University</span>
                                <span class="time-wrapper"><span class="time">2008 - 2011</span></span>
                            </div>
                            <div class="desc">
                                <li>list item test</li>
                                <li>list item test</li>
                            </div>
                        </div>
                    </li>

                    {/* <!-- Item 4 --> */}
                    <li>
                        <div class="direction-l">
                            <div class="flag-wrapper">
                                <span class="flag">Harvard University</span>
                                <span class="time-wrapper"><span class="time">2008 - 2011</span></span>
                            </div>
                            <div class="desc">A description of all the lectures and courses I have taken and my final degree?</div>
                        </div>
                    </li>
                    
                </ul>
            </Timeline>
            {/* <Footer>
                <h2>Nike</h2>
            </Footer> */}
        </Main>
    )
}

export default Resume

// 1. Team Lead / Project Manager 
//   - Lamda Labs In-house Internship 
//   - 05/19 - 11/19 
// 1. Teaching Assistant
//   - Lamba School Intro to Web Development 
//   - 05/19 - Present
// 1. Network Technician 
//   - North Beach Village Resort 
//   - Installation of Unifi Wireless Mesh Network 
//   - 12/18 - 05/19
// 1. Low Voltage Electrician 
//   - American Security and Fire
//   - Network Information Systems
//   - Installation of structured cabeling 
//   - Access Controls, CCTV and Alarm Systems 
//   - Computer networking 
//   - 2018
// 1. Bike Messanger 
//   - Uber NYC 
//   - 2014 - 2016 
// 1. Low Voltage Electrican 
//   - Alta Security Integrators and Others
//   - Structured Cabeling 
//   - Access Controls, CCTV and Alarm Systems 
//   - Network Information Systems
//   - 2003 - 2014
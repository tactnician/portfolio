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
                                <h3>Lead Product Teams for Lamda Labs In-house Internship</h3>
                                <ul>
                                    <li>Managed remote project teams</li>
                                    <li>Lead Agile ceremonies</li>
                                    <li>Deployed cloud infrastructure</li>
                                    <li>Ensured proper git workflow</li>
                                    <li>Update Product Vision and documentation</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    
                    {/* <!-- Item 2 --> */}
                    <li>
                        <div class="direction-l">
                            <div class="flag-wrapper">
                                <span class="flag">Teaching Assistant @ Lambda School</span>
                                <span class="time-wrapper"><span class="time">06/19 - Present </span></span>
                            </div>
                            <div class="desc">
                                <h3>Instruct Students on Web Development Fundamentals</h3>
                                <ul>
                                    <li>Teach Html Javascript and CSS</li>
                                    <li>Host live nightly training sessions</li>
                                    <li>Assist students with coding errors</li>
                                    <li>Create additional learning content</li>
                                    {/* <li></li> */}
                                </ul>
                            </div>
                        </div>
                    </li>
                
                    {/* <!-- Item 3 --> */}
                    <li>
                        <div class="direction-r">
                            <div class="flag-wrapper">
                                <span class="flag">Technician @ NBV Resorts</span>
                                <span class="time-wrapper"><span class="time">2008 - 2011</span></span>
                            </div>
                            <div class="desc">
                                <h3>Maintained Wireless Mesh Network for North Beach Village Resorts</h3>
                                <ul>
                                    <li>Managed Unifi network controller</li>
                                    <li>Managed Wireless Access Points over 1.5 sq miles</li>
                                    <li>Troubleshoot Hardwired Connections</li>
                                    <li>Responded to end-user hardware and connectivity issues</li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    {/* <!-- Item 4 --> */}
                    <li>
                        <div class="direction-l">
                            <div class="flag-wrapper">
                                <span class="flag">LV Electrican @ American Security</span>
                                <span class="time-wrapper"><span class="time">2018</span></span>
                            </div>
                            <div class="desc">
                                <h3>Installation and Troubleshooting of Low Voltage Electrical Systems</h3>
                                <ul>
                                    <li>Lead installation teams</li>
                                    <li>Structured cableing installation for commercial systems</li>
                                    <li>Network infrastructure maintainance</li>
                                    <li>Access Controls, CCTV and Alarm System intallation</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="direction-r">
                            <div class="flag-wrapper">
                                <span class="flag">Bike Messenger @ Uber NYC</span>
                                <span class="time-wrapper"><span class="time">2014 - 2016</span></span>
                            </div>
                            <div class="desc">
                                Delivered packages and food throughout NYC
                                <ul>
                                    <li>Maintained a 4.8 rating</li>
                                    <li>Became proficient at fixed gear cycling</li>
                                    <li>Averaged 50-80 miles daily</li>
                                    <li>Learned bicycle repair and maintenace</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="direction-l">
                            <div class="flag-wrapper">
                                <span class="flag">LV Electrican @ Various</span>
                                <span class="time-wrapper"><span class="time">2003 - 2014</span></span>
                            </div>
                            <div class="desc">
                                <h3>Tem plus years installing low voltage electrial systems</h3>
                                <ul>
                                    <li>See above description</li>
                                </ul>
                            </div>
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
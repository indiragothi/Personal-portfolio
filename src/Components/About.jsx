import React, {useEffect} from 'react'
// AOS Animation 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const About = () => {


    useEffect(() => {
        AOS.init();
      }, [])
    





  return (
    <>
            <div id="about">
                    <div className='my_info' data-aos="fade-right" data-aos-offset="300">
                            <div className='item'>
                                    <p>- NICE TO MEET YOU!</p>
                                    <h1>Indira Gothi</h1>
                                    <h2>Student at MNNIT Allahabad</h2>
                                    <Link to='/portfolio'><button style={{cursor:'pointer'}}>Got a project?</button></Link>
                            </div>
                            <div className='info_text'>
                                    <p>
                                    
                                    Hello there! My name is <span style={{color:'orange'}}>Indira Gothi.</span> student at MNNIT, and I'm very passionate and dedicated to my work.
                                    <br /><br />
                                    I possess strong technical skills in HTML, CSS, Tailwind, JavaScript, ReactJS, as well as proficiency in programming languages like C and C++.
                                       I am dedicated to continuous learning and applying my expertise to create dynamic and responsive web applications.
                                       I prioritize problem-solving and team collaboration to deliver efficient and innovative solutions. My passion for technology and
                                        programming drives me to explore new challenges and contribute to the ever-evolving field of software development.
        
                                         </p>
                            </div>
                    </div>

                    <div id="skills">
                        <p>- SKILLS</p>
                        <h2>Tech Stacks I Use</h2>
                        <div className="skill_con">

                                <div className='item'>
                                    <img src="Images/c.png"  />
                                    <div style={{marginLeft:'25px'}}>
                                        <h2>C Language</h2>
                                        <p>Programming</p>
                                    </div>
                                </div>

                                <div className='item'>
                                    <img src="Images/C++.png"  />
                                    <div style={{marginLeft:'25px'}}>
                                        <h2>C++ Language</h2>
                                        <p>Programming</p>
                                    </div>
                                </div>

                                <div className='item'>
                                    <img src="Images/html.png"  />
                                    <div style={{marginLeft:'25px'}}>
                                        <h2>HTML</h2>
                                        <p>Mark-Up</p>
                                    </div>
                                </div>

                                <div className='item'>
                                    <img src="Images/css.png"  />
                                    <div style={{marginLeft:'25px'}}>
                                        <h2>CSS</h2>
                                        <p>Style Sheet</p>
                                    </div>
                                </div>

                                <div className='item'>
                                    <img src="Images/js.png"  />
                                    <div style={{marginLeft:'25px'}}>
                                        <h2>JavaScript</h2>
                                        <p>Programming</p>
                                    </div>
                                </div>

                                <div className='item'>
                                    <img src="Images/tailwind.png"  />
                                    <div style={{marginLeft:'25px'}}>
                                        <h2>Tailwind</h2>
                                        <p>CSS Framework</p>
                                    </div>
                                </div>

                                <div className='item'>
                                    <img src="Images/react.png"  />
                                    <div style={{marginLeft:'25px'}}>
                                        <h2>React</h2>
                                        <p>Js Library</p>
                                    </div>
                                </div>

                                {/* <div className='item'>
                                    <img src="Images/mui.png"  />
                                    <div style={{marginLeft:'25px'}}>
                                        <h2>Material UI</h2>
                                        <p>UI Library</p>
                                    </div>
                                </div> */}


                                <div className='item'>
                                    <img src="Images/java.png"  />
                                    <div style={{marginLeft:'25px'}}>
                                        <h2>Java</h2>
                                        <p>Programming</p>
                                    </div>
                                </div>

                                {/* <div className='item'>
                                    <img src="Images/php1.png"  />
                                    <div style={{marginLeft:'25px'}}>
                                        <h2>PHP</h2>
                                        <p>Backend</p>
                                    </div>
                                </div> */}

                                <div className='item' >
                                    <img src="Images/mysql.png"  />
                                    <div style={{marginLeft:'25px'}}>
                                        <h2>MySql</h2>
                                        <p>Database</p>
                                    </div>
                                </div>

                        </div>
                    </div>
            </div>
    </>
  )
}

export default About

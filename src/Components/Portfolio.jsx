import React, {useEffect} from 'react'
// AOS Animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {


    useEffect(() => {
        AOS.init();
      }, [])
    



  return (
    <>
        <div id="portfolio">
                        <p>- PROJECTS</p>
                        <h2>Recent completed works</h2>

                        <div className='portfolio_con'>

                            <div className="item" data-aos="zoom-in" data-aos-duration="1500">
                                <div>
                                    <img src="Images/img11.png" />
                                </div>
                                <h2> Study Notion</h2>
                                <p>Study Router is an app that efficiently routes and manages study materials, helping students streamline their learning process and maximize productivity. I use in this 
                                    <b> HTML, CSS3, JavaScripts and React.</b></p>
                                <div className="buttons">
                                    {/* <a href="https://silly-tanuki-0206ed.netlify.app" target='_blank'><button><i class="fa-solid fa-eye"></i> Live Preview</button></a> */}
                                     
                                    <a href='https://github.com/indiragothi/Study-Router-By-React/tree/main/Study%20Router' target='_blank'><button style={{marginLeft:'20px'}}><i class="fa-brands fa-github"></i> GitHub</button></a>
                                </div>
                            </div>

                            <div className="item" data-aos="zoom-in" data-aos-duration="1500">
                                <div>
                                    <img src="Images/img14.png" />
                                </div>
                                <h2>Top-Courses</h2>
                                <p>An app that provides a curated list of high-quality courses, helping users discover and enroll in top-rated educational programs. I use in this 
                                    <b> HTML, CSS3, JavaScripts and React.</b></p>
                                <div className="buttons">
                                    
                                    {/* <a href="https://jocular-faloodeh-fb0c53.netlify.app" target='_blank'><button><i class="fa-solid fa-eye"></i> Live Preview</button></a> */}
                                    
                                    <a href='https://github.com/indiragothi/Top_Courses_By_React/tree/main/Top-Courses' target='_blank'><button style={{marginLeft:'20px'}}><i class="fa-brands fa-github"></i> GitHub</button></a>
                                </div>
                            </div>

                            <div className="item" >
                                <div>
                                    <img src="Images/img12.png" />
                                </div>
                                <h2>Testimonial-Slider</h2>
                                <p>A user-friendly app that displays customer testimonials in a sliding format, showcasing positive feedback and building credibility for businesses. I use in this 
                                    <b> HTML,Tailwind CSS and React. </b></p>
                                 
                                <div className="buttons">
                                    {/* <a href="https://business-website-clone.netlify.app" target='_blank'><button><i class="fa-solid fa-eye"></i> Live Preview</button></a> */}
                                     
                                    <a href='https://github.com/indiragothi/Testimonial-Slider-By-React/tree/main/Testimonial_Slider' target='_blank'><button style={{marginLeft:'20px'}}><i class="fa-brands fa-github"></i> GitHub</button></a>
                                </div>
                            </div>

                            <div className="item" >
                                <div>
                                    <img src="Images/img15.png" />
                                </div>
                                <h2>Plan-With-Indu</h2>
                                <p>A comprehensive planning app that helps individuals organize tasks, set goals, and track progress towards personal and professional objectives. I use in this 
                                    <b> HTML,Tailwind CSS and React. </b></p>
                                <div className="buttons">
                                    {/* <a href="https://clinic-website-manish.netlify.app" target='_blank'><button><i class="fa-solid fa-eye"></i> Live Preview</button></a> */}
                                    
                                    <a href='https://github.com/indiragothi/Plan_With_Indu_By_React/tree/main/react-tailwind-css-starter-pack-main' target='_blank'><button style={{marginLeft:'20px'}}><i class="fa-brands fa-github"></i> GitHub</button></a>
                                </div>
                            </div>

                            <div className="item" >
                                <div>
                                    <img src="Images/img13.png" />
                                </div>
                                <h2>Counter-App </h2>
                                <p>A simple application that counts and keeps track of numbers, often used for tallying or tracking various items.I use in this 
                                    <b> HTML,Tailwind CSS and React. </b></p> 
                                <div className="buttons">
                                    {/* <a href="https://amazon-clone-manish-thakur.netlify.app" target='_blank'><button><i class="fa-solid fa-eye"></i> Live Preview</button></a> */}
                                    
                                    <a href='https://github.com/indiragothi/Counter_App_By_React ' target='_blank'><button style={{marginLeft:'20px'}}><i class="fa-brands fa-github"></i> GitHub</button></a>
                                </div>
                            </div>

                            <div className="item" >
                                <div>
                                    <img src="Images/img5.png" />
                                </div>
                                <h2>DevDetective-App</h2>
                                <p>It's a Dev Detective app to show the Github account details using Github APIs and here you can search your name and see Github account details. I use in this 
                                    <b> HTML, CSS3, JavaScripts and Open Github APIs.</b></p>
                                <div className="buttons">
                                    {/* <a href="https://silly-tanuki-0206ed.netlify.app" target='_blank'><button><i class="fa-solid fa-eye"></i> Live Preview</button></a> */}
                                     
                                    <a href='https://github.com/indiragothi/Mini-Project-By-JS/tree/main/Mini-Project-By-JavaScript/Dev-Detective-Project' target='_blank'><button style={{marginLeft:'20px'}}><i class="fa-brands fa-github"></i> GitHub</button></a>
                                </div>
                            </div>

                            <div className="item" >
                                <div>
                                    <img src="Images/img3.png" />
                                </div>
                                <h2>Weather-App</h2>
                                <p>It's a weather app to show the weather forecast details using weather APIs and here you can search your city and see weather. I use in this 
                                    <b> HTML, CSS3, JS and Open Weather APIs.</b></p>
                                <div className="buttons">
                                    
                                    {/* <a href="https://jocular-faloodeh-fb0c53.netlify.app" target='_blank'><button><i class="fa-solid fa-eye"></i> Live Preview</button></a> */}
                                    
                                    <a href='https://github.com/indiragothi/Mini-Project-By-JS/tree/main/Mini-Project-By-JavaScript/Weather-App' target='_blank'><button style={{marginLeft:'20px'}}><i class="fa-brands fa-github"></i> GitHub</button></a>
                                </div>
                            </div>

                            <div className="item" >
                                <div>
                                    <img src="Images/img6.png" />
                                </div>
                                <h2> Password-Generator</h2>
                                <p>It's a Password-Generator App that creates strong and unique passwords. It's generate passwords with various characters, lengths, and complexity levels.I use in this 
                                    <b> HTML, CSS3 and JavaScripts </b></p>
                                 
                                <div className="buttons">
                                    {/* <a href="https://business-website-clone.netlify.app" target='_blank'><button><i class="fa-solid fa-eye"></i> Live Preview</button></a> */}
                                     
                                    <a href='https://github.com/indiragothi/Mini-Project-By-JS/tree/main/Mini-Project-By-JavaScript/Password-Generator' target='_blank'><button style={{marginLeft:'20px'}}><i class="fa-brands fa-github"></i> GitHub</button></a>
                                </div>
                            </div>

                            <div className="item" >
                                <div>
                                    <img src="Images/img4.png" />
                                </div>
                                <h2>Tic-Tac-Toe</h2>
                                <p>It's a Tic-Tac-Toe App is a mobile application that allows users to play the classic game of Tic Tac Toe on their devices. I use in this 
                                    <b> HTML, CSS3 and JavaScripts </b></p>
                                <div className="buttons">
                                    {/* <a href="https://clinic-website-manish.netlify.app" target='_blank'><button><i class="fa-solid fa-eye"></i> Live Preview</button></a> */}
                                    
                                    <a href='https://github.com/indiragothi/Mini-Project-By-JS/tree/main/Mini-Project-By-JavaScript/Tic-Tac-Toe' target='_blank'><button style={{marginLeft:'20px'}}><i class="fa-brands fa-github"></i> GitHub</button></a>
                                </div>
                            </div>

                            <div className="item" >
                                <div>
                                    <img src="Images/img8.png" />
                                </div>
                                <h2>RazorPay-Clone </h2>
                                <p>Rozarpay Clone Project is a replica of the Rozarpay platform, offering similar features and functionalities for online payment processing and financial transactions.I use in this 
                                    <b> HTML, CSS3 and Tailwind. </b></p> 
                                <div className="buttons">
                                    {/* <a href="https://amazon-clone-manish-thakur.netlify.app" target='_blank'><button><i class="fa-solid fa-eye"></i> Live Preview</button></a> */}
                                    
                                    <a href='https://github.com/indiragothi/RazorPay-Clone/tree/main/RazorPayClone ' target='_blank'><button style={{marginLeft:'20px'}}><i class="fa-brands fa-github"></i> GitHub</button></a>
                                </div>
                            </div>

                            <div className="item">
                                <div>
                                    <img src="Images/img9.png" />
                                </div>
                                <h2>Discord-Clone</h2>
                                <p>Discord Clone Project is a replica of the Discord messaging platform, providing similar features and functionalities for communication and community building.I use in this 
                                    <b> HTML, CSS3 and Tailwind. </b></p>
                                <div className="buttons">
                                    {/* <a href="https://manish-tesla-clone.netlify.app" target='_blank'><button><i class="fa-solid fa-eye"></i> Live Preview</button></a> */}
                                    
                                    <a href='https://github.com/indiragothi/Discord-Clone/tree/main/discordClone ' target='_blank'><button style={{marginLeft:'20px'}}><i class="fa-brands fa-github"></i> GitHub</button></a>
                                </div>
                            </div>

                            <div className="item" >
                                <div>
                                    <img src="Images/img1.png" />
                                </div>
                                <h2>PortFolio-Web</h2>
                                <p>It's a John Doe PortFolio website who is Software Developer. Here you will learn about his journey as a software developer.I use in this 
                                    <b> HTML and CSS3 </b></p> 
                                <div className="buttons">
                                    {/* <a href="https://amazon-clone-manish-thakur.netlify.app" target='_blank'><button><i class="fa-solid fa-eye"></i> Live Preview</button></a> */}
                                    
                                    <a href='https://github.com/indiragothi/PortFolio-Web-By-CSS' target='_blank'><button style={{marginLeft:'20px'}}><i class="fa-brands fa-github"></i> GitHub</button></a>
                                </div>
                            </div>

                            <div className="item">
                                <div>
                                    <img src="Images/img7.png" />
                                </div>
                                <h2>Parralel-Practice</h2>
                                <p>Parallel Practice Project is an initiative that encourages individuals to engage in simultaneous practice of multiple skills or disciplines for personal growth and efficiency.I use in this 
                                    <b> HTML and CSS3 </b></p>
                                <div className="buttons">
                                    {/* <a href="https://manish-tesla-clone.netlify.app" target='_blank'><button><i class="fa-solid fa-eye"></i> Live Preview</button></a> */}
                                    
                                    <a href='https://github.com/indiragothi/Parralel-Practice-By-CSS' target='_blank'><button style={{marginLeft:'20px'}}><i class="fa-brands fa-github"></i> GitHub</button></a>
                                </div>
                            </div>

                            <div className="item" >
                                <div>
                                    <img src="Images/img10.png" />
                                </div>
                                <h2>Image-Gallary</h2>
                                <p>Image Gallery Project is a web application that displays a collection of images in an organized and visually appealing manner, allowing users to browse and view the images conveniently.I use in this 
                                    <b> HTML and CSS3 </b></p> 
                                <div className="buttons">
                                    {/* <a href="https://amazon-clone-manish-thakur.netlify.app" target='_blank'><button><i class="fa-solid fa-eye"></i> Live Preview</button></a> */}
                                    
                                    <a href='https://github.com/indiragothi/ImageGallaryProject' target='_blank'><button style={{marginLeft:'20px'}}><i class="fa-brands fa-github"></i> GitHub</button></a>
                                </div>
                            </div>

                            <div className="item">
                                <div>
                                    <img src="Images/img2.png" />
                                </div>
                                <h2>Modern-Chair Card</h2>
                                <p>It's a Modern-Chair Card is a design project showcasing contemporary chair designs through visually appealing and informative cards, inspiring interior enthusiasts.I use in this 
                                    <b> HTML and CSS3 </b></p>
                                <div className="buttons">
                                    {/* <a href="https://manish-tesla-clone.netlify.app" target='_blank'><button><i class="fa-solid fa-eye"></i> Live Preview</button></a> */}
                                    
                                    <a href='https://github.com/indiragothi/Modern-Chair-Card' target='_blank'><button style={{marginLeft:'20px'}}><i class="fa-brands fa-github"></i> GitHub</button></a>
                                </div>
                            </div>

                            

                        </div>



        </div>

    </>
  )
}

export default Portfolio

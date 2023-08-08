import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
            <header id='header'>
                    <h2><span style={{color:'rgb(106, 130, 230)'}}>Ind</span>ira<span style={{color:'rgb(106, 130, 230)'}}>.</span></h2>
                    <img src="Images/burger-menu.png" onClick={() =>{setNavbarOpen(true);}}/>
            </header>

            <div className = {navbarOpen ? 'menu_box_active' : 'menu_box'} id='menu_box_active'>
                <img src='Images/delete.png' id='menu_icon' onClick={()=> setNavbarOpen(false)} />
                <div className="item1">
                            <img src="Images/small.jpg" width='95px' height='95px' style={{border:'3px solid rgb(30, 126, 185)', borderRadius:'50%'}} />
                            <h3>Indira Gothi</h3>
                        </div>
                        <div className="nav">
                            <Link to='/'><a href='#' style={{color: '#5882d1', fontWeight:'600'}}  onClick={()=> setNavbarOpen(false)}>Home</a></Link>
                            <Link to='/about'  onClick={()=> setNavbarOpen(false)}><a href="#">About</a></Link>
                            <Link to='/services'  onClick={()=> setNavbarOpen(false)}><a href="#">Services</a></Link>
                            <Link to='/portfolio'  onClick={()=> setNavbarOpen(false)}><a href="#">Portfolio</a></Link>
                            <Link to='/contact'  onClick={()=> setNavbarOpen(false)}><a href="#"  onClick={()=> setNavbarOpen(false)}>Contact</a></Link>
                        </div>

                        <div className="social_link">
                            <div>
                                <a href="https://www.linkedin.com/in/indiragothi/" target='_blank'><i class="fa-brands fa-linkedin-in"></i></a>
                                <a href="https://github.com/indiragothi" target='_blank'><i class="fa-brands fa-github" target='_blank'></i></a>
                                <a href="mailto: indiragothi001@gmail.com" target='_blank'><i class="fa-regular fa-envelope"></i></a>
                            </div>
                            <p>Copyright © 2023 Indira Gothi. All rights reserved.</p>
                        </div>



            </div>    
    </>
  )
}

export default Header

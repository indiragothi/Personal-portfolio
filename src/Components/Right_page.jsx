import React from 'react';
import './Style.css';
import { NavLink } from 'react-router-dom';


const Right_page = () => {
  return (
    <>
            <div id='Right_nav' >
                        <div className="item1">
                            <img src="Images/small.jpg" width='95px' height='95px' style={{border:'3px solid rgb(30, 126, 185)', borderRadius:'50%'}} />
                            <h3>Indira Gothi</h3>
                        </div>
                        <div className="nav">
                            <NavLink to='/' className={({ isActive }) => isActive ? 'active_Link' : 'diactive_link'}><a href='#'>Home</a></NavLink>
                            <NavLink to='/about' className={({ isActive }) => isActive ? 'active_Link' : 'diactive_link'}><a href="#">About</a></NavLink>
                            <NavLink to='/services' className={({ isActive }) => isActive ? 'active_Link' : 'diactive_link'}><a href="#">Services</a></NavLink>
                            <NavLink to='/portfolio' className={({ isActive }) => isActive ? 'active_Link' : 'diactive_link'}><a href="#">Portfolio</a></NavLink>
                            <NavLink to='/contact' className={({ isActive }) => isActive ? 'active_Link' : 'diactive_link'}><a href="#">Contact</a></NavLink>
                        </div>

                        <div className="social_link">
                            <div>
                            <a href="https://www.linkedin.com/in/indiragothi/" target='_blank'><i class="fa-brands fa-linkedin-in"></i></a>
                            <a href="https://github.com/indiragothi" target='_blank'><i class="fa-brands fa-github"></i></a>
                            <a href="mailto: indiragothi001@gmail.com" target='_blank'><i class="fa-regular fa-envelope"></i></a>
                            </div>
                            <p>Copyright © 2023 Indira Gothi. All rights reserved.</p>
                        </div>
            </div>
    </>
  )
}

export default Right_page

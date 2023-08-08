import React  from 'react';
import './Style.css';
// AOS Animation 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Main = () => {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <>
      <div id='Main'>
        <div className='child_main'>
                <div className="main_content" data-aos="fade-right" data-aos-offset="300">
                    <h1>Hi, I'm <span style={{color:'rgb(106, 130, 230)'}}>Indira!</span> <br /> Student at MNNIT <br />  Allahabad</h1>
                    <p>A <span style={{color:'rgb(106, 130, 250)'}}>  Student </span>  passionate about creating intractive application and dedicated to my work.</p>

                    <div className="button_group">
                      <Link to='/portfolio'><button className='btn1'>Got a Project?</button></Link>
                      <Link to='/contact'><button className='btn2'>Let's talk</button></Link>
                    </div>

                    <div className='con_info'>
                        <div style={{height:'90px', width:'4px', background:'orange'}}></div>
                        <div style={{marginLeft:'20px'}}>
                            <h3>+91- 7470517774</h3>
                            <h3>indiragothi001@gmail.com</h3>
                            <h3>Shajapur (M.P.), India</h3>
                        </div>
                    </div>

                </div>

                <img src="Images/indira.jpeg" id='main_img' data-aos="fade-right" data-aos-offset="300"   />
          </div>
      </div>
    </>
  )
}

export default Main

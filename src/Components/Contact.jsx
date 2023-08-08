import React from 'react'
import  './Style.css';


const Contact = () => {
  return (
    <>
        <div id="contact">

                <div className='cont_con'>
                      <div className="item1">
                          <p>- LET'S CONNECT</p>
                          <h2>Get In Touch</h2>
                          <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7</p>

                          <div style={{display:'flex', justifyContent:'space-around', width:'100%', marginTop:'50px'}}>

                            <div style={{textAlign:'center'}}>
                              <a href="https://www.linkedin.com/in/indiragothi/" target='_blank'><img src="Images/linkedin.png" style={{height:'55px'}}/></a>
                              <p style={{marginTop:'0px',lineHeight:'20px'}}>LinkedIn</p>
                            </div>

                            <div style={{textAlign:'center'}}>
                              <a href="mailto: indiragothi001@gmail.com" target='_blank'><img src="Images/email.jpg" style={{height:'55px'}}/></a>
                              <p style={{marginTop:'0px',lineHeight:'20px'}}>Mail</p>
                            </div>

                            <div style={{textAlign:'center'}}>
                              <a href="https://github.com/indiragothi" target='_blank'><img src="Images/github.png" style={{height:'55px'}}/></a>
                              <p style={{marginTop:'0px',lineHeight:'20px'}}>GitHub</p>
                            </div>
                            
                          </div>
                      
                      </div>
                
                      <form action="#">
                        <input type="text" placeholder='Your Name..' required/><br />
                        <input type="text" placeholder='Your Email..' required/>
                        <textarea cols="30" rows="5" placeholder='Your Message..' required></textarea><br />
                        <button>Submit</button>
                      </form>

                </div>
                <br /><br /><br />
                 
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29289.57162055031!2d76.25565802902373!3d23.417269580619983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396350af5b76536d%3A0xb1dd8b7add74308d!2sShajapur%2C%20Madhya%20Pradesh%20465001!5e0!3m2!1sen!2sin!4v1688060369174!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </>
  )
}

export default Contact

import React from 'react'
import '../Footer/Footer.css'
import logo_image from '../Assets/logo.png'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-headline">
        <div className="footer-part-1">
            <div className="navbar-logo">
                <img src={logo_image} alt="" />
                <span>fineClub</span>
            </div>
            <p>kumardeepak0437@gmail.com</p>
            <p>+(91) 9097 15 3288</p>
            <p>40th street, BTM 1<sup>st</sup> Stage, </p>
            <p>Bengaluru Karnatka</p><br />
            <div className="media-icons">
          <a href=""><i className="fab fa-facebook-f"></i></a>
          <a href=""><i className="fab fa-twitter"></i></a>
          <a href=""><i className="fab fa-instagram"></i></a>
          <a href=""><i className="fab fa-linkedin-in"></i></a>
          <a href=""><i className="fab fa-youtube"></i></a>
        </div> 
        </div>
        <div className="footer-part-2">
            <h2>Top Club</h2>
            <div className="part-2-details">
                <div className="part-2-left">
                    <p>Brazil</p>
                    <p>Germany</p>
                    <p>Italy</p>
                    <p>Argentina</p>
                    <p>France</p>
                </div>
                <div className="part-2-left">
                    <p>India</p>
                    <p>England</p>
                    <p>Netherlands</p>
                    <p>Poland</p>
                    <p>Croatia</p>
                </div>
            </div>
        </div>
        <div className="footer-part-3">
        <h2>Recent News</h2>
        <p>England win shows they have the spark to go far at World Cup</p>
        <p>dsgf aeget</p>

        <div className='footer-subscribe'>
        <input type="text" placeholder='Email ID' />
        <button>Subscribe</button>
         </div>
        </div>
      </div>

      {/* --------------------------- */}
      <hr />
      <div className='row footer-copy-right'>
        <div className='col-12 col-sm-7'><p>Copyright ©2023 All rights reserved | This template is made with by 🩶 <span>FINECLUB</span></p></div>
        <div className='col-12 col-sm-5'><p>Copyright notification &nbsp;&nbsp;  Terms of Use &nbsp;&nbsp;  Privacy Policy</p></div>
        
      </div>
    </div>
  )
}

export default Footer

import React, { useState,useEffect } from 'react'
import { NavLink } from "react-router-dom"
import '../Navbar/Navbar.css'

import logo_image from '../Assets/logo.png'


function Navbar() {
    const [menu, setMenu] = useState('home')

    const [dt, setDt] = useState(new Date().toLocaleString());
    

    useEffect(() => {
        let secTimer = setInterval( () => {
        setDt(new Date().toLocaleString())
        },1000)

        return () => clearInterval(secTimer);
    }, []);

    const dateTimeUpdate = dt.split(', ')[1].split(":")[0]+":"+dt.split(', ')[1].split(":")[1]+":"+dt.split(', ')[1].split(":")[2]
    const yearDate = Date().toLocaleString().split(' ')[1]+" "+Date().toLocaleString().split(' ')[2]+", "+Date().toLocaleString().split(' ')[3]
    
    // console.log(year,'-----------------------')
  return (
      <div className='container-fluid navbar-item'>
        <div className="row navbar-item-top">
          <div className="col-12 col-sm-10 navbar-item-left">
                <span className='span-tag-navbar'>{dateTimeUpdate} - {yearDate}</span>
                <span className='span-tag-navbar'>Sign in</span>
                <span>Contact</span>
          </div>
          <div className="col-12 col-sm-2 navbar-item-right">
            <a href="https://wa.me/919097153288/text=Hi"><i className="fa fa-whatsapp"></i></a>
            <a href="https://x.com/Deepak_0437"><i className="fa fa-twitter"></i></a>
            <a href="https://github.com/deepak0437"><i className="fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/deepak-kumar-a7137b189/"><i className="fa fa-linkedin"></i></a>
            <a href="https://www.instagram.com/kumardeepak0437/"><i className="fa fa-instagram"></i></a>
          </div>
        </div>

        <div className='row navbar-item-bottom'>
          <div className='col-12 col-sm-3 navbar-bottom-left'>
            <div className='navbar-logo'>
            <NavLink style={{textDecoration:'none', color:'white'}} to='/'>
            <img src={logo_image} alt="" />
                <span>fineClub</span></NavLink>
            </div>
          </div>
          <div className='col-12 col-sm-9 navbar-bottom-right'>
            <ul>
            {/* className={menu === "sports" ? 'navbar-try-bolck' : ''} */}
              <li onClick={() => {setMenu("teams")}} ><NavLink style={{textDecoration:'none', color:'white'}} to='/teams' className={({ isActive }) => isActive ? "navbar-try-bolck" : ""}>TEAMS</NavLink></li>
              <li onClick={() => {setMenu("sports")}} ><NavLink style={{textDecoration:'none', color:'white'}} to='/sports' className={({ isActive }) => isActive ? "navbar-try-bolck" : ""}>SPORT</NavLink></li>
              <li onClick={() => {setMenu("results")}} ><NavLink style={{textDecoration:'none', color:'white'}} to='/results' className={({ isActive }) => isActive ? "navbar-try-bolck" : ""}>RESULTS</NavLink></li>
              <li onClick={() => {setMenu("matches")}} ><NavLink style={{textDecoration:'none', color:'white'}} to='/matches' className={({ isActive }) => isActive ? "navbar-try-bolck" : ""}>MATCHES</NavLink></li>
              <li onClick={() => {setMenu("venue")}} ><NavLink style={{textDecoration:'none', color:'white'}} to='/venue' className={({ isActive }) => isActive ? "navbar-try-bolck" : ""}>VENUE</NavLink></li>
              <li onClick={() => {setMenu("home")}} ><NavLink style={{textDecoration:'none', color:'white'}} to='/' className={({ isActive }) => isActive ? "navbar-try-bolck" : ""}>HOME</NavLink></li>
              
            </ul>
          </div>
        </div>
      </div>

  )
}

export default Navbar

import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import './HomePart3.css'
import AllMatchDetails from '../../Assets/JsFolder/ResultMatch'


function HomePart3() {
  return (
    <div>
    <div className='home-match-result'>
      <div className='row match-result'>
        <div className='col-12 col-md-6 home-left'>
        <NextMatch data={AllMatchDetails.slice(5)}/>
        </div>
        <div className='col-12 col-md-6 home-right'>
        <MatchResult data={AllMatchDetails.slice(5)}/>
        </div>
      </div> 
      <div className='button-style'>
      <NavLink style={{textDecoration:'none', color:'white'}} to='/matches'><button onClick={() => window.scrollTo(0,0)} className='matches-result-button btn btn-dark'> More Matches</button></NavLink>
      <NavLink style={{textDecoration:'none', color:'white'}} to='/results'><button onClick={() => window.scrollTo(0,0)} className='matches-result-button btn btn-dark'> More Results</button></NavLink>
      </div>
    </div>
    </div>
  )
}  


function NextMatch({data}){
    const [curOpen, setcurOpen] = useState(null);
    return(
        <div className='home-part-3'>
            <h1>Next Match</h1>
            <div className="accordion">
            {data.map((element, index) => (
                <MatchDetails curOpen = {curOpen} onOpen = {setcurOpen} data={element} num = {index} key = {element.title}></MatchDetails>
            ))}
        </div>
        </div>
    )
}

function MatchDetails({ curOpen, onOpen, num, data}){
    const isOpen = num === curOpen;

    function handleToggle() {
        onOpen(isOpen ? null : num);
      }
    return(
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
        <div className='row show-items'>
        <div className='col-12 col-md-3 show-items-1'>
          <span>{num < 9 ? `3${num + 1}` : num + 1} Match</span>
        </div>
        <div className='col-12 col-md-7 show-items-2'>
          <span className='country-name-display'>{data.countryName1}</span>
          <span>VS</span>
          <span className='country-name-display'>{data.countryName2}</span>
        </div>
        <div className='col-12 col-md-2 show-items-3'>
          <span className="icon">{isOpen ? "-" : "+"}</span>
        </div>

        </div>
        {isOpen && <div className="content-box">
        <div className='row display-after-toggle'>
          <div className='col-12 col-sm-3 displays-1'>
          <span> <img className='flag-images' src={data.countryImage1} alt="" /> </span><br />
          <span className='country-name-display'>{data.countryName1}</span>
          </div>
          <div className='col-12 col-sm-6 displays-2'>
            <p>{data.countryName1} vs {data.countryName2}</p>
            <h3>VS</h3>
            <p>{data.date}</p>
          </div>
          <div className='col-12 col-sm-3 displays-3'>
          <span> <img className='flag-images' src={data.countryImage2} alt="" /> </span><br />
          <span className='country-name-display'>{data.countryName2}</span>
          </div>
        </div>
        </div>}
    </div>
    )

}


function MatchResult({data}){
    const [curOpen, setcurOpen] = useState(null);
    return(
        <div className='home-part-3'>
            <h1>Recent Results</h1>
            <div className="accordion">
            {data.map((element, index) => (
                <MatchSummary curOpen = {curOpen} onOpen = {setcurOpen} data={element} num = {index} key = {element.title}></MatchSummary>
            ))}
        </div>
        </div>
        
    )
}

function MatchSummary({ curOpen, onOpen, num, data }){
    const isOpen = num === curOpen;

    function handleToggle() {
        onOpen(isOpen ? null : num);
      }
    return(
      <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <div className='row show-items'>
      <div className='col-12 col-md-3 show-items-1'>
        <span>{num < 9 ? `3${num + 1}` : num + 1} Match</span>
      </div>
      <div className='col-12 col-md-7 show-items-2'>
        <span className='country-name-display'>{data.countryName1}</span>
        <span>VS</span>
        <span className='country-name-display'>{data.countryName2}</span>
      </div>
      <div className='col-12 col-md-2 show-items-3'>
        <span className="icon">{isOpen ? "-" : "+"}</span>
      </div>

      </div>
      {isOpen && <div className="content-box">
      <div className='row display-after-toggle'>
        <div className='col-12 col-sm-3 displays-1'>
        <span> <img className='flag-images' src={data.countryImage1} alt="" /> </span><br />
        <span className='country-name-display'>{data.countryName1}</span>
        </div>
        <div className='col-12 col-sm-6 displays-2'>
          <p>{data.countryName1} vs {data.countryName2}</p>
          <h3>{data.result}</h3>
          <p>{data.date}</p>
        </div>
        <div className='col-12 col-sm-3 displays-3'>
        <span> <img className='flag-images' src={data.countryImage2} alt="" /> </span><br />
        <span className='country-name-display'>{data.countryName2}</span>
        </div>
      </div>
      </div>}
  </div>
    )
}


export default HomePart3

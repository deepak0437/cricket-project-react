import React from 'react'
import { useLocation } from 'react-router-dom'
import { NavLink } from "react-router-dom"
import './PlayerDetails.css'
import country from '../Assets/JsonFolder/country.json'



function PlayerDetails({data}) {
    const location = useLocation();
    const selectedData = location.state.data
    const CountryIDs = country.filter(obj => obj.id===selectedData.country_id)[0]
    let gender = "Male"
    if(selectedData.gender === "f")gender="Female"
    const age = Math.floor((new Date() - new Date(selectedData.dateofbirth)) / 1000 / 60 / 60 / 24 / 365.2);
  return (
    <div className='players-statistics'>
    <div className='upcoming-match-nav'>
    <p>
        <NavLink style={{textDecoration:'none', color:''}} to='/'><span onClick={() => window.scrollTo(0,0)}>Home | </span></NavLink> 
        <NavLink style={{textDecoration:'none', color:''}} to='/players'><span onClick={() => window.scrollTo(0,0)}>PLAYERS | </span></NavLink> 
        <span onClick={() => window.scrollTo(0,0)}>{`${selectedData.fullname}`}</span>
        </p>
      
      <div> <br /><br />

      <div class="container">
   <input type="checkbox" id="switch" />
  <div class="outer">
    <div class="content">
      <label for="switch">
        <span class="toggle">
          <span class="circle"></span>
        </span>
      </label>
      <div class="image-box">
       <img src={selectedData.image_path} alt="" />
      </div>
      <div class="details">
        <div class="name"><h1>{selectedData.fullname}</h1></div>
        <div class="job"><h5>{CountryIDs.name}</h5></div>
        <div class="buttons">
        <p>Talent - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ducimus, nostrum dolorem impedit, at architecto magnam tenetur facere vero repellendus nihil quod maxime eligendi, provident doloremque est quae saepe nesciunt.</p>
        <table>
          <tr>
            <td><p>Nick Name</p></td>
            <td><p>&nbsp; &nbsp; :&nbsp; &nbsp; &nbsp;  </p></td>
            <td><p>{selectedData.firstname}</p></td>
          </tr>
          <tr>
            <td><p>Ranking</p></td>
            <td><p>&nbsp; &nbsp; :&nbsp; &nbsp; &nbsp;  </p></td>
            <td><p>{selectedData.position.id}</p></td>
          </tr>
          <tr>
            <td><p>Type</p></td>
            <td><p>&nbsp; &nbsp; :&nbsp; &nbsp; &nbsp;  </p></td>
            <td><p>{selectedData.position.name}</p></td>
          </tr>
          <tr>
            <td><p>Age</p></td>
            <td><p>&nbsp; &nbsp; :&nbsp; &nbsp; &nbsp;  </p></td>
            <td><p>{age} years</p></td>
          </tr>
          <tr>
            <td><p>Date Of Birth</p></td>
            <td><p>&nbsp; &nbsp; :&nbsp; &nbsp; &nbsp;  </p></td>
            <td><p>{new Date(selectedData.dateofbirth).toString().split('05:')[0]}</p></td>
          </tr>
          <tr>
            <td><p>Gender</p></td>
            <td><p>&nbsp; &nbsp; :&nbsp; &nbsp; &nbsp;  </p></td>
            <td><p>{gender}</p></td>
          </tr>
          <tr>
            <td><p>Batting Style</p></td>
            <td><p>&nbsp; &nbsp; :&nbsp; &nbsp; &nbsp;  </p></td>
            <td><p>{selectedData.battingstyle.replaceAll("-"," ")}</p></td>
          </tr>
          <tr>
            <td><p>Bowler Style</p></td>
            <td><p>&nbsp; &nbsp; :&nbsp; &nbsp; &nbsp;  </p></td>
            <td><p>{selectedData.bowlingstyle===null ? "NA" : selectedData.bowlingstyle.replaceAll("-"," ")}</p></td>
          </tr>

        </table>
           
          
        </div>
      </div>
      {/* <button>Read More</button> */}
    </div>
  </div>
 </div>
      </div> 
    
    <br />
      <div className='upcoming-match-to-match'>
      <NavLink style={{textDecoration:'none', color:''}} to='/players'><a onClick={() => window.scrollTo(0,0)} class="btn btn-primary">Go Back</a></NavLink>
      </div><br />
    </div>
    </div>
  )
}

export default PlayerDetails
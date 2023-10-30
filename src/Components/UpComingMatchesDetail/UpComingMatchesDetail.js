import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { NavLink } from "react-router-dom"
import teams from '../Assets/JsonFolder/team.json'
import league from '../Assets/JsonFolder/leage.json'
import venue from '../Assets/JsonFolder/venue.json'
import country from '../Assets/JsonFolder/country.json'
import officials from '../Assets/JsonFolder/officials.json'
import './UpComingMatchesDetail.css'

function ResultSummary({data}) {
    const navigate = useNavigate()
    const location = useLocation();

    const [upcomingMatch, setUpcomingMatch] = useState('preview')

    const selectedData = location.state.data
    const teamDetails1 = teams.filter(obj => selectedData.localteam_id===obj.id)[0];
    const teamDetails2 = teams.filter(obj => selectedData.visitorteam_id===obj.id)[0];
  return (
    <div className='upcoming-match-main-page'>
      <div className='upcoming-match-nav'>
        <p>
        <NavLink style={{textDecoration:'none', color:''}} to='/'><span onClick={() => window.scrollTo(0,0)}>Home | </span></NavLink> 
        <NavLink style={{textDecoration:'none', color:''}} to='/matches'><span onClick={() => window.scrollTo(0,0)}>MATCHES | </span></NavLink> 
        <span onClick={() => window.scrollTo(0,0)}>UpComing-Match | </span>
        <span onClick={() => window.scrollTo(0,0)}>{`${teamDetails1.code} vs ${teamDetails2.code}`}</span>
        </p>
      </div>
      <div className='upcoming-match-logo-part'>
      <img className='upcoming-match-logo' src={teamDetails1.image_path} alt="" />
      <span className='upcoming-vs'>vs</span>
      <img className='upcoming-match-logo' src={teamDetails2.image_path} alt="" />
      </div>
      {/* <h1>{location.state.data.elected}</h1> */}
      {/* <button onClick={()=>navigate(-1)}>go back</button> */}
      <div className='upcoming-match-all-details'>
      <div class="card">
      
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a onClick={()=>setUpcomingMatch("preview")} class={upcomingMatch==="preview" ? "nav-link active" : "nav-link"} id='nav-link-upcoming-match' href=''>Previews</a>
      </li>
      <li class="nav-item">
        <a onClick={()=>setUpcomingMatch("details")} class={upcomingMatch==="details" ? "nav-link active" : "nav-link"} id='nav-link-upcoming-match' href=''>Details</a>
      </li>
      <li class="nav-item">
        <a onClick={()=>setUpcomingMatch("squads")} class={upcomingMatch==="squads" ? "nav-link active" : "nav-link"} id='nav-link-upcoming-match' href=''>Squads</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
  <p>Match No. 23</p>
    <h2>{`${teamDetails1.name} vs ${teamDetails2.name}`}</h2>
    {upcomingMatch === "preview" && <UpcomingMatchPreview teamDetails1={teamDetails1} teamDetails2={teamDetails2}/>}
    {upcomingMatch === "details" && <UpcomingMatchDetails selectedData={selectedData}/>}
    {upcomingMatch === "squads" && <UpcomingMatchTeams/>}
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    
  </div>
</div>
      </div><br />
      <div className='upcoming-match-to-match'>
      <NavLink style={{textDecoration:'none', color:''}} to='/matches'><a onClick={() => window.scrollTo(0,0)} class="btn btn-primary">Go Back</a></NavLink>
      </div><br />
    </div>
  )
}

function UpcomingMatchPreview(){

  return(
    <div className='match-preview'>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo molestias iure laudantium rerum nam suscipit ratione magni, quidem quibusdam tempore, itaque laboriosam. Consequatur accusantium mollitia laboriosam dicta illo non autem?</p>
      <p><strong>Akash Chopra : </strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum excepturi nemo sint? Culpa, in cum earum voluptates maxime omnis quas molestias eius perspiciatis commodi consequuntur repudiandae libero porro esse exercitationem?</p>
      <p><strong>Mohammad Kaif : </strong>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et asperiores sint suscipit excepturi quae iure, debitis autem delectus qui ipsa voluptatibus dolor consequuntur eos nemo nulla ea exercitationem perferendis facilis.</p>
      <p> <strong>What To Expect : </strong> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque deserunt alias illum accusantium dolorem saepe cum mollitia voluptas quo facere fugiat quae voluptatibus, nobis ad aperiam libero recusandae? Explicabo, reprehenderit?</p>
    </div>
  )
}

function UpcomingMatchDetails({selectedData}){
  const leagueName = league.filter(obj => selectedData.league_id===obj.id)[0]
  const locationName = venue.filter(obj => selectedData.venue_id===obj.id)[0]
  const countryName = country.filter(obj => locationName.country_id===obj.id)[0]
  const randomIndex = Math.floor(Math.random() * officials.length);
  // console.log(locationName.id, countryName,selectedData.id,'---------==================---')
  return(
    <div>
    <br />
    <img className='answer-all-upcoming-match-img' src={locationName.image_path} alt="" />
    <p>{locationName.name} , {locationName.city}</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dignissimos iure laboriosam minima at iste temporibus, sapiente ipsum culpa quos non possimus minus error libero, dicta aspernatur autem suscipit nobis.</p>
    
     <div className='upcoming-details-match'>
     <table>
     <tr>
    <td><p className='details-all-upcoming-match'>Match Type</p></td>
    <td><p>&nbsp; &nbsp; :&nbsp; &nbsp; &nbsp;  </p></td>
    <td><p className='answer-all-upcoming-match'>{selectedData.type}</p></td>
  </tr>
  <tr>
    <td><p className='details-all-upcoming-match'>League Name</p></td>
    <td><p>&nbsp; &nbsp; :&nbsp; &nbsp; &nbsp;  </p></td>
    <td><p className='answer-all-upcoming-match'>{leagueName.name} </p></td>
  </tr>
  <tr>
    <td><p className='details-all-upcoming-match'>Round</p></td>
    <td><p>&nbsp; &nbsp; :&nbsp; &nbsp; &nbsp;  </p></td>
    <td><p className='answer-all-upcoming-match'>{selectedData.round}</p></td>
  </tr>
  <tr>
    <td><p className='details-all-upcoming-match'>Where</p></td>
    <td><p>&nbsp; &nbsp; :&nbsp; &nbsp; &nbsp;  </p></td>
    <td><p className='answer-all-upcoming-match'>{locationName.city}</p></td>
  </tr>
  <tr>
    <td><p className='details-all-upcoming-match'>Country</p></td>
    <td><p>&nbsp; &nbsp; :&nbsp; &nbsp; &nbsp;  </p></td>
    <td><p className='answer-all-upcoming-match'>{countryName.name}</p></td>
  </tr>
  <tr>
    <td><p className='details-all-upcoming-match'>Stadium</p></td>
    <td><p>&nbsp; &nbsp; :&nbsp; &nbsp; &nbsp;  </p></td>
    <td><p className='answer-all-upcoming-match'>{locationName.name}</p></td>
  </tr>
  <tr>
    <td><p className='details-all-upcoming-match'>Capacity</p></td>
    <td><p>&nbsp; &nbsp; :&nbsp; &nbsp; &nbsp;  </p></td>
    <td><p className='answer-all-upcoming-match'>{locationName.capacity ? locationName.capacity : 23000}</p></td>
  </tr>
  <tr>
    <td><p className='details-all-upcoming-match'>Match Date</p></td>
    <td><p>&nbsp; &nbsp; :&nbsp; &nbsp; &nbsp;  </p></td>
    <td><p className='answer-all-upcoming-match'>{selectedData.starting_at.split('T')[0] }</p></td>
  </tr>
  <tr>
    <td><p className='details-all-upcoming-match'>Match Time</p></td>
    <td><p>&nbsp; &nbsp; :&nbsp; &nbsp; &nbsp;  </p></td>
    <td><p className='answer-all-upcoming-match'>{selectedData.starting_at.split('T')[1].split('.')[0]}</p></td>
  </tr>
  <tr>
    <td><p className='details-all-upcoming-match'>Umpire</p></td>
    <td><p>&nbsp; &nbsp; :&nbsp; &nbsp; &nbsp;  </p></td>
    <td><p className='answer-all-upcoming-match'>{officials[randomIndex].fullname} , {officials[randomIndex+1].fullname}</p></td>
  </tr>
  <tr>
    <td><p className='details-all-upcoming-match'>Ticket Price</p></td>
    <td><p>&nbsp; &nbsp; :&nbsp; &nbsp; &nbsp;  </p></td>
    <td><p className='answer-all-upcoming-match'>${randomIndex}</p></td>
  </tr>
      </table>
     </div>

    </div>
  )
}

function UpcomingMatchTeams(){

  return(
    <div>
      <h1>Upcoming-Match Teams</h1>
    </div>
  )
}
export default ResultSummary

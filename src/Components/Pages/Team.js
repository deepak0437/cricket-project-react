import React from 'react'
import './Players.css'
import TeamsPart1 from '../Teams/TeamsPart1'
// import country from '../Assets/JsonFolder/country.json'
// import teams from '../Assets/JsonFolder/team.json'

function Team() {

  return (
    <div className=''>
    <div className='teams-hero-part'>
    <h1>Meet The Teams</h1><br />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolores ex officia praesentium, culpa rem deserunt doloribus eaque magnam aliquam, iure iusto, harum optio hic neque accusamus! Deleniti, aut recusandae!</p>
    </div>
    <TeamsPart1/>
       {/* <img src={country[185].image_path} alt="" /> */}
      {/* <img src={teams[1].image_path} alt="" /> */}
    </div>
  )
}





export default Team

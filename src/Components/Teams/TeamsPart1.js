import React from 'react'
import './TeamsPart1.css'
import teams from '../Assets/JsonFolder/team.json'

function TeamsPart1() {
  return (
    <div>
        <div className='teams-details-cards'>
        {teams.slice(0,50).map((element, index) => (
                <TeamsSummary data={element} key = {index}/>
                ))}
        </div>
    </div>
  )
}

function TeamsSummary({data}){
    return(
            <div class="box">
                <div class="ribbon ribbon-top-left"><span>{data.name}</span></div>
                <div class="ribbon ribbon-top-right"><span>{data.name}</span></div>
                <div class="ribbon ribbon-bottom-left"><span>{data.name}</span></div>
                <div class="ribbon ribbon-bottom-right"><span>{data.name}</span></div>
                <img className='teams-flag' src={data.image_path} alt="" />
            </div>
            
    )
}
export default TeamsPart1
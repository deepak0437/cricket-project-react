import React from 'react'
import './ScheulePart2.css'
import AllMatchDetails from '../../Assets/JsFolder/ResultMatch'

function SchedulePart3() {
  return (
    <div>
      <ScheduleTime data={AllMatchDetails.slice(3)}/>
    </div>
  )
}


function ScheduleTime({data}){
    return(
        <div className='schedule-right'>
            <h3>Schedule</h3>
            <div>
                <ul>
                    <li>Saturday 15, September 2019</li>
                    <li>Saturday 15, September 2019</li>
                    <li>Saturday 15, September 2019</li>
                    <li>Saturday 15, September 2019</li>
                    <li>Saturday 15, September 2019</li>
                    <li>Saturday 15, September 2019</li>
                    <li>Saturday 15, September 2019</li>
                    <li>Saturday 15, September 2019</li>
                    <li>Saturday 15, September 2019</li>
                    <li>Saturday 15, September 2019</li>

                </ul>
            </div><br /><br />
            <h3>Top Leagues</h3>
            <div>
            {data.map((element, index) => (
                <TopLeague data={element} num = {index} key = {index}></TopLeague>
            ))}
            </div><br /><br />
            <h3>Other Sport</h3>
            <div>
                <ul>
                    <li>American Football</li>
                    <li>Athletics</li>
                    <li>Aussie Rules</li>
                    <li>Baseball</li>
                    <li>Basketball</li>
                    <li>Beach Soccer</li>
                    <li>Beachvolleyball</li>
                    <li>Badminton</li>
                    <li>Boxing</li>
                    <li>Cycling</li>
                </ul>
            </div>
        </div>
    )
}

function TopLeague({data}){
    return(
        <div className='topleague-data'>
            <span> <img className='flag-images' src={data.countryImage1} alt="" /> </span>
            <span className='topleague-image-name'>{data.countryName1}</span>
            <br />
        </div>
    )
}


export default SchedulePart3

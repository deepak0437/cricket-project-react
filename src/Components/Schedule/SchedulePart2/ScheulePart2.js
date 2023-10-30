import React from 'react'
import './ScheulePart2.css'
import AllMatchDetails from '../../Assets/JsFolder/ResultMatch'
import SchedulePart3 from './SchedulePart3'
import SchedulePart4 from './SchedulePart4'
import MatchesPart2 from '../MatchesPart1/MatchesPart2'


function ScheulePart2({category}) {
    const gvyuiuh = [...AllMatchDetails]
  return (
    <div className='schedule-part2'>
      <div className='schedule-first'>
        <div className='row'>
            <div className='col-12 col-md-8 schedule-row-same'>
                <SchedulePart4 category={category} />
                <br /><br /><br />
                <MatchesPart2/>
                
            </div>
            <div className='col-12 col-md-4 schedule-row-same'>
            <SchedulePart3/>
            </div>
        </div>
      </div>
    </div>
  )
}




export default ScheulePart2

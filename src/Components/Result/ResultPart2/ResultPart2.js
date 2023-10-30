import React from 'react'
import './ResultPart2.css'
import SchedulePart4 from '../../Schedule/SchedulePart2/SchedulePart4'
import SchedulePart3 from '../../Schedule/SchedulePart2/SchedulePart3'


function ResultPart2({category}) {
  return (
    <div className='schedule-part2'>
      <div className='schedule-first'>
        <div className='row'>
            <div className='col-12 col-md-7 schedule-row-same'>
                <SchedulePart4 category={category}/>
            </div>
            <div className='col-12 col-md-5 schedule-row-same'>
            <SchedulePart3/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ResultPart2

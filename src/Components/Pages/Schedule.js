import React, { useState } from 'react'
import ScheulePart1 from '../Schedule/ScheulePart1/ScheulePart1'
import ScheulePart2 from '../Schedule/SchedulePart2/ScheulePart2'
import MatchesPart1 from '../Schedule/MatchesPart1/MatchesPart1'

function Schedule({category}) {
  const [showResults, setShowResults] = useState(false)
  return (
    <div>
      <ScheulePart1/>
      { !showResults ? <><MatchesPart1 toggleResults={setShowResults}/>
      <ScheulePart2 category={category} /> 
      </> : <div>Hellosdf ajwrg arliugker gbrkegbk</div>  }
    </div>
  )
}


export default Schedule

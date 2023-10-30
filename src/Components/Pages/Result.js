import React from 'react'
import ResultPart1 from '../Result/ResultPart1/ResultPart1'
import ResultPart2 from '../Result/ResultPart2/ResultPart2'

function Result({category}) {
  return (
    <div>
      <ResultPart1/>
      <ResultPart2 category={category} />
    </div>
  )
}

export default Result

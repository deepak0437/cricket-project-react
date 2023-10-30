import React from 'react'
import './HomePageNum.css'

function HomePageNum() {
  return (
    <div className='home-page-num'>
      <div className='row'>
        <div className='col-12 col-sm-3'>
            <h1>{<Timer1 totalTime={1195}></Timer1>}</h1>
            <p>GAME PLAYED</p>
        </div>
        <div className='col-12 col-sm-3'>
            <h1>{<Timer1 totalTime={107}></Timer1>}</h1>
            <p>COACHES</p>
        </div>
        <div className='col-12 col-sm-3'>
            <h1>{<Timer1 totalTime={239}></Timer1>}</h1>
            <p>TROPHIES</p>
        </div>
        <div className='col-12 col-sm-3'>
            <h1>{<Timer1 totalTime={356}></Timer1>}</h1>
            <p>MEMBERS</p>
        </div>
      </div>
    </div>
  )
}
function Timer1({totalTime}){
    const [ counterState, setCounter ] = React.useState(0)
    React.useEffect(() => {
    // clearInterval(timer)
    const timer = setInterval(() => {
      if (counterState === totalTime) {
         clearInterval(timer)
         return
       }
      setCounter(prev => prev+1)
      // let counter++
      
   },1.6)
  
   return () => clearInterval(timer)
  },[counterState])

  return (<div>{counterState}</div>)
}

export default HomePageNum

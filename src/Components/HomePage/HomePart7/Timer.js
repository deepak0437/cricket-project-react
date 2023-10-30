import React, { useEffect, useState } from 'react'
import './HomePart7.css'


function Timer() {
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear()+1;
        let difference = +new Date(`10/01/${year}`) - +new Date();
      
        let timeLeft = {};
      
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }
      
        return timeLeft;
      }

      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    // const [year] = useState(new Date().getFullYear());

      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      
        return () => clearTimeout(timer);
      });

      let timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        
    if (!timeLeft[interval]) {
        return;
    }
    timerComponents.push(
        <span>
        {timeLeft[interval]} {interval}{", "}
        </span>
    );
    });
  return (
    <div>
    {/* {timeLeft.days} 
    {timeLeft.seconds}  */}
    <div className='timer-app'>
        <div className='border-timer-app'>
            <h5>{timeLeft.days > 9 ? timeLeft.days : `0${timeLeft.days}`} </h5>
            <p>Days</p>
        </div>
        <div className='border-timer-app'>
            <h5>{timeLeft.hours > 9 ? timeLeft.hours : `0${timeLeft.hours}`} </h5>
            <p>Hours</p>
        </div>
        <div className='border-timer-app'>
            <h5>{timeLeft.minutes > 9 ? timeLeft.minutes : `0${timeLeft.minutes}`} </h5>
            <p>Minutes</p>
        </div>
        <div>
            <h5>{timeLeft.seconds > 9 ? timeLeft.seconds : `0${timeLeft.seconds}`} </h5>
            <p>Seconds</p>
        </div>
    </div>



      {/* {timerComponents.length ? timerComponents : <span>Time's up!</span>} */}
    </div>
  )
}


export default Timer

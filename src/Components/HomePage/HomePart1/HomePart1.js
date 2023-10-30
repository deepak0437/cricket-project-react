import React from 'react'
import './HomePart1.css'

function HomePart1() {
  const curDateTime = new Date().toLocaleString()
  const cuuTime = curDateTime.split(', ')[1].split(":")[0]+":"+curDateTime.split(', ')[1].split(":")[1]
  const currDate = Date().toLocaleString().split(' ')[2]
  const currYear = Date().toLocaleString().split(' ')[3]

  const dateFind = new Date();  // 2009-11-10
  const currMonth = dateFind.toLocaleString('default', { month: 'long' });  

  return (
    <div>
       <div className='header'>
        <div className='header-content'>
            <h5>{currDate} {currMonth} {currYear} / {cuuTime} ISD+0000</h5>
            <span>DEFEND & DOMINATE</span>
            <br /><br /><h3>They are to sea i waters female from lights. Deep had divided to which had. For it saw firmament face whales.</h3>
            <button>Know More <i className='fa fa-long-arrow-right'></i> </button>
        </div>
      </div>
    </div>
  )
}

export default HomePart1

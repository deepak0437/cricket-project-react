import React from 'react'
import './HomePart7.css'
import india from '../../Assets/flags/in.svg'
import pakistan from '../../Assets/flags/pk.svg'
import Timer from './Timer'

function HomePart7() {
  return (
    <div>
      <div className='row part-7-ticket'>
        <div className='col-12 col-md-3 banner-image-name'>
            <div>
            <img className='flag-images-part-7' src={india} alt="" />
            <p>India</p>
            </div>
            <div>
                <span>VS</span>
            </div>
            <div>
            <img className='flag-images-part-7' src={pakistan} alt="" />
            <p>Pakistan</p>
            </div>
        </div>
        <div className='col-12 col-md-3 second-part-7-final'>
            <h5>WORLD CUP LEAGUE</h5>
            <p>Semi - Final</p>
        </div>
        <div className='col-12 col-md-4'>
            <Timer/>
        </div>
        <div className='col-12 col-md-2 part-7-button'>
            <button>Buy Ticket</button>
        </div>
      </div>
    </div>
  )
}

export default HomePart7

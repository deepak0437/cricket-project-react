import React from 'react'
import './HomePart6.css'
import baseball from '../../Assets/GamesImages/baseball.png'
import chess from '../../Assets/GamesImages/chess.png'
import football from '../../Assets/GamesImages/football.png'
import tennisracket from '../../Assets/GamesImages/tennisracket.png'


function HomePart6() {
  return (
    <div>
      <div className='row home-part-6-col'>
        <div className='col-12 col-md-3 '>
        <div className='home-part-6-sports'>
            <img className='sports-game-icon' src={baseball} alt="" />
            <h5>BASEBALL TRAINING</h5>
                    <p>A small river named Duden flows by their place and supplies.</p>
        
        </div>
        </div>
        <div className='col-12 col-md-3'>
        <div className='home-part-6-sports'>
            <div className='sport-images'>
                <img className='sports-game-icon' src={chess} alt="" />
            </div>
            <div>
                <h5>CHESS TRAINING</h5>
                <p>A small river named Duden flows by their place and supplies.</p>
            </div>
        </div>
        </div>
        <div className='col-12 col-md-3'>
        <div className='home-part-6-sports'>
            <div className='sport-images'>
                <img className='sports-game-icon' src={football} alt="" />
            </div>
            <div>
                <h5>FOOTBALL TRAINING</h5>
                <p>A small river named Duden flows by their place and supplies.</p>
            </div>
        </div>
        </div>
        <div className='col-12 col-md-3'>
        <div className='home-part-6-sports'>
            <div className='sport-images'>
                <img className='sports-game-icon' src={tennisracket} alt="" />
            </div>
            <div>
                <h5>TENNIS TRAINING</h5>
                <p>A small river named Duden flows by their place and supplies.</p>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HomePart6

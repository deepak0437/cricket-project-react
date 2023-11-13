import React from 'react'
import './LargestStadium.css'
import stadium from '../Assets/stadium.jpeg'
 
function LargestStadium() {
  return (
    <div>
    <div>

    </div>
        <div className='largest-stadium-page'>
            <div>
                <img className='largest-stadium' src={stadium} alt="" />
            </div>
            <div>
                <h1 className='narendra-modi'>Narendra Modi Stadium</h1><hr />
                <p className='narendra-modi-quotes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ipsa! Voluptate minima quis molestias blanditiis quidem quam fugit sapiente eveniet? Assumenda, eveniet quae voluptate impedit rem perspiciatis dolorum doloribus quam?</p>
                <div className='largest-stadium-details'>
                    <div>
                        <span className='stadium-format'>Established</span><br />
                        <span className='stadium-answer'>Since 1987</span> <br /><br />
                        <span className='stadium-format'>Total Matches</span><br />
                        <span className='stadium-answer'> 87</span>
                    </div>
                    <div>
                        <span className='stadium-format'>Former President</span><br />
                        <span className='stadium-answer'>John Martin</span><br /><br />
                        <span className='stadium-format'>Location</span><br />
                        <span className='stadium-answer'>John Martin</span>
                    </div>
                    <div>
                        <span className='stadium-format'>A skipper</span><br />
                        <span className='stadium-answer'>Jack Hadison</span><br /><br />
                        <span className='stadium-format'>A skipper</span><br />
                        <span className='stadium-answer'>Jack Hadison</span>
                    </div>
                </div>
                <br />
            </div>
        </div>
        
    </div>
  )
}

export default LargestStadium
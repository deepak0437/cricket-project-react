import React, { useEffect, useState } from 'react'
import './HomePart5.css'
import aboutPlayers from '../../Assets/JsFolder/PlayersSays'
import pen_paper from '../../Assets/pen_paper.avif'
import left_arrow from '../../Assets/left_arrow.svg'
import right_arrow from '../../Assets/right_arrow.svg'


function HomePart5() {
  let details;
    const [showItem, setShowItem] = useState(0)
    const [showrank, setShowrank] = useState(false)
    
    if (showrank){
      details = "Rankig : No. 2"
    }else{
      details = ""
    }

    function handleRight(){
      if ((showItem < aboutPlayers.length -1)&& showItem>=0){
        setShowItem(showItem+1)
        setShowrank(false)
      }else{
        setShowItem(0)
        setShowrank(false)
      }
    }

    function handleLeft(){
      if ((showItem < aboutPlayers.length -1)&& showItem>0){
        setShowItem(showItem-1)
        setShowrank(false)
      }else{
        setShowItem(0)
        setShowrank(false)
      }
    }

    useEffect(() => {
        const updateItem = setInterval(() => {
          setShowrank(false)
          if(showItem < aboutPlayers.length -1) setShowItem(showItem+1)
          else setShowItem(0)
         }, 3000);
         return ()=>{
          clearInterval(updateItem)
         }
      }
      )
    
    let playerName = aboutPlayers[showItem]['name'];
    let contents = aboutPlayers[showItem]['contents'];
    let countryName = aboutPlayers[showItem]['country']
    let career = aboutPlayers[showItem]['career']

    return (
    <div className='home-part-5'>
      <div className='part-5-start'>
        <div className='row part-5-star-row'>
            <div className='col-12 col-sm-6 part-5-col-1'>
            <img src={pen_paper} alt="" />
            </div>
            <div className='col-12 col-sm-6 part-5-col-2'>
            <h1>{playerName}</h1>
            <p>{contents}  <br /><span onClick={()=>(setShowrank((val)=>!val))} className='show-more-less'>{showrank ? "show less" : "show more"}</span> <br /><span>{details}</span></p>
            
            <h5>{countryName}  <span>( {career} )</span></h5>
            <span onClick={handleRight}><img src={right_arrow} alt="" /></span>
            <span onClick={handleLeft}><img src={left_arrow} alt="" /></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomePart5

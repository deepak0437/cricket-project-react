import React, { useEffect, useState } from 'react'
import './HomePart2.css'
import displayItems from "../../Assets/JsFolder/Display";

function HomePart2() {

  const [showItem, setShowItem] = useState(0)
  // const updateItem = setInterval(() => {
  //          if(showItem < displayItems.length -1) setShowItem(showItem+1)
  //         }, 3000);
  
  useEffect(() => {
    const updateItem = setInterval(() => {
      if(showItem < displayItems.length -1) setShowItem(showItem+1)
      else setShowItem(0)
     }, 3000);
     return ()=>{
      clearInterval(updateItem)
     }
  }
  )

  return (
    <div>
      <div className='header-banner'>
        <div className="banner-page">
            <div className='columns-1'>
                <p><i className='fa fa-caret-right'></i>   Trending News</p>
            </div>
            <div className='banner-page-right'>
                <div className='columns-2'>
                    <p>{displayItems[showItem]}</p>
                </div>
             
                <div className='columns-3'>
                    <p>
                    <i onClick={() => {((showItem < displayItems.length -1)&&showItem>0) && setShowItem(showItem-1)}} className='fa fa-caret-square-o-left'></i>
                    <i onClick={() => {(showItem < displayItems.length -1) && setShowItem(showItem+1)}} className='fa fa-caret-square-o-right'></i></p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomePart2

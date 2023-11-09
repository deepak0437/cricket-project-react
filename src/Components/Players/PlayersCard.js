import React from 'react'
import country from '../Assets/JsonFolder/country.json'
import {  useNavigate } from 'react-router-dom';



function PlayersCard({myData}) { 
    const navigation  = useNavigate()
    const CountryIDs = country.filter(obj => obj.id===myData.country_id)[0]
    function handlePlayersDetails(){
        const name = myData.fullname.replaceAll(" ",'-').toLowerCase() 
        navigation(`/players/${name}`,{state:{data:myData}})
        window.scrollTo(0,0)
    }
    return(
      <span className='container' onClick={handlePlayersDetails}>
        <div className="wrapper">
      <div className="img-area">
        <div className="inner-area">
          <img src={myData.image_path} alt="" />
        </div>
      </div>
      
      <div className="name">{myData.fullname}</div>
      <div className="about">{myData.battingstyle.replaceAll("-"," ")}</div>
      <div className="social-icons">
        <a href="" className="fb"><i className="fab fa-facebook-f"></i></a>
        <a href="" className="twitter"><i className="fab fa-twitter"></i></a>
        <a href="" className="insta"><i className="fab fa-instagram"></i></a>
        <a href="" className="yt"><i className="fab fa-youtube"></i></a>
      </div>
      <div className="buttons">
        <button>{CountryIDs.name}</button>
        <button>Rank : {myData.position.id}</button>
      </div>
      
        </div>
  
      </span>
    )
}

export default PlayersCard
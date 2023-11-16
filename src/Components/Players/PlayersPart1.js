import React from 'react'
import players from '../Assets/JsonFolder/data.json'
import './PlayersPart1.css'
import PlayersCard from './PlayersCard'


const fewCountryId = [153732,52126,2817,98,155043,14566098,43444,38404,462,146,2325]
let countryIDPlayers = []
fewCountryId.forEach(element => {
    const teamDetails1 = players.filter(obj => obj.country_id===element).slice(0,10)
    countryIDPlayers.push(teamDetails1)
  });

  const filteredPlayers = [...new Set(countryIDPlayers.flat())];
  
function PlayersPart1() {
  return (
    <div> 
    <h1 className='players-all-content'>All Players </h1><br />
    <div className='playersData container'>
    {filteredPlayers.map((items, id) => {
            return <PlayersCard key={id} myData={items} />;
          })}
      </div>
    </div>
  )
}

// function PlayersCard({myData}){
//   const CountryIDs = country.filter(obj => obj.id===myData.country_id)[0]
//   return(
//     <span className='container'>

//       {/* <h1>{myData.fullname}</h1> */}
//       {/* <img src={myData.image_path} alt="" /> */}
//       <div className="wrapper">
//     <div className="img-area">
//       <div className="inner-area">
//         <img src={myData.image_path} alt="" />
//       </div>
//     </div>
    
//     <div className="name">{myData.fullname}</div>
//     <div className="about">{myData.battingstyle.replaceAll("-"," ")}</div>
//     <div className="social-icons">
//       <a href="" className="fb"><i className="fab fa-facebook-f"></i></a>
//       <a href="" className="twitter"><i className="fab fa-twitter"></i></a>
//       <a href="" className="insta"><i className="fab fa-instagram"></i></a>
//       <a href="" className="yt"><i className="fab fa-youtube"></i></a>
//     </div>
//     <div className="buttons">
//       <button>{CountryIDs.name}</button>
//       <button>Rank : {myData.position.id}</button>
//     </div>
    
//       </div>

//     </span>
//   )
// }

export default PlayersPart1
import React,{ Component } from 'react'
import './MatchesPart1.css'
import Slider from "react-slick";
import fixtures from '../../Assets/JsonFolder/fixture.json'
import teams from '../../Assets/JsonFolder/team.json'
import {  useNavigate } from 'react-router-dom';


function MatchesPart1({toggleResults}) {
    
  return (
    <div className='team-match-top'>
      <div className='container'>
      <h1>GAME SCHEDULE</h1><br />
    </div>
       <div>
       <PauseOnHover toggleResults={toggleResults} />
       </div>
    </div>
  )
}

class PauseOnHover extends Component{
    render() {
      var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        gap:2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
      };

    const uniqueFixture = fixtures.filter(
            (obj, index) =>
            fixtures.findIndex((item) => item.localteam_id === obj.localteam_id && item.visitorteam_id === obj.visitorteam_id ) === index
          );

    return (
          <Slider {...settings}>
            {uniqueFixture.slice(0,12).map((element, index) => (
                <MatchSummary data={element} key = {index} toggleResults={this.props.toggleResults}/>
                ))}
          </Slider>
      );
    }
  }
  
  
  function MatchSummary({ data }){
    const teamDetails1 = teams.filter(obj => data.localteam_id===obj.id)[0];
    const teamDetails2 = teams.filter(obj => data.visitorteam_id===obj.id)[0];

    const navigation  = useNavigate()
    // onClick={()=>  toggleResults(()=>true)}   //toggleResults

    function handleUpcomingMatch(){
      const name = (teamDetails1.code+"-"+teamDetails2.code).toLowerCase()
        navigation(`/matches/${name}`,{state:{data:data}})
        window.scrollTo(0,0)
    }

    return(
        <div className='carousel-box' onClick={handleUpcomingMatch}>
      <div className='carousel-box-inner'>
        <div className='box-1'>
            <img className='teams-images' src={teamDetails1.image_path} alt="" />
            <p>{teamDetails1.name}</p>
        </div>
        <div className='box-2'>
            <p>VS</p>
        </div>
        <div className='box-3'>
            <img className='teams-images' src={teamDetails2.image_path} alt="" />
            <p>{teamDetails2.name}</p>
        </div>
       </div>
       <p className='match-date'>{data.starting_at.split('T')[0]}</p>
      </div>
    )
  }





export default MatchesPart1

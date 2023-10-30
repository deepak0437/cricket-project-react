import React,{ Component } from 'react'
import Slider from "react-slick";
import './ScheulePart2.css'
import AllMatchDetails from '../../Assets/JsFolder/ResultMatch'
import fixtures from '../../Assets/JsonFolder/fixture.json'
import teams from '../../Assets/JsonFolder/team.json'
import vanue from '../../Assets/JsonFolder/venue.json'

function SchedulePart4({category}) {
  return (
    <div>
      <ScheduleMatches data={AllMatchDetails.slice(0)} category={category} />
    </div>
  )
}
 
function ScheduleMatches({data,category}){
    return(
        <div className='schedule-left'>
            <h1 className='world-cup-schedule'>World Cup 2023</h1><br /><br />
            <div>
            <ScheduleDetails/>
            </div>
        </div>
    )
}


class ScheduleDetails extends Component {
  render() {
    const settings = {
      // autoplay: true,
      // autoplaySpeed: 3000,
      // pauseOnHover: true,
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      beforeChange: function(currentSlide, nextSlide) {
        // console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        // console.log("after change", currentSlide);
      }
    };

    const uniqueFixture = fixtures.filter(
      (obj, index) =>
      fixtures.findIndex((item) => item.localteam_id === obj.localteam_id && item.visitorteam_id === obj.visitorteam_id ) === index
    );

    return (
      <div>
        <Slider {...settings}>
        {uniqueFixture.slice(12).map((element, index) => (
            
            <MatchSummaryDetails data={element} key = {index}/>
            ))}
        </Slider>
      </div>
    );
  }
}



function MatchSummaryDetails({data}){
  const teamDetails1 = teams.filter(obj => data.localteam_id===obj.id)[0];
  const teamDetails2 = teams.filter(obj => data.visitorteam_id===obj.id)[0];

  const venueDetails = vanue.filter(obj => data.venue_id===obj.id)[0];

  let resultss = "vs";
    // if (category === "result"){
    //      resultss = data.result
    // }
    // else{
    //    resultss = "VS"
    // }  
    return(
        <div>
           <div className='row display-schedule-matches'>
          <div className='col-12 col-sm-3 displays-schedule-1'>
          <span> <img className='flag-images' src={teamDetails1.image_path} alt="" /> </span><br />
          <span className='country-name-schedule'>{teamDetails1.name}</span>
          </div>
          <div className='col-12 col-sm-6 displays-schedule-2'>
            <p className='schedule-fields'>{venueDetails.name} {venueDetails.city}</p>
            <h3>{resultss}</h3>
            <p className='schedule-fields'>{data.starting_at.split('T')[0]}</p>
          </div>
          <div className='col-12 col-sm-3 displays-schedule-3'>
          <span> <img className='flag-images' src={teamDetails2.image_path} alt="" /> </span><br />
          <span className='country-name-schedule'>{teamDetails2.name}</span>
          </div>
          <p className='show-details-schedule'>Show Details</p>
        </div>
        <br />
        </div>
    )
}


export default SchedulePart4

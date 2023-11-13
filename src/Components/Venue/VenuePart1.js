import React, { useState,Component } from 'react'
import Slider from "react-slick";
import './Venue.css'
import venue from '../Assets/JsonFolder/venue.json'
import country from '../Assets/JsonFolder/country.json'
import LargestStadium from './LargestStadium';

function VenuePart1() {
  return (
    <div>
    <h1 className='players-all-content'>Our Stadiums</h1>
    <LargestStadium/>
    <VenueFilterStadium/>
    {/* {venue.map((items, id) => {
            return <VenueCard key={id} myData={items} />;
          })} */}
    </div>
  )
}


function VenueFilterStadium(){
  const [filtersVenue, SetFiltersVenue] = useState("india")
  let stadiumDetails = []
  if (filtersVenue === "allVenue"){
    stadiumDetails = venue.slice(0,300)
  }else if (filtersVenue === "india"){
    stadiumDetails = venue.filter(item=> item.country_id===153732).slice(0,100);
  }else if (filtersVenue === "dayNight"){
    stadiumDetails = venue.filter(item=> item.floodlight===true).slice(0,100);
  }else if (filtersVenue === "srilanka"){
    stadiumDetails = venue.filter(item=> item.country_id===38404).slice(0,100);
  }else if (filtersVenue === "pakistan"){
    stadiumDetails = venue.filter(item=> item.country_id===52126).slice(0,100);
  }else if (filtersVenue === "capacity"){
    stadiumDetails = venue.sort(function (a, b) {
      return b.capacity - a.capacity;
 }).slice(2,102);
  }
  
  
  return(
    <div>
      <div className='venue-filter-options'>
        <p onClick={() => SetFiltersVenue("allVenue")} className={filtersVenue==="allVenue" ? "set-active" : "not-active"}>All</p>
        <p onClick={() => SetFiltersVenue("india")} className={filtersVenue==="india" ? "set-active" : "not-active"}>India</p>
        <p onClick={() => SetFiltersVenue("dayNight")} className={filtersVenue==="dayNight" ? "set-active" : "not-active"}>Night Show</p>
        <p onClick={() => SetFiltersVenue("capacity")} className={filtersVenue==="capacity" ? "set-active" : "not-active"}>Capacity</p>
        <p onClick={() => SetFiltersVenue("srilanka")} className={filtersVenue==="srilanka" ? "set-active" : "not-active"}>Srilanka</p>
        <p onClick={() => SetFiltersVenue("pakistan")} className={filtersVenue==="pakistan" ? "set-active" : "not-active"}>Pakistan</p>     
      </div><br /><br />
      <div className='filters-detail-stadium schedule-left'>
      <StadiumFilters stadiumDetails={stadiumDetails} filtersVenue={filtersVenue}/>
      </div>
      {/* {stadiumDetails.map((items, id) => {
            return <StadiumDetailsCard key={id} myData={items} />;
          })} */}
    </div>
  )
}

class StadiumFilters extends Component {
  render() {
    const { stadiumDetails } = this.props
    const { filtersVenue } = this.props
    const settings = {
      // autoplay: true,
      // autoplaySpeed: 3000,
      // pauseOnHover: true,
      dots: false,
      infinite: true,
      slidesToShow: 10,
      slidesToScroll: 3,
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

    // const uniqueFixture = fixtures.filter(
    //   (obj, index) =>
    //   fixtures.findIndex((item) => item.localteam_id === obj.localteam_id && item.visitorteam_id === obj.visitorteam_id ) === index
    // );

    return (
      <div>
        <Slider {...settings}>
        {stadiumDetails.map((element, index) => (
            
            <StadiumSummaryDetails data={element} key={index} num={index} filtersVenue={filtersVenue}/>
            ))}
        </Slider>
      </div>
    );
  }
}

function StadiumSummaryDetails({data,num,filtersVenue}){
  return(
    <div>
    <div className='row display-schedule-matches'>
    <div>
      <div className='display-details-fields'>
      <div className='name-count'>
      <span className='count'>{num+1}.</span>
      <span className='country-name'>{data.name}, {data.city}</span>
      </div>
      <div>
      <span className='country'>{country.filter(obj => data.country_id===obj.id)[0].name} {filtersVenue==="capacity" && `(${data.capacity})`}</span>
      </div>
      </div>
     
    </div>


 </div>
 <br />
 </div>
  )
}

export default VenuePart1
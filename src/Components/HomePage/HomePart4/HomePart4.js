import React, { useState } from 'react'
import './HomePart4.css'
import AllMatchDetails from '../../Assets/JsFolder/ResultMatch'
import stadium from '../../Assets/stadium.jpeg'
import smallball from '../../Assets/smallball.jpeg'


function HomePart4() {
    const [latestNews, setLatestNews] = useState("all");

    const LatestNewsRightSide1 = [
        {
            headRight : "How To Quit Smoking Using Zyban",
            dateTimeStamp :" May 19, 2019",
            comments : " 13 Comment",
        },
        {
            headRight : "Decorate For Less With Art Posters",
            dateTimeStamp :" June 10, 2020",
            comments : " 19 Comment",
        },
        {
            headRight : "Home Business Advertising Ideas",
            dateTimeStamp :" April 19, 2018",
            comments : " 15 Comment",
        },
        {
            headRight : "Lasik Doesn T Stop Your Eyes From Aging",
            dateTimeStamp :" August 19, 2023",
            comments : " 10 Comment",
        }
    ]

    const LatestNewsRightSide2 = [
        {
            headRight : "Welcome to cricket of fineclub School",
            dateTimeStamp :" June 10, 2023",
            comments : " 19 Comment",
        },
        {
            headRight : "Deep which above behold a woters",
            dateTimeStamp :" December 23, 2010",
            comments : " 22 Comment",
        },
        {
            headRight : "Dictumst Nibh netus mauris suscipit",
            dateTimeStamp :" August 17, 2018",
            comments : " 30 Comment",
        },
        {
            headRight : "Lasik Doesn T Stop Your Eyes From Aging",
            dateTimeStamp :" September 19, 2023",
            comments : " 17 Comment",
        }
    ]

    const LatestNewsRightSide3 = [
        {
            headRight : "We’ve never seen them as organised",
            dateTimeStamp :" January 20, 2010",
            comments : " 10 Comment",
        },
        {
            headRight : "It will be hard to break them down",
            dateTimeStamp :" October 11, 2023",
            comments : " 29 Comment",
        },
        {
            headRight : "Banners With Its Different Kinds And App",
            dateTimeStamp :" August 13, 2018",
            comments : " 17 Comment",
        },
        {
            headRight : "How To Quit Smoking Using Zyban",
            dateTimeStamp :" April 26, 2020",
            comments : " 19 Comment",
        }
    ]

    const LatestNewsRightSide4 = [
        {
            headRight : "There’s a great history of the winner Sandia",
            dateTimeStamp :" June 10, 2020",
            comments : " 20 Comment",
        },
        {
            headRight : "It’ll be a tough game and a physical game",
            dateTimeStamp :" December 10, 2018",
            comments : " 18 Comment",
        },
        {
            headRight : "If we don’t score we can’t get frustrated",
            dateTimeStamp :" September 19, 2018",
            comments : " 09 Comment",
        },
        {
            headRight : "Le Havre does have a growing fan club",
            dateTimeStamp :" August 20, 2023",
            comments : " 15 Comment",
        }
    ]

    let headRight = ""
    let heading = "";
    let dateTimeStamp = "";
    let newsArticle = ""
    let comments = ""
    let newArrayRight;
    if (latestNews==="all"){
        newArrayRight = LatestNewsRightSide1
        headRight = "How To Quit Smoking Using Zyban";
        heading = "Once You Learn These Hard Truths About Life, You'll Become";
        dateTimeStamp = " May 19, 2019";
        comments = " 13 Comment"
        newsArticle = "It’s that time again when people start thinking about their New Years Resolutions. Usually they involve, losing weight, quitting smoking, and joining a gym, just to mention a few. highlights of every Championship match to be shown on the Sky Sports website and app";
    }else if (latestNews==="worldcup"){
        newArrayRight = LatestNewsRightSide2
        headRight = "Decorate For Less With Art Posters";
        heading = "Cricket World Cup 2023: Guardian writers’ predictions for the tournament";
        dateTimeStamp = " June 10, 2020";
        comments = " 19 Comment"
        newsArticle = "India to beat England in the final, but it’s incredibly close. India have adaptable batters and such a varied attack, with the genius of Jasprit Bumrah, and just seem so well balanced.They’re not in particularly good form and they’ve always struggled in tournaments";
    }else if (latestNews==="ipl"){
        newArrayRight = LatestNewsRightSide3
        headRight = "Home Business Advertising Ideas";
        heading = "RCB appoints Andy Flower as for a head coach ahead of IPL 2024";
        dateTimeStamp = " April 19, 2018";
        comments = " 15 Comment"
        newsArticle = "The Indian Premier League, the world's grandest T20 league, returns for its unprecedented 16th season. Over the next 2 months, records will be broken and the limits of T20 cricket pushed as cricketers shift loyalty from country to club. Bringing the charm back in this year's IPL 2023 is the return of fans to all the 12 venues";
    }else if (latestNews==="champion"){
        newArrayRight = LatestNewsRightSide4
        headRight = "Lasik Doesn T Stop Your Eyes From Aging";
        heading = "How to watch games live on Sky Sports and free match highlights";
        dateTimeStamp = " August 19, 2023";
        comments = " 10 Comment"
        newsArticle = "A selection of Sky Bet Championship games are being shown live across Sky Sports in October, November and December - here is how you can watch your team play via TV, online and the Sky Sports app; highlights of every Championship match to be shown on the Sky Sports website and app";
    }
    
  return (
    <div className='home-part-4'>
    <div className='row home-part-4-start'>
        <div className='col-12 col-md-7 home-part-4-left'>
            <div className='latest-news-home'>
                <div className='latest-news-1'>
                    <p><span className='change-font-weight'>Latest</span> News</p>
                </div>
                <div className='latest-news-2'>
                    <p onClick={()=>setLatestNews("all")} className={latestNews==="all" ? "active-latest" : ""}>All</p>
                    <p onClick={()=>setLatestNews("worldcup")} className={latestNews==="worldcup" ? "active-latest" : ""}>World Cup</p>
                    <p onClick={()=>setLatestNews("ipl")} className={latestNews==="ipl" ? "active-latest" : ""}>IPL</p>
                    <p onClick={()=>setLatestNews("champion")} className={latestNews==="champion" ? "active-latest" : ""}>Champions</p>
                </div>
            </div>
            <div>
            <AllLatestNews heading={heading} dateTimeStamp={dateTimeStamp} comments={comments} newsArticle={newsArticle} LatestNewsRightSide={newArrayRight} />
                {/* {latestNews==="all" && <AllLatestNews/>}
                {latestNews==="worldcup" && <WorldCupNews/>}
                {latestNews==="ipl" && <IPLNews/>}
                {latestNews==="champion" && <ChampionNews/>} */}
            </div>
        </div>
        <div className='col-12 col-md-5 home-part-4-right'>
        <p><span className='change-font-weight'>Club</span> Ranking</p>
        <div className='points-table-part4'>
        <table class="table">
            <thead className='table-dark'>
                <tr>
                    <th>Pos</th>
                    <th>Team</th>
                    <th>P</th>
                    <th>W</th>
                    <th>L</th>
                    <th>PTS</th>
                </tr>
            </thead>
            <tbody>
                
                {AllMatchDetails.map((element, index) => (
                <TabelsPoint data={element} num = {index} key = {element.title} ></TabelsPoint>
            ))}
                
            </tbody>
        </table>  
        </div>
        </div>
    </div>
    </div>
  )
}

function TabelsPoint({data,num}){
    return(
        <>
        <tr>
            <td ><span className='points-style-for-font'>{num+1}</span></td>
            <td><img className='image-in-points-table' src={data.countryImage1} alt="" /><span className='points-country-name'>{data.countryName1}</span></td>
            <td><span className='points-style-for-font'>{data.playing}</span></td>
            <td><span className='points-style-for-font'>{data.win}</span></td>
            <td><span className='points-style-for-font'>{data.loss}</span> </td>
            <td> <span className='points-style-for-font'>{data.points}</span></td>
        </tr> 
        </>
    )
}

function AllLatestNews({heading, dateTimeStamp, comments, newsArticle, LatestNewsRightSide}){
    return(
        <div className='all-latest-news-comp'>
            <div className='row all-latest-news-1'>
                <div className='col-12 col-md-6'>
                <img className='stadium-images-comp' src={stadium} alt="" />
                <br /><br /><br /><h2> {heading} </h2>
                <p className='date-time-comp'>📆 {dateTimeStamp} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  ✍🏻 {comments}</p>
                <p className='news-article'>{newsArticle}</p>
                </div>
                <div className='col-12 col-md-6'>
                {LatestNewsRightSide.map((element, index) => (
                    <LatestNewsRight data={element} num = {index} key = {element.title} />
                ))}
                </div>
            </div>
        </div>
    )
}

function LatestNewsRight({data}){
    return(
        <div>
            <div className='latest-item-data-array'>
                <div className='part-1-array'>
                    {/* <img className='part-1-array-image' src={smallball} alt="" /> */}
                    {/* <i class="fa fa-soccer-ball-o"></i> */}
                </div>
                <div className='part-2-array'>
                    <h2>{data.headRight}</h2>
                    <p>📆 {data.dateTimeStamp} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  ✍🏻 {data.comments}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}



export default HomePart4

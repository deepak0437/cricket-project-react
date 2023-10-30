import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Venue from './Components/Pages/Venue'
import Schedule from './Components/Pages/Schedule'
import Result from './Components/Pages/Result'
import Sports from './Components/Pages/Sports'
import Team from './Components/Pages/Team'
import ResultSummary from './Components/UpComingMatchesDetail/UpComingMatchesDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        
        <Route path='/' element={<Home />}/>
        <Route path='/venue' element={<Venue />}/>
        <Route path='/matches' element={<Schedule category="matches" />}/>
        <Route path='/results' element={<Result category="result" />}/>
        <Route path='/sports' element={<Sports />}/>
        <Route path='/teams' element={<Team />}/>
        <Route path='/upcoming-matches' element={<ResultSummary />}/>
        <Route path='/upcoming-matches/teamName' element={<ResultSummary />}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

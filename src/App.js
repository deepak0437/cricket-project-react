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
import Players from './Components/Pages/Players'
import Team from './Components/Pages/Team'
import ResultSummary from './Components/UpComingMatchesDetail/UpComingMatchesDetail';
import PlayerDetails from './Components/Players/PlayerDetails';

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
        <Route path='/players' element={<Players />}/>
        <Route path='/teams' element={<Team />}/>
        <Route path='/matches/:upcoming' element={<ResultSummary />}/>
        <Route path='/players/:player' element={<PlayerDetails />}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

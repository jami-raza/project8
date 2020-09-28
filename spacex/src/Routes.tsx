import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Launches from './Components/Launches/index';
import LaunchDetails from './Components/Launchdetails/index';
import CompanyInfo from './Components/About/index';
import Missions from './Components/Missions/index';
import Rockets from './Components/Rockets/index';
import Ships from './Components/Ships/index';
import Home from './Components/Home';
import Header from './Components/Header';

function Xrouter(){
    return(
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='about-us' element={<CompanyInfo/>}/>
                <Route path='launches' element={<Launches/>}/>
                <Route path='launches/:id' element={<LaunchDetails/>}/>
                <Route path='missions' element={<Missions/>}/>
                <Route path='rockets' element={<Rockets/>}/>
                <Route path='ships' element={<Ships/>}/>

                
            </Routes>
        </Router>
    )
}
export default Xrouter;
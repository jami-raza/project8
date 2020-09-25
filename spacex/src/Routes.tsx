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
                <Route path="/" element={<Home/>}/>
                <Route path="About-us" element={<CompanyInfo/>}/>
                <Route path="Launches" element={<Launches/>}/>
                <Route path="Launches:id" element={<LaunchDetails/>}/>
                <Route path="Missions" element={<Missions/>}/>
                <Route path="Rockets" element={<Rockets/>}/>
                <Route path="Ships" element={<Ships/>}/>

                
            </Routes>
        </Router>
    )
}
export default Xrouter;
import React from "react";
import NavBar from '../Components/NavBarLandPage.jsx';
import Reception from '../Components/Reception.jsx';
import HotelSample from '../Components/HotelSample.jsx';
import Join from '../Components/Join.jsx';

const LandPage = () => {

    return(
    <div>               
        <NavBar/>
        <Reception/>
        <HotelSample/>
        <Join/>
    </div>
        
    );

};

export default LandPage;
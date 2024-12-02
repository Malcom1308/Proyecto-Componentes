import React from "react";
import Navbar from "../Components/NavBarLandPage";

import "../Components/Styles/Profile.css";
import VisitedHoteles from "../Components/VisitedHoteles";

const ViewProfile = () => {

    return(
        <div className="RegisterPage">
           <Navbar/>
              <div className="RegisterContent">
                <VisitedHoteles/>
              </div>
        </div>

    );
};

export default ViewProfile;
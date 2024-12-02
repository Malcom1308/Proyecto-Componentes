import React from "react";
import Navbar from "../Components/NavBarLandPage";
import ProfileCard from "../Components/ProfileCard";
import "../Components/Styles/Profile.css";

const ViewProfile = () => {

    return(
        <div className="RegisterPage">
           <Navbar/>
              <div className="RegisterContent">
                <ProfileCard/>
              </div>
        </div>

    );
};

export default ViewProfile;
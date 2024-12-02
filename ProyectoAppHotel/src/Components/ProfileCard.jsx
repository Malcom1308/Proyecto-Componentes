import React from "react";
import "../Components/Styles/ProfileCard.css";

const ProfileCard = () => {

    return(

        <div className="profileCard">
            <div className="profile-header">
                <div className="profile-image"></div>
                <div className="profile-info">
                    <h2 className="profile-name">Malcom Quirós Madriz</h2>
                    <p className="profile-username">@malcom_qm</p>
                    <div className="profile-details">
                        <span>📍 Cartago, Costa Rica</span>
                        <span>✉️ mequirosm@ucenfotec.ac.cr</span>
                        <span>📅 Joined Enero 2023</span>
                    </div>
                    <p className="profile-bio">
                        Estudiante de Ingenieria en Software | Viajero | Jugador de Videojuegos
                    </p>
                </div>
                <button className="edit-profile-btn">Edit Profile</button>
            </div>
            <div className="profile-stats">
                <div>
                    <h3>1234</h3>
                    <p>Followers</p>
                </div>
                <div>
                    <h3>567</h3>
                    <p>Following</p>
                </div>
                <div>
                    <h3>89</h3>
                    <p>Post</p>
                </div>
            </div>
            <div className="profile-tabs">
                <button className="active">Post</button>
                <button>Projects</button>
                <button>Trips</button>
            </div>
            <div className="recent-post">
                <h4>Recent Post</h4>
                <p>Display recent post here...</p>
            </div>
        </div>
    );
};

export default ProfileCard;
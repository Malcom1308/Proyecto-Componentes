import React from 'react';
import UserIcon from "./Img/UserIcon.svg";

const User = () => {
    return (
        <div>
            <img src={UserIcon} alt="user" className="w-40 h-40" />
        </div>
    );
};

export default User;
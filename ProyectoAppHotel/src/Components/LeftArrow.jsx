import React from 'react';
import leftArrow from './Img/LeftArrow.svg';

const LeftArrow = () => {
    return (
        <div>
            <img src={leftArrow} alt="Arrow" className="w-40 h-40" />
        </div>
    );
};

export default LeftArrow;
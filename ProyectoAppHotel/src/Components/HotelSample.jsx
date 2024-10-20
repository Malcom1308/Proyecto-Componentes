import REACT, {useState} from 'react';
import '../Components/Styles/HotelSample.css';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import HotelPresidente from './Img/HotelPresidente.jpeg';
import HotelPool from './Img/HotelPool.webp';
import JungleHotel from './Img/JungleHotel.webp'


const hotels = 
[
    {
        name: "Hotel President",
        image: HotelPresidente,
    },
    {
        name: "Hotel Pool",
        image: HotelPool,
    },
    {
        name: "Jungle Hotel",
        image: JungleHotel,
    }
]


const HotelSample = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextHotel = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % hotels.length);
    };

    const prevHotel = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + hotels.length) % hotels.length);
    };

    return(

        <div className="CarouselContainer">
            <h2 className='hotelTitle'>Nuestras Elecciones de Hoteles</h2>
            <h3 className='hotelName'>{hotels[currentIndex].name}</h3>
            <div className="CarouselContent">
                <button onClick={prevHotel}><LeftArrow/></button>
                    <img src={hotels[currentIndex].image} alt={hotels[currentIndex].name} className="HotelImage"/>
                <button onClick={nextHotel}><RightArrow/></button>
            </div>
        </div>
    );
};

export default HotelSample;
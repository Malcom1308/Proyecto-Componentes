import REACT, {useState} from 'react';
import '../Components/Styles/HotelSample.css';

const hotels = 
[
    {
        name: "Hotel President",
        description: "Hotel ubicado en la provincia de Guanacaste en Costa Rica a tan solo 5 minutos de playa Conchal con acceso privado a la plata "
    },
    {
        name: "Hotel Pool",
        description: "Nuestro hotel cuenta con una piscina de 50 metros de largo y 25 metros de ancho, ideal para nadar y relajarse, ubicado en Jaco a tan solo 45 minutos de la capital de Costa Rica"
    },
    {
        name: "Jungle Hotel",
        description: "Hotel ubicado en la provincia de Limon en Costa Rica, rodeado de naturaleza y vida silvestre, ideal para los amantes de la naturaleza"
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
            <div className="CarouselContent">
                <h3>{hotels[currentIndex].name}</h3>
                <p>{hotels[currentIndex].description}</p>
            </div>
            <div className="CarouselControls">
                <button onClick={prevHotel}>Anterior</button>
                <button onClick={nextHotel}>Siguiente</button>
            </div>
        </div>
    );
};

export default HotelSample;
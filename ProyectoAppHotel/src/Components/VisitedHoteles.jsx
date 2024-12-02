import React from 'react';
import hotelPresidenteImg from './Img/HotelPresidente.jpeg';
import hotelPoolImg from './Img/HotelPool.webp';
import jungleHotelImg from './Img/JungleHotel.webp';
import './Styles/VisitedHotels.css';

const HotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card">
      <h3>{hotel.nombre}</h3>
      <div className="image-placeholder">
        <img
          src={hotel.imagen}
          alt={hotel.nombre}
          className="hotel-image"
        />
      </div>
      <p className="address">{hotel.direccion}</p>
      {hotel.telefono && <p className="phone">📞 {hotel.telefono}</p>}
      <div className="rating">
        <span>{'⭐'.repeat(Math.floor(hotel.rating))}</span>
        <span>{hotel.rating}</span>
      </div>
      <p className="date-visited">📅 Visitado el: {hotel.dateVisited}</p>
      {hotel.review ? (
        <>
          <p className="review">Mi reseña: {hotel.review}</p>
          <button className="edit-button">Editar Reseña</button>
        </>
      ) : (
        <button className="add-button">Agregar Reseña</button>
      )}
    </div>
  );
};

const VisitedHotels = () => {
  const hotels = [
    {
      nombre: 'Hotel President',
      imagen: hotelPresidenteImg,
      direccion: 'Conchal Guanacaste',
      rating: 9.5,
      dateVisited: '2021-12-27',
      review: 'Excelente estancia, el personal fue muy amable y atento durante nuestra visita.',
    },
    {
      nombre: 'Hotel Pool',
      imagen: hotelPoolImg,
      direccion: 'Tamarindo',
      telefono: '+506 2574 5012',
      rating: 10,
      dateVisited: '2024-05-28',
      review: 'La piscina es muy bonita y la comida del restaurante es deliciosa.',
    },
    {
      nombre: 'Jungle Hotel',
      imagen: jungleHotelImg,
      direccion: 'Monteverde',
      telefono: '+506 8690 2350',
      rating: 8.5,
      dateVisited: '2023-08-15',
      review: 'La habitación estaba limpia y la vista era espectacular.',
    },
  ];

  return (
    <div className="visited-hotels">
      <h2>Mis Hoteles Visitados</h2>
      <div className="hotels-container">
        {hotels.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default VisitedHotels;

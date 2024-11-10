'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Phone } from 'lucide-react';
import Calificacion from './Calificacion.jsx';
import Servicios from './Servicio.jsx';
import { useNavigate } from "react-router-dom";
import hotelPresidenteImg from './Img/HotelPresidente.jpeg';
import hotelPoolImg from './Img/HotelPool.webp';
import jungleHotelImg from './Img/JungleHotel.webp';
import './Styles/PaginaRecomendacion.css'; 

export default function PaginaRecomendacion() {
  const [hoteles, setHoteles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarHoteles = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const datosHoteles = [
          {
            id: 1,
            nombre: 'Hotel President',
            direccion: 'Conchal Guanacaste',
            telefono: '+506 2574 8867',
            calificacion: 9.5,
            imagen: hotelPresidenteImg,
            servicios: ['Wifi', 'Parking', 'Cafeteria'],
          },
          {
            id: 2,
            nombre: 'Hotel Pool',
            direccion: 'Tamarindo',
            telefono: '+506 2574 5012',
            calificacion: 10,
            imagen: hotelPoolImg,
            servicios: ['Wifi', 'Parking', 'Cafeteria'],
          },
          {
            id: 3,
            nombre: 'Jungle Hotel',
            direccion: 'Monteverde',
            telefono: '+506 8690 2350',
            calificacion: 8.5,
            imagen: jungleHotelImg,
            servicios: ['Wifi', 'Cafeteria'],
          },
        ];
        setHoteles(datosHoteles);
        setLoading(false);
      } catch (err) {
        setError("Error al cargar los hoteles. Favor intentar de nuevo.");
        setLoading(false);
      }
    };

    cargarHoteles();
  }, []);

  const navigate = useNavigate();

  const homePage = () => {
    navigate('/');
  };

  return (
    <div className="container"> 
      <main className="main"> 
        <h1 className="text-3xl font-bold mb-6">Hoteles Recomendados</h1>
        <div className="filterContainer"> 
          <input
            type="text"
            placeholder="Buscar hotel..."
            className="searchInput" 
          />
          <select className="sortSelect"> 
            <option>Ordenar por</option>
            <option value="calificacion">Mejor calificados</option>
            <option value="nombre">Nombre A-Z</option>
          </select>
        </div>
        {loading ? (
          <p>Cargando Hoteles...</p>
        ) : error ? (
          <p className="loadingText"> 
            {error}
          </p>
        ) : (
          <div className="hotelCardContainer"> 
            {hoteles.map((hotel) => (
              <div key={hotel.id} className="hotelCard">
                <div className="hotelHeader"> 
                  <h2 className="hotelName"> 
                    {hotel.nombre}
                  </h2>
                  <div className="hotelAddress"> 
                    <MapPin className="icon" /> 
                    {hotel.direccion}
                  </div>
                </div>
                <img
                  src={hotel.imagen}
                  alt={hotel.nombre}
                  width={300}
                  height={200}
                  className="hotelImage"
                />
                <Calificacion valor={hotel.calificacion} />
                <div className="phoneContainer"> 
                  <Phone className="icon" /> 
                  <span>{hotel.telefono}</span>
                </div>
                <Servicios servicios={hotel.servicios} />
                <button className="detailsButton"> 
                  Ver detalles
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

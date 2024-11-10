import React from 'react';
import {Wifi, Car, Coffee } from "lucide-react";

const Servicio = ({ servicios }) => {

    const iconMap = {
        wifi: <Wifi className="w-4 h-4"/>,
        parking: <Car className="w-4 h-4"/>,
        cafeteria: <Coffee className="w-4 h-4"/>
    };

    return(
        <div className="flex space-x-2">
            {servicios.map((servicio) => (
                <div key={servicio} className="flex items-center text-sm text-gray-500">
                    {iconMap[servicio.toLowerCase()]}
                    <span className="ml-1">{servicio}</span>
                </div>
            ))}
        </div>
    );
};

export default Servicio;
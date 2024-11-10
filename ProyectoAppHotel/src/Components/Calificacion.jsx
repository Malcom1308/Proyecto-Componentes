import React from 'react';
import { Star } from "lucide-react";

const Calificacion = ({ valor }) => {

    return(
        <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                key={star}
                className={`w-4 h-4 ${star <= valor ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                />
            ))}
            <span className="ml-2 text-sm font-medium">{valor.toFixed(1)}</span>
        </div>
    )
}

export default Calificacion;
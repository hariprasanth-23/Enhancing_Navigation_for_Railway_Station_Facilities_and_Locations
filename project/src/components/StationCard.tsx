import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Train, MapPin, Info } from 'lucide-react';
import { Station } from '../types';

interface StationCardProps {
  station: Station;
}

const StationCard: React.FC<StationCardProps> = ({ station }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105"
      onClick={() => navigate(`/facilities/${station.id}`)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={station.image} 
          alt={station.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white mb-1">{station.name}</h3>
          <div className="flex items-center text-white/90">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{station.location}</span>
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-600">
            <Train className="h-5 w-5 text-blue-700 mr-2" />
            <span className="text-sm font-medium">View Details</span>
          </div>
          <button 
            className="flex items-center text-blue-700 hover:text-blue-800 transition-colors"
          >
            <Info className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StationCard;
import React from 'react';
import { Facility } from '../types';
import * as Icons from 'lucide-react';

interface FacilityCardProps {
  facility: Facility;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ facility }) => {
  const statusColors = {
    operational: 'bg-green-100 text-green-800 border-green-200',
    maintenance: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    closed: 'bg-red-100 text-red-800 border-red-200',
  };

  const IconComponent = (Icons as any)[facility.icon.charAt(0).toUpperCase() + facility.icon.slice(1)] || Icons.HelpCircle;

  const getGoogleMapsUrl = (location: string) => {
    const query = encodeURIComponent(`${location}, ${facility.name}`);
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-orange-600 hover:shadow-lg transition-shadow duration-300">
      <div className="p-5">
        <div className="flex items-start">
          <div className="mr-4">
            <div className="p-3 bg-orange-100 rounded-full">
              <IconComponent className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-800">{facility.name}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[facility.status]}`}>
                {facility.status.charAt(0).toUpperCase() + facility.status.slice(1)}
              </span>
            </div>
            <p className="text-gray-600 mb-3">{facility.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-500">
                <Icons.MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">{facility.location}</span>
              </div>
              <a
                href={getGoogleMapsUrl(facility.location)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-orange-600 hover:text-orange-800 text-sm font-medium"
              >
                <Icons.Map className="h-4 w-4 mr-1" />
                View on Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
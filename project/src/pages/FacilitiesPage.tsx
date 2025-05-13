import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Navigation from '../components/Navigation';
import { getStationById } from '../data/stations';

const FacilitiesPage: React.FC = () => {
  const { stationId } = useParams<{ stationId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'facilities' | 'services' | 'help'>('facilities');
  
  const station = stationId ? getStationById(stationId) : null;
  
  if (!station) {
    navigate('/stations');
    return null;
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <button 
            onClick={() => navigate('/stations')}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Stations
          </button>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{station.name}</h1>
              <p className="text-gray-600">{station.location}</p>
            </div>
            <img 
              src={station.image}
              alt={station.name}
              className="mt-4 md:mt-0 w-full md:w-64 h-32 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
        
        <Navigation 
          currentStation={station.name}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    </Layout>
  );
};

export default FacilitiesPage;
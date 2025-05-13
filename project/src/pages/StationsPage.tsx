import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Layout from '../components/layout/Layout';
import StationCard from '../components/StationCard';
import { stations } from '../data/stations';

const StationsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredStations = stations.filter(station => 
    station.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    station.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Railway Stations</h1>
          <p className="text-gray-600">Select a station to view available facilities</p>
        </div>
        
        {/* Search */}
        <div className="relative mb-8 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search stations by name or location..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Stations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredStations.length > 0 ? (
            filteredStations.map((station) => (
              <StationCard key={station.id} station={station} />
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500 text-lg">No stations found matching "{searchTerm}"</p>
              <button 
                className="mt-4 text-orange-600 hover:text-orange-800"
                onClick={() => setSearchTerm('')}
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default StationsPage;
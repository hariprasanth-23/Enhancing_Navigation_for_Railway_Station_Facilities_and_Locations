import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Map, Ticket, Train } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';

const NavigationPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBookTicket = () => {
    window.open('https://www.irctc.co.in/nget/train-search', '_blank');
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
              Choose Your Journey Option
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div 
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={() => navigate('/stations')}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-orange-100 p-4 rounded-full mb-6">
                    <Map className="h-12 w-12 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Find My Way</h2>
                  <p className="text-gray-600 mb-6">
                    Navigate through stations, locate facilities, and find your way around easily
                  </p>
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    Explore Stations
                  </Button>
                </div>
              </div>

              <div 
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={handleBookTicket}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-orange-100 p-4 rounded-full mb-6">
                    <Ticket className="h-12 w-12 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Book Ticket</h2>
                  <p className="text-gray-600 mb-6">
                    Book your train tickets directly through IRCTC's official portal
                  </p>
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="inline-flex items-center justify-center p-4 bg-orange-100 rounded-full mb-4">
                <Train className="h-8 w-8 text-orange-600" />
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Whether you're looking to navigate through stations or book your next journey,
                we've got you covered with our comprehensive railway services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NavigationPage;
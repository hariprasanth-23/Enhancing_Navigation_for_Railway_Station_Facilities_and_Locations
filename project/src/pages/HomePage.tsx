import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Train, Map, Users, Info } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-800 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Navigate Railway Stations with Ease
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Find all the facilities and amenities available at your train station. 
              Plan your journey better with our comprehensive guide.
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/navigate')}
              className="bg-orange-600 text-white hover:bg-orange-700"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Discover Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Train className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Station Directory</h3>
              <p className="text-gray-600">
                Browse our comprehensive directory of railway stations across the network.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Map className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Facility Finder</h3>
              <p className="text-gray-600">
                Quickly locate amenities and services available at each station.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">User Guide</h3>
              <p className="text-gray-600">
                Comprehensive guides to help you navigate through stations efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
            <p className="text-xl mb-8 opacity-90">
              Start navigating railway stations with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img 
                src="https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="About RailwayNav" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <Info className="h-6 w-6 text-orange-600 mr-2" />
                <h2 className="text-3xl font-bold text-gray-800">About RailwayNav</h2>
              </div>
              <p className="text-gray-600 mb-4">
                RailwayNav was created to simplify the railway travel experience. Our mission is to provide accurate, up-to-date information about railway stations and their facilities.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you're a daily commuter or an occasional traveler, RailwayNav helps you navigate stations with confidence, ensuring you know exactly where to find the services you need.
              </p>
              <Button 
                variant="outline"
                onClick={() => {}}
                className="border-orange-600 text-orange-600 hover:bg-orange-50"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
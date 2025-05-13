import React from 'react';
import { Train, Clock, Wifi, Coffee, ShoppingBag, ChevronFirst as FirstAid, Briefcase, Phone } from 'lucide-react';
import Layout from '../components/layout/Layout';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Clock,
      title: '24/7 Assistance',
      description: 'Round-the-clock customer support at all major stations',
      image: 'https://images.pexels.com/photos/1770706/pexels-photo-1770706.jpeg'
    },
    {
      icon: Wifi,
      title: 'Free Wi-Fi',
      description: 'High-speed internet access across all platforms',
      image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg'
    },
    {
      icon: Coffee,
      title: 'Premium Lounges',
      description: 'Comfortable waiting areas with refreshments',
      image: 'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg'
    },
    {
      icon: ShoppingBag,
      title: 'Shopping',
      description: 'Retail outlets for travel essentials and souvenirs',
      image: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg'
    },
    {
      icon: FirstAid,
      title: 'Medical Services',
      description: 'Emergency medical assistance available',
      image: 'https://images.pexels.com/photos/3279197/pexels-photo-3279197.jpeg'
    },
    {
      icon: Briefcase,
      title: 'Porter Services',
      description: 'Professional luggage handling',
      image: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg'
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the range of services available at our railway stations to make your journey comfortable and convenient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <service.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="ml-3 text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-orange-600 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">Need Assistance?</h2>
                <p className="text-orange-100">Our support team is available 24/7 to help you</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6" />
                <span className="text-xl font-semibold">1800-123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
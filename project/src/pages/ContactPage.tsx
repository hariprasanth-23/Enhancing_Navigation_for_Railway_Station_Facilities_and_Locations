import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import Layout from '../components/layout/Layout';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl opacity-90">We're here to help with any questions or concerns.</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <Phone className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Available 24/7 for your queries</p>
              <p className="text-orange-600 font-semibold">1800-123-4567</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <Mail className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Get in touch via email</p>
              <p className="text-orange-600 font-semibold">support@railwaynav.com</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <MessageCircle className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Chat with our support team</p>
              <button className="text-orange-600 font-semibold hover:text-orange-700">Start Chat</button>
            </div>
          </div>

          
          
          

          {/* Office Locations */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Visit Our Offices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Chennai', 'Coimbatore', 'Madurai'].map((city, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{city} Office</h3>
                    <div className="space-y-4">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-5 w-5 mr-2 text-orange-600" />
                        <span>123 Railway Street, {city}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-5 w-5 mr-2 text-orange-600" />
                        <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-5 w-5 mr-2 text-orange-600" />
                        <span>+91 44 1234 5678</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
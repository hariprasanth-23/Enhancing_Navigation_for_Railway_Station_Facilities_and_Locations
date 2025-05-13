import React from 'react';
import { Train, Phone, MapPin, Mail, Info } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Train className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">RailwayNav</span>
            </div>
            <p className="text-gray-300 text-sm">
              Your comprehensive guide to railway stations and facilities across the network.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-blue-400 transition-colors">
                <a href="#" className="flex items-center space-x-2">
                  <Info className="h-4 w-4" />
                  <span>About Us</span>
                </a>
              </li>
              <li className="hover:text-blue-400 transition-colors">
                <a href="#" className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Stations Map</span>
                </a>
              </li>
              <li className="hover:text-blue-400 transition-colors">
                <a href="#" className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>info@railwaynav.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>123 Railway Ave, Station City</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} RailwayNav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
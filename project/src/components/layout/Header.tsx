import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Train, Home, Phone, Info, HelpCircle, MapPin, FileText } from 'lucide-react';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <Train className="h-6 w-6 text-orange-600" />
            <span className="text-xl font-bold text-gray-800">RailwayNav</span>
          </div>

          {/* Main Navigation */}
          <nav className="flex items-center space-x-6">
            <Link 
              to="/" 
              className={`flex items-center ${isActive('/') ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'}`}
            >
              <Home className="h-4 w-4 mr-1" />
              <span>Home</span>
            </Link>
            <Link 
              to="/stations" 
              className={`flex items-center ${isActive('/stations') ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'}`}
            >
              <MapPin className="h-4 w-4 mr-1" />
              <span>Stations</span>
            </Link>
            <Link 
              to="/contact" 
              className={`flex items-center ${isActive('/contact') ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'}`}
            >
              <Phone className="h-4 w-4 mr-1" />
              <span>Contact</span>
            </Link>
            <Link 
              to="/about" 
              className={`flex items-center ${isActive('/about') ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'}`}
            >
              <Info className="h-4 w-4 mr-1" />
              <span>About</span>
            </Link>
            <Link 
              to="/help" 
              className={`flex items-center ${isActive('/help') ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'}`}
            >
              <HelpCircle className="h-4 w-4 mr-1" />
              <span>Help</span>
            </Link>
            <Link 
              to="/guidelines" 
              className={`flex items-center ${isActive('/guidelines') ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'}`}
            >
              <FileText className="h-4 w-4 mr-1" />
              <span>Guidelines</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-orange-600"
            onClick={() => {}}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
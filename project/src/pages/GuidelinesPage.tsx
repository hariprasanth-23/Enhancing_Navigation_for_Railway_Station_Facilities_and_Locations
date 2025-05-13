import React from 'react';
import { FileText, AlertTriangle, Check, Info, Shield, Users } from 'lucide-react';
import Layout from '../components/layout/Layout';

const GuidelinesPage: React.FC = () => {
  const guidelines = [
    {
      category: 'General Safety',
      items: [
        'Always be aware of your surroundings in the station',
        'Keep your belongings close and secure',
        'Follow all posted safety signs and instructions',
        'Report any suspicious activities to station authorities'
      ]
    },
    {
      category: 'Platform Safety',
      items: [
        'Stand behind the yellow line while waiting for trains',
        'Do not cross railway tracks - use foot over bridges or subways',
        'Keep clear of platform edges, especially during train arrival/departure',
        'Assist elderly and differently-abled passengers when needed'
      ]
    },
    {
      category: 'Luggage Guidelines',
      items: [
        'Use authorized porters for heavy luggage',
        'Do not leave baggage unattended',
        'Use designated storage facilities for temporary luggage storage',
        'Follow weight restrictions for carried luggage'
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <FileText className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-4">Railway Station Guidelines</h1>
              <p className="text-xl opacity-90">
                Essential information for a safe and comfortable railway journey
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Important Notices */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-12">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notice</h3>
                <p className="text-yellow-700">
                  Please ensure you follow all safety guidelines and station protocols. Your safety is our top priority.
                </p>
              </div>
            </div>
          </div>

          {/* Guidelines Sections */}
          <div className="space-y-12">
            {guidelines.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">{section.category}</h2>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <p className="text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Info className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-blue-800">Know Your Rights</h3>
              </div>
              <ul className="space-y-3 text-blue-700">
                <li>Right to clean and hygienic facilities</li>
                <li>Access to medical assistance when needed</li>
                <li>Right to file complaints and grievances</li>
                <li>Access to real-time train information</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-xl font-semibold text-green-800">Emergency Procedures</h3>
              </div>
              <ul className="space-y-3 text-green-700">
                <li>Locate emergency exits upon arrival</li>
                <li>Note emergency contact numbers</li>
                <li>Follow staff instructions during emergencies</li>
                <li>Help others in need of assistance</li>
              </ul>
            </div>
          </div>

          {/* Responsible Travel Section */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-orange-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Responsible Travel</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Do's</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Keep your tickets readily available
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Maintain cleanliness in stations
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Help fellow passengers when needed
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Don'ts</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                    Don't smoke in station premises
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                    Avoid walking on tracks
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                    Don't litter on platforms
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GuidelinesPage;
import React from 'react';
import { Train, Users, Shield, Target, Award, Sparkles } from 'lucide-react';
import Layout from '../components/layout/Layout';

const AboutPage: React.FC = () => {
  const stats = [
    { label: 'Railway Stations', value: '100+' },
    { label: 'Daily Users', value: '50K+' },
    { label: 'Cities Covered', value: '25+' },
    { label: 'Years of Service', value: '5+' }
  ];

  const values = [
    {
      icon: Users,
      title: 'User-Centric',
      description: 'We put our users first in everything we do, ensuring the best possible experience.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Providing accurate and dependable information you can trust.'
    },
    {
      icon: Target,
      title: 'Accessibility',
      description: 'Making railway navigation simple and accessible for everyone.'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">About RailwayNav</h1>
              <p className="text-xl opacity-90">
                Making railway navigation simple, efficient, and accessible for everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Our Story */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center justify-center mb-8">
              <Train className="h-12 w-12 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold text-center mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              RailwayNav was founded with a simple mission: to make railway station navigation 
              effortless for everyone. We understand that railway stations can be complex and 
              overwhelming, especially for first-time travelers or those in unfamiliar cities.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our platform combines cutting-edge technology with user-friendly design to provide 
              accurate, real-time information about station facilities, amenities, and services. 
              We're committed to enhancing the railway travel experience for millions of passengers.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-3xl font-bold text-orange-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-md text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                    <value.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <div className="flex items-center justify-center mb-8">
              <Award className="h-12 w-12 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold text-center mb-8">Awards & Recognition</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <Sparkles className="h-6 w-6 text-orange-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Best Travel Tech Solution 2024</h3>
                  <p className="text-gray-600">Recognized for innovative approach to railway navigation</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Award className="h-6 w-6 text-orange-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Excellence in User Experience</h3>
                  <p className="text-gray-600">Awarded for outstanding user interface design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
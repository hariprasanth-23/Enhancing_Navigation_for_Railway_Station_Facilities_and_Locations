import React, { useState } from 'react';
import { HelpCircle, Phone, Mail, MessageCircle, FileText, MapPin, Clock, Train, Users, Shield, Search, AlertTriangle, Info } from 'lucide-react';
import Layout from '../components/layout/Layout';

const HelpPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('general');

  const sections = {
    general: {
      title: 'General Help',
      content: [
        {
          question: "How do I check train schedules?",
          answer: "You can check train schedules through our mobile app, website, or at any station's digital information kiosk."
        },
        {
          question: "What facilities are available for senior citizens?",
          answer: "We provide wheelchair assistance, priority seating, and dedicated help desks for senior citizens at all major stations."
        },
        {
          question: "How can I book porter services?",
          answer: "Porter services can be booked through our app or at the designated porter booking counters at the station."
        }
      ]
    },
    contact: {
      title: 'Contact Information',
      content: [
        {
          title: "24/7 Helpline",
          info: "1800-123-4567",
          icon: Phone
        },
        {
          title: "Email Support",
          info: "support@railwaynav.com",
          icon: Mail
        },
        {
          title: "Live Chat",
          info: "Available 24/7",
          icon: MessageCircle
        }
      ]
    },
    about: {
      title: 'About RailwayNav',
      content: [
        "RailwayNav is your comprehensive guide to railway stations across the network.",
        "We provide real-time information about facilities, services, and navigation assistance.",
        "Our mission is to make railway travel simpler and more accessible for everyone."
      ]
    },
    stations: {
      title: 'Station Information',
      content: [
        {
          name: "Chennai Central",
          facilities: ["Executive Lounge", "Medical Center", "Food Court"]
        },
        {
          name: "Coimbatore Junction",
          facilities: ["Premium Waiting Hall", "Book Store", "Prayer Room"]
        },
        {
          name: "Madurai Junction",
          facilities: ["Digital Assistance Kiosk", "Child Care Room", "Mobile Charging Station"]
        }
      ]
    },
    guidelines: {
      title: 'Safety Guidelines',
      content: [
        "Always stand behind the yellow line on platforms",
        "Use foot over bridges or subways to cross tracks",
        "Keep your belongings secure and within sight",
        "Report any suspicious activities to authorities"
      ]
    },
    help: {
      title: 'Help & Support',
      content: [
        {
          type: "Emergency",
          contact: "Dial 112",
          description: "For immediate emergency assistance"
        },
        {
          type: "Medical",
          contact: "108",
          description: "For medical emergencies"
        },
        {
          type: "Security",
          contact: "1800-111-222",
          description: "Railway Protection Force"
        }
      ]
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">How Can We Help You?</h1>
              <p className="text-xl opacity-90">Find answers to common questions and get support when you need it.</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Section Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(sections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`px-6 py-3 rounded-full transition-colors ${
                  activeSection === key
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-50'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>

          {/* Section Content */}
          <div className="max-w-4xl mx-auto">
            {activeSection === 'general' && (
              <div className="space-y-6">
                {sections.general.content.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-start">
                      <HelpCircle className="h-6 w-6 text-orange-600 mt-1 mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                        <p className="text-gray-600">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSection === 'contact' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sections.contact.content.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <item.icon className="h-8 w-8 text-orange-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-orange-600">{item.info}</p>
                  </div>
                ))}
              </div>
            )}

            {activeSection === 'about' && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-6">
                  <Train className="h-8 w-8 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold">About Us</h2>
                </div>
                <div className="space-y-4">
                  {sections.about.content.map((text, index) => (
                    <p key={index} className="text-gray-600">{text}</p>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'stations' && (
              <div className="space-y-6">
                {sections.stations.content.map((station, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4">{station.name}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {station.facilities.map((facility, fIndex) => (
                        <div key={fIndex} className="flex items-center text-gray-600">
                          <MapPin className="h-5 w-5 text-orange-600 mr-2" />
                          <span>{facility}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSection === 'guidelines' && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold">Safety Guidelines</h2>
                </div>
                <div className="space-y-4">
                  {sections.guidelines.content.map((guideline, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <AlertTriangle className="h-5 w-5 text-orange-600 mr-3" />
                      <p>{guideline}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'help' && (
              <div className="space-y-6">
                {sections.help.content.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-start">
                      <Info className="h-6 w-6 text-orange-600 mt-1 mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{item.type}</h3>
                        <p className="text-orange-600 font-semibold mb-1">{item.contact}</p>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HelpPage;
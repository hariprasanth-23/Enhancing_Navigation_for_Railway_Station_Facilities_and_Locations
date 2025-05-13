import { Station, Facility } from '../types';

export const stations: Station[] = [
  {
    id: '1',
    name: 'Chennai Central',
    location: 'Chennai, Tamil Nadu',
    image: 'https://images.pexels.com/photos/2790396/pexels-photo-2790396.jpeg'
  },
  {
    id: '2',
    name: 'Coimbatore Junction',
    location: 'Coimbatore, Tamil Nadu',
    image: 'https://images.pexels.com/photos/2790396/pexels-photo-2790396.jpeg'
  },
  {
    id: '3',
    name: 'Madurai Junction',
    location: 'Madurai, Tamil Nadu',
    image:'https://images.pexels.com/photos/2790396/pexels-photo-2790396.jpeg'
  },
  {
    id: '4',
    name: 'Trichy Junction',
    location: 'Tiruchirappalli, Tamil Nadu',
    image: 'https://images.pexels.com/photos/2790396/pexels-photo-2790396.jpeg'
  },
  {
    id: '5',
    name: 'Salem Junction',
    location: 'Salem, Tamil Nadu',
    image: 'https://images.pexels.com/photos/2790396/pexels-photo-2790396.jpeg'
  },
  {
    id: '6',
    name: 'Erode Junction',
    location: 'Erode, Tamil Nadu',
    image: 'https://images.pexels.com/photos/2790396/pexels-photo-2790396.jpeg'
  }
];

export const facilities: Facility[] = [
  // Chennai Central
  {
    id: '1',
    name: 'Executive Lounge',
    description: 'Premium air-conditioned lounge with Wi-Fi, TV, and refreshments',
    location: 'First Floor, Main Building',
    stationId: '1',
    status: 'operational',
    icon: 'sofa'
  },
  {
    id: '2',
    name: 'Medical Center',
    description: '24/7 medical assistance with trained staff',
    location: 'Ground Floor, East Wing',
    stationId: '1',
    status: 'operational',
    icon: 'stethoscope'
  },
  {
    id: '3',
    name: 'Food Court',
    description: 'Multiple restaurants serving various cuisines',
    location: 'Ground Floor, Central Hall',
    stationId: '1',
    status: 'operational',
    icon: 'utensils'
  },
  {
    id: '4',
    name: 'Baggage Storage',
    description: 'Secure luggage storage facility with digital lockers',
    location: 'Ground Floor, West Wing',
    stationId: '1',
    status: 'operational',
    icon: 'baggage'
  },
  {
    id: '5',
    name: 'Tourist Information',
    description: 'Information desk for tourists with maps and guides',
    location: 'Main Entrance',
    stationId: '1',
    status: 'operational',
    icon: 'info'
  },
  {
    id: '6',
    name: 'Currency Exchange',
    description: 'Foreign currency exchange services',
    location: 'First Floor, South Wing',
    stationId: '1',
    status: 'operational',
    icon: 'banknote'
  },
  // Coimbatore Junction
  {
    id: '7',
    name: 'Premium Waiting Hall',
    description: 'Air-conditioned waiting area with comfortable seating',
    location: 'Platform 1',
    stationId: '2',
    status: 'operational',
    icon: 'armchair'
  },
  {
    id: '8',
    name: 'Book Store',
    description: 'Wide selection of books and magazines',
    location: 'Main Concourse',
    stationId: '2',
    status: 'operational',
    icon: 'book'
  },
  {
    id: '9',
    name: 'Prayer Room',
    description: 'Multi-faith prayer room',
    location: 'First Floor',
    stationId: '2',
    status: 'operational',
    icon: 'heart'
  },
  // Madurai Junction
  {
    id: '10',
    name: 'Digital Assistance Kiosk',
    description: 'Self-service information and ticket booking kiosk',
    location: 'Main Hall',
    stationId: '3',
    status: 'operational',
    icon: 'computer'
  },
  {
    id: '11',
    name: 'Child Care Room',
    description: 'Facility for parents with young children',
    location: 'Ground Floor',
    stationId: '3',
    status: 'operational',
    icon: 'baby'
  },
  {
    id: '12',
    name: 'Mobile Charging Station',
    description: 'Free mobile charging points with lockers',
    location: 'All Platforms',
    stationId: '3',
    status: 'operational',
    icon: 'battery-charging'
  }
];

export const getStationById = (id: string): Station | undefined => {
  return stations.find(station => station.id === id);
};

export const getFacilitiesByStationId = (stationId: string): Facility[] => {
  return facilities.filter(facility => facility.stationId === stationId);
};
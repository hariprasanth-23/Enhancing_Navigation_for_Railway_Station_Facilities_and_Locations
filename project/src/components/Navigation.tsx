import React, { useState } from 'react';
import { MapPin, HelpCircle, Wrench, Clock, Wifi, Coffee, ShoppingBag, Phone, Briefcase, Mail } from 'lucide-react';

interface NavigationProps {
  currentStation: string;
  activeTab: 'facilities' | 'services' | 'help';
  onTabChange: (tab: 'facilities' | 'services' | 'help') => void;
}

const stationFacilities = {
  "Chennai Central": [
    {
      title: "Chennai Park Town Railway Station",
      description: "Suburban railway station near Chennai Central",
      url: "https://maps.app.goo.gl/Ho2m8NcZK2Kfy81H9"
    },
    {
      title: "Chennai Central Suburban",
      description: "Suburban platforms of Chennai Central",
      url: "https://maps.app.goo.gl/WrpJzfCNn1R4Rftz7"
    },
    {
      title: "Food Track",
      description: "Food outlet near station",
      url: "https://maps.app.goo.gl/9Q7VcGmBt8xdcH7q6"
    },
    {
      title: "Current Reservation Counter",
      description: "Counter for current ticket reservations",
      url: "https://maps.app.goo.gl/yqb5phFMmcfHkRbdA"
    },
    {
      title: "Unreserved Booking Counter",
      description: "Ticket counter for unreserved tickets",
      url: "https://maps.app.goo.gl/zTinQfQ9eRjg3ZBa6"
    },
    {
      title: "SBM Toilet",
      description: "Public sanitation facility",
      url: "https://maps.app.goo.gl/xh6ApaHqqJeJGKn8A"
    },
    {
      title: "Vivekananda Book Centre",
      description: "Bookstore at Chennai Central",
      url: "https://maps.app.goo.gl/iR1bowxdcWXFY1ci8"
    },
    {
      title: "Smart Luggage Lockers",
      description: "Digital luggage storage facility",
      url: "https://maps.app.goo.gl/bq1yQmT5Jwyav1t67"
    },
    {
      title: "Movement Control Office",
      description: "Train movement and control office",
      url: "https://maps.app.goo.gl/u8zMZYEVz8BLZdUH6"
    },
    {
      title: "Apollo Pharmacy",
      description: "Pharmacy at station premises",
      url: "https://maps.app.goo.gl/AdiK7XcgYrTmnwxd6"
    },
    {
      title: "Executive Lounge - Chennai Central",
      description: "Lounge for premium passengers",
      url: "https://maps.app.goo.gl/MM8rfEfk32rPfvVR7"
    },
    {
      title: "INEJ - IRCTC Executive Lounge",
      description: "IRCTC's premium lounge service",
      url: "https://maps.app.goo.gl/FcVzy47YbWxZGo4VA"
    },
    {
      title: "Zero B Water Vending Machine",
      description: "Filtered water dispensing unit",
      url: "https://maps.app.goo.gl/chbMzYV6m6sGdjvE7"
    },
    {
      title: "Drinking Water Facility",
      description: "Free public drinking water",
      url: "https://maps.app.goo.gl/EkR72gQLjMvgvs8y8"
    },
    {
      title: "Zero B Water Vending - Platform 5",
      description: "Water dispenser on Platform 5",
      url: "https://maps.app.goo.gl/bZP1mUfSczhjUb1x7"
    },
    {
      title: "Parcel Booking Office",
      description: "Parcel service counter",
      url: "https://maps.app.goo.gl/53w2rCvqeQdsxoXy5"
    },
    {
      title: "Luggage Cloak Room",
      description: "Luggage storage room",
      url: "https://maps.app.goo.gl/2tDaKG7o4WBD4NRU9"
    },
    {
      title: "Railway Police Station - Chennai Central",
      description: "Police station ensuring station security",
      url: "https://maps.app.goo.gl/KfphpGG84zuBK6HQA"
    },
    {
      title: "IRCTC Office",
      description: "Indian Railway Catering & Tourism Corporation Office",
      url: "https://maps.app.goo.gl/Kjrj4Wyhabbqqv6AA"
    },
    {
      title: "Platform Ticket Counter",
      description: "Ticket counter for platform entry",
      url: "https://maps.app.goo.gl/EgG7Bq1DrQVngXPw8"
    }
  ],
  "Coimbatore Junction": [
    {
      title: "Coimbatore Junction (main)",
      description: "Main railway station with 6 platforms serving major routes",
      url: "https://maps.app.goo.gl/4RZTXcKMU94Kx56R9"
    },
    {
      title: "Southern Railway Parcel Service",
      description: "Parcel service facility for luggage and goods",
      url: "https://maps.app.goo.gl/dwLPEu1nNFwiu7Hv5"
    },
    {
      title: "SBI ATM",
      description: "State Bank of India ATM inside the station",
      url: "https://maps.app.goo.gl/cycBNQXfG73yfVmr6"
    },
    {
      title: "Railway Dormitory",
      description: "Coimbatore Railway Dormitory for passenger stay",
      url: "https://maps.app.goo.gl/ejBHaThZAnvujTD56"
    },
    {
      title: "Deputy Station Manager Room",
      description: "Administrative office of the deputy station manager",
      url: "https://maps.app.goo.gl/QkeMzszRwirq87uPA"
    },
    {
      title: "Pay and Use Toilet",
      description: "Modern pay-and-use toilet and bathing facility",
      url: "https://maps.app.goo.gl/RZpgvngZKw32YQp47"
    },
    {
      title: "West Entrance",
      description: "Coimbatore Railway Station - West Entrance",
      url: "https://maps.app.goo.gl/nJ36yy6EgSxnVw1j9"
    },
    {
      title: "Bike Parking Lot",
      description: "Dedicated parking area for two-wheelers",
      url: "https://maps.app.goo.gl/JuEuWrvzPE3cu8z1A"
    },
    {
      title: "EMS Speed Post",
      description: "Express mail service counter at the station",
      url: "https://maps.app.goo.gl/FqJ1ZTA8pyqMn9wJ9"
    },
    {
      title: "Retiring Room",
      description: "Resting facility for passengers with short stay options",
      url: "https://maps.app.goo.gl/PyCgXsRx4rsGFZzH9"
    },
    {
      title: "AC Waiting Hall",
      description: "Air-conditioned waiting area for travelers",
      url: "https://maps.app.goo.gl/pzvym7gS1BQNjhkbA"
    },
    {
      title: "Red Taxi Booking Office",
      description: "Taxi booking counter for passengers",
      url: "https://maps.app.goo.gl/dJBZREtvYANrhfkC7"
    },
    {
      title: "Multilevel 2 Wheeler Parking",
      description: "Multi-level parking facility for two-wheelers",
      url: "https://maps.app.goo.gl/AZGPjQJhCHra2viGA"
    },
    {
      title: "Railway Mail Service",
      description: "Railway-based mail and courier service center",
      url: "https://maps.app.goo.gl/oXNB5a6AydRhyz216"
    },
    {
      title: "Railway Station Bus Stop",
      description: "Bus stop located near the railway station",
      url: "https://maps.app.goo.gl/jB6Zag4Afwb42yao8"
    },
    {
      title: "Subway (Platform 1 and 2)",
      description: "Underground pedestrian subway connecting platforms 1 and 2",
      url: "https://maps.app.goo.gl/xMRxxvc1dDgXJ1CR7"
    },
    {
      title: "Anandh Xerox",
      description: "Xerox and document printing shop near the station",
      url: "https://maps.app.goo.gl/NKRSqCPCBzNEM3tu5"
    },
    {
      title: "Platform No. 4",
      description: "Platform No. 4 at Coimbatore Railway Station",
      url: "https://maps.app.goo.gl/V7HBFbV6PM3c9ZB6A"
    },
    {
      title: "Prepaid Waiting Hall",
      description: "Waiting hall with prepaid access for passengers",
      url: "https://maps.app.goo.gl/AW3ao63hPMe9xbz68"
    }
  ],
  "Madurai Junction": [
    {
      title: "Madurai Junction",
      description: "Main railway station in Madurai",
      url: "https://maps.app.goo.gl/3P1VKeNHduTJpj7A7"
    },
    {
      title: "1st Platform - Madurai Junction",
      description: "First platform area of Madurai Junction",
      url: "https://maps.app.goo.gl/v7hy1knqwXSWpi1V8"
    },
    {
      title: "Public Toilet - Platform 2",
      description: "Public toilet at platform 2",
      url: "https://maps.app.goo.gl/fKLUbLA49DYyqYEM8"
    },
    {
      title: "Public Toilet - Platform 4",
      description: "Public toilet at platform 4",
      url: "https://maps.app.goo.gl/P8rhyXF59S81ss9c7"
    },
    {
      title: "Booking Office",
      description: "Main ticket booking office",
      url: "https://maps.app.goo.gl/X7kRU8KLvyTyYWcX9"
    },
    {
      title: "Railway Protection Force",
      description: "Railway police security office",
      url: "https://maps.app.goo.gl/wikUhWg3FGdMpJHZ7"
    },
    {
      title: "Western Entry - Madurai Junction",
      description: "West gate entrance to the station",
      url: "https://maps.app.goo.gl/4YhR5ZUoAbFM5neeA"
    },
    {
      title: "West Gate Ticket Booking Office",
      description: "Booking office at the west gate",
      url: "https://maps.app.goo.gl/kFjgC2QvHYSzNMgw7"
    },
    {
      title: "CCRC Office - Madurai",
      description: "Chief Commercial Revenue Control office",
      url: "https://maps.app.goo.gl/56Vxk1k2dFCs1Nck9"
    },
    {
      title: "India Post",
      description: "Post office at the station",
      url: "https://maps.app.goo.gl/W3bQ1gtDKqRwfKgm7"
    },
    {
      title: "IRCTC Retiring Rooms",
      description: "Accommodation facility for travelers",
      url: "https://maps.app.goo.gl/E1fzeXFbeNJ1YcZa6"
    },
    {
      title: "Second Class Waiting Hall",
      description: "Waiting hall for second class passengers",
      url: "https://maps.app.goo.gl/KcNaeazMBwmDrsKMA"
    },
    {
      title: "ATM Complex",
      description: "ATM and banking services",
      url: "https://maps.app.goo.gl/HTvwiqH3fYcrw5xPA"
    },
    {
      title: "Cloak Room",
      description: "Luggage storage facility",
      url: "https://maps.app.goo.gl/i71CL8P5BGLu85Bh7"
    },
    {
      title: "Chief Health Inspector Office",
      description: "Health and sanitation monitoring office",
      url: "https://maps.app.goo.gl/TpRNZQohFzzjicB29"
    },
    {
      title: "IRCTC Executive Lounge - Madurai",
      description: "Premium lounge facility by IRCTC",
      url: "https://maps.app.goo.gl/n16wvemm9pZCkM4CA"
    },
    {
      title: "Upper Class Waiting Hall - PF1",
      description: "Waiting area for upper class passengers at Platform 1",
      url: "https://maps.app.goo.gl/6FwVBAyGs6QJNnxG9"
    },
    {
      title: "Railway Parking - Madurai",
      description: "General parking area",
      url: "https://maps.app.goo.gl/UJjV884LupwmGYYj7"
    },
    {
      title: "Car Parking - Madurai Junction",
      description: "Dedicated car parking zone",
      url: "https://maps.app.goo.gl/M2SA6vN7zZNM5jWP8"
    },
    {
      title: "Parcel Booking Office",
      description: "Parcel services and booking center",
      url: "https://maps.app.goo.gl/necPbwUe8anYeKAY8"
    }
  ],
  "Trichy Junction": [
    {
      title: "Platform No.1",
      description: "Platform number 1",
      url: "https://maps.app.goo.gl/s8LrJUY98E32n52w8"
    },
    {
      title: "Platform No.2",
      description: "Platform number 2",
      url: "https://maps.app.goo.gl/c4Da4CFRr6HFovo26"
    },
    {
      title: "Platform No.3",
      description: "Platform number 3",
      url: "https://maps.app.goo.gl/YztZw7MkYF5Wjtta7"
    },
    {
      title: "Platform No.4",
      description: "Platform number 4",
      url: "https://maps.app.goo.gl/1ZENXx1BvbC7Gqm67"
    },
    {
      title: "Platform No.7",
      description: "Platform number 7",
      url: "https://maps.app.goo.gl/mpDBVunhi2s6pEZL7"
    },
    {
      title: "Platform No.8",
      description: "Platform number 8",
      url: "https://maps.app.goo.gl/1om9z2fofhSRR1LVA"
    },
    {
      title: "Public Toilet",
      description: "Toilet facility available for passengers",
      url: "https://maps.app.goo.gl/DWeMnNT2mW"
    },
    {
      title: "Escalator",
      description: "Escalator available for passenger movement",
      url: "https://maps.app.goo.gl/42w78pYxDd8sSRkT9"
    },
    {
      title: "Lift",
      description: "Lift service available",
      url: "https://maps.app.goo.gl/Rw7b9dJk8QbUQUt56"
    },
    {
      title: "Foot Over Bridge",
      description: "Foot Over Bridge for platform crossing",
      url: "https://maps.app.goo.gl/XULu9x1oaS3ovfwJ7"
    },
    {
      title: "Shoe Stand",
      description: "Dedicated shoe stand for passengers",
      url: "https://maps.app.goo.gl/Z26YyYY1kJG99kKZA"
    },
    {
      title: "Drinking Water",
      description: "Drinking water point available",
      url: "https://maps.app.goo.gl/Jr2GULZyaWsk4ErH7"
    },
    {
      title: "Waiting Hall",
      description: "Waiting area for passengers",
      url: "https://maps.app.goo.gl/5A8cv1VLRxCDTLRm7"
    },
    {
      title: "AC Waiting Hall",
      description: "Air-conditioned waiting room",
      url: "https://maps.app.goo.gl/vCCeXNsyc7SyFNoV9"
    },
    {
      title: "Railway Canteen",
      description: "Railway operated food canteen",
      url: "https://maps.app.goo.gl/BBVKaJL2khG1cr5S8"
    },
    {
      title: "IRCTC Canteen",
      description: "IRCTC managed canteen",
      url: "https://maps.app.goo.gl/m1PbwrnbNsExAJtQ9"
    },
    {
      title: "Prepaid Auto",
      description: "Prepaid auto stand",
      url: "https://maps.app.goo.gl/m36uLtXexb8qT1kM9"
    },
    {
      title: "Prepaid Taxi",
      description: "Prepaid taxi service",
      url: "https://maps.app.goo.gl/zdpbPDUyic98YpnXA"
    },
    {
      title: "Retiring Room",
      description: "Room available for short stays",
      url: "https://maps.app.goo.gl/1e3iZ5UgkG1UZDE48"
    },
    {
      title: "Railway Police Station",
      description: "RPF station inside the premises",
      url: "https://maps.app.goo.gl/Vgmdm5MfBNp16MDt6"
    }
  ],
  "Salem Junction": [
    {
      title: "Salem Railway Station",
      description: "Main railway station in Salem",
      url: "https://maps.app.goo.gl/c6FtG7NQ9szkWu5BA"
    },
    {
      title: "Salem Junction Railway Reservation Office",
      description: "Ticket reservation office",
      url: "https://maps.app.goo.gl/1ToedoZAviRxosddA"
    },
    {
      title: "Railway Ticket Counter",
      description: "Standard railway ticket counter",
      url: "https://maps.app.goo.gl/i5Td9DdScYrqhjG17"
    },
    {
      title: "Southern Railway Deputy Chief Engineer Office",
      description: "Deputy Chief Engineer's Office - Southern Railway",
      url: "https://maps.app.goo.gl/yw3NrUkXCwSMnpMk8"
    },
    {
      title: "Escalator/Lift - Platform 1",
      description: "Access facility to Platform 1",
      url: "https://maps.app.goo.gl/ZQhRQQoVFLP3PsaEA"
    },
    {
      title: "SSE Pway North Salem Office",
      description: "Permanent Way Section Engineer Office",
      url: "https://maps.app.goo.gl/5fWkJcWh7T2mptjA9"
    },
    {
      title: "SSE Signal SRM Salem Office",
      description: "Signal and Telecommunications Department",
      url: "https://maps.app.goo.gl/M8ZjGL9fmQtAWXsU7"
    },
    {
      title: "SBM Toilet",
      description: "Public toilet facility",
      url: "https://maps.app.goo.gl/qEZDLT9b8HckTz5L8"
    },
    {
      title: "Railway Electrical Substation",
      description: "Power substation for Salem Junction",
      url: "https://maps.app.goo.gl/qr11sejxir4cJLxs7"
    },
    {
      title: "Salem Railway Police Station",
      description: "Security and law enforcement at station",
      url: "https://maps.app.goo.gl/g5sEUo4E1kXWviVL6"
    },
    {
      title: "Waiting Hall - Platform 4",
      description: "Passenger waiting area on Platform 4",
      url: "https://maps.app.goo.gl/vhd4BEHZ9ETBgNRUA"
    },
    {
      title: "RO Drinking Water - Platform 1",
      description: "Filtered drinking water point",
      url: "https://maps.app.goo.gl/h88Uux4moa2cj9tk6"
    },
    {
      title: "Waiting Hall - Platform 1",
      description: "Passenger waiting area on Platform 1",
      url: "https://maps.app.goo.gl/3qwqddjCddTtzYMJ8"
    },
    {
      title: "IRCTC Hi-Ness Kitchen and Refreshment Room",
      description: "Refreshments and food service by IRCTC",
      url: "https://maps.app.goo.gl/iy9JUVEnqaAEpCD26"
    },
    {
      title: "Salem Railway Station Dormitory",
      description: "Lodging for passengers",
      url: "https://maps.app.goo.gl/ycbgR6F7UcRkcBgA6"
    }
  ],
  "Erode Junction": [
    {
      title: "Platform 2",
      description: "Platform number 2 at Erode Railway Station",
      url: "https://maps.app.goo.gl/nbr8Bd3Ld4tA6b8y8"
    },
    {
      title: "Platform 3",
      description: "Platform number 3 at Erode Railway Station",
      url: "https://maps.app.goo.gl/PWg7ZinG7wLtH2ns6"
    },
    {
      title: "IRCTC Food Plaza",
      description: "IRCTC operated food plaza",
      url: "https://maps.app.goo.gl/9Zheez7aF9ZpyZMF9"
    },
    {
      title: "Siva Stall",
      description: "Food and snack stall inside the station",
      url: "https://maps.app.goo.gl/qmos7phsuafRGCVV9"
    },
    {
      title: "Erode Railway Junction (COVAI LIMITED)",
      description: "Main area of Erode Railway Station (Covai Limited)",
      url: "https://maps.app.goo.gl/t1VPATTi5DMkn9LEA"
    },
    {
      title: "Sri Sai Pharmacy",
      description: "Medical store inside or near Erode Junction",
      url: "https://maps.app.goo.gl/fwFK7tfHncXvvdkJ7"
    },
    {
      title: "Platform 1 - Erode Railway Station",
      description: "Platform number 1 at Erode Railway Station",
      url: "https://maps.app.goo.gl/LfszQ2c1wwWuAqyd9"
    },
    {
      title: "DBS Bank - Moolapalayam Branch",
      description: "Nearby bank branch near Erode Junction",
      url: "https://maps.app.goo.gl/HtmXRpZe1qo79eZq5"
    },
    {
      title: "Retiring Room by Railway",
      description: "Short stay rooms for passengers",
      url: "https://maps.app.goo.gl/aFKThMPubWNdgPqD8"
    },
    {
      title: "VIP Lounge",
      description: "Premium waiting area for VIP passengers",
      url: "https://maps.app.goo.gl/hz9Fixo5fFexA7Un7"
    },
    {
      title: "SBM Toilet",
      description: "Public sanitation facility (Swachh Bharat Mission)",
      url: "https://maps.app.goo.gl/HVi4WY7xUQDbncAk6"
    },
    {
      title: "Railway Senior Secondary School",
      description: "School run by Indian Railways in Erode",
      url: "https://maps.app.goo.gl/brhKhBJjDHukj5yN6"
    },
    {
      title: "Erode Railway Sub Post Office",
      description: "Postal facility at or near Erode Junction",
      url: "https://maps.app.goo.gl/MgEpzDurtTaCdHHc6"
    },
    {
      title: "Railway Quarters",
      description: "Residential quarters for railway staff",
      url: "https://maps.app.goo.gl/PGXhMa48Ad5ont3g6"
    },
    {
      title: "Railway Electricity Substation",
      description: "Power substation serving the railway infrastructure",
      url: "https://maps.app.goo.gl/QUtUaZpWDYuvCeAF9"
    }
  ]
};


const services = [
  {
    icon: Clock,
    title: '24/7 Assistance',
    description: 'Round-the-clock customer support available at all major stations'
  },
  {
    icon: Wifi,
    title: 'Free Wi-Fi',
    description: 'High-speed internet access available across all platforms'
  },
  {
    icon: Coffee,
    title: 'Premium Lounges',
    description: 'Comfortable waiting areas with refreshments and amenities'
  },
  {
    icon: ShoppingBag,
    title: 'Shopping',
    description: 'Retail outlets for travel essentials and souvenirs'
  },
  {
    icon: Briefcase,
    title: 'Porter Services',
    description: 'Professional luggage handling services available'
  }
];

const helpInfo = {
  emergency: {
    title: 'Emergency Contacts',
    contacts: [
      { type: 'Railway Police', number: '1800-111-222' },
      { type: 'Medical Emergency', number: '108' },
      { type: 'Station Manager', number: '1800-333-444' }
    ]
  },
  support: {
    title: 'Customer Support',
    description: '24/7 helpline for general inquiries and assistance',
    number: '1800-123-4567',
    email: 'support@railwaynav.com'
  },
  locations: {
    title: 'Help Desk Locations',
    points: [
      'Main Concourse - Near Platform 1',
      'Information Center - Ground Floor',
      'Customer Service Center - First Floor'
    ]
  }
};

function Navigation({ currentStation, activeTab, onTabChange }: NavigationProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const facilities = stationFacilities[currentStation] || [];

  const filteredFacilities = facilities.filter(facility =>
    facility.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    facility.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFacilitySelect = (url: string) => {
    window.open(url, '_blank');
  };

  const renderFacilities = () => (
    <>
      <input
        type="text"
        placeholder="Search facilities..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFacilities.map((facility, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all cursor-pointer"
            onClick={() => handleFacilitySelect(facility.url)}
          >
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-orange-50 rounded-lg">
                <MapPin className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {facility.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredFacilities.length === 0 && (
        <p className="text-gray-500 mt-6 text-center">No facilities found.</p>
      )}
    </>
  );

  const renderServices = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-orange-50 rounded-lg">
              <service.icon className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibol
d text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderHelp = () => (
    <div className="space-y-8">
      <div className="bg-red-50 rounded-lg p-6 border border-red-100">
        <h3 className="text-xl font-semibold text-red-800 mb-4">{helpInfo.emergency.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {helpInfo.emergency.contacts.map((contact, index) => (
            <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg">
              <Phone className="h-5 w-5 text-red-600" />
              <div>
                <p className="text-sm text-gray-600">{contact.type}</p>
                <p className="font-semibold text-gray-900">{contact.number}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">{helpInfo.support.title}</h3>
        <div className="space-y-4">
          <p className="text-gray-700">{helpInfo.support.description}</p>
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-blue-600" />
              <span className="font-semibold">{helpInfo.support.number}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-600" />
              <span className="font-semibold">{helpInfo.support.email}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg p-6 border border-green-100">
        <h3 className="text-xl font-semibold text-green-800 mb-4">{helpInfo.locations.title}</h3>
        <div className="space-y-3">
          {helpInfo.locations.points.map((point, index) => (
            <div key={index} className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-green-600" />
              <span className="text-gray-700">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex space-x-4 mb-6 border-b">
          <button
            className={`pb-4 px-4 ${activeTab === 'facilities' ? 'border-b-2 border-orange-500 text-orange-600' : 'text-gray-500'}`}
            onClick={() => onTabChange('facilities')}
          >
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Facilities</span>
            </div>
          </button>
          <button
            className={`pb-4 px-4 ${activeTab === 'services' ? 'border-b-2 border-orange-500 text-orange-600' : 'text-gray-500'}`}
            onClick={() => onTabChange('services')}
          >
            <div className="flex items-center space-x-2">
              <Wrench className="h-5 w-5" />
              <span>Services</span>
            </div>
          </button>
          <button
            className={`pb-4 px-4 ${activeTab === 'help' ? 'border-b-2 border-orange-500 text-orange-600' : 'text-gray-500'}`}
            onClick={() => onTabChange('help')}
          >
            <div className="flex items-center space-x-2">
              <HelpCircle className="h-5 w-5" />
              <span>Help</span>
            </div>
          </button>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {currentStation}
        </h2>

        {activeTab === 'facilities' && renderFacilities()}
        {activeTab === 'services' && renderServices()}
        {activeTab === 'help' && renderHelp()}
      </div>
    </div>
  );
}

export default Navigation;
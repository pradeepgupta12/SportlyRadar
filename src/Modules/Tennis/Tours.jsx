import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Calendar, MapPin, DollarSign, ChevronRight } from 'lucide-react';

const Tours = () => {
  const [selectedTour, setSelectedTour] = useState('atp');

  const tourTypes = [
    { id: 'atp', label: 'ATP Tour (Men)' },
    { id: 'wta', label: 'WTA Tour (Women)' }
  ];

  const atpTournaments = [
    {
      id: 'atp-finals',
      name: 'ATP Finals',
      category: 'Year-End Championship',
      location: 'Turin, Italy',
      surface: 'Hard (Indoor)',
      month: 'November',
      prize: '$15 Million',
      points: '1500',
      participants: 8,
      description: 'The season-ending championship featuring the top 8 singles players and doubles teams.'
    },
    {
      id: 'indian-wells',
      name: 'BNP Paribas Open',
      category: 'ATP Masters 1000',
      location: 'Indian Wells, USA',
      surface: 'Hard',
      month: 'March',
      prize: '$8.8 Million',
      points: '1000',
      participants: 96,
      description: 'Also known as the "fifth Grand Slam" due to its prestige and large draw.'
    },
    {
      id: 'miami-open',
      name: 'Miami Open',
      category: 'ATP Masters 1000',
      location: 'Miami, USA',
      surface: 'Hard',
      month: 'March-April',
      prize: '$8.8 Million',
      points: '1000',
      participants: 96,
      description: 'One of the premier hard court tournaments held annually in South Florida.'
    },
    {
      id: 'monte-carlo',
      name: 'Monte-Carlo Masters',
      category: 'ATP Masters 1000',
      location: 'Monte Carlo, Monaco',
      surface: 'Clay',
      month: 'April',
      prize: '€5.2 Million',
      points: '1000',
      participants: 56,
      description: 'The first clay court Masters 1000 event of the season.'
    },
    {
      id: 'madrid',
      name: 'Madrid Open',
      category: 'ATP Masters 1000',
      location: 'Madrid, Spain',
      surface: 'Clay',
      month: 'April-May',
      prize: '€7.7 Million',
      points: '1000',
      participants: 56,
      description: 'Held at the Caja Mágica, known for its altitude affecting play.'
    },
    {
      id: 'rome',
      name: 'Italian Open',
      category: 'ATP Masters 1000',
      location: 'Rome, Italy',
      surface: 'Clay',
      month: 'May',
      prize: '€7.4 Million',
      points: '1000',
      participants: 56,
      description: 'A key clay court event leading up to the French Open.'
    },
    {
      id: 'canada',
      name: 'Canadian Open',
      category: 'ATP Masters 1000',
      location: 'Toronto/Montreal, Canada',
      surface: 'Hard',
      month: 'August',
      prize: '$6.8 Million',
      points: '1000',
      participants: 56,
      description: 'Alternates between Toronto and Montreal each year.'
    },
    {
      id: 'cincinnati',
      name: 'Cincinnati Masters',
      category: 'ATP Masters 1000',
      location: 'Cincinnati, USA',
      surface: 'Hard',
      month: 'August',
      prize: '$6.8 Million',
      points: '1000',
      participants: 56,
      description: 'The last major tournament before the US Open.'
    },
    {
      id: 'shanghai',
      name: 'Shanghai Masters',
      category: 'ATP Masters 1000',
      location: 'Shanghai, China',
      surface: 'Hard',
      month: 'October',
      prize: '$8.8 Million',
      points: '1000',
      participants: 56,
      description: 'The only Masters 1000 event held in Asia.'
    },
    {
      id: 'paris',
      name: 'Paris Masters',
      category: 'ATP Masters 1000',
      location: 'Paris, France',
      surface: 'Hard (Indoor)',
      month: 'October-November',
      prize: '€5.4 Million',
      points: '1000',
      participants: 56,
      description: 'The final Masters 1000 event before the ATP Finals.'
    }
  ];

  const wtaTournaments = [
    {
      id: 'wta-finals',
      name: 'WTA Finals',
      category: 'Year-End Championship',
      location: 'Riyadh, Saudi Arabia',
      surface: 'Hard (Indoor)',
      month: 'November',
      prize: '$15 Million',
      points: '1500',
      participants: 8,
      description: 'The season-ending championship featuring the top 8 singles players and doubles teams.'
    },
    {
      id: 'indian-wells-wta',
      name: 'BNP Paribas Open',
      category: 'WTA 1000',
      location: 'Indian Wells, USA',
      surface: 'Hard',
      month: 'March',
      prize: '$8.8 Million',
      points: '1000',
      participants: 96,
      description: 'One of the most prestigious combined ATP/WTA events.'
    },
    {
      id: 'miami-open-wta',
      name: 'Miami Open',
      category: 'WTA 1000',
      location: 'Miami, USA',
      surface: 'Hard',
      month: 'March-April',
      prize: '$8.8 Million',
      points: '1000',
      participants: 96,
      description: 'The Sunshine Double with Indian Wells, held in South Florida.'
    },
    {
      id: 'madrid-wta',
      name: 'Madrid Open',
      category: 'WTA 1000',
      location: 'Madrid, Spain',
      surface: 'Clay',
      month: 'April-May',
      prize: '€7.7 Million',
      points: '1000',
      participants: 56,
      description: 'A key clay court event in the European spring season.'
    },
    {
      id: 'rome-wta',
      name: 'Italian Open',
      category: 'WTA 1000',
      location: 'Rome, Italy',
      surface: 'Clay',
      month: 'May',
      prize: '€7.4 Million',
      points: '1000',
      participants: 56,
      description: 'The premier clay court event before the French Open.'
    },
    {
      id: 'dubai',
      name: 'Dubai Tennis Championships',
      category: 'WTA 1000',
      location: 'Dubai, UAE',
      surface: 'Hard',
      month: 'February',
      prize: '$3 Million',
      points: '1000',
      participants: 48,
      description: 'A prestigious Middle East tournament.'
    },
    {
      id: 'canada-wta',
      name: 'Canadian Open',
      category: 'WTA 1000',
      location: 'Toronto/Montreal, Canada',
      surface: 'Hard',
      month: 'August',
      prize: '$2.7 Million',
      points: '1000',
      participants: 56,
      description: 'Part of the North American hard court swing.'
    },
    {
      id: 'cincinnati-wta',
      name: 'Cincinnati Open',
      category: 'WTA 1000',
      location: 'Cincinnati, USA',
      surface: 'Hard',
      month: 'August',
      prize: '$2.7 Million',
      points: '1000',
      participants: 56,
      description: 'The final tune-up before the US Open.'
    },
    {
      id: 'beijing',
      name: 'China Open',
      category: 'WTA 1000',
      location: 'Beijing, China',
      surface: 'Hard',
      month: 'September-October',
      prize: '$8.2 Million',
      points: '1000',
      participants: 64,
      description: 'One of the most important tournaments in Asia.'
    },
    {
      id: 'guadalajara',
      name: 'Guadalajara Open',
      category: 'WTA 1000',
      location: 'Guadalajara, Mexico',
      surface: 'Hard',
      month: 'September',
      prize: '$2.5 Million',
      points: '1000',
      participants: 32,
      description: 'The newest addition to the WTA 1000 series.'
    }
  ];

  const currentTournaments = selectedTour === 'atp' ? atpTournaments : wtaTournaments;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <Trophy className="h-10 w-10" />
            <h1 className="text-4xl font-bold">ATP & WTA Tours</h1>
          </div>
          <p className="text-lg opacity-90">Explore the world's premier professional tennis circuits</p>
        </div>
      </div>

      {/* Tour Type Selector */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-3">
          {tourTypes.map((tour) => (
            <button
              key={tour.id}
              onClick={() => setSelectedTour(tour.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedTour === tour.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tour.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tournament Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {currentTournaments.map((tournament) => (
            <Link
              key={tournament.id}
              to={`/tennis/tour/${tournament.id}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                    {tournament.name}
                  </h3>
                  <span className="inline-block text-sm font-medium px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                    {tournament.category}
                  </span>
                </div>
                <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>

              <p className="text-gray-600 mb-4">{tournament.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="text-sm font-medium text-gray-800">{tournament.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500">When</p>
                    <p className="text-sm font-medium text-gray-800">{tournament.month}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-semibold text-gray-800">{tournament.prize}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm font-semibold text-gray-800">{tournament.points} pts</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-4">
            About the {selectedTour === 'atp' ? 'ATP' : 'WTA'} Tour
          </h2>
          <div className="prose max-w-none text-gray-600 space-y-4">
            {selectedTour === 'atp' ? (
              <>
                <p>
                  The ATP Tour is the worldwide top-tier tennis tour for men organized by the Association of Tennis Professionals. 
                  The tour includes ATP Masters 1000, ATP 500, and ATP 250 events, along with the Grand Slams and ATP Finals.
                </p>
                <p>
                  <strong>Masters 1000 Events:</strong> These are the most prestigious tournaments after the Grand Slams, 
                  offering 1000 ranking points to the champion. Top players are required to participate in all nine Masters 1000 events.
                </p>
                <p>
                  <strong>ATP Finals:</strong> The season-ending championship features only the top 8 singles players and doubles 
                  teams who have qualified based on their performance throughout the year.
                </p>
              </>
            ) : (
              <>
                <p>
                  The WTA Tour is the elite professional tennis tour for women organized by the Women's Tennis Association. 
                  It features WTA 1000, WTA 500, and WTA 250 tournaments, alongside the Grand Slams and WTA Finals.
                </p>
                <p>
                  <strong>WTA 1000 Events:</strong> The premier tier of women's professional tennis below Grand Slams, 
                  offering 1000 ranking points. These tournaments feature the strongest player fields and largest prize pools.
                </p>
                <p>
                  <strong>WTA Finals:</strong> The year-end championship brings together the top 8 singles players and 
                  8 doubles teams, competing for one of the sport's most prestigious titles.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
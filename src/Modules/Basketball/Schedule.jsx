// import React, { useState } from 'react';
// import { Calendar, MapPin, Clock } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Schedule = () => {
//   const [selectedLeague, setSelectedLeague] = useState('nba');

//   const scheduleData = {
//     nba: [
//       {
//         date: '2026-01-04',
//         matches: [
//           {
//             id: 'nba-1',
//             time: '19:00',
//             home: 'Boston Celtics',
//             away: 'Milwaukee Bucks',
//             venue: 'TD Garden',
//             city: 'Boston'
//           },
//           {
//             id: 'nba-2',
//             time: '20:30',
//             home: 'LA Lakers',
//             away: 'Golden State Warriors',
//             venue: 'Crypto.com Arena',
//             city: 'Los Angeles'
//           },
//           {
//             id: 'nba-3',
//             time: '19:30',
//             home: 'Miami Heat',
//             away: 'Philadelphia 76ers',
//             venue: 'Kaseya Center',
//             city: 'Miami'
//           }
//         ]
//       },
//       {
//         date: '2026-01-05',
//         matches: [
//           {
//             id: 'nba-4',
//             time: '18:00',
//             home: 'Denver Nuggets',
//             away: 'Phoenix Suns',
//             venue: 'Ball Arena',
//             city: 'Denver'
//           },
//           {
//             id: 'nba-5',
//             time: '19:00',
//             home: 'Dallas Mavericks',
//             away: 'Oklahoma City Thunder',
//             venue: 'American Airlines Center',
//             city: 'Dallas'
//           }
//         ]
//       },
//       {
//         date: '2026-01-06',
//         matches: [
//           {
//             id: 'nba-6',
//             time: '19:30',
//             home: 'Brooklyn Nets',
//             away: 'Cleveland Cavaliers',
//             venue: 'Barclays Center',
//             city: 'Brooklyn'
//           },
//           {
//             id: 'nba-7',
//             time: '20:00',
//             home: 'Portland Trail Blazers',
//             away: 'Sacramento Kings',
//             venue: 'Moda Center',
//             city: 'Portland'
//           }
//         ]
//       }
//     ],
//     wnba: [
//       {
//         date: '2025-06-13',
//         matches: [
//           {
//             id: 'wnba-1',
//             time: '19:00',
//             home: 'New York Liberty',
//             away: 'Chicago Sky',
//             venue: 'Barclays Center',
//             city: 'Brooklyn'
//           },
//           {
//             id: 'wnba-2',
//             time: '21:00',
//             home: 'Las Vegas Aces',
//             away: 'Phoenix Mercury',
//             venue: 'Michelob ULTRA Arena',
//             city: 'Las Vegas'
//           }
//         ]
//       },
//       {
//         date: '2025-06-14',
//         matches: [
//           {
//             id: 'wnba-3',
//             time: '19:00',
//             home: 'Connecticut Sun',
//             away: 'Indiana Fever',
//             venue: 'Mohegan Sun Arena',
//             city: 'Uncasville'
//           },
//           {
//             id: 'wnba-4',
//             time: '20:00',
//             home: 'Seattle Storm',
//             away: 'Minnesota Lynx',
//             venue: 'Climate Pledge Arena',
//             city: 'Seattle'
//           }
//         ]
//       }
//     ]
//   };

//   const schedule = scheduleData[selectedLeague];

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="text-3xl md:text-5xl font-bold mb-3">Match Schedule</h1>
//           <p className="text-lg text-orange-100">Upcoming basketball games and fixtures</p>
//         </div>
//       </div>

//       {/* League Selector */}
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="flex gap-4 mb-8">
//           <button
//             onClick={() => setSelectedLeague('nba')}
//             className={`px-6 py-3 rounded-lg font-semibold transition-all ${
//               selectedLeague === 'nba'
//                 ? 'bg-orange-600 text-white shadow-lg'
//                 : 'bg-white text-gray-700 hover:bg-orange-50'
//             }`}
//           >
//             NBA
//           </button>
//           <button
//             onClick={() => setSelectedLeague('wnba')}
//             className={`px-6 py-3 rounded-lg font-semibold transition-all ${
//               selectedLeague === 'wnba'
//                 ? 'bg-orange-600 text-white shadow-lg'
//                 : 'bg-white text-gray-700 hover:bg-orange-50'
//             }`}
//           >
//             WNBA
//           </button>
//         </div>

//         {/* Schedule by Date */}
//         <div className="space-y-8">
//           {schedule.map((day, dayIdx) => (
//             <div key={dayIdx} className="bg-white rounded-xl shadow-lg overflow-hidden">
//               {/* Date Header */}
//               <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4">
//                 <div className="flex items-center gap-3">
//                   <Calendar className="w-6 h-6" />
//                   <h2 className="text-xl font-bold">{formatDate(day.date)}</h2>
//                 </div>
//               </div>

//               {/* Matches */}
//               <div className="p-6">
//                 <div className="space-y-4">
//                   {day.matches.map((match) => (
//                     <Link
//                       key={match.id}
//                       to={`/basketball-scorecard/${match.id}`}
//                       className="block border-2 border-gray-200 rounded-lg p-4 hover:border-orange-500 hover:shadow-md transition-all"
//                     >
//                       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                         {/* Teams */}
//                         <div className="flex-1">
//                           <div className="flex items-center justify-between mb-2">
//                             <span className="font-semibold text-gray-800 text-lg">{match.home}</span>
//                             <span className="text-gray-400 font-medium mx-4">vs</span>
//                           </div>
//                           <div className="flex items-center justify-between">
//                             <span className="font-semibold text-gray-800 text-lg">{match.away}</span>
//                           </div>
//                         </div>

//                         {/* Match Info */}
//                         <div className="flex flex-col md:items-end gap-2">
//                           <div className="flex items-center gap-2 text-sm text-gray-600">
//                             <Clock className="w-4 h-4" />
//                             <span className="font-medium">{match.time} EST</span>
//                           </div>
//                           <div className="flex items-center gap-2 text-sm text-gray-600">
//                             <MapPin className="w-4 h-4" />
//                             <span>{match.venue}, {match.city}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Schedule;


import React, { useState } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Schedule = () => {
  const [selectedLeague, setSelectedLeague] = useState('nba');

  const scheduleData = {
    nba: [
      {
        date: '2026-01-04',
        matches: [
          {
            id: 'nba-1001',
            time: '3:00 PM',
            home: 'Orlando Magic',
            away: 'Indiana Pacers',
            venue: 'Kia Center',
            city: 'Orlando, FL'
          },
          {
            id: 'nba-1002',
            time: 'TBD',
            home: 'Brooklyn Nets',
            away: 'Denver Nuggets',
            venue: 'Barclays Center',
            city: 'Brooklyn, NY'
          },
          // Add more if available, but from data, these are highlighted
        ]
      },
      {
        date: '2026-01-05',
        matches: [
          {
            id: 'nba-1003',
            time: 'TBD',
            home: 'Philadelphia 76ers',
            away: 'Denver Nuggets',
            venue: 'Wells Fargo Center',
            city: 'Philadelphia, PA'
          },
          // Other games likely, but highlighted this one
        ]
      },
      {
        date: '2026-01-06',
        matches: [
          {
            id: 'nba-1004',
            time: '8:00 PM',
            home: 'Minnesota Timberwolves',
            away: 'Miami Heat',
            venue: 'Target Center',
            city: 'Minneapolis, MN'
          },
        ]
      }
    ],
    wnba: [
      // Keeping placeholder as season is off (May-Sep)
      {
        date: '2026-05-15',
        matches: [
          {
            id: 'wnba-1',
            time: '7:00 PM',
            home: 'Las Vegas Aces',
            away: 'Phoenix Mercury',
            venue: 'Michelob ULTRA Arena',
            city: 'Las Vegas'
          },
          {
            id: 'wnba-2',
            time: '8:00 PM',
            home: 'Seattle Storm',
            away: 'Los Angeles Sparks',
            venue: 'Climate Pledge Arena',
            city: 'Seattle'
          }
        ]
      },
      {
        date: '2026-05-16',
        matches: [
          {
            id: 'wnba-3',
            time: '7:30 PM',
            home: 'New York Liberty',
            away: 'Indiana Fever',
            venue: 'Barclays Center',
            city: 'Brooklyn'
          }
        ]
      }
    ]
  };

  const schedule = scheduleData[selectedLeague];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 ">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white   py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-bold mb-2">🏀 Basketball Schedule</h1>
          <p className="text-orange-100">Upcoming NBA & WNBA fixtures</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* League Selector */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <div className="flex gap-3">
            <button
              onClick={() => setSelectedLeague('nba')}
              className={`flex-1 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                selectedLeague === 'nba' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              NBA
            </button>
            <button
              onClick={() => setSelectedLeague('wnba')}
              className={`flex-1 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                selectedLeague === 'wnba' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              WNBA
            </button>
          </div>
        </div>

        {/* Schedule */}
        <div className="space-y-6">
          {schedule.map((day) => (
            <div key={day.date} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <h2 className="text-lg font-semibold">{formatDate(day.date)}</h2>
                </div>
              </div>

              <div className="p-5 space-y-4">
                {day.matches.map((match) => (
                  <Link
                    key={match.id}
                    to={`/basketball-scorecard/${match.id}`}
                    className="block bg-gray-50 rounded-lg p-4 hover:bg-orange-50 transition-colors"
                  >
                    <div className="grid grid-cols-3 items-center gap-4">
                      {/* Home */}
                      <div className="text-left">
                        <p className="font-semibold text-gray-800">{match.home}</p>
                      </div>

                      {/* Center */}
                      <div className="text-center">
                        <p className="text-lg font-bold text-gray-400">VS</p>
                        <p className="text-xs text-gray-600 mt-1">
                          <Clock className="w-4 h-4 inline" /> {match.time} ET
                        </p>
                      </div>

                      {/* Away */}
                      <div className="text-right">
                        <p className="font-semibold text-gray-800">{match.away}</p>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-600 flex items-center gap-1 justify-center">
                      <MapPin className="w-4 h-4" />
                      {match.venue}, {match.city}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
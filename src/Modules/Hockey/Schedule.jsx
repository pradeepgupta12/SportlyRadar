// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Schedule = () => {
//   const [selectedMonth, setSelectedMonth] = useState('june');

//   const matches = {
//     june: [
//       {
//         id: 1,
//         date: '2025-06-03',
//         time: '14:00',
//         team1: 'Netherlands',
//         team2: 'Argentina',
//         flag1: '🇳🇱',
//         flag2: '🇦🇷',
//         venue: 'Wagener Stadium',
//         city: 'Amstelveen',
//         series: 'Netherlands vs Argentina 2025',
//         status: 'Live',
//       },
//       {
//         id: 2,
//         date: '2025-06-05',
//         time: '15:00',
//         team1: 'Netherlands',
//         team2: 'Germany',
//         flag1: '🇳🇱',
//         flag2: '🇩🇪',
//         venue: 'Wagener Stadium',
//         city: 'Amsterdam',
//         series: 'FIH Pro League',
//         status: 'Upcoming',
//       },
//       {
//         id: 3,
//         date: '2025-06-06',
//         time: '18:00',
//         team1: 'Belgium',
//         team2: 'Australia',
//         flag1: '🇧🇪',
//         flag2: '🇦🇺',
//         venue: 'Royal Leopold Club',
//         city: 'Brussels',
//         series: 'FIH Pro League',
//         status: 'Upcoming',
//       },
//       {
//         id: 4,
//         date: '2025-06-07',
//         time: '16:30',
//         team1: 'India',
//         team2: 'Spain',
//         flag1: '🇮🇳',
//         flag2: '🇪🇸',
//         venue: 'Major Dhyan Chand Stadium',
//         city: 'New Delhi',
//         series: 'International Friendly',
//         status: 'Upcoming',
//       },
//       {
//         id: 5,
//         date: '2025-06-10',
//         time: '17:00',
//         team1: 'Argentina',
//         team2: 'Belgium',
//         flag1: '🇦🇷',
//         flag2: '🇧🇪',
//         venue: 'CeNARD',
//         city: 'Buenos Aires',
//         series: 'FIH Pro League',
//         status: 'Upcoming',
//       },
//     ],
//     july: [
//       {
//         id: 6,
//         date: '2025-07-02',
//         time: '19:00',
//         team1: 'Australia',
//         team2: 'India',
//         flag1: '🇦🇺',
//         flag2: '🇮🇳',
//         venue: 'Perth Hockey Stadium',
//         city: 'Perth',
//         series: 'FIH Pro League',
//         status: 'Upcoming',
//       },
//       {
//         id: 7,
//         date: '2025-07-05',
//         time: '14:30',
//         team1: 'Germany',
//         team2: 'Netherlands',
//         flag1: '🇩🇪',
//         flag2: '🇳🇱',
//         venue: 'Uhlenhorst Club',
//         city: 'Mülheim',
//         series: 'FIH Pro League',
//         status: 'Upcoming',
//       },
//       {
//         id: 8,
//         date: '2025-07-08',
//         time: '16:00',
//         team1: 'England',
//         team2: 'Spain',
//         flag1: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
//         flag2: '🇪🇸',
//         venue: 'Lee Valley Hockey Centre',
//         city: 'London',
//         series: 'FIH Pro League',
//         status: 'Upcoming',
//       },
//     ],
//   };

//   const months = [
//     { id: 'june', label: 'June 2025' },
//     { id: 'july', label: 'July 2025' },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
//             Hockey Schedule
//           </h1>
//           <p className="text-gray-600">
//             Upcoming international hockey fixtures
//           </p>
//         </div>

//         {/* Month Filter */}
//         <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
//           <div className="flex flex-wrap gap-3">
//             {months.map((month) => (
//               <button
//                 key={month.id}
//                 onClick={() => setSelectedMonth(month.id)}
//                 className={`px-6 py-3 rounded-xl font-semibold transition-all ${
//                   selectedMonth === month.id
//                     ? 'bg-blue-600 text-white shadow-lg'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {month.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Matches List */}
//         <div className="space-y-4">
//           {matches[selectedMonth].map((match) => (
//             <div
//               key={match.id}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
//             >
//               <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 md:px-6 py-3">
//                 <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
//                   <div>
//                     <p className="text-white/90 text-sm font-medium">
//                       {match.series}
//                     </p>
//                   </div>
//                   <span
//                     className={`px-4 py-1.5 rounded-full text-xs font-bold ${
//                       match.status === 'Live'
//                         ? 'bg-red-500 text-white animate-pulse'
//                         : 'bg-white/20 text-white'
//                     }`}
//                   >
//                     {match.status}
//                   </span>
//                 </div>
//               </div>

//               <div className="p-4 md:p-6">
//                 <div className="grid md:grid-cols-3 gap-6 items-center">
//                   {/* Team 1 */}
//                   <div className="flex items-center gap-4">
//                     <span className="text-4xl md:text-5xl">{match.flag1}</span>
//                     <div className="flex-1">
//                       <h3 className="font-bold text-base md:text-lg text-gray-900">
//                         {match.team1}
//                       </h3>
//                     </div>
//                   </div>

//                   {/* VS */}
//                   <div className="text-center">
//                     <div className="text-2xl md:text-3xl font-bold text-gray-400">
//                       VS
//                     </div>
//                     <p className="text-sm text-gray-600 mt-1">
//                       {match.date} • {match.time}
//                     </p>
//                   </div>

//                   {/* Team 2 */}
//                   <div className="flex items-center gap-4 md:flex-row-reverse">
//                     <span className="text-4xl md:text-5xl">{match.flag2}</span>
//                     <div className="flex-1 md:text-right">
//                       <h3 className="font-bold text-base md:text-lg text-gray-900">
//                         {match.team2}
//                       </h3>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-6 pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//                   <div className="text-sm text-gray-600">
//                     <p className="font-medium">{match.venue}</p>
//                     <p className="text-xs text-gray-500">{match.city}</p>
//                   </div>
//                   {match.status === 'Live' ? (
//                     <Link
//                       to={`/hockey/match/${match.id}`}  // ← Yahan correction ki gayi hai
//                       className="w-full sm:w-auto px-6 py-2.5 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
//                     >
//                       Watch Live
//                     </Link>
//                   ) : (
//                     <button className="w-full sm:w-auto px-6 py-2.5 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
//                       Set Reminder
//                     </button>
//                   )}
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
import { Link } from 'react-router-dom';

const Schedule = () => {
  const [selectedMonth, setSelectedMonth] = useState('june');

  const matches = {
    june: [
      {
        id: 1,
        date: '2025-06-03',
        time: '14:00',
        team1: 'Netherlands',
        team2: 'Argentina',
        flag1: '🇳🇱',
        flag2: '🇦🇷',
        venue: 'Wagener Stadium',
        city: 'Amstelveen',
        series: 'Netherlands vs Argentina 2025',
        status: 'Live',
      },
      {
        id: 2,
        date: '2025-06-05',
        time: '15:00',
        team1: 'Netherlands',
        team2: 'Germany',
        flag1: '🇳🇱',
        flag2: '🇩🇪',
        venue: 'Wagener Stadium',
        city: 'Amsterdam',
        series: 'FIH Pro League',
        status: 'Upcoming',
      },
      {
        id: 3,
        date: '2025-06-06',
        time: '18:00',
        team1: 'Belgium',
        team2: 'Australia',
        flag1: '🇧🇪',
        flag2: '🇦🇺',
        venue: 'Royal Leopold Club',
        city: 'Brussels',
        series: 'FIH Pro League',
        status: 'Upcoming',
      },
      {
        id: 4,
        date: '2025-06-07',
        time: '16:30',
        team1: 'India',
        team2: 'Spain',
        flag1: '🇮🇳',
        flag2: '🇪🇸',
        venue: 'Major Dhyan Chand Stadium',
        city: 'New Delhi',
        series: 'International Friendly',
        status: 'Upcoming',
      },
      {
        id: 5,
        date: '2025-06-10',
        time: '17:00',
        team1: 'Argentina',
        team2: 'Belgium',
        flag1: '🇦🇷',
        flag2: '🇧🇪',
        venue: 'CeNARD',
        city: 'Buenos Aires',
        series: 'FIH Pro League',
        status: 'Upcoming',
      },
    ],
    july: [
      {
        id: 6,
        date: '2025-07-02',
        time: '19:00',
        team1: 'Australia',
        team2: 'India',
        flag1: '🇦🇺',
        flag2: '🇮🇳',
        venue: 'Perth Hockey Stadium',
        city: 'Perth',
        series: 'FIH Pro League',
        status: 'Upcoming',
      },
      {
        id: 7,
        date: '2025-07-05',
        time: '14:30',
        team1: 'Germany',
        team2: 'Netherlands',
        flag1: '🇩🇪',
        flag2: '🇳🇱',
        venue: 'Uhlenhorst Club',
        city: 'Mülheim',
        series: 'FIH Pro League',
        status: 'Upcoming',
      },
      {
        id: 8,
        date: '2025-07-08',
        time: '16:00',
        team1: 'England',
        team2: 'Spain',
        flag1: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
        flag2: '🇪🇸',
        venue: 'Lee Valley Hockey Centre',
        city: 'London',
        series: 'FIH Pro League',
        status: 'Upcoming',
      },
    ],
  };

  const months = [
    { id: 'june', label: 'June 2025' },
    { id: 'july', label: 'July 2025' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
            Hockey Schedule
          </h1>
          <p className="text-gray-600">
            Upcoming international hockey fixtures
          </p>
        </div>

        {/* Month Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex flex-wrap gap-3">
            {months.map((month) => (
              <button
                key={month.id}
                onClick={() => setSelectedMonth(month.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedMonth === month.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {month.label}
              </button>
            ))}
          </div>
        </div>

        {/* Matches List */}
        <div className="space-y-4">
          {matches[selectedMonth].map((match) => (
            <div
              key={match.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 md:px-6 py-3">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div>
                    <p className="text-white/90 text-sm font-medium">
                      {match.series}
                    </p>
                  </div>
                  <span
                    className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                      match.status === 'Live'
                        ? 'bg-red-500 text-white animate-pulse'
                        : 'bg-white/20 text-white'
                    }`}
                  >
                    {match.status}
                  </span>
                </div>
              </div>

              <div className="p-4 md:p-6">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  {/* Team 1 */}
                  <div className="flex items-center gap-4">
                    <span className="text-4xl md:text-5xl">{match.flag1}</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-base md:text-lg text-gray-900">
                        {match.team1}
                      </h3>
                    </div>
                  </div>

                  {/* VS */}
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-gray-400">
                      VS
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {match.date} • {match.time}
                    </p>
                  </div>

                  {/* Team 2 */}
                  <div className="flex items-center gap-4 md:flex-row-reverse">
                    <span className="text-4xl md:text-5xl">{match.flag2}</span>
                    <div className="flex-1 md:text-right">
                      <h3 className="font-bold text-base md:text-lg text-gray-900">
                        {match.team2}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-sm text-gray-600">
                    <p className="font-medium">{match.venue}</p>
                    <p className="text-xs text-gray-500">{match.city}</p>
                  </div>

                  {match.status === 'Live' ? (
                    <Link
                      to={`/hockey/scorecard/${match.id}`}
                      className="w-full sm:w-auto px-6 py-2.5 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
                    >
                      Watch Live
                    </Link>
                  ) : (
                    <button className="w-full sm:w-auto px-6 py-2.5 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                      Set Reminder
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;



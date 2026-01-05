// import React, { useState } from 'react';

// const Stats = () => {
//   const [selectedStat, setSelectedStat] = useState('goals');

//   const overallStats = {
//     totalGoals: 2450,
//     matchesPlayed: 1280,
//     penaltyCorners: 5670,
//     avgGoalsPerMatch: 3.8,
//   };

//   const statsData = {
//     goals: [
//       { rank: 1, player: 'Thierry Brinkman', country: 'Netherlands', value: 18 },
//       { rank: 2, player: 'Tom Boon', country: 'Belgium', value: 16 },
//       { rank: 3, player: 'Blake Govers', country: 'Australia', value: 15 },
//       { rank: 4, player: 'Harmanpreet Singh', country: 'India', value: 14 },
//       { rank: 5, player: 'Gonzalo Peillat', country: 'Germany', value: 13 },
//     ],
//     assists: [
//       { rank: 1, player: 'Arthur van Doren', country: 'Belgium', value: 12 },
//       { rank: 2, player: 'Manpreet Singh', country: 'India', value: 11 },
//       { rank: 3, player: 'Aran Zalewski', country: 'Australia', value: 10 },
//       { rank: 4, player: 'Billy Bakker', country: 'Netherlands', value: 9 },
//       { rank: 5, player: 'Martin Haner', country: 'Germany', value: 8 },
//     ],
//     saves: [
//       { rank: 1, player: 'Vincent Vanasch', country: 'Belgium', value: 145 },
//       { rank: 2, player: 'PR Sreejesh', country: 'India', value: 138 },
//       { rank: 3, player: 'Pirmin Blaak', country: 'Netherlands', value: 132 },
//       { rank: 4, player: 'Andrew Charter', country: 'Australia', value: 128 },
//       { rank: 5, player: 'Tobias Walter', country: 'Germany', value: 120 },
//     ],
//   };

//   const statTabs = [
//     { id: 'goals', label: 'Top Scorers', icon: '⚽' },
//     { id: 'assists', label: 'Most Assists', icon: '🎯' },
//     { id: 'saves', label: 'Best Goalkeepers', icon: '🧤' },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
//             Hockey Statistics Corner
//           </h1>
//           <p className="text-gray-600">
//             Comprehensive hockey statistics and player records
//           </p>
//         </div>

//         {/* Overall Stats Cards */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all">
//             <div className="text-4xl mb-2">⚽</div>
//             <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
//               {overallStats.totalGoals.toLocaleString()}
//             </p>
//             <p className="text-gray-600 font-medium">Total Goals Scored</p>
//           </div>

//           <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all">
//             <div className="text-4xl mb-2">🏑</div>
//             <p className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
//               {overallStats.matchesPlayed.toLocaleString()}
//             </p>
//             <p className="text-gray-600 font-medium">Matches Played</p>
//           </div>

//           <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all">
//             <div className="text-4xl mb-2">🎯</div>
//             <p className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
//               {overallStats.penaltyCorners.toLocaleString()}
//             </p>
//             <p className="text-gray-600 font-medium">Penalty Corners</p>
//           </div>

//           <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all">
// <div className="text-4xl mb-2">📊</div>
// <p className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
// {overallStats.avgGoalsPerMatch}
// </p>
// <p className="text-gray-600 font-medium">Avg Goals/Match</p>
// </div>
// </div>
// {/* Stat Tabs */}
//     <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//       <div className="flex overflow-x-auto border-b">
//         {statTabs.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setSelectedStat(tab.id)}
//             className={`flex-1 min-w-[150px] px-6 py-4 font-semibold transition-colors flex items-center justify-center gap-2 ${
//               selectedStat === tab.id
//                 ? 'bg-blue-600 text-white'
//                 : 'text-gray-600 hover:bg-gray-50'
//             }`}
//           >
//             <span className="text-xl">{tab.icon}</span>
//             <span className="hidden sm:inline">{tab.label}</span>
//           </button>
//         ))}
//       </div>

//       {/* Stats Table */}
//       <div className="p-6">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="border-b-2 border-gray-200">
//                 <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">
//                   Rank
//                 </th>
//                 <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">
//                   Player
//                 </th>
//                 <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">
//                   Country
//                 </th>
//                 <th className="px-4 py-3 text-center text-sm font-bold text-gray-700">
//                   {selectedStat === 'goals'
//                     ? 'Goals'
//                     : selectedStat === 'assists'
//                     ? 'Assists'
//                     : 'Saves'}
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-100">
//               {statsData[selectedStat].map((stat) => (
//                 <tr
//                   key={stat.rank}
//                   className="hover:bg-blue-50 transition-colors"
//                 >
//                   <td className="px-4 py-4">
//                     <div
//                       className={`w-10 h-10 flex items-center justify-center rounded-full font-bold ${
//                         stat.rank === 1
//                           ? 'bg-yellow-400 text-yellow-900'
//                           : stat.rank === 2
//                           ? 'bg-gray-300 text-gray-700'
//                           : stat.rank === 3
//                           ? 'bg-orange-400 text-orange-900'
//                           : 'bg-blue-100 text-blue-600'
//                       }`}
//                     >
//                       {stat.rank}
//                     </div>
//                   </td>
//                   <td className="px-4 py-4 font-semibold text-gray-900">
//                     {stat.player}
//                   </td>
//                   <td className="px-4 py-4 text-gray-600">
//                     {stat.country}
//                   </td>
//                   <td className="px-4 py-4 text-center">
//                     <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 font-bold rounded-lg">
//                       {stat.value}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// );
// };
// export default Stats;

import React, { useState } from 'react';

const Stats = () => {
  const [selectedStat, setSelectedStat] = useState('goals');

  const overallStats = {
    totalGoals: 322, // Early season: 198 FG + 124 PC
    matchesPlayed: 80, // Approx early matches
    penaltyCorners: 567, // Placeholder, no exact data
    avgGoalsPerMatch: 4.0,
  };

  const statsData = {
    goals: [
      { rank: 1, player: 'Jip Janssen', country: 'Netherlands', value: 15 },
      { rank: 2, player: 'Blake Govers', country: 'Australia', value: 12 },
      { rank: 3, player: 'Harmanpreet Singh', country: 'India', value: 12 },
      { rank: 4, player: 'Thierry Brinkman', country: 'Netherlands', value: 10 },
      { rank: 5, player: 'Alexander Hendrickx', country: 'Belgium', value: 9 },
    ],
    assists: [
      { rank: 1, player: 'Victor Wegnez', country: 'Belgium', value: 10 },
      { rank: 2, player: 'Manpreet Singh', country: 'India', value: 9 },
      { rank: 3, player: 'Aran Zalewski', country: 'Australia', value: 8 },
      { rank: 4, player: 'Jorrit Croon', country: 'Netherlands', value: 8 },
      { rank: 5, player: 'Tom Craig', country: 'Australia', value: 7 },
    ],
    saves: [
      { rank: 1, player: 'Jean-Paul Danneberg', country: 'Germany', value: 142 },
      { rank: 2, player: 'Vincent Vanasch', country: 'Belgium', value: 138 },
      { rank: 3, player: 'PR Sreejesh', country: 'India', value: 135 },
      { rank: 4, player: 'Pirmin Blaak', country: 'Netherlands', value: 130 },
      { rank: 5, player: 'Andrew Charter', country: 'Australia', value: 125 },
    ],
  };

  const statTabs = [
    { id: 'goals', label: 'Top Scorers', icon: '⚽' },
    { id: 'assists', label: 'Most Assists', icon: '🎯' },
    { id: 'saves', label: 'Best Goalkeepers', icon: '🧤' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">🏑 Hockey Statistics</h1>
          <p className="text-gray-600 text-sm">FIH Pro League 2025-26 Season Stats</p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-5 text-center">
            <p className="text-3xl mb-1">⚽</p>
            <p className="text-2xl font-bold text-blue-600">{overallStats.totalGoals}</p>
            <p className="text-xs text-gray-600 mt-1">Total Goals</p>
          </div>
          <div className="bg-white rounded-lg shadow p-5 text-center">
            <p className="text-3xl mb-1">🏑</p>
            <p className="text-2xl font-bold text-green-600">{overallStats.matchesPlayed}</p>
            <p className="text-xs text-gray-600 mt-1">Matches Played</p>
          </div>
          <div className="bg-white rounded-lg shadow p-5 text-center">
            <p className="text-3xl mb-1">🎯</p>
            <p className="text-2xl font-bold text-purple-600">{overallStats.penaltyCorners}</p>
            <p className="text-xs text-gray-600 mt-1">Penalty Corners</p>
          </div>
          <div className="bg-white rounded-lg shadow p-5 text-center">
            <p className="text-3xl mb-1">📊</p>
            <p className="text-2xl font-bold text-orange-600">{overallStats.avgGoalsPerMatch}</p>
            <p className="text-xs text-gray-600 mt-1">Avg Goals/Match</p>
          </div>
        </div>

        {/* Tabs + Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex gap-3 overflow-x-auto border-b">
            {statTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedStat(tab.id)}
                className={`px-6 py-3.5 font-medium text-sm transition-all flex items-center gap-2 ${
                  selectedStat === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-5">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-4">Rank</th>
                  <th className="text-left py-3 px-4">Player</th>
                  <th className="text-left py-3 px-4">Country</th>
                  <th className="text-center py-3 px-4">
                    {selectedStat === 'goals' ? 'Goals' : selectedStat === 'assists' ? 'Assists' : 'Saves'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {statsData[selectedStat].map((stat) => (
                  <tr key={stat.rank} className="hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${
                        stat.rank === 1 ? 'bg-yellow-500' :
                        stat.rank === 2 ? 'bg-gray-400' :
                        stat.rank === 3 ? 'bg-orange-500' :
                        'bg-gray-600'
                      }`}>
                        {stat.rank}
                      </div>
                    </td>
                    <td className="py-3 px-4 font-medium">{stat.player}</td>
                    <td className="py-3 px-4 text-gray-600">{stat.country}</td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-bold rounded">
                        {stat.value}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
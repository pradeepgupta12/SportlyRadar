// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';

// const LeagueDetail = () => {
//   const { leagueId } = useParams();
//   const [activeTab, setActiveTab] = useState('overview');

//   // League Data
//   const leaguesData = {
//     1: {
//       id: 1,
//       name: 'FIH Pro League',
//       country: 'International',
//       logo: '🏑',
//       season: '2025-26',
//       description: 'The FIH Hockey Pro League is an international field hockey competition organized by the International Hockey Federation (FIH). It features the world\'s top national teams competing in a home-and-away format.',
//       founded: '2019',
//       teams: 9,
//       format: 'Round Robin',
//       standings: [
//         { rank: 1, team: 'Netherlands', flag: '🇳🇱', played: 16, won: 13, drawn: 2, lost: 1, gf: 52, ga: 18, gd: 34, points: 41 },
//         { rank: 2, team: 'Belgium', flag: '🇧🇪', played: 16, won: 12, drawn: 1, lost: 3, gf: 48, ga: 22, gd: 26, points: 37 },
//         { rank: 3, team: 'Australia', flag: '🇦🇺', played: 16, won: 11, drawn: 2, lost: 3, gf: 45, ga: 25, gd: 20, points: 35 },
//         { rank: 4, team: 'Germany', flag: '🇩🇪', played: 16, won: 10, drawn: 1, lost: 5, gf: 42, ga: 28, gd: 14, points: 31 },
//         { rank: 5, team: 'India', flag: '🇮🇳', played: 16, won: 9, drawn: 2, lost: 5, gf: 38, ga: 30, gd: 8, points: 29 },
//         { rank: 6, team: 'Argentina', flag: '🇦🇷', played: 16, won: 7, drawn: 1, lost: 8, gf: 32, ga: 35, gd: -3, points: 22 },
//         { rank: 7, team: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', played: 16, won: 5, drawn: 2, lost: 9, gf: 28, ga: 38, gd: -10, points: 17 },
//         { rank: 8, team: 'Spain', flag: '🇪🇸', played: 16, won: 3, drawn: 1, lost: 12, gf: 22, ga: 45, gd: -23, points: 10 },
//         { rank: 9, team: 'New Zealand', flag: '🇳🇿', played: 16, won: 2, drawn: 0, lost: 14, gf: 18, ga: 50, gd: -32, points: 6 },
//       ],
//       topScorers: [
//         { rank: 1, name: 'Thierry Brinkman', team: 'Netherlands', flag: '🇳🇱', goals: 12 },
//         { rank: 2, name: 'Tom Boon', team: 'Belgium', flag: '🇧🇪', goals: 11 },
//         { rank: 3, name: 'Blake Govers', team: 'Australia', flag: '🇦🇺', goals: 10 },
//         { rank: 4, name: 'Harmanpreet Singh', team: 'India', flag: '🇮🇳', goals: 9 },
//         { rank: 5, name: 'Gonzalo Peillat', team: 'Germany', flag: '🇩🇪', goals: 8 },
//       ],
//       recentMatches: [
//         { id: 1, date: '2025-06-01', team1: 'Netherlands', team2: 'Belgium', flag1: '🇳🇱', flag2: '🇧🇪', score: '3-2', status: 'Completed' },
//         { id: 2, date: '2025-05-28', team1: 'Australia', team2: 'India', flag1: '🇦🇺', flag2: '🇮🇳', score: '2-1', status: 'Completed' },
//         { id: 3, date: '2025-05-25', team1: 'Germany', team2: 'Argentina', flag1: '🇩🇪', flag2: '🇦🇷', score: '4-1', status: 'Completed' },
//         { id: 4, date: '2025-05-22', team1: 'Belgium', team2: 'Australia', flag1: '🇧🇪', flag2: '🇦🇺', score: '3-3', status: 'Completed' },
//       ],
//       upcomingMatches: [
//         { id: 5, date: '2025-06-10', team1: 'Netherlands', team2: 'Germany', flag1: '🇳🇱', flag2: '🇩🇪', time: '15:00', venue: 'Amsterdam' },
//         { id: 6, date: '2025-06-12', team1: 'India', team2: 'Belgium', flag1: '🇮🇳', flag2: '🇧🇪', time: '17:30', venue: 'New Delhi' },
//         { id: 7, date: '2025-06-15', team1: 'Australia', team2: 'Argentina', flag1: '🇦🇺', flag2: '🇦🇷', time: '19:00', venue: 'Perth' },
//       ],
//     },
//     2: {
//       id: 2,
//       name: 'Euro Hockey League',
//       country: 'Europe',
//       logo: '🇪🇺',
//       season: '2025-26',
//       description: 'The Euro Hockey League is the premier club field hockey competition in Europe, featuring the best club teams from across the continent.',
//       founded: '2007',
//       teams: 24,
//       format: 'Knockout Tournament',
//       standings: [
//         { rank: 1, team: 'Rot-Weiss Köln', country: 'Germany', flag: '🇩🇪', played: 8, won: 7, drawn: 0, lost: 1, gf: 28, ga: 12, points: 21 },
//         { rank: 2, team: 'Bloemendaal', country: 'Netherlands', flag: '🇳🇱', played: 8, won: 6, drawn: 1, lost: 1, gf: 25, ga: 10, points: 19 },
//         { rank: 3, team: 'Royal Leopold', country: 'Belgium', flag: '🇧🇪', played: 8, won: 6, drawn: 0, lost: 2, gf: 22, ga: 14, points: 18 },
//         { rank: 4, team: 'Atlètic Terrassa', country: 'Spain', flag: '🇪🇸', played: 8, won: 5, drawn: 1, lost: 2, gf: 20, ga: 15, points: 16 },
//         { rank: 5, team: 'Surbiton', country: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', played: 8, won: 4, drawn: 1, lost: 3, gf: 18, ga: 16, points: 13 },
//       ],
//       topScorers: [
//         { rank: 1, name: 'Timm Herzbruch', team: 'Rot-Weiss Köln', flag: '🇩🇪', goals: 9 },
//         { rank: 2, name: 'Jorrit Croon', team: 'Bloemendaal', flag: '🇳🇱', goals: 8 },
//         { rank: 3, name: 'Arthur de Sloover', team: 'Royal Leopold', flag: '🇧🇪', goals: 7 },
//         { rank: 4, name: 'Xavi Lleonart', team: 'Atlètic Terrassa', flag: '🇪🇸', goals: 6 },
//       ],
//       recentMatches: [
//         { id: 1, date: '2025-05-30', team1: 'Rot-Weiss Köln', team2: 'Bloemendaal', score: '2-1', status: 'Completed' },
//         { id: 2, date: '2025-05-28', team1: 'Royal Leopold', team2: 'Atlètic Terrassa', score: '3-2', status: 'Completed' },
//       ],
//       upcomingMatches: [
//         { id: 3, date: '2025-06-08', team1: 'Bloemendaal', team2: 'Royal Leopold', time: '16:00', venue: 'Amsterdam' },
//         { id: 4, date: '2025-06-10', team1: 'Surbiton', team2: 'Rot-Weiss Köln', time: '14:30', venue: 'London' },
//       ],
//     },
//     3: {
//       id: 3,
//       name: 'Hockey India League',
//       country: 'India',
//       logo: '🇮🇳',
//       season: '2025',
//       description: 'The Hockey India League is India\'s premier professional field hockey league, featuring top Indian and international players.',
//       founded: '2013',
//       teams: 8,
//       format: 'League + Playoffs',
//       standings: [
//         { rank: 1, team: 'Ranchi Rays', city: 'Ranchi', played: 14, won: 10, drawn: 2, lost: 2, gf: 42, ga: 22, points: 32 },
//         { rank: 2, team: 'Delhi Waveriders', city: 'Delhi', played: 14, won: 9, drawn: 2, lost: 3, gf: 38, ga: 26, points: 29 },
//         { rank: 3, team: 'Kalinga Lancers', city: 'Bhubaneswar', played: 14, won: 8, drawn: 3, lost: 3, gf: 35, ga: 28, points: 27 },
//         { rank: 4, team: 'Punjab Warriors', city: 'Jalandhar', played: 14, won: 7, drawn: 2, lost: 5, gf: 32, ga: 30, points: 23 },
//         { rank: 5, team: 'Mumbai Magicians', city: 'Mumbai', played: 14, won: 6, drawn: 1, lost: 7, gf: 28, ga: 32, points: 19 },
//         { rank: 6, team: 'UP Wizards', city: 'Lucknow', played: 14, won: 5, drawn: 2, lost: 7, gf: 25, ga: 35, points: 17 },
//         { rank: 7, team: 'Hyderabad Sultans', city: 'Hyderabad', played: 14, won: 3, drawn: 2, lost: 9, gf: 20, ga: 38, points: 11 },
//         { rank: 8, team: 'Chennai Cheetahs', city: 'Chennai', played: 14, won: 2, drawn: 1, lost: 11, gf: 18, ga: 40, points: 7 },
//       ],
//       topScorers: [
//         { rank: 1, name: 'Akashdeep Singh', team: 'Ranchi Rays', goals: 11 },
//         { rank: 2, name: 'Mandeep Singh', team: 'Delhi Waveriders', goals: 10 },
//         { rank: 3, name: 'Gurjant Singh', team: 'Punjab Warriors', goals: 9 },
//         { rank: 4, name: 'Lalit Upadhyay', team: 'Kalinga Lancers', goals: 8 },
//       ],
//       recentMatches: [
//         { id: 1, date: '2025-06-02', team1: 'Ranchi Rays', team2: 'Delhi Waveriders', score: '3-2', status: 'Completed' },
//         { id: 2, date: '2025-06-01', team1: 'Kalinga Lancers', team2: 'Punjab Warriors', score: '2-2', status: 'Completed' },
//       ],
//       upcomingMatches: [
//         { id: 3, date: '2025-06-08', team1: 'Mumbai Magicians', team2: 'UP Wizards', time: '18:00', venue: 'Mumbai' },
//         { id: 4, date: '2025-06-09', team1: 'Ranchi Rays', team2: 'Kalinga Lancers', time: '19:30', venue: 'Ranchi' },
//       ],
//     },
//     4: {
//       id: 4,
//       name: 'Australian Hockey League',
//       country: 'Australia',
//       logo: '🇦🇺',
//       season: '2025',
//       description: 'The Australian Hockey League is the premier domestic field hockey competition in Australia.',
//       founded: '1991',
//       teams: 10,
//       format: 'League + Finals',
//       standings: [
//         { rank: 1, team: 'NSW Pride', state: 'New South Wales', played: 18, won: 14, drawn: 2, lost: 2, gf: 56, ga: 28, points: 44 },
//         { rank: 2, team: 'Victorian Vipers', state: 'Victoria', played: 18, won: 13, drawn: 1, lost: 4, gf: 52, ga: 32, points: 40 },
//         { rank: 3, team: 'Queensland Blades', state: 'Queensland', played: 18, won: 11, drawn: 3, lost: 4, gf: 48, ga: 35, points: 36 },
//         { rank: 4, team: 'WA Thundersticks', state: 'Western Australia', played: 18, won: 10, drawn: 2, lost: 6, gf: 42, ga: 38, points: 32 },
//         { rank: 5, team: 'SA Suns', state: 'South Australia', played: 18, won: 8, drawn: 1, lost: 9, gf: 38, ga: 42, points: 25 },
//       ],
//       topScorers: [
//         { rank: 1, name: 'Blake Govers', team: 'NSW Pride', goals: 15 },
//         { rank: 2, name: 'Flynn Ogilvie', team: 'Victorian Vipers', goals: 13 },
//         { rank: 3, name: 'Jacob Anderson', team: 'Queensland Blades', goals: 11 },
//       ],
//       recentMatches: [
//         { id: 1, date: '2025-06-03', team1: 'NSW Pride', team2: 'Victorian Vipers', score: '3-1', status: 'Completed' },
//         { id: 2, date: '2025-06-02', team1: 'Queensland Blades', team2: 'WA Thundersticks', score: '2-2', status: 'Completed' },
//       ],
//       upcomingMatches: [
//         { id: 3, date: '2025-06-10', team1: 'Victorian Vipers', team2: 'Queensland Blades', time: '17:00', venue: 'Melbourne' },
//         { id: 4, date: '2025-06-11', team1: 'NSW Pride', team2: 'SA Suns', time: '15:30', venue: 'Sydney' },
//       ],
//     },
//   };

//   const league = leaguesData[leagueId];

//   if (!league) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-gray-900 mb-2">League Not Found</h2>
//           <p className="text-gray-600 mb-6">The league you're looking for doesn't exist.</p>
//           <Link to="/hockey/leagues" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
//             Back to Leagues
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const tabs = [
//     { id: 'overview', label: 'Overview', icon: '📋' },
//     { id: 'standings', label: 'Standings', icon: '🏆' },
//     { id: 'scorers', label: 'Top Scorers', icon: '⚽' },
//     { id: 'matches', label: 'Matches', icon: '🏑' },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
//           <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
//             <div className="text-7xl">{league.logo}</div>
//             <div className="flex-1">
//               <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
//                 {league.name}
//               </h1>
//               <div className="flex flex-wrap gap-4 text-sm text-gray-600">
//                 <span className="flex items-center gap-1">
//                   📍 {league.country}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   📅 Season {league.season}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   👥 {league.teams} Teams
//                 </span>
//                 <span className="flex items-center gap-1">
//                   🗓️ Founded {league.founded}
//                 </span>
//               </div>
//             </div>
//             <Link
//               to="/hockey/leagues"
//               className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
//             >
//               ← Back
//             </Link>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
//           <div className="flex overflow-x-auto border-b">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`flex-1 min-w-[140px] px-6 py-4 font-semibold transition-colors flex items-center justify-center gap-2 ${
//                   activeTab === tab.id
//                     ? 'bg-blue-600 text-white'
//                     : 'text-gray-600 hover:bg-gray-50'
//                 }`}
//               >
//                 <span className="text-xl">{tab.icon}</span>
//                 <span className="hidden sm:inline">{tab.label}</span>
//               </button>
//             ))}
//           </div>

//           {/* Tab Content */}
//           <div className="p-6 md:p-8">
//             {/* Overview Tab */}
//             {activeTab === 'overview' && (
//               <div className="space-y-6">
//                 <div>
//                   <h3 className="text-2xl font-bold mb-4">About the League</h3>
//                   <p className="text-gray-700 leading-relaxed mb-4">
//                     {league.description}
//                   </p>
//                   <div className="grid md:grid-cols-2 gap-4">
//                     <div className="bg-blue-50 p-6 rounded-xl">
//                       <p className="text-sm text-gray-600 mb-1">Format</p>
//                       <p className="text-xl font-bold text-blue-600">{league.format}</p>
//                     </div>
//                     <div className="bg-green-50 p-6 rounded-xl">
//                       <p className="text-sm text-gray-600 mb-1">Participating Teams</p>
//                       <p className="text-xl font-bold text-green-600">{league.teams} Teams</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Recent Matches */}
//                 <div>
//                   <h3 className="text-xl font-bold mb-4">Recent Results</h3>
//                   <div className="space-y-3">
//                     {league.recentMatches.map((match) => (
//                       <div
//                         key={match.id}
//                         className="bg-gray-50 p-4 rounded-xl flex items-center justify-between"
//                       >
//                         <div className="flex items-center gap-3 flex-1">
//                           <span className="text-2xl">{match.flag1}</span>
//                           <span className="font-semibold">{match.team1}</span>
//                         </div>
//                         <div className="px-4 py-2 bg-white rounded-lg font-bold text-blue-600">
//                           {match.score}
//                         </div>
//                         <div className="flex items-center gap-3 flex-1 justify-end">
//                           <span className="font-semibold">{match.team2}</span>
//                           <span className="text-2xl">{match.flag2}</span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Standings Tab */}
//             {activeTab === 'standings' && (
//               <div>
//                 <h3 className="text-2xl font-bold mb-6">League Standings</h3>
                
//                 {/* Desktop Table */}
//                 <div className="hidden md:block overflow-x-auto">
//                   <table className="w-full">
//                     <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
//                       <tr>
//                         <th className="px-4 py-3 text-left font-bold">Rank</th>
//                         <th className="px-4 py-3 text-left font-bold">Team</th>
//                         <th className="px-4 py-3 text-center font-bold">P</th>
//                         <th className="px-4 py-3 text-center font-bold">W</th>
//                         <th className="px-4 py-3 text-center font-bold">D</th>
//                         <th className="px-4 py-3 text-center font-bold">L</th>
//                         <th className="px-4 py-3 text-center font-bold">GF</th>
//                         <th className="px-4 py-3 text-center font-bold">GA</th>
//                         <th className="px-4 py-3 text-center font-bold">GD</th>
//                         <th className="px-4 py-3 text-center font-bold">Pts</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-100">
//                       {league.standings.map((team, idx) => (
//                         <tr
//                           key={team.rank}
//                           className={`hover:bg-blue-50 transition-colors ${
//                             idx < 3 ? 'bg-green-50' : ''
//                           }`}
//                         >
//                           <td className="px-4 py-4">
//                             <div
//                               className={`w-8 h-8 flex items-center justify-center rounded-full font-bold ${
//                                 idx === 0
//                                   ? 'bg-yellow-400 text-yellow-900'
//                                   : idx === 1
//                                   ? 'bg-gray-300 text-gray-700'
//                                   : idx === 2
//                                   ? 'bg-orange-400 text-orange-900'
//                                   : 'bg-blue-100 text-blue-600'
//                               }`}
//                             >
//                               {team.rank}
//                             </div>
//                           </td>
//                           <td className="px-4 py-4">
//                             <div className="flex items-center gap-2">
//                               <span className="text-2xl">{team.flag}</span>
//                               <span className="font-semibold">{team.team}</span>
//                             </div>
//                           </td>
//                           <td className="px-4 py-4 text-center text-gray-600">{team.played}</td>
//                           <td className="px-4 py-4 text-center text-green-600 font-semibold">{team.won}</td>
//                           <td className="px-4 py-4 text-center text-gray-600">{team.drawn}</td>
//                           <td className="px-4 py-4 text-center text-red-600 font-semibold">{team.lost}</td>
//                           <td className="px-4 py-4 text-center text-gray-600">{team.gf}</td>
//                           <td className="px-4 py-4 text-center text-gray-600">{team.ga}</td>
//                           <td className={`px-4 py-4 text-center font-semibold ${team.gd >= 0 ? 'text-green-600' : 'text-red-600'}`}>
//                             {team.gd > 0 ? '+' : ''}{team.gd}
//                           </td>
//                           <td className="px-4 py-4 text-center">
//                             <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-bold rounded-lg">
//                               {team.points}
//                             </span>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>

//                 {/* Mobile View */}
//                 <div className="md:hidden space-y-4">
//                   {league.standings.map((team, idx) => (
//                     <div
//                       key={team.rank}
//                       className={`p-4 rounded-xl ${
//                         idx < 3 ? 'bg-green-50 border-2 border-green-200' : 'bg-gray-50'
//                       }`}
//                     >
//                       <div className="flex items-center justify-between mb-3">
//                         <div className="flex items-center gap-3">
//                           <div
//                             className={`w-10 h-10 flex items-center justify-center rounded-full font-bold ${
//                               idx === 0
//                                 ? 'bg-yellow-400 text-yellow-900'
//                                 : idx === 1
//                                 ? 'bg-gray-300 text-gray-700'
//                                 : idx === 2
//                                 ? 'bg-orange-400 text-orange-900'
//                                 : 'bg-blue-100 text-blue-600'
//                             }`}
//                           >
//                             {team.rank}
//                           </div>
//                           <span className="text-2xl">{team.flag}</span>
//                           <div>
//                             <p className="font-bold">{team.team}</p>
//                             <p className="text-xs text-gray-500">{team.country || team.city || team.state}</p>
//                           </div>
//                         </div>
//                         <div className="text-right">
//                           <p className="text-2xl font-bold text-blue-600">{team.points}</p>
//                           <p className="text-xs text-gray-500">Points</p>
//                         </div>
//                       </div>
//                       <div className="grid grid-cols-4 gap-2 text-center text-sm">
//                         <div>
//                           <p className="text-xs text-gray-500">Played</p>
//                           <p className="font-semibold">{team.played}</p>
//                         </div>
//                         <div>
//                           <p className="text-xs text-gray-500">Won</p>
//                           <p className="font-semibold text-green-600">{team.won}</p>
//                         </div>
//                         <div>
//                           <p className="text-xs text-gray-500">Lost</p>
//                           <p className="font-semibold text-red-600">{team.lost}</p>
//                         </div>
//                         <div>
//                           <p className="text-xs text-gray-500">GD</p>
//                           <p className={`font-semibold ${team.gd >= 0 ? 'text-green-600' : 'text-red-600'}`}>
//                             {team.gd > 0 ? '+' : ''}{team.gd}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="mt-6 p-4 bg-blue-50 rounded-xl">
//                   <p className="text-sm text-gray-700">
//                     <span className="font-semibold">Legend:</span> P = Played, W = Won, D = Drawn, L = Lost, GF = Goals For, GA = Goals Against, GD = Goal Difference, Pts = Points
//                   </p>
//                 </div>
//               </div>
//             )}

//             {/* Top Scorers Tab */}
//             {activeTab === 'scorers' && (
//               <div>
//                 <h3 className="text-2xl font-bold mb-6">Top Scorers</h3>
//                 <div className="space-y-3">
//                   {league.topScorers.map((scorer) => (
//                     <div
//                       key={scorer.rank}
//                       className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors"
//                     >
//                       <div className="flex items-center gap-4 flex-1">
//                         <div
//                           className={`w-12 h-12 flex items-center justify-center rounded-full font-bold text-lg ${
//                             scorer.rank === 1
//                               ? 'bg-yellow-400 text-yellow-900'
//                               : scorer.rank === 2
//                               ? 'bg-gray-300 text-gray-700'
//                               : scorer.rank === 3
//                               ? 'bg-orange-400 text-orange-900'
//                               : 'bg-blue-100 text-blue-600'
//                       }`}
//                     >
//                       {scorer.rank}
//                     </div>
//                     <div>
//                       <p className="font-bold text-lg">{scorer.name}</p>
//                       <div className="flex items-center gap-2 text-sm text-gray-600">
//                         <span className="text-xl">{scorer.flag}</span>
//                         <span>{scorer.team}</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-3xl font-bold text-green-600">{scorer.goals}</p>
//                     <p className="text-sm text-gray-500">Goals</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Matches Tab */}
//         {activeTab === 'matches' && (
//           <div className="space-y-8">
//             {/* Recent Matches */}
//             <div>
//               <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
//                 <span>✅</span> Recent Results
//               </h3>
//               <div className="space-y-3">
//                 {league.recentMatches.map((match) => (
//                   <div
//                     key={match.id}
//                     className="bg-white border-2 border-gray-200 p-4 rounded-xl hover:border-blue-300 transition-all"
//                   >
//                     <p className="text-xs text-gray-500 mb-3">{match.date}</p>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-3 flex-1">
//                         <span className="text-3xl">{match.flag1}</span>
//                         <span className="font-semibold text-lg">{match.team1}</span>
//                       </div>
//                       <div className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-bold text-xl">
//                         {match.score}
//                       </div>
//                       <div className="flex items-center gap-3 flex-1 justify-end">
//                         <span className="font-semibold text-lg">{match.team2}</span>
//                         <span className="text-3xl">{match.flag2}</span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Upcoming Matches */}
//             <div>
//               <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
//                 <span>📅</span> Upcoming Fixtures
//               </h3>
//               <div className="space-y-3">
//                 {league.upcomingMatches.map((match) => (
//                   <div
//                     key={match.id}
//                     className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 p-4 rounded-xl"
//                   >
//                     <div className="flex items-center justify-between mb-3">
//                       <p className="text-sm font-semibold text-blue-600">
//                         {match.date} • {match.time}
//                       </p>
//                       <p className="text-xs text-gray-600">📍 {match.venue}</p>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-3 flex-1">
//                         <span className="text-3xl">{match.flag1}</span>
//                         <span className="font-semibold text-lg">{match.team1}</span>
//                       </div>
//                       <div className="text-2xl font-bold text-gray-400">VS</div>
//                       <div className="flex items-center gap-3 flex-1 justify-end">
//                         <span className="font-semibold text-lg">{match.team2}</span>
//                         <span className="text-3xl">{match.flag2}</span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   </div>
// </div>
// );
// };
// export default LeagueDetail;


// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';

// const LeagueDetail = () => {
//   const { leagueId } = useParams();
//   const [activeTab, setActiveTab] = useState('overview');

//   const leaguesData = {
//     1: {
//       id: 1,
//       name: 'FIH Pro League',
//       country: 'International',
//       logo: '🏑',
//       season: '2025-26',
//       description: 'The premier international league featuring the world\'s top 9 national teams in a home-and-away format.',
//       founded: '2019',
//       teams: 9,
//       format: 'Round Robin (Home & Away)',
//       standings: [
//         { rank: 1, team: 'Argentina', flag: '🇦🇷', played: 4, won: 3, drawn: 1, lost: 0, gf: 12, ga: 6, gd: 6, points: 11 },
//         { rank: 2, team: 'Belgium', flag: '🇧🇪', played: 4, won: 3, drawn: 1, lost: 0, gf: 12, ga: 6, gd: 6, points: 10 },
//         { rank: 3, team: 'Netherlands', flag: '🇳🇱', played: 4, won: 2, drawn: 1, lost: 1, gf: 10, ga: 8, gd: 2, points: 7 },
//         { rank: 4, team: 'Germany', flag: '🇩🇪', played: 4, won: 1, drawn: 0, lost: 3, gf: 7, ga: 12, gd: -5, points: 3 },
//         { rank: 5, team: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', played: 4, won: 1, drawn: 0, lost: 3, gf: 6, ga: 11, gd: -5, points: 3 },
//         { rank: 6, team: 'Pakistan', flag: '🇵🇰', played: 4, won: 0, drawn: 1, lost: 3, gf: 6, ga: 12, gd: -6, points: 1 },
//       ],
//       topScorers: [
//         { rank: 1, name: 'Multiple Players', team: '', flag: '', goals: 4 },
//         { rank: 2, name: 'Multiple Players', team: '', flag: '', goals: 3 },
//       ],
//       recentMatches: [
//         { id: 1, date: '2025-12-14', team1: 'Belgium', team2: 'Germany', flag1: '🇧🇪', flag2: '🇩🇪', score: '4-1', status: 'Completed' },
//         { id: 2, date: '2025-12-14', team1: 'Netherlands', team2: 'Pakistan', flag1: '🇳🇱', flag2: '🇵🇰', score: '5-2', status: 'Completed' },
//         { id: 3, date: '2025-12-13', team1: 'England', team2: 'Germany', flag1: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', flag2: '🇩🇪', score: '1-4', status: 'Completed' },
//         { id: 4, date: '2025-12-12', team1: 'Argentina', team2: 'Netherlands', flag1: '🇦🇷', flag2: '🇳🇱', score: '1-1 (2-4 SO)', status: 'Completed' },
//       ],
//       upcomingMatches: [
//         { id: 5, date: '2026-02-05', team1: 'China', team2: 'England', flag1: '🇨🇳', flag2: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', time: 'TBD', venue: 'Yunfu' },
//         { id: 6, date: '2026-02-06', team1: 'England', team2: 'Netherlands', flag1: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', flag2: '🇳🇱', time: 'TBD', venue: 'Valencia' },
//         { id: 7, date: '2026-02-10', team1: 'India', team2: 'Argentina', flag1: '🇮🇳', flag2: '🇦🇷', time: 'TBD', venue: 'Rourkela' },
//       ],
//     },
//     2: {
//       id: 2,
//       name: 'Euro Hockey League',
//       country: 'Europe',
//       logo: '🇪🇺',
//       season: '2025-26',
//       description: 'Europe\'s top club competition – knockout format with the best teams from national leagues.',
//       founded: '2007',
//       teams: 24,
//       format: 'Knockout (KO16 → Final8)',
//       standings: [ /* Limited data available – season ongoing */ ],
//       topScorers: [],
//       recentMatches: [],
//       upcomingMatches: [
//         { id: 3, date: '2026-04-17', team1: 'Various Teams', team2: '', flag1: '', flag2: '', time: 'TBD', venue: '\'s-Hertogenbosch' },
//       ],
//     },
//     3: {
//       id: 3,
//       name: 'Hockey India League',
//       country: 'India',
//       logo: '🇮🇳',
//       season: '2025-26',
//       description: 'India\'s professional franchise league – men\'s starts Jan 3, women\'s ongoing.',
//       founded: '2013 (revived 2024)',
//       teams: 8,
//       format: 'League + Playoffs',
//       standings: [ /* Early days – matches starting */ ],
//       topScorers: [],
//       recentMatches: [],
//       upcomingMatches: [
//         { id: 4, date: '2026-01-03', team1: 'Various Teams', team2: '', flag1: '', flag2: '', time: 'TBD', venue: 'Rourkela & Ranchi' },
//       ],
//     },
//     4: {
//       id: 4,
//       name: 'Hockey One (Australia)',
//       country: 'Australia',
//       logo: '🇦🇺',
//       season: '2025',
//       description: 'Australia\'s domestic league featuring state-based teams.',
//       founded: '2019',
//       teams: 7,
//       format: 'League + Finals',
//       standings: [],
//       topScorers: [],
//       recentMatches: [],
//       upcomingMatches: [],
//     },
//   };

//   const league = leaguesData[leagueId];

//   if (!league) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 text-gray-600">
//         League not found
//       </div>
//     );
//   }

//   const tabs = [
//     { id: 'overview', label: 'Overview' },
//     { id: 'standings', label: 'Standings' },
//     { id: 'scorers', label: 'Top Scorers' },
//     { id: 'matches', label: 'Matches' },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-6">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="bg-white rounded-xl shadow-md p-6 mb-6">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-4">
//               <span className="text-5xl">{league.logo}</span>
//               <div>
//                 <h1 className="text-2xl font-bold text-gray-900">{league.name}</h1>
//                 <p className="text-sm text-gray-600 mt-1">{league.country} • Season {league.season}</p>
//               </div>
//             </div>
//             <Link
//               to="/hockey/leagues"
//               className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200"
//             >
//               ← Back
//             </Link>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="bg-white rounded-xl shadow-md mb-6">
//           <div className="flex gap-3 overflow-x-auto border-b">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`px-6 py-3.5 text-sm font-medium transition-all ${
//                   activeTab === tab.id ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>

//           <div className="p-6">
//             {activeTab === 'overview' && (
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <p className="text-gray-700 text-sm leading-relaxed">{league.description}</p>
//                   <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
//                     <div className="bg-blue-50 rounded-lg p-4">
//                       <p className="text-gray-600">Format</p>
//                       <p className="font-bold">{league.format}</p>
//                     </div>
//                     <div className="bg-green-50 rounded-lg p-4">
//                       <p className="text-gray-600">Teams</p>
//                       <p className="font-bold">{league.teams}</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-600">Founded: {league.founded}</p>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'standings' && league.standings.length > 0 && (
//               <div className="overflow-x-auto">
//                 <table className="w-full text-sm">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="text-left py-3 px-4">Rank</th>
//                       <th className="text-left py-3 px-4">Team</th>
//                       <th className="text-center py-3 px-4">P</th>
//                       <th className="text-center py-3 px-4">W</th>
//                       <th className="text-center py-3 px-4">D</th>
//                       <th className="text-center py-3 px-4">L</th>
//                       <th className="text-center py-3 px-4">GD</th>
//                       <th className="text-center py-3 px-4">Pts</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-100">
//                     {league.standings.map((team, idx) => (
//                       <tr key={team.rank} className="hover:bg-gray-50">
//                         <td className="py-3 px-4">
//                           <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${
//                             idx < 3 ? (idx === 0 ? 'bg-yellow-500' : idx === 1 ? 'bg-gray-400' : 'bg-orange-500') : 'bg-gray-600'
//                           }`}>
//                             {team.rank}
//                           </div>
//                         </td>
//                         <td className="py-3 px-4 flex items-center gap-2">
//                           <span className="text-2xl">{team.flag}</span>
//                           <span className="font-medium">{team.team}</span>
//                         </td>
//                         <td className="py-3 px-4 text-center">{team.played}</td>
//                         <td className="py-3 px-4 text-center text-green-600 font-medium">{team.won}</td>
//                         <td className="py-3 px-4 text-center">{team.drawn}</td>
//                         <td className="py-3 px-4 text-center text-red-600 font-medium">{team.lost}</td>
//                         <td className="py-3 px-4 text-center">{team.gd > 0 ? '+' : ''}{team.gd}</td>
//                         <td className="py-3 px-4 text-center font-bold text-blue-600">{team.points}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}

//             {activeTab === 'scorers' && league.topScorers.length > 0 && (
//               <div className="space-y-4">
//                 {league.topScorers.map((scorer) => (
//                   <div key={scorer.rank} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
//                     <div className="flex items-center gap-4">
//                       <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
//                         scorer.rank <= 3 ? (scorer.rank === 1 ? 'bg-yellow-500' : scorer.rank === 2 ? 'bg-gray-400' : 'bg-orange-500') : 'bg-gray-600'
//                       }`}>
//                         {scorer.rank}
//                       </div>
//                       <div>
//                         <p className="font-semibold">{scorer.name}</p>
//                         {scorer.team && <p className="text-sm text-gray-600 flex items-center gap-1"><span>{scorer.flag}</span> {scorer.team}</p>}
//                       </div>
//                     </div>
//                     <p className="text-2xl font-bold text-green-600">{scorer.goals}</p>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {activeTab === 'matches' && (
//               <div className="space-y-6">
//                 {league.recentMatches.length > 0 && (
//                   <div>
//                     <h3 className="text-lg font-semibold mb-3">Recent Results</h3>
//                     <div className="space-y-3">
//                       {league.recentMatches.map((match) => (
//                         <div key={match.id} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
//                           <div className="flex items-center gap-3">
//                             <span className="text-2xl">{match.flag1}</span>
//                             <span className="font-medium">{match.team1}</span>
//                           </div>
//                           <span className="font-bold text-blue-600">{match.score}</span>
//                           <div className="flex items-center gap-3">
//                             <span className="font-medium">{match.team2}</span>
//                             <span className="text-2xl">{match.flag2}</span>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {league.upcomingMatches.length > 0 && (
//                   <div>
//                     <h3 className="text-lg font-semibold mb-3">Upcoming Fixtures</h3>
//                     <div className="space-y-3">
//                       {league.upcomingMatches.map((match) => (
//                         <div key={match.id} className="bg-blue-50 rounded-lg p-4 flex items-center justify-between">
//                           <div className="flex items-center gap-3">
//                             {match.flag1 && <span className="text-2xl">{match.flag1}</span>}
//                             <span className="font-medium">{match.team1}</span>
//                           </div>
//                           <div className="text-center text-sm">
//                             <p>{match.date.replace('2026-', '').replace('2025-', '')}</p>
//                             <p>{match.time}</p>
//                             <p className="text-xs text-gray-600">{match.venue}</p>
//                           </div>
//                           <div className="flex items-center gap-3">
//                             <span className="font-medium">{match.team2}</span>
//                             {match.flag2 && <span className="text-2xl">{match.flag2}</span>}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeagueDetail;


// import React, { useState } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import TopHockeyStories from '../../data/TopHockeyStories.js';
// import LatestNews from '../../data/LatestNews.js';

// const LeagueDetail = () => {
//   const { leagueId } = useParams();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('overview');

//   const handleStoryClick = (id) => {
//     navigate(`/details/hockey/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   const leaguesData = {
//     1: {
//       id: 1,
//       name: 'FIH Pro League',
//       country: 'International',
//       logo: '🏑',
//       season: '2025-26',
//       description: 'The premier international league featuring the world\'s top 9 national teams in a home-and-away format.',
//       founded: '2019',
//       teams: 9,
//       format: 'Round Robin (Home & Away)',
//       standings: [
//         { rank: 1, team: 'Argentina', flag: '🇦🇷', played: 4, won: 3, drawn: 1, lost: 0, gf: 12, ga: 6, gd: 6, points: 11 },
//         { rank: 2, team: 'Belgium', flag: '🇧🇪', played: 4, won: 3, drawn: 1, lost: 0, gf: 12, ga: 6, gd: 6, points: 10 },
//         { rank: 3, team: 'Netherlands', flag: '🇳🇱', played: 4, won: 2, drawn: 1, lost: 1, gf: 10, ga: 8, gd: 2, points: 7 },
//         { rank: 4, team: 'Germany', flag: '🇩🇪', played: 4, won: 1, drawn: 0, lost: 3, gf: 7, ga: 12, gd: -5, points: 3 },
//         { rank: 5, team: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', played: 4, won: 1, drawn: 0, lost: 3, gf: 6, ga: 11, gd: -5, points: 3 },
//         { rank: 6, team: 'Pakistan', flag: '🇵🇰', played: 4, won: 0, drawn: 1, lost: 3, gf: 6, ga: 12, gd: -6, points: 1 },
//       ],
//       topScorers: [
//         { rank: 1, name: 'Multiple Players', team: '', flag: '', goals: 4 },
//         { rank: 2, name: 'Multiple Players', team: '', flag: '', goals: 3 },
//       ],
//       recentMatches: [
//         { id: 1, date: '2025-12-14', team1: 'Belgium', team2: 'Germany', flag1: '🇧🇪', flag2: '🇩🇪', score: '4-1', status: 'Completed' },
//         { id: 2, date: '2025-12-14', team1: 'Netherlands', team2: 'Pakistan', flag1: '🇳🇱', flag2: '🇵🇰', score: '5-2', status: 'Completed' },
//         { id: 3, date: '2025-12-13', team1: 'England', team2: 'Germany', flag1: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', flag2: '🇩🇪', score: '1-4', status: 'Completed' },
//         { id: 4, date: '2025-12-12', team1: 'Argentina', team2: 'Netherlands', flag1: '🇦🇷', flag2: '🇳🇱', score: '1-1 (2-4 SO)', status: 'Completed' },
//       ],
//       upcomingMatches: [
//         { id: 5, date: '2026-02-05', team1: 'China', team2: 'England', flag1: '🇨🇳', flag2: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', time: 'TBD', venue: 'Yunfu' },
//         { id: 6, date: '2026-02-06', team1: 'England', team2: 'Netherlands', flag1: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', flag2: '🇳🇱', time: 'TBD', venue: 'Valencia' },
//         { id: 7, date: '2026-02-10', team1: 'India', team2: 'Argentina', flag1: '🇮🇳', flag2: '🇦🇷', time: 'TBD', venue: 'Rourkela' },
//       ],
//     },
//     // ... other leagues data (kept same as provided)
//   };

//   const league = leaguesData[leagueId];

//   if (!league) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 text-gray-600">
//         League not found
//       </div>
//     );
//   }

//   const tabs = [
//     { id: 'overview', label: 'Overview' },
//     { id: 'standings', label: 'Standings' },
//     { id: 'scorers', label: 'Top Scorers' },
//     { id: 'matches', label: 'Matches' },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
//       {/* Main Grid Layout */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
//           {/* Left: League Detail Content */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Header */}
//             <div className="bg-white rounded-xl shadow-md p-6 mb-6">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-4">
//                   <span className="text-5xl">{league.logo}</span>
//                   <div>
//                     <h1 className="text-2xl font-bold text-gray-900">{league.name}</h1>
//                     <p className="text-sm text-gray-600 mt-1">{league.country} • Season {league.season}</p>
//                   </div>
//                 </div>
//                 <Link
//                   to="/hockey/leagues"
//                   className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200"
//                 >
//                   ← Back
//                 </Link>
//               </div>
//             </div>

//             {/* Tabs */}
//             <div className="bg-white rounded-xl shadow-md mb-6">
//               <div className="flex gap-3 overflow-x-auto border-b scrollbar-hide">
//                 {tabs.map((tab) => (
//                   <button
//                     key={tab.id}
//                     onClick={() => setActiveTab(tab.id)}
//                     className={`px-6 py-3.5 text-sm font-medium transition-all ${
//                       activeTab === tab.id ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
//                     }`}
//                   >
//                     {tab.label}
//                   </button>
//                 ))}
//               </div>

//               <div className="p-6">
//                 {activeTab === 'overview' && (
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <p className="text-gray-700 text-sm leading-relaxed">{league.description}</p>
//                       <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
//                         <div className="bg-blue-50 rounded-lg p-4">
//                           <p className="text-gray-600">Format</p>
//                           <p className="font-bold">{league.format}</p>
//                         </div>
//                         <div className="bg-green-50 rounded-lg p-4">
//                           <p className="text-gray-600">Teams</p>
//                           <p className="font-bold">{league.teams}</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-600">Founded: {league.founded}</p>
//                     </div>
//                   </div>
//                 )}

//                 {activeTab === 'standings' && league.standings?.length > 0 && (
//                   <div className="overflow-x-auto">
//                     <table className="w-full text-sm">
//                       <thead className="bg-gray-50">
//                         <tr>
//                           <th className="text-left py-3 px-4">Rank</th>
//                           <th className="text-left py-3 px-4">Team</th>
//                           <th className="text-center py-3 px-4">P</th>
//                           <th className="text-center py-3 px-4">W</th>
//                           <th className="text-center py-3 px-4">D</th>
//                           <th className="text-center py-3 px-4">L</th>
//                           <th className="text-center py-3 px-4">GD</th>
//                           <th className="text-center py-3 px-4">Pts</th>
//                         </tr>
//                       </thead>
//                       <tbody className="divide-y divide-gray-100">
//                         {league.standings.map((team, idx) => (
//                           <tr key={team.rank} className="hover:bg-gray-50">
//                             <td className="py-3 px-4">
//                               <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${
//                                 idx < 3 ? (idx === 0 ? 'bg-yellow-500' : idx === 1 ? 'bg-gray-400' : 'bg-orange-500') : 'bg-gray-600'
//                               }`}>
//                                 {team.rank}
//                               </div>
//                             </td>
//                             <td className="py-3 px-4 flex items-center gap-2">
//                               <span className="text-2xl">{team.flag}</span>
//                               <span className="font-medium">{team.team}</span>
//                             </td>
//                             <td className="py-3 px-4 text-center">{team.played}</td>
//                             <td className="py-3 px-4 text-center text-green-600 font-medium">{team.won}</td>
//                             <td className="py-3 px-4 text-center">{team.drawn}</td>
//                             <td className="py-3 px-4 text-center text-red-600 font-medium">{team.lost}</td>
//                             <td className="py-3 px-4 text-center">{team.gd > 0 ? '+' : ''}{team.gd}</td>
//                             <td className="py-3 px-4 text-center font-bold text-blue-600">{team.points}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 )}

//                 {activeTab === 'scorers' && league.topScorers?.length > 0 && (
//                   <div className="space-y-4">
//                     {league.topScorers.map((scorer) => (
//                       <div key={scorer.rank} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
//                         <div className="flex items-center gap-4">
//                           <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
//                             scorer.rank <= 3 ? (scorer.rank === 1 ? 'bg-yellow-500' : scorer.rank === 2 ? 'bg-gray-400' : 'bg-orange-500') : 'bg-gray-600'
//                           }`}>
//                             {scorer.rank}
//                           </div>
//                           <div>
//                             <p className="font-semibold">{scorer.name}</p>
//                             {scorer.team && <p className="text-sm text-gray-600 flex items-center gap-1"><span>{scorer.flag}</span> {scorer.team}</p>}
//                           </div>
//                         </div>
//                         <p className="text-2xl font-bold text-green-600">{scorer.goals}</p>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {activeTab === 'matches' && (
//                   <div className="space-y-6">
//                     {league.recentMatches?.length > 0 && (
//                       <div>
//                         <h3 className="text-lg font-semibold mb-3">Recent Results</h3>
//                         <div className="space-y-3">
//                           {league.recentMatches.map((match) => (
//                             <div key={match.id} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
//                               <div className="flex items-center gap-3">
//                                 <span className="text-2xl">{match.flag1}</span>
//                                 <span className="font-medium">{match.team1}</span>
//                               </div>
//                               <span className="font-bold text-blue-600">{match.score}</span>
//                               <div className="flex items-center gap-3">
//                                 <span className="font-medium">{match.team2}</span>
//                                 <span className="text-2xl">{match.flag2}</span>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {league.upcomingMatches?.length > 0 && (
//                       <div>
//                         <h3 className="text-lg font-semibold mb-3">Upcoming Fixtures</h3>
//                         <div className="space-y-3">
//                           {league.upcomingMatches.map((match) => (
//                             <div key={match.id} className="bg-blue-50 rounded-lg p-4 flex items-center justify-between">
//                               <div className="flex items-center gap-3">
//                                 {match.flag1 && <span className="text-2xl">{match.flag1}</span>}
//                                 <span className="font-medium">{match.team1}</span>
//                               </div>
//                               <div className="text-center text-sm">
//                                 <p>{match.date.replace('2026-', '').replace('2025-', '')}</p>
//                                 <p>{match.time}</p>
//                                 <p className="text-xs text-gray-600">{match.venue}</p>
//                               </div>
//                               <div className="flex items-center gap-3">
//                                 <span className="font-medium">{match.team2}</span>
//                                 {match.flag2 && <span className="text-2xl">{match.flag2}</span>}
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Right Sidebar: Top Hockey Stories (Desktop Only) */}
//           <div className="hidden lg:block lg:col-span-4">
//             <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
//               <h3 className="text-lg font-bold text-gray-900 mb-5">Top Hockey Stories</h3>
//               <div className="space-y-4">
//                 {TopHockeyStories.data.TopHockeyStories.slice(0, 5).map((story) => (
//                   <div
//                     key={story.id}
//                     onClick={() => handleStoryClick(story.id)}
//                     className="flex gap-3 cursor-pointer group hover:bg-gray-50 rounded-lg p-3 -mx-3 transition-colors"
//                   >
//                     <div className="flex-shrink-0">
//                       <img
//                         src={story.image || 'https://via.placeholder.com/100'}
//                         alt={story.title}
//                         className="w-20 h-20 object-cover rounded-lg"
//                       />
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-blue-600 transition-colors">
//                         {story.title}
//                       </h4>
//                       <p className="text-xs text-gray-500 mt-1">
//                         {new Date(story.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <button
//                 onClick={() => navigate('/all-top-hockey-stories')}
//                 className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
//               >
//                 View All Stories →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Top Hockey Stories */}
//       <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-xl shadow-md p-5">
//             <h3 className="text-lg font-bold text-gray-900 mb-4">Top Hockey Stories</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {TopHockeyStories.data.TopHockeyStories.slice(0, 4).map((story) => (
//                 <div
//                   key={story.id}
//                   onClick={() => handleStoryClick(story.id)}
//                   className="cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
//                 >
//                   <img
//                     src={story.image || 'https://via.placeholder.com/300'}
//                     alt={story.title}
//                     className="w-full h-40 object-cover"
//                   />
//                   <div className="p-3">
//                     <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
//                       {story.title}
//                     </h4>
//                     <p className="text-xs text-gray-500 mt-1">
//                       {new Date(story.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button
//               onClick={() => navigate('/all-top-hockey-stories')}
//               className="mt-4 w-full text-center text-blue-600 font-medium hover:underline text-sm"
//             >
//               View All Stories →
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Latest Sports News Section */}
//       <div className="mt-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-xl shadow-md p-6">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
//                 Latest Sports News
//               </h3>
//               <button
//                 onClick={() => navigate('/all-latest-news')}
//                 className="text-blue-600 hover:underline font-medium text-sm sm:text-base"
//               >
//                 View All →
//               </button>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {LatestNews.data.LatestNews.slice(0, 6).map((article) => (
//                 <div
//                   key={article.title}
//                   onClick={() => handleNewsCardClick(article.title)}
//                   className="bg-gray-50 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
//                 >
//                   <img
//                     src={article.image || "https://via.placeholder.com/400x250"}
//                     alt={article.title}
//                     className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="p-4">
//                     <h4 className="text-base font-semibold text-gray-800 line-clamp-2 mb-2">
//                       {article.title}
//                     </h4>
//                     <p className="text-sm text-gray-600 line-clamp-2 mb-3">
//                       {article.description}
//                     </p>
//                     <div className="flex justify-between text-xs text-gray-500">
//                       <span>Source: {article.source}</span>
//                       <span>
//                         {new Date(article.published).toLocaleDateString('en-US', {
//                           month: 'short',
//                           day: '2-digit',
//                           year: 'numeric',
//                         })}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeagueDetail;

import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import TopHockeyStories from '../../data/TopHockeyStories.js';
import LatestNews from '../../data/LatestNews.js';
import { hockeyLeagueDetails } from '../../data/HockeyLeagueDetail.js';

const LeagueDetail = () => {
  const { leagueId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const handleStoryClick = (id) => {
    navigate(`/details/hockey/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  // External file se data le rahe hain
  const league = hockeyLeagueDetails[leagueId];

  if (!league) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 text-gray-600">
        League not found
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'standings', label: 'Standings' },
    { id: 'scorers', label: 'Top Scorers' },
    { id: 'matches', label: 'Matches' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left: League Detail Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{league.logo}</span>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{league.name}</h1>
                    <p className="text-sm text-gray-600 mt-1">{league.country} • Season {league.season}</p>
                  </div>
                </div>
                <Link
                  to="/hockey/leagues"
                  className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200"
                >
                  ← Back
                </Link>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-md mb-6">
              <div className="flex gap-3 overflow-x-auto border-b scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3.5 text-sm font-medium transition-all ${
                      activeTab === tab.id ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">{league.description}</p>
                      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                        <div className="bg-blue-50 rounded-lg p-4">
                          <p className="text-gray-600">Format</p>
                          <p className="font-bold">{league.format}</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4">
                          <p className="text-gray-600">Teams</p>
                          <p className="font-bold">{league.teams}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Founded: {league.founded}</p>
                    </div>
                  </div>
                )}

                {activeTab === 'standings' && league.standings?.length > 0 && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="text-left py-3 px-4">Rank</th>
                          <th className="text-left py-3 px-4">Team</th>
                          <th className="text-center py-3 px-4">P</th>
                          <th className="text-center py-3 px-4">W</th>
                          <th className="text-center py-3 px-4">D</th>
                          <th className="text-center py-3 px-4">L</th>
                          <th className="text-center py-3 px-4">GD</th>
                          <th className="text-center py-3 px-4">Pts</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {league.standings.map((team, idx) => (
                          <tr key={team.rank} className="hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${
                                idx < 3 ? (idx === 0 ? 'bg-yellow-500' : idx === 1 ? 'bg-gray-400' : 'bg-orange-500') : 'bg-gray-600'
                              }`}>
                                {team.rank}
                              </div>
                            </td>
                            <td className="py-3 px-4 flex items-center gap-2">
                              <span className="text-2xl">{team.flag}</span>
                              <span className="font-medium">{team.team}</span>
                            </td>
                            <td className="py-3 px-4 text-center">{team.played}</td>
                            <td className="py-3 px-4 text-center text-green-600 font-medium">{team.won}</td>
                            <td className="py-3 px-4 text-center">{team.drawn}</td>
                            <td className="py-3 px-4 text-center text-red-600 font-medium">{team.lost}</td>
                            <td className="py-3 px-4 text-center">{team.gd > 0 ? '+' : ''}{team.gd}</td>
                            <td className="py-3 px-4 text-center font-bold text-blue-600">{team.points}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === 'scorers' && league.topScorers?.length > 0 && (
                  <div className="space-y-4">
                    {league.topScorers.map((scorer) => (
                      <div key={scorer.rank} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                            scorer.rank <= 3 ? (scorer.rank === 1 ? 'bg-yellow-500' : scorer.rank === 2 ? 'bg-gray-400' : 'bg-orange-500') : 'bg-gray-600'
                          }`}>
                            {scorer.rank}
                          </div>
                          <div>
                            <p className="font-semibold">{scorer.name}</p>
                            {scorer.team && <p className="text-sm text-gray-600 flex items-center gap-1"><span>{scorer.flag}</span> {scorer.team}</p>}
                          </div>
                        </div>
                        <p className="text-2xl font-bold text-green-600">{scorer.goals}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'matches' && (
                  <div className="space-y-6">
                    {league.recentMatches?.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Recent Results</h3>
                        <div className="space-y-3">
                          {league.recentMatches.map((match) => (
                            <div key={match.id} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <span className="text-2xl">{match.flag1}</span>
                                <span className="font-medium">{match.team1}</span>
                              </div>
                              <span className="font-bold text-blue-600">{match.score}</span>
                              <div className="flex items-center gap-3">
                                <span className="font-medium">{match.team2}</span>
                                <span className="text-2xl">{match.flag2}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {league.upcomingMatches?.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Upcoming Fixtures</h3>
                        <div className="space-y-3">
                          {league.upcomingMatches.map((match) => (
                            <div key={match.id} className="bg-blue-50 rounded-lg p-4 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                {match.flag1 && <span className="text-2xl">{match.flag1}</span>}
                                <span className="font-medium">{match.team1}</span>
                              </div>
                              <div className="text-center text-sm">
                                <p>{match.date.replace('2026-', '').replace('2025-', '')}</p>
                                <p>{match.time}</p>
                                <p className="text-xs text-gray-600">{match.venue}</p>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="font-medium">{match.team2}</span>
                                {match.flag2 && <span className="text-2xl">{match.flag2}</span>}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Top Hockey Stories (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-5">Top Hockey Stories</h3>
              <div className="space-y-4">
                {TopHockeyStories.data.TopHockeyStories.slice(0, 5).map((story) => (
                  <div
                    key={story.id}
                    onClick={() => handleStoryClick(story.id)}
                    className="flex gap-3 cursor-pointer group hover:bg-gray-50 rounded-lg p-3 -mx-3 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <img
                        src={story.image || 'https://via.placeholder.com/100'}
                        alt={story.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-blue-600 transition-colors">
                        {story.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(story.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('/all-top-hockey-stories')}
                className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
              >
                View All Stories →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Top Hockey Stories */}
      <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top Hockey Stories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TopHockeyStories.data.TopHockeyStories.slice(0, 4).map((story) => (
                <div
                  key={story.id}
                  onClick={() => handleStoryClick(story.id)}
                  className="cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
                >
                  <img
                    src={story.image || 'https://via.placeholder.com/300'}
                    alt={story.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3">
                    <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
                      {story.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(story.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate('/all-top-hockey-stories')}
              className="mt-4 w-full text-center text-blue-600 font-medium hover:underline text-sm"
            >
              View All Stories →
            </button>
          </div>
        </div>
      </div>

      {/* Latest Sports News Section */}
      <div className="mt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Latest Sports News
              </h3>
              <button
                onClick={() => navigate('/all-latest-news')}
                className="text-blue-600 hover:underline font-medium text-sm sm:text-base"
              >
                View All →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {LatestNews.data.LatestNews.slice(0, 6).map((article) => (
                <div
                  key={article.title}
                  onClick={() => handleNewsCardClick(article.title)}
                  className="bg-gray-50 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <img
                    src={article.image || "https://via.placeholder.com/400x250"}
                    alt={article.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h4 className="text-base font-semibold text-gray-800 line-clamp-2 mb-2">
                      {article.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {article.description}
                    </p>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Source: {article.source}</span>
                      <span>
                        {new Date(article.published).toLocaleDateString('en-US', {
                          month: 'short',
                          day: '2-digit',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeagueDetail;
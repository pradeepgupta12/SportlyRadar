// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { BarChart3, TrendingUp, Award, Target, Activity, Users, Trophy, ArrowUp, ArrowDown } from 'lucide-react';

// const FootballStats = () => {
//   const [activeCategory, setActiveCategory] = useState('players');
//   const [selectedLeague, setSelectedLeague] = useState('Premier League');

//   const playerStats = [
//     {
//       id: 1,
//       name: 'Erling Haaland',
//       team: 'Manchester City',
//       league: 'Premier League',
//       position: 'Forward',
//       goals: 28,
//       assists: 7,
//       matches: 22,
//       minutesPlayed: 1890,
//       goalsPerMatch: 1.27,
//       passAccuracy: 78,
//       shotsOnTarget: 62,
//       dribbles: 45,
//       rating: 9.2
//     },
//     {
//       id: 2,
//       name: 'Mohamed Salah',
//       team: 'Liverpool',
//       league: 'Premier League',
//       position: 'Forward',
//       goals: 24,
//       assists: 12,
//       matches: 23,
//       minutesPlayed: 2070,
//       goalsPerMatch: 1.04,
//       passAccuracy: 82,
//       shotsOnTarget: 58,
//       dribbles: 78,
//       rating: 8.9
//     },
//     {
//       id: 3,
//       name: 'Kevin De Bruyne',
//       team: 'Manchester City',
//       league: 'Premier League',
//       position: 'Midfielder',
//       goals: 12,
//       assists: 19,
//       matches: 24,
//       minutesPlayed: 2016,
//       goalsPerMatch: 0.5,
//       passAccuracy: 89,
//       shotsOnTarget: 35,
//       dribbles: 52,
//       rating: 8.8
//     },
//     {
//       id: 4,
//       name: 'Bukayo Saka',
//       team: 'Arsenal',
//       league: 'Premier League',
//       position: 'Midfielder',
//       goals: 16,
//       assists: 11,
//       matches: 23,
//       minutesPlayed: 1980,
//       goalsPerMatch: 0.7,
//       passAccuracy: 85,
//       shotsOnTarget: 42,
//       dribbles: 88,
//       rating: 8.5
//     }
//   ];

//   const teamStats = [
//     {
//       id: 1,
//       name: 'Manchester City',
//       league: 'Premier League',
//       played: 24,
//       won: 18,
//       drawn: 4,
//       lost: 2,
//       goalsFor: 62,
//       goalsAgainst: 22,
//       goalDifference: 40,
//       points: 58,
//       form: ['W', 'W', 'D', 'W', 'W'],
//       possession: 68,
//       passAccuracy: 89,
//       shotsPerGame: 18.5
//     },
//     {
//       id: 2,
//       name: 'Arsenal',
//       league: 'Premier League',
//       played: 24,
//       won: 17,
//       drawn: 5,
//       lost: 2,
//       goalsFor: 58,
//       goalsAgainst: 24,
//       goalDifference: 34,
//       points: 56,
//       form: ['W', 'D', 'W', 'W', 'W'],
//       possession: 63,
//       passAccuracy: 86,
//       shotsPerGame: 16.2
//     },
//     {
//       id: 3,
//       name: 'Liverpool',
//       league: 'Premier League',
//       played: 23,
//       won: 16,
//       drawn: 5,
//       lost: 2,
//       goalsFor: 54,
//       goalsAgainst: 26,
//       goalDifference: 28,
//       points: 53,
//       form: ['W', 'W', 'D', 'W', 'L'],
//       possession: 61,
//       passAccuracy: 84,
//       shotsPerGame: 15.8
//     }
//   ];

//   const categories = [
//     { id: 'players', name: 'Player Stats', icon: Users },
//     { id: 'teams', name: 'Team Stats', icon: Trophy },
//     { id: 'leagues', name: 'League Stats', icon: BarChart3 }
//   ];

//   const leagues = ['Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1'];

//   const getFormColor = (result) => {
//     const colors = {
//       'W': 'bg-green-500',
//       'D': 'bg-yellow-500',
//       'L': 'bg-red-500'
//     };
//     return colors[result] || 'bg-gray-500';
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="text-5xl font-bold mb-3">📊 Statistics Corner</h1>
//           <p className="text-indigo-100 text-lg">Comprehensive football statistics and analytics</p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Quick Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//           <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg">
//             <Target className="w-8 h-8 mb-2" />
//             <p className="text-3xl font-bold">2,834</p>
//             <p className="text-blue-100">Total Goals</p>
//           </div>
//           <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg">
//             <Activity className="w-8 h-8 mb-2" />
//             <p className="text-3xl font-bold">1,247</p>
//             <p className="text-green-100">Total Assists</p>
//           </div>
//           <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
//             <Trophy className="w-8 h-8 mb-2" />
//             <p className="text-3xl font-bold">380</p>
//             <p className="text-purple-100">Matches Played</p>
//           </div>
//           <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6 shadow-lg">
//             <Award className="w-8 h-8 mb-2" />
//             <p className="text-3xl font-bold">7.46</p>
//             <p className="text-orange-100">Avg Goals/Match</p>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <div className="flex gap-2 overflow-x-auto w-full md:w-auto">
//               {categories.map(category => {
//                 const Icon = category.icon;
//                 return (
//                   <button
//                     key={category.id}
//                     onClick={() => setActiveCategory(category.id)}
//                     className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
//                       activeCategory === category.id
//                         ? 'bg-indigo-600 text-white'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     <Icon className="w-5 h-5" />
//                     {category.name}
//                   </button>
//                 );
//               })}
//             </div>

//             <select
//               value={selectedLeague}
//               onChange={(e) => setSelectedLeague(e.target.value)}
//               className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
//             >
//               {leagues.map(league => (
//                 <option key={league} value={league}>{league}</option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Player Stats */}
//         {activeCategory === 'players' && (
//           <div className="space-y-4">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">Top Players - {selectedLeague}</h2>
//             {playerStats.map((player, index) => (
//               <Link
//                 key={player.id}
//                 to={`/football/player/${player.id}`}
//                 className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
//               >
//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center gap-4">
//                       <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full flex items-center justify-center">
//                         <span className="text-2xl font-bold text-white">#{index + 1}</span>
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-bold text-gray-800">{player.name}</h3>
//                         <p className="text-sm text-gray-600">{player.team} • {player.position}</p>
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <div className="flex items-center gap-1 text-yellow-500 mb-1">
//                         <Award className="w-5 h-5" />
//                         <span className="text-2xl font-bold">{player.rating}</span>
//                       </div>
//                       <p className="text-xs text-gray-500">Rating</p>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//                     <div className="bg-blue-50 rounded-lg p-3 text-center">
//                       <p className="text-2xl font-bold text-blue-600">{player.goals}</p>
//                       <p className="text-xs text-gray-600">Goals</p>
//                     </div>
//                     <div className="bg-green-50 rounded-lg p-3 text-center">
//                       <p className="text-2xl font-bold text-green-600">{player.assists}</p>
//                       <p className="text-xs text-gray-600">Assists</p>
//                     </div>
//                     <div className="bg-purple-50 rounded-lg p-3 text-center">
//                       <p className="text-2xl font-bold text-purple-600">{player.matches}</p>
//                       <p className="text-xs text-gray-600">Matches</p>
//                     </div>
//                     <div className="bg-orange-50 rounded-lg p-3 text-center">
//                       <p className="text-2xl font-bold text-orange-600">{player.passAccuracy}%</p>
//                       <p className="text-xs text-gray-600">Pass Acc.</p>
//                     </div>
//                     <div className="bg-pink-50 rounded-lg p-3 text-center">
//                       <p className="text-2xl font-bold text-pink-600">{player.dribbles}</p>
//                       <p className="text-xs text-gray-600">Dribbles</p>
//                     </div>
//                   </div>

//                   <div className="mt-4 pt-4 border-t border-gray-200">
//                     <div className="flex justify-between text-sm">
//                       <span className="text-gray-600">Goals per Match: <span className="font-bold text-gray-800">{player.goalsPerMatch}</span></span>
//                       <span className="text-gray-600">Minutes Played: <span className="font-bold text-gray-800">{player.minutesPlayed}</span></span>
//                       <span className="text-gray-600">Shots on Target: <span className="font-bold text-gray-800">{player.shotsOnTarget}</span></span>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         )}

//         {/* Team Stats */}
//         {activeCategory === 'teams' && (
//           <div className="space-y-4">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">Team Standings - {selectedLeague}</h2>
//             <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
//                     <tr>
//                       <th className="px-6 py-4 text-left text-sm font-bold">Pos</th>
//                       <th className="px-6 py-4 text-left text-sm font-bold">Team</th>
//                       <th className="px-6 py-4 text-center text-sm font-bold">P</th>
//                       <th className="px-6 py-4 text-center text-sm font-bold">W</th>
//                       <th className="px-6 py-4 text-center text-sm font-bold">D</th>
//                       <th className="px-6 py-4 text-center text-sm font-bold">L</th>
//                       <th className="px-6 py-4 text-center text-sm font-bold">GF</th>
//                       <th className="px-6 py-4 text-center text-sm font-bold">GA</th>
//                       <th className="px-6 py-4 text-center text-sm font-bold">GD</th>
//                       <th className="px-6 py-4 text-center text-sm font-bold">Pts</th>
//                       <th className="px-6 py-4 text-center text-sm font-bold">Form</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200">
//                     {teamStats.map((team, index) => (
//                       <tr key={team.id} className="hover:bg-gray-50 transition-colors">
//                         <td className="px-6 py-4">
//                           <div className="flex items-center gap-2">
//                             <span className="font-bold text-gray-800">{index + 1}</span>
//                             {index === 0 && <ArrowUp className="w-4 h-4 text-green-500" />}
//                           </div>
//                         </td>
//                         <td className="px-6 py-4">
//                           <Link to={`/football/team/${team.id}`} className="font-bold text-gray-800 hover:text-indigo-600">
//                             {team.name}
//                           </Link>
//                         </td>
//                         <td className="px-6 py-4 text-center text-gray-700">{team.played}</td>
//                         <td className="px-6 py-4 text-center text-green-600 font-semibold">{team.won}</td>
//                         <td className="px-6 py-4 text-center text-yellow-600 font-semibold">{team.drawn}</td>
//                         <td className="px-6 py-4 text-center text-red-600 font-semibold">{team.lost}</td>
//                         <td className="px-6 py-4 text-center text-gray-700">{team.goalsFor}</td>
//                         <td className="px-6 py-4 text-center text-gray-700">{team.goalsAgainst}</td>
//                         <td className="px-6 py-4 text-center font-bold text-indigo-600">{team.goalDifference > 0 ? '+' : ''}{team.goalDifference}</td>
//                         <td className="px-6 py-4 text-center">
//                           <span className="inline-block bg-indigo-600 text-white font-bold px-3 py-1 rounded-full">
//                             {team.points}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4">
//                           <div className="flex gap-1 justify-center">
//                             {team.form.map((result, idx) => (
//                               <span
//                                 key={idx}
//                                 className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${getFormColor(result)}`}
//                               >
//                                 {result}
//                               </span>
//                             ))}
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* League Stats */}
//         {activeCategory === 'leagues' && (
//           <div className="space-y-6">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">League Overview - {selectedLeague}</h2>
            
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="bg-white rounded-xl shadow-lg p-6">
//                 <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
//                   <TrendingUp className="text-indigo-600" />
//                   Top Scorers
//                 </h3>
//                 <div className="space-y-3">
//                   {playerStats.slice(0, 5).map((player, index) => (
//                     <div key={player.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
//                       <div className="flex items-center gap-3">
//                         <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
//                           {index + 1}
//                         </span>
//                         <div>
//                           <p className="font-semibold text-gray-800">{player.name}</p>
//                           <p className="text-xs text-gray-500">{player.team}</p>
//                         </div>
//                       </div>
//                       <span className="text-2xl font-bold text-indigo-600">{player.goals}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl shadow-lg p-6">
//                 <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
//                   <Activity className="text-green-600" />
//                   Top Assist Providers
//                 </h3>
//                 <div className="space-y-3">
//                   {[...playerStats].sort((a, b) => b.assists - a.assists).slice(0, 5).map((player, index) => (
//                     <div key={player.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
//                       <div className="flex items-center gap-3">
//                         <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
//                           {index + 1}
//                         </span>
//                         <div>
//                           <p className="font-semibold text-gray-800">{player.name}</p>
//                           <p className="text-xs text-gray-500">{player.team}</p>
//                         </div>
//                       </div>
//                       <span className="text-2xl font-bold text-green-600">{player.assists}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FootballStats;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { BarChart3, Trophy, Users, Target, Activity } from 'lucide-react';

// const FootballStats = () => {
//   const [activeCategory, setActiveCategory] = useState('players');
//   const [selectedLeague, setSelectedLeague] = useState('Premier League');

//   // Updated with real data as of early January 2026
//   const playerStats = [
//     {
//       id: 1,
//       name: 'Erling Haaland',
//       team: 'Manchester City',
//       position: 'Forward',
//       goals: 19,
//       assists: 5,
//       matches: 19,
//       rating: 8.1
//     },
//     {
//       id: 2,
//       name: 'Igor Thiago',
//       team: 'Brentford',
//       position: 'Forward',
//       goals: 11,
//       assists: 4,
//       matches: 18,
//       rating: 7.8
//     },
//     {
//       id: 3,
//       name: 'Antoine Semenyo',
//       team: 'Bournemouth',
//       position: 'Forward',
//       goals: 9,
//       assists: 3,
//       matches: 19,
//       rating: 7.6
//     },
//     {
//       id: 4,
//       name: 'Jean-Philippe Mateta',
//       team: 'Crystal Palace',
//       position: 'Forward',
//       goals: 8,
//       assists: 2,
//       matches: 17,
//       rating: 7.5
//     },
//     {
//       id: 5,
//       name: 'Dominic Calvert-Lewin',
//       team: 'Everton',
//       position: 'Forward',
//       goals: 8,
//       assists: 3,
//       matches: 19,
//       rating: 7.4
//     }
//   ];

//   const teamStats = [
//     {
//       id: 1,
//       name: 'Arsenal',
//       played: 19,
//       won: 14,
//       drawn: 3,
//       lost: 2,
//       gf: 48,
//       ga: 18,
//       gd: 30,
//       points: 45,
//       form: ['W', 'W', 'W', 'D', 'W']
//     },
//     {
//       id: 2,
//       name: 'Manchester City',
//       played: 19,
//       won: 12,
//       drawn: 5,
//       lost: 2,
//       gf: 42,
//       ga: 20,
//       gd: 22,
//       points: 41,
//       form: ['D', 'W', 'W', 'W', 'D']
//     },
//     {
//       id: 3,
//       name: 'Aston Villa',
//       played: 19,
//       won: 12,
//       drawn: 3,
//       lost: 4,
//       gf: 40,
//       ga: 25,
//       gd: 15,
//       points: 39,
//       form: ['L', 'W', 'D', 'W', 'W']
//     },
//     {
//       id: 4,
//       name: 'Liverpool',
//       played: 19,
//       won: 9,
//       drawn: 6,
//       lost: 4,
//       gf: 38,
//       ga: 22,
//       gd: 16,
//       points: 33,
//       form: ['D', 'W', 'L', 'W', 'D']
//     },
//     {
//       id: 5,
//       name: 'Chelsea',
//       played: 19,
//       won: 10,
//       drawn: 4,
//       lost: 5,
//       gf: 35,
//       ga: 28,
//       gd: 7,
//       points: 34,
//       form: ['W', 'D', 'L', 'W', 'W']
//     }
//   ];

//   const categories = [
//     { id: 'players', name: 'Players', icon: Users },
//     { id: 'teams', name: 'Teams', icon: Trophy },
//     { id: 'leagues', name: 'Leagues', icon: BarChart3 }
//   ];

//   const leagues = ['Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1'];

//   const getFormColor = (result) => {
//     const colors = { 'W': 'bg-green-500', 'D': 'bg-yellow-500', 'L': 'bg-red-500' };
//     return colors[result] || 'bg-gray-500';
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
//       {/* Compact Header */}
//       <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-10">
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="text-4xl font-bold mb-2">📊 Football Statistics</h1>
//           <p className="text-indigo-100 text-lg">Latest stats from top leagues – Season 2025/26</p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Compact Quick Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//           <div className="bg-white rounded-xl p-5 shadow text-center">
//             <Target className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
//             <p className="text-2xl font-bold">~520</p>
//             <p className="text-sm text-gray-600">Total Goals</p>
//           </div>
//           <div className="bg-white rounded-xl p-5 shadow text-center">
//             <Activity className="w-8 h-8 mx-auto mb-2 text-green-600" />
//             <p className="text-2xl font-bold">~300</p>
//             <p className="text-sm text-gray-600">Total Assists</p>
//           </div>
//           <div className="bg-white rounded-xl p-5 shadow text-center">
//             <Trophy className="w-8 h-8 mx-auto mb-2 text-purple-600" />
//             <p className="text-2xl font-bold">190</p>
//             <p className="text-sm text-gray-600">Matches Played</p>
//           </div>
//           <div className="bg-white rounded-xl p-5 shadow text-center">
//             <BarChart3 className="w-8 h-8 mx-auto mb-2 text-orange-600" />
//             <p className="text-2xl font-bold">~2.7</p>
//             <p className="text-sm text-gray-600">Avg Goals/Match</p>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="bg-white rounded-xl shadow-lg p-5 mb-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <div className="flex gap-3 overflow-x-auto pb-2">
//               {categories.map(category => {
//                 const Icon = category.icon;
//                 return (
//                   <button
//                     key={category.id}
//                     onClick={() => setActiveCategory(category.id)}
//                     className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold whitespace-nowrap transition-all ${
//                       activeCategory === category.id
//                         ? 'bg-indigo-600 text-white shadow'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     <Icon className="w-5 h-5" />
//                     {category.name}
//                   </button>
//                 );
//               })}
//             </div>

//             <select
//               value={selectedLeague}
//               onChange={(e) => setSelectedLeague(e.target.value)}
//               className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white"
//             >
//               {leagues.map(league => (
//                 <option key={league} value={league}>{league}</option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Player Stats - Compact Cards */}
//         {activeCategory === 'players' && (
//           <div className="space-y-4">
//             <h2 className="text-xl font-bold text-gray-800 mb-4">Top Scorers - {selectedLeague}</h2>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {playerStats.map((player, index) => (
//                 <div key={player.id} className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between">
//                   <div className="flex items-center gap-4">
//                     <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
//                       index === 0 ? 'bg-yellow-400 text-white' :
//                       index === 1 ? 'bg-gray-300 text-white' :
//                       index === 2 ? 'bg-orange-400 text-white' :
//                       'bg-gray-100 text-gray-700'
//                     }`}>
//                       {index + 1}
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-gray-800">{player.name}</h3>
//                       <p className="text-sm text-gray-600">{player.team}</p>
//                     </div>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-3xl font-bold text-indigo-600">{player.goals}</p>
//                     <p className="text-xs text-gray-600">Goals</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Team Stats - Compact Table */}
//         {activeCategory === 'teams' && (
//           <div>
//             <h2 className="text-xl font-bold text-gray-800 mb-4">Standings - {selectedLeague}</h2>
//             <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//               <div className="overflow-x-auto">
//                 <table className="w-full text-sm">
//                   <thead className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
//                     <tr>
//                       <th className="px-4 py-3 text-left">Pos</th>
//                       <th className="px-4 py-3 text-left">Team</th>
//                       <th className="px-4 py-3 text-center">P</th>
//                       <th className="px-4 py-3 text-center">W</th>
//                       <th className="px-4 py-3 text-center">D</th>
//                       <th className="px-4 py-3 text-center">L</th>
//                       <th className="px-4 py-3 text-center">GD</th>
//                       <th className="px-4 py-3 text-center">Pts</th>
//                       <th className="px-4 py-3 text-center">Form</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200">
//                     {teamStats.map((team, index) => (
//                       <tr key={team.id} className="hover:bg-gray-50">
//                         <td className="px-4 py-3">
//                           <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full font-bold text-sm ${
//                             index === 0 ? 'bg-yellow-400 text-white' :
//                             index < 4 ? 'bg-indigo-500 text-white' :
//                             'bg-gray-200 text-gray-700'
//                           }`}>
//                             {index + 1}
//                           </span>
//                         </td>
//                         <td className="px-4 py-3 font-medium text-gray-800">{team.name}</td>
//                         <td className="px-4 py-3 text-center">{team.played}</td>
//                         <td className="px-4 py-3 text-center text-green-600 font-medium">{team.won}</td>
//                         <td className="px-4 py-3 text-center text-yellow-600 font-medium">{team.drawn}</td>
//                         <td className="px-4 py-3 text-center text-red-600 font-medium">{team.lost}</td>
//                         <td className="px-4 py-3 text-center font-medium">{team.gd > 0 ? '+' : ''}{team.gd}</td>
//                         <td className="px-4 py-3 text-center">
//                           <span className="bg-indigo-600 text-white font-bold px-3 py-1 rounded-full text-sm">
//                             {team.points}
//                           </span>
//                         </td>
//                         <td className="px-4 py-3">
//                           <div className="flex gap-1 justify-center">
//                             {team.form.map((result, idx) => (
//                               <span key={idx} className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${getFormColor(result)}`}>
//                                 {result}
//                               </span>
//                             ))}
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* League Stats - Compact Side-by-Side */}
//         {activeCategory === 'leagues' && (
//           <div>
//             <h2 className="text-xl font-bold text-gray-800 mb-4">League Leaders - {selectedLeague}</h2>
//             <div className="grid md:grid-cols-2 gap-5">
//               <div className="bg-white rounded-xl shadow-md p-5">
//                 <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
//                   <Target className="w-5 h-5 text-indigo-600" />
//                   Top Scorers
//                 </h3>
//                 <div className="space-y-3">
//                   {playerStats.map((player, index) => (
//                     <div key={player.id} className="flex items-center justify-between">
//                       <div className="flex items-center gap-3">
//                         <span className="text-sm font-bold text-gray-600 w-6">{index + 1}.</span>
//                         <div>
//                           <p className="font-medium">{player.name}</p>
//                           <p className="text-xs text-gray-500">{player.team}</p>
//                         </div>
//                       </div>
//                       <span className="text-xl font-bold text-indigo-600">{player.goals}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl shadow-md p-5">
//                 <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
//                   <Activity className="w-5 h-5 text-green-600" />
//                   Top Assists (Estimated)
//                 </h3>
//                 <div className="space-y-3">
//                   {playerStats.sort((a, b) => b.assists - a.assists).map((player, index) => (
//                     <div key={player.id} className="flex items-center justify-between">
//                       <div className="flex items-center gap-3">
//                         <span className="text-sm font-bold text-gray-600 w-6">{index + 1}.</span>
//                         <div>
//                           <p className="font-medium">{player.name}</p>
//                           <p className="text-xs text-gray-500">{player.team}</p>
//                         </div>
//                       </div>
//                       <span className="text-xl font-bold text-green-600">{player.assists}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FootballStats;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BarChart3, Trophy, Users, Target, Activity } from 'lucide-react';
import TopFootballStories from '../../data/TopFootballStories.js';
import LatestNews from '../../data/LatestNews.js';

const FootballStats = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('players');
  const [selectedLeague, setSelectedLeague] = useState('Premier League');

  // Updated with real data as of early January 2026
  const playerStats = [
    {
      id: 1,
      name: 'Erling Haaland',
      team: 'Manchester City',
      position: 'Forward',
      goals: 19,
      assists: 5,
      matches: 19,
      rating: 8.1
    },
    {
      id: 2,
      name: 'Igor Thiago',
      team: 'Brentford',
      position: 'Forward',
      goals: 11,
      assists: 4,
      matches: 18,
      rating: 7.8
    },
    {
      id: 3,
      name: 'Antoine Semenyo',
      team: 'Bournemouth',
      position: 'Forward',
      goals: 9,
      assists: 3,
      matches: 19,
      rating: 7.6
    },
    {
      id: 4,
      name: 'Jean-Philippe Mateta',
      team: 'Crystal Palace',
      position: 'Forward',
      goals: 8,
      assists: 2,
      matches: 17,
      rating: 7.5
    },
    {
      id: 5,
      name: 'Dominic Calvert-Lewin',
      team: 'Everton',
      position: 'Forward',
      goals: 8,
      assists: 3,
      matches: 19,
      rating: 7.4
    }
  ];

  const teamStats = [
    {
      id: 1,
      name: 'Arsenal',
      played: 19,
      won: 14,
      drawn: 3,
      lost: 2,
      gf: 48,
      ga: 18,
      gd: 30,
      points: 45,
      form: ['W', 'W', 'W', 'D', 'W']
    },
    {
      id: 2,
      name: 'Manchester City',
      played: 19,
      won: 12,
      drawn: 5,
      lost: 2,
      gf: 42,
      ga: 20,
      gd: 22,
      points: 41,
      form: ['D', 'W', 'W', 'W', 'D']
    },
    {
      id: 3,
      name: 'Aston Villa',
      played: 19,
      won: 12,
      drawn: 3,
      lost: 4,
      gf: 40,
      ga: 25,
      gd: 15,
      points: 39,
      form: ['L', 'W', 'D', 'W', 'W']
    },
    {
      id: 4,
      name: 'Liverpool',
      played: 19,
      won: 9,
      drawn: 6,
      lost: 4,
      gf: 38,
      ga: 22,
      gd: 16,
      points: 33,
      form: ['D', 'W', 'L', 'W', 'D']
    },
    {
      id: 5,
      name: 'Chelsea',
      played: 19,
      won: 10,
      drawn: 4,
      lost: 5,
      gf: 35,
      ga: 28,
      gd: 7,
      points: 34,
      form: ['W', 'D', 'L', 'W', 'W']
    }
  ];

  const categories = [
    { id: 'players', name: 'Players', icon: Users },
    { id: 'teams', name: 'Teams', icon: Trophy },
    { id: 'leagues', name: 'Leagues', icon: BarChart3 }
  ];

  const leagues = ['Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1'];

  const getFormColor = (result) => {
    const colors = { 'W': 'bg-green-500', 'D': 'bg-yellow-500', 'L': 'bg-red-500' };
    return colors[result] || 'bg-gray-500';
  };

  const handleStoryClick = (id) => {
    navigate(`/details/football/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6">

            {/* Compact Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-10 rounded-xl shadow-xl">
              <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold mb-2">📊 Football Statistics</h1>
                <p className="text-indigo-100 text-lg">Latest stats from top leagues – Season 2025/26</p>
              </div>
            </div>

            {/* Compact Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-xl p-5 shadow text-center">
                <Target className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
                <p className="text-2xl font-bold">~520</p>
                <p className="text-sm text-gray-600">Total Goals</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow text-center">
                <Activity className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <p className="text-2xl font-bold">~300</p>
                <p className="text-sm text-gray-600">Total Assists</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow text-center">
                <Trophy className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                <p className="text-2xl font-bold">190</p>
                <p className="text-sm text-gray-600">Matches Played</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow text-center">
                <BarChart3 className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                <p className="text-2xl font-bold">~2.7</p>
                <p className="text-sm text-gray-600">Avg Goals/Match</p>
              </div>
            </div>

            {/* Filters - Fixed for Mobile Responsiveness */}
            <div className="bg-white rounded-xl shadow-lg p-5 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="w-full flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {categories.map(category => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                          activeCategory === category.id
                            ? 'bg-indigo-600 text-white shadow'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        {category.name}
                      </button>
                    );
                  })}
                </div>

                <select
                  value={selectedLeague}
                  onChange={(e) => setSelectedLeague(e.target.value)}
                  className="w-full md:w-auto px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white"
                >
                  {leagues.map(league => (
                    <option key={league} value={league}>{league}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Player Stats */}
            {activeCategory === 'players' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Top Scorers - {selectedLeague}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {playerStats.map((player, index) => (
                    <div key={player.id} className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                          index === 0 ? 'bg-yellow-400 text-white' :
                          index === 1 ? 'bg-gray-300 text-white' :
                          index === 2 ? 'bg-orange-400 text-white' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800">{player.name}</h3>
                          <p className="text-sm text-gray-600">{player.team}</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-indigo-600">{player.goals}</p>
                        <p className="text-xs text-gray-600">Goals</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Team Stats */}
            {activeCategory === 'teams' && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Standings - {selectedLeague}</h2>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
                        <tr>
                          <th className="px-4 py-3 text-left">Pos</th>
                          <th className="px-4 py-3 text-left">Team</th>
                          <th className="px-4 py-3 text-center">P</th>
                          <th className="px-4 py-3 text-center">W</th>
                          <th className="px-4 py-3 text-center">D</th>
                          <th className="px-4 py-3 text-center">L</th>
                          <th className="px-4 py-3 text-center">GD</th>
                          <th className="px-4 py-3 text-center">Pts</th>
                          <th className="px-4 py-3 text-center">Form</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {teamStats.map((team, index) => (
                          <tr key={team.id} className="hover:bg-gray-50">
                            <td className="px-4 py-3">
                              <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full font-bold text-sm ${
                                index === 0 ? 'bg-yellow-400 text-white' :
                                index < 4 ? 'bg-indigo-500 text-white' :
                                'bg-gray-200 text-gray-700'
                              }`}>
                                {index + 1}
                              </span>
                            </td>
                            <td className="px-4 py-3 font-medium text-gray-800">
                              <Link to={`/football/team/${team.id}`} className="hover:text-indigo-600 transition-colors">
                                {team.name}
                              </Link>
                            </td>
                            <td className="px-4 py-3 text-center">{team.played}</td>
                            <td className="px-4 py-3 text-center text-green-600 font-medium">{team.won}</td>
                            <td className="px-4 py-3 text-center text-yellow-600 font-medium">{team.drawn}</td>
                            <td className="px-4 py-3 text-center text-red-600 font-medium">{team.lost}</td>
                            <td className="px-4 py-3 text-center font-medium">{team.gd > 0 ? '+' : ''}{team.gd}</td>
                            <td className="px-4 py-3 text-center">
                              <span className="bg-indigo-600 text-white font-bold px-3 py-1 rounded-full text-sm">
                                {team.points}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex gap-1 justify-center">
                                {team.form.map((result, idx) => (
                                  <span key={idx} className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${getFormColor(result)}`}>
                                    {result}
                                  </span>
                                ))}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* League Stats */}
            {activeCategory === 'leagues' && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">League Leaders - {selectedLeague}</h2>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white rounded-xl shadow-md p-5">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-indigo-600" />
                      Top Scorers
                    </h3>
                    <div className="space-y-3">
                      {playerStats.map((player, index) => (
                        <div key={player.id} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-gray-600 w-6">{index + 1}.</span>
                            <div>
                              <p className="font-medium">{player.name}</p>
                              <p className="text-xs text-gray-500">{player.team}</p>
                            </div>
                          </div>
                          <span className="text-xl font-bold text-indigo-600">{player.goals}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-md p-5">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Activity className="w-5 h-5 text-green-600" />
                      Top Assists (Estimated)
                    </h3>
                    <div className="space-y-3">
                      {playerStats.sort((a, b) => b.assists - a.assists).map((player, index) => (
                        <div key={player.id} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-gray-600 w-6">{index + 1}.</span>
                            <div>
                              <p className="font-medium">{player.name}</p>
                              <p className="text-xs text-gray-500">{player.team}</p>
                            </div>
                          </div>
                          <span className="text-xl font-bold text-green-600">{player.assists}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar - Desktop Only */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-5">Top Football Stories</h3>
              <div className="space-y-4">
                {TopFootballStories.data.TopFootballStories.slice(0, 5).map((story) => (
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
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-indigo-600 transition-colors">
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
                onClick={() => navigate('/all-top-football-stories')}
                className="mt-6 w-full text-center text-indigo-600 font-medium hover:underline text-sm"
              >
                View All Stories →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Top Football Stories */}
      <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top Football Stories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TopFootballStories.data.TopFootballStories.slice(0, 4).map((story) => (
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
              onClick={() => navigate('/all-top-football-stories')}
              className="mt-4 w-full text-center text-indigo-600 font-medium hover:underline text-sm"
            >
              View All Stories →
            </button>
          </div>
        </div>
      </div>

      {/* Latest Sports News */}
      <div className="mt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Latest Sports News
              </h3>
              <button
                onClick={() => navigate('/all-latest-news')}
                className="text-indigo-600 hover:underline font-medium text-sm sm:text-base"
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

export default FootballStats;
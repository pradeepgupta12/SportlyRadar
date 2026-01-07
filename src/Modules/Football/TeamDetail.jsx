// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Trophy, Users, MapPin, Calendar, TrendingUp, Target, Award, Shield } from 'lucide-react';

// const FootballTeamDetail = () => {
//   const { teamId } = useParams();
//   const [activeTab, setActiveTab] = useState('overview');

//   // Mock team data
//   const team = {
//     id: 'manchester-city',
//     name: 'Manchester City',
//     fullName: 'Manchester City Football Club',
//     nickname: 'The Citizens',
//     founded: 1880,
//     stadium: 'Etihad Stadium',
//     capacity: 53400,
//     city: 'Manchester',
//     country: '🏴󐁧󐁢󐁥󐁮󐁧󐁿',
//     league: 'Premier League',
//     manager: 'Pep Guardiola',
//     chairman: 'Khaldoon Al Mubarak',
//     teamValue: '€1.26B',
//     colors: ['Sky Blue', 'White'],
//     currentSeason: {
//       position: 1,
//       played: 24,
//       won: 18,
//       drawn: 4,
//       lost: 2,
//       goalsFor: 62,
//       goalsAgainst: 22,
//       goalDifference: 40,
//       points: 58,
//       form: ['W', 'W', 'D', 'W', 'W']
//     },
//     topPlayers: [
//       { name: 'Erling Haaland', position: 'Forward', goals: 28, assists: 7, rating: 9.2 },
//       { name: 'Kevin De Bruyne', position: 'Midfielder', goals: 12, assists: 19, rating: 8.8 },
//       { name: 'Phil Foden', position: 'Midfielder', goals: 15, assists: 11, rating: 8.5 },
//       { name: 'Rodri', position: 'Midfielder', goals: 8, assists: 6, rating: 8.5 },
//       { name: 'John Stones', position: 'Defender', goals: 4, assists: 2, rating: 8.2 }
//     ],
//     recentMatches: [
//       { date: '2026-01-02', opponent: 'Arsenal', result: 'D', score: '2-2', competition: 'Premier League' },
//       { date: '2025-12-28', opponent: 'Liverpool', result: 'W', score: '3-1', competition: 'Premier League' },
//       { date: '2025-12-21', opponent: 'Chelsea', result: 'W', score: '2-0', competition: 'Premier League' },
//       { date: '2025-12-14', opponent: 'Tottenham', result: 'W', score: '4-1', competition: 'Premier League' },
//       { date: '2025-12-07', opponent: 'Newcastle', result: 'D', score: '1-1', competition: 'Premier League' }
//     ],
//     trophies: [
//       { name: 'Premier League', count: 9, years: ['2011/12', '2013/14', '2017/18', '2018/19', '2020/21', '2021/22', '2022/23', '2023/24', '2024/25'] },
//       { name: 'FA Cup', count: 7 },
//       { name: 'League Cup', count: 8 },
//       { name: 'UEFA Champions League', count: 1, years: ['2022/23'] },
//       { name: 'UEFA Super Cup', count: 1, years: ['2023'] },
//       { name: 'FIFA Club World Cup', count: 1, years: ['2023'] }
//     ],
//     records: [
//       '🏆 Most Premier League titles in a row: 4 (2017-2021)',
//       '⚽ Most goals in a Premier League season: 106 (2017/18)',
//       '🎯 Highest points in a Premier League season: 100 (2017/18)',
//       '👑 First English team to win domestic treble (2018/19)'
//     ]
//   };

//   const getFormColor = (result) => {
//     const colors = { 'W': 'bg-green-500', 'D': 'bg-yellow-500', 'L': 'bg-red-500' };
//     return colors[result] || 'bg-gray-500';
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-sky-50">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white">
//         <div className="max-w-7xl mx-auto px-4 py-16">
//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Team Info */}
//             <div>
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
//                   <Shield className="w-16 h-16 text-sky-600" />
//                 </div>
//                 <div>
//                   <h1 className="text-6xl font-bold mb-2">{team.name}</h1>
//                   <p className="text-2xl text-sky-100">{team.nickname}</p>
//                 </div>
//               </div>
              
//               <div className="space-y-3 text-lg">
//                 <p className="flex items-center gap-2">
//                   <Trophy className="w-5 h-5" />
//                   {team.league}
//                 </p>
//                 <p className="flex items-center gap-2">
//                   <MapPin className="w-5 h-5" />
//                   {team.stadium} ({team.capacity.toLocaleString()} capacity)
//                 </p>
//                 <p className="flex items-center gap-2">
//                   <Users className="w-5 h-5" />
//                   Manager: <span className="font-bold">{team.manager}</span>
//                 </p>
//                 <p className="flex items-center gap-2">
//                   <Calendar className="w-5 h-5" />
//                   Founded: <span className="font-bold">{team.founded}</span>
//                 </p>
//               </div>
//             </div>

//             {/* Current Season Stats */}
//             <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
//               <h3 className="text-2xl font-bold mb-6">Current Season (2025/26)</h3>
              
//               <div className="grid grid-cols-2 gap-4 mb-6">
//                 <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
//                   <p className="text-5xl font-bold">{team.currentSeason.position}</p>
//                   <p className="text-sky-100 mt-1">Position</p>
//                 </div>
//                 <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
//                   <p className="text-5xl font-bold">{team.currentSeason.points}</p>
//                   <p className="text-sky-100 mt-1">Points</p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-3 gap-3">
//                 <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
//                   <p className="text-3xl font-bold">{team.currentSeason.won}</p>
//                   <p className="text-sky-100 text-sm">Wins</p>
//                 </div>
//                 <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
//                   <p className="text-3xl font-bold">{team.currentSeason.drawn}</p>
//                   <p className="text-sky-100 text-sm">Draws</p>
//                 </div>
//                 <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
//                   <p className="text-3xl font-bold">{team.currentSeason.lost}</p>
//                   <p className="text-sky-100 text-sm">Losses</p>
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <p className="text-sm text-sky-100 mb-2">Recent Form</p>
//                 <div className="flex gap-2">
//                   {team.currentSeason.form.map((result, idx) => (
//                     <span
//                       key={idx}
//                       className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold ${getFormColor(result)}`}
//                     >
//                       {result}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Quick Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//           <div className="bg-white rounded-xl p-6 shadow-lg text-center">
//             <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
//             <p className="text-3xl font-bold text-gray-800">{team.currentSeason.goalsFor}</p>
//             <p className="text-sm text-gray-600">Goals Scored</p>
//           </div>
//           <div className="bg-white rounded-xl p-6 shadow-lg text-center">
//             <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
//             <p className="text-3xl font-bold text-gray-800">{team.currentSeason.goalsAgainst}</p>
//             <p className="text-sm text-gray-600">Goals Conceded</p>
//           </div>
//           <div className="bg-white rounded-xl p-6 shadow-lg text-center">
//             <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
//             <p className="text-3xl font-bold text-gray-800">+{team.currentSeason.goalDifference}</p>
//             <p className="text-sm text-gray-600">Goal Difference</p>
//           </div>
//           <div className="bg-white rounded-xl p-6 shadow-lg text-center">
//             <Award className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
//             <p className="text-3xl font-bold text-gray-800">{team.teamValue}</p>
//             <p className="text-sm text-gray-600">Squad Value</p>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//           <div className="flex gap-2 overflow-x-auto">
//             {['overview', 'squad', 'recent-matches', 'trophies'].map(tab => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
//                   activeTab === tab
//                     ? 'bg-sky-600 text-white'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Overview Tab */}
//         {activeTab === 'overview' && (
//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="bg-white rounded-xl shadow-lg p-6">
//               <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
//                 <Trophy className="w-6 h-6 text-yellow-600" />
//                 Club Records
//               </h3>
//               <div className="space-y-3">
//                 {team.records.map((record, idx) => (
//                   <div key={idx} className="bg-yellow-50 rounded-lg p-4">
//                     <p className="text-gray-800">{record}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-lg p-6">
//               <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
//                 <Users className="w-6 h-6 text-blue-600" />
//                 Club Information
//               </h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center border-b border-gray-200 pb-2">
//                   <span className="text-gray-600">Full Name:</span>
//                   <span className="font-bold text-gray-800">{team.fullName}</span>
//                 </div>
//                 <div className="flex justify-between items-center border-b border-gray-200 pb-2">
//                   <span className="text-gray-600">City:</span>
//                   <span className="font-bold text-gray-800">{team.city}</span>
//                 </div>
//                 <div className="flex justify-between items-center border-b border-gray-200 pb-2">
//                   <span className="text-gray-600">Chairman:</span>
//                   <span className="font-bold text-gray-800">{team.chairman}</span>
//                 </div>
//                 <div className="flex justify-between items-center border-b border-gray-200 pb-2">
//                   <span className="text-gray-600">Team Colors:</span>
//                   <span className="font-bold text-gray-800">{team.colors.join(', ')}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Squad Tab */}
//         {activeTab === 'squad' && (
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <h3 className="text-2xl font-bold mb-6">Top Players</h3>
//             <div className="space-y-4">
//               {team.topPlayers.map((player, idx) => (
//                 <Link
//                   key={idx}
//                   to={`/football/player/${player.name.toLowerCase().replace(' ', '-')}`}
//                   className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-sky-50 transition-colors"
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
//                       {idx + 1}
//                     </div>
//                     <div>
//                       <p className="text-xl font-bold text-gray-800">{player.name}</p>
//                       <p className="text-sm text-gray-600">{player.position}</p>
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-3 gap-4">
//                     <div className="bg-blue-50 rounded-lg p-3 text-center">
//                       <p className="text-2xl font-bold text-blue-600">{player.goals}</p>
//                       <p className="text-xs text-gray-600">Goals</p>
//                     </div>
//                     <div className="bg-green-50 rounded-lg p-3 text-center">
//                       <p className="text-2xl font-bold text-green-600">{player.assists}</p>
//                       <p className="text-xs text-gray-600">Assists</p>
//                     </div>
//                     <div className="bg-yellow-50 rounded-lg p-3 text-center">
//                       <p className="text-2xl font-bold text-yellow-600">{player.rating}</p>
//                       <p className="text-xs text-gray-600">Rating</p>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Recent Matches Tab */}
//         {activeTab === 'recent-matches' && (
//           <div className="space-y-4">
//             {team.recentMatches.map((match, idx) => (
//               <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-4">
//                     <span className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${getFormColor(match.result)}`}>
//                       {match.result}
//                     </span>
//                     <div>
//                       <p className="text-xl font-bold text-gray-800">{team.name} vs {match.opponent}</p>
//                       <p className="text-sm text-gray-500">{new Date(match.date).toLocaleDateString()} • {match.competition}</p>
//                     </div>
//                   </div>
//                   <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-8 py-4 rounded-lg">
//                     <p className="text-3xl font-bold">{match.score}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Trophies Tab */}
//         {activeTab === 'trophies' && (
//           <div className="space-y-6">
//             {team.trophies.map((trophy, idx) => (
//               <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-4">
//                     <Trophy className="w-12 h-12 text-yellow-600" />
//                     <div>
//                       <h4 className="text-2xl font-bold text-gray-800">{trophy.name}</h4>
//                       {trophy.years && (
//                         <p className="text-sm text-gray-500 mt-1">{trophy.years.join(', ')}</p>
//                       )}
//                     </div>
//                   </div>
//                   <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white w-20 h-20 rounded-full flex items-center justify-center">
//                     <span className="text-4xl font-bold">{trophy.count}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FootballTeamDetail;


// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Trophy, Users, MapPin, Calendar, Target, Award, Shield } from 'lucide-react';

// const FootballTeamDetail = () => {
//   const { teamId } = useParams();
//   const [activeTab, setActiveTab] = useState('overview');

//   // Mock data - Manchester City (as of early January 2026)
//   const team = {
//     id: 'manchester-city',
//     name: 'Manchester City',
//     nickname: 'The Citizens',
//     founded: 1880,
//     stadium: 'Etihad Stadium',
//     capacity: 53400,
//     city: 'Manchester',
//     country: '🏴󐁧󐁢󐁥󐁮󐁧󐁿',
//     league: 'Premier League',
//     manager: 'Pep Guardiola',
//     teamValue: '€1.26B',
//     currentSeason: {
//       position: 2,
//       played: 19,
//       won: 12,
//       drawn: 5,
//       lost: 2,
//       goalsFor: 42,
//       goalsAgainst: 20,
//       goalDifference: 22,
//       points: 41,
//       form: ['D', 'W', 'W', 'W', 'D']
//     },
//     topPlayers: [
//       { name: 'Erling Haaland', position: 'Forward', goals: 19, assists: 5, rating: 8.1 },
//       { name: 'Kevin De Bruyne', position: 'Midfielder', goals: 8, assists: 12, rating: 8.3 },
//       { name: 'Phil Foden', position: 'Midfielder', goals: 9, assists: 8, rating: 7.9 },
//       { name: 'Rodri', position: 'Midfielder', goals: 5, assists: 4, rating: 8.2 },
//       { name: 'Rúben Dias', position: 'Defender', goals: 2, assists: 1, rating: 8.0 }
//     ],
//     recentMatches: [
//       { date: '2026-01-01', opponent: 'Sunderland', result: 'D', score: '0-0' },
//       { date: '2025-12-28', opponent: 'Everton', result: 'W', score: '3-1' },
//       { date: '2025-12-26', opponent: 'Aston Villa', result: 'W', score: '2-1' },
//       { date: '2025-12-21', opponent: 'Crystal Palace', result: 'W', score: '4-0' },
//       { date: '2025-12-15', opponent: 'Manchester United', result: 'W', score: '2-1' }
//     ],
//     trophies: [
//       { name: 'Premier League', count: 9 },
//       { name: 'FA Cup', count: 7 },
//       { name: 'League Cup', count: 8 },
//       { name: 'UEFA Champions League', count: 1 },
//       { name: 'UEFA Super Cup', count: 1 },
//       { name: 'FIFA Club World Cup', count: 1 }
//     ]
//   };

//   const getFormColor = (result) => {
//     const colors = { 'W': 'bg-green-500', 'D': 'bg-yellow-500', 'L': 'bg-red-500' };
//     return colors[result] || 'bg-gray-500';
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-sky-50">
//       {/* Compact Hero Section */}
//       <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white py-10">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center gap-6 mb-6">
//             <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
//               <Shield className="w-12 h-12 text-sky-600" />
//             </div>
//             <div>
//               <h1 className="text-4xl font-bold mb-1">{team.name}</h1>
//               <p className="text-sky-100 text-lg">{team.nickname} • {team.league}</p>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
//               <p className="text-3xl font-bold">#{team.currentSeason.position}</p>
//               <p className="text-sky-100 text-sm">League Position</p>
//             </div>
//             <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
//               <p className="text-3xl font-bold">{team.currentSeason.points}</p>
//               <p className="text-sky-100 text-sm">Points</p>
//             </div>
//             <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
//               <p className="text-3xl font-bold">+{team.currentSeason.goalDifference}</p>
//               <p className="text-sky-100 text-sm">Goal Difference</p>
//             </div>
//             <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
//               <p className="text-2xl font-bold">{team.manager}</p>
//               <p className="text-sky-100 text-sm">Manager</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-6 mt-6 text-sm">
//             <p className="flex items-center gap-2">
//               <MapPin className="w-4 h-4" />
//               {team.stadium} ({team.capacity.toLocaleString()})
//             </p>
//             <p className="flex items-center gap-2">
//               <Calendar className="w-4 h-4" />
//               Founded {team.founded}
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Quick Info Row */}
//         <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-8">
//           <div className="bg-white rounded-xl p-4 shadow text-center">
//             <Target className="w-7 h-7 mx-auto mb-1 text-green-600" />
//             <p className="text-2xl font-bold">{team.currentSeason.goalsFor}</p>
//             <p className="text-xs text-gray-600">Goals Scored</p>
//           </div>
//           <div className="bg-white rounded-xl p-4 shadow text-center">
//             <Shield className="w-7 h-7 mx-auto mb-1 text-blue-600" />
//             <p className="text-2xl font-bold">{team.currentSeason.goalsAgainst}</p>
//             <p className="text-xs text-gray-600">Conceded</p>
//           </div>
//           <div className="bg-white rounded-xl p-4 shadow text-center">
//             <Trophy className="w-7 h-7 mx-auto mb-1 text-yellow-600" />
//             <p className="text-2xl font-bold">{team.trophies.reduce((sum, t) => sum + t.count, 0)}</p>
//             <p className="text-xs text-gray-600">Major Trophies</p>
//           </div>
//           <div className="bg-white rounded-xl p-4 shadow text-center hidden md:block">
//             <Award className="w-7 h-7 mx-auto mb-1 text-purple-600" />
//             <p className="text-xl font-bold">{team.teamValue}</p>
//             <p className="text-xs text-gray-600">Squad Value</p>
//           </div>
//           <div className="bg-white rounded-xl p-4 shadow text-center">
//             <div className="flex gap-1 justify-center">
//               {team.currentSeason.form.map((result, idx) => (
//                 <span key={idx} className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${getFormColor(result)}`}>
//                   {result}
//                 </span>
//               ))}
//             </div>
//             <p className="text-xs text-gray-600 mt-2">Recent Form</p>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
//           <div className="flex gap-3 overflow-x-auto pb-2">
//             {['overview', 'squad', 'matches', 'trophies'].map(tab => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-5 py-2.5 rounded-lg font-semibold whitespace-nowrap transition-all ${
//                   activeTab === tab
//                     ? 'bg-sky-600 text-white shadow'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Overview */}
//         {activeTab === 'overview' && (
//           <div className="grid md:grid-cols-2 gap-5">
//             <div className="bg-white rounded-xl shadow-md p-5">
//               <h3 className="text-lg font-bold mb-3">Club Info</h3>
//               <div className="space-y-2 text-sm">
//                 <div className="flex justify-between"><span className="text-gray-600">Stadium:</span><span className="font-medium">{team.stadium}</span></div>
//                 <div className="flex justify-between"><span className="text-gray-600">Capacity:</span><span className="font-medium">{team.capacity.toLocaleString()}</span></div>
//                 <div className="flex justify-between"><span className="text-gray-600">City:</span><span className="font-medium">{team.city}, England</span></div>
//                 <div className="flex justify-between"><span className="text-gray-600">Founded:</span><span className="font-medium">{team.founded}</span></div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Squad */}
//         {activeTab === 'squad' && (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {team.topPlayers.map((player, idx) => (
//               <div key={idx} className="bg-white rounded-xl shadow-md p-5">
//                 <div className="flex items-center justify-between mb-3">
//                   <div>
//                     <h4 className="font-bold text-gray-800">{player.name}</h4>
//                     <p className="text-sm text-gray-600">{player.position}</p>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-2xl font-bold text-sky-600">{player.goals}</p>
//                     <p className="text-xs text-gray-600">Goals</p>
//                   </div>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-600">{player.assists} assists</span>
//                   <span className="font-medium">Rating: {player.rating}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Recent Matches */}
//         {activeTab === 'matches' && (
//           <div className="space-y-4">
//             {team.recentMatches.map((match, idx) => (
//               <div key={idx} className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between">
//                 <div className="flex items-center gap-4">
//                   <span className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${getFormColor(match.result)}`}>
//                     {match.result}
//                   </span>
//                   <div>
//                     <p className="font-medium text-gray-800">vs {match.opponent}</p>
//                     <p className="text-xs text-gray-500">{new Date(match.date).toLocaleDateString()}</p>
//                   </div>
//                 </div>
//                 <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-6 py-3 rounded-lg font-bold text-xl">
//                   {match.score}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Trophies */}
//         {activeTab === 'trophies' && (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {team.trophies.map((trophy, idx) => (
//               <div key={idx} className="bg-white rounded-xl shadow-md p-5 text-center">
//                 <Trophy className="w-12 h-12 mx-auto mb-3 text-yellow-600" />
//                 <h4 className="font-bold text-gray-800 mb-1">{trophy.name}</h4>
//                 <p className="text-3xl font-bold text-yellow-600">{trophy.count}</p>
//                 <p className="text-xs text-gray-600 mt-1">Titles</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FootballTeamDetail;

import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Trophy, Users, MapPin, Calendar, Target, Award, Shield, Activity, BarChart3 } from 'lucide-react';
import TopFootballStories from '../../data/TopFootballStories.js';
import LatestNews from '../../data/LatestNews.js';

const FootballTeamDetail = () => {
  const { teamId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - Manchester City (as of early January 2026)
  const team = {
    id: 'manchester-city',
    name: 'Manchester City',
    nickname: 'The Citizens',
    founded: 1880,
    stadium: 'Etihad Stadium',
    capacity: 53400,
    city: 'Manchester',
    country: '🏴󐁧󐁢󐁥󐁮󐁧󐁿',
    league: 'Premier League',
    manager: 'Pep Guardiola',
    teamValue: '€1.26B',
    currentSeason: {
      position: 2,
      played: 19,
      won: 12,
      drawn: 5,
      lost: 2,
      goalsFor: 42,
      goalsAgainst: 20,
      goalDifference: 22,
      points: 41,
      form: ['D', 'W', 'W', 'W', 'D']
    },
    topPlayers: [
      { name: 'Erling Haaland', position: 'Forward', goals: 19, assists: 5, rating: 8.1 },
      { name: 'Kevin De Bruyne', position: 'Midfielder', goals: 8, assists: 12, rating: 8.3 },
      { name: 'Phil Foden', position: 'Midfielder', goals: 9, assists: 8, rating: 7.9 },
      { name: 'Rodri', position: 'Midfielder', goals: 5, assists: 4, rating: 8.2 },
      { name: 'Rúben Dias', position: 'Defender', goals: 2, assists: 1, rating: 8.0 }
    ],
    recentMatches: [
      { date: '2026-01-01', opponent: 'Sunderland', result: 'D', score: '0-0' },
      { date: '2025-12-28', opponent: 'Everton', result: 'W', score: '3-1' },
      { date: '2025-12-26', opponent: 'Aston Villa', result: 'W', score: '2-1' },
      { date: '2025-12-21', opponent: 'Crystal Palace', result: 'W', score: '4-0' },
      { date: '2025-12-15', opponent: 'Manchester United', result: 'W', score: '2-1' }
    ],
    trophies: [
      { name: 'Premier League', count: 9 },
      { name: 'FA Cup', count: 7 },
      { name: 'League Cup', count: 8 },
      { name: 'UEFA Champions League', count: 1 },
      { name: 'UEFA Super Cup', count: 1 },
      { name: 'FIFA Club World Cup', count: 1 }
    ]
  };

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-sky-50">
      {/* Main Grid Layout - Same as Stats Page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Main Content - Team Detail */}
          <div className="lg:col-span-8 space-y-6">

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white py-10 rounded-xl shadow-xl">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Shield className="w-12 h-12 text-sky-600" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold mb-1">{team.name}</h1>
                    <p className="text-sky-100 text-lg">{team.nickname} • {team.league}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold">#{team.currentSeason.position}</p>
                    <p className="text-sky-100 text-sm">League Position</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold">{team.currentSeason.points}</p>
                    <p className="text-sky-100 text-sm">Points</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold">+{team.currentSeason.goalDifference}</p>
                    <p className="text-sky-100 text-sm">Goal Difference</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold">{team.manager}</p>
                    <p className="text-sky-100 text-sm">Manager</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 mt-6 text-sm">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {team.stadium} ({team.capacity.toLocaleString()})
                  </p>
                  <p className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Founded {team.founded}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Info Row */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-8">
              <div className="bg-white rounded-xl p-4 shadow text-center">
                <Target className="w-7 h-7 mx-auto mb-1 text-green-600" />
                <p className="text-2xl font-bold">{team.currentSeason.goalsFor}</p>
                <p className="text-xs text-gray-600">Goals Scored</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow text-center">
                <Shield className="w-7 h-7 mx-auto mb-1 text-blue-600" />
                <p className="text-2xl font-bold">{team.currentSeason.goalsAgainst}</p>
                <p className="text-xs text-gray-600">Conceded</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow text-center">
                <Trophy className="w-7 h-7 mx-auto mb-1 text-yellow-600" />
                <p className="text-2xl font-bold">{team.trophies.reduce((sum, t) => sum + t.count, 0)}</p>
                <p className="text-xs text-gray-600">Major Trophies</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow text-center hidden md:block">
                <Award className="w-7 h-7 mx-auto mb-1 text-purple-600" />
                <p className="text-xl font-bold">{team.teamValue}</p>
                <p className="text-xs text-gray-600">Squad Value</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow text-center">
                <div className="flex gap-1 justify-center">
                  {team.currentSeason.form.map((result, idx) => (
                    <span key={idx} className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${getFormColor(result)}`}>
                      {result}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-600 mt-2">Recent Form</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
              <div className="flex gap-3 overflow-x-auto pb-2">
                {['overview', 'squad', 'matches', 'trophies'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2.5 rounded-lg font-semibold whitespace-nowrap transition-all ${
                      activeTab === tab
                        ? 'bg-sky-600 text-white shadow'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content - Same as original */}
            {activeTab === 'overview' && (
              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-white rounded-xl shadow-md p-5">
                  <h3 className="text-lg font-bold mb-3">Club Info</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-600">Stadium:</span><span className="font-medium">{team.stadium}</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Capacity:</span><span className="font-medium">{team.capacity.toLocaleString()}</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">City:</span><span className="font-medium">{team.city}, England</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Founded:</span><span className="font-medium">{team.founded}</span></div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'squad' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {team.topPlayers.map((player, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-md p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-gray-800">{player.name}</h4>
                        <p className="text-sm text-gray-600">{player.position}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-sky-600">{player.goals}</p>
                        <p className="text-xs text-gray-600">Goals</p>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{player.assists} assists</span>
                      <span className="font-medium">Rating: {player.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'matches' && (
              <div className="space-y-4">
                {team.recentMatches.map((match, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${getFormColor(match.result)}`}>
                        {match.result}
                      </span>
                      <div>
                        <p className="font-medium text-gray-800">vs {match.opponent}</p>
                        <p className="text-xs text-gray-500">{new Date(match.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-6 py-3 rounded-lg font-bold text-xl">
                      {match.score}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'trophies' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {team.trophies.map((trophy, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-md p-5 text-center">
                    <Trophy className="w-12 h-12 mx-auto mb-3 text-yellow-600" />
                    <h4 className="font-bold text-gray-800 mb-1">{trophy.name}</h4>
                    <p className="text-3xl font-bold text-yellow-600">{trophy.count}</p>
                    <p className="text-xs text-gray-600 mt-1">Titles</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Sidebar - Desktop Only (Same as Stats Page) */}
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
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-sky-600 transition-colors">
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
                className="mt-6 w-full text-center text-sky-600 font-medium hover:underline text-sm"
              >
                View All Stories →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Top Football Stories (Same as Stats Page) */}
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
              className="mt-4 w-full text-center text-sky-600 font-medium hover:underline text-sm"
            >
              View All Stories →
            </button>
          </div>
        </div>
      </div>

      {/* Latest Sports News Section (Same as Stats Page) */}
      <div className="mt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Latest Sports News
              </h3>
              <button
                onClick={() => navigate('/all-latest-news')}
                className="text-sky-600 hover:underline font-medium text-sm sm:text-base"
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

export default FootballTeamDetail;
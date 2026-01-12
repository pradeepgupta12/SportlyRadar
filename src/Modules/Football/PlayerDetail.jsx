// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Award, TrendingUp, Target, Activity, Calendar, MapPin, DollarSign, Trophy, BarChart3 } from 'lucide-react';

// const FootballPlayerDetail = () => {
//   const { playerId } = useParams();
//   const [activeTab, setActiveTab] = useState('overview');

//   // Mock player data
//   const player = {
//     id: 1,
//     name: 'Erling Haaland',
//     fullName: 'Erling Braut Haaland',
//     country: '🇳🇴',
//     countryName: 'Norway',
//     position: 'Forward',
//     team: 'Manchester City',
//     league: 'Premier League',
//     number: 9,
//     age: 25,
//     dateOfBirth: 'July 21, 2000',
//     height: '1.94 m',
//     weight: '88 kg',
//     foot: 'Left',
//     marketValue: '€180M',
//     rating: 92.5,
//     currentSeason: {
//       goals: 28,
//       assists: 7,
//       matches: 22,
//       minutesPlayed: 1890,
//       goalsPerMatch: 1.27,
//       passAccuracy: 78,
//       shotsOnTarget: 62,
//       dribbles: 45,
//       aerialDuels: 89,
//       tackles: 12
//     },
//     careerStats: {
//       totalGoals: 287,
//       totalAssists: 68,
//       totalMatches: 298,
//       clubs: ['Bryne FK', 'Molde FK', 'RB Salzburg', 'Borussia Dortmund', 'Manchester City']
//     },
//     achievements: [
//       '🏆 Premier League Champion (2022/23, 2023/24)',
//       '👟 Premier League Golden Boot (2022/23)',
//       '⚽ UEFA Champions League Top Scorer (2022/23)',
//       '🥇 FIFA World Cup Bronze Boot (2022)'
//     ],
//     recentMatches: [
//       { date: '2026-01-02', opponent: 'Arsenal', result: 'D', score: '2-2', goals: 1, assists: 0, rating: 8.5 },
//       { date: '2025-12-28', opponent: 'Liverpool', result: 'W', score: '3-1', goals: 2, assists: 1, rating: 9.2 },
//       { date: '2025-12-21', opponent: 'Chelsea', result: 'W', score: '2-0', goals: 1, assists: 0, rating: 8.8 },
//       { date: '2025-12-14', opponent: 'Tottenham', result: 'W', score: '4-1', goals: 3, assists: 0, rating: 9.8 },
//       { date: '2025-12-07', opponent: 'Newcastle', result: 'D', score: '1-1', goals: 0, assists: 1, rating: 7.5 }
//     ],
//     strengths: ['Finishing', 'Pace', 'Positioning', 'Physical Strength', 'Aerial Ability'],
//     weaknesses: ['Playmaking', 'Dribbling in tight spaces'],
//     contract: {
//       expires: 'June 30, 2029',
//       weeklyWage: '€675,000'
//     }
//   };

//   const getResultColor = (result) => {
//     const colors = { 'W': 'bg-green-500', 'D': 'bg-yellow-500', 'L': 'bg-red-500' };
//     return colors[result] || 'bg-gray-500';
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
//         <div className="max-w-7xl mx-auto px-4 py-16">
//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Player Info */}
//             <div>
//               <div className="flex items-center gap-4 mb-4">
//                 <span className="text-8xl">{player.country}</span>
//                 <div>
//                   <h1 className="text-6xl font-bold mb-2">{player.name}</h1>
//                   <p className="text-2xl text-blue-100">{player.fullName}</p>
//                 </div>
//               </div>
              
//               <div className="space-y-3 text-lg">
//                 <p className="flex items-center gap-2">
//                   <Trophy className="w-5 h-5" />
//                   {player.team} • {player.league}
//                 </p>
//                 <p className="flex items-center gap-2">
//                   <MapPin className="w-5 h-5" />
//                   {player.position} • #{player.number}
//                 </p>
//                 <p className="flex items-center gap-2">
//                   <Calendar className="w-5 h-5" />
//                   {player.age} years • {player.dateOfBirth}
//                 </p>
//                 <p className="flex items-center gap-2">
//                   <DollarSign className="w-5 h-5" />
//                   Market Value: <span className="font-bold">{player.marketValue}</span>
//                 </p>
//               </div>
//             </div>

//             {/* Stats Card */}
//             <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
//               <div className="flex items-center justify-between mb-6">
//                 <h3 className="text-2xl font-bold">2025/26 Season</h3>
//                 <div className="flex items-center gap-2">
//                   <Award className="w-8 h-8 text-yellow-400" />
//                   <span className="text-4xl font-bold">{player.rating}</span>
//                 </div>
//               </div>
              
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
//                   <p className="text-5xl font-bold">{player.currentSeason.goals}</p>
//                   <p className="text-blue-100 mt-1">Goals</p>
//                 </div>
//                 <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
//                   <p className="text-5xl font-bold">{player.currentSeason.assists}</p>
//                   <p className="text-blue-100 mt-1">Assists</p>
//                 </div>
//                 <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
//                   <p className="text-5xl font-bold">{player.currentSeason.matches}</p>
//                   <p className="text-blue-100 mt-1">Matches</p>
//                 </div>
//                 <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
//                   <p className="text-5xl font-bold">{player.currentSeason.goalsPerMatch}</p>
//                   <p className="text-blue-100 mt-1">Goals/Match</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Physical Stats */}
//         <div className="grid md:grid-cols-4 gap-4 mb-8">
//           <div className="bg-white rounded-xl p-6 shadow-lg text-center">
//             <p className="text-gray-600 mb-2">Height</p>
//             <p className="text-3xl font-bold text-blue-600">{player.height}</p>
//           </div>
//           <div className="bg-white rounded-xl p-6 shadow-lg text-center">
//             <p className="text-gray-600 mb-2">Weight</p>
//             <p className="text-3xl font-bold text-green-600">{player.weight}</p>
//           </div>
//           <div className="bg-white rounded-xl p-6 shadow-lg text-center">
//             <p className="text-gray-600 mb-2">Preferred Foot</p>
//             <p className="text-3xl font-bold text-purple-600">{player.foot}</p>
//           </div>
//           <div className="bg-white rounded-xl p-6 shadow-lg text-center">
//             <p className="text-gray-600 mb-2">Nationality</p>
//             <p className="text-3xl font-bold text-orange-600">{player.countryName}</p>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//           <div className="flex gap-2 overflow-x-auto">
//             {['overview', 'statistics', 'recent-matches', 'career'].map(tab => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
//                   activeTab === tab
//                     ? 'bg-blue-600 text-white'
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
//               <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-green-600">
//                 <TrendingUp className="w-6 h-6" />
//                 Strengths
//               </h3>
//               <div className="space-y-2">
//                 {player.strengths.map((strength, idx) => (
//                   <div key={idx} className="bg-green-50 rounded-lg p-3 flex items-center gap-2">
//                     <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                     <p className="text-gray-800 font-medium">{strength}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="space-y-6">
//               <div className="bg-white rounded-xl shadow-lg p-6">
//                 <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-yellow-600">
//                   <Trophy className="w-6 h-6" />
//                   Achievements
//                 </h3>
//                 <div className="space-y-2">
//                   {player.achievements.map((achievement, idx) => (
//                     <div key={idx} className="bg-yellow-50 rounded-lg p-3">
//                       <p className="text-gray-800">{achievement}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl shadow-lg p-6">
//                 <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-purple-600">
//                   <Calendar className="w-6 h-6" />
//                   Contract Info
//                 </h3>
//                 <div className="space-y-3">
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-600">Expires:</span>
//                     <span className="font-bold text-gray-800">{player.contract.expires}</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-600">Weekly Wage:</span>
//                     <span className="font-bold text-green-600">{player.contract.weeklyWage}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Statistics Tab */}
//         {activeTab === 'statistics' && (
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
//               <BarChart3 className="w-6 h-6 text-blue-600" />
//               Detailed Statistics (2025/26)
//             </h3>
//             <div className="grid md:grid-cols-3 gap-6">
//               {[
//                 { label: 'Minutes Played', value: player.currentSeason.minutesPlayed, color: 'blue' },
//                 { label: 'Pass Accuracy', value: `${player.currentSeason.passAccuracy}%`, color: 'green' },
//                 { label: 'Shots on Target', value: player.currentSeason.shotsOnTarget, color: 'purple' },
//                 { label: 'Successful Dribbles', value: player.currentSeason.dribbles, color: 'orange' },
//                 { label: 'Aerial Duels Won', value: player.currentSeason.aerialDuels, color: 'pink' },
//                 { label: 'Tackles', value: player.currentSeason.tackles, color: 'indigo' }
//               ].map((stat, idx) => (
//                 <div key={idx} className={`bg-${stat.color}-50 rounded-lg p-6 text-center`}>
//                   <p className={`text-4xl font-bold text-${stat.color}-600 mb-2`}>{stat.value}</p>
//                   <p className="text-gray-600">{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Recent Matches Tab */}
//         {activeTab === 'recent-matches' && (
//           <div className="space-y-4">
//             {player.recentMatches.map((match, idx) => (
//               <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-4 flex-1">
//                     <span className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${getResultColor(match.result)}`}>
//                       {match.result}
//                     </span>
//                     <div>
//                       <p className="text-xl font-bold text-gray-800">vs {match.opponent}</p>
//                       <p className="text-sm text-gray-500">{new Date(match.date).toLocaleDateString()}</p>
//                     </div>
//                   </div>
                  
//                   <div className="grid grid-cols-4 gap-4">
//                     <div className="text-center">
//                       <p className="text-2xl font-bold text-gray-800">{match.score}</p>
//                       <p className="text-xs text-gray-500">Score</p>
//                     </div>
//                     <div className="text-center">
//                       <p className="text-2xl font-bold text-blue-600">{match.goals}</p>
//                       <p className="text-xs text-gray-500">Goals</p>
//                     </div>
//                     <div className="text-center">
//                       <p className="text-2xl font-bold text-green-600">{match.assists}</p>
//                       <p className="text-xs text-gray-500">Assists</p>
//                     </div>
//                     <div className="text-center">
//                       <p className="text-2xl font-bold text-yellow-600">{match.rating}</p>
//                       <p className="text-xs text-gray-500">Rating</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Career Tab */}
//         {activeTab === 'career' && (
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <h3 className="text-2xl font-bold mb-6">Career Overview</h3>
//             <div className="grid md:grid-cols-3 gap-6 mb-8">
//               <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center">
//                 <p className="text-5xl font-bold mb-2">{player.careerStats.totalGoals}</p>
//                 <p className="text-blue-100">Career Goals</p>
//               </div>
//               <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 text-center">
//                 <p className="text-5xl font-bold mb-2">{player.careerStats.totalAssists}</p>
//                 <p className="text-green-100">Career Assists</p>
//               </div>
//               <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 text-center">
//                 <p className="text-5xl font-bold mb-2">{player.careerStats.totalMatches}</p>
//                 <p className="text-purple-100">Career Matches</p>
//               </div>
//             </div>

//             <h4 className="text-xl font-bold mb-4">Previous Clubs</h4>
//             <div className="space-y-2">
//               {player.careerStats.clubs.map((club, idx) => (
//                 <div key={idx} className="bg-gray-50 rounded-lg p-4 flex items-center gap-3">
//                   <Trophy className="w-5 h-5 text-blue-600" />
//                   <p className="font-semibold text-gray-800">{club}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FootballPlayerDetail;

// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Trophy, Target, Activity, Calendar, MapPin, DollarSign, TrendingUp, BarChart3 } from 'lucide-react';

// const FootballPlayerDetail = () => {
//   const { playerId } = useParams();
//   const [activeTab, setActiveTab] = useState('overview');

//   const player = {
//     id: 1,
//     name: 'Erling Haaland',
//     fullName: 'Erling Braut Haaland',
//     country: '🇳🇴',
//     countryName: 'Norway',
//     position: 'Forward',
//     team: 'Manchester City',
//     league: 'Premier League',
//     number: 9,
//     age: 25,
//     height: '1.94 m',
//     weight: '88 kg',
//     foot: 'Left',
//     marketValue: '€180M',
//     rating: 92.5,
//     currentSeason: {
//       goals: 28,
//       assists: 7,
//       matches: 22,
//       minutesPlayed: 1890,
//       goalsPerMatch: 1.27,
//       passAccuracy: 78,
//       shotsOnTarget: 62,
//       dribbles: 45,
//       aerialDuels: 89,
//       tackles: 12
//     },
//     careerStats: {
//       totalGoals: 287,
//       totalAssists: 68,
//       totalMatches: 298,
//       clubs: ['Bryne FK', 'Molde FK', 'RB Salzburg', 'Borussia Dortmund', 'Manchester City']
//     },
//     achievements: [
//       'Premier League Champion (22/23, 23/24)',
//       'Premier League Golden Boot (22/23)',
//       'UCL Top Scorer (22/23)',
//       'FIFA Best Young Player'
//     ],
//     recentMatches: [
//       { date: '2026-01-02', opponent: 'Arsenal', result: 'D', score: '2-2', goals: 1, assists: 0, rating: 8.5 },
//       { date: '2025-12-28', opponent: 'Liverpool', result: 'W', score: '3-1', goals: 2, assists: 1, rating: 9.2 },
//       { date: '2025-12-21', opponent: 'Chelsea', result: 'W', score: '2-0', goals: 1, assists: 0, rating: 8.8 },
//       { date: '2025-12-14', opponent: 'Tottenham', result: 'W', score: '4-1', goals: 3, assists: 0, rating: 9.8 },
//       { date: '2025-12-07', opponent: 'Newcastle', result: 'D', score: '1-1', goals: 0, assists: 1, rating: 7.5 }
//     ],
//     strengths: ['Finishing', 'Pace', 'Positioning', 'Strength', 'Aerial'],
//     contract: { expires: 'June 30, 2029', weeklyWage: '€675,000' }
//   };

//   const getResultColor = (r) => r === 'W' ? 'text-green-600' : r === 'D' ? 'text-yellow-600' : 'text-red-600';

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Compact Header */}
//       <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-10">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-5">
//               <span className="text-6xl">{player.country}</span>
//               <div>
//                 <h1 className="text-4xl font-bold">{player.name}</h1>
//                 <p className="text-blue-100 text-lg">{player.team} • #{player.number} • {player.position}</p>
//               </div>
//             </div>
//             <div className="text-right">
//               <div className="flex items-center gap-2 mb-2">
//                 <Trophy className="w-8 h-8 text-yellow-400" />
//                 <span className="text-4xl font-bold">{player.rating}</span>
//               </div>
//               <p className="text-blue-100">Current Rating</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-6">
//         {/* Quick Info Row */}
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
//           <div className="bg-white rounded-lg shadow p-4 text-center">
//             <p className="text-xs text-gray-600">Age</p>
//             <p className="text-xl font-bold text-gray-800">{player.age}</p>
//           </div>
//           <div className="bg-white rounded-lg shadow p-4 text-center">
//             <p className="text-xs text-gray-600">Height</p>
//             <p className="text-xl font-bold text-gray-800">{player.height}</p>
//           </div>
//           <div className="bg-white rounded-lg shadow p-4 text-center">
//             <p className="text-xs text-gray-600">Foot</p>
//             <p className="text-xl font-bold text-gray-800">{player.foot}</p>
//           </div>
//           <div className="bg-white rounded-lg shadow p-4 text-center">
//             <p className="text-xs text-gray-600">Value</p>
//             <p className="text-xl font-bold text-purple-600">{player.marketValue}</p>
//           </div>
//           <div className="bg-white rounded-lg shadow p-4 text-center">
//             <p className="text-xs text-gray-600">Contract</p>
//             <p className="text-xl font-bold text-gray-800">2029</p>
//           </div>
//         </div>

//         {/* Season Stats */}
//         <div className="bg-white rounded-xl shadow-md p-6 mb-6">
//           <h3 className="text-lg font-semibold mb-4">2025/26 Season</h3>
//           <div className="grid grid-cols-4 gap-6 text-center">
//             <div>
//               <p className="text-3xl font-bold text-blue-600">{player.currentSeason.goals}</p>
//               <p className="text-sm text-gray-600">Goals</p>
//             </div>
//             <div>
//               <p className="text-3xl font-bold text-green-600">{player.currentSeason.assists}</p>
//               <p className="text-sm text-gray-600">Assists</p>
//             </div>
//             <div>
//               <p className="text-3xl font-bold text-gray-800">{player.currentSeason.matches}</p>
//               <p className="text-sm text-gray-600">Matches</p>
//             </div>
//             <div>
//               <p className="text-3xl font-bold text-purple-600">{player.currentSeason.goalsPerMatch}</p>
//               <p className="text-sm text-gray-600">G/M</p>
//             </div>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="bg-white rounded-xl shadow-md p-4 mb-6">
//           <div className="flex gap-3 overflow-x-auto">
//             {['overview', 'statistics', 'recent-matches', 'career'].map(tab => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
//                   activeTab === tab
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {tab === 'overview' ? 'Overview' :
//                  tab === 'statistics' ? 'Stats' :
//                  tab === 'recent-matches' ? 'Recent Matches' : 'Career'}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Overview */}
//         {activeTab === 'overview' && (
//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="bg-white rounded-xl shadow-md p-5">
//               <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-green-600">
//                 <TrendingUp className="w-5 h-5" /> Strengths
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {player.strengths.map((s, i) => (
//                   <span key={i} className="bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-sm font-medium">
//                     {s}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-md p-5">
//               <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-yellow-600">
//                 <Trophy className="w-5 h-5" /> Major Achievements
//               </h3>
//               <div className="space-y-2 text-sm">
//                 {player.achievements.map((a, i) => (
//                   <div key={i} className="bg-yellow-50 rounded-lg p-3">{a}</div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Stats */}
//         {activeTab === 'statistics' && (
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {[
//               { label: 'Minutes Played', value: player.currentSeason.minutesPlayed },
//               { label: 'Pass Accuracy', value: `${player.currentSeason.passAccuracy}%` },
//               { label: 'Shots on Target', value: player.currentSeason.shotsOnTarget },
//               { label: 'Dribbles Success', value: player.currentSeason.dribbles },
//               { label: 'Aerial Duels Won', value: player.currentSeason.aerialDuels },
//               { label: 'Tackles', value: player.currentSeason.tackles }
//             ].map((stat, i) => (
//               <div key={i} className="bg-white rounded-lg shadow p-5 text-center">
//                 <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
//                 <p className="text-xs text-gray-600 mt-1">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Recent Matches */}
//         {activeTab === 'recent-matches' && (
//           <div className="space-y-4">
//             {player.recentMatches.map((m, i) => (
//               <div key={i} className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
//                 <div className="flex items-center gap-4">
//                   <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm ${
//                     m.result === 'W' ? 'bg-green-500' : m.result === 'D' ? 'bg-yellow-500' : 'bg-red-500'
//                   }`}>
//                     {m.result}
//                   </div>
//                   <div>
//                     <p className="font-semibold">vs {m.opponent}</p>
//                     <p className="text-xs text-gray-500">{new Date(m.date).toLocaleDateString('en-GB')}</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-6 text-sm">
//                   <div className="text-center">
//                     <p className="font-bold">{m.score}</p>
//                     <p className="text-gray-500">Score</p>
//                   </div>
//                   <div className="text-center">
//                     <p className="font-bold text-blue-600">{m.goals}</p>
//                     <p className="text-gray-500">G</p>
//                   </div>
//                   <div className="text-center">
//                     <p className="font-bold text-green-600">{m.assists}</p>
//                     <p className="text-gray-500">A</p>
//                   </div>
//                   <div className="text-center">
//                     <p className="font-bold text-yellow-600">{m.rating}</p>
//                     <p className="text-gray-500">Rating</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Career */}
//         {activeTab === 'career' && (
//           <div className="bg-white rounded-xl shadow-md p-6">
//             <h3 className="text-lg font-semibold mb-5">Career Totals</h3>
//             <div className="grid grid-cols-3 gap-6 mb-6">
//               <div className="text-center">
//                 <p className="text-4xl font-bold text-blue-600">{player.careerStats.totalGoals}</p>
//                 <p className="text-gray-600">Goals</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-4xl font-bold text-green-600">{player.careerStats.totalAssists}</p>
//                 <p className="text-gray-600">Assists</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-4xl font-bold text-purple-600">{player.careerStats.totalMatches}</p>
//                 <p className="text-gray-600">Matches</p>
//               </div>
//             </div>
//             <div className="pt-4 border-t">
//               <p className="font-medium mb-3">Previous Clubs</p>
//               <div className="flex flex-wrap gap-3">
//                 {player.careerStats.clubs.map((club, i) => (
//                   <span key={i} className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
//                     {club}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FootballPlayerDetail;


// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Trophy, Target, Activity, Calendar, MapPin, DollarSign, TrendingUp, BarChart3 } from 'lucide-react';
// import TopFootballStories from '../../data/TopFootballStories.js';
// import LatestNews from '../../data/LatestNews.js';

// const FootballPlayerDetail = () => {
//   const { playerId } = useParams();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('overview');

//   const player = {
//     id: 1,
//     name: 'Erling Haaland',
//     fullName: 'Erling Braut Haaland',
//     country: '🇳🇴',
//     countryName: 'Norway',
//     position: 'Forward',
//     team: 'Manchester City',
//     league: 'Premier League',
//     number: 9,
//     age: 25,
//     height: '1.94 m',
//     weight: '88 kg',
//     foot: 'Left',
//     marketValue: '€180M',
//     rating: 92.5,
//     currentSeason: {
//       goals: 28,
//       assists: 7,
//       matches: 22,
//       minutesPlayed: 1890,
//       goalsPerMatch: 1.27,
//       passAccuracy: 78,
//       shotsOnTarget: 62,
//       dribbles: 45,
//       aerialDuels: 89,
//       tackles: 12
//     },
//     careerStats: {
//       totalGoals: 287,
//       totalAssists: 68,
//       totalMatches: 298,
//       clubs: ['Bryne FK', 'Molde FK', 'RB Salzburg', 'Borussia Dortmund', 'Manchester City']
//     },
//     achievements: [
//       'Premier League Champion (22/23, 23/24)',
//       'Premier League Golden Boot (22/23)',
//       'UCL Top Scorer (22/23)',
//       'FIFA Best Young Player'
//     ],
//     recentMatches: [
//       { date: '2026-01-02', opponent: 'Arsenal', result: 'D', score: '2-2', goals: 1, assists: 0, rating: 8.5 },
//       { date: '2025-12-28', opponent: 'Liverpool', result: 'W', score: '3-1', goals: 2, assists: 1, rating: 9.2 },
//       { date: '2025-12-21', opponent: 'Chelsea', result: 'W', score: '2-0', goals: 1, assists: 0, rating: 8.8 },
//       { date: '2025-12-14', opponent: 'Tottenham', result: 'W', score: '4-1', goals: 3, assists: 0, rating: 9.8 },
//       { date: '2025-12-07', opponent: 'Newcastle', result: 'D', score: '1-1', goals: 0, assists: 1, rating: 7.5 }
//     ],
//     strengths: ['Finishing', 'Pace', 'Positioning', 'Strength', 'Aerial'],
//     contract: { expires: 'June 30, 2029', weeklyWage: '€675,000' }
//   };

//   const getResultColor = (r) => r === 'W' ? 'text-green-600' : r === 'D' ? 'text-yellow-600' : 'text-red-600';

//   const handleStoryClick = (id) => {
//     navigate(`/details/football/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Main Grid Layout */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

//           {/* Main Content */}
//           <div className="lg:col-span-8 space-y-6">

//             {/* Responsive Header Section */}
//             <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-8 sm:py-10 rounded-xl shadow-xl">
//               <div className="max-w-7xl mx-auto px-4">
//                 <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
//                   {/* Left: Player Info */}
//                   <div className="flex items-center gap-4 sm:gap-5">
//                     <span className="text-5xl sm:text-6xl flex-shrink-0">{player.country}</span>
//                     <div>
//                       <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{player.name}</h1>
//                       <p className="text-blue-100 text-sm sm:text-base mt-1">
//                         {player.team} • #{player.number} • {player.position}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Right: Rating */}
//                   <div className="text-center sm:text-right">
//                     <div className="flex items-center gap-2 justify-center sm:justify-end mb-1">
//                       <Trophy className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-400" />
//                       <span className="text-3xl sm:text-4xl font-bold">{player.rating}</span>
//                     </div>
//                     <p className="text-blue-100 text-sm">Current Rating</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Info Row */}
//             <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
//               <div className="bg-white rounded-lg shadow p-4 text-center">
//                 <p className="text-xs text-gray-600">Age</p>
//                 <p className="text-xl font-bold text-gray-800">{player.age}</p>
//               </div>
//               <div className="bg-white rounded-lg shadow p-4 text-center">
//                 <p className="text-xs text-gray-600">Height</p>
//                 <p className="text-xl font-bold text-gray-800">{player.height}</p>
//               </div>
//               <div className="bg-white rounded-lg shadow p-4 text-center">
//                 <p className="text-xs text-gray-600">Foot</p>
//                 <p className="text-xl font-bold text-gray-800">{player.foot}</p>
//               </div>
//               <div className="bg-white rounded-lg shadow p-4 text-center">
//                 <p className="text-xs text-gray-600">Value</p>
//                 <p className="text-xl font-bold text-purple-600">{player.marketValue}</p>
//               </div>
//               <div className="bg-white rounded-lg shadow p-4 text-center">
//                 <p className="text-xs text-gray-600">Contract</p>
//                 <p className="text-xl font-bold text-gray-800">2029</p>
//               </div>
//             </div>

//             {/* Season Stats */}
//             <div className="bg-white rounded-xl shadow-md p-6 mb-6">
//               <h3 className="text-lg font-semibold mb-4">2025/26 Season</h3>
//               <div className="grid grid-cols-4 gap-6 text-center">
//                 <div>
//                   <p className="text-3xl font-bold text-blue-600">{player.currentSeason.goals}</p>
//                   <p className="text-sm text-gray-600">Goals</p>
//                 </div>
//                 <div>
//                   <p className="text-3xl font-bold text-green-600">{player.currentSeason.assists}</p>
//                   <p className="text-sm text-gray-600">Assists</p>
//                 </div>
//                 <div>
//                   <p className="text-3xl font-bold text-gray-800">{player.currentSeason.matches}</p>
//                   <p className="text-sm text-gray-600">Matches</p>
//                 </div>
//                 <div>
//                   <p className="text-3xl font-bold text-purple-600">{player.currentSeason.goalsPerMatch}</p>
//                   <p className="text-sm text-gray-600">G/M</p>
//                 </div>
//               </div>
//             </div>

//             {/* Tabs */}
//             <div className="bg-white rounded-xl shadow-md p-4 mb-6">
//               <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
//                 {['overview', 'statistics', 'recent-matches', 'career'].map(tab => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
//                       activeTab === tab
//                         ? 'bg-blue-600 text-white'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {tab === 'overview' ? 'Overview' :
//                      tab === 'statistics' ? 'Stats' :
//                      tab === 'recent-matches' ? 'Recent Matches' : 'Career'}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Rest of tabs content remains exactly the same */}
//             {/* Overview */}
//             {activeTab === 'overview' && (
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="bg-white rounded-xl shadow-md p-5">
//                   <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-green-600">
//                     <TrendingUp className="w-5 h-5" /> Strengths
//                   </h3>
//                   <div className="flex flex-wrap gap-2">
//                     {player.strengths.map((s, i) => (
//                       <span key={i} className="bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-sm font-medium">
//                         {s}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="bg-white rounded-xl shadow-md p-5">
//                   <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-yellow-600">
//                     <Trophy className="w-5 h-5" /> Major Achievements
//                   </h3>
//                   <div className="space-y-2 text-sm">
//                     {player.achievements.map((a, i) => (
//                       <div key={i} className="bg-yellow-50 rounded-lg p-3">{a}</div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Statistics, Recent Matches, Career sections unchanged */}
//             {activeTab === 'statistics' && (
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                 {[
//                   { label: 'Minutes Played', value: player.currentSeason.minutesPlayed },
//                   { label: 'Pass Accuracy', value: `${player.currentSeason.passAccuracy}%` },
//                   { label: 'Shots on Target', value: player.currentSeason.shotsOnTarget },
//                   { label: 'Dribbles Success', value: player.currentSeason.dribbles },
//                   { label: 'Aerial Duels Won', value: player.currentSeason.aerialDuels },
//                   { label: 'Tackles', value: player.currentSeason.tackles }
//                 ].map((stat, i) => (
//                   <div key={i} className="bg-white rounded-lg shadow p-5 text-center">
//                     <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
//                     <p className="text-xs text-gray-600 mt-1">{stat.label}</p>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {activeTab === 'recent-matches' && (
//               <div className="space-y-4">
//                 {player.recentMatches.map((m, i) => (
//                   <div key={i} className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
//                     <div className="flex items-center gap-4">
//                       <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm ${
//                         m.result === 'W' ? 'bg-green-500' : m.result === 'D' ? 'bg-yellow-500' : 'bg-red-500'
//                       }`}>
//                         {m.result}
//                       </div>
//                       <div>
//                         <p className="font-semibold">vs {m.opponent}</p>
//                         <p className="text-xs text-gray-500">{new Date(m.date).toLocaleDateString('en-GB')}</p>
//                       </div>
//                     </div>
//                     <div className="flex gap-6 text-sm">
//                       <div className="text-center">
//                         <p className="font-bold">{m.score}</p>
//                         <p className="text-gray-500">Score</p>
//                       </div>
//                       <div className="text-center">
//                         <p className="font-bold text-blue-600">{m.goals}</p>
//                         <p className="text-gray-500">G</p>
//                       </div>
//                       <div className="text-center">
//                         <p className="font-bold text-green-600">{m.assists}</p>
//                         <p className="text-gray-500">A</p>
//                       </div>
//                       <div className="text-center">
//                         <p className="font-bold text-yellow-600">{m.rating}</p>
//                         <p className="text-gray-500">Rating</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {activeTab === 'career' && (
//               <div className="bg-white rounded-xl shadow-md p-6">
//                 <h3 className="text-lg font-semibold mb-5">Career Totals</h3>
//                 <div className="grid grid-cols-3 gap-6 mb-6">
//                   <div className="text-center">
//                     <p className="text-4xl font-bold text-blue-600">{player.careerStats.totalGoals}</p>
//                     <p className="text-gray-600">Goals</p>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-4xl font-bold text-green-600">{player.careerStats.totalAssists}</p>
//                     <p className="text-gray-600">Assists</p>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-4xl font-bold text-purple-600">{player.careerStats.totalMatches}</p>
//                     <p className="text-gray-600">Matches</p>
//                   </div>
//                 </div>
//                 <div className="pt-4 border-t">
//                   <p className="font-medium mb-3">Previous Clubs</p>
//                   <div className="flex flex-wrap gap-3">
//                     {player.careerStats.clubs.map((club, i) => (
//                       <span key={i} className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
//                         {club}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Right Sidebar - Desktop Only */}
//           <div className="hidden lg:block lg:col-span-4">
//             <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
//               <h3 className="text-lg font-bold text-gray-900 mb-5">Top Football Stories</h3>
//               <div className="space-y-4">
//                 {TopFootballStories.data.TopFootballStories.slice(0, 5).map((story) => (
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
//                 onClick={() => navigate('/all-top-football-stories')}
//                 className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
//               >
//                 View All Stories →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Top Football Stories */}
//       <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-xl shadow-md p-5">
//             <h3 className="text-lg font-bold text-gray-900 mb-4">Top Football Stories</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {TopFootballStories.data.TopFootballStories.slice(0, 4).map((story) => (
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
//               onClick={() => navigate('/all-top-football-stories')}
//               className="mt-4 w-full text-center text-blue-600 font-medium hover:underline text-sm"
//             >
//               View All Stories →
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Latest Sports News */}
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

// export default FootballPlayerDetail;


import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Trophy, Target, Activity, Calendar, MapPin, DollarSign, TrendingUp, BarChart3 } from 'lucide-react';
import TopFootballStories from '../../data/TopFootballStories.js';
import LatestNews from '../../data/LatestNews.js';
import { footballPlayerDetails } from '../../data/FootballPlayerDetailData.js';

const FootballPlayerDetail = () => {
  const { playerId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Data ab external file se aa raha hai
  const player = footballPlayerDetails[playerId] || footballPlayerDetails["1"];

  const getResultColor = (r) => r === 'W' ? 'text-green-600' : r === 'D' ? 'text-yellow-600' : 'text-red-600';

  const handleStoryClick = (id) => {
    navigate(`/details/football/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6">

            {/* Responsive Header Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-8 sm:py-10 rounded-xl shadow-xl">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  {/* Left: Player Info */}
                  <div className="flex items-center gap-4 sm:gap-5">
                    <span className="text-5xl sm:text-6xl flex-shrink-0">{player.country}</span>
                    <div>
                      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{player.name}</h1>
                      <p className="text-blue-100 text-sm sm:text-base mt-1">
                        {player.team} • #{player.number} • {player.position}
                      </p>
                    </div>
                  </div>

                  {/* Right: Rating */}
                  <div className="text-center sm:text-right">
                    <div className="flex items-center gap-2 justify-center sm:justify-end mb-1">
                      <Trophy className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-400" />
                      <span className="text-3xl sm:text-4xl font-bold">{player.rating}</span>
                    </div>
                    <p className="text-blue-100 text-sm">Current Rating</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info Row */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <p className="text-xs text-gray-600">Age</p>
                <p className="text-xl font-bold text-gray-800">{player.age}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <p className="text-xs text-gray-600">Height</p>
                <p className="text-xl font-bold text-gray-800">{player.height}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <p className="text-xs text-gray-600">Foot</p>
                <p className="text-xl font-bold text-gray-800">{player.foot}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <p className="text-xs text-gray-600">Value</p>
                <p className="text-xl font-bold text-purple-600">{player.marketValue}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <p className="text-xs text-gray-600">Contract</p>
                <p className="text-xl font-bold text-gray-800">2029</p>
              </div>
            </div>

            {/* Season Stats */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">2025/26 Season</h3>
              <div className="grid grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-blue-600">{player.currentSeason.goals}</p>
                  <p className="text-sm text-gray-600">Goals</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">{player.currentSeason.assists}</p>
                  <p className="text-sm text-gray-600">Assists</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-800">{player.currentSeason.matches}</p>
                  <p className="text-sm text-gray-600">Matches</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-purple-600">{player.currentSeason.goalsPerMatch}</p>
                  <p className="text-sm text-gray-600">G/M</p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-6">
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {['overview', 'statistics', 'recent-matches', 'career'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                      activeTab === tab
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tab === 'overview' ? 'Overview' :
                     tab === 'statistics' ? 'Stats' :
                     tab === 'recent-matches' ? 'Recent Matches' : 'Career'}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-md p-5">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-green-600">
                    <TrendingUp className="w-5 h-5" /> Strengths
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {player.strengths.map((s, i) => (
                      <span key={i} className="bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-sm font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-yellow-600">
                    <Trophy className="w-5 h-5" /> Major Achievements
                  </h3>
                  <div className="space-y-2 text-sm">
                    {player.achievements.map((a, i) => (
                      <div key={i} className="bg-yellow-50 rounded-lg p-3">{a}</div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'statistics' && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { label: 'Minutes Played', value: player.currentSeason.minutesPlayed },
                  { label: 'Pass Accuracy', value: `${player.currentSeason.passAccuracy}%` },
                  { label: 'Shots on Target', value: player.currentSeason.shotsOnTarget },
                  { label: 'Dribbles Success', value: player.currentSeason.dribbles },
                  { label: 'Aerial Duels Won', value: player.currentSeason.aerialDuels },
                  { label: 'Tackles', value: player.currentSeason.tackles }
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-lg shadow p-5 text-center">
                    <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                    <p className="text-xs text-gray-600 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'recent-matches' && (
              <div className="space-y-4">
                {player.recentMatches.map((m, i) => (
                  <div key={i} className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm ${
                        m.result === 'W' ? 'bg-green-500' : m.result === 'D' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}>
                        {m.result}
                      </div>
                      <div>
                        <p className="font-semibold">vs {m.opponent}</p>
                        <p className="text-xs text-gray-500">{new Date(m.date).toLocaleDateString('en-GB')}</p>
                      </div>
                    </div>
                    <div className="flex gap-6 text-sm">
                      <div className="text-center">
                        <p className="font-bold">{m.score}</p>
                        <p className="text-gray-500">Score</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-blue-600">{m.goals}</p>
                        <p className="text-gray-500">G</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-green-600">{m.assists}</p>
                        <p className="text-gray-500">A</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-yellow-600">{m.rating}</p>
                        <p className="text-gray-500">Rating</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'career' && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold mb-5">Career Totals</h3>
                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-blue-600">{player.careerStats.totalGoals}</p>
                    <p className="text-gray-600">Goals</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-green-600">{player.careerStats.totalAssists}</p>
                    <p className="text-gray-600">Assists</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-purple-600">{player.careerStats.totalMatches}</p>
                    <p className="text-gray-600">Matches</p>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="font-medium mb-3">Previous Clubs</p>
                  <div className="flex flex-wrap gap-3">
                    {player.careerStats.clubs.map((club, i) => (
                      <span key={i} className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
                        {club}
                      </span>
                    ))}
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
                onClick={() => navigate('/all-top-football-stories')}
                className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
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
              className="mt-4 w-full text-center text-blue-600 font-medium hover:underline text-sm"
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

export default FootballPlayerDetail;
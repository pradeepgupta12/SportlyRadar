// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Award, TrendingUp, TrendingDown, Minus, Star, Search, Filter, Crown } from 'lucide-react';

// const FootballRankings = () => {
//   const [selectedCategory, setSelectedCategory] = useState('overall');
//   const [selectedPosition, setSelectedPosition] = useState('all');
//   const [searchQuery, setSearchQuery] = useState('');

//   const rankings = [
//     {
//       id: 1,
//       rank: 1,
//       prevRank: 1,
//       name: 'Erling Haaland',
//       team: 'Manchester City',
//       league: 'Premier League',
//       country: '🇳🇴',
//       position: 'Forward',
//       rating: 92.5,
//       goals: 28,
//       assists: 7,
//       age: 25,
//       marketValue: '€180M',
//       points: 1250,
//       strengths: ['Finishing', 'Pace', 'Positioning']
//     },
//     {
//       id: 2,
//       rank: 2,
//       prevRank: 3,
//       name: 'Kylian Mbappé',
//       team: 'Real Madrid',
//       league: 'La Liga',
//       country: '🇫🇷',
//       position: 'Forward',
//       rating: 91.8,
//       goals: 25,
//       assists: 10,
//       age: 25,
//       marketValue: '€200M',
//       points: 1235,
//       strengths: ['Pace', 'Dribbling', 'Finishing']
//     },
//     {
//       id: 3,
//       rank: 3,
//       prevRank: 2,
//       name: 'Kevin De Bruyne',
//       team: 'Manchester City',
//       league: 'Premier League',
//       country: '🇧🇪',
//       position: 'Midfielder',
//       rating: 91.2,
//       goals: 12,
//       assists: 19,
//       age: 33,
//       marketValue: '€70M',
//       points: 1220,
//       strengths: ['Passing', 'Vision', 'Set Pieces']
//     },
//     {
//       id: 4,
//       rank: 4,
//       prevRank: 5,
//       name: 'Vinicius Junior',
//       team: 'Real Madrid',
//       league: 'La Liga',
//       country: '🇧🇷',
//       position: 'Forward',
//       rating: 90.5,
//       goals: 21,
//       assists: 15,
//       age: 23,
//       marketValue: '€150M',
//       points: 1205,
//       strengths: ['Dribbling', 'Pace', 'Creativity']
//     },
//     {
//       id: 5,
//       rank: 5,
//       prevRank: 4,
//       name: 'Harry Kane',
//       team: 'Bayern Munich',
//       league: 'Bundesliga',
//       country: '🏴󐁧󐁢󐁥󐁮󐁧󐁿',
//       position: 'Forward',
//       rating: 90.2,
//       goals: 26,
//       assists: 8,
//       age: 31,
//       marketValue: '€100M',
//       points: 1198,
//       strengths: ['Finishing', 'Heading', 'Link-up Play']
//     },
//     {
//       id: 6,
//       rank: 6,
//       prevRank: 7,
//       name: 'Mohamed Salah',
//       team: 'Liverpool',
//       league: 'Premier League',
//       country: '🇪🇬',
//       position: 'Forward',
//       rating: 89.8,
//       goals: 24,
//       assists: 12,
//       age: 32,
//       marketValue: '€90M',
//       points: 1185,
//       strengths: ['Pace', 'Finishing', 'Dribbling']
//     },
//     {
//       id: 7,
//       rank: 7,
//       prevRank: 6,
//       name: 'Jude Bellingham',
//       team: 'Real Madrid',
//       league: 'La Liga',
//       country: '🏴󐁧󐁢󐁥󐁮󐁧󐁿',
//       position: 'Midfielder',
//       rating: 89.5,
//       goals: 18,
//       assists: 11,
//       age: 22,
//       marketValue: '€150M',
//       points: 1178,
//       strengths: ['Physicality', 'Versatility', 'Leadership']
//     },
//     {
//       id: 8,
//       rank: 8,
//       prevRank: 9,
//       name: 'Bukayo Saka',
//       team: 'Arsenal',
//       league: 'Premier League',
//       country: '🏴󐁧󐁢󐁥󐁮󐁧󐁿',
//       position: 'Midfielder',
//       rating: 88.9,
//       goals: 20,
//       assists: 14,
//       age: 22,
//       marketValue: '€130M',
//       points: 1165,
//       strengths: ['Dribbling', 'Crossing', 'Work Rate']
//     },
//     {
//       id: 9,
//       rank: 9,
//       prevRank: 8,
//       name: 'Victor Osimhen',
//       team: 'Napoli',
//       league: 'Serie A',
//       country: '🇳🇬',
//       position: 'Forward',
//       rating: 88.7,
//       goals: 23,
//       assists: 5,
//       age: 25,
//       marketValue: '€120M',
//       points: 1158,
//       strengths: ['Pace', 'Strength', 'Finishing']
//     },
//     {
//       id: 10,
//       rank: 10,
//       prevRank: 11,
//       name: 'Rodri',
//       team: 'Manchester City',
//       league: 'Premier League',
//       country: '🇪🇸',
//       position: 'Midfielder',
//       rating: 88.5,
//       goals: 8,
//       assists: 6,
//       age: 28,
//       marketValue: '€110M',
//       points: 1152,
//       strengths: ['Tackling', 'Passing', 'Positioning']
//     }
//   ];

//   const categories = ['overall', 'forwards', 'midfielders', 'defenders', 'goalkeepers'];
//   const positions = ['all', 'Forward', 'Midfielder', 'Defender', 'Goalkeeper'];

//   const getRankChange = (current, prev) => {
//     const change = prev - current;
//     if (change > 0) return { icon: TrendingUp, color: 'text-green-600', text: `+${change}` };
//     if (change < 0) return { icon: TrendingDown, color: 'text-red-600', text: change };
//     return { icon: Minus, color: 'text-gray-400', text: '—' };
//   };

//   const filteredRankings = rankings.filter(player => {
//     const matchesPosition = selectedPosition === 'all' || player.position === selectedPosition;
//     const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          player.team.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesPosition && matchesSearch;
//   });

//   const topPlayer = filteredRankings[0];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="text-5xl font-bold mb-3">🏆 Player Rankings</h1>
//           <p className="text-blue-100 text-lg">World's best football players ranked by performance</p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* World #1 Highlight */}
//         {topPlayer && (
//           <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-2xl shadow-2xl p-8 mb-8 text-white relative overflow-hidden">
//             <div className="absolute top-0 right-0 text-yellow-200 opacity-20">
//               <Crown className="w-64 h-64 transform rotate-12" />
//             </div>
//             <div className="relative z-10">
//               <div className="flex items-center gap-2 mb-4">
//                 <Crown className="w-10 h-10 animate-pulse" />
//                 <h2 className="text-3xl font-bold">World #1</h2>
//               </div>
//               <div className="grid md:grid-cols-2 gap-8">
//                 <div>
//                   <div className="flex items-center gap-4 mb-4">
//                     <span className="text-7xl">{topPlayer.country}</span>
//                     <div>
//                       <h3 className="text-5xl font-bold mb-1">{topPlayer.name}</h3>
//                       <p className="text-yellow-100 text-xl">{topPlayer.team} • {topPlayer.position}</p>
//                     </div>
//                   </div>
//                   <div className="flex gap-8 mb-4">
//                     <div>
//                       <p className="text-6xl font-bold">{topPlayer.rating}</p>
//                       <p className="text-yellow-100 text-lg">Rating</p>
//                     </div>
//                     <div>
//                       <p className="text-6xl font-bold">{topPlayer.points}</p>
//                       <p className="text-yellow-100 text-lg">Points</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="bg-white/20 backdrop-blur rounded-lg p-4">
//                       <p className="text-4xl font-bold">{topPlayer.goals}</p>
//                       <p className="text-yellow-100">Goals</p>
//                     </div>
//                     <div className="bg-white/20 backdrop-blur rounded-lg p-4">
//                       <p className="text-4xl font-bold">{topPlayer.assists}</p>
//                       <p className="text-yellow-100">Assists</p>
//                     </div>
//                   </div>
//                   <div className="bg-white/20 backdrop-blur rounded-lg p-4">
//                     <p className="text-sm text-yellow-100 mb-2">Key Strengths</p>
//                     <div className="flex flex-wrap gap-2">
//                       {topPlayer.strengths.map((strength, idx) => (
//                         <span key={idx} className="bg-white/30 px-3 py-1 rounded-full text-sm font-semibold">
//                           {strength}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Filters */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 type="text"
//                 placeholder="Search players or teams..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <select
//               value={selectedPosition}
//               onChange={(e) => setSelectedPosition(e.target.value)}
//               className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//             >
//               {positions.map(pos => (
//                 <option key={pos} value={pos}>
//                   {pos === 'all' ? 'All Positions' : pos}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Rankings Table */}
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
//                 <tr>
//                   <th className="px-6 py-4 text-left text-sm font-bold">Rank</th>
//                   <th className="px-6 py-4 text-left text-sm font-bold">Player</th>
//                   <th className="px-6 py-4 text-center text-sm font-bold">Rating</th>
//                   <th className="px-6 py-4 text-center text-sm font-bold">Goals</th>
//                   <th className="px-6 py-4 text-center text-sm font-bold">Assists</th>
//                   <th className="px-6 py-4 text-center text-sm font-bold">Age</th>
//                   <th className="px-6 py-4 text-center text-sm font-bold">Value</th>
//                   <th className="px-6 py-4 text-center text-sm font-bold">Change</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {filteredRankings.map((player) => {
//                   const change = getRankChange(player.rank, player.prevRank);
//                   const ChangeIcon = change.icon;
                  
//                   return (
//                     <tr key={player.id} className="hover:bg-gray-50 transition-colors">
//                       <td className="px-6 py-4">
//                         <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
//                           player.rank === 1 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white' :
//                           player.rank === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-white' :
//                           player.rank === 3 ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white' :
//                           'bg-gray-100 text-gray-700'
//                         }`}>
//                           {player.rank}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <Link to={`/football/player/${player.id}`} className="flex items-center gap-3 hover:text-blue-600">
//                           <span className="text-3xl">{player.country}</span>
//                           <div>
//                             <p className="font-bold text-gray-800">{player.name}</p>
//                             <p className="text-sm text-gray-500">{player.team} • {player.position}</p>
//                           </div>
//                         </Link>
//                       </td>
//                       <td className="px-6 py-4 text-center">
//                         <div className="flex items-center justify-center gap-1">
//                           <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
//                           <span className="font-bold text-lg text-gray-800">{player.rating}</span>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 text-center">
//                         <span className="font-bold text-blue-600">{player.goals}</span>
//                       </td>
//                       <td className="px-6 py-4 text-center">
//                         <span className="font-bold text-green-600">{player.assists}</span>
//                       </td>
//                       <td className="px-6 py-4 text-center text-gray-700">{player.age}</td>
//                       <td className="px-6 py-4 text-center">
//                         <span className="font-bold text-purple-600">{player.marketValue}</span>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className={`flex items-center justify-center gap-1 ${change.color}`}>
//                           <ChangeIcon className="w-4 h-4" />
//                           <span className="font-bold text-sm">{change.text}</span>
//                         </div>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Top Movers Section */}
//         <div className="mt-8 grid md:grid-cols-2 gap-6">
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-600">
//               <TrendingUp className="w-6 h-6" />
//               Biggest Climbers
//             </h3>
//             <div className="space-y-3">
//               {filteredRankings
//                 .filter(p => p.prevRank > p.rank)
//                 .sort((a, b) => (b.prevRank - b.rank) - (a.prevRank - a.rank))
//                 .slice(0, 5)
//                 .map((player) => (
//                   <div key={player.id} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
//                     <div className="flex items-center gap-3">
//                       <span className="text-2xl">{player.country}</span>
//                       <div>
//                         <p className="font-semibold text-gray-800">{player.name}</p>
//                         <p className="text-xs text-gray-500">{player.team}</p>
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-green-600 font-bold">+{player.prevRank - player.rank}</p>
//                       <p className="text-xs text-gray-500">{player.prevRank} → {player.rank}</p>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-600">
//               <TrendingDown className="w-6 h-6" />
//               Biggest Fallers
//             </h3>
//             <div className="space-y-3">
//               {filteredRankings
//                 .filter(p => p.prevRank < p.rank)
//                 .sort((a, b) => (a.rank - a.prevRank) - (b.rank - b.prevRank))
//                 .slice(0, 5)
//                 .map((player) => (
//                   <div key={player.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
//                     <div className="flex items-center gap-3">
//                       <span className="text-2xl">{player.country}</span>
//                       <div>
//                         <p className="font-semibold text-gray-800">{player.name}</p>
//                         <p className="text-xs text-gray-500">{player.team}</p>
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-red-600 font-bold">{player.rank - player.prevRank}</p>
//                       <p className="text-xs text-gray-500">{player.prevRank} → {player.rank}</p>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FootballRankings;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { TrendingUp, TrendingDown, Minus, Star, Search } from 'lucide-react';

// const FootballRankings = () => {
//   const [selectedPosition, setSelectedPosition] = useState('all');
//   const [searchQuery, setSearchQuery] = useState('');

//   const rankings = [
//     { id: 1, rank: 1, prevRank: 1, name: 'Erling Haaland', team: 'Manchester City', league: 'Premier League', country: '🇳🇴', position: 'Forward', rating: 92.5, goals: 28, assists: 7, age: 25, marketValue: '€180M' },
//     { id: 2, rank: 2, prevRank: 3, name: 'Kylian Mbappé', team: 'Real Madrid', league: 'La Liga', country: '🇫🇷', position: 'Forward', rating: 91.8, goals: 25, assists: 10, age: 25, marketValue: '€200M' },
//     { id: 3, rank: 3, prevRank: 2, name: 'Kevin De Bruyne', team: 'Manchester City', league: 'Premier League', country: '🇧🇪', position: 'Midfielder', rating: 91.2, goals: 12, assists: 19, age: 33, marketValue: '€70M' },
//     { id: 4, rank: 4, prevRank: 5, name: 'Vinicius Junior', team: 'Real Madrid', league: 'La Liga', country: '🇧🇷', position: 'Forward', rating: 90.5, goals: 21, assists: 15, age: 23, marketValue: '€150M' },
//     { id: 5, rank: 5, prevRank: 4, name: 'Harry Kane', team: 'Bayern Munich', league: 'Bundesliga', country: '🏴', position: 'Forward', rating: 90.2, goals: 26, assists: 8, age: 31, marketValue: '€100M' },
//     { id: 6, rank: 6, prevRank: 7, name: 'Mohamed Salah', team: 'Liverpool', league: 'Premier League', country: '🇪🇬', position: 'Forward', rating: 89.8, goals: 24, assists: 12, age: 32, marketValue: '€90M' },
//     { id: 7, rank: 7, prevRank: 6, name: 'Jude Bellingham', team: 'Real Madrid', league: 'La Liga', country: '🏴', position: 'Midfielder', rating: 89.5, goals: 18, assists: 11, age: 22, marketValue: '€150M' },
//     { id: 8, rank: 8, prevRank: 9, name: 'Bukayo Saka', team: 'Arsenal', league: 'Premier League', country: '🏴', position: 'Midfielder', rating: 88.9, goals: 20, assists: 14, age: 22, marketValue: '€130M' },
//     { id: 9, rank: 9, prevRank: 8, name: 'Victor Osimhen', team: 'Napoli', league: 'Serie A', country: '🇳🇬', position: 'Forward', rating: 88.7, goals: 23, assists: 5, age: 25, marketValue: '€120M' },
//     { id: 10, rank: 10, prevRank: 11, name: 'Rodri', team: 'Manchester City', league: 'Premier League', country: '🇪🇸', position: 'Midfielder', rating: 88.5, goals: 8, assists: 6, age: 28, marketValue: '€110M' },
//   ];

//   const positions = ['all', 'Forward', 'Midfielder', 'Defender', 'Goalkeeper'];

//   const getRankChange = (current, prev) => {
//     const diff = prev - current;
//     if (diff > 0) return { Icon: TrendingUp, color: 'text-green-600', text: `+${diff}` };
//     if (diff < 0) return { Icon: TrendingDown, color: 'text-red-600', text: `${diff}` };
//     return { Icon: Minus, color: 'text-gray-400', text: '—' };
//   };

//   const filteredRankings = rankings.filter(player => {
//     const matchesPosition = selectedPosition === 'all' || player.position === selectedPosition;
//     const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                           player.team.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesPosition && matchesSearch;
//   });

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-10">
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="text-4xl font-bold mb-2">🏆 Player Rankings</h1>
//           <p className="text-blue-100">Top football players by current performance</p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-6">
//         {/* Filters */}
//         <div className="bg-white rounded-xl shadow-md p-5 mb-6">
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 type="text"
//                 placeholder="Search player or team..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
//               />
//             </div>
//             <select
//               value={selectedPosition}
//               onChange={(e) => setSelectedPosition(e.target.value)}
//               className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
//             >
//               {positions.map(pos => (
//                 <option key={pos} value={pos}>
//                   {pos === 'all' ? 'All Positions' : pos + 's'}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Rankings Table */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm">
//                 <tr>
//                   <th className="px-5 py-3 text-left font-medium">Rank</th>
//                   <th className="px-5 py-3 text-left font-medium">Player</th>
//                   <th className="px-5 py-3 text-center font-medium">Rating</th>
//                   <th className="px-5 py-3 text-center font-medium">G</th>
//                   <th className="px-5 py-3 text-center font-medium">A</th>
//                   <th className="px-5 py-3 text-center font-medium">Age</th>
//                   <th className="px-5 py-3 text-center font-medium">Value</th>
//                   <th className="px-5 py-3 text-center font-medium">Δ</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {filteredRankings.map((player) => {
//                   const { Icon: ChangeIcon, color, text } = getRankChange(player.rank, player.prevRank);
//                   const isTop3 = player.rank <= 3;

//                   return (
//                     <tr key={player.id} className="hover:bg-gray-50 transition-colors">
//                       <td className="px-5 py-4">
//                         <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white ${
//                           player.rank === 1 ? 'bg-yellow-500' :
//                           player.rank === 2 ? 'bg-gray-400' :
//                           player.rank === 3 ? 'bg-orange-500' :
//                           'bg-gray-600'
//                         }`}>
//                           {player.rank}
//                         </div>
//                       </td>
//                       <td className="px-5 py-4">
//                         <Link to={`/football/player/${player.id}`} className="flex items-center gap-3 group">
//                           <span className="text-2xl">{player.country}</span>
//                           <div>
//                             <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
//                               {player.name}
//                             </p>
//                             <p className="text-xs text-gray-500">{player.team}</p>
//                           </div>
//                         </Link>
//                       </td>
//                       <td className="px-5 py-4 text-center">
//                         <div className="flex items-center justify-center gap-1">
//                           <Star className="w-4 h-4 text-yellow-500 fill-current" />
//                           <span className="font-bold">{player.rating}</span>
//                         </div>
//                       </td>
//                       <td className="px-5 py-4 text-center font-semibold text-blue-600">{player.goals}</td>
//                       <td className="px-5 py-4 text-center font-semibold text-green-600">{player.assists}</td>
//                       <td className="px-5 py-4 text-center text-gray-600">{player.age}</td>
//                       <td className="px-5 py-4 text-center font-medium text-purple-600">{player.marketValue}</td>
//                       <td className="px-5 py-4 text-center">
//                         <div className={`flex items-center justify-center gap-1 ${color}`}>
//                           <ChangeIcon className="w-4 h-4" />
//                           <span className="font-medium text-sm">{text}</span>
//                         </div>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Movers Section - Compact */}
//         <div className="mt-8 grid md:grid-cols-2 gap-6">
//           <div className="bg-white rounded-xl shadow-md p-5">
//             <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-green-600">
//               <TrendingUp className="w-5 h-5" /> Biggest Climbers
//             </h3>
//             <div className="space-y-2">
//               {rankings
//                 .filter(p => p.prevRank > p.rank)
//                 .sort((a, b) => (b.prevRank - b.rank) - (a.prevRank - a.rank))
//                 .slice(0, 4)
//                 .map(p => (
//                   <div key={p.id} className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg text-sm">
//                     <div className="flex items-center gap-2">
//                       <span>{p.country}</span>
//                       <span className="font-medium">{p.name}</span>
//                     </div>
//                     <span className="text-green-600 font-bold">+{p.prevRank - p.rank}</span>
//                   </div>
//                 ))}
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-md p-5">
//             <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-red-600">
//               <TrendingDown className="w-5 h-5" /> Biggest Fallers
//             </h3>
//             <div className="space-y-2">
//               {rankings
//                 .filter(p => p.prevRank < p.rank)
//                 .sort((a, b) => (a.rank - a.prevRank) - (b.rank - b.prevRank))
//                 .slice(0, 4)
//                 .map(p => (
//                   <div key={p.id} className="flex items-center justify-between py-2 px-3 bg-red-50 rounded-lg text-sm">
//                     <div className="flex items-center gap-2">
//                       <span>{p.country}</span>
//                       <span className="font-medium">{p.name}</span>
//                     </div>
//                     <span className="text-red-600 font-bold">{p.rank - p.prevRank}</span>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FootballRankings;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TrendingUp, TrendingDown, Minus, Star, Search } from 'lucide-react';
import TopFootballStories from '../../data/TopFootballStories.js';
import LatestNews from '../../data/LatestNews.js';

const FootballRankings = () => {
  const navigate = useNavigate();
  const [selectedPosition, setSelectedPosition] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const rankings = [
    { id: 1, rank: 1, prevRank: 1, name: 'Erling Haaland', team: 'Manchester City', league: 'Premier League', country: '🇳🇴', position: 'Forward', rating: 92.5, goals: 28, assists: 7, age: 25, marketValue: '€180M' },
    { id: 2, rank: 2, prevRank: 3, name: 'Kylian Mbappé', team: 'Real Madrid', league: 'La Liga', country: '🇫🇷', position: 'Forward', rating: 91.8, goals: 25, assists: 10, age: 25, marketValue: '€200M' },
    { id: 3, rank: 3, prevRank: 2, name: 'Kevin De Bruyne', team: 'Manchester City', league: 'Premier League', country: '🇧🇪', position: 'Midfielder', rating: 91.2, goals: 12, assists: 19, age: 33, marketValue: '€70M' },
    { id: 4, rank: 4, prevRank: 5, name: 'Vinicius Junior', team: 'Real Madrid', league: 'La Liga', country: '🇧🇷', position: 'Forward', rating: 90.5, goals: 21, assists: 15, age: 23, marketValue: '€150M' },
    { id: 5, rank: 5, prevRank: 4, name: 'Harry Kane', team: 'Bayern Munich', league: 'Bundesliga', country: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', position: 'Forward', rating: 90.2, goals: 26, assists: 8, age: 31, marketValue: '€100M' },
    { id: 6, rank: 6, prevRank: 7, name: 'Mohamed Salah', team: 'Liverpool', league: 'Premier League', country: '🇪🇬', position: 'Forward', rating: 89.8, goals: 24, assists: 12, age: 32, marketValue: '€90M' },
    { id: 7, rank: 7, prevRank: 6, name: 'Jude Bellingham', team: 'Real Madrid', league: 'La Liga', country: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', position: 'Midfielder', rating: 89.5, goals: 18, assists: 11, age: 22, marketValue: '€150M' },
    { id: 8, rank: 8, prevRank: 9, name: 'Bukayo Saka', team: 'Arsenal', league: 'Premier League', country: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', position: 'Midfielder', rating: 88.9, goals: 20, assists: 14, age: 22, marketValue: '€130M' },
    { id: 9, rank: 9, prevRank: 8, name: 'Victor Osimhen', team: 'Napoli', league: 'Serie A', country: '🇳🇬', position: 'Forward', rating: 88.7, goals: 23, assists: 5, age: 25, marketValue: '€120M' },
    { id: 10, rank: 10, prevRank: 11, name: 'Rodri', team: 'Manchester City', league: 'Premier League', country: '🇪🇸', position: 'Midfielder', rating: 88.5, goals: 8, assists: 6, age: 28, marketValue: '€110M' },
  ];

  const positions = ['all', 'Forward', 'Midfielder', 'Defender', 'Goalkeeper'];

  const getRankChange = (current, prev) => {
    const diff = prev - current;
    if (diff > 0) return { Icon: TrendingUp, color: 'text-green-600', text: `+${diff}` };
    if (diff < 0) return { Icon: TrendingDown, color: 'text-red-600', text: `${diff}` };
    return { Icon: Minus, color: 'text-gray-400', text: '—' };
  };

  const filteredRankings = rankings.filter(player => {
    const matchesPosition = selectedPosition === 'all' || player.position === selectedPosition;
    const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          player.team.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPosition && matchesSearch;
  });

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

            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 rounded-xl shadow-xl">
              <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-3">🏆 Player Rankings</h1>
                <p className="text-blue-100 text-lg">Top football players by current performance – January 2026</p>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl shadow-md p-5 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search player or team..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <select
                  value={selectedPosition}
                  onChange={(e) => setSelectedPosition(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  {positions.map(pos => (
                    <option key={pos} value={pos}>
                      {pos === 'all' ? 'All Positions' : pos + 's'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Rankings Table */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm">
                    <tr>
                      <th className="px-5 py-3 text-left font-medium">Rank</th>
                      <th className="px-5 py-3 text-left font-medium">Player</th>
                      <th className="px-5 py-3 text-center font-medium">Rating</th>
                      <th className="px-5 py-3 text-center font-medium">G</th>
                      <th className="px-5 py-3 text-center font-medium">A</th>
                      <th className="px-5 py-3 text-center font-medium">Age</th>
                      <th className="px-5 py-3 text-center font-medium">Value</th>
                      <th className="px-5 py-3 text-center font-medium">Δ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredRankings.map((player) => {
                      const { Icon: ChangeIcon, color, text } = getRankChange(player.rank, player.prevRank);

                      return (
                        <tr key={player.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-5 py-4">
                            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white ${
                              player.rank === 1 ? 'bg-yellow-500' :
                              player.rank === 2 ? 'bg-gray-400' :
                              player.rank === 3 ? 'bg-orange-500' :
                              'bg-gray-600'
                            }`}>
                              {player.rank}
                            </div>
                          </td>
                          <td className="px-5 py-4">
                            <Link to={`/football/player/${player.id}`} className="flex items-center gap-3 group">
                              <span className="text-2xl">{player.country}</span>
                              <div>
                                <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                                  {player.name}
                                </p>
                                <p className="text-xs text-gray-500">{player.team}</p>
                              </div>
                            </Link>
                          </td>
                          <td className="px-5 py-4 text-center">
                            <div className="flex items-center justify-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="font-bold">{player.rating}</span>
                            </div>
                          </td>
                          <td className="px-5 py-4 text-center font-semibold text-blue-600">{player.goals}</td>
                          <td className="px-5 py-4 text-center font-semibold text-green-600">{player.assists}</td>
                          <td className="px-5 py-4 text-center text-gray-600">{player.age}</td>
                          <td className="px-5 py-4 text-center font-medium text-purple-600">{player.marketValue}</td>
                          <td className="px-5 py-4 text-center">
                            <div className={`flex items-center justify-center gap-1 ${color}`}>
                              <ChangeIcon className="w-4 h-4" />
                              <span className="font-medium text-sm">{text}</span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Movers Section */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-5">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-green-600">
                  <TrendingUp className="w-5 h-5" /> Biggest Climbers
                </h3>
                <div className="space-y-2">
                  {rankings
                    .filter(p => p.prevRank > p.rank)
                    .sort((a, b) => (b.prevRank - b.rank) - (a.prevRank - a.rank))
                    .slice(0, 4)
                    .map(p => (
                      <div key={p.id} className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg text-sm">
                        <div className="flex items-center gap-2">
                          <span>{p.country}</span>
                          <span className="font-medium">{p.name}</span>
                        </div>
                        <span className="text-green-600 font-bold">+{p.prevRank - p.rank}</span>
                      </div>
                    ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-5">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-red-600">
                  <TrendingDown className="w-5 h-5" /> Biggest Fallers
                </h3>
                <div className="space-y-2">
                  {rankings
                    .filter(p => p.prevRank < p.rank)
                    .sort((a, b) => (a.rank - a.prevRank) - (b.rank - b.prevRank))
                    .slice(0, 4)
                    .map(p => (
                      <div key={p.id} className="flex items-center justify-between py-2 px-3 bg-red-50 rounded-lg text-sm">
                        <div className="flex items-center gap-2">
                          <span>{p.country}</span>
                          <span className="font-medium">{p.name}</span>
                        </div>
                        <span className="text-red-600 font-bold">{p.rank - p.prevRank}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
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

export default FootballRankings;
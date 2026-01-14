


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { BarChart3, Trophy, Users, Target, Activity } from 'lucide-react';
// import TopFootballStories from '../../data/TopFootballStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { footballStatsData } from '../../data/FootballStatsData.js';

// const FootballStats = () => {
//   const navigate = useNavigate();
//   const [activeCategory, setActiveCategory] = useState('players');
//   const [selectedLeague, setSelectedLeague] = useState('Premier League');

//   const { playerStats, teamStats } = footballStatsData;

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

//   const handleStoryClick = (id) => {
//     navigate(`/details/football/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
//       {/* Main Grid Layout */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

//           {/* Main Content */}
//           <div className="lg:col-span-8 space-y-6">

//             {/* Compact Header */}
//             <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-10 rounded-xl shadow-xl">
//               <div className="max-w-7xl mx-auto px-4">
//                 <h1 className="text-4xl font-bold mb-2">📊 Football Statistics</h1>
//                 <p className="text-indigo-100 text-lg">Latest stats from top leagues – Season 2025/26</p>
//               </div>
//             </div>

//             {/* Compact Quick Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//               <div className="bg-white rounded-xl p-5 shadow text-center">
//                 <Target className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
//                 <p className="text-2xl font-bold">~520</p>
//                 <p className="text-sm text-gray-600">Total Goals</p>
//               </div>
//               <div className="bg-white rounded-xl p-5 shadow text-center">
//                 <Activity className="w-8 h-8 mx-auto mb-2 text-green-600" />
//                 <p className="text-2xl font-bold">~300</p>
//                 <p className="text-sm text-gray-600">Total Assists</p>
//               </div>
//               <div className="bg-white rounded-xl p-5 shadow text-center">
//                 <Trophy className="w-8 h-8 mx-auto mb-2 text-purple-600" />
//                 <p className="text-2xl font-bold">190</p>
//                 <p className="text-sm text-gray-600">Matches Played</p>
//               </div>
//               <div className="bg-white rounded-xl p-5 shadow text-center">
//                 <BarChart3 className="w-8 h-8 mx-auto mb-2 text-orange-600" />
//                 <p className="text-2xl font-bold">~2.7</p>
//                 <p className="text-sm text-gray-600">Avg Goals/Match</p>
//               </div>
//             </div>

//             {/* Filters */}
//             <div className="bg-white rounded-xl shadow-lg p-5 mb-8">
//               <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//                 <div className="w-full flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
//                   {categories.map(category => {
//                     const Icon = category.icon;
//                     return (
//                       <button
//                         key={category.id}
//                         onClick={() => setActiveCategory(category.id)}
//                         className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
//                           activeCategory === category.id
//                             ? 'bg-indigo-600 text-white shadow'
//                             : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                         }`}
//                       >
//                         <Icon className="w-5 h-5" />
//                         {category.name}
//                       </button>
//                     );
//                   })}
//                 </div>

//                 <select
//                   value={selectedLeague}
//                   onChange={(e) => setSelectedLeague(e.target.value)}
//                   className="w-full md:w-auto px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white"
//                 >
//                   {leagues.map(league => (
//                     <option key={league} value={league}>{league}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {/* Player Stats */}
//             {activeCategory === 'players' && (
//               <div className="space-y-4">
//                 <h2 className="text-xl font-bold text-gray-800 mb-4">Top Scorers - {selectedLeague}</h2>
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {playerStats.map((player, index) => (
//                     <div key={player.id} className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between">
//                       <div className="flex items-center gap-4">
//                         <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
//                           index === 0 ? 'bg-yellow-400 text-white' :
//                           index === 1 ? 'bg-gray-300 text-white' :
//                           index === 2 ? 'bg-orange-400 text-white' :
//                           'bg-gray-100 text-gray-700'
//                         }`}>
//                           {index + 1}
//                         </div>
//                         <div>
//                           <h3 className="font-bold text-gray-800">{player.name}</h3>
//                           <p className="text-sm text-gray-600">{player.team}</p>
//                         </div>
//                       </div>
//                       <div className="text-center">
//                         <p className="text-3xl font-bold text-indigo-600">{player.goals}</p>
//                         <p className="text-xs text-gray-600">Goals</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Team Stats */}
//             {activeCategory === 'teams' && (
//               <div>
//                 <h2 className="text-xl font-bold text-gray-800 mb-4">Standings - {selectedLeague}</h2>
//                 <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//                   <div className="overflow-x-auto">
//                     <table className="w-full text-sm">
//                       <thead className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
//                         <tr>
//                           <th className="px-4 py-3 text-left">Pos</th>
//                           <th className="px-4 py-3 text-left">Team</th>
//                           <th className="px-4 py-3 text-center">P</th>
//                           <th className="px-4 py-3 text-center">W</th>
//                           <th className="px-4 py-3 text-center">D</th>
//                           <th className="px-4 py-3 text-center">L</th>
//                           <th className="px-4 py-3 text-center">GD</th>
//                           <th className="px-4 py-3 text-center">Pts</th>
//                           <th className="px-4 py-3 text-center">Form</th>
//                         </tr>
//                       </thead>
//                       <tbody className="divide-y divide-gray-200">
//                         {teamStats.map((team, index) => (
//                           <tr key={team.id} className="hover:bg-gray-50">
//                             <td className="px-4 py-3">
//                               <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full font-bold text-sm ${
//                                 index === 0 ? 'bg-yellow-400 text-white' :
//                                 index < 4 ? 'bg-indigo-500 text-white' :
//                                 'bg-gray-200 text-gray-700'
//                               }`}>
//                                 {index + 1}
//                               </span>
//                             </td>
//                             <td className="px-4 py-3 font-medium text-gray-800">
//                               <Link to={`/football/team/${team.name.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-indigo-600 transition-colors">
//                                 {team.name}
//                               </Link>
//                             </td>
//                             <td className="px-4 py-3 text-center">{team.played}</td>
//                             <td className="px-4 py-3 text-center text-green-600 font-medium">{team.won}</td>
//                             <td className="px-4 py-3 text-center text-yellow-600 font-medium">{team.drawn}</td>
//                             <td className="px-4 py-3 text-center text-red-600 font-medium">{team.lost}</td>
//                             <td className="px-4 py-3 text-center font-medium">{team.gd > 0 ? '+' : ''}{team.gd}</td>
//                             <td className="px-4 py-3 text-center">
//                               <span className="bg-indigo-600 text-white font-bold px-3 py-1 rounded-full text-sm">
//                                 {team.points}
//                               </span>
//                             </td>
//                             <td className="px-4 py-3">
//                               <div className="flex gap-1 justify-center">
//                                 {team.form.map((result, idx) => (
//                                   <span key={idx} className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${getFormColor(result)}`}>
//                                     {result}
//                                   </span>
//                                 ))}
//                               </div>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* League Stats */}
//             {activeCategory === 'leagues' && (
//               <div>
//                 <h2 className="text-xl font-bold text-gray-800 mb-4">League Leaders - {selectedLeague}</h2>
//                 <div className="grid md:grid-cols-2 gap-5">
//                   <div className="bg-white rounded-xl shadow-md p-5">
//                     <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
//                       <Target className="w-5 h-5 text-indigo-600" />
//                       Top Scorers
//                     </h3>
//                     <div className="space-y-3">
//                       {playerStats.map((player, index) => (
//                         <div key={player.id} className="flex items-center justify-between">
//                           <div className="flex items-center gap-3">
//                             <span className="text-sm font-bold text-gray-600 w-6">{index + 1}.</span>
//                             <div>
//                               <p className="font-medium">{player.name}</p>
//                               <p className="text-xs text-gray-500">{player.team}</p>
//                             </div>
//                           </div>
//                           <span className="text-xl font-bold text-indigo-600">{player.goals}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="bg-white rounded-xl shadow-md p-5">
//                     <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
//                       <Activity className="w-5 h-5 text-green-600" />
//                       Top Assists (Estimated)
//                     </h3>
//                     <div className="space-y-3">
//                       {playerStats
//                         .sort((a, b) => b.assists - a.assists)
//                         .map((player, index) => (
//                           <div key={player.id} className="flex items-center justify-between">
//                             <div className="flex items-center gap-3">
//                               <span className="text-sm font-bold text-gray-600 w-6">{index + 1}.</span>
//                               <div>
//                                 <p className="font-medium">{player.name}</p>
//                                 <p className="text-xs text-gray-500">{player.team}</p>
//                               </div>
//                             </div>
//                             <span className="text-xl font-bold text-green-600">{player.assists}</span>
//                           </div>
//                         ))}
//                     </div>
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
//                       <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-indigo-600 transition-colors">
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
//                 className="mt-6 w-full text-center text-indigo-600 font-medium hover:underline text-sm"
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
//               className="mt-4 w-full text-center text-indigo-600 font-medium hover:underline text-sm"
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
//                 className="text-indigo-600 hover:underline font-medium text-sm sm:text-base"
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

// export default FootballStats;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { BarChart3, Trophy, Users, Target, Activity } from 'lucide-react';
// import TopFootballStories from '../../data/TopFootballStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { footballStatsData } from '../../data/FootballStatsData.js';

// const FootballStats = () => {
//   const navigate = useNavigate();
//   const [activeCategory, setActiveCategory] = useState('players');
//   const [selectedLeague, setSelectedLeague] = useState('Premier League');

//   const { playerStats, teamStats } = footballStatsData;

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

//   const handleStoryClick = (id) => {
//     navigate(`/details/football/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
//       {/* Main Grid Layout */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

//           {/* Main Content */}
//           <div className="lg:col-span-8 space-y-6">

//             {/* Compact Header */}
//             <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-10 rounded-xl shadow-xl">
//               <div className="max-w-7xl mx-auto px-4">
//                 <h1 className="text-4xl font-bold mb-2">📊 Football Statistics</h1>
//                 <p className="text-indigo-100 text-lg">Latest stats from top leagues – Season 2025/26</p>
//               </div>
//             </div>

//             {/* Compact Quick Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//               <div className="bg-white rounded-xl p-5 shadow text-center">
//                 <Target className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
//                 <p className="text-2xl font-bold">~520</p>
//                 <p className="text-sm text-gray-600">Total Goals</p>
//               </div>
//               <div className="bg-white rounded-xl p-5 shadow text-center">
//                 <Activity className="w-8 h-8 mx-auto mb-2 text-green-600" />
//                 <p className="text-2xl font-bold">~300</p>
//                 <p className="text-sm text-gray-600">Total Assists</p>
//               </div>
//               <div className="bg-white rounded-xl p-5 shadow text-center">
//                 <Trophy className="w-8 h-8 mx-auto mb-2 text-purple-600" />
//                 <p className="text-2xl font-bold">190</p>
//                 <p className="text-sm text-gray-600">Matches Played</p>
//               </div>
//               <div className="bg-white rounded-xl p-5 shadow text-center">
//                 <BarChart3 className="w-8 h-8 mx-auto mb-2 text-orange-600" />
//                 <p className="text-2xl font-bold">~2.7</p>
//                 <p className="text-sm text-gray-600">Avg Goals/Match</p>
//               </div>
//             </div>

//             {/* Filters */}
//             <div className="bg-white rounded-xl shadow-lg p-5 mb-8">
//               <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//                 <div className="w-full flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
//                   {categories.map(category => {
//                     const Icon = category.icon;
//                     return (
//                       <button
//                         key={category.id}
//                         onClick={() => setActiveCategory(category.id)}
//                         className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
//                           activeCategory === category.id
//                             ? 'bg-indigo-600 text-white shadow'
//                             : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                         }`}
//                       >
//                         <Icon className="w-5 h-5" />
//                         {category.name}
//                       </button>
//                     );
//                   })}
//                 </div>

//                 <select
//                   value={selectedLeague}
//                   onChange={(e) => setSelectedLeague(e.target.value)}
//                   className="w-full md:w-auto px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white"
//                 >
//                   {leagues.map(league => (
//                     <option key={league} value={league}>{league}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {/* Player Stats */}
//             {activeCategory === 'players' && (
//               <div className="space-y-4">
//                 <h2 className="text-xl font-bold text-gray-800 mb-4">Top Scorers - {selectedLeague}</h2>
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {playerStats.map((player, index) => (
//                     <div key={player.id} className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between">
//                       <div className="flex items-center gap-4">
//                         <img
//                           src={player.nameImage}
//                           alt={player.name}
//                           className="w-12 h-12 rounded-full object-cover border-2 border-indigo-100"
//                           onError={(e) => { e.target.src = 'https://via.placeholder.com/48?text=' + player.name.charAt(0); }}
//                         />
//                         <div>
//                           <h3 className="font-bold text-gray-800">{player.name}</h3>
//                           <div className="flex items-center gap-2">
//                             <img
//                               src={player.teamLogo}
//                               alt={player.team}
//                               className="w-6 h-6 object-contain"
//                               onError={(e) => { e.target.style.display = 'none'; }}
//                             />
//                             <p className="text-sm text-gray-600">{player.team}</p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="text-center">
//                         <p className="text-3xl font-bold text-indigo-600">{player.goals}</p>
//                         <p className="text-xs text-gray-600">Goals</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Team Stats */}
//             {activeCategory === 'teams' && (
//               <div>
//                 <h2 className="text-xl font-bold text-gray-800 mb-4">Standings - {selectedLeague}</h2>
//                 <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//                   <div className="overflow-x-auto">
//                     <table className="w-full text-sm">
//                       <thead className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
//                         <tr>
//                           <th className="px-4 py-3 text-left">Pos</th>
//                           <th className="px-4 py-3 text-left">Team</th>
//                           <th className="px-4 py-3 text-center">P</th>
//                           <th className="px-4 py-3 text-center">W</th>
//                           <th className="px-4 py-3 text-center">D</th>
//                           <th className="px-4 py-3 text-center">L</th>
//                           <th className="px-4 py-3 text-center">GD</th>
//                           <th className="px-4 py-3 text-center">Pts</th>
//                           <th className="px-4 py-3 text-center">Form</th>
//                         </tr>
//                       </thead>
//                       <tbody className="divide-y divide-gray-200">
//                         {teamStats.map((team, index) => (
//                           <tr key={team.id} className="hover:bg-gray-50">
//                             <td className="px-4 py-3">
//                               <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full font-bold text-sm ${
//                                 index === 0 ? 'bg-yellow-400 text-white' :
//                                 index < 4 ? 'bg-indigo-500 text-white' :
//                                 'bg-gray-200 text-gray-700'
//                               }`}>
//                                 {index + 1}
//                               </span>
//                             </td>
//                             <td className="px-4 py-3 font-medium text-gray-800">
//                               <div className="flex items-center gap-3">
//                                 <img
//                                   src={team.nameLogo}
//                                   alt={team.name}
//                                   className="w-8 h-8 object-contain"
//                                   onError={(e) => { e.target.style.display = 'none'; }}
//                                 />
//                                 <Link to={`/football/team/${team.name.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-indigo-600 transition-colors">
//                                   {team.name}
//                                 </Link>
//                               </div>
//                             </td>
//                             <td className="px-4 py-3 text-center">{team.played}</td>
//                             <td className="px-4 py-3 text-center text-green-600 font-medium">{team.won}</td>
//                             <td className="px-4 py-3 text-center text-yellow-600 font-medium">{team.drawn}</td>
//                             <td className="px-4 py-3 text-center text-red-600 font-medium">{team.lost}</td>
//                             <td className="px-4 py-3 text-center font-medium">{team.gd > 0 ? '+' : ''}{team.gd}</td>
//                             <td className="px-4 py-3 text-center">
//                               <span className="bg-indigo-600 text-white font-bold px-3 py-1 rounded-full text-sm">
//                                 {team.points}
//                               </span>
//                             </td>
//                             <td className="px-4 py-3">
//                               <div className="flex gap-1 justify-center">
//                                 {team.form.map((result, idx) => (
//                                   <span key={idx} className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${getFormColor(result)}`}>
//                                     {result}
//                                   </span>
//                                 ))}
//                               </div>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* League Stats */}
//             {activeCategory === 'leagues' && (
//               <div>
//                 <h2 className="text-xl font-bold text-gray-800 mb-4">League Leaders - {selectedLeague}</h2>
//                 <div className="grid md:grid-cols-2 gap-5">
//                   <div className="bg-white rounded-xl shadow-md p-5">
//                     <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
//                       <Target className="w-5 h-5 text-indigo-600" />
//                       Top Scorers
//                     </h3>
//                     <div className="space-y-3">
//                       {playerStats.map((player, index) => (
//                         <div key={player.id} className="flex items-center justify-between">
//                           <div className="flex items-center gap-3">
//                             <img
//                               src={player.nameImage}
//                               alt={player.name}
//                               className="w-8 h-8 rounded-full object-cover"
//                               onError={(e) => { e.target.src = 'https://via.placeholder.com/32?text=' + player.name.charAt(0); }}
//                             />
//                             <div>
//                               <p className="font-medium">{player.name}</p>
//                               <p className="text-xs text-gray-500">{player.team}</p>
//                             </div>
//                           </div>
//                           <span className="text-xl font-bold text-indigo-600">{player.goals}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="bg-white rounded-xl shadow-md p-5">
//                     <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
//                       <Activity className="w-5 h-5 text-green-600" />
//                       Top Assists (Estimated)
//                     </h3>
//                     <div className="space-y-3">
//                       {playerStats
//                         .sort((a, b) => b.assists - a.assists)
//                         .map((player, index) => (
//                           <div key={player.id} className="flex items-center justify-between">
//                             <div className="flex items-center gap-3">
//                               <img
//                                 src={player.nameImage}
//                                 alt={player.name}
//                                 className="w-8 h-8 rounded-full object-cover"
//                                 onError={(e) => { e.target.src = 'https://via.placeholder.com/32?text=' + player.name.charAt(0); }}
//                               />
//                               <div>
//                                 <p className="font-medium">{player.name}</p>
//                                 <p className="text-xs text-gray-500">{player.team}</p>
//                               </div>
//                             </div>
//                             <span className="text-xl font-bold text-green-600">{player.assists}</span>
//                           </div>
//                         ))}
//                     </div>
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
//                       <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-indigo-600 transition-colors">
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
//                 className="mt-6 w-full text-center text-indigo-600 font-medium hover:underline text-sm"
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
//               className="mt-4 w-full text-center text-indigo-600 font-medium hover:underline text-sm"
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
//                 className="text-indigo-600 hover:underline font-medium text-sm sm:text-base"
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

// export default FootballStats;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BarChart3, Trophy, Users, Target, Activity } from 'lucide-react';
import TopFootballStories from '../../data/TopFootballStories.js';
import LatestNews from '../../data/LatestNews.js';
import { footballStatsData } from '../../data/FootballStatsData.js';
import SEO from '../../components/SEO.jsx';

const FootballStats = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('players');
  const [selectedLeague, setSelectedLeague] = useState('Premier League');

  const { playerStats, teamStats } = footballStatsData;

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

  // SEO data
  const seoTitle = 'Football Statistics & Analytics - Top Scorers, Standings & Team Stats | SportlyRadar';
  const seoDescription = 'Comprehensive football statistics including top scorers, team standings, player analytics, assists, and league rankings for Premier League, La Liga, Serie A, Bundesliga & more.';
  const seoKeywords = 'football statistics, soccer stats, top scorers, team standings, player analytics, football rankings, sports analytics';
  const currentUrl = window.location.href;

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        url={currentUrl}
        canonical={currentUrl}
      />
      
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

              {/* Filters */}
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
                          <img
                            src={player.nameImage}
                            alt={player.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-indigo-100"
                            onError={(e) => { e.target.src = 'https://via.placeholder.com/48?text=' + player.name.charAt(0); }}
                          />
                          <div>
                            <h3 className="font-bold text-gray-800">{player.name}</h3>
                            <div className="flex items-center gap-2">
                              <img
                                src={player.teamLogo}
                                alt={player.team}
                                className="w-6 h-6 object-contain"
                                onError={(e) => { e.target.style.display = 'none'; }}
                              />
                              <p className="text-sm text-gray-600">{player.team}</p>
                            </div>
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
                                <div className="flex items-center gap-3">
                                  <img
                                    src={team.nameLogo}
                                    alt={team.name}
                                    className="w-8 h-8 object-contain"
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                  />
                                  <Link to={`/football/team/${team.name.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-indigo-600 transition-colors">
                                    {team.name}
                                  </Link>
                                </div>
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
                              <img
                                src={player.nameImage}
                                alt={player.name}
                                className="w-8 h-8 rounded-full object-cover"
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/32?text=' + player.name.charAt(0); }}
                              />
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
                        {playerStats
                          .sort((a, b) => b.assists - a.assists)
                          .map((player, index) => (
                            <div key={player.id} className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <img
                                  src={player.nameImage}
                                  alt={player.name}
                                  className="w-8 h-8 rounded-full object-cover"
                                  onError={(e) => { e.target.src = 'https://via.placeholder.com/32?text=' + player.name.charAt(0); }}
                                />
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
    </>
  );
};

export default FootballStats;
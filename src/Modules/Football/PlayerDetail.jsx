


// import React, { useState } from 'react';
// import { Link, useParams, useNavigate } from 'react-router-dom';
// import { Trophy, Target, Activity, Calendar, MapPin, DollarSign, TrendingUp, BarChart3 } from 'lucide-react';
// import TopFootballStories from '../../data/TopFootballStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { footballPlayerDetails } from '../../data/FootballPlayerDetailData.js';

// const FootballPlayerDetail = () => {
//   const { playerId } = useParams();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('overview');

//   // Data ab external file se aa raha hai
//   const player = footballPlayerDetails[playerId] || footballPlayerDetails["1"];

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

//             {/* Tab Content */}
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


// import React, { useState } from 'react';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import { Trophy, Target, Activity, Calendar, MapPin, DollarSign, TrendingUp, BarChart3 } from 'lucide-react';
// import TopFootballStories from '../../data/TopFootballStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { footballPlayerDetails } from '../../data/FootballPlayerDetailData.js';

// const FootballPlayerDetail = () => {
//   const { playerId } = useParams();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('overview');

//   // Data ab external file se aa raha hai
//   const player = footballPlayerDetails[playerId] || footballPlayerDetails["1"];

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
//                     <img
//                       src={player.country}
//                       alt={player.countryName}
//                       className="w-12 h-8 sm:w-16 sm:h-10 object-cover rounded shadow-md"
//                       onError={(e) => { e.target.src = 'https://via.placeholder.com/64x40?text=Flag'; }}
//                     />
//                     <img
//                       src={player.nameImage}
//                       alt={player.name}
//                       className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-lg"
//                       onError={(e) => { e.target.src = 'https://via.placeholder.com/96?text=' + player.name.charAt(0); }}
//                     />
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

//             {/* Tab Content */}
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
//   <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm ${
//     m.result === 'W' ? 'bg-green-500' : m.result === 'D' ? 'bg-yellow-500' : 'bg-red-500'
//   }`}>
//     {m.result}
//   </div>
//   <div className="flex items-center gap-3">
//     <img
//       src={m.opponentLogo}
//       alt={m.opponent}
//       className="w-10 h-10 object-contain"
//       onError={(e) => { e.target.style.display = 'none'; }}
//     />
//     <div>
//       <p className="font-semibold">vs {m.opponent}</p>
//       <p className="text-xs text-gray-500">{new Date(m.date).toLocaleDateString('en-GB')}</p>
//     </div>
//   </div>
// </div>
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
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Trophy, Target, Activity, Calendar, MapPin, DollarSign, TrendingUp, BarChart3 } from 'lucide-react';
import SEO from '../../components/SEO.jsx';
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

  // SEO meta data
  const seoTitle = `${player.name} | ${player.position} | ${player.team} | Football Player Profile`;
  const seoDescription = `Complete profile of ${player.name} - ${player.position} for ${player.team}. Stats: ${player.currentSeason.goals} goals, ${player.currentSeason.assists} assists in ${player.currentSeason.matches} matches. Rating: ${player.rating}/10.`;
  const seoKeywords = `${player.name}, football player, ${player.team}, ${player.position}, football stats, player profile, football statistics`;
  const seoImage = player.nameImage;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* SEO Component */}
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        image={seoImage}
        url={window.location.href}
        type="article"
        publishedTime={new Date().toISOString()}
      />

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
                    <img
                      src={player.country}
                      alt={player.countryName}
                      className="w-12 h-8 sm:w-16 sm:h-10 object-cover rounded shadow-md"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/64x40?text=Flag'; }}
                    />
                    <img
                      src={player.nameImage}
                      alt={player.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-lg"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/96?text=' + player.name.charAt(0); }}
                    />
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
                      <div className="flex items-center gap-3">
                        <img
                          src={m.opponentLogo}
                          alt={m.opponent}
                          className="w-10 h-10 object-contain"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                        <div>
                          <p className="font-semibold">vs {m.opponent}</p>
                          <p className="text-xs text-gray-500">{new Date(m.date).toLocaleDateString('en-GB')}</p>
                        </div>
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
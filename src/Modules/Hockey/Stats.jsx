


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import TopHockeyStories from '../../data/TopHockeyStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { hockeyStats } from '../../data/HockeyStatsData.js';

// const Stats = () => {
//   const navigate = useNavigate();
//   const [selectedStat, setSelectedStat] = useState('goals');

//   const handleStoryClick = (id) => {
//     navigate(`/details/hockey/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   const statTabs = [
//     { id: 'goals', label: 'Top Scorers', icon: '⚽' },
//     { id: 'assists', label: 'Most Assists', icon: '🎯' },
//     { id: 'saves', label: 'Best Goalkeepers', icon: '🧤' },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
//       {/* Main Grid Layout */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
//           {/* Left: Stats Content */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Header */}
//             <div className="mb-6">
//               <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">🏑 Hockey Statistics</h1>
//               <p className="text-gray-600 text-sm">FIH Pro League 2025-26 Season Stats</p>
//             </div>

//             {/* Stat Tabs */}
//             <div className="bg-white rounded-xl shadow-md p-4 mb-6">
//               <div className="flex flex-wrap gap-3">
//                 {statTabs.map((tab) => (
//                   <button
//                     key={tab.id}
//                     onClick={() => setSelectedStat(tab.id)}
//                     className={`flex-1 min-w-[120px] px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
//                       selectedStat === tab.id
//                         ? 'bg-blue-600 text-white'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     <span>{tab.icon}</span>
//                     {tab.label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Overall Stats Cards */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
//               <div className="bg-white rounded-lg shadow p-5 text-center">
//                 <p className="text-3xl mb-1">⚽</p>
//                 <p className="text-2xl font-bold text-blue-600">{hockeyStats.overall.totalGoals}</p>
//                 <p className="text-xs text-gray-600 mt-1">Total Goals</p>
//               </div>
//               <div className="bg-white rounded-lg shadow p-5 text-center">
//                 <p className="text-3xl mb-1">🏑</p>
//                 <p className="text-2xl font-bold text-green-600">{hockeyStats.overall.matchesPlayed}</p>
//                 <p className="text-xs text-gray-600 mt-1">Matches Played</p>
//               </div>
//               <div className="bg-white rounded-lg shadow p-5 text-center">
//                 <p className="text-3xl mb-1">🎯</p>
//                 <p className="text-2xl font-bold text-purple-600">{hockeyStats.overall.penaltyCorners}</p>
//                 <p className="text-xs text-gray-600 mt-1">Penalty Corners</p>
//               </div>
//               <div className="bg-white rounded-lg shadow p-5 text-center">
//                 <p className="text-3xl mb-1">📊</p>
//                 <p className="text-2xl font-bold text-orange-600">{hockeyStats.overall.avgGoalsPerMatch}</p>
//                 <p className="text-xs text-gray-600 mt-1">Avg Goals/Match</p>
//               </div>
//             </div>

//             {/* Selected Stat Table */}
//             <div className="bg-white rounded-xl shadow-md overflow-hidden">
//               <div className="p-5">
//                 <table className="w-full text-sm">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="text-left py-3 px-4">Rank</th>
//                       <th className="text-left py-3 px-4">Player</th>
//                       <th className="text-left py-3 px-4">Country</th>
//                       <th className="text-center py-3 px-4">
//                         {selectedStat === 'goals' ? 'Goals' : selectedStat === 'assists' ? 'Assists' : 'Saves'}
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-100">
//                     {hockeyStats[selectedStat].map((stat) => (
//                       <tr key={stat.rank} className="hover:bg-gray-50">
//                         <td className="py-3 px-4">
//                           <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${
//                             stat.rank === 1 ? 'bg-yellow-500' :
//                             stat.rank === 2 ? 'bg-gray-400' :
//                             stat.rank === 3 ? 'bg-orange-500' :
//                             'bg-gray-600'
//                           }`}>
//                             {stat.rank}
//                           </div>
//                         </td>
//                         <td className="py-3 px-4 font-medium">{stat.player}</td>
//                         <td className="py-3 px-4 text-gray-600">{stat.country}</td>
//                         <td className="py-3 px-4 text-center">
//                           <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-bold rounded">
//                             {stat.value}
//                           </span>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
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

// export default Stats;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import TopHockeyStories from '../../data/TopHockeyStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { hockeyStats } from '../../data/HockeyStatsData.js';

// const Stats = () => {
//   const navigate = useNavigate();
//   const [selectedStat, setSelectedStat] = useState('goals');

//   const handleStoryClick = (id) => {
//     navigate(`/details/hockey/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   const statTabs = [
//     { id: 'goals', label: 'Top Scorers', icon: '⚽' },
//     { id: 'assists', label: 'Most Assists', icon: '🎯' },
//     { id: 'saves', label: 'Best Goalkeepers', icon: '🧤' },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
//       {/* Main Grid Layout */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
//           {/* Left: Stats Content */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Header */}
//             <div className="mb-6">
//               <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">🏑 Hockey Statistics</h1>
//               <p className="text-gray-600 text-sm">FIH Pro League 2025-26 Season Stats</p>
//             </div>

//             {/* Stat Tabs */}
//             <div className="bg-white rounded-xl shadow-md p-4 mb-6">
//               <div className="flex flex-wrap gap-3">
//                 {statTabs.map((tab) => (
//                   <button
//                     key={tab.id}
//                     onClick={() => setSelectedStat(tab.id)}
//                     className={`flex-1 min-w-[120px] px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
//                       selectedStat === tab.id
//                         ? 'bg-blue-600 text-white'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     <span>{tab.icon}</span>
//                     {tab.label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Overall Stats Cards */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
//               <div className="bg-white rounded-lg shadow p-5 text-center">
//                 <p className="text-3xl mb-1">⚽</p>
//                 <p className="text-2xl font-bold text-blue-600">{hockeyStats.overall.totalGoals}</p>
//                 <p className="text-xs text-gray-600 mt-1">Total Goals</p>
//               </div>
//               <div className="bg-white rounded-lg shadow p-5 text-center">
//                 <p className="text-3xl mb-1">🏑</p>
//                 <p className="text-2xl font-bold text-green-600">{hockeyStats.overall.matchesPlayed}</p>
//                 <p className="text-xs text-gray-600 mt-1">Matches Played</p>
//               </div>
//               <div className="bg-white rounded-lg shadow p-5 text-center">
//                 <p className="text-3xl mb-1">🎯</p>
//                 <p className="text-2xl font-bold text-purple-600">{hockeyStats.overall.penaltyCorners}</p>
//                 <p className="text-xs text-gray-600 mt-1">Penalty Corners</p>
//               </div>
//               <div className="bg-white rounded-lg shadow p-5 text-center">
//                 <p className="text-3xl mb-1">📊</p>
//                 <p className="text-2xl font-bold text-orange-600">{hockeyStats.overall.avgGoalsPerMatch}</p>
//                 <p className="text-xs text-gray-600 mt-1">Avg Goals/Match</p>
//               </div>
//             </div>

//             {/* Selected Stat Table */}
//             <div className="bg-white rounded-xl shadow-md overflow-hidden">
//               <div className="p-5">
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-sm min-w-[600px]">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="text-left py-3 px-4">Rank</th>
//                         <th className="text-left py-3 px-4">Player</th>
//                         <th className="text-left py-3 px-4">Country</th>
//                         <th className="text-center py-3 px-4">
//                           {selectedStat === 'goals' ? 'Goals' : selectedStat === 'assists' ? 'Assists' : 'Saves'}
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-100">
//                       {hockeyStats[selectedStat].map((stat) => (
//                         <tr key={stat.rank} className="hover:bg-gray-50">
//                           <td className="py-3 px-4">
//                             <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${
//                               stat.rank === 1 ? 'bg-yellow-500' :
//                               stat.rank === 2 ? 'bg-gray-400' :
//                               stat.rank === 3 ? 'bg-orange-500' :
//                               'bg-gray-600'
//                             }`}>
//                               {stat.rank}
//                             </div>
//                           </td>
//                           <td className="py-3 px-4">
//                             <div className="flex items-center gap-3">
//                               <img
//                                 src={stat.avatar}
//                                 alt={stat.player}
//                                 className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-gray-200 shadow-sm"
//                                 onError={(e) => { e.target.src = 'https://via.placeholder.com/48?text=Player'; }}
//                               />
//                               <span className="font-medium">{stat.player}</span>
//                             </div>
//                           </td>
//                           <td className="py-3 px-4">
//                             <div className="flex items-center gap-2">
//                               <img
//                                 src={stat.flag}
//                                 alt={stat.country}
//                                 className="w-6 h-4 object-cover rounded-sm shadow-sm"
//                                 onError={(e) => { e.target.src = 'https://via.placeholder.com/24?text=Flag'; }}
//                               />
//                               <span className="text-gray-600">{stat.country}</span>
//                             </div>
//                           </td>
//                           <td className="py-3 px-4 text-center">
//                             <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-bold rounded">
//                               {stat.value}
//                             </span>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
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

// export default Stats;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopHockeyStories from '../../data/TopHockeyStories.js';
import LatestNews from '../../data/LatestNews.js';
import { hockeyStats } from '../../data/HockeyStatsData.js';
import SEO from '../../components/SEO';

const Stats = () => {
  const navigate = useNavigate();
  const [selectedStat, setSelectedStat] = useState('goals');

  const handleStoryClick = (id) => {
    navigate(`/details/hockey/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  const statTabs = [
    { id: 'goals', label: 'Top Scorers', icon: '⚽' },
    { id: 'assists', label: 'Most Assists', icon: '🎯' },
    { id: 'saves', label: 'Best Goalkeepers', icon: '🧤' },
  ];

  // Dynamic title and description based on selected stat
  const getStatTitle = () => {
    const tab = statTabs.find(t => t.id === selectedStat);
    return tab ? tab.label : 'Hockey Statistics';
  };

  return (
    <>
      <SEO
        title={`${getStatTitle()} - FIH Pro League 2025-26 | Hockey Stats | SportlyRadar`}
        description={`View top performers in ${getStatTitle().toLowerCase()} for the FIH Pro League 2025-26 season along with overall hockey statistics including total goals, matches played, penalty corners, and average goals per match.`}
        keywords="hockey statistics, FIH Pro League stats, top scorers hockey, most assists hockey, best goalkeepers hockey, field hockey rankings, hockey players stats, FIH hockey"
        canonical="https://www.sportlyradar.com/hockey/stats"
        url="https://www.sportlyradar.com/hockey/stats"
        image="https://via.placeholder.com/1200x630?text=Hockey+Statistics" // You can replace with actual hockey stats banner image
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        {/* Main Grid Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* Left: Stats Content */}
            <div className="lg:col-span-8 space-y-6">
              {/* Header */}
              <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">🏑 Hockey Statistics</h1>
                <p className="text-gray-600 text-sm">FIH Pro League 2025-26 Season Stats</p>
              </div>

              {/* Stat Tabs */}
              <div className="bg-white rounded-xl shadow-md p-4 mb-6">
                <div className="flex flex-wrap gap-3">
                  {statTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedStat(tab.id)}
                      className={`flex-1 min-w-[120px] px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                        selectedStat === tab.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <span>{tab.icon}</span>
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Overall Stats Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-lg shadow p-5 text-center">
                  <p className="text-3xl mb-1">⚽</p>
                  <p className="text-2xl font-bold text-blue-600">{hockeyStats.overall.totalGoals}</p>
                  <p className="text-xs text-gray-600 mt-1">Total Goals</p>
                </div>
                <div className="bg-white rounded-lg shadow p-5 text-center">
                  <p className="text-3xl mb-1">🏑</p>
                  <p className="text-2xl font-bold text-green-600">{hockeyStats.overall.matchesPlayed}</p>
                  <p className="text-xs text-gray-600 mt-1">Matches Played</p>
                </div>
                <div className="bg-white rounded-lg shadow p-5 text-center">
                  <p className="text-3xl mb-1">🎯</p>
                  <p className="text-2xl font-bold text-purple-600">{hockeyStats.overall.penaltyCorners}</p>
                  <p className="text-xs text-gray-600 mt-1">Penalty Corners</p>
                </div>
                <div className="bg-white rounded-lg shadow p-5 text-center">
                  <p className="text-3xl mb-1">📊</p>
                  <p className="text-2xl font-bold text-orange-600">{hockeyStats.overall.avgGoalsPerMatch}</p>
                  <p className="text-xs text-gray-600 mt-1">Avg Goals/Match</p>
                </div>
              </div>

              {/* Selected Stat Table */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-5">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm min-w-[600px]">
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
                        {hockeyStats[selectedStat].map((stat) => (
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
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-3">
                                <img
                                  src={stat.avatar}
                                  alt={stat.player}
                                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-gray-200 shadow-sm"
                                  onError={(e) => { e.target.src = 'https://via.placeholder.com/48?text=Player'; }}
                                />
                                <span className="font-medium">{stat.player}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-2">
                                <img
                                  src={stat.flag}
                                  alt={stat.country}
                                  className="w-6 h-4 object-cover rounded-sm shadow-sm"
                                  onError={(e) => { e.target.src = 'https://via.placeholder.com/24?text=Flag'; }}
                                />
                                <span className="text-gray-600">{stat.country}</span>
                              </div>
                            </td>
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
    </>
  );
};

export default Stats;
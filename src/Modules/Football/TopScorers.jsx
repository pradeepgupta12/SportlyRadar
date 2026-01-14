

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Target, Trophy, Search } from 'lucide-react';
// import TopFootballStories from '../../data/TopFootballStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { footballTopScorers } from '../../data/FootballTopScorers.js';

// const FootballTopScorers = () => {
//   const navigate = useNavigate();
//   const [selectedLeague, setSelectedLeague] = useState('all');
//   const [searchQuery, setSearchQuery] = useState('');

//   const leagues = ['all', 'Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1'];

//   const filteredScorers = footballTopScorers
//     .filter(scorer => {
//       const matchesLeague = selectedLeague === 'all' || scorer.league === selectedLeague;
//       const matchesSearch = scorer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                            scorer.team.toLowerCase().includes(searchQuery.toLowerCase());
//       return matchesLeague && matchesSearch;
//     });

//   const topScorer = filteredScorers[0];

//   const handleStoryClick = (id) => {
//     navigate(`/details/football/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-yellow-50">
//       {/* Main Grid Layout */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

//           {/* Main Content */}
//           <div className="lg:col-span-8 space-y-6">

//             {/* Header */}
//             <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-12 rounded-xl shadow-xl">
//               <div className="max-w-7xl mx-auto px-4">
//                 <h1 className="text-4xl md:text-5xl font-bold mb-3">👑 Top Scorers</h1>
//                 <p className="text-yellow-100 text-lg">Europe's leading goalscorers – Season 2025/26</p>
//               </div>
//             </div>

//             {/* Leader Card */}
//             {topScorer && (
//               <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl shadow-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
//                 <div className="flex items-center gap-5">
//                   <Trophy className="w-14 h-14" />
//                   <div>
//                     <h2 className="text-2xl sm:text-3xl font-bold">{topScorer.name}</h2>
//                     <p className="text-yellow-100 text-base sm:text-lg">{topScorer.team} • {topScorer.league}</p>
//                   </div>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-5xl sm:text-6xl font-bold">{topScorer.goals}</p>
//                   <p className="text-yellow-100 text-lg sm:text-xl">Goals</p>
//                 </div>
//               </div>
//             )}

//             {/* Filters */}
//             <div className="bg-white rounded-xl shadow-lg p-5">
//               <div className="flex flex-col md:flex-row gap-4">
//                 <div className="flex-1 relative">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     type="text"
//                     placeholder="Search players or teams..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
//                   />
//                 </div>
//                 <select
//                   value={selectedLeague}
//                   onChange={(e) => setSelectedLeague(e.target.value)}
//                   className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 bg-white"
//                 >
//                   {leagues.map(league => (
//                     <option key={league} value={league}>
//                       {league === 'all' ? 'All Leagues' : league}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {/* Scorers Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {filteredScorers.map((scorer, index) => (
//                 <Link
//                   key={scorer.id}
//                   to={`/football/player/${scorer.id}`}
//                   className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-5 flex items-center gap-5"
//                 >
//                   {/* Rank Circle */}
//                   <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 transition-colors ${
//                     index === 0 ? 'bg-yellow-400 text-white' :
//                     index === 1 ? 'bg-gray-300 text-white' :
//                     index === 2 ? 'bg-orange-400 text-white' :
//                     'bg-gray-100 text-gray-700 group-hover:bg-gray-200'
//                   }`}>
//                     {index + 1}
//                   </div>

//                   {/* Player Info + Goals */}
//                   <div className="flex-1">
//                     <div className="flex items-center gap-2 mb-1">
//                       <span className="text-2xl">{scorer.country}</span>
//                       <h3 className="text-base font-bold text-gray-800 group-hover:text-yellow-600 transition-colors">
//                         {scorer.name}
//                       </h3>
//                     </div>
//                     <p className="text-xs text-gray-600">{scorer.team}</p>
//                     <p className="text-xs text-gray-500 mt-1">{scorer.assists} assists • {scorer.matches} matches</p>
//                   </div>

//                   {/* Goals */}
//                   <div className="text-right">
//                     <Target className="w-7 h-7 text-yellow-600 mx-auto mb-1" />
//                     <p className="text-3xl font-bold text-yellow-600">{scorer.goals}</p>
//                   </div>
//                 </Link>
//               ))}
//             </div>

//             {filteredScorers.length === 0 && (
//               <div className="bg-white rounded-xl shadow-lg p-12 text-center">
//                 <p className="text-gray-500 text-lg">No players found</p>
//                 <p className="text-gray-400 text-sm mt-2">Try adjusting your filters</p>
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
//                       <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-yellow-600 transition-colors">
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
//                 className="mt-6 w-full text-center text-yellow-600 font-medium hover:underline text-sm"
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
//               className="mt-4 w-full text-center text-yellow-600 font-medium hover:underline text-sm"
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
//                 className="text-yellow-600 hover:underline font-medium text-sm sm:text-base"
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

// export default FootballTopScorers;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Target, Trophy, Search } from 'lucide-react';
// import TopFootballStories from '../../data/TopFootballStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { footballTopScorers } from '../../data/FootballTopScorers.js';

// const FootballTopScorers = () => {
//   const navigate = useNavigate();
//   const [selectedLeague, setSelectedLeague] = useState('all');
//   const [searchQuery, setSearchQuery] = useState('');

//   const leagues = ['all', 'Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1'];

//   const filteredScorers = footballTopScorers
//     .filter(scorer => {
//       const matchesLeague = selectedLeague === 'all' || scorer.league === selectedLeague;
//       const matchesSearch = scorer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                            scorer.team.toLowerCase().includes(searchQuery.toLowerCase());
//       return matchesLeague && matchesSearch;
//     });

//   const topScorer = filteredScorers[0];

//   const handleStoryClick = (id) => {
//     navigate(`/details/football/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-yellow-50">
//       {/* Main Grid Layout */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

//           {/* Main Content */}
//           <div className="lg:col-span-8 space-y-6">

//             {/* Header */}
//             <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-12 rounded-xl shadow-xl">
//               <div className="max-w-7xl mx-auto px-4">
//                 <h1 className="text-4xl md:text-5xl font-bold mb-3">👑 Top Scorers</h1>
//                 <p className="text-yellow-100 text-lg">Europe's leading goalscorers – Season 2025/26</p>
//               </div>
//             </div>

//             {/* Leader Card */}
//             {topScorer && (
//               <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl shadow-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
//                 <div className="flex items-center gap-5">
//                   <Trophy className="w-14 h-14" />
//                   <div>
//                     <h2 className="text-2xl sm:text-3xl font-bold">{topScorer.name}</h2>
//                     <p className="text-yellow-100 text-base sm:text-lg">{topScorer.team} • {topScorer.league}</p>
//                   </div>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-5xl sm:text-6xl font-bold">{topScorer.goals}</p>
//                   <p className="text-yellow-100 text-lg sm:text-xl">Goals</p>
//                 </div>
//               </div>
//             )}

//             {/* Filters */}
//             <div className="bg-white rounded-xl shadow-lg p-5">
//               <div className="flex flex-col md:flex-row gap-4">
//                 <div className="flex-1 relative">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     type="text"
//                     placeholder="Search players or teams..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
//                   />
//                 </div>
//                 <select
//                   value={selectedLeague}
//                   onChange={(e) => setSelectedLeague(e.target.value)}
//                   className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 bg-white"
//                 >
//                   {leagues.map(league => (
//                     <option key={league} value={league}>
//                       {league === 'all' ? 'All Leagues' : league}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {/* Scorers Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {filteredScorers.map((scorer, index) => (
//                 <Link
//                   key={scorer.id}
//                   to={`/football/player/${scorer.id}`}
//                   className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-5 flex items-center gap-5"
//                 >
//                   {/* Rank Circle */}
//                   <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 transition-colors ${
//                     index === 0 ? 'bg-yellow-400 text-white' :
//                     index === 1 ? 'bg-gray-300 text-white' :
//                     index === 2 ? 'bg-orange-400 text-white' :
//                     'bg-gray-100 text-gray-700 group-hover:bg-gray-200'
//                   }`}>
//                     {index + 1}
//                   </div>

//                   {/* Player Info + Goals */}
//                   <div className="flex-1">
//                     <div className="flex items-center gap-2 mb-1">
//                       <img
//                         src={scorer.country}
//                         alt="Country flag"
//                         className="w-6 h-4 object-cover rounded-sm"
//                         onError={(e) => { e.target.style.display = 'none'; }}
//                       />
//                       <img
//                         src={scorer.nameImage}
//                         alt={scorer.name}
//                         className="w-10 h-10 rounded-full object-cover border-2 border-yellow-200 group-hover:border-yellow-400 transition-colors"
//                         onError={(e) => { e.target.src = 'https://via.placeholder.com/40?text=' + scorer.name.charAt(0); }}
//                       />
//                       <h3 className="text-base font-bold text-gray-800 group-hover:text-yellow-600 transition-colors">
//                         {scorer.name}
//                       </h3>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <img
//                         src={scorer.teamLogo}
//                         alt={scorer.team}
//                         className="w-6 h-6 object-contain"
//                         onError={(e) => { e.target.style.display = 'none'; }}
//                       />
//                       <p className="text-xs text-gray-600">{scorer.team}</p>
//                     </div>
//                     <p className="text-xs text-gray-500 mt-1">{scorer.assists} assists • {scorer.matches} matches</p>
//                   </div>

//                   {/* Goals */}
//                   <div className="text-right">
//                     <Target className="w-7 h-7 text-yellow-600 mx-auto mb-1" />
//                     <p className="text-3xl font-bold text-yellow-600">{scorer.goals}</p>
//                   </div>
//                 </Link>
//               ))}
//             </div>

//             {filteredScorers.length === 0 && (
//               <div className="bg-white rounded-xl shadow-lg p-12 text-center">
//                 <p className="text-gray-500 text-lg">No players found</p>
//                 <p className="text-gray-400 text-sm mt-2">Try adjusting your filters</p>
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
//                       <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-yellow-600 transition-colors">
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
//                 className="mt-6 w-full text-center text-yellow-600 font-medium hover:underline text-sm"
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
//               className="mt-4 w-full text-center text-yellow-600 font-medium hover:underline text-sm"
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
//                 className="text-yellow-600 hover:underline font-medium text-sm sm:text-base"
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

// export default FootballTopScorers;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Target, Trophy, Search } from 'lucide-react';
import TopFootballStories from '../../data/TopFootballStories.js';
import LatestNews from '../../data/LatestNews.js';
import { footballTopScorers } from '../../data/FootballTopScorers.js';
import SEO from '../../components/SEO.jsx';

const FootballTopScorers = () => {
  const navigate = useNavigate();
  const [selectedLeague, setSelectedLeague] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const leagues = ['all', 'Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1'];

  const filteredScorers = footballTopScorers
    .filter(scorer => {
      const matchesLeague = selectedLeague === 'all' || scorer.league === selectedLeague;
      const matchesSearch = scorer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           scorer.team.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesLeague && matchesSearch;
    });

  const topScorer = filteredScorers[0];

  const handleStoryClick = (id) => {
    navigate(`/details/football/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  // SEO data
  const seoTitle = 'Football Top Scorers - Golden Boot Race & Goal Leaders | SportlyRadar';
  const seoDescription = 'Track the top football scorers across Europe. Latest goal statistics, player rankings, assists, and golden boot race for Premier League, La Liga, Serie A, Bundesliga & Ligue 1.';
  const seoKeywords = 'top football scorers, golden boot, goal leaders, top scorers, football goals, scoring charts, soccer goalscorers, European top scorers';
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
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-yellow-50">
        {/* Main Grid Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

            {/* Main Content */}
            <div className="lg:col-span-8 space-y-6">

              {/* Header */}
              <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-12 rounded-xl shadow-xl">
                <div className="max-w-7xl mx-auto px-4">
                  <h1 className="text-4xl md:text-5xl font-bold mb-3">👑 Top Scorers</h1>
                  <p className="text-yellow-100 text-lg">Europe's leading goalscorers – Season 2025/26</p>
                </div>
              </div>

              {/* Leader Card */}
              {topScorer && (
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl shadow-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-5">
                    <Trophy className="w-14 h-14" />
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold">{topScorer.name}</h2>
                      <p className="text-yellow-100 text-base sm:text-lg">{topScorer.team} • {topScorer.league}</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-5xl sm:text-6xl font-bold">{topScorer.goals}</p>
                    <p className="text-yellow-100 text-lg sm:text-xl">Goals</p>
                  </div>
                </div>
              )}

              {/* Filters */}
              <div className="bg-white rounded-xl shadow-lg p-5">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search players or teams..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                  <select
                    value={selectedLeague}
                    onChange={(e) => setSelectedLeague(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 bg-white"
                  >
                    {leagues.map(league => (
                      <option key={league} value={league}>
                        {league === 'all' ? 'All Leagues' : league}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Scorers Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredScorers.map((scorer, index) => (
                  <Link
                    key={scorer.id}
                    to={`/football/player/${scorer.id}`}
                    className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-5 flex items-center gap-5"
                  >
                    {/* Rank Circle */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 transition-colors ${
                      index === 0 ? 'bg-yellow-400 text-white' :
                      index === 1 ? 'bg-gray-300 text-white' :
                      index === 2 ? 'bg-orange-400 text-white' :
                      'bg-gray-100 text-gray-700 group-hover:bg-gray-200'
                    }`}>
                      {index + 1}
                    </div>

                    {/* Player Info + Goals */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <img
                          src={scorer.country}
                          alt="Country flag"
                          className="w-6 h-4 object-cover rounded-sm"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                        <img
                          src={scorer.nameImage}
                          alt={scorer.name}
                          className="w-10 h-10 rounded-full object-cover border-2 border-yellow-200 group-hover:border-yellow-400 transition-colors"
                          onError={(e) => { e.target.src = 'https://via.placeholder.com/40?text=' + scorer.name.charAt(0); }}
                        />
                        <h3 className="text-base font-bold text-gray-800 group-hover:text-yellow-600 transition-colors">
                          {scorer.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <img
                          src={scorer.teamLogo}
                          alt={scorer.team}
                          className="w-6 h-6 object-contain"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                        <p className="text-xs text-gray-600">{scorer.team}</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{scorer.assists} assists • {scorer.matches} matches</p>
                    </div>

                    {/* Goals */}
                    <div className="text-right">
                      <Target className="w-7 h-7 text-yellow-600 mx-auto mb-1" />
                      <p className="text-3xl font-bold text-yellow-600">{scorer.goals}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {filteredScorers.length === 0 && (
                <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                  <p className="text-gray-500 text-lg">No players found</p>
                  <p className="text-gray-400 text-sm mt-2">Try adjusting your filters</p>
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
                        <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-yellow-600 transition-colors">
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
                  className="mt-6 w-full text-center text-yellow-600 font-medium hover:underline text-sm"
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
                className="mt-4 w-full text-center text-yellow-600 font-medium hover:underline text-sm"
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
                  className="text-yellow-600 hover:underline font-medium text-sm sm:text-base"
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

export default FootballTopScorers;
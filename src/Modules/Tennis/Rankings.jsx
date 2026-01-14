


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { TrendingUp, TrendingDown, Minus, Trophy, Award } from 'lucide-react';

// import TopTennisStories from '../../data/TopTennisStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { tennisRankings } from '../../data/TennisRankings.js';

// const Rankings = () => {
//   const navigate = useNavigate();
//   const [selectedCategory, setSelectedCategory] = useState('mens-singles');

//   const categories = [
//     { id: 'mens-singles', label: "Men's Singles (ATP)" },
//     { id: 'womens-singles', label: "Women's Singles (WTA)" },
//     { id: 'mens-doubles', label: "Men's Doubles" },
//     { id: 'womens-doubles', label: "Women's Doubles" }
//   ];

//   // Get rankings from external data file
//   const currentRankings = tennisRankings[selectedCategory] || [];

//   const getChangeIcon = (change) => {
//     if (change > 0) return <TrendingUp className="h-4 w-4 text-green-600" />;
//     if (change < 0) return <TrendingDown className="h-4 w-4 text-red-600" />;
//     return <Minus className="h-4 w-4 text-gray-400" />;
//   };

//   const getChangeColor = (change) => {
//     if (change > 0) return 'text-green-600';
//     if (change < 0) return 'text-red-600';
//     return 'text-gray-400';
//   };

//   const handleStoryClick = (id) => {
//     navigate(`/details/tennis/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-blue-50">
//       {/* Main Content Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

//           {/* Left: Rankings Main Section */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Hero Section */}
//             <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white rounded-xl shadow-xl p-8">
//               <div className="flex items-center gap-4 mb-4">
//                 <Trophy className="h-12 w-12" />
//                 <div>
//                   <h1 className="text-3xl sm:text-4xl font-bold">Live Player Rankings</h1>
//                   <p className="text-lg opacity-90 mt-1">Official ATP & WTA world rankings • Updated January 2026</p>
//                 </div>
//               </div>
//             </div>

//             {/* Category Filters */}
//             <div className="bg-white rounded-xl shadow p-5">
//               <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
//                 {categories.map((category) => (
//                   <button
//                     key={category.id}
//                     onClick={() => setSelectedCategory(category.id)}
//                     className={`px-5 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all ${
//                       selectedCategory === category.id
//                         ? 'bg-blue-600 text-white'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {category.label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Rankings Table */}
//             <div className="bg-white rounded-xl shadow-md overflow-hidden">
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="text-left py-4 px-6 font-semibold text-gray-700">Rank</th>
//                       <th className="text-left py-4 px-6 font-semibold text-gray-700">Player</th>
//                       <th className="text-left py-4 px-6 font-semibold text-gray-700">Country</th>
//                       <th className="text-center py-4 px-6 font-semibold text-gray-700">Points</th>
//                       {selectedCategory.includes('singles') && (
//                         <th className="text-center py-4 px-6 font-semibold text-gray-700">Tournaments</th>
//                       )}
//                       <th className="text-center py-4 px-6 font-semibold text-gray-700">Change</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200">
//                     {currentRankings.map((player) => (
//                       <tr key={player.rank} className="hover:bg-gray-50 transition-colors">
//                         <td className="py-5 px-6">
//                           <div className="flex items-center gap-3">
//                             <span className="text-xl font-bold text-gray-800">{player.rank}</span>
//                             {player.rank <= 3 && (
//                               <Award className={`h-6 w-6 ${
//                                 player.rank === 1 ? 'text-yellow-500' :
//                                 player.rank === 2 ? 'text-gray-400' :
//                                 'text-amber-700'
//                               }`} />
//                             )}
//                           </div>
//                         </td>
//                         <td className="py-5 px-6">
//                           <span className="font-semibold text-gray-800">{player.name}</span>
//                         </td>
//                         <td className="py-5 px-6">
//                           <span className="text-gray-600">{player.country}</span>
//                         </td>
//                         <td className="py-5 px-6 text-center">
//                           <span className="font-medium text-gray-800">{player.points.toLocaleString()}</span>
//                         </td>
//                         {selectedCategory.includes('singles') && player.tournaments && (
//                           <td className="py-5 px-6 text-center">
//                             <span className="text-gray-600">{player.tournaments}</span>
//                           </td>
//                         )}
//                         <td className="py-5 px-6">
//                           <div className="flex items-center justify-center gap-2">
//                             {getChangeIcon(player.change)}
//                             <span className={`font-medium ${getChangeColor(player.change)}`}>
//                               {Math.abs(player.change) === 0 ? '-' : Math.abs(player.change)}
//                             </span>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Info Section */}
//             <div className="bg-blue-50 rounded-xl p-6">
//               <h3 className="font-semibold text-lg mb-3">About Rankings</h3>
//               <div className="space-y-2 text-gray-700 text-sm">
//                 <p>
//                   <strong>ATP & WTA Rankings:</strong> Based on a rolling 52-week system. Points are earned from tournament performance.
//                 </p>
//                 <p>
//                   Rankings are updated every Monday (or after major tournaments).
//                 </p>
//                 <p>
//                   Last update: January 2026
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Sidebar: Top Tennis Stories (Desktop only) */}
//           <div className="hidden lg:block lg:col-span-4">
//             <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
//               <h3 className="text-lg font-bold text-gray-900 mb-5">Top Tennis Stories</h3>
//               <div className="space-y-4">
//                 {TopTennisStories.data.TopTennisStories.slice(0, 5).map((story) => (
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
//                 onClick={() => navigate('/all-top-tennis-stories')}
//                 className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
//               >
//                 View All Stories →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile: Top Tennis Stories Section */}
//       <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-xl shadow-md p-5">
//             <h3 className="text-lg font-bold text-gray-900 mb-4">Top Tennis Stories</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {TopTennisStories.data.TopTennisStories.slice(0, 4).map((story) => (
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
//               onClick={() => navigate('/all-top-tennis-stories')}
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

// export default Rankings;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { TrendingUp, TrendingDown, Minus, Trophy, Award } from 'lucide-react';

// import TopTennisStories from '../../data/TopTennisStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { tennisRankings } from '../../data/TennisRankings.js';

// const Rankings = () => {
//   const navigate = useNavigate();
//   const [selectedCategory, setSelectedCategory] = useState('mens-singles');

//   const categories = [
//     { id: 'mens-singles', label: "Men's Singles (ATP)" },
//     { id: 'womens-singles', label: "Women's Singles (WTA)" },
//     { id: 'mens-doubles', label: "Men's Doubles" },
//     { id: 'womens-doubles', label: "Women's Doubles" }
//   ];

//   // Get rankings from external data file
//   const currentRankings = tennisRankings[selectedCategory] || [];

//   const getChangeIcon = (change) => {
//     if (change > 0) return <TrendingUp className="h-4 w-4 text-green-600" />;
//     if (change < 0) return <TrendingDown className="h-4 w-4 text-red-600" />;
//     return <Minus className="h-4 w-4 text-gray-400" />;
//   };

//   const getChangeColor = (change) => {
//     if (change > 0) return 'text-green-600';
//     if (change < 0) return 'text-red-600';
//     return 'text-gray-400';
//   };

//   const handleStoryClick = (id) => {
//     navigate(`/details/tennis/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-blue-50">
//       {/* Main Content Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

//           {/* Left: Rankings Main Section */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Hero Section */}
//             <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white rounded-xl shadow-xl p-8">
//               <div className="flex items-center gap-4 mb-4">
//                 <Trophy className="h-12 w-12" />
//                 <div>
//                   <h1 className="text-3xl sm:text-4xl font-bold">Live Player Rankings</h1>
//                   <p className="text-lg opacity-90 mt-1">Official ATP & WTA world rankings • Updated January 2026</p>
//                 </div>
//               </div>
//             </div>

//             {/* Category Filters */}
//             <div className="bg-white rounded-xl shadow p-5">
//               <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
//                 {categories.map((category) => (
//                   <button
//                     key={category.id}
//                     onClick={() => setSelectedCategory(category.id)}
//                     className={`px-5 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all ${
//                       selectedCategory === category.id
//                         ? 'bg-blue-600 text-white'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {category.label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Rankings Table */}
//             <div className="bg-white rounded-xl shadow-md overflow-hidden">
//               <div className="overflow-x-auto">
//                 <table className="w-full min-w-[600px]">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="text-left py-4 px-6 font-semibold text-gray-700">Rank</th>
//                       <th className="text-left py-4 px-6 font-semibold text-gray-700">Player</th>
//                       <th className="text-left py-4 px-6 font-semibold text-gray-700">Country</th>
//                       <th className="text-center py-4 px-6 font-semibold text-gray-700">Points</th>
//                       {selectedCategory.includes('singles') && (
//                         <th className="text-center py-4 px-6 font-semibold text-gray-700">Tournaments</th>
//                       )}
//                       <th className="text-center py-4 px-6 font-semibold text-gray-700">Change</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200">
//                     {currentRankings.map((player) => (
//                       <tr key={player.rank} className="hover:bg-gray-50 transition-colors">
//                         <td className="py-5 px-6">
//                           <div className="flex items-center gap-3">
//                             <span className="text-xl font-bold text-gray-800">{player.rank}</span>
//                             {player.rank <= 3 && (
//                               <Award className={`h-6 w-6 ${
//                                 player.rank === 1 ? 'text-yellow-500' :
//                                 player.rank === 2 ? 'text-gray-400' :
//                                 'text-amber-700'
//                               }`} />
//                             )}
//                           </div>
//                         </td>
//                         <td className="py-5 px-6">
//                           <div className="flex items-center gap-3">
//                             <img
//                               src={player.profile_image_url || 'https://via.placeholder.com/40'}
//                               alt={player.name}
//                               className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-gray-200 flex-shrink-0"
//                             />
//                             <span className="font-semibold text-gray-800">{player.name}</span>
//                           </div>
//                         </td>
//                         <td className="py-5 px-6">
//                           <div className="flex items-center gap-2">
//                             <img
//                               src={player.country_flag_url || 'https://via.placeholder.com/24x18'}
//                               alt={player.country}
//                               className="w-6 h-4 object-cover rounded-sm flex-shrink-0"
//                             />
//                             <span className="text-gray-600">{player.country}</span>
//                           </div>
//                         </td>
//                         <td className="py-5 px-6 text-center">
//                           <span className="font-medium text-gray-800">{player.points.toLocaleString()}</span>
//                         </td>
//                         {selectedCategory.includes('singles') && player.tournaments && (
//                           <td className="py-5 px-6 text-center">
//                             <span className="text-gray-600">{player.tournaments}</span>
//                           </td>
//                         )}
//                         <td className="py-5 px-6">
//                           <div className="flex items-center justify-center gap-2">
//                             {getChangeIcon(player.change)}
//                             <span className={`font-medium ${getChangeColor(player.change)}`}>
//                               {Math.abs(player.change) === 0 ? '-' : Math.abs(player.change)}
//                             </span>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Info Section */}
//             <div className="bg-blue-50 rounded-xl p-6">
//               <h3 className="font-semibold text-lg mb-3">About Rankings</h3>
//               <div className="space-y-2 text-gray-700 text-sm">
//                 <p>
//                   <strong>ATP & WTA Rankings:</strong> Based on a rolling 52-week system. Points are earned from tournament performance.
//                 </p>
//                 <p>
//                   Rankings are updated every Monday (or after major tournaments).
//                 </p>
//                 <p>
//                   Last update: January 2026
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Sidebar: Top Tennis Stories (Desktop only) */}
//           <div className="hidden lg:block lg:col-span-4">
//             <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
//               <h3 className="text-lg font-bold text-gray-900 mb-5">Top Tennis Stories</h3>
//               <div className="space-y-4">
//                 {TopTennisStories.data.TopTennisStories.slice(0, 5).map((story) => (
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
//                 onClick={() => navigate('/all-top-tennis-stories')}
//                 className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
//               >
//                 View All Stories →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile: Top Tennis Stories Section */}
//       <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-xl shadow-md p-5">
//             <h3 className="text-lg font-bold text-gray-900 mb-4">Top Tennis Stories</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {TopTennisStories.data.TopTennisStories.slice(0, 4).map((story) => (
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
//               onClick={() => navigate('/all-top-tennis-stories')}
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

// export default Rankings;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, TrendingDown, Minus, Trophy, Award } from 'lucide-react';
import SEO from '../../components/SEO.jsx';
import TopTennisStories from '../../data/TopTennisStories.js';
import LatestNews from '../../data/LatestNews.js';
import { tennisRankings } from '../../data/TennisRankings.js';

const Rankings = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('mens-singles');

  const categories = [
    { id: 'mens-singles', label: "Men's Singles (ATP)" },
    { id: 'womens-singles', label: "Women's Singles (WTA)" },
    { id: 'mens-doubles', label: "Men's Doubles" },
    { id: 'womens-doubles', label: "Women's Doubles" }
  ];

  // Get rankings from external data file
  const currentRankings = tennisRankings[selectedCategory] || [];

  const getChangeIcon = (change) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (change < 0) return <TrendingDown className="h-4 w-4 text-red-600" />;
    return <Minus className="h-4 w-4 text-gray-400" />;
  };

  const getChangeColor = (change) => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-gray-400';
  };

  const handleStoryClick = (id) => {
    navigate(`/details/tennis/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  // SEO meta data
  const categoryLabel = categories.find(cat => cat.id === selectedCategory)?.label || 'Tennis Rankings';
  const seoTitle = `${categoryLabel} | ATP & WTA Rankings | SportlyRadar`;
  const seoDescription = `Official ${categoryLabel} rankings. Latest ATP and WTA world rankings with points, tournament counts, and weekly changes.`;
  const seoKeywords = `${categoryLabel}, ATP rankings, WTA rankings, tennis rankings, world rankings, player rankings, tennis points`;
  const seoImage = "https://sportlyradar.com/tennis-rankings-og-image.jpg";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-blue-50">
      {/* SEO Component */}
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        image={seoImage}
        url={window.location.href}
        type="website"
      />

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Left: Rankings Main Section */}
          <div className="lg:col-span-8 space-y-6">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white rounded-xl shadow-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <Trophy className="h-12 w-12" />
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold">Live Player Rankings</h1>
                  <p className="text-lg opacity-90 mt-1">Official ATP & WTA world rankings • Updated January 2026</p>
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <div className="bg-white rounded-xl shadow p-5">
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-5 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Rankings Table */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-4 px-6 font-semibold text-gray-700">Rank</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-700">Player</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-700">Country</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-700">Points</th>
                      {selectedCategory.includes('singles') && (
                        <th className="text-center py-4 px-6 font-semibold text-gray-700">Tournaments</th>
                      )}
                      <th className="text-center py-4 px-6 font-semibold text-gray-700">Change</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {currentRankings.map((player) => (
                      <tr key={player.rank} className="hover:bg-gray-50 transition-colors">
                        <td className="py-5 px-6">
                          <div className="flex items-center gap-3">
                            <span className="text-xl font-bold text-gray-800">{player.rank}</span>
                            {player.rank <= 3 && (
                              <Award className={`h-6 w-6 ${
                                player.rank === 1 ? 'text-yellow-500' :
                                player.rank === 2 ? 'text-gray-400' :
                                'text-amber-700'
                              }`} />
                            )}
                          </div>
                        </td>
                        <td className="py-5 px-6">
                          <div className="flex items-center gap-3">
                            <img
                              src={player.profile_image_url || 'https://via.placeholder.com/40'}
                              alt={player.name}
                              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-gray-200 flex-shrink-0"
                            />
                            <span className="font-semibold text-gray-800">{player.name}</span>
                          </div>
                        </td>
                        <td className="py-5 px-6">
                          <div className="flex items-center gap-2">
                            <img
                              src={player.country_flag_url || 'https://via.placeholder.com/24x18'}
                              alt={player.country}
                              className="w-6 h-4 object-cover rounded-sm flex-shrink-0"
                            />
                            <span className="text-gray-600">{player.country}</span>
                          </div>
                        </td>
                        <td className="py-5 px-6 text-center">
                          <span className="font-medium text-gray-800">{player.points.toLocaleString()}</span>
                        </td>
                        {selectedCategory.includes('singles') && player.tournaments && (
                          <td className="py-5 px-6 text-center">
                            <span className="text-gray-600">{player.tournaments}</span>
                          </td>
                        )}
                        <td className="py-5 px-6">
                          <div className="flex items-center justify-center gap-2">
                            {getChangeIcon(player.change)}
                            <span className={`font-medium ${getChangeColor(player.change)}`}>
                              {Math.abs(player.change) === 0 ? '-' : Math.abs(player.change)}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Info Section */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">About Rankings</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p>
                  <strong>ATP & WTA Rankings:</strong> Based on a rolling 52-week system. Points are earned from tournament performance.
                </p>
                <p>
                  Rankings are updated every Monday (or after major tournaments).
                </p>
                <p>
                  Last update: January 2026
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Top Tennis Stories (Desktop only) */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-5">Top Tennis Stories</h3>
              <div className="space-y-4">
                {TopTennisStories.data.TopTennisStories.slice(0, 5).map((story) => (
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
                onClick={() => navigate('/all-top-tennis-stories')}
                className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
              >
                View All Stories →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Top Tennis Stories Section */}
      <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top Tennis Stories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TopTennisStories.data.TopTennisStories.slice(0, 4).map((story) => (
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
              onClick={() => navigate('/all-top-tennis-stories')}
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

export default Rankings;
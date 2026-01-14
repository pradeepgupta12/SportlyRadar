

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Clock, TrendingUp, Award, Target, Zap } from 'lucide-react';
// import TopBasketballStories from '../../data/TopBasketballStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { basketballStats } from '../../data/BasketballStatsData.js';

// const Stats = () => {
//   const navigate = useNavigate();
//   const [selectedLeague, setSelectedLeague] = useState('nba');

//   // Get stats from external data file
//   const stats = basketballStats[selectedLeague] || basketballStats.nba;

//   const handleStoryClick = (id) => {
//     navigate(`/details/basketball/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   const StatCard = ({ title, icon: Icon, leaders, metric, extraMetric }) => (
//     <div className="bg-white rounded-xl shadow-lg p-6">
//       <div className="flex items-center gap-3 mb-6">
//         <div className="p-3 bg-orange-100 rounded-lg">
//           <Icon className="w-6 h-6 text-orange-600" />
//         </div>
//         <h2 className="text-xl font-bold text-gray-800">{title}</h2>
//       </div>
//       <div className="space-y-3">
//         {leaders.map((leader) => (
//           <div key={leader.rank} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
//             <div className="flex items-center gap-3">
//               <span className="flex items-center justify-center w-8 h-8 bg-orange-600 text-white rounded-full font-bold text-sm">
//                 {leader.rank}
//               </span>
//               <div>
//                 <p className="font-semibold text-gray-800">{leader.player}</p>
//                 <p className="text-xs text-gray-500">{leader.team}</p>
//               </div>
//             </div>
//             <div className="text-right">
//               <p className="text-2xl font-bold text-orange-600">{leader[metric]}</p>
//               {extraMetric && <p className="text-xs text-gray-500">{leader[extraMetric]}</p>}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-red-50">
//       {/* Main Container */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

//           {/* Left: Hero + Stats */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Hero Header Card */}
//             <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 text-white rounded-xl shadow-xl p-5 sm:p-8">
//               <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//                 <div>
//                   <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">🏀 Basketball Statistics</h1>
//                   <p className="text-orange-100 text-sm sm:text-base">League leaders across key statistical categories</p>
//                 </div>
//                 <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg text-sm">
//                   <div className="flex items-center gap-2">
//                     <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
//                     <span className="font-semibold">{new Date().toLocaleTimeString()}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* League Selector */}
//             <div className="flex gap-4">
//               <button
//                 onClick={() => setSelectedLeague('nba')}
//                 className={`px-6 py-3 rounded-lg font-semibold transition-all ${
//                   selectedLeague === 'nba'
//                     ? 'bg-orange-600 text-white shadow-lg'
//                     : 'bg-white text-gray-700 hover:bg-orange-50 shadow'
//                 }`}
//               >
//                 NBA
//               </button>
//               <button
//                 onClick={() => setSelectedLeague('wnba')}
//                 className={`px-6 py-3 rounded-lg font-semibold transition-all ${
//                   selectedLeague === 'wnba'
//                     ? 'bg-orange-600 text-white shadow-lg'
//                     : 'bg-white text-gray-700 hover:bg-orange-50 shadow'
//                 }`}
//               >
//                 WNBA
//               </button>
//             </div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <StatCard title="Points Leaders" icon={Award} leaders={stats.pointsLeaders} metric="ppg" />
//               <StatCard title="Assists Leaders" icon={Target} leaders={stats.assistsLeaders} metric="apg" />
//               <StatCard title="Rebounds Leaders" icon={TrendingUp} leaders={stats.reboundsLeaders} metric="rpg" />
//               <StatCard title="Three-Point Leaders" icon={Zap} leaders={stats.threePointLeaders} metric="tpm" extraMetric="pct" />
//             </div>
//           </div>

//           {/* Right Sidebar: Top Stories (Desktop only) */}
//           <div className="hidden lg:block lg:col-span-4">
//             <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
//               <h3 className="text-lg font-bold text-gray-900 mb-5">Top Basketball Stories</h3>
//               <div className="space-y-4">
//                 {TopBasketballStories.data.TopBasketballStories.slice(0, 5).map((story) => (
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
//                       <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-orange-600 transition-colors">
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
//                 onClick={() => navigate('/all-top-basketball-stories')}
//                 className="mt-6 w-full text-center text-orange-600 font-medium hover:underline text-sm"
//               >
//                 View All Stories →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile: Top Basketball Stories */}
//       <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-xl shadow-md p-5">
//             <h3 className="text-lg font-bold text-gray-900 mb-4">Top Basketball Stories</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {TopBasketballStories.data.TopBasketballStories.slice(0, 4).map((story) => (
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
//               onClick={() => navigate('/all-top-basketball-stories')}
//               className="mt-4 w-full text-center text-orange-600 font-medium hover:underline text-sm"
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
//                 className="text-orange-600 hover:underline font-medium text-sm sm:text-base"
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
// import { Clock, TrendingUp, Award, Target, Zap } from 'lucide-react';
// import TopBasketballStories from '../../data/TopBasketballStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { basketballStats } from '../../data/BasketballStatsData.js';

// const Stats = () => {
//   const navigate = useNavigate();
//   const [selectedLeague, setSelectedLeague] = useState('nba');

//   // Get stats from external data file
//   const stats = basketballStats[selectedLeague] || basketballStats.nba;

//   const handleStoryClick = (id) => {
//     navigate(`/details/basketball/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   const StatCard = ({ title, icon: Icon, leaders, metric, extraMetric }) => (
//     <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
//       <div className="flex items-center gap-3 mb-4 sm:mb-6">
//         <div className="p-2 sm:p-3 bg-orange-100 rounded-lg">
//           <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
//         </div>
//         <h2 className="text-lg sm:text-xl font-bold text-gray-800">{title}</h2>
//       </div>
//       <div className="space-y-2 sm:space-y-3">
//         {leaders.map((leader) => (
//           <div 
//             key={leader.rank} 
//             className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors"
//           >
//             <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
//               <span className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-orange-600 text-white rounded-full font-bold text-xs sm:text-sm">
//                 {leader.rank}
//               </span>
              
//               {/* Player Logo and Name */}
//               <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
//                 <div className="relative flex-shrink-0">
//                   <img
//                     src={leader.playerLogo}
//                     alt={leader.player}
//                     className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white shadow-sm"
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = 'https://via.placeholder.com/40/cccccc/ffffff?text=PL';
//                     }}
//                   />
//                 </div>
                
//                 <div className="flex-1 min-w-0">
//                   <p className="font-semibold text-gray-800 text-sm sm:text-base truncate">
//                     {leader.player}
//                   </p>
//                   <div className="flex items-center gap-1 sm:gap-2 mt-0.5">
//                     <img
//                       src={leader.teamLogo}
//                       alt={leader.team}
//                       className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm object-contain"
//                       onError={(e) => {
//                         e.target.onerror = null;
//                         e.target.src = 'https://via.placeholder.com/20/cccccc/ffffff?text=T';
//                       }}
//                     />
//                     <p className="text-xs text-gray-500 truncate">
//                       {leader.team}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="text-right ml-2 sm:ml-4">
//               <p className="text-lg sm:text-2xl font-bold text-orange-600">
//                 {leader[metric]}
//               </p>
//               {extraMetric && leader[extraMetric] && (
//                 <p className="text-xs text-gray-500 mt-0.5">
//                   {leader[extraMetric]}
//                 </p>
//               )}
//               {leader.gp && (
//                 <p className="text-xs text-gray-400 mt-0.5">
//                   {leader.gp} GP
//                 </p>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-red-50">
//       {/* Main Container */}
//       <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">

//           {/* Left: Hero + Stats */}
//           <div className="lg:col-span-8 space-y-4 sm:space-y-6">
//             {/* Hero Header Card */}
//             <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 text-white rounded-xl shadow-xl p-4 sm:p-6 md:p-8">
//               <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
//                 <div className="flex-1">
//                   <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
//                     🏀 Basketball Statistics
//                   </h1>
//                   <p className="text-orange-100 text-sm sm:text-base md:text-lg">
//                     League leaders across key statistical categories
//                   </p>
//                 </div>
//                 <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg text-sm mt-2 sm:mt-0">
//                   <div className="flex items-center gap-2">
//                     <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
//                     <span className="font-semibold text-sm sm:text-base">
//                       {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* League Selector */}
//             <div className="flex gap-2 sm:gap-3 md:gap-4">
//               <button
//                 onClick={() => setSelectedLeague('nba')}
//                 className={`px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all flex-1 sm:flex-none text-sm sm:text-base ${
//                   selectedLeague === 'nba'
//                     ? 'bg-orange-600 text-white shadow-lg'
//                     : 'bg-white text-gray-700 hover:bg-orange-50 shadow'
//                 }`}
//               >
//                 NBA
//               </button>
//               <button
//                 onClick={() => setSelectedLeague('wnba')}
//                 className={`px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all flex-1 sm:flex-none text-sm sm:text-base ${
//                   selectedLeague === 'wnba'
//                     ? 'bg-orange-600 text-white shadow-lg'
//                     : 'bg-white text-gray-700 hover:bg-orange-50 shadow'
//                 }`}
//               >
//                 WNBA
//               </button>
//             </div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//               <StatCard title="Points Leaders" icon={Award} leaders={stats.pointsLeaders} metric="ppg" />
//               <StatCard title="Assists Leaders" icon={Target} leaders={stats.assistsLeaders} metric="apg" />
//               <StatCard title="Rebounds Leaders" icon={TrendingUp} leaders={stats.reboundsLeaders} metric="rpg" />
//               <StatCard title="Three-Point Leaders" icon={Zap} leaders={stats.threePointLeaders} metric="tpm" extraMetric="pct" />
//             </div>
//           </div>

//           {/* Right Sidebar: Top Stories (Desktop only) */}
//           <div className="hidden lg:block lg:col-span-4">
//             <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 sticky top-20 sm:top-24">
//               <h3 className="text-lg font-bold text-gray-900 mb-4 sm:mb-5">
//                 Top Basketball Stories
//               </h3>
//               <div className="space-y-3 sm:space-y-4">
//                 {TopBasketballStories.data.TopBasketballStories.slice(0, 5).map((story) => (
//                   <div
//                     key={story.id}
//                     onClick={() => handleStoryClick(story.id)}
//                     className="flex gap-3 cursor-pointer group hover:bg-gray-50 rounded-lg p-2 sm:p-3 -mx-2 sm:-mx-3 transition-colors"
//                   >
//                     <div className="flex-shrink-0">
//                       <img
//                         src={story.image || 'https://via.placeholder.com/100'}
//                         alt={story.title}
//                         className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
//                         onError={(e) => {
//                           e.target.onerror = null;
//                           e.target.src = 'https://via.placeholder.com/100/cccccc/ffffff?text=IMG';
//                         }}
//                       />
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-orange-600 transition-colors">
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
//                 onClick={() => navigate('/all-top-basketball-stories')}
//                 className="mt-4 sm:mt-6 w-full text-center text-orange-600 font-medium hover:underline text-sm sm:text-base py-2"
//               >
//                 View All Stories →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile: Top Basketball Stories */}
//       <div className="lg:hidden mt-6 sm:mt-8 px-3 sm:px-4 md:px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-xl shadow-md p-4 sm:p-5">
//             <h3 className="text-lg font-bold text-gray-900 mb-3 sm:mb-4">
//               Top Basketball Stories
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//               {TopBasketballStories.data.TopBasketballStories.slice(0, 4).map((story) => (
//                 <div
//                   key={story.id}
//                   onClick={() => handleStoryClick(story.id)}
//                   className="cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
//                 >
//                   <img
//                     src={story.image || 'https://via.placeholder.com/300'}
//                     alt={story.title}
//                     className="w-full h-32 sm:h-40 object-cover"
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = 'https://via.placeholder.com/300/cccccc/ffffff?text=IMG';
//                     }}
//                   />
//                   <div className="p-2 sm:p-3">
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
//               onClick={() => navigate('/all-top-basketball-stories')}
//               className="mt-3 sm:mt-4 w-full text-center text-orange-600 font-medium hover:underline text-sm sm:text-base py-2"
//             >
//               View All Stories →
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Latest Sports News */}
//       <div className="mt-8 sm:mt-10 md:mt-12 px-3 sm:px-4 md:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 md:p-6">
//             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
//               <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
//                 Latest Sports News
//               </h3>
//               <button
//                 onClick={() => navigate('/all-latest-news')}
//                 className="text-orange-600 hover:underline font-medium text-sm sm:text-base"
//               >
//                 View All →
//               </button>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
//               {LatestNews.data.LatestNews.slice(0, 6).map((article) => (
//                 <div
//                   key={article.title}
//                   onClick={() => handleNewsCardClick(article.title)}
//                   className="bg-gray-50 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
//                 >
//                   <img
//                     src={article.image || "https://via.placeholder.com/400x250"}
//                     alt={article.title}
//                     className="w-full h-40 sm:h-48 object-cover hover:scale-105 transition-transform duration-300"
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = 'https://via.placeholder.com/400x250/cccccc/ffffff?text=NEWS';
//                     }}
//                   />
//                   <div className="p-3 sm:p-4">
//                     <h4 className="text-sm sm:text-base font-semibold text-gray-800 line-clamp-2 mb-2">
//                       {article.title}
//                     </h4>
//                     <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-3">
//                       {article.description}
//                     </p>
//                     <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0 text-xs text-gray-500">
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

//       {/* Back to Top Button */}
//       <button
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//         className="fixed bottom-4 right-4 bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 transition-colors z-10"
//       >
//         ↑
//       </button>
//     </div>
//   );
// };

// export default Stats;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, TrendingUp, Award, Target, Zap } from 'lucide-react';
import SEO from '../../components/SEO.jsx';
import TopBasketballStories from '../../data/TopBasketballStories.js';
import LatestNews from '../../data/LatestNews.js';
import { basketballStats } from '../../data/BasketballStatsData.js';

const Stats = () => {
  const navigate = useNavigate();
  const [selectedLeague, setSelectedLeague] = useState('nba');

  // Get stats from external data file
  const stats = basketballStats[selectedLeague] || basketballStats.nba;

  const handleStoryClick = (id) => {
    navigate(`/details/basketball/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  // SEO meta data
  const leagueLabel = selectedLeague === 'nba' ? 'NBA' : 'WNBA';
  const seoTitle = `${leagueLabel} Statistics | Basketball League Leaders | SportlyRadar`;
  const seoDescription = `View ${leagueLabel} statistical leaders - top scorers, assists, rebounds, and three-point shooters. Get complete basketball statistics and player rankings.`;
  const seoKeywords = `${leagueLabel} statistics, basketball stats, points leaders, assists leaders, rebounds leaders, three-point leaders, basketball rankings`;
  const seoImage = "https://sportlyradar.com/basketball-stats-og-image.jpg";

  const StatCard = ({ title, icon: Icon, leaders, metric, extraMetric }) => (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <div className="p-2 sm:p-3 bg-orange-100 rounded-lg">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">{title}</h2>
      </div>
      <div className="space-y-2 sm:space-y-3">
        {leaders.map((leader) => (
          <div 
            key={leader.rank} 
            className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors"
          >
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <span className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-orange-600 text-white rounded-full font-bold text-xs sm:text-sm">
                {leader.rank}
              </span>
              
              {/* Player Logo and Name */}
              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                <div className="relative flex-shrink-0">
                  <img
                    src={leader.playerLogo}
                    alt={leader.player}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white shadow-sm"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/40/cccccc/ffffff?text=PL';
                    }}
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800 text-sm sm:text-base truncate">
                    {leader.player}
                  </p>
                  <div className="flex items-center gap-1 sm:gap-2 mt-0.5">
                    <img
                      src={leader.teamLogo}
                      alt={leader.team}
                      className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/20/cccccc/ffffff?text=T';
                      }}
                    />
                    <p className="text-xs text-gray-500 truncate">
                      {leader.team}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-right ml-2 sm:ml-4">
              <p className="text-lg sm:text-2xl font-bold text-orange-600">
                {leader[metric]}
              </p>
              {extraMetric && leader[extraMetric] && (
                <p className="text-xs text-gray-500 mt-0.5">
                  {leader[extraMetric]}
                </p>
              )}
              {leader.gp && (
                <p className="text-xs text-gray-400 mt-0.5">
                  {leader.gp} GP
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-red-50">
      {/* SEO Component */}
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        image={seoImage}
        url={window.location.href}
        type="website"
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">

          {/* Left: Hero + Stats */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            {/* Hero Header Card */}
            <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 text-white rounded-xl shadow-xl p-4 sm:p-6 md:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex-1">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                    🏀 Basketball Statistics
                  </h1>
                  <p className="text-orange-100 text-sm sm:text-base md:text-lg">
                    League leaders across key statistical categories
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg text-sm mt-2 sm:mt-0">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-semibold text-sm sm:text-base">
                      {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* League Selector */}
            <div className="flex gap-2 sm:gap-3 md:gap-4">
              <button
                onClick={() => setSelectedLeague('nba')}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all flex-1 sm:flex-none text-sm sm:text-base ${
                  selectedLeague === 'nba'
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-50 shadow'
                }`}
              >
                NBA
              </button>
              <button
                onClick={() => setSelectedLeague('wnba')}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all flex-1 sm:flex-none text-sm sm:text-base ${
                  selectedLeague === 'wnba'
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-50 shadow'
                }`}
              >
                WNBA
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <StatCard title="Points Leaders" icon={Award} leaders={stats.pointsLeaders} metric="ppg" />
              <StatCard title="Assists Leaders" icon={Target} leaders={stats.assistsLeaders} metric="apg" />
              <StatCard title="Rebounds Leaders" icon={TrendingUp} leaders={stats.reboundsLeaders} metric="rpg" />
              <StatCard title="Three-Point Leaders" icon={Zap} leaders={stats.threePointLeaders} metric="tpm" extraMetric="pct" />
            </div>
          </div>

          {/* Right Sidebar: Top Stories (Desktop only) */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 sticky top-20 sm:top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4 sm:mb-5">
                Top Basketball Stories
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {TopBasketballStories.data.TopBasketballStories.slice(0, 5).map((story) => (
                  <div
                    key={story.id}
                    onClick={() => handleStoryClick(story.id)}
                    className="flex gap-3 cursor-pointer group hover:bg-gray-50 rounded-lg p-2 sm:p-3 -mx-2 sm:-mx-3 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <img
                        src={story.image || 'https://via.placeholder.com/100'}
                        alt={story.title}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/100/cccccc/ffffff?text=IMG';
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-orange-600 transition-colors">
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
                onClick={() => navigate('/all-top-basketball-stories')}
                className="mt-4 sm:mt-6 w-full text-center text-orange-600 font-medium hover:underline text-sm sm:text-base py-2"
              >
                View All Stories →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Top Basketball Stories */}
      <div className="lg:hidden mt-6 sm:mt-8 px-3 sm:px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-3 sm:mb-4">
              Top Basketball Stories
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {TopBasketballStories.data.TopBasketballStories.slice(0, 4).map((story) => (
                <div
                  key={story.id}
                  onClick={() => handleStoryClick(story.id)}
                  className="cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
                >
                  <img
                    src={story.image || 'https://via.placeholder.com/300'}
                    alt={story.title}
                    className="w-full h-32 sm:h-40 object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/300/cccccc/ffffff?text=IMG';
                    }}
                  />
                  <div className="p-2 sm:p-3">
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
              onClick={() => navigate('/all-top-basketball-stories')}
              className="mt-3 sm:mt-4 w-full text-center text-orange-600 font-medium hover:underline text-sm sm:text-base py-2"
            >
              View All Stories →
            </button>
          </div>
        </div>
      </div>

      {/* Latest Sports News */}
      <div className="mt-8 sm:mt-10 md:mt-12 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 md:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                Latest Sports News
              </h3>
              <button
                onClick={() => navigate('/all-latest-news')}
                className="text-orange-600 hover:underline font-medium text-sm sm:text-base"
              >
                View All →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {LatestNews.data.LatestNews.slice(0, 6).map((article) => (
                <div
                  key={article.title}
                  onClick={() => handleNewsCardClick(article.title)}
                  className="bg-gray-50 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <img
                    src={article.image || "https://via.placeholder.com/400x250"}
                    alt={article.title}
                    className="w-full h-40 sm:h-48 object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x250/cccccc/ffffff?text=NEWS';
                    }}
                  />
                  <div className="p-3 sm:p-4">
                    <h4 className="text-sm sm:text-base font-semibold text-gray-800 line-clamp-2 mb-2">
                      {article.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-3">
                      {article.description}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0 text-xs text-gray-500">
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

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 transition-colors z-10"
      >
        ↑
      </button>
    </div>
  );
};

export default Stats;
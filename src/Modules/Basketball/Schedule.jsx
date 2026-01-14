


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Clock, Calendar, MapPin } from 'lucide-react';
// import TopBasketballStories from '../../data/TopBasketballStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { basketballSchedule } from '../../data/BasketballSchedule.js';

// const Schedule = () => {
//   const navigate = useNavigate();
//   const [selectedLeague, setSelectedLeague] = useState('nba');

//   // Get schedule data from external file
//   const schedule = basketballSchedule[selectedLeague] || [];

//   const handleStoryClick = (id) => {
//     navigate(`/details/basketball/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-red-50">
//       {/* Main Container */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

//           {/* Left: Hero + Schedule */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Hero Header Card */}
//             <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 text-white rounded-xl shadow-xl p-5 sm:p-8">
//               <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//                 <div>
//                   <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">🏀 Basketball Schedule</h1>
//                   <p className="text-orange-100 text-sm sm:text-base">Upcoming NBA & WNBA fixtures</p>
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
//             <div className="bg-white rounded-xl shadow-md p-4">
//               <div className="flex gap-3">
//                 <button
//                   onClick={() => setSelectedLeague('nba')}
//                   className={`flex-1 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
//                     selectedLeague === 'nba' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   NBA
//                 </button>
//                 <button
//                   onClick={() => setSelectedLeague('wnba')}
//                   className={`flex-1 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
//                     selectedLeague === 'wnba' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   WNBA
//                 </button>
//               </div>
//             </div>

//             {/* Schedule */}
//             <div className="space-y-6">
//               {schedule.map((day) => (
//                 <div key={day.date} className="bg-white rounded-xl shadow-md overflow-hidden">
//                   <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4">
//                     <div className="flex items-center gap-2">
//                       <Calendar className="w-5 h-5" />
//                       <h2 className="text-lg font-semibold">{formatDate(day.date)}</h2>
//                     </div>
//                   </div>

//                   <div className="p-5 space-y-4">
//                     {day.matches.map((match) => (
//                       <Link
//                         key={match.id}
//                         to={`/basketball-scorecard/${match.id}`}
//                         className="block bg-gray-50 rounded-lg p-4 hover:bg-orange-50 transition-colors"
//                       >
//                         <div className="grid grid-cols-3 items-center gap-4">
//                           {/* Home */}
//                           <div className="text-left">
//                             <p className="font-semibold text-gray-800">{match.home}</p>
//                           </div>

//                           {/* Center */}
//                           <div className="text-center">
//                             <p className="text-lg font-bold text-gray-400">VS</p>
//                             <p className="text-xs text-gray-600 mt-1">
//                               <Clock className="w-4 h-4 inline" /> {match.time} ET
//                             </p>
//                           </div>

//                           {/* Away */}
//                           <div className="text-right">
//                             <p className="font-semibold text-gray-800">{match.away}</p>
//                           </div>
//                         </div>

//                         <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-600 flex items-center gap-1 justify-center">
//                           <MapPin className="w-4 h-4" />
//                           {match.venue}, {match.city}
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               ))}
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

// export default Schedule;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Clock, Calendar, MapPin } from 'lucide-react';
// import TopBasketballStories from '../../data/TopBasketballStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { basketballSchedule } from '../../data/BasketballSchedule.js';

// const Schedule = () => {
//   const navigate = useNavigate();
//   const [selectedLeague, setSelectedLeague] = useState('nba');

//   // Get schedule data from external file
//   const schedule = basketballSchedule[selectedLeague] || [];

//   const handleStoryClick = (id) => {
//     navigate(`/details/basketball/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-red-50">
//       {/* Main Container */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

//           {/* Left: Hero + Schedule */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Hero Header Card */}
//             <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 text-white rounded-xl shadow-xl p-5 sm:p-8">
//               <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//                 <div>
//                   <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">🏀 Basketball Schedule</h1>
//                   <p className="text-orange-100 text-sm sm:text-base">Upcoming NBA & WNBA fixtures</p>
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
//             <div className="bg-white rounded-xl shadow-md p-4">
//               <div className="flex gap-3">
//                 <button
//                   onClick={() => setSelectedLeague('nba')}
//                   className={`flex-1 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
//                     selectedLeague === 'nba' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   NBA
//                 </button>
//                 <button
//                   onClick={() => setSelectedLeague('wnba')}
//                   className={`flex-1 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
//                     selectedLeague === 'wnba' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   WNBA
//                 </button>
//               </div>
//             </div>

//             {/* Schedule */}
//             <div className="space-y-6">
//               {schedule.map((day) => (
//                 <div key={day.date} className="bg-white rounded-xl shadow-md overflow-hidden">
//                   <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4">
//                     <div className="flex items-center gap-2">
//                       <Calendar className="w-5 h-5" />
//                       <h2 className="text-lg font-semibold">{formatDate(day.date)}</h2>
//                     </div>
//                   </div>

//                   <div className="p-5 space-y-4">
//                     {day.matches.map((match) => (
//                       <Link
//                         key={match.id}
//                         to={`/basketball-scorecard/${match.id}`}
//                         className="block bg-gray-50 rounded-lg p-4 hover:bg-orange-50 transition-colors"
//                       >
//                         <div className="grid grid-cols-3 items-center gap-4">
//                           {/* Home Team with Logo */}
//                           <div className="flex flex-col items-center gap-2">
//                             <div className="flex items-center gap-3">
//                               <img
//                                 src={match.homeLogo}
//                                 alt={match.home}
//                                 className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
//                                 onError={(e) => {
//                                   e.target.onerror = null;
//                                   e.target.src = 'https://via.placeholder.com/48/cccccc/ffffff?text=H';
//                                 }}
//                               />
//                             </div>
//                             <p className="font-semibold text-gray-800 text-sm sm:text-base text-center">{match.home}</p>
//                           </div>

//                           {/* Center: VS and Time */}
//                           <div className="text-center">
//                             <p className="text-lg font-bold text-gray-400">VS</p>
//                             <p className="text-xs text-gray-600 mt-1 flex items-center justify-center gap-1">
//                               <Clock className="w-4 h-4" /> {match.time} ET
//                             </p>
//                           </div>

//                           {/* Away Team with Logo */}
//                           <div className="flex flex-col items-center gap-2">
//                             <div className="flex items-center gap-3">
//                               <img
//                                 src={match.awayLogo}
//                                 alt={match.away}
//                                 className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
//                                 onError={(e) => {
//                                   e.target.onerror = null;
//                                   e.target.src = 'https://via.placeholder.com/48/cccccc/ffffff?text=A';
//                                 }}
//                               />
//                             </div>
//                             <p className="font-semibold text-gray-800 text-sm sm:text-base text-center">{match.away}</p>
//                           </div>
//                         </div>

//                         <div className="mt-4 pt-3 border-t border-gray-200 text-xs text-gray-600 flex items-center gap-1 justify-center">
//                           <MapPin className="w-4 h-4" />
//                           {match.venue}, {match.city}
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               ))}
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
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = 'https://via.placeholder.com/300/cccccc/ffffff?text=IMG';
//                     }}
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
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = 'https://via.placeholder.com/400x250/cccccc/ffffff?text=NEWS';
//                     }}
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

// export default Schedule;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, Calendar, MapPin } from 'lucide-react';
import SEO from '../../components/SEO.jsx';
import TopBasketballStories from '../../data/TopBasketballStories.js';
import LatestNews from '../../data/LatestNews.js';
import { basketballSchedule } from '../../data/BasketballSchedule.js';

const Schedule = () => {
  const navigate = useNavigate();
  const [selectedLeague, setSelectedLeague] = useState('nba');

  // Get schedule data from external file
  const schedule = basketballSchedule[selectedLeague] || [];

  const handleStoryClick = (id) => {
    navigate(`/details/basketball/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  };

  // SEO meta data
  const leagueLabel = selectedLeague === 'nba' ? 'NBA' : 'WNBA';
  const seoTitle = `${leagueLabel} Schedule | Basketball Fixtures & Match Times | SportlyRadar`;
  const seoDescription = `View upcoming ${leagueLabel} schedule, match times, venues, and fixtures. Get complete basketball schedule for the season.`;
  const seoKeywords = `${leagueLabel} schedule, basketball fixtures, match times, ${leagueLabel} games, basketball calendar, upcoming matches`;
  const seoImage = "https://sportlyradar.com/basketball-schedule-og-image.jpg";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Left: Hero + Schedule */}
          <div className="lg:col-span-8 space-y-6">
            {/* Hero Header Card */}
            <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 text-white rounded-xl shadow-xl p-5 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">🏀 Basketball Schedule</h1>
                  <p className="text-orange-100 text-sm sm:text-base">Upcoming NBA & WNBA fixtures</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-semibold">{new Date().toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* League Selector */}
            <div className="bg-white rounded-xl shadow-md p-4">
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedLeague('nba')}
                  className={`flex-1 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    selectedLeague === 'nba' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  NBA
                </button>
                <button
                  onClick={() => setSelectedLeague('wnba')}
                  className={`flex-1 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    selectedLeague === 'wnba' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  WNBA
                </button>
              </div>
            </div>

            {/* Schedule */}
            <div className="space-y-6">
              {schedule.map((day) => (
                <div key={day.date} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <h2 className="text-lg font-semibold">{formatDate(day.date)}</h2>
                    </div>
                  </div>

                  <div className="p-5 space-y-4">
                    {day.matches.map((match) => (
                      <Link
                        key={match.id}
                        to={`/basketball-scorecard/${match.id}`}
                        className="block bg-gray-50 rounded-lg p-4 hover:bg-orange-50 transition-colors"
                      >
                        <div className="grid grid-cols-3 items-center gap-4">
                          {/* Home Team with Logo */}
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-3">
                              <img
                                src={match.homeLogo}
                                alt={match.home}
                                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = 'https://via.placeholder.com/48/cccccc/ffffff?text=H';
                                }}
                              />
                            </div>
                            <p className="font-semibold text-gray-800 text-sm sm:text-base text-center">{match.home}</p>
                          </div>

                          {/* Center: VS and Time */}
                          <div className="text-center">
                            <p className="text-lg font-bold text-gray-400">VS</p>
                            <p className="text-xs text-gray-600 mt-1 flex items-center justify-center gap-1">
                              <Clock className="w-4 h-4" /> {match.time} ET
                            </p>
                          </div>

                          {/* Away Team with Logo */}
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-3">
                              <img
                                src={match.awayLogo}
                                alt={match.away}
                                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = 'https://via.placeholder.com/48/cccccc/ffffff?text=A';
                                }}
                              />
                            </div>
                            <p className="font-semibold text-gray-800 text-sm sm:text-base text-center">{match.away}</p>
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-gray-200 text-xs text-gray-600 flex items-center gap-1 justify-center">
                          <MapPin className="w-4 h-4" />
                          {match.venue}, {match.city}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar: Top Stories (Desktop only) */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-5">Top Basketball Stories</h3>
              <div className="space-y-4">
                {TopBasketballStories.data.TopBasketballStories.slice(0, 5).map((story) => (
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
                className="mt-6 w-full text-center text-orange-600 font-medium hover:underline text-sm"
              >
                View All Stories →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Top Basketball Stories */}
      <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top Basketball Stories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TopBasketballStories.data.TopBasketballStories.slice(0, 4).map((story) => (
                <div
                  key={story.id}
                  onClick={() => handleStoryClick(story.id)}
                  className="cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
                >
                  <img
                    src={story.image || 'https://via.placeholder.com/300'}
                    alt={story.title}
                    className="w-full h-40 object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/300/cccccc/ffffff?text=IMG';
                    }}
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
              onClick={() => navigate('/all-top-basketball-stories')}
              className="mt-4 w-full text-center text-orange-600 font-medium hover:underline text-sm"
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
                className="text-orange-600 hover:underline font-medium text-sm sm:text-base"
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
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x250/cccccc/ffffff?text=NEWS';
                    }}
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

export default Schedule;
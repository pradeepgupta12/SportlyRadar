

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Trophy, Calendar, MapPin, DollarSign, ChevronRight } from 'lucide-react';

// import TopTennisStories from '../../data/TopTennisStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { tennisTours } from '../../data/TennisTours.js';

// const Tours = () => {
//   const navigate = useNavigate();
//   const [selectedTour, setSelectedTour] = useState('atp');

//   const tourTypes = [
//     { id: 'atp', label: 'ATP Tour (Men)' },
//     { id: 'wta', label: 'WTA Tour (Women)' }
//   ];

//   // Data ab external file se aa raha hai
//   const currentTournaments = tennisTours[selectedTour] || [];

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

//           {/* Left: Tours Main Section */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Hero Section */}
//             <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white rounded-xl shadow-xl p-8">
//               <div className="flex items-center gap-4 mb-4">
//                 <Trophy className="h-12 w-12" />
//                 <div>
//                   <h1 className="text-3xl sm:text-4xl font-bold">ATP & WTA Tours</h1>
//                   <p className="text-lg opacity-90 mt-1">Premier professional tennis circuits • 2026 Season</p>
//                 </div>
//               </div>
//             </div>

//             {/* Tour Type Selector */}
//             <div className="bg-white rounded-xl shadow p-5">
//               <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
//                 {tourTypes.map((tour) => (
//                   <button
//                     key={tour.id}
//                     onClick={() => setSelectedTour(tour.id)}
//                     className={`px-6 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all ${
//                       selectedTour === tour.id
//                         ? 'bg-blue-600 text-white'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {tour.label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Tournament Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {currentTournaments.map((tournament) => (
//                 <Link
//                   key={tournament.id}
//                   to={`/tennis/tour/${tournament.id}`}
//                   className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6"
//                 >
//                   <div className="flex justify-between items-start mb-4">
//                     <div>
//                       <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
//                         {tournament.name}
//                       </h3>
//                       <span className="inline-block text-sm font-medium px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
//                         {tournament.category}
//                       </span>
//                     </div>
//                     <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
//                   </div>

//                   <p className="text-gray-600 mb-5">{tournament.description}</p>

//                   <div className="space-y-4">
//                     <div className="flex items-center gap-3">
//                       <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0" />
//                       <div>
//                         <p className="text-xs text-gray-500">Location</p>
//                         <p className="font-medium text-gray-800">{tournament.location}</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <Calendar className="h-5 w-5 text-gray-400 flex-shrink-0" />
//                       <div>
//                         <p className="text-xs text-gray-500">Month</p>
//                         <p className="font-medium text-gray-800">{tournament.month}</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between pt-5 mt-5 border-t border-gray-200">
//                     <div className="flex items-center gap-2">
//                       <DollarSign className="h-5 w-5 text-green-600" />
//                       <span className="font-semibold text-gray-800">{tournament.prize}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Trophy className="h-5 w-5 text-yellow-600" />
//                       <span className="font-semibold text-gray-800">{tournament.points} pts</span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>

//             {/* Info Section */}
//             <div className="bg-white rounded-xl shadow-md p-8">
//               <h2 className="text-2xl font-bold mb-5">
//                 About the {selectedTour === 'atp' ? 'ATP Tour' : 'WTA Tour'}
//               </h2>
//               <div className="text-gray-600 space-y-4 text-sm leading-relaxed">
//                 {selectedTour === 'atp' ? (
//                   <>
//                     <p>
//                       The ATP Tour is the elite professional tennis circuit for men, featuring nine Masters 1000 events, the Nitto ATP Finals, and the four Grand Slams.
//                     </p>
//                     <p>
//                       <strong>Masters 1000:</strong> Mandatory for top players, these tournaments offer 1000 ranking points to the winner and represent the highest tier below the Grand Slams.
//                     </p>
//                     <p>
//                       <strong>Nitto ATP Finals:</strong> Exclusive year-end event in Turin for the top 8 players, with record prize money and ranking points.
//                     </p>
//                   </>
//                 ) : (
//                   <>
//                     <p>
//                       The WTA Tour is the premier professional tennis circuit for women, including WTA 1000 events, the WTA Finals, and the Grand Slams.
//                     </p>
//                     <p>
//                       <strong>WTA 1000:</strong> The top tier below Grand Slams, offering 1000 points and massive prize pools to attract the strongest fields.
//                     </p>
//                     <p>
//                       <strong>WTA Finals Riyadh:</strong> Season-ending showdown in Saudi Arabia for the top 8 players, featuring record-breaking prize money.
//                     </p>
//                   </>
//                 )}
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

// export default Tours;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Trophy, Calendar, MapPin, DollarSign, ChevronRight } from 'lucide-react';

// import TopTennisStories from '../../data/TopTennisStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { tennisTours } from '../../data/TennisTours.js';

// const Tours = () => {
//   const navigate = useNavigate();
//   const [selectedTour, setSelectedTour] = useState('atp');

//   const tourTypes = [
//     { id: 'atp', label: 'ATP Tour (Men)' },
//     { id: 'wta', label: 'WTA Tour (Women)' }
//   ];

//   // Data ab external file se aa raha hai
//   const currentTournaments = tennisTours[selectedTour] || [];

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

//           {/* Left: Tours Main Section */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Hero Section */}
//             <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white rounded-xl shadow-xl p-8">
//               <div className="flex items-center gap-4 mb-4">
//                 <Trophy className="h-12 w-12" />
//                 <div>
//                   <h1 className="text-3xl sm:text-4xl font-bold">ATP & WTA Tours</h1>
//                   <p className="text-lg opacity-90 mt-1">Premier professional tennis circuits • 2026 Season</p>
//                 </div>
//               </div>
//             </div>

//             {/* Tour Type Selector */}
//             <div className="bg-white rounded-xl shadow p-5">
//               <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
//                 {tourTypes.map((tour) => (
//                   <button
//                     key={tour.id}
//                     onClick={() => setSelectedTour(tour.id)}
//                     className={`px-6 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all ${
//                       selectedTour === tour.id
//                         ? 'bg-blue-600 text-white'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {tour.label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Tournament Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {currentTournaments.map((tournament) => (
//                 <Link
//                   key={tournament.id}
//                   to={`/tennis/tour/${tournament.id}`}
//                   className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6"
//                 >
//                   <div className="flex items-center gap-4 mb-4">
//                     <img
//                       src={tournament.logo_url}
//                       alt={`${tournament.name} logo`}
//                       className="h-10 w-10 sm:h-12 sm:w-12 object-contain rounded bg-gray-50 p-1.5 flex-shrink-0 shadow-sm"
//                     />
//                     <div>
//                       <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
//                         {tournament.name}
//                       </h3>
//                       <span className="inline-block text-sm font-medium px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
//                         {tournament.category}
//                       </span>
//                     </div>
//                     <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all ml-auto flex-shrink-0" />
//                   </div>

//                   <p className="text-gray-600 mb-5">{tournament.description}</p>

//                   <div className="space-y-4">
//                     <div className="flex items-center gap-3">
//                       <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0" />
//                       <div>
//                         <p className="text-xs text-gray-500">Location</p>
//                         <p className="font-medium text-gray-800">{tournament.location}</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <Calendar className="h-5 w-5 text-gray-400 flex-shrink-0" />
//                       <div>
//                         <p className="text-xs text-gray-500">Month</p>
//                         <p className="font-medium text-gray-800">{tournament.month}</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between pt-5 mt-5 border-t border-gray-200">
//                     <div className="flex items-center gap-2">
//                       <DollarSign className="h-5 w-5 text-green-600" />
//                       <span className="font-semibold text-gray-800">{tournament.prize}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Trophy className="h-5 w-5 text-yellow-600" />
//                       <span className="font-semibold text-gray-800">{tournament.points} pts</span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>

//             {/* Info Section */}
//             <div className="bg-white rounded-xl shadow-md p-8">
//               <h2 className="text-2xl font-bold mb-5">
//                 About the {selectedTour === 'atp' ? 'ATP Tour' : 'WTA Tour'}
//               </h2>
//               <div className="text-gray-600 space-y-4 text-sm leading-relaxed">
//                 {selectedTour === 'atp' ? (
//                   <>
//                     <p>
//                       The ATP Tour is the elite professional tennis circuit for men, featuring nine Masters 1000 events, the Nitto ATP Finals, and the four Grand Slams.
//                     </p>
//                     <p>
//                       <strong>Masters 1000:</strong> Mandatory for top players, these tournaments offer 1000 ranking points to the winner and represent the highest tier below the Grand Slams.
//                     </p>
//                     <p>
//                       <strong>Nitto ATP Finals:</strong> Exclusive year-end event in Turin for the top 8 players, with record prize money and ranking points.
//                     </p>
//                   </>
//                 ) : (
//                   <>
//                     <p>
//                       The WTA Tour is the premier professional tennis circuit for women, including WTA 1000 events, the WTA Finals, and the Grand Slams.
//                     </p>
//                     <p>
//                       <strong>WTA 1000:</strong> The top tier below Grand Slams, offering 1000 points and massive prize pools to attract the strongest fields.
//                     </p>
//                     <p>
//                       <strong>WTA Finals Riyadh:</strong> Season-ending showdown in Saudi Arabia for the top 8 players, featuring record-breaking prize money.
//                     </p>
//                   </>
//                 )}
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

// export default Tours;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trophy, Calendar, MapPin, DollarSign, ChevronRight } from 'lucide-react';
import SEO from '../../components/SEO.jsx';

import TopTennisStories from '../../data/TopTennisStories.js';
import LatestNews from '../../data/LatestNews.js';
import { tennisTours } from '../../data/TennisTours.js';

const Tours = () => {
  const navigate = useNavigate();
  const [selectedTour, setSelectedTour] = useState('atp');

  const tourTypes = [
    { id: 'atp', label: 'ATP Tour (Men)' },
    { id: 'wta', label: 'WTA Tour (Women)' }
  ];

  // Data ab external file se aa raha hai
  const currentTournaments = tennisTours[selectedTour] || [];

  const handleStoryClick = (id) => {
    navigate(`/details/tennis/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  // SEO meta data
  const tourLabel = selectedTour === 'atp' ? 'ATP Tour' : 'WTA Tour';
  const seoTitle = `${tourLabel} | Professional Tennis Circuits | SportlyRadar`;
  const seoDescription = `Explore ${tourLabel} tournaments - Masters 1000, WTA 1000 events, and premier tennis circuits. Get tournament details, schedules, prize money and more.`;
  const seoKeywords = `${tourLabel}, tennis tournaments, ATP, WTA, Masters 1000, WTA 1000, tennis circuit, professional tennis`;
  const seoImage = "https://sportlyradar.com/tennis-tours-og-image.jpg";

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

          {/* Left: Tours Main Section */}
          <div className="lg:col-span-8 space-y-6">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white rounded-xl shadow-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <Trophy className="h-12 w-12" />
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold">ATP & WTA Tours</h1>
                  <p className="text-lg opacity-90 mt-1">Premier professional tennis circuits • 2026 Season</p>
                </div>
              </div>
            </div>

            {/* Tour Type Selector */}
            <div className="bg-white rounded-xl shadow p-5">
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {tourTypes.map((tour) => (
                  <button
                    key={tour.id}
                    onClick={() => setSelectedTour(tour.id)}
                    className={`px-6 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all ${
                      selectedTour === tour.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tour.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tournament Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentTournaments.map((tournament) => (
                <Link
                  key={tournament.id}
                  to={`/tennis/tour/${tournament.id}`}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={tournament.logo_url}
                      alt={`${tournament.name} logo`}
                      className="h-10 w-10 sm:h-12 sm:w-12 object-contain rounded bg-gray-50 p-1.5 flex-shrink-0 shadow-sm"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                        {tournament.name}
                      </h3>
                      <span className="inline-block text-sm font-medium px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                        {tournament.category}
                      </span>
                    </div>
                    <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all ml-auto flex-shrink-0" />
                  </div>

                  <p className="text-gray-600 mb-5">{tournament.description}</p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500">Location</p>
                        <p className="font-medium text-gray-800">{tournament.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500">Month</p>
                        <p className="font-medium text-gray-800">{tournament.month}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-5 mt-5 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-gray-800">{tournament.prize}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-yellow-600" />
                      <span className="font-semibold text-gray-800">{tournament.points} pts</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Info Section */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-5">
                About the {selectedTour === 'atp' ? 'ATP Tour' : 'WTA Tour'}
              </h2>
              <div className="text-gray-600 space-y-4 text-sm leading-relaxed">
                {selectedTour === 'atp' ? (
                  <>
                    <p>
                      The ATP Tour is the elite professional tennis circuit for men, featuring nine Masters 1000 events, the Nitto ATP Finals, and the four Grand Slams.
                    </p>
                    <p>
                      <strong>Masters 1000:</strong> Mandatory for top players, these tournaments offer 1000 ranking points to the winner and represent the highest tier below the Grand Slams.
                    </p>
                    <p>
                      <strong>Nitto ATP Finals:</strong> Exclusive year-end event in Turin for the top 8 players, with record prize money and ranking points.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      The WTA Tour is the premier professional tennis circuit for women, including WTA 1000 events, the WTA Finals, and the Grand Slams.
                    </p>
                    <p>
                      <strong>WTA 1000:</strong> The top tier below Grand Slams, offering 1000 points and massive prize pools to attract the strongest fields.
                    </p>
                    <p>
                      <strong>WTA Finals Riyadh:</strong> Season-ending showdown in Saudi Arabia for the top 8 players, featuring record-breaking prize money.
                    </p>
                  </>
                )}
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

export default Tours;
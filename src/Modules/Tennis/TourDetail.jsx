


// import React, { useState } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import { ArrowLeft, Trophy, Calendar, MapPin, Award } from 'lucide-react';

// import TopTennisStories from '../../data/TopTennisStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { tennisTourDetails } from '../../data/TennisToursDetail.js';

// const TourDetail = () => {
//   const { tourId } = useParams();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('overview');

//   // Data ab external file se aa raha hai
//   const tournament = tennisTourDetails[tourId];

//   if (!tournament) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-600">
//         Tournament not found
//       </div>
//     );
//   }

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

//           {/* Left: Tournament Details */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Back Button + Header */}
//             <div>
//               <Link to="/tennis/tours" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm mb-4">
//                 <ArrowLeft className="w-4 h-4" /> Back to Tours
//               </Link>

//               <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white rounded-xl shadow-xl p-8">
//                 <div className="flex items-center gap-5">
//                   <Trophy className="h-14 w-14" />
//                   <div>
//                     <h1 className="text-3xl sm:text-4xl font-bold">{tournament.name}</h1>
//                     <span className="inline-block text-sm bg-white/20 px-4 py-1.5 rounded-full mt-2">
//                       {tournament.category}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               <div className="bg-white rounded-xl shadow p-5 text-center">
//                 <p className="text-xs text-gray-600">Location</p>
//                 <p className="text-lg font-bold mt-1">{tournament.location}</p>
//               </div>
//               <div className="bg-white rounded-xl shadow p-5 text-center">
//                 <p className="text-xs text-gray-600">Held</p>
//                 <p className="text-lg font-bold mt-1">{tournament.month}</p>
//               </div>
//               <div className="bg-white rounded-xl shadow p-5 text-center">
//                 <p className="text-xs text-gray-600">Prize Money</p>
//                 <p className="text-lg font-bold text-green-600 mt-1">{tournament.prize}</p>
//               </div>
//               <div className="bg-white rounded-xl shadow p-5 text-center">
//                 <p className="text-xs text-gray-600">Winner Points</p>
//                 <p className="text-lg font-bold mt-1">{tournament.points}</p>
//               </div>
//             </div>

//             {/* Tabs */}
//             <div className="bg-white rounded-xl shadow p-5">
//               <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
//                 {['overview', 'champions', 'records'].map(tab => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`px-6 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
//                       activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {tab === 'overview' ? 'Overview' : tab === 'champions' ? 'Recent Champions' : 'Records'}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Tab Content */}
//             <div className="space-y-6">
//               {activeTab === 'overview' && (
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="bg-white rounded-xl shadow-md p-6">
//                     <h3 className="text-xl font-semibold mb-4">About</h3>
//                     <p className="text-gray-600 mb-4">{tournament.description}</p>
//                     <p className="text-gray-700"><span className="font-medium">Format:</span> {tournament.format}</p>
//                   </div>

//                   <div className="bg-white rounded-xl shadow-md p-6">
//                     <h3 className="text-xl font-semibold mb-4">Details</h3>
//                     <div className="space-y-4 text-gray-700">
//                       <div className="flex justify-between"><span className="text-gray-600">Venue:</span> <span className="font-medium">{tournament.venue}</span></div>
//                       <div className="flex justify-between"><span className="text-gray-600">Established:</span> <span className="font-medium">{tournament.established}</span></div>
//                       <div className="flex justify-between"><span className="text-gray-600">Surface:</span> <span className="font-medium">{tournament.surface}</span></div>
//                       <div className="flex justify-between"><span className="text-gray-600">Participants:</span> <span className="font-medium">{tournament.participants}</span></div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {activeTab === 'champions' && (
//                 <div className="bg-white rounded-xl shadow-md overflow-hidden">
//                   <table className="w-full">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="text-left py-4 px-6 font-medium">Year</th>
//                         <th className="text-left py-4 px-6 font-medium">Champion</th>
//                         <th className="text-left py-4 px-6 font-medium">Runner-Up</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-100">
//                       {tournament.pastChampions.map((c, i) => (
//                         <tr key={i} className="hover:bg-gray-50">
//                           <td className="py-4 px-6 font-medium">{c.year}</td>
//                           <td className="py-4 px-6 flex items-center gap-3">
//                             <Trophy className="w-5 h-5 text-yellow-600" />
//                             {c.champion}
//                           </td>
//                           <td className="py-4 px-6 text-gray-600">{c.runnerUp}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}

//               {activeTab === 'records' && (
//                 <div className="grid md:grid-cols-3 gap-6">
//                   {Object.entries(tournament.records).map(([key, value], i) => (
//                     <div key={i} className="bg-white rounded-xl shadow-md p-6 text-center">
//                       <p className="text-sm text-gray-600 mb-2">
//                         {key === 'mostTitles' ? 'Most Titles' :
//                          key === 'youngestChampion' ? 'Youngest Champion' :
//                          key === 'oldestChampion' ? 'Oldest Champion' : 
//                          key === 'note' ? 'Note' : key.charAt(0).toUpperCase() + key.slice(1)}
//                       </p>
//                       <p className="text-xl font-bold text-gray-800">{value}</p>
//                     </div>
//                   ))}
//                 </div>
//               )}
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

// export default TourDetail;

// import React, { useState } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import { ArrowLeft } from 'lucide-react';

// import TopTennisStories from '../../data/TopTennisStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { tennisTourDetails } from '../../data/TennisToursDetail.js';

// const TourDetail = () => {
//   const { tourId } = useParams();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('overview');

//   const tournament = tennisTourDetails[tourId];

//   if (!tournament) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-600">
//         Tournament not found
//       </div>
//     );
//   }

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

//           {/* Left: Tournament Details */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Back Button + Header */}
//             <div>
//               <Link to="/tennis/tours" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm mb-4">
//                 <ArrowLeft className="w-4 h-4" /> Back to Tours
//               </Link>

//               <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white rounded-xl shadow-xl p-8">
//                 <div className="flex items-center gap-5">
//                   <img 
//                     src={tournament.logoUrl} 
//                     alt={`${tournament.name} Logo`} 
//                     className="h-14 w-auto object-contain" 
//                   />
//                   <div>
//                     <h1 className="text-3xl sm:text-4xl font-bold">{tournament.name}</h1>
//                     <span className="inline-block text-sm bg-white/20 px-4 py-1.5 rounded-full mt-2">
//                       {tournament.category}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               <div className="bg-white rounded-xl shadow p-5 text-center">
//                 <p className="text-xs text-gray-600">Location</p>
//                 <p className="text-lg font-bold mt-1">{tournament.location}</p>
//               </div>
//               <div className="bg-white rounded-xl shadow p-5 text-center">
//                 <p className="text-xs text-gray-600">Held</p>
//                 <p className="text-lg font-bold mt-1">{tournament.month}</p>
//               </div>
//               <div className="bg-white rounded-xl shadow p-5 text-center">
//                 <p className="text-xs text-gray-600">Prize Money</p>
//                 <p className="text-lg font-bold text-green-600 mt-1">{tournament.prize}</p>
//               </div>
//               <div className="bg-white rounded-xl shadow p-5 text-center">
//                 <p className="text-xs text-gray-600">Winner Points</p>
//                 <p className="text-lg font-bold mt-1">{tournament.points}</p>
//               </div>
//             </div>

//             {/* Tabs */}
//             <div className="bg-white rounded-xl shadow p-5">
//               <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
//                 {['overview', 'champions', 'records'].map(tab => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`px-6 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
//                       activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {tab === 'overview' ? 'Overview' : tab === 'champions' ? 'Recent Champions' : 'Records'}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Tab Content */}
//             <div className="space-y-6">
//               {activeTab === 'overview' && (
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="bg-white rounded-xl shadow-md p-6">
//                     <h3 className="text-xl font-semibold mb-4">About</h3>
//                     <p className="text-gray-600 mb-4">{tournament.description}</p>
//                     <p className="text-gray-700"><span className="font-medium">Format:</span> {tournament.format}</p>
//                   </div>

//                   <div className="bg-white rounded-xl shadow-md p-6">
//                     <h3 className="text-xl font-semibold mb-4">Details</h3>
//                     <div className="space-y-4 text-gray-700">
//                       <div className="flex justify-between"><span className="text-gray-600">Venue:</span> <span className="font-medium">{tournament.venue}</span></div>
//                       <div className="flex justify-between"><span className="text-gray-600">Established:</span> <span className="font-medium">{tournament.established}</span></div>
//                       <div className="flex justify-between"><span className="text-gray-600">Surface:</span> <span className="font-medium">{tournament.surface}</span></div>
//                       <div className="flex justify-between"><span className="text-gray-600">Participants:</span> <span className="font-medium">{tournament.participants}</span></div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {activeTab === 'champions' && (
//                 <div className="bg-white rounded-xl shadow-md overflow-hidden">
//                   <table className="w-full">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="text-left py-4 px-6 font-medium">Year</th>
//                         <th className="text-left py-4 px-6 font-medium">Champion</th>
//                         <th className="text-left py-4 px-6 font-medium">Runner-Up</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-100">
//                       {tournament.pastChampions.map((c, i) => (
//                         <tr key={i} className="hover:bg-gray-50">
//                           <td className="py-4 px-6 font-medium">{c.year}</td>
//                           <td className="py-4 px-6">
//                             <div className="flex items-center gap-3">
//                               <img 
//                                 src={c.championAvatar} 
//                                 alt={`${c.champion} Avatar`} 
//                                 className="w-8 h-8 rounded-full object-cover" 
//                               />
//                               <span>{c.champion}</span>
//                             </div>
//                           </td>
//                           <td className="py-4 px-6">
//                             <div className="flex items-center gap-3 text-gray-600">
//                               <img 
//                                 src={c.runnerUpAvatar} 
//                                 alt={`${c.runnerUp} Avatar`} 
//                                 className="w-8 h-8 rounded-full object-cover" 
//                               />
//                               <span>{c.runnerUp}</span>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}

//               {activeTab === 'records' && (
//                 <div className="grid md:grid-cols-3 gap-6">
//                   {Object.entries(tournament.records).map(([key, value], i) => (
//                     <div key={i} className="bg-white rounded-xl shadow-md p-6 text-center">
//                       <p className="text-sm text-gray-600 mb-2">
//                         {key === 'mostTitles' ? 'Most Titles' :
//                          key === 'youngestChampion' ? 'Youngest Champion' :
//                          key === 'oldestChampion' ? 'Oldest Champion' : 
//                          key === 'note' ? 'Note' : key.charAt(0).toUpperCase() + key.slice(1)}
//                       </p>
//                       <p className="text-xl font-bold text-gray-800">{value}</p>
//                     </div>
//                   ))}
//                 </div>
//               )}
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

// export default TourDetail;

import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../../components/SEO.jsx';

import TopTennisStories from '../../data/TopTennisStories.js';
import LatestNews from '../../data/LatestNews.js';
import { tennisTourDetails } from '../../data/TennisToursDetail.js';

const TourDetail = () => {
  const { tourId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const tournament = tennisTourDetails[tourId];

  if (!tournament) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <SEO 
          title="Tournament Not Found | SportlyRadar"
          description="The requested tennis tournament could not be found."
        />
        Tournament not found
      </div>
    );
  }

  const handleStoryClick = (id) => {
    navigate(`/details/tennis/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  // SEO meta data
  const seoTitle = `${tournament.name} | Tennis Tournament | ${tournament.category} | SportlyRadar`;
  const seoDescription = `Complete details about ${tournament.name} - ${tournament.description.substring(0, 150)}...`;
  const seoKeywords = `${tournament.name}, tennis tournament, ${tournament.category}, ${tournament.location}, ${tournament.surface}, ATP, WTA`;
  const seoImage = tournament.logoUrl;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-blue-50">
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

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Left: Tournament Details */}
          <div className="lg:col-span-8 space-y-6">
            {/* Back Button + Header */}
            <div>
              <Link to="/tennis/tours" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm mb-4">
                <ArrowLeft className="w-4 h-4" /> Back to Tours
              </Link>

              <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white rounded-xl shadow-xl p-8">
                <div className="flex items-center gap-5">
                  <img 
                    src={tournament.logoUrl} 
                    alt={`${tournament.name} Logo`} 
                    className="h-14 w-auto object-contain" 
                  />
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-bold">{tournament.name}</h1>
                    <span className="inline-block text-sm bg-white/20 px-4 py-1.5 rounded-full mt-2">
                      {tournament.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl shadow p-5 text-center">
                <p className="text-xs text-gray-600">Location</p>
                <p className="text-lg font-bold mt-1">{tournament.location}</p>
              </div>
              <div className="bg-white rounded-xl shadow p-5 text-center">
                <p className="text-xs text-gray-600">Held</p>
                <p className="text-lg font-bold mt-1">{tournament.month}</p>
              </div>
              <div className="bg-white rounded-xl shadow p-5 text-center">
                <p className="text-xs text-gray-600">Prize Money</p>
                <p className="text-lg font-bold text-green-600 mt-1">{tournament.prize}</p>
              </div>
              <div className="bg-white rounded-xl shadow p-5 text-center">
                <p className="text-xs text-gray-600">Winner Points</p>
                <p className="text-lg font-bold mt-1">{tournament.points}</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow p-5">
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {['overview', 'champions', 'records'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                      activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tab === 'overview' ? 'Overview' : tab === 'champions' ? 'Recent Champions' : 'Records'}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {activeTab === 'overview' && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4">About</h3>
                    <p className="text-gray-600 mb-4">{tournament.description}</p>
                    <p className="text-gray-700"><span className="font-medium">Format:</span> {tournament.format}</p>
                  </div>

                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4">Details</h3>
                    <div className="space-y-4 text-gray-700">
                      <div className="flex justify-between"><span className="text-gray-600">Venue:</span> <span className="font-medium">{tournament.venue}</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Established:</span> <span className="font-medium">{tournament.established}</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Surface:</span> <span className="font-medium">{tournament.surface}</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Participants:</span> <span className="font-medium">{tournament.participants}</span></div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'champions' && (
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-4 px-6 font-medium">Year</th>
                        <th className="text-left py-4 px-6 font-medium">Champion</th>
                        <th className="text-left py-4 px-6 font-medium">Runner-Up</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {tournament.pastChampions.map((c, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                          <td className="py-4 px-6 font-medium">{c.year}</td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <img 
                                src={c.championAvatar} 
                                alt={`${c.champion} Avatar`} 
                                className="w-8 h-8 rounded-full object-cover" 
                              />
                              <span>{c.champion}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3 text-gray-600">
                              <img 
                                src={c.runnerUpAvatar} 
                                alt={`${c.runnerUp} Avatar`} 
                                className="w-8 h-8 rounded-full object-cover" 
                              />
                              <span>{c.runnerUp}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'records' && (
                <div className="grid md:grid-cols-3 gap-6">
                  {Object.entries(tournament.records).map(([key, value], i) => (
                    <div key={i} className="bg-white rounded-xl shadow-md p-6 text-center">
                      <p className="text-sm text-gray-600 mb-2">
                        {key === 'mostTitles' ? 'Most Titles' :
                         key === 'youngestChampion' ? 'Youngest Champion' :
                         key === 'oldestChampion' ? 'Oldest Champion' : 
                         key === 'note' ? 'Note' : key.charAt(0).toUpperCase() + key.slice(1)}
                      </p>
                      <p className="text-xl font-bold text-gray-800">{value}</p>
                    </div>
                  ))}
                </div>
              )}
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

export default TourDetail;
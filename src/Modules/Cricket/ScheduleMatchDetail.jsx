


// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import cricketData from '../../data/ScheduleMatch.json';
// import TopStories from '../../data/TopStories.js';
// import LatestNews from '../../data/LatestNews.js';

// const tabs = ['Info', 'Live', 'Scorecard', 'Squads', 'Overs', 'Highlights', 'Full Commentary', 'News'];

// const ScheduleMatchDetail = () => {
//   const { matchId } = useParams();
//   const [activeTab, setActiveTab] = useState('Info');
//   const navigate = useNavigate();

//   // Find match
//   let match = null;
//   Object.values(cricketData.cricket_matches).forEach((category) => {
//     const found = category.matches.find((m) => m.matchId === matchId);
//     if (found) match = found;
//   });

//   if (!match) {
//     return <div className="p-10 text-center text-xl text-gray-600">Match not found</div>;
//   }

//   const { matchInfo, series, tabs: matchTabs } = match;
//   const venue = matchInfo.venue || {};

//   const formatDate = (dateStr) => {
//     if (!dateStr) return 'TBA';
//     return new Date(dateStr).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
//   };

//   const formatTime = (dateStr) => {
//     if (!dateStr) return '';
//     return new Date(dateStr).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
//   };

//   const teams = Object.entries(matchTabs.squads || {});

//   const getCountryCode = (teamName) => {
//     if (teamName.includes('Australia') || teamName.includes('AUS')) return 'au';
//     if (teamName.includes('England') || teamName.includes('ENG')) return 'gb-eng';
//     if (teamName.includes('India') || teamName.includes('IND')) return 'in';
//     return 'in';
//   };

//   const handleStoryClick = (id) => {
//     navigate(`/details/cricket/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Main Layout Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
//           {/* Left: Match Detail Content */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Header */}
//             <div className="bg-white rounded-xl shadow-sm p-5">
//               <h1 className="text-xl md:text-2xl font-bold text-gray-900">
//                 {matchInfo.matchTitle} - Live Cricket Score, Commentary
//               </h1>
//               <p className="text-sm text-gray-700 mt-2">
//                 Series: {series.name}, {series.season} • Venue: {venue.name}, {venue.city}
//               </p>
//               <p className="text-sm text-gray-700 mt-1">
//                 Date & Time: {formatDate(matchInfo.dateTime?.venueLocal)} {formatTime(matchInfo.dateTime?.venueLocal)} LOCAL
//               </p>
//             </div>

//             {/* Tabs - Sticky on larger screens */}
//             <div className="bg-white  shadow-sm sticky top-16 z-20 -mx-4 lg:mx-0 lg:rounded-t-xl overflow-hidden">
//               <div className="overflow-x-auto scrollbar-hide">
//                 <div className="flex">
//                   {tabs.map((tab) => (
//                     <button
//                       key={tab}
//                       onClick={() => setActiveTab(tab)}
//                       className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
//                         activeTab === tab
//                           ? 'border-teal-600 text-teal-600'
//                           : 'border-transparent text-gray-600 hover:text-gray-900'
//                       }`}
//                     >
//                       {tab}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Tab Content */}
//             <div className="bg-white rounded-xl shadow-sm p-5 lg:p-6">
//               {/* INFO TAB */}
//               {activeTab === 'Info' && (
//                 <div>
//                   <h2 className="text-xl font-bold mb-6">INFO</h2>
//                   <div className="grid md:grid-cols-2 gap-8">
//                     {/* Left Column */}
//                     <div>
//                       <table className="w-full mb-8">
//                         <tbody>
//                           <tr>
//                             <td className="py-2 font-medium text-gray-700 w-24">Match</td>
//                             <td className="py-2 text-gray-900">
//                               {matchInfo.matchTitle} • {series.name}, {series.season}
//                             </td>
//                           </tr>
//                           <tr>
//                             <td className="py-2 font-medium text-gray-700">Series</td>
//                             <td className="py-2 text-gray-900">{series.name}, {series.season}</td>
//                           </tr>
//                           <tr>
//                             <td className="py-2 font-medium text-gray-700">Date</td>
//                             <td className="py-2 text-gray-900">{formatDate(matchInfo.dateTime?.venueLocal)}</td>
//                           </tr>
//                           <tr>
//                             <td className="py-2 font-medium text-gray-700">Time</td>
//                             <td className="py-2 text-gray-900">
//                               {formatTime(matchInfo.dateTime?.venueLocal)} LOCAL, {formatTime(matchInfo.dateTime?.gmt)} GMT
//                             </td>
//                           </tr>
//                           <tr>
//                             <td className="py-2 font-medium text-gray-700">Venue</td>
//                             <td className="py-2 text-gray-900">{venue.name}, {venue.city}</td>
//                           </tr>
//                         </tbody>
//                       </table>

//                       {/* Squads Preview */}
//                       {teams.map(([teamName, teamData]) => (
//                         <div key={teamName} className="mb-6">
//                           <h4 className="font-bold text-gray-800 mb-2">{teamName} squad</h4>
//                           <table className="w-full text-sm">
//                             <tbody>
//                               <tr>
//                                 <td className="py-1 font-medium text-gray-700 align-top">Players</td>
//                                 <td className="py-1 text-gray-900">
//                                   {teamData.players?.map((p) => p.name).join(', ')}
//                                   {teamData.captain && <span className="ml-2">({teamData.captain} (c))</span>}
//                                 </td>
//                               </tr>
//                             </tbody>
//                           </table>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Right Column - Venue Guide */}
//                     <div>
//                       <div className="bg-gray-200 px-4 py-2 font-bold mb-4 rounded">VENUE GUIDE</div>
//                       <table className="w-full">
//                         <tbody>
//                           <tr>
//                             <td className="py-2 font-medium text-gray-700 w-24">Stadium</td>
//                             <td className="py-2 text-gray-900">{venue.name}</td>
//                           </tr>
//                           <tr>
//                             <td className="py-2 font-medium text-gray-700">City</td>
//                             <td className="py-2 text-gray-900">{venue.city}, {venue.country || 'Australia'}</td>
//                           </tr>
//                           {venue.capacity && (
//                             <tr>
//                               <td className="py-2 font-medium text-gray-700">Capacity</td>
//                               <td className="py-2 text-gray-900">{venue.capacity.toLocaleString()}</td>
//                             </tr>
//                           )}
//                           {venue.ends && venue.ends.length > 0 && (
//                             <tr>
//                               <td className="py-2 font-medium text-gray-700">Ends</td>
//                               <td className="py-2 text-gray-900">{venue.ends.join(', ')}</td>
//                             </tr>
//                           )}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* SQUADS TAB */}
//               {activeTab === 'Squads' && (
//                 <div>
//                   <div className="bg-teal-100 py-4 mb-6 flex justify-between items-center px-6 rounded-lg">
//                     <div className="flex items-center gap-3">
//                       <img 
//                         src={`https://flagcdn.com/48x36/${getCountryCode(teams[0]?.[0] || '')}.png`} 
//                         alt={teams[0]?.[0] || ''} 
//                         className="w-12 h-9 object-cover rounded"
//                         onError={(e) => { e.target.style.display = 'none'; }}
//                       />
//                       <span className="font-bold text-lg">{teams[0]?.[0] || 'Team 1'}</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <span className="font-bold text-lg">{teams[1]?.[0] || 'Team 2'}</span>
//                       <img 
//                         src={`https://flagcdn.com/48x36/${getCountryCode(teams[1]?.[0] || '')}.png`} 
//                         alt={teams[1]?.[0] || ''} 
//                         className="w-12 h-9 object-cover rounded"
//                         onError={(e) => { e.target.style.display = 'none'; }}
//                       />
//                     </div>
//                   </div>

//                   <h2 className="text-xl font-bold mb-6 text-center">Squad</h2>

//                   <div className="bg-white rounded-lg border border-gray-200">
//                     {(() => {
//                       const team1 = teams[0] || [];
//                       const team2 = teams[1] || [];
//                       const team1Data = team1[1];
//                       const team2Data = team2[1];
//                       const maxPlayers = Math.max(
//                         team1Data?.players?.length || 0,
//                         team2Data?.players?.length || 0
//                       );

//                       return Array.from({ length: maxPlayers }).map((_, index) => {
//                         const player1 = team1Data?.players?.[index];
//                         const player2 = team2Data?.players?.[index];

//                         return (
//                           <div key={index} className="grid grid-cols-2 border-b border-gray-200 hover:bg-gray-50">
//                             <div className="p-4 flex items-center gap-3 border-r border-gray-200">
//                               {player1 ? (
//                                 <>
//                                   <img
//                                     src={player1.avatar || 'https://via.placeholder.com/40'}
//                                     alt={player1.name}
//                                     className="w-10 h-10 rounded-full object-cover"
//                                     onError={(e) => (e.target.src = 'https://via.placeholder.com/40')}
//                                   />
//                                   <div className="flex-1">
//                                     <div className="font-semibold text-gray-900">
//                                       {player1.name}
//                                       {team1Data.captain === player1.name && (
//                                         <span className="ml-2 text-xs text-gray-600">(C)</span>
//                                       )}
//                                     </div>
//                                     <div className="text-sm text-gray-600">{player1.role}</div>
//                                   </div>
//                                 </>
//                               ) : (
//                                 <div className="w-full h-12"></div>
//                               )}
//                             </div>

//                             <div className="p-4 flex items-center justify-end gap-3">
//                               {player2 ? (
//                                 <>
//                                   <div className="flex-1 text-right">
//                                     <div className="font-semibold text-gray-900">
//                                       {player2.name}
//                                       {team2Data.captain === player2.name && (
//                                         <span className="ml-2 text-xs text-gray-600">(C)</span>
//                                       )}
//                                     </div>
//                                     <div className="text-sm text-gray-600">{player2.role}</div>
//                                   </div>
//                                   <img
//                                     src={player2.avatar || 'https://via.placeholder.com/40'}
//                                     alt={player2.name}
//                                     className="w-10 h-10 rounded-full object-cover"
//                                     onError={(e) => (e.target.src = 'https://via.placeholder.com/40')}
//                                   />
//                                 </>
//                               ) : (
//                                 <div className="w-full h-12"></div>
//                               )}
//                             </div>
//                           </div>
//                         );
//                       });
//                     })()}
//                   </div>
//                 </div>
//               )}

//               {/* Other Tabs Placeholder */}
//               {['Live', 'Scorecard', 'Overs', 'Highlights', 'Full Commentary', 'News'].includes(activeTab) && (
//                 <div className="text-center py-20">
//                   <p className="text-xl text-gray-600">Match has not started yet.</p>
//                   <p className="text-gray-500 mt-4">Content will be available once the match begins.</p>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Right Sidebar: Top Cricket Stories (Desktop only) */}
//           <div className="hidden lg:block lg:col-span-4">
//             <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
//               <h3 className="text-lg font-bold text-gray-900 mb-5">Top Cricket Stories</h3>
//               <div className="space-y-4">
//                 {TopStories.data.TopStories.slice(0, 5).map((story) => (
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
//                 onClick={() => navigate('/all-top-cricket-stories')}
//                 className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
//               >
//                 View All Stories →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile: Top Cricket Stories */}
//       <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-xl shadow-md p-5">
//             <h3 className="text-lg font-bold text-gray-900 mb-4">Top Cricket Stories</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {TopStories.data.TopStories.slice(0, 4).map((story) => (
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
//               onClick={() => navigate('/all-top-cricket-stories')}
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

// export default ScheduleMatchDetail;


// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import cricketData from '../../data/ScheduleMatch.json';
// import TopStories from '../../data/TopStories.js';
// import LatestNews from '../../data/LatestNews.js';

// const tabs = ['Info', 'Live', 'Scorecard', 'Squads', 'Overs', 'Highlights', 'Full Commentary', 'News'];

// const ScheduleMatchDetail = () => {
//   const { matchId } = useParams();
//   const [activeTab, setActiveTab] = useState('Info');
//   const navigate = useNavigate();

//   // Find match
//   let match = null;
//   Object.values(cricketData.cricket_matches).forEach((category) => {
//     const found = category.matches.find((m) => m.matchId === matchId);
//     if (found) match = found;
//   });

//   if (!match) {
//     return <div className="p-10 text-center text-xl text-gray-600">Match not found</div>;
//   }

//   const { matchInfo, series, tabs: matchTabs } = match;
//   const venue = matchInfo.venue || {};

//   const formatDate = (dateStr) => {
//     if (!dateStr) return 'TBA';
//     return new Date(dateStr).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
//   };

//   const formatTime = (dateStr) => {
//     if (!dateStr) return '';
//     return new Date(dateStr).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
//   };

//   const teams = Object.entries(matchTabs.squads || {});

//   const getCountryCode = (teamName) => {
//     if (teamName.includes('Australia') || teamName.includes('AUS')) return 'au';
//     if (teamName.includes('England') || teamName.includes('ENG')) return 'gb-eng';
//     if (teamName.includes('India') || teamName.includes('IND')) return 'in';
//     return 'in';
//   };

//   const handleStoryClick = (id) => {
//     navigate(`/details/cricket/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Main Layout Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
//           {/* Left: Match Detail Content */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Header */}
//             <div className="bg-white rounded-xl shadow-sm p-5">
//               <h1 className="text-xl md:text-2xl font-bold text-gray-900">
//                 {matchInfo.matchTitle} - Live Cricket Score, Commentary
//               </h1>
//               <p className="text-sm text-gray-700 mt-2">
//                 Series: {series.name}, {series.season} • Venue: {venue.name}, {venue.city}
//               </p>
//               <p className="text-sm text-gray-700 mt-1">
//                 Date & Time: {formatDate(matchInfo.dateTime?.venueLocal)} {formatTime(matchInfo.dateTime?.venueLocal)} LOCAL
//               </p>
//             </div>

//             {/* Tabs - Sticky on larger screens */}
//             <div className="bg-white shadow-sm sticky top-16 z-20 -mx-4 lg:mx-0 lg:rounded-t-xl overflow-hidden">
//               <div className="overflow-x-auto scrollbar-hide">
//                 <div className="flex">
//                   {tabs.map((tab) => (
//                     <button
//                       key={tab}
//                       onClick={() => {
//                         if (tab === 'News') {
//                           navigate('/all-latest-news');
//                         } else {
//                           setActiveTab(tab);
//                         }
//                       }}
//                       className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
//                         activeTab === tab
//                           ? 'border-teal-600 text-teal-600'
//                           : 'border-transparent text-gray-600 hover:text-gray-900'
//                       }`}
//                     >
//                       {tab}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Tab Content */}
//             <div className="bg-white rounded-xl shadow-sm p-5 lg:p-6">
//               {/* INFO TAB */}
//               {activeTab === 'Info' && (
//                 <div>
//                   <h2 className="text-xl font-bold mb-6">INFO</h2>
//                   <div className="grid md:grid-cols-2 gap-8">
//                     {/* Left Column */}
//                     <div>
//                       <table className="w-full mb-8">
//                         <tbody>
//                           <tr>
//                             <td className="py-2 font-medium text-gray-700 w-24">Match</td>
//                             <td className="py-2 text-gray-900">
//                               {matchInfo.matchTitle} • {series.name}, {series.season}
//                             </td>
//                           </tr>
//                           <tr>
//                             <td className="py-2 font-medium text-gray-700">Series</td>
//                             <td className="py-2 text-gray-900">{series.name}, {series.season}</td>
//                           </tr>
//                           <tr>
//                             <td className="py-2 font-medium text-gray-700">Date</td>
//                             <td className="py-2 text-gray-900">{formatDate(matchInfo.dateTime?.venueLocal)}</td>
//                           </tr>
//                           <tr>
//                             <td className="py-2 font-medium text-gray-700">Time</td>
//                             <td className="py-2 text-gray-900">
//                               {formatTime(matchInfo.dateTime?.venueLocal)} LOCAL, {formatTime(matchInfo.dateTime?.gmt)} GMT
//                             </td>
//                           </tr>
//                           <tr>
//                             <td className="py-2 font-medium text-gray-700">Venue</td>
//                             <td className="py-2 text-gray-900">{venue.name}, {venue.city}</td>
//                           </tr>
//                         </tbody>
//                       </table>

//                       {/* Squads Preview */}
//                       {teams.map(([teamName, teamData]) => (
//                         <div key={teamName} className="mb-6">
//                           <h4 className="font-bold text-gray-800 mb-2">{teamName} squad</h4>
//                           <table className="w-full text-sm">
//                             <tbody>
//                               <tr>
//                                 <td className="py-1 font-medium text-gray-700 align-top">Players</td>
//                                 <td className="py-1 text-gray-900">
//                                   {teamData.players?.map((p) => p.name).join(', ')}
//                                   {teamData.captain && <span className="ml-2">({teamData.captain} (c))</span>}
//                                 </td>
//                               </tr>
//                             </tbody>
//                           </table>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Right Column - Venue Guide */}
//                     <div>
//                       <div className="bg-gray-200 px-4 py-2 font-bold mb-4 rounded">VENUE GUIDE</div>
//                       <table className="w-full">
//                         <tbody>
//                           <tr>
//                             <td className="py-2 font-medium text-gray-700 w-24">Stadium</td>
//                             <td className="py-2 text-gray-900">{venue.name}</td>
//                           </tr>
//                           <tr>
//                             <td className="py-2 font-medium text-gray-700">City</td>
//                             <td className="py-2 text-gray-900">{venue.city}, {venue.country || 'Australia'}</td>
//                           </tr>
//                           {venue.capacity && (
//                             <tr>
//                               <td className="py-2 font-medium text-gray-700">Capacity</td>
//                               <td className="py-2 text-gray-900">{venue.capacity.toLocaleString()}</td>
//                             </tr>
//                           )}
//                           {venue.ends && venue.ends.length > 0 && (
//                             <tr>
//                               <td className="py-2 font-medium text-gray-700">Ends</td>
//                               <td className="py-2 text-gray-900">{venue.ends.join(', ')}</td>
//                             </tr>
//                           )}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* SQUADS TAB */}
//               {activeTab === 'Squads' && (
//                 <div>
//                   <div className="bg-teal-100 py-4 mb-6 flex justify-between items-center px-6 rounded-lg">
//                     <div className="flex items-center gap-3">
//                       <img 
//                         src={`https://flagcdn.com/48x36/${getCountryCode(teams[0]?.[0] || '')}.png`} 
//                         alt={teams[0]?.[0] || ''} 
//                         className="w-12 h-9 object-cover rounded"
//                         onError={(e) => { e.target.style.display = 'none'; }}
//                       />
//                       <span className="font-bold text-lg">{teams[0]?.[0] || 'Team 1'}</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <span className="font-bold text-lg">{teams[1]?.[0] || 'Team 2'}</span>
//                       <img 
//                         src={`https://flagcdn.com/48x36/${getCountryCode(teams[1]?.[0] || '')}.png`} 
//                         alt={teams[1]?.[0] || ''} 
//                         className="w-12 h-9 object-cover rounded"
//                         onError={(e) => { e.target.style.display = 'none'; }}
//                       />
//                     </div>
//                   </div>

//                   <h2 className="text-xl font-bold mb-6 text-center">Squad</h2>

//                   <div className="bg-white rounded-lg border border-gray-200">
//                     {(() => {
//                       const team1 = teams[0] || [];
//                       const team2 = teams[1] || [];
//                       const team1Data = team1[1];
//                       const team2Data = team2[1];
//                       const maxPlayers = Math.max(
//                         team1Data?.players?.length || 0,
//                         team2Data?.players?.length || 0
//                       );

//                       return Array.from({ length: maxPlayers }).map((_, index) => {
//                         const player1 = team1Data?.players?.[index];
//                         const player2 = team2Data?.players?.[index];

//                         return (
//                           <div key={index} className="grid grid-cols-2 border-b border-gray-200 hover:bg-gray-50">
//                             <div className="p-4 flex items-center gap-3 border-r border-gray-200">
//                               {player1 ? (
//                                 <>
//                                   <img
//                                     src={player1.avatar || 'https://via.placeholder.com/40'}
//                                     alt={player1.name}
//                                     className="w-10 h-10 rounded-full object-cover"
//                                     onError={(e) => (e.target.src = 'https://via.placeholder.com/40')}
//                                   />
//                                   <div className="flex-1">
//                                     <div className="font-semibold text-gray-900">
//                                       {player1.name}
//                                       {team1Data.captain === player1.name && (
//                                         <span className="ml-2 text-xs text-gray-600">(C)</span>
//                                       )}
//                                     </div>
//                                     <div className="text-sm text-gray-600">{player1.role}</div>
//                                   </div>
//                                 </>
//                               ) : (
//                                 <div className="w-full h-12"></div>
//                               )}
//                             </div>

//                             <div className="p-4 flex items-center justify-end gap-3">
//                               {player2 ? (
//                                 <>
//                                   <div className="flex-1 text-right">
//                                     <div className="font-semibold text-gray-900">
//                                       {player2.name}
//                                       {team2Data.captain === player2.name && (
//                                         <span className="ml-2 text-xs text-gray-600">(C)</span>
//                                       )}
//                                     </div>
//                                     <div className="text-sm text-gray-600">{player2.role}</div>
//                                   </div>
//                                   <img
//                                     src={player2.avatar || 'https://via.placeholder.com/40'}
//                                     alt={player2.name}
//                                     className="w-10 h-10 rounded-full object-cover"
//                                     onError={(e) => (e.target.src = 'https://via.placeholder.com/40')}
//                                   />
//                                 </>
//                               ) : (
//                                 <div className="w-full h-12"></div>
//                               )}
//                             </div>
//                           </div>
//                         );
//                       });
//                     })()}
//                   </div>
//                 </div>
//               )}

//               {/* Other Tabs Placeholder */}
//               {['Live', 'Scorecard', 'Overs', 'Highlights', 'Full Commentary'].includes(activeTab) && (
//                 <div className="text-center py-20">
//                   <p className="text-xl text-gray-600">Match has not started yet.</p>
//                   <p className="text-gray-500 mt-4">Content will be available once the match begins.</p>
//                 </div>
//               )}

//               {/* News tab is now handled by navigation — no content block needed here */}
//             </div>
//           </div>

//           {/* Right Sidebar: Top Cricket Stories (Desktop only) */}
//           <div className="hidden lg:block lg:col-span-4">
//             <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
//               <h3 className="text-lg font-bold text-gray-900 mb-5">Top Cricket Stories</h3>
//               <div className="space-y-4">
//                 {TopStories.data.TopStories.slice(0, 5).map((story) => (
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
//                 onClick={() => navigate('/all-top-cricket-stories')}
//                 className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
//               >
//                 View All Stories →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile: Top Cricket Stories */}
//       <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-xl shadow-md p-5">
//             <h3 className="text-lg font-bold text-gray-900 mb-4">Top Cricket Stories</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {TopStories.data.TopStories.slice(0, 4).map((story) => (
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
//               onClick={() => navigate('/all-top-cricket-stories')}
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

// export default ScheduleMatchDetail;


import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import cricketData from '../../data/ScheduleMatch.json';
import TopStories from '../../data/TopStories.js';
import LatestNews from '../../data/LatestNews.js';
import SEO from '../../components/SEO';

const tabs = ['Info', 'Live', 'Scorecard', 'Squads', 'Overs', 'Highlights', 'Full Commentary', 'News'];

const ScheduleMatchDetail = () => {
  const { matchId } = useParams();
  const [activeTab, setActiveTab] = useState('Info');
  const navigate = useNavigate();

  // Find match
  let match = null;
  Object.values(cricketData.cricket_matches).forEach((category) => {
    const found = category.matches.find((m) => m.matchId === matchId);
    if (found) match = found;
  });

  if (!match) {
    return <div className="p-10 text-center text-xl text-gray-600">Match not found</div>;
  }

  const { matchInfo, series, tabs: matchTabs } = match;
  const venue = matchInfo.venue || {};

  const formatDate = (dateStr) => {
    if (!dateStr) return 'TBA';
    return new Date(dateStr).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  const formatTime = (dateStr) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  const teams = Object.entries(matchTabs.squads || {});

  const getCountryCode = (teamName) => {
    if (teamName.includes('Australia') || teamName.includes('AUS')) return 'au';
    if (teamName.includes('England') || teamName.includes('ENG')) return 'gb-eng';
    if (teamName.includes('India') || teamName.includes('IND')) return 'in';
    return 'in';
  };

  const handleStoryClick = (id) => {
    navigate(`/details/cricket/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  // ────────────────────────────────────────────────
  //                  DYNAMIC SEO
  // ────────────────────────────────────────────────
  const matchTitle = matchInfo.matchTitle || 'Cricket Match';
  const seriesName = series?.name || 'Unknown Series';
  const season = series?.season || '';

  const pageTitle = `${matchTitle} - ${seriesName} ${season} | Live Score & Updates`;
  const pageDescription = `Follow ${matchTitle} in ${seriesName} ${season}. Get live scores, commentary, squads, venue details, match info and updates on SportlyRadar.`;
  const canonicalUrl = `https://www.sportlyradar.com/cricket/match/${matchId}`;
  const ogImage = "https://www.sportlyradar.com/images/cricket-match-detail-og.jpg"; // fallback - can be replaced with team logos later

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={`${matchTitle}, ${seriesName}, ${seriesName} ${season}, cricket live score, match preview, cricket squads, ${matchInfo?.venue?.name || ''} venue, cricket updates`}
        canonical={canonicalUrl}
        image={ogImage}
        url={canonicalUrl}
        type="article"
      />

      {/* Main Layout Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left: Match Detail Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                {matchInfo.matchTitle} - Live Cricket Score, Commentary
              </h1>
              <p className="text-sm text-gray-700 mt-2">
                Series: {series.name}, {series.season} • Venue: {venue.name}, {venue.city}
              </p>
              <p className="text-sm text-gray-700 mt-1">
                Date & Time: {formatDate(matchInfo.dateTime?.venueLocal)} {formatTime(matchInfo.dateTime?.venueLocal)} LOCAL
              </p>
            </div>

            {/* Tabs - Sticky on larger screens */}
            <div className="bg-white shadow-sm sticky top-16 z-20 -mx-4 lg:mx-0 lg:rounded-t-xl overflow-hidden">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => {
                        if (tab === 'News') {
                          navigate('/all-latest-news');
                        } else {
                          setActiveTab(tab);
                        }
                      }}
                      className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                        activeTab === tab
                          ? 'border-teal-600 text-teal-600'
                          : 'border-transparent text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-xl shadow-sm p-5 lg:p-6">
              {/* INFO TAB */}
              {activeTab === 'Info' && (
                <div>
                  <h2 className="text-xl font-bold mb-6">INFO</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                      <table className="w-full mb-8">
                        <tbody>
                          <tr>
                            <td className="py-2 font-medium text-gray-700 w-24">Match</td>
                            <td className="py-2 text-gray-900">
                              {matchInfo.matchTitle} • {series.name}, {series.season}
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 font-medium text-gray-700">Series</td>
                            <td className="py-2 text-gray-900">{series.name}, {series.season}</td>
                          </tr>
                          <tr>
                            <td className="py-2 font-medium text-gray-700">Date</td>
                            <td className="py-2 text-gray-900">{formatDate(matchInfo.dateTime?.venueLocal)}</td>
                          </tr>
                          <tr>
                            <td className="py-2 font-medium text-gray-700">Time</td>
                            <td className="py-2 text-gray-900">
                              {formatTime(matchInfo.dateTime?.venueLocal)} LOCAL, {formatTime(matchInfo.dateTime?.gmt)} GMT
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 font-medium text-gray-700">Venue</td>
                            <td className="py-2 text-gray-900">{venue.name}, {venue.city}</td>
                          </tr>
                        </tbody>
                      </table>

                      {/* Squads Preview */}
                      {teams.map(([teamName, teamData]) => (
                        <div key={teamName} className="mb-6">
                          <h4 className="font-bold text-gray-800 mb-2">{teamName} squad</h4>
                          <table className="w-full text-sm">
                            <tbody>
                              <tr>
                                <td className="py-1 font-medium text-gray-700 align-top">Players</td>
                                <td className="py-1 text-gray-900">
                                  {teamData.players?.map((p) => p.name).join(', ')}
                                  {teamData.captain && <span className="ml-2">({teamData.captain} (c))</span>}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      ))}
                    </div>

                    {/* Right Column - Venue Guide */}
                    <div>
                      <div className="bg-gray-200 px-4 py-2 font-bold mb-4 rounded">VENUE GUIDE</div>
                      <table className="w-full">
                        <tbody>
                          <tr>
                            <td className="py-2 font-medium text-gray-700 w-24">Stadium</td>
                            <td className="py-2 text-gray-900">{venue.name}</td>
                          </tr>
                          <tr>
                            <td className="py-2 font-medium text-gray-700">City</td>
                            <td className="py-2 text-gray-900">{venue.city}, {venue.country || 'Australia'}</td>
                          </tr>
                          {venue.capacity && (
                            <tr>
                              <td className="py-2 font-medium text-gray-700">Capacity</td>
                              <td className="py-2 text-gray-900">{venue.capacity.toLocaleString()}</td>
                            </tr>
                          )}
                          {venue.ends && venue.ends.length > 0 && (
                            <tr>
                              <td className="py-2 font-medium text-gray-700">Ends</td>
                              <td className="py-2 text-gray-900">{venue.ends.join(', ')}</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* SQUADS TAB */}
              {activeTab === 'Squads' && (
                <div>
                  <div className="bg-teal-100 py-4 mb-6 flex justify-between items-center px-6 rounded-lg">
                    <div className="flex items-center gap-3">
                      <img 
                        src={`https://flagcdn.com/48x36/${getCountryCode(teams[0]?.[0] || '')}.png`} 
                        alt={teams[0]?.[0] || ''} 
                        className="w-12 h-9 object-cover rounded"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                      <span className="font-bold text-lg">{teams[0]?.[0] || 'Team 1'}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-lg">{teams[1]?.[0] || 'Team 2'}</span>
                      <img 
                        src={`https://flagcdn.com/48x36/${getCountryCode(teams[1]?.[0] || '')}.png`} 
                        alt={teams[1]?.[0] || ''} 
                        className="w-12 h-9 object-cover rounded"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                  </div>

                  <h2 className="text-xl font-bold mb-6 text-center">Squad</h2>

                  <div className="bg-white rounded-lg border border-gray-200">
                    {(() => {
                      const team1 = teams[0] || [];
                      const team2 = teams[1] || [];
                      const team1Data = team1[1];
                      const team2Data = team2[1];
                      const maxPlayers = Math.max(
                        team1Data?.players?.length || 0,
                        team2Data?.players?.length || 0
                      );

                      return Array.from({ length: maxPlayers }).map((_, index) => {
                        const player1 = team1Data?.players?.[index];
                        const player2 = team2Data?.players?.[index];

                        return (
                          <div key={index} className="grid grid-cols-2 border-b border-gray-200 hover:bg-gray-50">
                            <div className="p-4 flex items-center gap-3 border-r border-gray-200">
                              {player1 ? (
                                <>
                                  <img
                                    src={player1.avatar || 'https://via.placeholder.com/40'}
                                    alt={player1.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                    onError={(e) => (e.target.src = 'https://via.placeholder.com/40')}
                                  />
                                  <div className="flex-1">
                                    <div className="font-semibold text-gray-900">
                                      {player1.name}
                                      {team1Data.captain === player1.name && (
                                        <span className="ml-2 text-xs text-gray-600">(C)</span>
                                      )}
                                    </div>
                                    <div className="text-sm text-gray-600">{player1.role}</div>
                                  </div>
                                </>
                              ) : (
                                <div className="w-full h-12"></div>
                              )}
                            </div>

                            <div className="p-4 flex items-center justify-end gap-3">
                              {player2 ? (
                                <>
                                  <div className="flex-1 text-right">
                                    <div className="font-semibold text-gray-900">
                                      {player2.name}
                                      {team2Data.captain === player2.name && (
                                        <span className="ml-2 text-xs text-gray-600">(C)</span>
                                      )}
                                    </div>
                                    <div className="text-sm text-gray-600">{player2.role}</div>
                                  </div>
                                  <img
                                    src={player2.avatar || 'https://via.placeholder.com/40'}
                                    alt={player2.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                    onError={(e) => (e.target.src = 'https://via.placeholder.com/40')}
                                  />
                                </>
                              ) : (
                                <div className="w-full h-12"></div>
                              )}
                            </div>
                          </div>
                        );
                      });
                    })()}
                  </div>
                </div>
              )}

              {/* Other Tabs Placeholder */}
              {['Live', 'Scorecard', 'Overs', 'Highlights', 'Full Commentary'].includes(activeTab) && (
                <div className="text-center py-20">
                  <p className="text-xl text-gray-600">Match has not started yet.</p>
                  <p className="text-gray-500 mt-4">Content will be available once the match begins.</p>
                </div>
              )}

              {/* News tab is now handled by navigation — no content block needed here */}
            </div>
          </div>

          {/* Right Sidebar: Top Cricket Stories (Desktop only) */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-5">Top Cricket Stories</h3>
              <div className="space-y-4">
                {TopStories.data.TopStories.slice(0, 5).map((story) => (
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
                onClick={() => navigate('/all-top-cricket-stories')}
                className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
              >
                View All Stories →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Top Cricket Stories */}
      <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top Cricket Stories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TopStories.data.TopStories.slice(0, 4).map((story) => (
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
              onClick={() => navigate('/all-top-cricket-stories')}
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
  );
};

export default ScheduleMatchDetail;
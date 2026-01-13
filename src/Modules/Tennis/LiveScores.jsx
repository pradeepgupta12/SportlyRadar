// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Clock, MapPin, Trophy, TrendingUp } from 'lucide-react';
// import LiveTennisMatches from '../../data/LiveTennisMatches';

// const LiveScores = () => {
//   const [selectedFilter, setSelectedFilter] = useState('All');
//   const liveMatches = LiveTennisMatches.data.LiveMatches;

//   const filters = ['All', 'Grand Slam', 'ATP', 'WTA'];

//   const filteredMatches = liveMatches.filter(match => {
//     if (selectedFilter === 'All') return true;
//     if (selectedFilter === 'Grand Slam') return match.tournament.category === 'Grand Slam';
//     if (selectedFilter === 'ATP') return match.match_type.includes("Men's");
//     if (selectedFilter === 'WTA') return match.match_type.includes("Women's");
//     return true;
//   });

//   const getMatchTypeColor = (type) => {
//     if (type.includes("Men's")) return 'bg-blue-100 text-blue-700';
//     if (type.includes("Women's")) return 'bg-pink-100 text-pink-700';
//     return 'bg-purple-100 text-purple-700';
//   };

//   const renderPlayerInfo = (player, isTeam = false) => {
//     if (isTeam && player.team) {
//       return (
//         <div className="space-y-1">
//           {player.team.map((p, idx) => (
//             <div key={idx} className="flex items-center gap-2">
//               <span className="text-sm font-medium">{p.short_name}</span>
//               <span className="text-xs text-gray-500">{p.country}</span>
//             </div>
//           ))}
//         </div>
//       );
//     }
//     return (
//       <div className="flex items-center gap-2">
//         <span className="font-medium">{player.short_name}</span>
//         <span className="text-sm text-gray-500">{player.country}</span>
//         {player.seed && (
//           <span className="text-xs bg-gray-200 px-1.5 py-0.5 rounded">
//             Seed {player.seed}
//           </span>
//         )}
//       </div>
//     );
//   };

//   const renderScore = (match) => {
//     const { current_set, previous_sets } = match.scorecard;
//     const isDoubles = match.match_type.includes('Doubles');

//     return (
//       <div className="space-y-2">
//         <div className="flex gap-2 text-sm">
//           {previous_sets.map((set, idx) => (
//             <div key={idx} className="flex flex-col items-center min-w-[40px]">
//               <span className="font-semibold">
//                 {isDoubles ? set.team1_games : set.player1_games}
//               </span>
//               <span className="font-semibold">
//                 {isDoubles ? set.team2_games : set.player2_games}
//               </span>
//             </div>
//           ))}
//           <div className="flex flex-col items-center min-w-[40px] bg-green-50 rounded px-2">
//             <span className="font-bold text-green-700">
//               {isDoubles ? current_set.team1_games : current_set.player1_games}
//             </span>
//             <span className="font-bold text-green-700">
//               {isDoubles ? current_set.team2_games : current_set.player2_games}
//             </span>
//           </div>
//         </div>
//         <div className="text-xs text-gray-600">
//           Current: {isDoubles ? current_set.team1_points : current_set.player1_points} - {isDoubles ? current_set.team2_points : current_set.player2_points}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="text-4xl font-bold mb-2">Live Tennis Scores</h1>
//           <p className="text-lg opacity-90">Real-time updates from tournaments worldwide</p>
//         </div>
//       </div>

//       {/* Filters */}
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         <div className="flex gap-3 overflow-x-auto pb-2">
//           {filters.map((filter) => (
//             <button
//               key={filter}
//               onClick={() => setSelectedFilter(filter)}
//               className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
//                 selectedFilter === filter
//                   ? 'bg-blue-600 text-white'
//                   : 'bg-white text-gray-700 hover:bg-gray-100'
//               }`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Live Matches */}
//       <div className="max-w-7xl mx-auto px-4 pb-12">
//         <div className="space-y-4">
//           {filteredMatches.map((match) => (
//             <Link
//               key={match.match_id}
//               to={`/tennis-scorecard/${match.match_id}`}
//               className="block bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6"
//             >
//               {/* Match Header */}
//               <div className="flex justify-between items-start mb-4">
//                 <div>
//                   <div className="flex items-center gap-2 mb-2">
//                     <Trophy className="h-4 w-4 text-yellow-600" />
//                     <span className="font-semibold text-gray-800">{match.series}</span>
//                     <span className={`text-xs px-2 py-1 rounded-full ${getMatchTypeColor(match.match_type)}`}>
//                       {match.match_type}
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-3 text-sm text-gray-600">
//                     <span className="flex items-center gap-1">
//                       <MapPin className="h-3 w-3" />
//                       {match.venue.name}
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <Clock className="h-3 w-3" />
//                       {match.schedule.time}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
//                   <span className="text-sm font-medium text-red-600">LIVE</span>
//                 </div>
//               </div>

//               {/* Match Score */}
//               <div className="flex justify-between items-center">
//                 <div className="flex-1">
//                   {match.match_type.includes('Doubles') ? (
//                     <>
//                       {renderPlayerInfo(match.players[0], true)}
//                       <div className="my-2 border-t border-gray-200"></div>
//                       {renderPlayerInfo(match.players[1], true)}
//                     </>
//                   ) : (
//                     <>
//                       {renderPlayerInfo(match.players[0])}
//                       <div className="my-2 border-t border-gray-200"></div>
//                       {renderPlayerInfo(match.players[1])}
//                     </>
//                   )}
//                 </div>
//                 <div className="ml-6">
//                   {renderScore(match)}
//                 </div>
//               </div>

//               {/* Current Status */}
//               <div className="mt-4 pt-4 border-t border-gray-100">
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm text-gray-600">
//                     {match.scorecard.current_status}
//                   </span>
//                   <span className="text-xs text-blue-600 font-medium">
//                     View Scorecard →
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {filteredMatches.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No live matches at the moment</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LiveScores;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Clock, MapPin, Trophy, TrendingUp } from 'lucide-react';
// import LiveTennisMatches from '../../data/LiveTennisMatches';

// const LiveScores = () => {
//   const [selectedFilter, setSelectedFilter] = useState('All');
//   const liveMatches = LiveTennisMatches.data.LiveMatches;

//   const filters = ['All', 'Grand Slam', 'ATP', 'WTA'];

//   const filteredMatches = liveMatches.filter(match => {
//     if (selectedFilter === 'All') return true;
//     if (selectedFilter === 'Grand Slam') return match.tournament.category === 'Grand Slam';
//     if (selectedFilter === 'ATP') return match.match_type.includes("Men's");
//     if (selectedFilter === 'WTA') return match.match_type.includes("Women's");
//     return true;
//   });

//   const getMatchTypeColor = (type) => {
//     if (type.includes("Men's")) return 'bg-blue-100 text-blue-700';
//     if (type.includes("Women's")) return 'bg-pink-100 text-pink-700';
//     return 'bg-purple-100 text-purple-700';
//   };

//   const renderPlayerInfo = (player, isTeam = false) => {
//     if (isTeam && player.team) {
//       return (
//         <div className="space-y-1">
//           {player.team.map((p, idx) => (
//             <div key={idx} className="flex items-center gap-2">
//               <span className="text-sm font-medium">{p.short_name}</span>
//               <span className="text-xs text-gray-500">{p.country}</span>
//             </div>
//           ))}
//         </div>
//       );
//     }
//     return (
//       <div className="flex items-center gap-2">
//         <span className="font-medium">{player.short_name}</span>
//         <span className="text-sm text-gray-500">{player.country}</span>
//         {player.seed && (
//           <span className="text-xs bg-gray-200 px-1.5 py-0.5 rounded">
//             Seed {player.seed}
//           </span>
//         )}
//       </div>
//     );
//   };

//   const renderScore = (match) => {
//     const { current_set, previous_sets } = match.scorecard;
//     const isDoubles = match.match_type.includes('Doubles');

//     return (
//       <div className="space-y-2">
//         <div className="flex gap-2 text-sm">
//           {previous_sets.map((set, idx) => (
//             <div key={idx} className="flex flex-col items-center min-w-[40px]">
//               <span className="font-semibold">
//                 {isDoubles ? set.team1_games : set.player1_games}
//               </span>
//               <span className="font-semibold">
//                 {isDoubles ? set.team2_games : set.player2_games}
//               </span>
//             </div>
//           ))}
//           <div className="flex flex-col items-center min-w-[40px] bg-green-50 rounded px-2">
//             <span className="font-bold text-green-700">
//               {isDoubles ? current_set.team1_games : current_set.player1_games}
//             </span>
//             <span className="font-bold text-green-700">
//               {isDoubles ? current_set.team2_games : current_set.player2_games}
//             </span>
//           </div>
//         </div>
//         <div className="text-xs text-gray-600">
//           Current: {isDoubles ? current_set.team1_points : current_set.player1_points} - {isDoubles ? current_set.team2_points : current_set.player2_points}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="text-4xl font-bold mb-2">Live Tennis Scores</h1>
//           <p className="text-lg opacity-90">Real-time updates from tournaments worldwide</p>
//         </div>
//       </div>

//       {/* Filters */}
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         <div className="flex gap-3 overflow-x-auto pb-2">
//           {filters.map((filter) => (
//             <button
//               key={filter}
//               onClick={() => setSelectedFilter(filter)}
//               className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
//                 selectedFilter === filter
//                   ? 'bg-blue-600 text-white'
//                   : 'bg-white text-gray-700 hover:bg-gray-100'
//               }`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Live Matches */}
//       <div className="max-w-7xl mx-auto px-4 pb-12">
//         <div className="space-y-4">
//           {filteredMatches.map((match) => (
//             <Link
//               key={match.match_id}
//               to={`/tennis/match/${match.match_id}`}
//               className="block bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6"
//             >
//               {/* Match Header */}
//               <div className="flex justify-between items-start mb-4">
//                 <div>
//                   <div className="flex items-center gap-2 mb-2">
//                     <Trophy className="h-4 w-4 text-yellow-600" />
//                     <span className="font-semibold text-gray-800">{match.series}</span>
//                     <span className={`text-xs px-2 py-1 rounded-full ${getMatchTypeColor(match.match_type)}`}>
//                       {match.match_type}
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-3 text-sm text-gray-600">
//                     <span className="flex items-center gap-1">
//                       <MapPin className="h-3 w-3" />
//                       {match.venue.name}
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <Clock className="h-3 w-3" />
//                       {match.schedule.time}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
//                   <span className="text-sm font-medium text-red-600">LIVE</span>
//                 </div>
//               </div>

//               {/* Match Score */}
//               <div className="flex justify-between items-center">
//                 <div className="flex-1">
//                   {match.match_type.includes('Doubles') ? (
//                     <>
//                       {renderPlayerInfo(match.players[0], true)}
//                       <div className="my-2 border-t border-gray-200"></div>
//                       {renderPlayerInfo(match.players[1], true)}
//                     </>
//                   ) : (
//                     <>
//                       {renderPlayerInfo(match.players[0])}
//                       <div className="my-2 border-t border-gray-200"></div>
//                       {renderPlayerInfo(match.players[1])}
//                     </>
//                   )}
//                 </div>
//                 <div className="ml-6">
//                   {renderScore(match)}
//                 </div>
//               </div>

//               {/* Current Status */}
//               <div className="mt-4 pt-4 border-t border-gray-100">
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm text-gray-600">
//                     {match.scorecard.current_status}
//                   </span>
//                   <span className="text-xs text-blue-600 font-medium">
//                     View Details →
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {filteredMatches.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No live matches at the moment</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LiveScores;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Clock, MapPin, Trophy } from 'lucide-react';
// import LiveTennisMatches from '../../data/LiveTennisMatches';
// import TopTennisStories from '../../data/TopTennisStories.js';
// import LatestNews from '../../data/LatestNews.js';

// const LiveScores = () => {
//   const navigate = useNavigate();
//   const [selectedFilter, setSelectedFilter] = useState('All');
//   const liveMatches = LiveTennisMatches.data.LiveMatches;

//   const filters = ['All', 'Grand Slam', 'ATP', 'WTA'];

//   const filteredMatches = liveMatches.filter(match => {
//     if (selectedFilter === 'All') return true;
//     if (selectedFilter === 'Grand Slam') return match.tournament.category === 'Grand Slam';
//     if (selectedFilter === 'ATP') return match.match_type.includes("Men's");
//     if (selectedFilter === 'WTA') return match.match_type.includes("Women's");
//     return true;
//   });

//   const getMatchTypeColor = (type) => {
//     if (type.includes("Men's")) return 'bg-blue-100 text-blue-700';
//     if (type.includes("Women's")) return 'bg-pink-100 text-pink-700';
//     return 'bg-purple-100 text-purple-700';
//   };

//   const renderPlayerInfo = (player, isTeam = false) => {
//     if (isTeam && player.team) {
//       return (
//         <div className="space-y-1">
//           {player.team.map((p, idx) => (
//             <div key={idx} className="flex items-center gap-2">
//               <span className="text-sm font-medium">{p.short_name}</span>
//               <span className="text-xs text-gray-500">{p.country}</span>
//             </div>
//           ))}
//         </div>
//       );
//     }
//     return (
//       <div className="flex items-center gap-2">
//         <span className="font-medium">{player.short_name}</span>
//         <span className="text-sm text-gray-500">{player.country}</span>
//         {player.seed && (
//           <span className="text-xs bg-gray-200 px-1.5 py-0.5 rounded">
//             Seed {player.seed}
//           </span>
//         )}
//       </div>
//     );
//   };

//   const renderScore = (match) => {
//     const { current_set, previous_sets } = match.scorecard;
//     const isDoubles = match.match_type.includes('Doubles');

//     return (
//       <div className="space-y-2">
//         <div className="flex gap-2 text-sm">
//           {previous_sets.map((set, idx) => (
//             <div key={idx} className="flex flex-col items-center min-w-[40px]">
//               <span className="font-semibold">
//                 {isDoubles ? set.team1_games : set.player1_games}
//               </span>
//               <span className="font-semibold">
//                 {isDoubles ? set.team2_games : set.player2_games}
//               </span>
//             </div>
//           ))}
//           <div className="flex flex-col items-center min-w-[40px] bg-green-50 rounded px-2">
//             <span className="font-bold text-green-700">
//               {isDoubles ? current_set.team1_games : current_set.player1_games}
//             </span>
//             <span className="font-bold text-green-700">
//               {isDoubles ? current_set.team2_games : current_set.player2_games}
//             </span>
//           </div>
//         </div>
//         <div className="text-xs text-gray-600">
//           Current: {isDoubles ? current_set.team1_points : current_set.player1_points} - {isDoubles ? current_set.team2_points : current_set.player2_points}
//         </div>
//       </div>
//     );
//   };

//   const handleStoryClick = (id) => {
//     navigate(`/details/tennis/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-blue-50">
//       {/* Entire page content inside max-w-7xl - exactly like Football page */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
//           {/* Left Main Section: Live Matches */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Hero Header - Identical to Football page */}
//             <div className="bg-gradient-to-r from-green-600 via-blue-600 to-indigo-700 text-white rounded-xl shadow-xl p-5 sm:p-8">
//               <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//                 <div>
//                   <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">🎾 Live Tennis Scores</h1>
//                   <p className="text-green-100 text-sm sm:text-base">Real-time match updates from tournaments worldwide</p>
//                 </div>
//                 <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg text-sm">
//                   <div className="flex items-center gap-2">
//                     <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
//                     <span className="font-semibold">{new Date().toLocaleTimeString()}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Filters - Same style as Football */}
//             <div className="bg-white rounded-xl shadow-lg p-4 sm:p-5">
//               <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
//                 {filters.map((filter) => (
//                   <button
//                     key={filter}
//                     onClick={() => setSelectedFilter(filter)}
//                     className={`px-4 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all text-sm ${
//                       selectedFilter === filter
//                         ? ' bg-gray-100 text-gray-700 hover:bg-gray-200'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {filter}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Live Matches List */}
//             <div className="space-y-4">
//               {filteredMatches.length === 0 ? (
//                 <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12 text-center">
//                   <div className="text-5xl sm:text-6xl mb-4">🎾</div>
//                   <p className="text-gray-500 text-base sm:text-lg">No live matches at the moment</p>
//                   <p className="text-gray-400 text-sm mt-2">Check back later for updates</p>
//                 </div>
//               ) : (
//                 filteredMatches.map((match) => (
//                   <Link
//                     key={match.match_id}
//                     to={`/tennis/match/${match.match_id}`}
//                     className="block bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6"
//                   >
//                     <div className="flex justify-between items-start mb-4">
//                       <div>
//                         <div className="flex items-center gap-2 mb-2">
//                           <Trophy className="h-4 w-4 text-yellow-600" />
//                           <span className="font-semibold text-gray-800">{match.series}</span>
//                           <span className={`text-xs px-2 py-1 rounded-full ${getMatchTypeColor(match.match_type)}`}>
//                             {match.match_type}
//                           </span>
//                         </div>
//                         <div className="flex items-center gap-3 text-sm text-gray-600">
//                           <span className="flex items-center gap-1">
//                             <MapPin className="h-3 w-3" />
//                             {match.venue.name}
//                           </span>
//                           <span className="flex items-center gap-1">
//                             <Clock className="h-3 w-3" />
//                             {match.schedule.time}
//                           </span>
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
//                         <span className="text-sm font-medium text-red-600">LIVE</span>
//                       </div>
//                     </div>

//                     <div className="flex justify-between items-center">
//                       <div className="flex-1">
//                         {match.match_type.includes('Doubles') ? (
//                           <>
//                             {renderPlayerInfo(match.players[0], true)}
//                             <div className="my-2 border-t border-gray-200"></div>
//                             {renderPlayerInfo(match.players[1], true)}
//                           </>
//                         ) : (
//                           <>
//                             {renderPlayerInfo(match.players[0])}
//                             <div className="my-2 border-t border-gray-200"></div>
//                             {renderPlayerInfo(match.players[1])}
//                           </>
//                         )}
//                       </div>
//                       <div className="ml-6">
//                         {renderScore(match)}
//                       </div>
//                     </div>

//                     <div className="mt-4 pt-4 border-t border-gray-100">
//                       <div className="flex items-center justify-between">
//                         <span className="text-sm text-gray-600">
//                           {match.scorecard.current_status}
//                         </span>
//                         <span className="text-xs text-blue-600 font-medium">
//                           View Details →
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 ))
//               )}
//             </div>
//           </div>

//           {/* Right Sidebar: Top Tennis Stories - Exactly like Football (Desktop only) */}
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

//       {/* Latest Sports News - Full width but inside max-w-7xl */}
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

// export default LiveScores;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, MapPin, Trophy } from 'lucide-react';
import LiveTennisMatches from '../../data/LiveTennisMatches';
import TopTennisStories from '../../data/TopTennisStories.js';
import LatestNews from '../../data/LatestNews.js';

const LiveScores = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('All');
  const liveMatches = LiveTennisMatches.data.LiveMatches;

  const filters = ['All', 'Grand Slam', 'ATP', 'WTA'];

  const filteredMatches = liveMatches.filter(match => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Grand Slam') return match.tournament.category === 'Grand Slam';
    if (selectedFilter === 'ATP') return match.match_type.includes("Men's");
    if (selectedFilter === 'WTA') return match.match_type.includes("Women's");
    return true;
  });

  const getMatchTypeColor = (type) => {
    if (type.includes("Men's")) return 'bg-blue-100 text-blue-700';
    if (type.includes("Women's")) return 'bg-pink-100 text-pink-700';
    return 'bg-purple-100 text-purple-700';
  };

  const renderPlayerInfo = (player, isTeam = false) => {
    if (isTeam && player.team) {
      return (
        <div className="space-y-1">
          {player.team.map((p, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <img
                src={p.profile_image_url || 'https://via.placeholder.com/32'}
                alt={p.short_name}
                className="w-8 h-8 rounded-full object-cover border border-gray-200 flex-shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium">{p.short_name}</span>
                <span className="text-xs text-gray-500">{p.country}</span>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return (
      <div className="flex items-center gap-2">
        <img
          src={player.profile_image_url || 'https://via.placeholder.com/32'}
          alt={player.short_name}
          className="w-8 h-8 rounded-full object-cover border border-gray-200 flex-shrink-0"
        />
        <div className="flex items-center gap-2">
          <span className="font-medium">{player.short_name}</span>
          <span className="text-sm text-gray-500">{player.country}</span>
          {player.seed && (
            <span className="text-xs bg-gray-200 px-1.5 py-0.5 rounded">
              Seed {player.seed}
            </span>
          )}
        </div>
      </div>
    );
  };

  const renderScore = (match) => {
    const { current_set, previous_sets } = match.scorecard;
    const isDoubles = match.match_type.includes('Doubles');

    return (
      <div className="space-y-2">
        <div className="flex gap-2 text-sm">
          {previous_sets.map((set, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[40px]">
              <span className="font-semibold">
                {isDoubles ? set.team1_games : set.player1_games}
              </span>
              <span className="font-semibold">
                {isDoubles ? set.team2_games : set.player2_games}
              </span>
            </div>
          ))}
          <div className="flex flex-col items-center min-w-[40px] bg-green-50 rounded px-2">
            <span className="font-bold text-green-700">
              {isDoubles ? current_set.team1_games : current_set.player1_games}
            </span>
            <span className="font-bold text-green-700">
              {isDoubles ? current_set.team2_games : current_set.player2_games}
            </span>
          </div>
        </div>
        <div className="text-xs text-gray-600">
          Current: {isDoubles ? current_set.team1_points : current_set.player1_points} - {isDoubles ? current_set.team2_points : current_set.player2_points}
        </div>
      </div>
    );
  };

  const handleStoryClick = (id) => {
    navigate(`/details/tennis/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-blue-50">
      {/* Entire page content inside max-w-7xl - exactly like Football page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left Main Section: Live Matches */}
          <div className="lg:col-span-8 space-y-6">
            {/* Hero Header - Identical to Football page */}
            <div className="bg-gradient-to-r from-green-600 via-blue-600 to-indigo-700 text-white rounded-xl shadow-xl p-5 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">🎾 Live Tennis Scores</h1>
                  <p className="text-green-100 text-sm sm:text-base">Real-time match updates from tournaments worldwide</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-semibold">{new Date().toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Filters - Same style as Football */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-5">
              <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-4 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all text-sm ${
                      selectedFilter === filter
                        ? ' bg-gray-100 text-gray-700 hover:bg-gray-200'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Matches List */}
            <div className="space-y-4">
              {filteredMatches.length === 0 ? (
                <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12 text-center">
                  <div className="text-5xl sm:text-6xl mb-4">🎾</div>
                  <p className="text-gray-500 text-base sm:text-lg">No live matches at the moment</p>
                  <p className="text-gray-400 text-sm mt-2">Check back later for updates</p>
                </div>
              ) : (
                filteredMatches.map((match) => (
                  <Link
                    key={match.match_id}
                    to={`/tennis/match/${match.match_id}`}
                    className="block bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Trophy className="h-4 w-4 text-yellow-600" />
                          {match.series_logo_url && (
                            <img
                              src={match.series_logo_url}
                              alt={match.series}
                              className="h-6 w-6 object-contain rounded"
                            />
                          )}
                          <span className="font-semibold text-gray-800">{match.series}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${getMatchTypeColor(match.match_type)}`}>
                            {match.match_type}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {match.venue.name}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {match.schedule.time}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-red-600">LIVE</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        {match.match_type.includes('Doubles') ? (
                          <>
                            {renderPlayerInfo(match.players[0], true)}
                            <div className="my-2 border-t border-gray-200"></div>
                            {renderPlayerInfo(match.players[1], true)}
                          </>
                        ) : (
                          <>
                            {renderPlayerInfo(match.players[0])}
                            <div className="my-2 border-t border-gray-200"></div>
                            {renderPlayerInfo(match.players[1])}
                          </>
                        )}
                      </div>
                      <div className="ml-6">
                        {renderScore(match)}
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          {match.scorecard.current_status}
                        </span>
                        <span className="text-xs text-blue-600 font-medium">
                          View Details →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>

          {/* Right Sidebar: Top Tennis Stories - Exactly like Football (Desktop only) */}
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

      {/* Latest Sports News - Full width but inside max-w-7xl */}
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

export default LiveScores;
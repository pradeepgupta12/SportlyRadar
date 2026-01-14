


// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Trophy, MapPin, Target } from 'lucide-react';
// import LiveTennisMatches from '../../data/LiveTennisMatches';
// import TopTennisStories from '../../data/TopTennisStories.js';
// import LatestNews from '../../data/LatestNews.js';

// const MatchDetail = () => {
//   const { matchId } = useParams();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('scorecard');

//   const match = LiveTennisMatches.data.LiveMatches.find(
//     m => m.match_id === matchId
//   );

//   if (!match) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <p className="text-xl text-gray-600">Match not found</p>
//       </div>
//     );
//   }

//   const isDoubles = match.match_type.includes('Doubles');
//   const stats = match.scorecard.statistics;

//   const tabs = [
//     { id: 'scorecard', label: 'Scorecard' },
//     { id: 'statistics', label: 'Statistics' },
//     { id: 'commentary', label: 'Commentary' },
//     { id: 'info', label: 'Match Info' }
//   ];

//   const handleStoryClick = (id) => {
//     navigate(`/details/tennis/${id}`);
//   };

//   const handleNewsClick = (title) => {
//     navigate(`/news-details/${encodeURIComponent(title)}`);
//   };

//   const renderPlayerHeader = (player, index) => {
//     if (isDoubles && player.team) {
//       return (
//         <div className="text-center">
//           {player.team.map((p, idx) => (
//             <div key={idx} className="flex flex-col items-center mb-2">
//               <img
//                 src={p.profile_image_url || 'https://via.placeholder.com/40'}
//                 alt={p.name}
//                 className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm mb-1"
//               />
//               <h3 className="text-lg font-bold">{p.name}</h3>
//               <p className="text-sm text-gray-200">{p.country}</p>
//             </div>
//           ))}
//         </div>
//       );
//     }
//     return (
//       <div className="text-center">
//         <img
//           src={player.profile_image_url || 'https://via.placeholder.com/40'}
//           alt={player.name}
//           className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md mx-auto mb-2"
//         />
//         <h3 className="text-xl font-bold">{player.name}</h3>
//         <p className="text-sm text-gray-200">{player.country}</p>
//         <p className="text-xs text-gray-300">Rank: {player.ranking}</p>
//       </div>
//     );
//   };

//   const renderScorecard = () => {
//     const { current_set, previous_sets } = match.scorecard;
    
//     return (
//       <div className="space-y-6">
//         {/* Set by Set Score */}
//         <div className="bg-white rounded-lg p-6 shadow-md">
//           <h3 className="text-lg font-bold mb-4">Set Scores</h3>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b">
//                   <th className="text-left py-2 px-4">Player</th>
//                   {previous_sets.map((_, idx) => (
//                     <th key={idx} className="text-center py-2 px-4">Set {idx + 1}</th>
//                   ))}
//                   <th className="text-center py-2 px-4 bg-green-50">Set {current_set.set_number}</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="border-b">
//                   <td className="py-3 px-4 font-medium">
//                     {isDoubles ? match.players[0].team.map(p => p.short_name).join(' / ') : match.players[0].short_name}
//                   </td>
//                   {previous_sets.map((set, idx) => (
//                     <td key={idx} className="text-center py-3 px-4 font-semibold">
//                       {isDoubles ? set.team1_games : set.player1_games}
//                     </td>
//                   ))}
//                   <td className="text-center py-3 px-4 font-bold text-green-700 bg-green-50">
//                     {isDoubles ? current_set.team1_games : current_set.player1_games}
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="py-3 px-4 font-medium">
//                     {isDoubles ? match.players[1].team.map(p => p.short_name).join(' / ') : match.players[1].short_name}
//                   </td>
//                   {previous_sets.map((set, idx) => (
//                     <td key={idx} className="text-center py-3 px-4 font-semibold">
//                       {isDoubles ? set.team2_games : set.player2_games}
//                     </td>
//                   ))}
//                   <td className="text-center py-3 px-4 font-bold text-green-700 bg-green-50">
//                     {isDoubles ? current_set.team2_games : current_set.player2_games}
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Current Game */}
//         <div className="bg-white rounded-lg p-6 shadow-md">
//           <h3 className="text-lg font-bold mb-4">Current Game</h3>
//           <div className="text-center">
//             <p className="text-2xl font-bold mb-2">
//               {isDoubles ? current_set.team1_points : current_set.player1_points} - {isDoubles ? current_set.team2_points : current_set.player2_points}
//             </p>
//             <p className="text-sm text-gray-600">Server: {match.scorecard.server}</p>
//           </div>
//         </div>

//         {/* Highlights */}
//         {match.highlights && match.highlights.length > 0 && (
//           <div className="bg-white rounded-lg p-6 shadow-md">
//             <h3 className="text-lg font-bold mb-4">Match Highlights</h3>
//             <ul className="space-y-2">
//               {match.highlights.map((highlight, idx) => (
//                 <li key={idx} className="flex items-start gap-2">
//                   <Target className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
//                   <span className="text-gray-700">{highlight}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     );
//   };

//   const renderStatistics = () => {
//     if (!stats || isDoubles) {
//       return (
//         <div className="bg-white rounded-lg p-6 shadow-md">
//           <p className="text-gray-600">Detailed statistics not available</p>
//         </div>
//       );
//     }

//     const statItems = [
//       { key: 'aces', label: 'Aces' },
//       { key: 'double_faults', label: 'Double Faults' },
//       { key: 'first_serve_in_percentage', label: '1st Serve %', suffix: '%' },
//       { key: 'first_serve_points_won_percentage', label: '1st Serve Points Won', suffix: '%' },
//       { key: 'second_serve_points_won_percentage', label: '2nd Serve Points Won', suffix: '%' },
//       { key: 'break_points_saved', label: 'Break Points Saved' },
//       { key: 'break_points_converted', label: 'Break Points Converted' },
//       { key: 'winners', label: 'Winners' },
//       { key: 'unforced_errors', label: 'Unforced Errors' }
//     ];

//     return (
//       <div className="bg-white rounded-lg p-6 shadow-md">
//         <h3 className="text-lg font-bold mb-6">Match Statistics</h3>
//         <div className="space-y-4">
//           {statItems.map((stat) => (
//             <div key={stat.key}>
//               <div className="flex justify-between text-sm mb-1">
//                 <span className="font-medium">{stats.player1[stat.key]}{stat.suffix || ''}</span>
//                 <span className="text-gray-600">{stat.label}</span>
//                 <span className="font-medium">{stats.player2[stat.key]}{stat.suffix || ''}</span>
//               </div>
//               <div className="flex gap-2">
//                 <div
//                   className="h-2 bg-blue-600 rounded"
//                   style={{
//                     width: `${(stats.player1[stat.key] / (stats.player1[stat.key] + stats.player2[stat.key])) * 50}%`
//                   }}
//                 ></div>
//                 <div
//                   className="h-2 bg-red-600 rounded"
//                   style={{
//                     width: `${(stats.player2[stat.key] / (stats.player1[stat.key] + stats.player2[stat.key])) * 50}%`
//                   }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   const renderCommentary = () => {
//     return (
//       <div className="bg-white rounded-lg p-6 shadow-md">
//         <h3 className="text-lg font-bold mb-4">Live Commentary</h3>
//         <div className="space-y-4">
//           {match.commentary.map((comment, idx) => (
//             <div key={idx} className="border-l-4 border-blue-600 pl-4">
//               <p className="text-sm font-medium text-gray-600 mb-1">{comment.time}</p>
//               <p className="text-gray-800">{comment.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   const renderMatchInfo = () => {
//     return (
//       <div className="space-y-4">
//         <div className="bg-white rounded-lg p-6 shadow-md">
//           <h3 className="text-lg font-bold mb-4">Tournament Information</h3>
//           <div className="space-y-3">
//             <div className="flex justify-between">
//               <span className="text-gray-600">Tournament:</span>
//               <span className="font-medium">{match.tournament.name}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Category:</span>
//               <span className="font-medium">{match.tournament.category}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Surface:</span>
//               <span className="font-medium">{match.tournament.surface}</span>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg p-6 shadow-md">
//           <h3 className="text-lg font-bold mb-4">Venue Details</h3>
//           <div className="space-y-3">
//             <div className="flex justify-between">
//               <span className="text-gray-600">Stadium:</span>
//               <span className="font-medium">{match.venue.name}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Location:</span>
//               <span className="font-medium">{match.venue.city}, {match.venue.country}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Capacity:</span>
//               <span className="font-medium">{match.venue.capacity?.toLocaleString()}</span>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg p-6 shadow-md">
//           <h3 className="text-lg font-bold mb-4">Match Details</h3>
//           <div className="space-y-3">
//             <div className="flex justify-between">
//               <span className="text-gray-600">Weather:</span>
//               <span className="font-medium">{match.info.weather}</span>
//             </div>
//             {match.info.attendance && (
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Attendance:</span>
//                 <span className="font-medium">{match.info.attendance.toLocaleString()}</span>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-blue-50">
//       {/* Main Grid Layout - Exactly like Football Scorecard */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

//           {/* Left: Match Detail Content */}
//           <div className="lg:col-span-8 space-y-6">

//             {/* Match Header */}
//             <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white rounded-xl shadow-xl p-5 sm:p-8">
//               <div className="flex items-center gap-3 mb-4">
//                 <Trophy className="h-6 w-6 sm:h-8 sm:w-8" />
//                 {match.series_logo_url && (
//                   <img
//                     src={match.series_logo_url}
//                     alt={match.series}
//                     className="h-8 w-8 object-contain rounded bg-white/30 p-1"
//                   />
//                 )}
//                 <h1 className="text-2xl sm:text-3xl font-bold">{match.series}</h1>
//                 <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
//                   {match.match_type} - {match.match_number}
//                 </span>
//               </div>
//               <div className="flex items-center gap-4 text-sm opacity-90">
//                 <span className="flex items-center gap-1">
//                   <MapPin className="h-4 w-4" />
//                   {match.venue.name}
//                 </span>
//                 <span>{match.schedule.date} at {match.schedule.time}</span>
//               </div>
//             </div>

//             {/* Player Headers */}
//             <div className="bg-white rounded-xl shadow-lg p-6">
//               <div className="grid grid-cols-3 gap-4 items-center">
//                 {renderPlayerHeader(match.players[0], 0)}
//                 <div className="text-center">
//                   <div className="flex items-center justify-center gap-2 mb-2">
//                     <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
//                     <span className="text-sm font-medium text-red-600">LIVE</span>
//                   </div>
//                   <p className="text-sm text-gray-600">{match.scorecard.current_status}</p>
//                 </div>
//                 {renderPlayerHeader(match.players[1], 1)}
//               </div>
//             </div>

//             {/* Tabs */}
//             <div className="bg-white rounded-xl shadow-lg p-4">
//               <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
//                 {tabs.map((tab) => (
//                   <button
//                     key={tab.id}
//                     onClick={() => setActiveTab(tab.id)}
//                     className={`px-4 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all text-sm ${
//                       activeTab === tab.id
//                         ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-md'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {tab.label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Tab Content */}
//             <div className="space-y-6">
//               {activeTab === 'scorecard' && renderScorecard()}
//               {activeTab === 'statistics' && renderStatistics()}
//               {activeTab === 'commentary' && renderCommentary()}
//               {activeTab === 'info' && renderMatchInfo()}
//             </div>
//           </div>

//           {/* Right Sidebar - Top Tennis Stories (Desktop) */}
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
//                       <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-green-600 transition-colors">
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
//                 className="mt-6 w-full text-center text-green-600 font-medium hover:underline text-sm"
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
//               className="mt-4 w-full text-center text-green-600 font-medium hover:underline text-sm"
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
//                 className="text-green-600 hover:underline font-medium text-sm sm:text-base"
//               >
//                 View All →
//               </button>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {LatestNews.data.LatestNews.slice(0, 6).map((article) => (
//                 <div
//                   key={article.title}
//                   onClick={() => handleNewsClick(article.title)}
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

// export default MatchDetail;

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Trophy, MapPin, Target } from 'lucide-react';
import SEO from '../../components/SEO.jsx';
import LiveTennisMatches from '../../data/LiveTennisMatches';
import TopTennisStories from '../../data/TopTennisStories.js';
import LatestNews from '../../data/LatestNews.js';

const MatchDetail = () => {
  const { matchId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('scorecard');

  const match = LiveTennisMatches.data.LiveMatches.find(
    m => m.match_id === matchId
  );

  if (!match) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <SEO 
          title="Match Not Found | SportlyRadar"
          description="The requested tennis match could not be found."
        />
        <p className="text-xl text-gray-600">Match not found</p>
      </div>
    );
  }

  const isDoubles = match.match_type.includes('Doubles');
  const stats = match.scorecard.statistics;

  const tabs = [
    { id: 'scorecard', label: 'Scorecard' },
    { id: 'statistics', label: 'Statistics' },
    { id: 'commentary', label: 'Commentary' },
    { id: 'info', label: 'Match Info' }
  ];

  const handleStoryClick = (id) => {
    navigate(`/details/tennis/${id}`);
  };

  const handleNewsClick = (title) => {
    navigate(`/news-details/${encodeURIComponent(title)}`);
  };

  // SEO meta data
  const player1Name = isDoubles 
    ? match.players[0].team.map(p => p.name).join(' & ')
    : match.players[0].name;
  const player2Name = isDoubles 
    ? match.players[1].team.map(p => p.name).join(' & ')
    : match.players[1].name;
  
  const seoTitle = `${player1Name} vs ${player2Name} | ${match.series} | Live Match Details`;
  const seoDescription = `Live match details for ${player1Name} vs ${player2Name} in ${match.series}. Follow live scores, statistics, and commentary.`;
  const seoKeywords = `${player1Name}, ${player2Name}, ${match.series}, tennis match, live scores, match statistics, tennis results`;
  const seoImage = isDoubles 
    ? match.players[0].team[0]?.profile_image_url || 'https://sportlyradar.com/tennis-match-og-image.jpg'
    : match.players[0].profile_image_url || 'https://sportlyradar.com/tennis-match-og-image.jpg';

  const renderPlayerHeader = (player, index) => {
    if (isDoubles && player.team) {
      return (
        <div className="text-center">
          {player.team.map((p, idx) => (
            <div key={idx} className="flex flex-col items-center mb-2">
              <img
                src={p.profile_image_url || 'https://via.placeholder.com/40'}
                alt={p.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm mb-1"
              />
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="text-sm text-gray-200">{p.country}</p>
            </div>
          ))}
        </div>
      );
    }
    return (
      <div className="text-center">
        <img
          src={player.profile_image_url || 'https://via.placeholder.com/40'}
          alt={player.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md mx-auto mb-2"
        />
        <h3 className="text-xl font-bold">{player.name}</h3>
        <p className="text-sm text-gray-200">{player.country}</p>
        <p className="text-xs text-gray-300">Rank: {player.ranking}</p>
      </div>
    );
  };

  const renderScorecard = () => {
    const { current_set, previous_sets } = match.scorecard;
    
    return (
      <div className="space-y-6">
        {/* Set by Set Score */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-bold mb-4">Set Scores</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">Player</th>
                  {previous_sets.map((_, idx) => (
                    <th key={idx} className="text-center py-2 px-4">Set {idx + 1}</th>
                  ))}
                  <th className="text-center py-2 px-4 bg-green-50">Set {current_set.set_number}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">
                    {isDoubles ? match.players[0].team.map(p => p.short_name).join(' / ') : match.players[0].short_name}
                  </td>
                  {previous_sets.map((set, idx) => (
                    <td key={idx} className="text-center py-3 px-4 font-semibold">
                      {isDoubles ? set.team1_games : set.player1_games}
                    </td>
                  ))}
                  <td className="text-center py-3 px-4 font-bold text-green-700 bg-green-50">
                    {isDoubles ? current_set.team1_games : current_set.player1_games}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">
                    {isDoubles ? match.players[1].team.map(p => p.short_name).join(' / ') : match.players[1].short_name}
                  </td>
                  {previous_sets.map((set, idx) => (
                    <td key={idx} className="text-center py-3 px-4 font-semibold">
                      {isDoubles ? set.team2_games : set.player2_games}
                    </td>
                  ))}
                  <td className="text-center py-3 px-4 font-bold text-green-700 bg-green-50">
                    {isDoubles ? current_set.team2_games : current_set.player2_games}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Current Game */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-bold mb-4">Current Game</h3>
          <div className="text-center">
            <p className="text-2xl font-bold mb-2">
              {isDoubles ? current_set.team1_points : current_set.player1_points} - {isDoubles ? current_set.team2_points : current_set.player2_points}
            </p>
            <p className="text-sm text-gray-600">Server: {match.scorecard.server}</p>
          </div>
        </div>

        {/* Highlights */}
        {match.highlights && match.highlights.length > 0 && (
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold mb-4">Match Highlights</h3>
            <ul className="space-y-2">
              {match.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Target className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  const renderStatistics = () => {
    if (!stats || isDoubles) {
      return (
        <div className="bg-white rounded-lg p-6 shadow-md">
          <p className="text-gray-600">Detailed statistics not available</p>
        </div>
      );
    }

    const statItems = [
      { key: 'aces', label: 'Aces' },
      { key: 'double_faults', label: 'Double Faults' },
      { key: 'first_serve_in_percentage', label: '1st Serve %', suffix: '%' },
      { key: 'first_serve_points_won_percentage', label: '1st Serve Points Won', suffix: '%' },
      { key: 'second_serve_points_won_percentage', label: '2nd Serve Points Won', suffix: '%' },
      { key: 'break_points_saved', label: 'Break Points Saved' },
      { key: 'break_points_converted', label: 'Break Points Converted' },
      { key: 'winners', label: 'Winners' },
      { key: 'unforced_errors', label: 'Unforced Errors' }
    ];

    return (
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-lg font-bold mb-6">Match Statistics</h3>
        <div className="space-y-4">
          {statItems.map((stat) => (
            <div key={stat.key}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">{stats.player1[stat.key]}{stat.suffix || ''}</span>
                <span className="text-gray-600">{stat.label}</span>
                <span className="font-medium">{stats.player2[stat.key]}{stat.suffix || ''}</span>
              </div>
              <div className="flex gap-2">
                <div
                  className="h-2 bg-blue-600 rounded"
                  style={{
                    width: `${(stats.player1[stat.key] / (stats.player1[stat.key] + stats.player2[stat.key])) * 50}%`
                  }}
                ></div>
                <div
                  className="h-2 bg-red-600 rounded"
                  style={{
                    width: `${(stats.player2[stat.key] / (stats.player1[stat.key] + stats.player2[stat.key])) * 50}%`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderCommentary = () => {
    return (
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-lg font-bold mb-4">Live Commentary</h3>
        <div className="space-y-4">
          {match.commentary.map((comment, idx) => (
            <div key={idx} className="border-l-4 border-blue-600 pl-4">
              <p className="text-sm font-medium text-gray-600 mb-1">{comment.time}</p>
              <p className="text-gray-800">{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderMatchInfo = () => {
    return (
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-bold mb-4">Tournament Information</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Tournament:</span>
              <span className="font-medium">{match.tournament.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Category:</span>
              <span className="font-medium">{match.tournament.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Surface:</span>
              <span className="font-medium">{match.tournament.surface}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-bold mb-4">Venue Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Stadium:</span>
              <span className="font-medium">{match.venue.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Location:</span>
              <span className="font-medium">{match.venue.city}, {match.venue.country}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Capacity:</span>
              <span className="font-medium">{match.venue.capacity?.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-bold mb-4">Match Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Weather:</span>
              <span className="font-medium">{match.info.weather}</span>
            </div>
            {match.info.attendance && (
              <div className="flex justify-between">
                <span className="text-gray-600">Attendance:</span>
                <span className="font-medium">{match.info.attendance.toLocaleString()}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

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

      {/* Main Grid Layout - Exactly like Football Scorecard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Left: Match Detail Content */}
          <div className="lg:col-span-8 space-y-6">

            {/* Match Header */}
            <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white rounded-xl shadow-xl p-5 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="h-6 w-6 sm:h-8 sm:w-8" />
                {match.series_logo_url && (
                  <img
                    src={match.series_logo_url}
                    alt={match.series}
                    className="h-8 w-8 object-contain rounded bg-white/30 p-1"
                  />
                )}
                <h1 className="text-2xl sm:text-3xl font-bold">{match.series}</h1>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  {match.match_type} - {match.match_number}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm opacity-90">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {match.venue.name}
                </span>
                <span>{match.schedule.date} at {match.schedule.time}</span>
              </div>
            </div>

            {/* Player Headers */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="grid grid-cols-3 gap-4 items-center">
                {renderPlayerHeader(match.players[0], 0)}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-red-600">LIVE</span>
                  </div>
                  <p className="text-sm text-gray-600">{match.scorecard.current_status}</p>
                </div>
                {renderPlayerHeader(match.players[1], 1)}
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-lg p-4">
              <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all text-sm ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {activeTab === 'scorecard' && renderScorecard()}
              {activeTab === 'statistics' && renderStatistics()}
              {activeTab === 'commentary' && renderCommentary()}
              {activeTab === 'info' && renderMatchInfo()}
            </div>
          </div>

          {/* Right Sidebar - Top Tennis Stories (Desktop) */}
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
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-green-600 transition-colors">
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
                className="mt-6 w-full text-center text-green-600 font-medium hover:underline text-sm"
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
              className="mt-4 w-full text-center text-green-600 font-medium hover:underline text-sm"
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
                className="text-green-600 hover:underline font-medium text-sm sm:text-base"
              >
                View All →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {LatestNews.data.LatestNews.slice(0, 6).map((article) => (
                <div
                  key={article.title}
                  onClick={() => handleNewsClick(article.title)}
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

export default MatchDetail;
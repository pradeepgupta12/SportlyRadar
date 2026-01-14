

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ArrowLeft, ChevronRight } from 'lucide-react';
// import hockeyData from '../data/LiveHockeyMatchDetail.js';
// import TopHockeyStories from '../data/TopHockeyStories.js';
// import LatestNews from '../data/LatestNews.js';

// const HockeyScorecard = () => {
//   const { matchId } = useParams();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('info');
//   const [matchData, setMatchData] = useState(null);

//   const handleStoryClick = (id) => {
//     navigate(`/details/hockey/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   useEffect(() => {
//     const match = hockeyData.data.matches.find(m => m.match_id === matchId);
//     setMatchData(match);
//   }, [matchId]);

//   if (!matchData) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <p className="text-gray-500 text-lg">Loading match data...</p>
//       </div>
//     );
//   }

//   const tabs = [
//     { id: 'info', label: 'Info' },
//     { id: 'live', label: 'Live' },
//     { id: 'scorecard', label: 'Scorecard' },
//     { id: 'squads', label: 'Squads' },
//     { id: 'commentary', label: 'Commentary' },
//     { id: 'highlights', label: 'Highlights' }
//   ];

//   const InfoRow = ({ label, value, hasArrow }) => (
//     <div className="flex justify-between items-center p-3 sm:p-4 hover:bg-gray-50">
//       <span className="text-sm sm:text-base font-medium text-gray-700">{label}</span>
//       <div className="flex items-center gap-2">
//         <span className="text-sm sm:text-base text-gray-600 text-right">{value}</span>
//         {hasArrow && <ChevronRight className="w-4 h-4 text-gray-400" />}
//       </div>
//     </div>
//   );

//   const renderInfo = () => (
//     <div className="p-4 sm:p-6">
//       <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">MATCH INFO</h2>
//       <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
//         <InfoRow label="Series" value={matchData.series} />
//         <InfoRow label="Match Type" value={matchData.match_type} />
//         <InfoRow label="Match Number" value={matchData.match_number} />
//         <InfoRow label="Date" value={matchData.info.date} />
//         <InfoRow label="Start Time" value={matchData.info.start_time} />
//         <InfoRow label="Venue" value={`${matchData.info.venue.name}, ${matchData.info.venue.city}`} hasArrow />
//         <InfoRow label="Umpires" value={matchData.info.umpires?.join(', ')} />
//         <InfoRow label="Video Umpire" value={matchData.info.match_officials?.[0]?.replace('Video Umpire: ', '')} />
//       </div>
//     </div>
//   );

//   const renderLive = () => (
//     <div className="p-4 sm:p-6">
//       <h2 className="text-lg font-bold mb-4">LIVE MATCH</h2>
      
//       <div className="bg-red-600 text-white p-4 rounded-lg mb-4">
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex items-center gap-3">
//             <img src={matchData.images.team1_flag} alt={matchData.squads.teams[0].name} className="w-12 h-12 object-contain" />
//             <div>
//               <p className="font-semibold text-lg">{matchData.squads.teams[0].name}</p>
//               <p className="text-xs opacity-90">{matchData.squads.teams[0].short_name}</p>
//             </div>
//           </div>
//           <div className="text-4xl font-bold">{matchData.scorecard.team_stats[0].total_goals}</div>
//         </div>

//         <div className="text-center py-2 text-sm font-semibold">
//           Q{matchData.info.current_quarter} • {matchData.info.time_remaining_in_quarter} remaining
//         </div>

//         <div className="flex justify-between items-center">
//           <div className="text-4xl font-bold">{matchData.scorecard.team_stats[1].total_goals}</div>
//           <div className="flex items-center gap-3">
//             <div className="text-right">
//               <p className="font-semibold text-lg">{matchData.squads.teams[1].name}</p>
//               <p className="text-xs opacity-90">{matchData.squads.teams[1].short_name}</p>
//             </div>
//             <img src={matchData.images.team2_flag} alt={matchData.squads.teams[1].name} className="w-12 h-12 object-contain" />
//           </div>
//         </div>
//       </div>

//       <div className="bg-blue-50 p-4 rounded mb-4">
//         <h3 className="font-semibold mb-2">Quarter Scores</h3>
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
//           {matchData.scorecard.quarters.map((quarter, idx) => (
//             <div key={idx} className="bg-white p-2 rounded text-center">
//               <p className="text-xs text-gray-600">Q{quarter.quarter}</p>
//               <p className="font-bold text-sm">{quarter.score}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="space-y-3">
//         <h3 className="font-semibold">Goal Scorers</h3>
//         {matchData.scorecard.player_stats.goal_scorers.map((scorer, idx) => (
//           <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded">
//             <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold flex-shrink-0">
//               Q{scorer.quarter}
//             </div>
//             <div className="flex-1">
//               <p className="font-semibold text-gray-800">{scorer.name}</p>
//               <p className="text-xs text-gray-600">{scorer.team} • {scorer.type} • {scorer.time}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const renderScorecard = () => (
//     <div className="p-4">
//       <h2 className="text-lg font-bold mb-4">SCORECARD</h2>
      
//       <div className="space-y-6">
//         {matchData.scorecard.quarters.map((quarter, idx) => (
//           <div key={idx} className="border rounded-lg overflow-hidden">
//             <div className="bg-red-600 text-white p-3 font-semibold">
//               Quarter {quarter.quarter} - {quarter.score}
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full text-sm">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="text-left p-2">Team</th>
//                     <th className="p-2 text-center">Goals</th>
//                     <th className="p-2 text-center">Shots</th>
//                     <th className="p-2 text-center">Circle Entries</th>
//                     <th className="p-2 text-center">Penalty Corners</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y">
//                   {quarter.teams.map((team, tidx) => (
//                     <tr key={tidx} className="hover:bg-gray-50">
//                       <td className="p-2 font-medium">{team.team}</td>
//                       <td className="p-2 text-center font-semibold">{team.goals}</td>
//                       <td className="p-2 text-center">{team.shots}</td>
//                       <td className="p-2 text-center">{team.circle_entries}</td>
//                       <td className="p-2 text-center">{team.penalty_corners}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         ))}

//         <div className="mt-6">
//           <h3 className="font-semibold mb-3">Match Statistics</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {matchData.scorecard.team_stats.map((team, idx) => (
//               <div key={idx} className="bg-gray-50 p-4 rounded">
//                 <h4 className="font-semibold mb-3 text-center">{team.team}</h4>
//                 <div className="space-y-2 text-sm">
//                   <div className="flex justify-between">
//                     <span>Total Goals</span>
//                     <span className="font-semibold">{team.total_goals}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Shots</span>
//                     <span className="font-semibold">{team.shots}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Circle Entries</span>
//                     <span className="font-semibold">{team.circle_entries}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Penalty Corners</span>
//                     <span className="font-semibold">
//                       {team.penalty_corners_awarded} ({team.penalty_corners_converted} converted)
//                     </span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Possession</span>
//                     <span className="font-semibold">{team.possession_percentage}%</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Cards</span>
//                     <span className="font-semibold">
//                       <span className="text-green-600">G:{team.green_cards}</span>{' '}
//                       <span className="text-yellow-600">Y:{team.yellow_cards}</span>{' '}
//                       <span className="text-red-600">R:{team.red_cards}</span>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderSquads = () => (
//     <div className="p-4">
//       <h2 className="text-lg font-bold mb-4">SQUADS</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {matchData.squads.teams.map((team, idx) => (
//           <div key={idx}>
//             <div className="bg-red-600 text-white p-3 rounded-t-lg">
//               <h3 className="font-semibold">{team.name}</h3>
//             </div>
//             <div className="bg-gray-50 p-4 rounded-b-lg">
//               <h4 className="font-semibold mb-2 text-sm">Players</h4>
//               <div className="space-y-2">
//                 {team.players.map((player, pidx) => (
//                   <div key={pidx} className="flex items-center justify-between p-2 bg-white rounded">
//                     <div>
//                       <span className="text-sm font-medium">{player.name}</span>
//                       {player.is_captain && <span className="ml-2 text-xs bg-yellow-400 text-black px-2 py-0.5 rounded">C</span>}
//                     </div>
//                     <span className="text-xs text-gray-600">{player.role}</span>
//                   </div>
//                 ))}
//               </div>

//               <h4 className="font-semibold mt-4 mb-2 text-sm">Coaching Staff</h4>
//               <div className="space-y-2">
//                 {team.supporting_staff.map((staff, sidx) => (
//                   <div key={sidx} className="flex items-center justify-between p-2 bg-white rounded">
//                     <span className="text-sm">{staff.name}</span>
//                     <span className="text-xs text-gray-600">{staff.role}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const renderCommentary = () => (
//     <div className="p-4">
//       <h2 className="text-lg font-bold mb-4">COMMENTARY</h2>
//       <div className="space-y-3">
//         {matchData.commentary.map((comment, idx) => (
//           <div key={idx} className="border-l-4 border-red-600 pl-4 py-2 bg-gray-50">
//             <div className="flex items-center gap-2 mb-1">
//               <span className="font-semibold text-red-600">{comment.time}</span>
//               <span className="text-xs text-gray-600">Q{comment.quarter}</span>
//             </div>
//             <p className="text-sm text-gray-700">{comment.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const renderHighlights = () => (
//     <div className="p-4">
//       <h2 className="text-lg font-bold mb-4">HIGHLIGHTS</h2>
//       <div className="space-y-4">
//         {matchData.highlights.map((highlight, idx) => (
//           <div key={idx} className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
//             <div className="flex items-start gap-3">
//               <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold flex-shrink-0">
//                 {idx + 1}
//               </div>
//               <div className="flex-1">
//                 <p className="text-xs text-red-600 font-semibold mb-1">{highlight.time}</p>
//                 <p className="text-sm text-gray-800">{highlight.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'info': return renderInfo();
//       case 'live': return renderLive();
//       case 'scorecard': return renderScorecard();
//       case 'squads': return renderSquads();
//       case 'commentary': return renderCommentary();
//       case 'highlights': return renderHighlights();
//       default: return renderInfo();
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
//       {/* Sticky Header with Tabs */}
//       <div className="bg-white shadow-sm sticky top-0 z-10">
//         <div className="max-w-7xl mx-auto px-4 py-3">
//           <div className="flex items-center gap-3 mb-3">
//             <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full">
//               <ArrowLeft className="w-5 h-5" />
//             </button>
//             <div className="flex-1 min-w-0">
//               <h1 className="text-base sm:text-lg font-bold truncate">
//                 {matchData.squads.teams[0].name} vs {matchData.squads.teams[1].name} - {matchData.series}
//               </h1>
//               <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-gray-600 mt-1">
//                 <span>{matchData.match_number}</span>
//                 <span>•</span>
//                 <span>{matchData.info.venue.name}, {matchData.info.venue.city}</span>
//                 <span>•</span>
//                 <span>{matchData.info.date}</span>
//               </div>
//             </div>
//           </div>

//           <div className="flex gap-1 overflow-x-auto scrollbar-hide">
//             {tabs.map(tab => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
//                   activeTab === tab.id
//                     ? 'text-red-600 border-b-2 border-red-600'
//                     : 'text-gray-600 hover:text-gray-900'
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Grid Layout - Same as Live Scores Page */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
//           {/* Left: Match Details Content */}
//           <div className="lg:col-span-8 space-y-6">
//             {renderContent()}
//           </div>

//           {/* Right Sidebar: Top Hockey Stories (Large Screens Only) */}
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

//       {/* Latest Sports News Section (All Devices) */}
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

// export default HockeyScorecard;


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ArrowLeft, ChevronRight } from 'lucide-react';
// import hockeyData from '../data/LiveHockeyMatchDetail.js';
// import TopHockeyStories from '../data/TopHockeyStories.js';
// import LatestNews from '../data/LatestNews.js';

// const HockeyScorecard = () => {
//   const { matchId } = useParams();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('info');
//   const [matchData, setMatchData] = useState(null);

//   const handleStoryClick = (id) => {
//     navigate(`/details/hockey/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   useEffect(() => {
//     const match = hockeyData.data.matches.find(m => m.match_id === matchId);
//     setMatchData(match);
//   }, [matchId]);

//   if (!matchData) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <p className="text-gray-500 text-lg">Loading match data...</p>
//       </div>
//     );
//   }

//   const tabs = [
//     { id: 'info', label: 'Info' },
//     { id: 'live', label: 'Live' },
//     { id: 'scorecard', label: 'Scorecard' },
//     { id: 'squads', label: 'Squads' },
//     { id: 'commentary', label: 'Commentary' },
//     { id: 'highlights', label: 'Highlights' }
//   ];

//   const InfoRow = ({ label, value, hasArrow }) => (
//     <div className="flex justify-between items-center p-3 sm:p-4 hover:bg-gray-50">
//       <span className="text-sm sm:text-base font-medium text-gray-700">{label}</span>
//       <div className="flex items-center gap-2">
//         <span className="text-sm sm:text-base text-gray-600 text-right">{value}</span>
//         {hasArrow && <ChevronRight className="w-4 h-4 text-gray-400" />}
//       </div>
//     </div>
//   );

//   const renderInfo = () => (
//     <div className="p-4 sm:p-6">
//       <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">MATCH INFO</h2>
//       <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
//         <InfoRow label="Series" value={matchData.series} />
//         <InfoRow label="Match Type" value={matchData.match_type} />
//         <InfoRow label="Match Number" value={matchData.match_number} />
//         <InfoRow label="Date" value={matchData.info.date} />
//         <InfoRow label="Start Time" value={matchData.info.start_time} />
//         <InfoRow label="Venue" value={`${matchData.info.venue.name}, ${matchData.info.venue.city}`} hasArrow />
//         <InfoRow label="Umpires" value={matchData.info.umpires?.join(', ')} />
//         <InfoRow label="Video Umpire" value={matchData.info.match_officials?.[0]?.replace('Video Umpire: ', '')} />
//       </div>
//     </div>
//   );

//   const renderLive = () => (
//     <div className="p-4 sm:p-6">
//       <h2 className="text-lg font-bold mb-4">LIVE MATCH</h2>
      
//       <div className="bg-red-600 text-white p-4 rounded-lg mb-4">
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex items-center gap-3">
//             <img 
//               src={matchData.squads.teams[0].logo_url} 
//               alt={matchData.squads.teams[0].name} 
//               className="w-12 h-12 object-contain rounded-full bg-white p-1" 
//               onError={(e) => { e.target.src = matchData.images.team1_flag; }}
//             />
//             <div>
//               <p className="font-semibold text-lg">{matchData.squads.teams[0].name}</p>
//               <p className="text-xs opacity-90">{matchData.squads.teams[0].short_name}</p>
//             </div>
//           </div>
//           <div className="text-4xl font-bold">{matchData.scorecard.team_stats[0].total_goals}</div>
//         </div>

//         <div className="text-center py-2 text-sm font-semibold">
//           Q{matchData.info.current_quarter} • {matchData.info.time_remaining_in_quarter} remaining
//         </div>

//         <div className="flex justify-between items-center">
//           <div className="text-4xl font-bold">{matchData.scorecard.team_stats[1].total_goals}</div>
//           <div className="flex items-center gap-3">
//             <div className="text-right">
//               <p className="font-semibold text-lg">{matchData.squads.teams[1].name}</p>
//               <p className="text-xs opacity-90">{matchData.squads.teams[1].short_name}</p>
//             </div>
//             <img 
//               src={matchData.squads.teams[1].logo_url} 
//               alt={matchData.squads.teams[1].name} 
//               className="w-12 h-12 object-contain rounded-full bg-white p-1" 
//               onError={(e) => { e.target.src = matchData.images.team2_flag; }}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="bg-blue-50 p-4 rounded mb-4">
//         <h3 className="font-semibold mb-2">Quarter Scores</h3>
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
//           {matchData.scorecard.quarters.map((quarter, idx) => (
//             <div key={idx} className="bg-white p-2 rounded text-center">
//               <p className="text-xs text-gray-600">Q{quarter.quarter}</p>
//               <p className="font-bold text-sm">{quarter.score}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="space-y-3">
//         <h3 className="font-semibold">Goal Scorers</h3>
//         {matchData.scorecard.player_stats.goal_scorers.map((scorer, idx) => (
//           <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded">
//             <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold flex-shrink-0">
//               Q{scorer.quarter}
//             </div>
//             <div className="flex-1">
//               <p className="font-semibold text-gray-800">{scorer.name}</p>
//               <p className="text-xs text-gray-600">{scorer.team} • {scorer.type} • {scorer.time}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const renderScorecard = () => (
//     <div className="p-4">
//       <h2 className="text-lg font-bold mb-4">SCORECARD</h2>
      
//       <div className="space-y-6">
//         {matchData.scorecard.quarters.map((quarter, idx) => (
//           <div key={idx} className="border rounded-lg overflow-hidden">
//             <div className="bg-red-600 text-white p-3 font-semibold">
//               Quarter {quarter.quarter} - {quarter.score}
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full text-sm">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="text-left p-2">Team</th>
//                     <th className="p-2 text-center">Goals</th>
//                     <th className="p-2 text-center">Shots</th>
//                     <th className="p-2 text-center">Circle Entries</th>
//                     <th className="p-2 text-center">Penalty Corners</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y">
//                   {quarter.teams.map((team, tidx) => (
//                     <tr key={tidx} className="hover:bg-gray-50">
//                       <td className="p-2 font-medium flex items-center gap-2">
//                         <img 
//                           src={matchData.squads.teams[tidx].logo_url} 
//                           alt={team.team} 
//                           className="w-6 h-6 object-contain rounded-full bg-white p-0.5" 
//                           onError={(e) => { e.target.src = matchData.images[`team${tidx+1}_flag`]; }}
//                         />
//                         {team.team}
//                       </td>
//                       <td className="p-2 text-center font-semibold">{team.goals}</td>
//                       <td className="p-2 text-center">{team.shots}</td>
//                       <td className="p-2 text-center">{team.circle_entries}</td>
//                       <td className="p-2 text-center">{team.penalty_corners}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         ))}

//         <div className="mt-6">
//           <h3 className="font-semibold mb-3">Match Statistics</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {matchData.scorecard.team_stats.map((team, idx) => (
//               <div key={idx} className="bg-gray-50 p-4 rounded">
//                 <h4 className="font-semibold mb-3 text-center flex items-center justify-center gap-2">
//                   <img 
//                     src={matchData.squads.teams[idx].logo_url} 
//                     alt={team.team} 
//                     className="w-8 h-8 object-contain rounded-full bg-white p-1" 
//                     onError={(e) => { e.target.src = matchData.images[`team${idx+1}_flag`]; }}
//                   />
//                   {team.team}
//                 </h4>
//                 <div className="space-y-2 text-sm">
//                   <div className="flex justify-between">
//                     <span>Total Goals</span>
//                     <span className="font-semibold">{team.total_goals}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Shots</span>
//                     <span className="font-semibold">{team.shots}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Circle Entries</span>
//                     <span className="font-semibold">{team.circle_entries}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Penalty Corners</span>
//                     <span className="font-semibold">
//                       {team.penalty_corners_awarded} ({team.penalty_corners_converted} converted)
//                     </span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Possession</span>
//                     <span className="font-semibold">{team.possession_percentage}%</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Cards</span>
//                     <span className="font-semibold">
//                       <span className="text-green-600">G:{team.green_cards}</span>{' '}
//                       <span className="text-yellow-600">Y:{team.yellow_cards}</span>{' '}
//                       <span className="text-red-600">R:{team.red_cards}</span>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderSquads = () => (
//     <div className="p-4">
//       <h2 className="text-lg font-bold mb-4">SQUADS</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {matchData.squads.teams.map((team, idx) => (
//           <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
//             <div className="bg-red-600 text-white p-4 flex items-center gap-3">
//               <img 
//                 src={team.logo_url} 
//                 alt={team.name} 
//                 className="w-12 h-12 object-contain rounded-full bg-white p-1" 
//                 onError={(e) => { e.target.src = matchData.images[`team${idx+1}_flag`]; }}
//               />
//               <h3 className="font-semibold text-lg">{team.name}</h3>
//             </div>
//             <div className="p-4">
//               <h4 className="font-semibold mb-3 text-sm border-b pb-2">Playing XI / Players</h4>
//               <div className="space-y-3">
//                 {team.players.map((player, pidx) => (
//                   <div key={pidx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
//                     <img 
//                       src={player.avatar_url} 
//                       alt={player.name} 
//                       className="w-10 h-10 rounded-full object-cover border-2 border-gray-200" 
//                     />
//                     <div className="flex-1">
//                       <div className="flex items-center gap-2">
//                         <span className="font-medium text-gray-800">{player.name}</span>
//                         {player.is_captain && <span className="text-xs bg-yellow-400 text-black px-2 py-0.5 rounded-full font-bold">C</span>}
//                       </div>
//                       <p className="text-xs text-gray-600">{player.role}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <h4 className="font-semibold mt-6 mb-3 text-sm border-b pb-2">Benched Players</h4>
//               <div className="space-y-3">
//                 {team.benched_players.map((player, bidx) => (
//                   <div key={bidx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
//                     <img 
//                       src={player.avatar_url} 
//                       alt={player.name} 
//                       className="w-10 h-10 rounded-full object-cover border-2 border-gray-200" 
//                     />
//                     <div className="flex-1">
//                       <span className="font-medium text-gray-800">{player.name}</span>
//                       <p className="text-xs text-gray-600">{player.role}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <h4 className="font-semibold mt-6 mb-3 text-sm border-b pb-2">Coaching Staff</h4>
//               <div className="space-y-3">
//                 {team.supporting_staff.map((staff, sidx) => (
//                   <div key={sidx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
//                     <img 
//                       src={staff.avatar_url} 
//                       alt={staff.name} 
//                       className="w-10 h-10 rounded-full object-cover border-2 border-gray-200" 
//                     />
//                     <div className="flex-1">
//                       <span className="font-medium text-gray-800">{staff.name}</span>
//                       <p className="text-xs text-gray-600">{staff.role}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const renderCommentary = () => (
//     <div className="p-4">
//       <h2 className="text-lg font-bold mb-4">COMMENTARY</h2>
//       <div className="space-y-3">
//         {matchData.commentary.map((comment, idx) => (
//           <div key={idx} className="border-l-4 border-red-600 pl-4 py-2 bg-gray-50">
//             <div className="flex items-center gap-2 mb-1">
//               <span className="font-semibold text-red-600">{comment.time}</span>
//               <span className="text-xs text-gray-600">Q{comment.quarter}</span>
//             </div>
//             <p className="text-sm text-gray-700">{comment.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const renderHighlights = () => (
//     <div className="p-4">
//       <h2 className="text-lg font-bold mb-4">HIGHLIGHTS</h2>
//       <div className="space-y-4">
//         {matchData.highlights.map((highlight, idx) => (
//           <div key={idx} className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
//             <div className="flex items-start gap-3">
//               <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold flex-shrink-0">
//                 {idx + 1}
//               </div>
//               <div className="flex-1">
//                 <p className="text-xs text-red-600 font-semibold mb-1">{highlight.time}</p>
//                 <p className="text-sm text-gray-800">{highlight.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'info': return renderInfo();
//       case 'live': return renderLive();
//       case 'scorecard': return renderScorecard();
//       case 'squads': return renderSquads();
//       case 'commentary': return renderCommentary();
//       case 'highlights': return renderHighlights();
//       default: return renderInfo();
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
//       {/* Sticky Header with Tabs */}
//       <div className="bg-white shadow-sm    z-10">
//         <div className="max-w-7xl mx-auto px-4 py-3">
//           <div className="flex items-center gap-3 mb-3">
//             <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full">
//               <ArrowLeft className="w-5 h-5" />
//             </button>
//             <div className="flex-1 min-w-0">
//               <h1 className="text-base sm:text-lg font-bold truncate">
//                 {matchData.squads.teams[0].name} vs {matchData.squads.teams[1].name} - {matchData.series}
//               </h1>
//               <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-gray-600 mt-1">
//                 <span>{matchData.match_number}</span>
//                 <span>•</span>
//                 <span>{matchData.info.venue.name}, {matchData.info.venue.city}</span>
//                 <span>•</span>
//                 <span>{matchData.info.date}</span>
//               </div>
//             </div>
//           </div>

//           <div className="flex gap-1 overflow-x-auto scrollbar-hide">
//             {tabs.map(tab => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
//                   activeTab === tab.id
//                     ? 'text-red-600 border-b-2 border-red-600'
//                     : 'text-gray-600 hover:text-gray-900'
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Grid Layout - Same as Live Scores Page */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
//           {/* Left: Match Details Content */}
//           <div className="lg:col-span-8 space-y-6">
//             {renderContent()}
//           </div>

//           {/* Right Sidebar: Top Hockey Stories (Large Screens Only) */}
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

//       {/* Latest Sports News Section (All Devices) */}
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

// export default HockeyScorecard;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import hockeyData from '../data/LiveHockeyMatchDetail.js';
import TopHockeyStories from '../data/TopHockeyStories.js';
import LatestNews from '../data/LatestNews.js';
import SEO from '../components/SEO.jsx';

const HockeyScorecard = () => {
  const { matchId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('info');
  const [matchData, setMatchData] = useState(null);

  const handleStoryClick = (id) => {
    navigate(`/details/hockey/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  useEffect(() => {
    const match = hockeyData.data.matches.find(m => m.match_id === matchId);
    setMatchData(match);
  }, [matchId]);

  if (!matchData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading match data...</p>
      </div>
    );
  }

  const tabs = [
    { id: 'info', label: 'Info' },
    { id: 'live', label: 'Live' },
    { id: 'scorecard', label: 'Scorecard' },
    { id: 'squads', label: 'Squads' },
    { id: 'commentary', label: 'Commentary' },
    { id: 'highlights', label: 'Highlights' }
  ];

  const InfoRow = ({ label, value, hasArrow }) => (
    <div className="flex justify-between items-center p-3 sm:p-4 hover:bg-gray-50">
      <span className="text-sm sm:text-base font-medium text-gray-700">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm sm:text-base text-gray-600 text-right">{value}</span>
        {hasArrow && <ChevronRight className="w-4 h-4 text-gray-400" />}
      </div>
    </div>
  );

  const renderInfo = () => (
    <div className="p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">MATCH INFO</h2>
      <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
        <InfoRow label="Series" value={matchData.series} />
        <InfoRow label="Match Type" value={matchData.match_type} />
        <InfoRow label="Match Number" value={matchData.match_number} />
        <InfoRow label="Date" value={matchData.info.date} />
        <InfoRow label="Start Time" value={matchData.info.start_time} />
        <InfoRow label="Venue" value={`${matchData.info.venue.name}, ${matchData.info.venue.city}`} hasArrow />
        <InfoRow label="Umpires" value={matchData.info.umpires?.join(', ')} />
        <InfoRow label="Video Umpire" value={matchData.info.match_officials?.[0]?.replace('Video Umpire: ', '')} />
      </div>
    </div>
  );

  const renderLive = () => (
    <div className="p-4 sm:p-6">
      <h2 className="text-lg font-bold mb-4">LIVE MATCH</h2>
      
      <div className="bg-red-600 text-white p-4 rounded-lg mb-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <img 
              src={matchData.squads.teams[0].logo_url} 
              alt={matchData.squads.teams[0].name} 
              className="w-12 h-12 object-contain rounded-full bg-white p-1" 
              onError={(e) => { e.target.src = matchData.images.team1_flag; }}
            />
            <div>
              <p className="font-semibold text-lg">{matchData.squads.teams[0].name}</p>
              <p className="text-xs opacity-90">{matchData.squads.teams[0].short_name}</p>
            </div>
          </div>
          <div className="text-4xl font-bold">{matchData.scorecard.team_stats[0].total_goals}</div>
        </div>

        <div className="text-center py-2 text-sm font-semibold">
          Q{matchData.info.current_quarter} • {matchData.info.time_remaining_in_quarter} remaining
        </div>

        <div className="flex justify-between items-center">
          <div className="text-4xl font-bold">{matchData.scorecard.team_stats[1].total_goals}</div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="font-semibold text-lg">{matchData.squads.teams[1].name}</p>
              <p className="text-xs opacity-90">{matchData.squads.teams[1].short_name}</p>
            </div>
            <img 
              src={matchData.squads.teams[1].logo_url} 
              alt={matchData.squads.teams[1].name} 
              className="w-12 h-12 object-contain rounded-full bg-white p-1" 
              onError={(e) => { e.target.src = matchData.images.team2_flag; }}
            />
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded mb-4">
        <h3 className="font-semibold mb-2">Quarter Scores</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {matchData.scorecard.quarters.map((quarter, idx) => (
            <div key={idx} className="bg-white p-2 rounded text-center">
              <p className="text-xs text-gray-600">Q{quarter.quarter}</p>
              <p className="font-bold text-sm">{quarter.score}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold">Goal Scorers</h3>
        {matchData.scorecard.player_stats.goal_scorers.map((scorer, idx) => (
          <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded">
            <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold flex-shrink-0">
              Q{scorer.quarter}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{scorer.name}</p>
              <p className="text-xs text-gray-600">{scorer.team} • {scorer.type} • {scorer.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderScorecard = () => (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">SCORECARD</h2>
      
      <div className="space-y-6">
        {matchData.scorecard.quarters.map((quarter, idx) => (
          <div key={idx} className="border rounded-lg overflow-hidden">
            <div className="bg-red-600 text-white p-3 font-semibold">
              Quarter {quarter.quarter} - {quarter.score}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-2">Team</th>
                    <th className="p-2 text-center">Goals</th>
                    <th className="p-2 text-center">Shots</th>
                    <th className="p-2 text-center">Circle Entries</th>
                    <th className="p-2 text-center">Penalty Corners</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {quarter.teams.map((team, tidx) => (
                    <tr key={tidx} className="hover:bg-gray-50">
                      <td className="p-2 font-medium flex items-center gap-2">
                        <img 
                          src={matchData.squads.teams[tidx].logo_url} 
                          alt={team.team} 
                          className="w-6 h-6 object-contain rounded-full bg-white p-0.5" 
                          onError={(e) => { e.target.src = matchData.images[`team${tidx+1}_flag`]; }}
                        />
                        {team.team}
                      </td>
                      <td className="p-2 text-center font-semibold">{team.goals}</td>
                      <td className="p-2 text-center">{team.shots}</td>
                      <td className="p-2 text-center">{team.circle_entries}</td>
                      <td className="p-2 text-center">{team.penalty_corners}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <div className="mt-6">
          <h3 className="font-semibold mb-3">Match Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {matchData.scorecard.team_stats.map((team, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-3 text-center flex items-center justify-center gap-2">
                  <img 
                    src={matchData.squads.teams[idx].logo_url} 
                    alt={team.team} 
                    className="w-8 h-8 object-contain rounded-full bg-white p-1" 
                    onError={(e) => { e.target.src = matchData.images[`team${idx+1}_flag`]; }}
                  />
                  {team.team}
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Total Goals</span>
                    <span className="font-semibold">{team.total_goals}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shots</span>
                    <span className="font-semibold">{team.shots}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Circle Entries</span>
                    <span className="font-semibold">{team.circle_entries}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Penalty Corners</span>
                    <span className="font-semibold">
                      {team.penalty_corners_awarded} ({team.penalty_corners_converted} converted)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Possession</span>
                    <span className="font-semibold">{team.possession_percentage}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cards</span>
                    <span className="font-semibold">
                      <span className="text-green-600">G:{team.green_cards}</span>{' '}
                      <span className="text-yellow-600">Y:{team.yellow_cards}</span>{' '}
                      <span className="text-red-600">R:{team.red_cards}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSquads = () => (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">SQUADS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {matchData.squads.teams.map((team, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-red-600 text-white p-4 flex items-center gap-3">
              <img 
                src={team.logo_url} 
                alt={team.name} 
                className="w-12 h-12 object-contain rounded-full bg-white p-1" 
                onError={(e) => { e.target.src = matchData.images[`team${idx+1}_flag`]; }}
              />
              <h3 className="font-semibold text-lg">{team.name}</h3>
            </div>
            <div className="p-4">
              <h4 className="font-semibold mb-3 text-sm border-b pb-2">Playing XI / Players</h4>
              <div className="space-y-3">
                {team.players.map((player, pidx) => (
                  <div key={pidx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <img 
                      src={player.avatar_url} 
                      alt={player.name} 
                      className="w-10 h-10 rounded-full object-cover border-2 border-gray-200" 
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-800">{player.name}</span>
                        {player.is_captain && <span className="text-xs bg-yellow-400 text-black px-2 py-0.5 rounded-full font-bold">C</span>}
                      </div>
                      <p className="text-xs text-gray-600">{player.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h4 className="font-semibold mt-6 mb-3 text-sm border-b pb-2">Benched Players</h4>
              <div className="space-y-3">
                {team.benched_players.map((player, bidx) => (
                  <div key={bidx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <img 
                      src={player.avatar_url} 
                      alt={player.name} 
                      className="w-10 h-10 rounded-full object-cover border-2 border-gray-200" 
                    />
                    <div className="flex-1">
                      <span className="font-medium text-gray-800">{player.name}</span>
                      <p className="text-xs text-gray-600">{player.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h4 className="font-semibold mt-6 mb-3 text-sm border-b pb-2">Coaching Staff</h4>
              <div className="space-y-3">
                {team.supporting_staff.map((staff, sidx) => (
                  <div key={sidx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <img 
                      src={staff.avatar_url} 
                      alt={staff.name} 
                      className="w-10 h-10 rounded-full object-cover border-2 border-gray-200" 
                    />
                    <div className="flex-1">
                      <span className="font-medium text-gray-800">{staff.name}</span>
                      <p className="text-xs text-gray-600">{staff.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCommentary = () => (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">COMMENTARY</h2>
      <div className="space-y-3">
        {matchData.commentary.map((comment, idx) => (
          <div key={idx} className="border-l-4 border-red-600 pl-4 py-2 bg-gray-50">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-red-600">{comment.time}</span>
              <span className="text-xs text-gray-600">Q{comment.quarter}</span>
            </div>
            <p className="text-sm text-gray-700">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderHighlights = () => (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">HIGHLIGHTS</h2>
      <div className="space-y-4">
        {matchData.highlights.map((highlight, idx) => (
          <div key={idx} className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <div className="flex items-start gap-3">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold flex-shrink-0">
                {idx + 1}
              </div>
              <div className="flex-1">
                <p className="text-xs text-red-600 font-semibold mb-1">{highlight.time}</p>
                <p className="text-sm text-gray-800">{highlight.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'info': return renderInfo();
      case 'live': return renderLive();
      case 'scorecard': return renderScorecard();
      case 'squads': return renderSquads();
      case 'commentary': return renderCommentary();
      case 'highlights': return renderHighlights();
      default: return renderInfo();
    }
  };

  // Generate dynamic SEO metadata
  const seoTitle = `${matchData.squads.teams[0].name} vs ${matchData.squads.teams[1].name} - Hockey Scorecard | ${matchData.series} | SportlyRadar`;
  const seoDescription = `Live hockey match between ${matchData.squads.teams[0].name} and ${matchData.squads.teams[1].name}. Get real-time scores, quarter updates, player stats, and match highlights from ${matchData.series}.`;
  const seoKeywords = `${matchData.squads.teams[0].name}, ${matchData.squads.teams[1].name}, hockey scorecard, ${matchData.series}, live hockey scores, quarter scores, player stats, match highlights, hockey match`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* SEO Component with dynamic match data */}
      <SEO 
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonical={window.location.href}
        image={matchData.squads.teams[0].logo_url || matchData.images.team1_flag || "https://sportlyradar.com/hockey-scorecard-og-image.jpg"}
        url={window.location.href}
        type="article"
        publishedTime={new Date(matchData.info.date).toISOString()}
      />
      
      {/* Sticky Header with Tabs */}
      <div className="bg-white shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3 mb-3">
            <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex-1 min-w-0">
              <h1 className="text-base sm:text-lg font-bold truncate">
                {matchData.squads.teams[0].name} vs {matchData.squads.teams[1].name} - {matchData.series}
              </h1>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-gray-600 mt-1">
                <span>{matchData.match_number}</span>
                <span>•</span>
                <span>{matchData.info.venue.name}, {matchData.info.venue.city}</span>
                <span>•</span>
                <span>{matchData.info.date}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-1 overflow-x-auto scrollbar-hide">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid Layout - Same as Live Scores Page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left: Match Details Content */}
          <div className="lg:col-span-8 space-y-6">
            {renderContent()}
          </div>

          {/* Right Sidebar: Top Hockey Stories (Large Screens Only) */}
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

      {/* Latest Sports News Section (All Devices) */}
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

export default HockeyScorecard;
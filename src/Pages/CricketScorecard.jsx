


// // src/Pages/CricketScorecard.jsx
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ArrowLeft, ChevronRight } from 'lucide-react';

// import cricketData from '../data/CricketData.json';
// import TopStories from '../data/TopStories.js';
// import LatestNews from '../data/LatestNews.js';

// const CricketScorecard = () => {
//   const { matchId } = useParams();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('info');
//   const [matchData, setMatchData] = useState(null);

//   useEffect(() => {
//     const match = cricketData.live_matches.find((m) => m.match_id === matchId);
//     setMatchData(match || null);
//   }, [matchId]);

//   if (!matchData) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <p className="text-gray-500 text-lg">Match not found or loading...</p>
//       </div>
//     );
//   }

//   const getTeamNames = () => {
//     const squadKeys = Object.keys(matchData.squads || {});
//     return {
//       team1: squadKeys[0] || 'Team 1',
//       team2: squadKeys[1] || 'Team 2',
//     };
//   };

//   const teams = getTeamNames();

//   const tabs = [
//     { id: 'info', label: 'Info' },
//     { id: 'live', label: 'Live' },
//     { id: 'scorecard', label: 'Scorecard' },
//     { id: 'squads', label: 'Squads' },
//     { id: 'overs', label: 'Overs' },
//     { id: 'highlights', label: 'Highlights' },
//   ];

//   const InfoRow = ({ label, value, hasArrow = false }) => (
//     <div className="flex justify-between items-center p-3 sm:p-4 hover:bg-gray-50 border-b last:border-b-0">
//       <span className="text-sm sm:text-base font-medium text-gray-700">{label}</span>
//       <div className="flex items-center gap-2">
//         <span className="text-sm sm:text-base text-gray-600 text-right">{value || 'N/A'}</span>
//         {hasArrow && <ChevronRight className="w-4 h-4 text-gray-400" />}
//       </div>
//     </div>
//   );

//   const handleStoryClick = (id) => navigate(`/details/cricket/${id}`);
//   const handleNewsCardClick = (articleTitle) =>
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);

//   // ────────────────────────────────────────────────
//   // Render Functions for Tabs
//   // ────────────────────────────────────────────────

//   const renderInfo = () => (
//     <div className="p-4 sm:p-6 bg-white rounded-xl shadow-sm">
//       <h2 className="text-xl font-bold mb-5 text-gray-800">MATCH INFO</h2>
//       <div className="divide-y divide-gray-200">
//         <InfoRow
//           label="Match"
//           value={`${teams.team1} vs ${teams.team2} • ${matchData.info.match_number} • ${matchData.info.series}`}
//         />
//         <InfoRow label="Series" value={matchData.info.series} hasArrow />
//         <InfoRow label="Date" value={matchData.info.date} />
//         <InfoRow label="Toss" value={matchData.info.toss} />
//         <InfoRow
//           label="Venue"
//           value={`${matchData.info.venue?.name || 'N/A'}, ${matchData.info.venue?.city || 'N/A'}`}
//           hasArrow
//         />
//       </div>

//       <div className="mt-6 space-y-6">
//         {[teams.team1, teams.team2].map((team) => (
//           <div key={team} className="bg-gray-50 p-4 rounded-lg">
//             <h3 className="font-semibold text-gray-800 mb-3">{team} Squad</h3>
//             <div className="space-y-3">
//               <div>
//                 <p className="text-sm font-medium text-gray-700 mb-1">Playing XI</p>
//                 <p className="text-sm text-gray-600">
//                   {matchData.squads?.[team]?.playing_xi?.map((p) => p.name).join(', ') || 'N/A'}
//                 </p>
//               </div>
//               {matchData.squads?.[team]?.bench?.length > 0 && (
//                 <div>
//                   <p className="text-sm font-medium text-gray-700 mb-1">Bench</p>
//                   <p className="text-sm text-gray-600">
//                     {matchData.squads[team].bench.map((p) => p.name).join(', ')}
//                   </p>
//                 </div>
//               )}
//               <div>
//                 <p className="text-sm font-medium text-gray-700 mb-1">Support Staff</p>
//                 <p className="text-sm text-gray-600">
//                   {matchData.squads?.[team]?.support_staff?.join(', ') || 'N/A'}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const renderLive = () => {
//     const commentary = matchData.full_commentary_summary || {};
//     return (
//       <div className="p-4 sm:p-6 bg-white rounded-xl shadow-sm">
//         <h2 className="text-xl font-bold mb-5 text-gray-800">LIVE COMMENTARY</h2>
//         <div className="space-y-5">
//           <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
//             <p className="font-semibold text-blue-800">{matchData.info.current_status || 'Match in progress'}</p>
//             <p className="text-sm text-blue-600 mt-1">
//               Day {matchData.info.day || '?'} • {matchData.info.session || 'N/A'}
//             </p>
//           </div>

//           {commentary['1st_innings'] && (
//             <div className="bg-gray-50 p-4 rounded-lg">
//               <h3 className="font-semibold mb-2">1st Innings Summary</h3>
//               <p className="text-sm text-gray-700">{commentary['1st_innings']}</p>
//             </div>
//           )}

//           {commentary['2nd_innings'] && (
//             <div className="bg-gray-50 p-4 rounded-lg">
//               <h3 className="font-semibold mb-2">2nd Innings Summary</h3>
//               <p className="text-sm text-gray-700">{commentary['2nd_innings']}</p>
//             </div>
//           )}

//           <div className="bg-green-50 p-4 rounded-lg">
//             <h3 className="font-semibold text-green-800 mb-2">Current Status</h3>
//             <p className="text-sm text-gray-700">{matchData.overs_summary || 'No summary available'}</p>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderScorecard = () => {
//     const innings1 = matchData.scorecard?.['1st_innings'];
//     const innings2 = matchData.scorecard?.['2nd_innings_current'] || matchData.scorecard?.['1st_innings_current'];

//     const findBattingStats = (playerName, battingArray) => {
//       if (!battingArray || !Array.isArray(battingArray)) return null;
//       const cleanName = playerName.replace(/\s+\d+\*?$/, '').trim();
//       return battingArray.find(p => {
//         const battingName = p.name.trim();
//         return battingName === cleanName || battingName.includes(cleanName);
//       });
//     };

//     const renderPlayerRow = (playerObj, battingArray, isNotOut = false) => {
//       if (!playerObj?.name) return null;
//       const text = playerObj.name.trim();
//       const parts = text.split(/\s+/);
//       const runsStr = parts.pop() || '';
//       const name = parts.join(' ');
//       const notOut = runsStr.includes('*');
//       const runs = runsStr.replace('*', '');
//       const stats = findBattingStats(playerObj.name, battingArray);

//       return (
//         <tr key={name} className={isNotOut ? "bg-green-50/30 hover:bg-green-50" : "hover:bg-gray-50"}>
//           <td className="p-3">
//             <div className="flex items-center gap-2.5">
//               <img
//                 src={playerObj.avatar || 'https://via.placeholder.com/36'}
//                 alt={name}
//                 className="w-9 h-9 rounded-full object-cover border border-gray-200 flex-shrink-0"
//                 onError={(e) => (e.target.src = 'https://via.placeholder.com/36')}
//               />
//               <div className="min-w-0">
//                 <div className="font-medium text-blue-700 text-sm sm:text-base truncate">
//                   {name}
//                   {isNotOut && notOut && <span className="text-green-600 font-bold ml-1">*</span>}
//                 </div>
//               </div>
//             </div>
//           </td>
//           <td className="text-center">{stats?.R ?? '-'}</td>
//           <td className="text-center">{stats?.B ?? '-'}</td>
//           <td className="text-center">{stats?.['4s'] ?? '-'}</td>
//           <td className="text-center">{stats?.['6s'] ?? '-'}</td>
//           <td className="text-center">{stats?.SR ?? '-'}</td>
//         </tr>
//       );
//     };

//     return (
//       <div className="space-y-8">
//         {innings1 && (
//           <div className="bg-white rounded-xl shadow overflow-hidden">
//             <div className="bg-teal-700 text-white px-4 py-3.5 flex justify-between items-center">
//               <span className="font-semibold">{innings1.batting_team} 1st Innings</span>
//               <span className="font-bold">
//                 {innings1.score} ({innings1.overs})
//               </span>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[600px] text-sm">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="text-left p-3 font-medium w-56">Batter</th>
//                     <th className="p-3 text-center w-14">R</th>
//                     <th className="p-3 text-center w-14">B</th>
//                     <th className="p-3 text-center w-14">4s</th>
//                     <th className="p-3 text-center w-14">6s</th>
//                     <th className="p-3 text-center w-16">SR</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                   {innings1.batting?.map((batsman, i) => (
//                     <tr key={i} className="hover:bg-gray-50">
//                       <td className="p-3">
//                         <div className="flex items-center gap-2.5">
//                           <img
//                             src={innings1.top_batsmen?.find(tb => tb.name.includes(batsman.name.split('(')[0].trim()))?.avatar || 'https://via.placeholder.com/36'}
//                             alt={batsman.name}
//                             className="w-9 h-9 rounded-full object-cover border border-gray-200 flex-shrink-0"
//                             onError={(e) => (e.target.src = 'https://via.placeholder.com/36')}
//                           />
//                           <div className="min-w-0">
//                             <div className="font-medium text-blue-700 text-sm sm:text-base truncate">
//                               {batsman.name}
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="text-center">{batsman.R}</td>
//                       <td className="text-center">{batsman.B}</td>
//                       <td className="text-center">{batsman['4s']}</td>
//                       <td className="text-center">{batsman['6s']}</td>
//                       <td className="text-center">{batsman.SR}</td>
//                     </tr>
//                   ))}

//                   <tr className="bg-gray-50 font-medium">
//                     <td className="p-3">Extras</td>
//                     <td className="text-center" colSpan={5}>
//                       {innings1.extras?.total || 0} (b{innings1.extras?.byes || 0}, lb{innings1.extras?.leg_byes || 0}, w{innings1.extras?.wides || 0}, nb{innings1.extras?.no_balls || 0})
//                     </td>
//                   </tr>

//                   <tr className="bg-gray-100 font-bold">
//                     <td className="p-3">Total</td>
//                     <td className="text-center" colSpan={5}>
//                       {innings1.score} ({innings1.overs}, RR {innings1.run_rate})
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}

//         {innings2 && (
//           <div className="bg-white rounded-xl shadow overflow-hidden">
//             <div className="bg-teal-700 text-white px-4 py-3.5 flex justify-between items-center">
//               <span className="font-semibold">
//                 {innings2.batting_team} {innings2 === matchData.scorecard?.['2nd_innings_current'] ? '2nd' : '1st'} Innings
//               </span>
//               <span className="font-bold">
//                 {innings2.score} ({innings2.overs})
//               </span>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[600px] text-sm">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="text-left p-3 font-medium w-56">Batter</th>
//                     <th className="p-3 text-center w-14">R</th>
//                     <th className="p-3 text-center w-14">B</th>
//                     <th className="p-3 text-center w-14">4s</th>
//                     <th className="p-3 text-center w-14">6s</th>
//                     <th className="p-3 text-center w-16">SR</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                   {innings2.batting?.map((batsman, i) => {
//                     const isOnCrease = innings2.on_crease?.some(oc => oc.name.includes(batsman.name.split('(')[0].trim()));
//                     return (
//                       <tr key={i} className={isOnCrease ? "bg-green-50/30 hover:bg-green-50" : "hover:bg-gray-50"}>
//                         <td className="p-3">
//                           <div className="flex items-center gap-2.5">
//                             <img
//                               src={
//                                 innings2.on_crease?.find(oc => oc.name.includes(batsman.name.split('(')[0].trim()))?.avatar ||
//                                 innings2.top_batsmen?.find(tb => tb.name.includes(batsman.name.split('(')[0].trim()))?.avatar ||
//                                 'https://via.placeholder.com/36'
//                               }
//                               alt={batsman.name}
//                               className="w-9 h-9 rounded-full object-cover border border-gray-200 flex-shrink-0"
//                               onError={(e) => (e.target.src = 'https://via.placeholder.com/36')}
//                             />
//                             <div className="min-w-0">
//                               <div className="font-medium text-blue-700 text-sm sm:text-base truncate">
//                                 {batsman.name}
//                                 {isOnCrease && <span className="text-green-600 font-bold ml-1">*</span>}
//                               </div>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="text-center">{batsman.R}</td>
//                         <td className="text-center">{batsman.B}</td>
//                         <td className="text-center">{batsman['4s']}</td>
//                         <td className="text-center">{batsman['6s']}</td>
//                         <td className="text-center">{batsman.SR}</td>
//                       </tr>
//                     );
//                   })}

//                   <tr className="bg-gray-50 font-medium">
//                     <td className="p-3">Extras</td>
//                     <td className="text-center" colSpan={5}>
//                       {innings2.extras?.total || 0} (b{innings2.extras?.byes || 0}, lb{innings2.extras?.leg_byes || 0}, w{innings2.extras?.wides || 0}, nb{innings2.extras?.no_balls || 0})
//                     </td>
//                   </tr>

//                   <tr className="bg-gray-100 font-bold">
//                     <td className="p-3">Total</td>
//                     <td className="text-center" colSpan={5}>
//                       {innings2.score} ({innings2.overs}, RR {innings2.run_rate})
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>

//             {innings2.top_bowlers?.length > 0 && (
//               <div className="p-5 border-t">
//                 <h3 className="font-semibold mb-4">Top Bowlers</h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {innings2.top_bowlers.map((b, i) => (
//                     <div key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
//                       <img
//                         src={b.avatar || 'https://via.placeholder.com/44'}
//                         alt={b.name}
//                         className="w-11 h-11 rounded-full object-cover"
//                         onError={(e) => (e.target.src = 'https://via.placeholder.com/44')}
//                       />
//                       <p className="font-medium truncate">{b.name}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {!innings1 && !innings2 && (
//           <div className="bg-white p-10 text-center rounded-xl shadow-sm text-gray-600">
//             Scorecard will be available once the match progresses.
//           </div>
//         )}
//       </div>
//     );
//   };

//   const renderSquads = () => {
//     const t1 = matchData.squads?.[teams.team1]?.playing_xi || [];
//     const t2 = matchData.squads?.[teams.team2]?.playing_xi || [];

//     return (
//       <div className="bg-white rounded-xl shadow overflow-hidden">
//         <div className="grid grid-cols-2 bg-gray-50 border-b">
//           <div className="p-4 text-center">
//             <img src={matchData.info.team1_flag} alt="" className="w-10 h-10 mx-auto mb-2" />
//             <p className="font-semibold">{teams.team1}</p>
//           </div>
//           <div className="p-4 text-center border-l">
//             <img src={matchData.info.team2_flag} alt="" className="w-10 h-10 mx-auto mb-2" />
//             <p className="font-semibold">{teams.team2}</p>
//           </div>
//         </div>

//         <h3 className="text-center py-4 font-semibold bg-gray-100">Playing XI</h3>

//         <div className="divide-y">
//           {Array(Math.max(t1.length, t2.length))
//             .fill()
//             .map((_, i) => {
//               const p1 = t1[i];
//               const p2 = t2[i];

//               return (
//                 <div key={i} className="grid grid-cols-2">
//                   <div className="p-4 border-r hover:bg-gray-50">
//                     {p1 && (
//                       <div className="flex items-center gap-3">
//                         <img
//                           src={p1.avatar || 'https://via.placeholder.com/48'}
//                           alt=""
//                           className="w-12 h-12 rounded-full object-cover"
//                           onError={(e) => (e.target.src = 'https://via.placeholder.com/48')}
//                         />
//                         <div className="min-w-0">
//                           <p className="font-medium truncate text-sm sm:text-base">{p1.name}</p>
//                           <p className="text-xs text-gray-500">Player</p>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   <div className="p-4 hover:bg-gray-50">
//                     {p2 && (
//                       <div className="flex items-center gap-3 justify-end">
//                         <div className="min-w-0 text-right">
//                           <p className="font-medium truncate text-sm sm:text-base">{p2.name}</p>
//                           <p className="text-xs text-gray-500">Player</p>
//                         </div>
//                         <img
//                           src={p2.avatar || 'https://via.placeholder.com/48'}
//                           alt=""
//                           className="w-12 h-12 rounded-full object-cover"
//                           onError={(e) => (e.target.src = 'https://via.placeholder.com/48')}
//                         />
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     );
//   };

//   const renderOvers = () => (
//     <div className="p-8 text-center text-gray-500 bg-white rounded-xl shadow">
//       Over-by-over commentary coming soon...
//     </div>
//   );

//   const renderHighlights = () => (
//     <div className="p-6 bg-white rounded-xl shadow">
//       <h2 className="text-xl font-bold mb-6">Highlights</h2>
//       {matchData.highlights?.length > 0 ? (
//         <div className="space-y-4">
//           {matchData.highlights.map((h, i) => (
//             <div key={i} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
//               <p className="text-gray-800">{h}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-500 text-center py-10">No highlights available yet.</p>
//       )}
//     </div>
//   );

//   const renderContent = () => {
//     const map = {
//       info: renderInfo,
//       live: renderLive,
//       scorecard: renderScorecard,
//       squads: renderSquads,
//       overs: renderOvers,
//       highlights: renderHighlights,
//     };
//     return (map[activeTab] || renderInfo)();
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-blue-50/20">
//       {/* Sticky Header */}
//       <div className="bg-white shadow sticky top-0 z-10">
//         <div className="max-w-7xl mx-auto px-4 py-3">
//           <div className="flex items-center gap-3 mb-3">
//             <button onClick={() => navigate('/cricket/live')} className="p-2 hover:bg-gray-100 rounded-full">
//               <ArrowLeft className="w-5 h-5" />
//             </button>
//             <div className="flex-1">
//               <h1 className="font-bold text-lg sm:text-xl truncate">
//                 {teams.team1} vs {teams.team2}
//               </h1>
//               <p className="text-sm text-gray-600">
//                 {matchData.info.match_number} • {matchData.info.series}
//               </p>
//             </div>
//           </div>

//           <div className="flex overflow-x-auto gap-1 pb-1 scrollbar-hide">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`px-5 py-2 text-sm font-medium whitespace-nowrap rounded-full transition-colors ${
//                   activeTab === tab.id
//                     ? 'bg-teal-600 text-white'
//                     : 'text-gray-700 hover:bg-gray-100'
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
//           {/* Main Column - Tab Content */}
//           <div className="lg:col-span-8 space-y-6">{renderContent()}</div>

//           {/* Desktop Sidebar - Top Cricket Stories */}
//           <div className="hidden lg:block lg:col-span-4">
//             <div className="bg-white rounded-xl shadow-md p-5 sticky top-20">
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
//                       <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-teal-600 transition-colors">
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
//                 className="mt-6 w-full text-center text-teal-600 font-medium hover:underline text-sm"
//               >
//                 View All Stories →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile: Top Cricket Stories Section */}
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
//               className="mt-4 w-full text-center text-teal-600 font-medium hover:underline text-sm"
//             >
//               View All Stories →
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Latest Sports News Section – same style as GrandSlamDetail */}
//       <div className="mt-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-xl shadow-md p-6">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
//                 Latest Sports News
//               </h3>
//               <button
//                 onClick={() => navigate('/all-latest-news')}
//                 className="text-teal-600 hover:underline font-medium text-sm sm:text-base"
//               >
//                 View All →
//               </button>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {LatestNews.data.LatestNews.slice(0, 6).map((article) => (
//                 <div
//                   key={article.title}
//                   onClick={() => handleNewsCardClick(article.title)}
//                   className="bg-gray-50 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group"
//                 >
//                   <div className="overflow-hidden">
//                     <img
//                       src={article.image || "https://via.placeholder.com/400x250"}
//                       alt={article.title}
//                       className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>
//                   <div className="p-4">
//                     <h4 className="text-base font-semibold text-gray-800 line-clamp-2 mb-2 group-hover:text-teal-700 transition-colors">
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

// export default CricketScorecard;

// src/Pages/CricketScorecard.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';

import cricketData from '../data/CricketData.json';
import TopStories from '../data/TopStories.js';
import LatestNews from '../data/LatestNews.js';
import SEO from '../components/SEO.jsx';

const CricketScorecard = () => {
  const { matchId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('info');
  const [matchData, setMatchData] = useState(null);

  useEffect(() => {
    const match = cricketData.live_matches.find((m) => m.match_id === matchId);
    setMatchData(match || null);
  }, [matchId]);

  if (!matchData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500 text-lg">Match not found or loading...</p>
      </div>
    );
  }

  const getTeamNames = () => {
    const squadKeys = Object.keys(matchData.squads || {});
    return {
      team1: squadKeys[0] || 'Team 1',
      team2: squadKeys[1] || 'Team 2',
    };
  };

  const teams = getTeamNames();

  const tabs = [
    { id: 'info', label: 'Info' },
    { id: 'live', label: 'Live' },
    { id: 'scorecard', label: 'Scorecard' },
    { id: 'squads', label: 'Squads' },
    { id: 'overs', label: 'Overs' },
    { id: 'highlights', label: 'Highlights' },
  ];

  const InfoRow = ({ label, value, hasArrow = false }) => (
    <div className="flex justify-between items-center p-3 sm:p-4 hover:bg-gray-50 border-b last:border-b-0">
      <span className="text-sm sm:text-base font-medium text-gray-700">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm sm:text-base text-gray-600 text-right">{value || 'N/A'}</span>
        {hasArrow && <ChevronRight className="w-4 h-4 text-gray-400" />}
      </div>
    </div>
  );

  const handleStoryClick = (id) => navigate(`/details/cricket/${id}`);
  const handleNewsCardClick = (articleTitle) =>
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);

  // ────────────────────────────────────────────────
  // Render Functions for Tabs
  // ────────────────────────────────────────────────

  const renderInfo = () => (
    <div className="p-4 sm:p-6 bg-white rounded-xl shadow-sm">
      <h2 className="text-xl font-bold mb-5 text-gray-800">MATCH INFO</h2>
      <div className="divide-y divide-gray-200">
        <InfoRow
          label="Match"
          value={`${teams.team1} vs ${teams.team2} • ${matchData.info.match_number} • ${matchData.info.series}`}
        />
        <InfoRow label="Series" value={matchData.info.series} hasArrow />
        <InfoRow label="Date" value={matchData.info.date} />
        <InfoRow label="Toss" value={matchData.info.toss} />
        <InfoRow
          label="Venue"
          value={`${matchData.info.venue?.name || 'N/A'}, ${matchData.info.venue?.city || 'N/A'}`}
          hasArrow
        />
      </div>

      <div className="mt-6 space-y-6">
        {[teams.team1, teams.team2].map((team) => (
          <div key={team} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3">{team} Squad</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Playing XI</p>
                <p className="text-sm text-gray-600">
                  {matchData.squads?.[team]?.playing_xi?.map((p) => p.name).join(', ') || 'N/A'}
                </p>
              </div>
              {matchData.squads?.[team]?.bench?.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Bench</p>
                  <p className="text-sm text-gray-600">
                    {matchData.squads[team].bench.map((p) => p.name).join(', ')}
                  </p>
                </div>
              )}
              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Support Staff</p>
                <p className="text-sm text-gray-600">
                  {matchData.squads?.[team]?.support_staff?.join(', ') || 'N/A'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLive = () => {
    const commentary = matchData.full_commentary_summary || {};
    return (
      <div className="p-4 sm:p-6 bg-white rounded-xl shadow-sm">
        <h2 className="text-xl font-bold mb-5 text-gray-800">LIVE COMMENTARY</h2>
        <div className="space-y-5">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="font-semibold text-blue-800">{matchData.info.current_status || 'Match in progress'}</p>
            <p className="text-sm text-blue-600 mt-1">
              Day {matchData.info.day || '?'} • {matchData.info.session || 'N/A'}
            </p>
          </div>

          {commentary['1st_innings'] && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">1st Innings Summary</h3>
              <p className="text-sm text-gray-700">{commentary['1st_innings']}</p>
            </div>
          )}

          {commentary['2nd_innings'] && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">2nd Innings Summary</h3>
              <p className="text-sm text-gray-700">{commentary['2nd_innings']}</p>
            </div>
          )}

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Current Status</h3>
            <p className="text-sm text-gray-700">{matchData.overs_summary || 'No summary available'}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderScorecard = () => {
    const innings1 = matchData.scorecard?.['1st_innings'];
    const innings2 = matchData.scorecard?.['2nd_innings_current'] || matchData.scorecard?.['1st_innings_current'];

    const findBattingStats = (playerName, battingArray) => {
      if (!battingArray || !Array.isArray(battingArray)) return null;
      const cleanName = playerName.replace(/\s+\d+\*?$/, '').trim();
      return battingArray.find(p => {
        const battingName = p.name.trim();
        return battingName === cleanName || battingName.includes(cleanName);
      });
    };

    const renderPlayerRow = (playerObj, battingArray, isNotOut = false) => {
      if (!playerObj?.name) return null;
      const text = playerObj.name.trim();
      const parts = text.split(/\s+/);
      const runsStr = parts.pop() || '';
      const name = parts.join(' ');
      const notOut = runsStr.includes('*');
      const runs = runsStr.replace('*', '');
      const stats = findBattingStats(playerObj.name, battingArray);

      return (
        <tr key={name} className={isNotOut ? "bg-green-50/30 hover:bg-green-50" : "hover:bg-gray-50"}>
          <td className="p-3">
            <div className="flex items-center gap-2.5">
              <img
                src={playerObj.avatar || 'https://via.placeholder.com/36'}
                alt={name}
                className="w-9 h-9 rounded-full object-cover border border-gray-200 flex-shrink-0"
                onError={(e) => (e.target.src = 'https://via.placeholder.com/36')}
              />
              <div className="min-w-0">
                <div className="font-medium text-blue-700 text-sm sm:text-base truncate">
                  {name}
                  {isNotOut && notOut && <span className="text-green-600 font-bold ml-1">*</span>}
                </div>
              </div>
            </div>
          </td>
          <td className="text-center">{stats?.R ?? '-'}</td>
          <td className="text-center">{stats?.B ?? '-'}</td>
          <td className="text-center">{stats?.['4s'] ?? '-'}</td>
          <td className="text-center">{stats?.['6s'] ?? '-'}</td>
          <td className="text-center">{stats?.SR ?? '-'}</td>
        </tr>
      );
    };

    return (
      <div className="space-y-8">
        {innings1 && (
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="bg-teal-700 text-white px-4 py-3.5 flex justify-between items-center">
              <span className="font-semibold">{innings1.batting_team} 1st Innings</span>
              <span className="font-bold">
                {innings1.score} ({innings1.overs})
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-3 font-medium w-56">Batter</th>
                    <th className="p-3 text-center w-14">R</th>
                    <th className="p-3 text-center w-14">B</th>
                    <th className="p-3 text-center w-14">4s</th>
                    <th className="p-3 text-center w-14">6s</th>
                    <th className="p-3 text-center w-16">SR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {innings1.batting?.map((batsman, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="p-3">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={innings1.top_batsmen?.find(tb => tb.name.includes(batsman.name.split('(')[0].trim()))?.avatar || 'https://via.placeholder.com/36'}
                            alt={batsman.name}
                            className="w-9 h-9 rounded-full object-cover border border-gray-200 flex-shrink-0"
                            onError={(e) => (e.target.src = 'https://via.placeholder.com/36')}
                          />
                          <div className="min-w-0">
                            <div className="font-medium text-blue-700 text-sm sm:text-base truncate">
                              {batsman.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">{batsman.R}</td>
                      <td className="text-center">{batsman.B}</td>
                      <td className="text-center">{batsman['4s']}</td>
                      <td className="text-center">{batsman['6s']}</td>
                      <td className="text-center">{batsman.SR}</td>
                    </tr>
                  ))}

                  <tr className="bg-gray-50 font-medium">
                    <td className="p-3">Extras</td>
                    <td className="text-center" colSpan={5}>
                      {innings1.extras?.total || 0} (b{innings1.extras?.byes || 0}, lb{innings1.extras?.leg_byes || 0}, w{innings1.extras?.wides || 0}, nb{innings1.extras?.no_balls || 0})
                    </td>
                  </tr>

                  <tr className="bg-gray-100 font-bold">
                    <td className="p-3">Total</td>
                    <td className="text-center" colSpan={5}>
                      {innings1.score} ({innings1.overs}, RR {innings1.run_rate})
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {innings2 && (
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="bg-teal-700 text-white px-4 py-3.5 flex justify-between items-center">
              <span className="font-semibold">
                {innings2.batting_team} {innings2 === matchData.scorecard?.['2nd_innings_current'] ? '2nd' : '1st'} Innings
              </span>
              <span className="font-bold">
                {innings2.score} ({innings2.overs})
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-3 font-medium w-56">Batter</th>
                    <th className="p-3 text-center w-14">R</th>
                    <th className="p-3 text-center w-14">B</th>
                    <th className="p-3 text-center w-14">4s</th>
                    <th className="p-3 text-center w-14">6s</th>
                    <th className="p-3 text-center w-16">SR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {innings2.batting?.map((batsman, i) => {
                    const isOnCrease = innings2.on_crease?.some(oc => oc.name.includes(batsman.name.split('(')[0].trim()));
                    return (
                      <tr key={i} className={isOnCrease ? "bg-green-50/30 hover:bg-green-50" : "hover:bg-gray-50"}>
                        <td className="p-3">
                          <div className="flex items-center gap-2.5">
                            <img
                              src={
                                innings2.on_crease?.find(oc => oc.name.includes(batsman.name.split('(')[0].trim()))?.avatar ||
                                innings2.top_batsmen?.find(tb => tb.name.includes(batsman.name.split('(')[0].trim()))?.avatar ||
                                'https://via.placeholder.com/36'
                              }
                              alt={batsman.name}
                              className="w-9 h-9 rounded-full object-cover border border-gray-200 flex-shrink-0"
                              onError={(e) => (e.target.src = 'https://via.placeholder.com/36')}
                            />
                            <div className="min-w-0">
                              <div className="font-medium text-blue-700 text-sm sm:text-base truncate">
                                {batsman.name}
                                {isOnCrease && <span className="text-green-600 font-bold ml-1">*</span>}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-center">{batsman.R}</td>
                        <td className="text-center">{batsman.B}</td>
                        <td className="text-center">{batsman['4s']}</td>
                        <td className="text-center">{batsman['6s']}</td>
                        <td className="text-center">{batsman.SR}</td>
                      </tr>
                    );
                  })}

                  <tr className="bg-gray-50 font-medium">
                    <td className="p-3">Extras</td>
                    <td className="text-center" colSpan={5}>
                      {innings2.extras?.total || 0} (b{innings2.extras?.byes || 0}, lb{innings2.extras?.leg_byes || 0}, w{innings2.extras?.wides || 0}, nb{innings2.extras?.no_balls || 0})
                    </td>
                  </tr>

                  <tr className="bg-gray-100 font-bold">
                    <td className="p-3">Total</td>
                    <td className="text-center" colSpan={5}>
                      {innings2.score} ({innings2.overs}, RR {innings2.run_rate})
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {innings2.top_bowlers?.length > 0 && (
              <div className="p-5 border-t">
                <h3 className="font-semibold mb-4">Top Bowlers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {innings2.top_bowlers.map((b, i) => (
                    <div key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                      <img
                        src={b.avatar || 'https://via.placeholder.com/44'}
                        alt={b.name}
                        className="w-11 h-11 rounded-full object-cover"
                        onError={(e) => (e.target.src = 'https://via.placeholder.com/44')}
                      />
                      <p className="font-medium truncate">{b.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {!innings1 && !innings2 && (
          <div className="bg-white p-10 text-center rounded-xl shadow-sm text-gray-600">
            Scorecard will be available once the match progresses.
          </div>
        )}
      </div>
    );
  };

  const renderSquads = () => {
    const t1 = matchData.squads?.[teams.team1]?.playing_xi || [];
    const t2 = matchData.squads?.[teams.team2]?.playing_xi || [];

    return (
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="grid grid-cols-2 bg-gray-50 border-b">
          <div className="p-4 text-center">
            <img src={matchData.info.team1_flag} alt="" className="w-10 h-10 mx-auto mb-2" />
            <p className="font-semibold">{teams.team1}</p>
          </div>
          <div className="p-4 text-center border-l">
            <img src={matchData.info.team2_flag} alt="" className="w-10 h-10 mx-auto mb-2" />
            <p className="font-semibold">{teams.team2}</p>
          </div>
        </div>

        <h3 className="text-center py-4 font-semibold bg-gray-100">Playing XI</h3>

        <div className="divide-y">
          {Array(Math.max(t1.length, t2.length))
            .fill()
            .map((_, i) => {
              const p1 = t1[i];
              const p2 = t2[i];

              return (
                <div key={i} className="grid grid-cols-2">
                  <div className="p-4 border-r hover:bg-gray-50">
                    {p1 && (
                      <div className="flex items-center gap-3">
                        <img
                          src={p1.avatar || 'https://via.placeholder.com/48'}
                          alt=""
                          className="w-12 h-12 rounded-full object-cover"
                          onError={(e) => (e.target.src = 'https://via.placeholder.com/48')}
                        />
                        <div className="min-w-0">
                          <p className="font-medium truncate text-sm sm:text-base">{p1.name}</p>
                          <p className="text-xs text-gray-500">Player</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-4 hover:bg-gray-50">
                    {p2 && (
                      <div className="flex items-center gap-3 justify-end">
                        <div className="min-w-0 text-right">
                          <p className="font-medium truncate text-sm sm:text-base">{p2.name}</p>
                          <p className="text-xs text-gray-500">Player</p>
                        </div>
                        <img
                          src={p2.avatar || 'https://via.placeholder.com/48'}
                          alt=""
                          className="w-12 h-12 rounded-full object-cover"
                          onError={(e) => (e.target.src = 'https://via.placeholder.com/48')}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  };

  const renderOvers = () => (
    <div className="p-8 text-center text-gray-500 bg-white rounded-xl shadow">
      Over-by-over commentary coming soon...
    </div>
  );

  const renderHighlights = () => (
    <div className="p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold mb-6">Highlights</h2>
      {matchData.highlights?.length > 0 ? (
        <div className="space-y-4">
          {matchData.highlights.map((h, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-800">{h}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center py-10">No highlights available yet.</p>
      )}
    </div>
  );

  const renderContent = () => {
    const map = {
      info: renderInfo,
      live: renderLive,
      scorecard: renderScorecard,
      squads: renderSquads,
      overs: renderOvers,
      highlights: renderHighlights,
    };
    return (map[activeTab] || renderInfo)();
  };

  // Generate dynamic SEO metadata
  const seoTitle = `${teams.team1} vs ${teams.team2} - Cricket Scorecard | ${matchData.info.series} | SportlyRadar`;
  const seoDescription = `Live cricket match between ${teams.team1} and ${teams.team2}. Get real-time scores, player stats, innings updates, and match highlights from ${matchData.info.series}.`;
  const seoKeywords = `${teams.team1}, ${teams.team2}, cricket scorecard, ${matchData.info.series}, live cricket scores, player stats, match highlights, innings scores, cricket match`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-blue-50/20">
      {/* SEO Component with dynamic match data */}
      <SEO 
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonical={window.location.href}
        image={matchData.info.team1_flag || "https://sportlyradar.com/cricket-scorecard-og-image.jpg"}
        url={window.location.href}
        type="article"
        publishedTime={new Date(matchData.info.date).toISOString()}
      />
      
      {/* Sticky Header */}
      <div className="bg-white shadow sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3 mb-3">
            <button onClick={() => navigate('/cricket/live')} className="p-2 hover:bg-gray-100 rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex-1">
              <h1 className="font-bold text-lg sm:text-xl truncate">
                {teams.team1} vs {teams.team2}
              </h1>
              <p className="text-sm text-gray-600">
                {matchData.info.match_number} • {matchData.info.series}
              </p>
            </div>
          </div>

          <div className="flex overflow-x-auto gap-1 pb-1 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 text-sm font-medium whitespace-nowrap rounded-full transition-colors ${
                  activeTab === tab.id
                    ? 'bg-teal-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Main Column - Tab Content */}
          <div className="lg:col-span-8 space-y-6">{renderContent()}</div>

          {/* Desktop Sidebar - Top Cricket Stories */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="bg-white rounded-xl shadow-md p-5 sticky top-20">
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
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-teal-600 transition-colors">
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
                className="mt-6 w-full text-center text-teal-600 font-medium hover:underline text-sm"
              >
                View All Stories →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Top Cricket Stories Section */}
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
              className="mt-4 w-full text-center text-teal-600 font-medium hover:underline text-sm"
            >
              View All Stories →
            </button>
          </div>
        </div>
      </div>

      {/* Latest Sports News Section – same style as GrandSlamDetail */}
      <div className="mt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Latest Sports News
              </h3>
              <button
                onClick={() => navigate('/all-latest-news')}
                className="text-teal-600 hover:underline font-medium text-sm sm:text-base"
              >
                View All →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {LatestNews.data.LatestNews.slice(0, 6).map((article) => (
                <div
                  key={article.title}
                  onClick={() => handleNewsCardClick(article.title)}
                  className="bg-gray-50 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group"
                >
                  <div className="overflow-hidden">
                    <img
                      src={article.image || "https://via.placeholder.com/400x250"}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-base font-semibold text-gray-800 line-clamp-2 mb-2 group-hover:text-teal-700 transition-colors">
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

export default CricketScorecard;
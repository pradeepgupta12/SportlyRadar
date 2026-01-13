


// import React, { useState } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import TopHockeyStories from '../../data/TopHockeyStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { hockeyLeagueDetails } from '../../data/HockeyLeagueDetail.js';

// const LeagueDetail = () => {
//   const { leagueId } = useParams();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('overview');

//   const handleStoryClick = (id) => {
//     navigate(`/details/hockey/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   const league = hockeyLeagueDetails[leagueId];

//   if (!league) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 text-gray-600">
//         League not found
//       </div>
//     );
//   }

//   const tabs = [
//     { id: 'overview', label: 'Overview' },
//     { id: 'standings', label: 'Standings' },
//     { id: 'scorers', label: 'Top Scorers' },
//     { id: 'matches', label: 'Matches' },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
//       {/* Main Grid Layout */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
//           {/* Left: League Detail Content */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Header */}
//             <div className="bg-white rounded-xl shadow-md p-6 mb-6">
//               <div className="flex items-center justify-between flex-wrap gap-4">
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={league.logo}
//                     alt={`${league.name} logo`}
//                     className="h-16 sm:h-20 md:h-24 w-auto object-contain"
//                     onError={(e) => { e.target.src = 'https://via.placeholder.com/120?text=Logo'; }}
//                   />
//                   <div>
//                     <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{league.name}</h1>
//                     <p className="text-sm text-gray-600 mt-1">{league.country} • Season {league.season}</p>
//                   </div>
//                 </div>
//                 <Link
//                   to="/hockey/leagues"
//                   className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 whitespace-nowrap"
//                 >
//                   ← Back
//                 </Link>
//               </div>
//             </div>

//             {/* Tabs */}
//             <div className="bg-white rounded-xl shadow-md mb-6">
//               <div className="flex gap-3 overflow-x-auto border-b scrollbar-hide">
//                 {tabs.map((tab) => (
//                   <button
//                     key={tab.id}
//                     onClick={() => setActiveTab(tab.id)}
//                     className={`px-6 py-3.5 text-sm font-medium transition-all ${
//                       activeTab === tab.id ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
//                     }`}
//                   >
//                     {tab.label}
//                   </button>
//                 ))}
//               </div>

//               <div className="p-6">
//                 {activeTab === 'overview' && (
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <p className="text-gray-700 text-sm leading-relaxed">{league.description}</p>
//                       <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
//                         <div className="bg-blue-50 rounded-lg p-4">
//                           <p className="text-gray-600">Format</p>
//                           <p className="font-bold">{league.format}</p>
//                         </div>
//                         <div className="bg-green-50 rounded-lg p-4">
//                           <p className="text-gray-600">Teams</p>
//                           <p className="font-bold">{league.teams}</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-600">Founded: {league.founded}</p>
//                     </div>
//                   </div>
//                 )}

//                 {activeTab === 'standings' && league.standings?.length > 0 && (
//                   <div className="overflow-x-auto">
//                     <table className="w-full text-sm min-w-[600px]">
//                       <thead className="bg-gray-50">
//                         <tr>
//                           <th className="text-left py-3 px-4">Rank</th>
//                           <th className="text-left py-3 px-4">Team</th>
//                           <th className="text-center py-3 px-4">P</th>
//                           <th className="text-center py-3 px-4">W</th>
//                           <th className="text-center py-3 px-4">D</th>
//                           <th className="text-center py-3 px-4">L</th>
//                           <th className="text-center py-3 px-4">GD</th>
//                           <th className="text-center py-3 px-4">Pts</th>
//                         </tr>
//                       </thead>
//                       <tbody className="divide-y divide-gray-100">
//                         {league.standings.map((team, idx) => (
//                           <tr key={team.rank} className="hover:bg-gray-50">
//                             <td className="py-3 px-4">
//                               <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${
//                                 idx < 3 ? (idx === 0 ? 'bg-yellow-500' : idx === 1 ? 'bg-gray-400' : 'bg-orange-500') : 'bg-gray-600'
//                               }`}>
//                                 {team.rank}
//                               </div>
//                             </td>
//                             <td className="py-3 px-4 flex items-center gap-2">
//                               <img
//                                 src={team.flag}
//                                 alt={`${team.team} flag`}
//                                 className="w-7 h-5 object-cover rounded-sm shadow-sm"
//                                 onError={(e) => { e.target.src = 'https://via.placeholder.com/28?text=Flag'; }}
//                               />
//                               <span className="font-medium">{team.team}</span>
//                             </td>
//                             <td className="py-3 px-4 text-center">{team.played}</td>
//                             <td className="py-3 px-4 text-center text-green-600 font-medium">{team.won}</td>
//                             <td className="py-3 px-4 text-center">{team.drawn}</td>
//                             <td className="py-3 px-4 text-center text-red-600 font-medium">{team.lost}</td>
//                             <td className="py-3 px-4 text-center">{team.gd > 0 ? '+' : ''}{team.gd}</td>
//                             <td className="py-3 px-4 text-center font-bold text-blue-600">{team.points}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 )}

//                 {activeTab === 'scorers' && league.topScorers?.length > 0 && (
//                   <div className="space-y-4">
//                     {league.topScorers.map((scorer) => (
//                       <div key={scorer.rank} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
//                         <div className="flex items-center gap-4">
//                           <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
//                             scorer.rank <= 3 ? (scorer.rank === 1 ? 'bg-yellow-500' : scorer.rank === 2 ? 'bg-gray-400' : 'bg-orange-500') : 'bg-gray-600'
//                           }`}>
//                             {scorer.rank}
//                           </div>
//                           <div>
//                             <p className="font-semibold">{scorer.name}</p>
//                             {scorer.team && (
//                               <p className="text-sm text-gray-600 flex items-center gap-1">
//                                 {scorer.flag && (
//                                   <img
//                                     src={scorer.flag}
//                                     alt=""
//                                     className="w-5 h-4 object-cover rounded-sm inline"
//                                   />
//                                 )}
//                                 {scorer.team}
//                               </p>
//                             )}
//                           </div>
//                         </div>
//                         <p className="text-2xl font-bold text-green-600">{scorer.goals}</p>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {activeTab === 'matches' && (
//                   <div className="space-y-6">
//                     {league.recentMatches?.length > 0 && (
//                       <div>
//                         <h3 className="text-lg font-semibold mb-3">Recent Results</h3>
//                         <div className="space-y-3">
//                           {league.recentMatches.map((match) => (
//                             <div key={match.id} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between flex-wrap gap-4">
//                               <div className="flex items-center gap-3">
//                                 <img
//                                   src={match.flag1}
//                                   alt={`${match.team1} flag`}
//                                   className="w-10 h-6 object-cover rounded shadow-sm"
//                                   onError={(e) => { e.target.src = 'https://via.placeholder.com/40?text=Flag'; }}
//                                 />
//                                 <span className="font-medium">{match.team1}</span>
//                               </div>
//                               <span className="font-bold text-blue-600 text-lg">{match.score}</span>
//                               <div className="flex items-center gap-3">
//                                 <span className="font-medium">{match.team2}</span>
//                                 <img
//                                   src={match.flag2}
//                                   alt={`${match.team2} flag`}
//                                   className="w-10 h-6 object-cover rounded shadow-sm"
//                                   onError={(e) => { e.target.src = 'https://via.placeholder.com/40?text=Flag'; }}
//                                 />
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {league.upcomingMatches?.length > 0 && (
//                       <div>
//                         <h3 className="text-lg font-semibold mb-3">Upcoming Fixtures</h3>
//                         <div className="space-y-3">
//                           {league.upcomingMatches.map((match) => (
//                             <div key={match.id} className="bg-blue-50 rounded-lg p-4 flex items-center justify-between flex-wrap gap-4">
//                               <div className="flex items-center gap-3">
//                                 {match.flag1 && (
//                                   <img
//                                     src={match.flag1}
//                                     alt={`${match.team1} flag`}
//                                     className="w-10 h-6 object-cover rounded shadow-sm"
//                                     onError={(e) => { e.target.src = 'https://via.placeholder.com/40?text=Flag'; }}
//                                   />
//                                 )}
//                                 <span className="font-medium">{match.team1}</span>
//                               </div>
//                               <div className="text-center text-sm">
//                                 <p>{match.date.replace('2026-', '').replace('2025-', '')}</p>
//                                 <p>{match.time}</p>
//                                 <p className="text-xs text-gray-600">{match.venue}</p>
//                               </div>
//                               <div className="flex items-center gap-3">
//                                 <span className="font-medium">{match.team2}</span>
//                                 {match.flag2 && (
//                                   <img
//                                     src={match.flag2}
//                                     alt={`${match.team2} flag`}
//                                     className="w-10 h-6 object-cover rounded shadow-sm"
//                                     onError={(e) => { e.target.src = 'https://via.placeholder.com/40?text=Flag'; }}
//                                   />
//                                 )}
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Right Sidebar: Top Hockey Stories (Desktop Only) */}
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

// export default LeagueDetail;


import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import TopHockeyStories from '../../data/TopHockeyStories.js';
import LatestNews from '../../data/LatestNews.js';
import { hockeyLeagueDetails } from '../../data/HockeyLeagueDetail.js';

const LeagueDetail = () => {
  const { leagueId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const handleStoryClick = (id) => {
    navigate(`/details/hockey/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  const league = hockeyLeagueDetails[leagueId];

  if (!league) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 text-gray-600">
        League not found
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'standings', label: 'Standings' },
    { id: 'scorers', label: 'Top Scorers' },
    { id: 'matches', label: 'Matches' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8">
          
          {/* Left: League Detail Content */}
          <div className="lg:col-span-8 space-y-5 sm:space-y-6">
            {/* Header */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={league.logo}
                    alt={`${league.name} logo`}
                    className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/120?text=Logo'; }}
                  />
                  <div className="flex-1 min-w-0">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 truncate">{league.name}</h1>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">{league.country} • Season {league.season}</p>
                  </div>
                </div>
                <div className="self-start sm:self-center">
                  <Link
                    to="/hockey/leagues"
                    className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 whitespace-nowrap"
                  >
                    ← Back
                  </Link>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-md mb-4 sm:mb-6">
              <div className="flex gap-1 sm:gap-2 md:gap-3 overflow-x-auto border-b px-2 sm:px-4 scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 sm:px-4 md:px-6 py-2.5 sm:py-3.5 text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                      activeTab === tab.id ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-4 sm:p-6">
                {activeTab === 'overview' && (
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">{league.description}</p>
                      <div className="mt-4 grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 text-sm">
                        <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
                          <p className="text-gray-600 text-xs sm:text-sm">Format</p>
                          <p className="font-bold text-sm sm:text-base">{league.format}</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3 sm:p-4">
                          <p className="text-gray-600 text-xs sm:text-sm">Teams</p>
                          <p className="font-bold text-sm sm:text-base">{league.teams}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <p className="text-sm text-gray-600">Founded: {league.founded}</p>
                    </div>
                  </div>
                )}

                {activeTab === 'standings' && league.standings?.length > 0 && (
                  <div className="overflow-x-auto -mx-2 sm:mx-0">
                    <div className="min-w-full inline-block align-middle">
                      <table className="w-full text-xs sm:text-sm min-w-[500px]">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="text-left py-2 sm:py-3 px-2 sm:px-4">Rank</th>
                            <th className="text-left py-2 sm:py-3 px-2 sm:px-4">Team</th>
                            <th className="text-center py-2 sm:py-3 px-2 sm:px-4">P</th>
                            <th className="text-center py-2 sm:py-3 px-2 sm:px-4">W</th>
                            <th className="text-center py-2 sm:py-3 px-2 sm:px-4">D</th>
                            <th className="text-center py-2 sm:py-3 px-2 sm:px-4">L</th>
                            <th className="text-center py-2 sm:py-3 px-2 sm:px-4">GD</th>
                            <th className="text-center py-2 sm:py-3 px-2 sm:px-4">Pts</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {league.standings.map((team, idx) => (
                            <tr key={team.rank} className="hover:bg-gray-50">
                              <td className="py-2 sm:py-3 px-2 sm:px-4">
                                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold text-white ${
                                  idx < 3 ? (idx === 0 ? 'bg-yellow-500' : idx === 1 ? 'bg-gray-400' : 'bg-orange-500') : 'bg-gray-600'
                                }`}>
                                  {team.rank}
                                </div>
                              </td>
                              <td className="py-2 sm:py-3 px-2 sm:px-4 flex items-center gap-1 sm:gap-2">
                                <img
                                  src={team.flag}
                                  alt={`${team.team} flag`}
                                  className="w-5 h-4 sm:w-7 sm:h-5 object-cover rounded-sm shadow-sm"
                                  onError={(e) => { e.target.src = 'https://via.placeholder.com/28?text=Flag'; }}
                                />
                                <span className="font-medium truncate">{team.team}</span>
                              </td>
                              <td className="py-2 sm:py-3 px-2 sm:px-4 text-center">{team.played}</td>
                              <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-green-600 font-medium">{team.won}</td>
                              <td className="py-2 sm:py-3 px-2 sm:px-4 text-center">{team.drawn}</td>
                              <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-red-600 font-medium">{team.lost}</td>
                              <td className="py-2 sm:py-3 px-2 sm:px-4 text-center">{team.gd > 0 ? '+' : ''}{team.gd}</td>
                              <td className="py-2 sm:py-3 px-2 sm:px-4 text-center font-bold text-blue-600">{team.points}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === 'scorers' && league.topScorers?.length > 0 && (
                  <div className="space-y-3 sm:space-y-4">
                    {league.topScorers.map((scorer) => (
                      <div key={scorer.rank} className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2 sm:gap-4">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-white text-xs sm:text-sm ${
                            scorer.rank <= 3 ? (scorer.rank === 1 ? 'bg-yellow-500' : scorer.rank === 2 ? 'bg-gray-400' : 'bg-orange-500') : 'bg-gray-600'
                          }`}>
                            {scorer.rank}
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-sm sm:text-base truncate">{scorer.name}</p>
                            {scorer.team && (
                              <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-1 truncate">
                                {scorer.flag && (
                                  <img
                                    src={scorer.flag}
                                    alt=""
                                    className="w-4 h-3 sm:w-5 sm:h-4 object-cover rounded-sm inline"
                                  />
                                )}
                                <span className="truncate">{scorer.team}</span>
                              </p>
                            )}
                          </div>
                        </div>
                        <p className="text-xl sm:text-2xl font-bold text-green-600">{scorer.goals}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'matches' && (
                  <div className="space-y-4 sm:space-y-6">
                    {league.recentMatches?.length > 0 && (
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold mb-3">Recent Results</h3>
                        <div className="space-y-2 sm:space-y-3">
                          {league.recentMatches.map((match) => (
                            <div key={match.id} className="bg-gray-50 rounded-lg p-3 sm:p-4">
                              {/* Mobile Layout: Single line with proper alignment */}
                              <div className="flex items-center justify-between">
                                {/* Team 1 */}
                                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                                  <img
                                    src={match.flag1}
                                    alt={`${match.team1} flag`}
                                    className="w-7 h-5 sm:w-10 sm:h-6 object-cover rounded shadow-sm flex-shrink-0"
                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/40?text=Flag'; }}
                                  />
                                  <span className="font-medium text-sm sm:text-base truncate">{match.team1}</span>
                                </div>
                                
                                {/* Score - Center */}
                                <div className="mx-2 sm:mx-4 flex-shrink-0">
                                  <span className="font-bold text-blue-600 text-base sm:text-lg whitespace-nowrap">{match.score}</span>
                                </div>
                                
                                {/* Team 2 */}
                                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0 justify-end">
                                  <span className="font-medium text-sm sm:text-base truncate text-right">{match.team2}</span>
                                  <img
                                    src={match.flag2}
                                    alt={`${match.team2} flag`}
                                    className="w-7 h-5 sm:w-10 sm:h-6 object-cover rounded shadow-sm flex-shrink-0"
                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/40?text=Flag'; }}
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {league.upcomingMatches?.length > 0 && (
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold mb-3">Upcoming Fixtures</h3>
                        <div className="space-y-2 sm:space-y-3">
                          {league.upcomingMatches.map((match) => (
                            <div key={match.id} className="bg-blue-50 rounded-lg p-3 sm:p-4">
                              {/* Mobile Layout: Single line with proper alignment */}
                              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
                                {/* Teams Section */}
                                <div className="w-full sm:w-auto flex items-center justify-between sm:justify-start sm:flex-1 order-1 sm:order-1">
                                  {/* Team 1 */}
                                  <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                                    {match.flag1 && (
                                      <img
                                        src={match.flag1}
                                        alt={`${match.team1} flag`}
                                        className="w-7 h-5 sm:w-10 sm:h-6 object-cover rounded shadow-sm flex-shrink-0"
                                        onError={(e) => { e.target.src = 'https://via.placeholder.com/40?text=Flag'; }}
                                      />
                                    )}
                                    <span className="font-medium text-sm sm:text-base truncate">{match.team1}</span>
                                  </div>
                                  
                                  {/* VS for mobile only */}
                                  <span className="mx-2 text-xs font-bold text-gray-500 sm:hidden">vs</span>
                                  
                                  {/* Team 2 */}
                                  <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0 justify-end sm:justify-start">
                                    <span className="font-medium text-sm sm:text-base truncate text-right sm:text-left">{match.team2}</span>
                                    {match.flag2 && (
                                      <img
                                        src={match.flag2}
                                        alt={`${match.team2} flag`}
                                        className="w-7 h-5 sm:w-10 sm:h-6 object-cover rounded shadow-sm flex-shrink-0"
                                        onError={(e) => { e.target.src = 'https://via.placeholder.com/40?text=Flag'; }}
                                      />
                                    )}
                                  </div>
                                </div>
                                
                                {/* Match Info - Date/Time/Venue */}
                                <div className="w-full sm:w-auto text-center sm:text-center order-3 sm:order-2 sm:flex-shrink-0">
                                  <div className="text-xs sm:text-sm">
                                    <p className="font-medium">{match.date.replace('2026-', '').replace('2025-', '')} • {match.time}</p>
                                    <p className="text-gray-600 truncate">{match.venue}</p>
                                  </div>
                                </div>
                                
                                {/* VS for desktop only */}
                                <div className="hidden sm:flex items-center justify-center order-2 sm:order-3 mx-2 sm:mx-4 flex-shrink-0">
                                  <span className="text-sm font-bold text-gray-500">vs</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Top Hockey Stories (Desktop Only) */}
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
      <div className="lg:hidden mt-8 px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-5">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4">Top Hockey Stories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {TopHockeyStories.data.TopHockeyStories.slice(0, 4).map((story) => (
                <div
                  key={story.id}
                  onClick={() => handleStoryClick(story.id)}
                  className="cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
                >
                  <img
                    src={story.image || 'https://via.placeholder.com/300'}
                    alt={story.title}
                    className="w-full h-32 sm:h-40 object-cover"
                  />
                  <div className="p-2 sm:p-3">
                    <h4 className="text-xs sm:text-sm font-medium text-gray-900 line-clamp-2">
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

      {/* Latest Sports News Section */}
      <div className="mt-8 sm:mt-12 px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                Latest Sports News
              </h3>
              <button
                onClick={() => navigate('/all-latest-news')}
                className="text-blue-600 hover:underline font-medium text-xs sm:text-sm md:text-base"
              >
                View All →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                  />
                  <div className="p-3 sm:p-4">
                    <h4 className="text-sm sm:text-base font-semibold text-gray-800 line-clamp-2 mb-2">
                      {article.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-3">
                      {article.description}
                    </p>
                    <div className="flex flex-col xs:flex-row xs:justify-between text-xs text-gray-500 gap-1 xs:gap-0">
                      <span className="truncate">Source: {article.source}</span>
                      <span className="truncate">
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

export default LeagueDetail;
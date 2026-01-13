


// import React, { useState } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import { Trophy, Target, Calendar, Award } from 'lucide-react';
// import TopFootballStories from '../../data/TopFootballStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { footballLeagueDetails } from '../../data/FootballLeagueDetail.js';

// const FootballLeagueDetail = () => {
//   const { leagueId } = useParams();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('standings');

//   // Data ab external file se aa raha hai
//   const league = footballLeagueDetails[leagueId] || footballLeagueDetails['premier-league'];

//   const getFormColor = (result) => {
//     const colors = { 'W': 'bg-green-500', 'D': 'bg-yellow-500', 'L': 'bg-red-500' };
//     return colors[result] || 'bg-gray-500';
//   };

//   const handleStoryClick = (id) => {
//     navigate(`/details/football/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
//       {/* Main Grid Layout */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

//           {/* Left/Main Content */}
//           <div className="lg:col-span-8 space-y-6">

//             {/* Compact Hero Section */}
//             <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-10 rounded-xl shadow-xl">
//               <div className="max-w-7xl mx-auto px-4">
//                 <div className="flex items-center gap-4 mb-3">
//                   <span className="text-5xl">{league.icon}</span>
//                   <div>
//                     <h1 className="text-4xl font-bold mb-1">{league.name}</h1>
//                     <p className="text-green-100 text-lg">{league.country} • Season {league.season}</p>
//                   </div>
//                 </div>
//                 <p className="text-green-100 text-base max-w-3xl">{league.description}</p>
//               </div>
//             </div>

//             {/* Compact Quick Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//               <div className="bg-white rounded-xl p-5 shadow text-center">
//                 <Trophy className="w-8 h-8 mx-auto mb-2 text-green-600" />
//                 <p className="text-2xl font-bold">{league.teams}</p>
//                 <p className="text-sm text-gray-600">Teams</p>
//               </div>
//               <div className="bg-white rounded-xl p-5 shadow text-center">
//                 <Calendar className="w-8 h-8 mx-auto mb-2 text-blue-600" />
//                 <p className="text-2xl font-bold">{league.matches}</p>
//                 <p className="text-sm text-gray-600">Matches</p>
//               </div>
//               <div className="bg-white rounded-xl p-5 shadow text-center">
//                 <Award className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
//                 <p className="text-2xl font-bold">{league.founded}</p>
//                 <p className="text-sm text-gray-600">Founded</p>
//               </div>
//               <div className="bg-white rounded-xl p-5 shadow text-center">
//                 <Trophy className="w-8 h-8 mx-auto mb-2 text-purple-600" />
//                 <p className="text-lg font-bold">{league.currentChampion}</p>
//                 <p className="text-sm text-gray-600">Defending Champion</p>
//               </div>
//             </div>

//             {/* Tabs */}
//             <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
//               <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
//                 {['standings', 'top-scorers', 'recent-matches'].map(tab => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`px-5 py-2.5 rounded-lg font-semibold whitespace-nowrap transition-all ${
//                       activeTab === tab
//                         ? 'bg-green-600 text-white shadow'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Standings Table */}
//             {activeTab === 'standings' && (
//               <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-sm">
//                     <thead className="bg-gradient-to-r from-green-600 to-emerald-700 text-white">
//                       <tr>
//                         <th className="px-4 py-3 text-left">Pos</th>
//                         <th className="px-4 py-3 text-left">Team</th>
//                         <th className="px-4 py-3 text-center">P</th>
//                         <th className="px-4 py-3 text-center">W</th>
//                         <th className="px-4 py-3 text-center">D</th>
//                         <th className="px-4 py-3 text-center">L</th>
//                         <th className="px-4 py-3 text-center">GD</th>
//                         <th className="px-4 py-3 text-center">Pts</th>
//                         <th className="px-4 py-3 text-center">Form</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200">
//                       {league.standings.map((team) => (
//                         <tr key={team.pos} className="hover:bg-gray-50">
//                           <td className="px-4 py-3">
//                             <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full font-bold text-sm ${
//                               team.pos === 1 ? 'bg-yellow-400 text-white' :
//                               team.pos <= 4 ? 'bg-green-500 text-white' :
//                               team.pos >= 18 ? 'bg-red-500 text-white' :
//                               'bg-gray-200 text-gray-700'
//                             }`}>
//                               {team.pos}
//                             </span>
//                           </td>
//                           <td className="px-4 py-3 font-medium text-gray-800">
//                             <Link to={`/football/team/${team.team.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-green-600">
//                               {team.team}
//                             </Link>
//                           </td>
//                           <td className="px-4 py-3 text-center">{team.played}</td>
//                           <td className="px-4 py-3 text-center text-green-600 font-medium">{team.won}</td>
//                           <td className="px-4 py-3 text-center text-yellow-600 font-medium">{team.drawn}</td>
//                           <td className="px-4 py-3 text-center text-red-600 font-medium">{team.lost}</td>
//                           <td className="px-4 py-3 text-center font-medium">
//                             {team.gd > 0 ? '+' : ''}{team.gd}
//                           </td>
//                           <td className="px-4 py-3 text-center">
//                             <span className="bg-green-600 text-white font-bold px-3 py-1 rounded-full text-sm">
//                               {team.points}
//                             </span>
//                           </td>
//                           <td className="px-4 py-3">
//                             <div className="flex gap-1 justify-center">
//                               {team.form.map((result, idx) => (
//                                 <span key={idx} className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${getFormColor(result)}`}>
//                                   {result}
//                                 </span>
//                               ))}
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             )}

//             {/* Top Scorers */}
//             {activeTab === 'top-scorers' && (
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
//                 {league.topScorers.map((scorer, index) => (
//                   <div key={index} className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between">
//                     <div className="flex items-center gap-4">
//                       <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
//                         index === 0 ? 'bg-yellow-400 text-white' :
//                         index === 1 ? 'bg-gray-300 text-white' :
//                         index === 2 ? 'bg-orange-400 text-white' :
//                         'bg-gray-100 text-gray-700'
//                       }`}>
//                         {index + 1}
//                       </div>
//                       <div>
//                         <h3 className="font-bold text-gray-800">{scorer.name}</h3>
//                         <p className="text-sm text-gray-600">{scorer.team}</p>
//                       </div>
//                     </div>
//                     <div className="text-center">
//                       <Target className="w-8 h-8 text-green-600 mx-auto mb-1" />
//                       <p className="text-2xl font-bold text-green-600">{scorer.goals}</p>
//                       <p className="text-xs text-gray-600">Goals</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* Recent Matches */}
//             {activeTab === 'recent-matches' && (
//               <div className="space-y-3">
//                 {league.recentMatches.map((match, index) => (
//                   <div key={index} className="bg-white rounded-xl shadow-md p-3 sm:p-4 flex items-center justify-between gap-4">
//                     {/* Home Team */}
//                     <div className="text-right flex-1">
//                       <p className="font-bold text-gray-800 text-sm sm:text-base truncate">
//                         {match.home}
//                       </p>
//                     </div>

//                     {/* Score */}
//                     <div className="flex flex-col items-center">
//                       <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-4 sm:px-6 py-2 rounded-lg shadow">
//                         <p className="text-lg sm:text-xl font-bold">{match.score}</p>
//                       </div>
//                       <p className="text-xs text-gray-500 mt-1">
//                         {new Date(match.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
//                       </p>
//                     </div>

//                     {/* Away Team */}
//                     <div className="text-left flex-1">
//                       <p className="font-bold text-gray-800 text-sm sm:text-base truncate">
//                         {match.away}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Right Sidebar - Desktop Only */}
//           <div className="hidden lg:block lg:col-span-4">
//             <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
//               <h3 className="text-lg font-bold text-gray-900 mb-5">Top Football Stories</h3>
//               <div className="space-y-4">
//                 {TopFootballStories.data.TopFootballStories.slice(0, 5).map((story) => (
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
//                 onClick={() => navigate('/all-top-football-stories')}
//                 className="mt-6 w-full text-center text-green-600 font-medium hover:underline text-sm"
//               >
//                 View All Stories →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Top Football Stories */}
//       <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-xl shadow-md p-5">
//             <h3 className="text-lg font-bold text-gray-900 mb-4">Top Football Stories</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {TopFootballStories.data.TopFootballStories.slice(0, 4).map((story) => (
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
//               onClick={() => navigate('/all-top-football-stories')}
//               className="mt-4 w-full text-center text-green-600 font-medium hover:underline text-sm"
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
//                 className="text-green-600 hover:underline font-medium text-sm sm:text-base"
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

// export default FootballLeagueDetail;


import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Trophy, Target, Calendar, Award } from 'lucide-react';
import TopFootballStories from '../../data/TopFootballStories.js';
import LatestNews from '../../data/LatestNews.js';
import { footballLeagueDetails } from '../../data/FootballLeagueDetail.js';

const FootballLeagueDetail = () => {
  const { leagueId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('standings');

  // Data ab external file se aa raha hai
  const league = footballLeagueDetails[leagueId] || footballLeagueDetails['premier-league'];

  const getFormColor = (result) => {
    const colors = { 'W': 'bg-green-500', 'D': 'bg-yellow-500', 'L': 'bg-red-500' };
    return colors[result] || 'bg-gray-500';
  };

  const handleStoryClick = (id) => {
    navigate(`/details/football/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Left/Main Content */}
          <div className="lg:col-span-8 space-y-6">

            {/* Compact Hero Section */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-10 rounded-xl shadow-xl">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center gap-4 mb-3">
                  <img
                    src={league.logo}
                    alt={`${league.name} logo`}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/80?text=🏆'; }}
                  />
                  <div>
                    <h1 className="text-4xl font-bold mb-1">{league.name}</h1>
                    <p className="text-green-100 text-lg">{league.country} • Season {league.season}</p>
                  </div>
                </div>
                <p className="text-green-100 text-base max-w-3xl">{league.description}</p>
              </div>
            </div>

            {/* Compact Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-xl p-5 shadow text-center">
                <Trophy className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <p className="text-2xl font-bold">{league.teams}</p>
                <p className="text-sm text-gray-600">Teams</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow text-center">
                <Calendar className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="text-2xl font-bold">{league.matches}</p>
                <p className="text-sm text-gray-600">Matches</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow text-center">
                <Award className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                <p className="text-2xl font-bold">{league.founded}</p>
                <p className="text-sm text-gray-600">Founded</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow text-center">
                <Trophy className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                <p className="text-lg font-bold">{league.currentChampion}</p>
                <p className="text-sm text-gray-600">Defending Champion</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {['standings', 'top-scorers', 'recent-matches'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2.5 rounded-lg font-semibold whitespace-nowrap transition-all ${
                      activeTab === tab
                        ? 'bg-green-600 text-white shadow'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Standings Table */}
            {activeTab === 'standings' && (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gradient-to-r from-green-600 to-emerald-700 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Pos</th>
                        <th className="px-4 py-3 text-left">Team</th>
                        <th className="px-4 py-3 text-center">P</th>
                        <th className="px-4 py-3 text-center">W</th>
                        <th className="px-4 py-3 text-center">D</th>
                        <th className="px-4 py-3 text-center">L</th>
                        <th className="px-4 py-3 text-center">GD</th>
                        <th className="px-4 py-3 text-center">Pts</th>
                        <th className="px-4 py-3 text-center">Form</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {league.standings.map((team) => (
                        <tr key={team.pos} className="hover:bg-gray-50">
                          <td className="px-4 py-3">
                            <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full font-bold text-sm ${
                              team.pos === 1 ? 'bg-yellow-400 text-white' :
                              team.pos <= 4 ? 'bg-green-500 text-white' :
                              team.pos >= 18 ? 'bg-red-500 text-white' :
                              'bg-gray-200 text-gray-700'
                            }`}>
                              {team.pos}
                            </span>
                          </td>
                          <td className="px-4 py-3 font-medium text-gray-800">
                            <div className="flex items-center gap-2">
                              <img
                                src={team.logo}
                                alt={`${team.team} logo`}
                                className="w-6 h-6 object-contain"
                                onError={(e) => { e.target.style.display = 'none'; }}
                              />
                              <Link to={`/football/team/${team.team.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-green-600">
                                {team.team}
                              </Link>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-center">{team.played}</td>
                          <td className="px-4 py-3 text-center text-green-600 font-medium">{team.won}</td>
                          <td className="px-4 py-3 text-center text-yellow-600 font-medium">{team.drawn}</td>
                          <td className="px-4 py-3 text-center text-red-600 font-medium">{team.lost}</td>
                          <td className="px-4 py-3 text-center font-medium">
                            {team.gd > 0 ? '+' : ''}{team.gd}
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span className="bg-green-600 text-white font-bold px-3 py-1 rounded-full text-sm">
                              {team.points}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex gap-1 justify-center">
                              {team.form.map((result, idx) => (
                                <span key={idx} className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${getFormColor(result)}`}>
                                  {result}
                                </span>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Top Scorers */}
            {activeTab === 'top-scorers' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {league.topScorers.map((scorer, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                        index === 0 ? 'bg-yellow-400 text-white' :
                        index === 1 ? 'bg-gray-300 text-white' :
                        index === 2 ? 'bg-orange-400 text-white' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">{scorer.name}</h3>
                        <p className="text-sm text-gray-600">{scorer.team}</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <Target className="w-8 h-8 text-green-600 mx-auto mb-1" />
                      <p className="text-2xl font-bold text-green-600">{scorer.goals}</p>
                      <p className="text-xs text-gray-600">Goals</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Recent Matches */}
            {activeTab === 'recent-matches' && (
              <div className="space-y-3">
                {league.recentMatches.map((match, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-3 sm:p-4 flex items-center justify-between gap-3 sm:gap-6">
                    {/* Home Team */}
                    <div className="text-right flex-1 flex items-center justify-end gap-2">
                      <p className="font-bold text-gray-800 text-sm sm:text-base truncate max-w-[120px] sm:max-w-none">
                        {match.home}
                      </p>
                      <img
                        src={match.homeLogo}
                        alt={`${match.home} logo`}
                        className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>

                    {/* Score & Date */}
                    <div className="flex flex-col items-center min-w-[80px] sm:min-w-[100px]">
                      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-4 sm:px-6 py-2 rounded-lg shadow">
                        <p className="text-base sm:text-xl font-bold">{match.score}</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(match.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </p>
                    </div>

                    {/* Away Team */}
                    <div className="text-left flex-1 flex items-center justify-start gap-2">
                      <img
                        src={match.awayLogo}
                        alt={`${match.away} logo`}
                        className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                      <p className="font-bold text-gray-800 text-sm sm:text-base truncate max-w-[120px] sm:max-w-none">
                        {match.away}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Sidebar - Desktop Only */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-5">Top Football Stories</h3>
              <div className="space-y-4">
                {TopFootballStories.data.TopFootballStories.slice(0, 5).map((story) => (
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
                onClick={() => navigate('/all-top-football-stories')}
                className="mt-6 w-full text-center text-green-600 font-medium hover:underline text-sm"
              >
                View All Stories →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Top Football Stories */}
      <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top Football Stories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TopFootballStories.data.TopFootballStories.slice(0, 4).map((story) => (
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
              onClick={() => navigate('/all-top-football-stories')}
              className="mt-4 w-full text-center text-green-600 font-medium hover:underline text-sm"
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
                className="text-green-600 hover:underline font-medium text-sm sm:text-base"
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

export default FootballLeagueDetail;
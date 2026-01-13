

// import React from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import { Trophy, Calendar, TrendingUp, ArrowLeft, Clock } from 'lucide-react';
// import TopBasketballStories from '../../data/TopBasketballStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { leagueDetails } from '../../data/BasketballLeagueDetail.js';

// const LeagueDetail = () => {
//   const { leagueId } = useParams();
//   const navigate = useNavigate();

//   // Get league data from external file, fallback to NBA if not found
//   const league = leagueDetails[leagueId] || leagueDetails.nba;

//   const handleStoryClick = (id) => {
//     navigate(`/details/basketball/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-red-50">
//       {/* Main Container */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

//           {/* Left: League Content */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Hero Header Card */}
//             <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 text-white rounded-xl shadow-xl p-5 sm:p-8">
//               <Link to="/basketball/leagues" className="inline-flex items-center text-orange-100 hover:text-white mb-4">
//                 <ArrowLeft className="w-4 h-4 mr-2" />
//                 Back to Leagues
//               </Link>
//               <div className="flex items-center gap-4">
//                 <img src={league.logo} alt={league.name} className="w-16 h-16 bg-white p-2 rounded-lg" />
//                 <div>
//                   <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{league.name}</h1>
//                   <p className="text-orange-100 text-sm sm:text-base">{league.fullName}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Standings + Recent Matches */}
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               {/* Standings */}
//               <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
//                 <div className="flex items-center gap-2 mb-6">
//                   <Trophy className="w-6 h-6 text-orange-600" />
//                   <h2 className="text-2xl font-bold text-gray-800">Standings</h2>
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="border-b-2 border-gray-200">
//                         <th className="text-left py-3 text-gray-600 font-semibold">#</th>
//                         <th className="text-left py-3 text-gray-600 font-semibold">Team</th>
//                         <th className="text-center py-3 text-gray-600 font-semibold">W</th>
//                         <th className="text-center py-3 text-gray-600 font-semibold">L</th>
//                         <th className="text-center py-3 text-gray-600 font-semibold">PCT</th>
//                         <th className="text-center py-3 text-gray-600 font-semibold">Streak</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {league.standings.map((team) => (
//                         <tr key={team.rank} className="border-b hover:bg-orange-50">
//                           <td className="py-4 font-medium">{team.rank}</td>
//                           <td className="py-4 font-semibold text-gray-800">{team.team}</td>
//                           <td className="py-4 text-center">{team.wins}</td>
//                           <td className="py-4 text-center">{team.losses}</td>
//                           <td className="py-4 text-center font-medium">{team.pct}</td>
//                           <td className="py-4 text-center">
//                             <span className={`px-2 py-1 rounded text-sm font-medium ${
//                               team.streak.startsWith('W') 
//                                 ? 'bg-green-100 text-green-700' 
//                                 : 'bg-red-100 text-red-700'
//                             }`}>
//                               {team.streak}
//                             </span>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>

//               {/* Recent Matches */}
//               <div className="bg-white rounded-xl shadow-lg p-6">
//                 <div className="flex items-center gap-2 mb-6">
//                   <Calendar className="w-6 h-6 text-orange-600" />
//                   <h2 className="text-xl font-bold text-gray-800">Recent Matches</h2>
//                 </div>
//                 <div className="space-y-4">
//                   {league.recentMatches.map((match, idx) => (
//                     <div key={idx} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
//                       <p className="text-xs text-gray-500 mb-2">{match.date}</p>
//                       <div className="flex justify-between items-center mb-1">
//                         <span className="text-sm font-medium">{match.home}</span>
//                         <span className="font-bold text-lg">{match.homeScore}</span>
//                       </div>
//                       <div className="flex justify-between items-center">
//                         <span className="text-sm font-medium">{match.away}</span>
//                         <span className="font-bold text-lg">{match.awayScore}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Top Scorers */}
//             <div className="bg-white rounded-xl shadow-lg p-6">
//               <div className="flex items-center gap-2 mb-6">
//                 <TrendingUp className="w-6 h-6 text-orange-600" />
//                 <h2 className="text-2xl font-bold text-gray-800">Top Scorers</h2>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="border-b-2 border-gray-200">
//                       <th className="text-left py-3 text-gray-600 font-semibold">#</th>
//                       <th className="text-left py-3 text-gray-600 font-semibold">Player</th>
//                       <th className="text-left py-3 text-gray-600 font-semibold">Team</th>
//                       <th className="text-center py-3 text-gray-600 font-semibold">PPG</th>
//                       <th className="text-center py-3 text-gray-600 font-semibold">RPG</th>
//                       <th className="text-center py-3 text-gray-600 font-semibold">APG</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {league.topScorers.map((player) => (
//                       <tr key={player.rank} className="border-b hover:bg-orange-50">
//                         <td className="py-4 font-medium">{player.rank}</td>
//                         <td className="py-4 font-semibold text-gray-800">{player.player}</td>
//                         <td className="py-4 text-gray-600">{player.team}</td>
//                         <td className="py-4 text-center font-bold text-orange-600">{player.ppg}</td>
//                         <td className="py-4 text-center">{player.rpg}</td>
//                         <td className="py-4 text-center">{player.apg}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
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

// export default LeagueDetail;


import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Trophy, Calendar, TrendingUp, ArrowLeft, Clock } from 'lucide-react';
import TopBasketballStories from '../../data/TopBasketballStories.js';
import LatestNews from '../../data/LatestNews.js';
import { leagueDetails } from '../../data/BasketballLeagueDetail.js';

const LeagueDetail = () => {
  const { leagueId } = useParams();
  const navigate = useNavigate();

  // Get league data from external file, fallback to NBA if not found
  const league = leagueDetails[leagueId] || leagueDetails.nba;

  // Check if league data exists
  if (!league || !league.standings || !league.recentMatches || !league.topScorers) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-red-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">League Not Found</h2>
          <p className="text-gray-600 mb-4">The requested league data is not available.</p>
          <Link 
            to="/basketball/leagues" 
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Leagues
          </Link>
        </div>
      </div>
    );
  }

  const handleStoryClick = (id) => {
    navigate(`/details/basketball/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-red-50">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Left: League Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Hero Header Card */}
            <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 text-white rounded-xl shadow-xl p-5 sm:p-8">
              <Link to="/basketball/leagues" className="inline-flex items-center text-orange-100 hover:text-white mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Leagues
              </Link>
              <div className="flex items-center gap-4">
                <img 
                  src={league.logo} 
                  alt={league.name} 
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-white p-2 rounded-lg object-contain" 
                />
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{league.name}</h1>
                  <p className="text-orange-100 text-sm sm:text-base">{league.fullName}</p>
                </div>
              </div>
            </div>

            {/* Standings + Recent Matches */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Standings */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Trophy className="w-6 h-6 text-orange-600" />
                  <h2 className="text-2xl font-bold text-gray-800">Standings</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-3 text-gray-600 font-semibold">#</th>
                        <th className="text-left py-3 text-gray-600 font-semibold">Team</th>
                        <th className="text-center py-3 text-gray-600 font-semibold">W</th>
                        <th className="text-center py-3 text-gray-600 font-semibold">L</th>
                        <th className="text-center py-3 text-gray-600 font-semibold">PCT</th>
                        <th className="text-center py-3 text-gray-600 font-semibold">Streak</th>
                      </tr>
                    </thead>
                    <tbody>
                      {league.standings.map((team) => (
                        <tr key={team.rank} className="border-b hover:bg-orange-50">
                          <td className="py-4 font-medium">{team.rank}</td>
                          <td className="py-4">
                            <div className="flex items-center gap-2">
                              {team.logo && (
                                <img 
                                  src={team.logo} 
                                  alt={`${team.team} logo`} 
                                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain flex-shrink-0" 
                                />
                              )}
                              <span className="font-semibold text-gray-800">{team.team}</span>
                            </div>
                          </td>
                          <td className="py-4 text-center">{team.wins}</td>
                          <td className="py-4 text-center">{team.losses}</td>
                          <td className="py-4 text-center font-medium">{team.pct}</td>
                          <td className="py-4 text-center">
                            <span className={`px-2 py-1 rounded text-sm font-medium ${
                              team.streak.startsWith('W') 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-red-100 text-red-700'
                            }`}>
                              {team.streak}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Recent Matches */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Calendar className="w-6 h-6 text-orange-600" />
                  <h2 className="text-xl font-bold text-gray-800">Recent Matches</h2>
                </div>
                <div className="space-y-4">
                  {league.recentMatches.map((match, idx) => (
                    <div key={idx} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <p className="text-xs text-gray-500 mb-2">{match.date}</p>
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          {match.homeLogo && (
                            <img 
                              src={match.homeLogo} 
                              alt={`${match.home} logo`} 
                              className="w-5 h-5 object-contain flex-shrink-0" 
                            />
                          )}
                          <span className="text-sm font-medium truncate">{match.home}</span>
                        </div>
                        <span className="font-bold text-lg ml-2">{match.homeScore}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          {match.awayLogo && (
                            <img 
                              src={match.awayLogo} 
                              alt={`${match.away} logo`} 
                              className="w-5 h-5 object-contain flex-shrink-0" 
                            />
                          )}
                          <span className="text-sm font-medium truncate">{match.away}</span>
                        </div>
                        <span className="font-bold text-lg ml-2">{match.awayScore}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Scorers */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-800">Top Scorers</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 text-gray-600 font-semibold">#</th>
                      <th className="text-left py-3 text-gray-600 font-semibold">Player</th>
                      <th className="text-left py-3 text-gray-600 font-semibold">Team</th>
                      <th className="text-center py-3 text-gray-600 font-semibold">PPG</th>
                      <th className="text-center py-3 text-gray-600 font-semibold">RPG</th>
                      <th className="text-center py-3 text-gray-600 font-semibold">APG</th>
                    </tr>
                  </thead>
                  <tbody>
                    {league.topScorers.map((player) => (
                      <tr key={player.rank} className="border-b hover:bg-orange-50">
                        <td className="py-4 font-medium">{player.rank}</td>
                        <td className="py-4">
                          <div className="flex items-center gap-2">
                            {player.avatar && (
                              <img 
                                src={player.avatar} 
                                alt={`${player.player} avatar`} 
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0" 
                              />
                            )}
                            <span className="font-semibold text-gray-800">{player.player}</span>
                          </div>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center gap-2">
                            {player.teamLogo && (
                              <img 
                                src={player.teamLogo} 
                                alt={`${player.team} logo`} 
                                className="w-6 h-6 sm:w-7 sm:h-7 object-contain flex-shrink-0" 
                              />
                            )}
                            <span className="text-gray-600">{player.team}</span>
                          </div>
                        </td>
                        <td className="py-4 text-center font-bold text-orange-600">{player.ppg}</td>
                        <td className="py-4 text-center">{player.rpg}</td>
                        <td className="py-4 text-center">{player.apg}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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

export default LeagueDetail;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import basketballData from '../../data/BasketballData.json';

// const LiveScores = () => {
//   const { live_matches } = basketballData;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-8">
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="text-3xl md:text-4xl font-bold mb-2">Basketball Live Scores</h1>
//           <p className="text-orange-100">Real-time updates from NBA, FIBA, and WNBA matches</p>
//         </div>
//       </div>

//       {/* Live Matches */}
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="mb-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Live Matches</h2>
//           <div className="space-y-6">
//             {live_matches.map((match) => (
//               <Link
//                 key={match.match_id}
//                 to={`/basketball-scorecard/${match.match_id}`}
//                 className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
//               >
//                 {/* Match Header */}
//                 <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4">
//                   <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
//                     <div>
//                       <h3 className="font-bold text-lg">{match.league}</h3>
//                       <p className="text-orange-100 text-sm">{match.match_type} • {match.match_round}</p>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <span className="px-3 py-1 bg-red-600 rounded-full text-sm font-semibold animate-pulse">
//                         LIVE
//                       </span>
//                       <span className="text-sm font-medium">Q{match.match_info.quarter} • {match.match_info.time_remaining}</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Teams Score */}
//                 <div className="p-6">
//                   {match.teams.map((team, idx) => (
//                     <div key={idx} className={`flex items-center justify-between ${idx === 0 ? 'mb-4 pb-4 border-b-2' : ''}`}>
//                       <div className="flex items-center gap-4">
//                         <img 
//                           src={match.images[`team${idx + 1}_flag`]} 
//                           alt={team.name}
//                           className="w-12 h-12 object-cover rounded-lg shadow-md"
//                         />
//                         <div>
//                           <h4 className="font-bold text-lg text-gray-800">{team.name}</h4>
//                           <p className="text-sm text-gray-500">{team.short_name}</p>
//                         </div>
//                       </div>
//                       <div className="text-3xl font-bold text-gray-800">
//                         {team.total_points}
//                       </div>
//                     </div>
//                   ))}

//                   {/* Quarter Scores */}
//                   <div className="mt-6 bg-gray-50 rounded-lg p-4">
//                     <h5 className="text-sm font-semibold text-gray-600 mb-3">Quarter Breakdown</h5>
//                     <div className="overflow-x-auto">
//                       <table className="w-full text-sm">
//                         <thead>
//                           <tr className="border-b">
//                             <th className="text-left py-2 text-gray-600 font-medium">Team</th>
//                             {match.quarter_scores.map((q) => (
//                               <th key={q.quarter_number} className="text-center py-2 text-gray-600 font-medium">
//                                 Q{q.quarter_number}
//                               </th>
//                             ))}
//                             <th className="text-center py-2 text-gray-600 font-medium">Total</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {match.teams.map((team, idx) => (
//                             <tr key={idx} className="border-b last:border-b-0">
//                               <td className="py-2 font-medium text-gray-800">{team.short_name}</td>
//                               {match.quarter_scores.map((q) => (
//                                 <td key={q.quarter_number} className="text-center py-2">
//                                   {idx === 0 ? q.team1_points : q.team2_points}
//                                 </td>
//                               ))}
//                               <td className="text-center py-2 font-bold">{team.total_points}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>

//                   {/* Match Info */}
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
//                       📍 {match.arena.name}, {match.arena.city}
//                     </span>
//                     <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
//                       {match.match_info.current_status}
//                     </span>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LiveScores;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import basketballData from '../../data/BasketballData.json';

// const LiveScores = () => {
//   const { live_matches } = basketballData;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 py-6">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="mb-6">
//           <h1 className="text-2xl font-bold text-gray-900 mb-1">🏀 Basketball Live Scores</h1>
//           <p className="text-gray-600 text-sm">Real-time NBA, EuroLeague & international matches</p>
//         </div>

//         {/* Live Matches */}
//         <div className="space-y-5">
//           {live_matches.map((match) => (
//             <Link
//               key={match.match_id}
//               to={`/basketball-scorecard/${match.match_id}`}
//               className="block bg-white rounded-lg shadow hover:shadow-md transition-all border border-gray-100"
//             >
//               {/* League + Status Header */}
//               <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4 rounded-t-lg">
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="font-semibold text-sm">{match.league}</p>
//                     <p className="text-xs opacity-90">{match.match_type}</p>
//                   </div>
//                   <div className="text-right">
//                     <span className="inline-block px-3 py-1 bg-red-500 rounded-full text-xs font-bold animate-pulse">
//                       LIVE
//                     </span>
//                     <p className="text-xs mt-1">
//                       Q{match.match_info.quarter} • {match.match_info.time_remaining}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Teams & Scores */}
//               <div className="p-5">
//                 <div className="grid grid-cols-3 items-center gap-4 mb-5">
//                   {/* Team 1 */}
//                   <div className="flex items-center gap-3">
//                     <img
//                       src={match.images.team1_flag}
//                       alt={match.teams[0].name}
//                       className="w-12 h-12 object-contain rounded"
//                     />
//                     <div>
//                       <p className="font-semibold text-gray-800">{match.teams[0].short_name}</p>
//                       <p className="text-2xl font-bold text-orange-600">{match.teams[0].total_points}</p>
//                     </div>
//                   </div>

//                   {/* VS */}
//                   <div className="text-center text-xl font-bold text-gray-400">
//                     VS
//                   </div>

//                   {/* Team 2 */}
//                   <div className="flex items-center gap-3 justify-end">
//                     <div className="text-right">
//                       <p className="font-semibold text-gray-800">{match.teams[1].short_name}</p>
//                       <p className="text-2xl font-bold text-orange-600">{match.teams[1].total_points}</p>
//                     </div>
//                     <img
//                       src={match.images.team2_flag}
//                       alt={match.teams[1].name}
//                       className="w-12 h-12 object-contain rounded"
//                     />
//                   </div>
//                 </div>

//                 {/* Quarter Breakdown */}
//                 <div className="bg-gray-50 rounded-lg p-3">
//                   <p className="text-xs font-medium text-gray-600 mb-2">Quarter Scores</p>
//                   <div className="grid grid-cols-6 text-xs text-center">
//                     <div className="font-medium text-gray-700">Team</div>
//                     {match.quarter_scores.map((q) => (
//                       <div key={q.quarter_number} className="font-medium text-gray-600">
//                         Q{q.quarter_number}
//                       </div>
//                     ))}
//                     <div className="font-medium text-gray-700">Total</div>

//                     {/* Team 1 Row */}
//                     <div className="font-medium">{match.teams[0].short_name}</div>
//                     {match.quarter_scores.map((q) => (
//                       <div key={q.quarter_number}>{q.team1_points}</div>
//                     ))}
//                     <div className="font-bold text-orange-600">{match.teams[0].total_points}</div>

//                     {/* Team 2 Row */}
//                     <div className="font-medium">{match.teams[1].short_name}</div>
//                     {match.quarter_scores.map((q) => (
//                       <div key={q.quarter_number}>{q.team2_points}</div>
//                     ))}
//                     <div className="font-bold text-orange-600">{match.teams[1].total_points}</div>
//                   </div>
//                 </div>

//                 {/* Venue */}
//                 <div className="mt-4 flex justify-between items-center text-xs text-gray-600">
//                   <div>
//                     <p className="font-medium">{match.arena.name}</p>
//                     <p>{match.arena.city}</p>
//                   </div>
//                   <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
//                     {match.match_info.current_status}
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {live_matches.length === 0 && (
//           <div className="bg-white rounded-xl shadow-md p-10 text-center text-gray-500">
//             No live matches at the moment
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LiveScores;


import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, Trophy } from 'lucide-react';
import basketballData from '../../data/BasketballData.json';
import TopBasketballStories from '../../data/TopBasketballStories.js';
import LatestNews from '../../data/LatestNews.js';

const LiveScores = () => {
  const navigate = useNavigate();
  const { live_matches } = basketballData;

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

          {/* Left: Live Matches */}
          <div className="lg:col-span-8 space-y-6">
            {/* Hero Header */}
            <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 text-white rounded-xl shadow-xl p-5 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">🏀 Basketball Live Scores</h1>
                  <p className="text-orange-100 text-sm sm:text-base">Real-time NBA, EuroLeague & international matches</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-semibold">{new Date().toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Matches List */}
            <div className="space-y-5">
              {live_matches.length === 0 ? (
                <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12 text-center">
                  <div className="text-5xl sm:text-6xl mb-4">🏀</div>
                  <p className="text-gray-500 text-base sm:text-lg">No live matches at the moment</p>
                  <p className="text-gray-400 text-sm mt-2">Check back later for updates</p>
                </div>
              ) : (
                live_matches.map((match) => (
                  <Link
                    key={match.match_id}
                    to={`/basketball-scorecard/${match.match_id}`}
                    className="block bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                  >
                    {/* League + Status Header */}
                    <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4 rounded-t-xl">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="flex items-center gap-2">
                            <Trophy className="h-4 w-4" />
                            <span className="font-semibold text-sm">{match.league}</span>
                          </div>
                          <p className="text-xs opacity-90 mt-1">{match.match_type}</p>
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-3 py-1 bg-red-500 rounded-full text-xs font-bold animate-pulse">
                            LIVE
                          </span>
                          <p className="text-xs mt-1">
                            Q{match.match_info.quarter} • {match.match_info.time_remaining}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Teams & Scores */}
                    <div className="p-5">
                      <div className="grid grid-cols-3 items-center gap-4 mb-5">
                        {/* Team 1 */}
                        <div className="flex items-center gap-3">
                          <img
                            src={match.images.team1_flag}
                            alt={match.teams[0].name}
                            className="w-12 h-12 object-contain rounded"
                          />
                          <div>
                            <p className="font-semibold text-gray-800">{match.teams[0].short_name}</p>
                            <p className="text-2xl font-bold text-orange-600">{match.teams[0].total_points}</p>
                          </div>
                        </div>

                        <div className="text-center text-xl font-bold text-gray-400">VS</div>

                        {/* Team 2 */}
                        <div className="flex items-center gap-3 justify-end">
                          <div className="text-right">
                            <p className="font-semibold text-gray-800">{match.teams[1].short_name}</p>
                            <p className="text-2xl font-bold text-orange-600">{match.teams[1].total_points}</p>
                          </div>
                          <img
                            src={match.images.team2_flag}
                            alt={match.teams[1].name}
                            className="w-12 h-12 object-contain rounded"
                          />
                        </div>
                      </div>

                      {/* Venue & Status */}
                      <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-600">
                        <div>
                          <p className="font-medium">{match.arena.name}</p>
                          <p>{match.arena.city}</p>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          {match.match_info.current_status}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>

          {/* Right Sidebar: Top Basketball Stories (Desktop only) */}
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

      {/* Latest Sports News - Full width */}
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

export default LiveScores;
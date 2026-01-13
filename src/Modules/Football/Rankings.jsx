

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { TrendingUp, TrendingDown, Minus, Star, Search } from 'lucide-react';
// import TopFootballStories from '../../data/TopFootballStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { footballRankings } from '../../data/FootballRankingsData.js';

// const FootballRankings = () => {
//   const navigate = useNavigate();
//   const [selectedPosition, setSelectedPosition] = useState('all');
//   const [searchQuery, setSearchQuery] = useState('');

//   const positions = ['all', 'Forward', 'Midfielder', 'Defender', 'Goalkeeper'];

//   const getRankChange = (current, prev) => {
//     const diff = prev - current;
//     if (diff > 0) return { Icon: TrendingUp, color: 'text-green-600', text: `+${diff}` };
//     if (diff < 0) return { Icon: TrendingDown, color: 'text-red-600', text: `${diff}` };
//     return { Icon: Minus, color: 'text-gray-400', text: '—' };
//   };

//   const filteredRankings = footballRankings.filter(player => {
//     const matchesPosition = selectedPosition === 'all' || player.position === selectedPosition;
//     const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          player.team.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesPosition && matchesSearch;
//   });

//   const handleStoryClick = (id) => {
//     navigate(`/details/football/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Main Grid Layout */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

//           {/* Main Content */}
//           <div className="lg:col-span-8 space-y-6">

//             {/* Header */}
//             <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 rounded-xl shadow-xl">
//               <div className="max-w-7xl mx-auto px-4">
//                 <h1 className="text-4xl md:text-5xl font-bold mb-3">🏆 Player Rankings</h1>
//                 <p className="text-blue-100 text-lg">Top football players by current performance – January 2026</p>
//               </div>
//             </div>

//             {/* Filters */}
//             <div className="bg-white rounded-xl shadow-md p-5 mb-6">
//               <div className="flex flex-col md:flex-row gap-4">
//                 <div className="flex-1 relative">
//                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     type="text"
//                     placeholder="Search player or team..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 <select
//                   value={selectedPosition}
//                   onChange={(e) => setSelectedPosition(e.target.value)}
//                   className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
//                 >
//                   {positions.map(pos => (
//                     <option key={pos} value={pos}>
//                       {pos === 'all' ? 'All Positions' : pos + 's'}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {/* Rankings Table */}
//             <div className="bg-white rounded-xl shadow-md overflow-hidden">
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm">
//                     <tr>
//                       <th className="px-5 py-3 text-left font-medium">Rank</th>
//                       <th className="px-5 py-3 text-left font-medium">Player</th>
//                       <th className="px-5 py-3 text-center font-medium">Rating</th>
//                       <th className="px-5 py-3 text-center font-medium">G</th>
//                       <th className="px-5 py-3 text-center font-medium">A</th>
//                       <th className="px-5 py-3 text-center font-medium">Age</th>
//                       <th className="px-5 py-3 text-center font-medium">Value</th>
//                       <th className="px-5 py-3 text-center font-medium">Δ</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-100">
//                     {filteredRankings.map((player) => {
//                       const { Icon: ChangeIcon, color, text } = getRankChange(player.rank, player.prevRank);

//                       return (
//                         <tr key={player.id} className="hover:bg-gray-50 transition-colors">
//                           <td className="px-5 py-4">
//                             <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white ${
//                               player.rank === 1 ? 'bg-yellow-500' :
//                               player.rank === 2 ? 'bg-gray-400' :
//                               player.rank === 3 ? 'bg-orange-500' :
//                               'bg-gray-600'
//                             }`}>
//                               {player.rank}
//                             </div>
//                           </td>
//                           <td className="px-5 py-4">
//                             <Link to={`/football/player/${player.id}`} className="flex items-center gap-3 group">
//                               <span className="text-2xl">{player.country}</span>
//                               <div>
//                                 <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
//                                   {player.name}
//                                 </p>
//                                 <p className="text-xs text-gray-500">{player.team}</p>
//                               </div>
//                             </Link>
//                           </td>
//                           <td className="px-5 py-4 text-center">
//                             <div className="flex items-center justify-center gap-1">
//                               <Star className="w-4 h-4 text-yellow-500 fill-current" />
//                               <span className="font-bold">{player.rating}</span>
//                             </div>
//                           </td>
//                           <td className="px-5 py-4 text-center font-semibold text-blue-600">{player.goals}</td>
//                           <td className="px-5 py-4 text-center font-semibold text-green-600">{player.assists}</td>
//                           <td className="px-5 py-4 text-center text-gray-600">{player.age}</td>
//                           <td className="px-5 py-4 text-center font-medium text-purple-600">{player.marketValue}</td>
//                           <td className="px-5 py-4 text-center">
//                             <div className={`flex items-center justify-center gap-1 ${color}`}>
//                               <ChangeIcon className="w-4 h-4" />
//                               <span className="font-medium text-sm">{text}</span>
//                             </div>
//                           </td>
//                         </tr>
//                       );
//                     })}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Movers Section */}
//             <div className="mt-8 grid md:grid-cols-2 gap-6">
//               <div className="bg-white rounded-xl shadow-md p-5">
//                 <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-green-600">
//                   <TrendingUp className="w-5 h-5" /> Biggest Climbers
//                 </h3>
//                 <div className="space-y-2">
//                   {filteredRankings
//                     .filter(p => p.prevRank > p.rank)
//                     .sort((a, b) => (b.prevRank - b.rank) - (a.prevRank - a.rank))
//                     .slice(0, 4)
//                     .map(p => (
//                       <div key={p.id} className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg text-sm">
//                         <div className="flex items-center gap-2">
//                           <span>{p.country}</span>
//                           <span className="font-medium">{p.name}</span>
//                         </div>
//                         <span className="text-green-600 font-bold">+{p.prevRank - p.rank}</span>
//                       </div>
//                     ))}
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl shadow-md p-5">
//                 <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-red-600">
//                   <TrendingDown className="w-5 h-5" /> Biggest Fallers
//                 </h3>
//                 <div className="space-y-2">
//                   {filteredRankings
//                     .filter(p => p.prevRank < p.rank)
//                     .sort((a, b) => (a.rank - a.prevRank) - (b.rank - b.prevRank))
//                     .slice(0, 4)
//                     .map(p => (
//                       <div key={p.id} className="flex items-center justify-between py-2 px-3 bg-red-50 rounded-lg text-sm">
//                         <div className="flex items-center gap-2">
//                           <span>{p.country}</span>
//                           <span className="font-medium">{p.name}</span>
//                         </div>
//                         <span className="text-red-600 font-bold">{p.rank - p.prevRank}</span>
//                       </div>
//                     ))}
//                 </div>
//               </div>
//             </div>
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
//                 onClick={() => navigate('/all-top-football-stories')}
//                 className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
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

// export default FootballRankings;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TrendingUp, TrendingDown, Minus, Star, Search } from 'lucide-react';
import TopFootballStories from '../../data/TopFootballStories.js';
import LatestNews from '../../data/LatestNews.js';
import { footballRankings } from '../../data/FootballRankingsData.js';

const FootballRankings = () => {
  const navigate = useNavigate();
  const [selectedPosition, setSelectedPosition] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const positions = ['all', 'Forward', 'Midfielder', 'Defender', 'Goalkeeper'];

  const getRankChange = (current, prev) => {
    const diff = prev - current;
    if (diff > 0) return { Icon: TrendingUp, color: 'text-green-600', text: `+${diff}` };
    if (diff < 0) return { Icon: TrendingDown, color: 'text-red-600', text: `${diff}` };
    return { Icon: Minus, color: 'text-gray-400', text: '—' };
  };

  const filteredRankings = footballRankings.filter(player => {
    const matchesPosition = selectedPosition === 'all' || player.position === selectedPosition;
    const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         player.team.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPosition && matchesSearch;
  });

  const handleStoryClick = (id) => {
    navigate(`/details/football/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6">

            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 rounded-xl shadow-xl">
              <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-3">🏆 Player Rankings</h1>
                <p className="text-blue-100 text-lg">Top football players by current performance – January 2026</p>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl shadow-md p-5 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search player or team..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <select
                  value={selectedPosition}
                  onChange={(e) => setSelectedPosition(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  {positions.map(pos => (
                    <option key={pos} value={pos}>
                      {pos === 'all' ? 'All Positions' : pos + 's'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Rankings Table */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm">
                    <tr>
                      <th className="px-5 py-3 text-left font-medium">Rank</th>
                      <th className="px-5 py-3 text-left font-medium">Player</th>
                      <th className="px-5 py-3 text-center font-medium">Rating</th>
                      <th className="px-5 py-3 text-center font-medium">G</th>
                      <th className="px-5 py-3 text-center font-medium">A</th>
                      <th className="px-5 py-3 text-center font-medium">Age</th>
                      <th className="px-5 py-3 text-center font-medium">Value</th>
                      <th className="px-5 py-3 text-center font-medium">Δ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredRankings.map((player) => {
                      const { Icon: ChangeIcon, color, text } = getRankChange(player.rank, player.prevRank);

                      return (
                        <tr key={player.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-5 py-4">
                            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white ${
                              player.rank === 1 ? 'bg-yellow-500' :
                              player.rank === 2 ? 'bg-gray-400' :
                              player.rank === 3 ? 'bg-orange-500' :
                              'bg-gray-600'
                            }`}>
                              {player.rank}
                            </div>
                          </td>
                          <td className="px-5 py-4">
                            <Link to={`/football/player/${player.id}`} className="flex items-center gap-3 group">
                              <img
                                src={player.country}
                                alt="Country flag"
                                className="w-6 h-4 object-cover rounded-sm shadow-sm"
                                onError={(e) => { e.target.style.display = 'none'; }}
                              />
                              <img
                                src={player.nameImage}
                                alt={player.name}
                                className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 group-hover:border-blue-400 transition-colors"
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/40?text=' + player.name.charAt(0); }}
                              />
                              <div>
                                <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                                  {player.name}
                                </p>
                                <div className="flex items-center gap-2 mt-0.5">
                                  <img
                                    src={player.teamLogo}
                                    alt={player.team}
                                    className="w-5 h-5 object-contain"
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                  />
                                  <p className="text-xs text-gray-600">{player.team}</p>
                                </div>
                              </div>
                            </Link>
                          </td>
                          <td className="px-5 py-4 text-center">
                            <div className="flex items-center justify-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="font-bold">{player.rating}</span>
                            </div>
                          </td>
                          <td className="px-5 py-4 text-center font-semibold text-blue-600">{player.goals}</td>
                          <td className="px-5 py-4 text-center font-semibold text-green-600">{player.assists}</td>
                          <td className="px-5 py-4 text-center text-gray-600">{player.age}</td>
                          <td className="px-5 py-4 text-center font-medium text-purple-600">{player.marketValue}</td>
                          <td className="px-5 py-4 text-center">
                            <div className={`flex items-center justify-center gap-1 ${color}`}>
                              <ChangeIcon className="w-4 h-4" />
                              <span className="font-medium text-sm">{text}</span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Movers Section */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-5">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-green-600">
                  <TrendingUp className="w-5 h-5" /> Biggest Climbers
                </h3>
                <div className="space-y-2">
                  {filteredRankings
                    .filter(p => p.prevRank > p.rank)
                    .sort((a, b) => (b.prevRank - b.rank) - (a.prevRank - a.rank))
                    .slice(0, 4)
                    .map(p => (
                      <div key={p.id} className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg text-sm">
                        <div className="flex items-center gap-3">
                          <img
                            src={p.nameImage}
                            alt={p.name}
                            className="w-8 h-8 rounded-full object-cover"
                            onError={(e) => { e.target.style.display = 'none'; }}
                          />
                          <span className="font-medium">{p.name}</span>
                        </div>
                        <span className="text-green-600 font-bold">+{p.prevRank - p.rank}</span>
                      </div>
                    ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-5">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-red-600">
                  <TrendingDown className="w-5 h-5" /> Biggest Fallers
                </h3>
                <div className="space-y-2">
                  {filteredRankings
                    .filter(p => p.prevRank < p.rank)
                    .sort((a, b) => (a.rank - a.prevRank) - (b.rank - b.prevRank))
                    .slice(0, 4)
                    .map(p => (
                      <div key={p.id} className="flex items-center justify-between py-2 px-3 bg-red-50 rounded-lg text-sm">
                        <div className="flex items-center gap-3">
                          <img
                            src={p.nameImage}
                            alt={p.name}
                            className="w-8 h-8 rounded-full object-cover"
                            onError={(e) => { e.target.style.display = 'none'; }}
                          />
                          <span className="font-medium">{p.name}</span>
                        </div>
                        <span className="text-red-600 font-bold">{p.rank - p.prevRank}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
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
                onClick={() => navigate('/all-top-football-stories')}
                className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
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

export default FootballRankings;
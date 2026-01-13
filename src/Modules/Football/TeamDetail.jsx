


// import React, { useState } from 'react';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import { Trophy, Users, MapPin, Calendar, Target, Award, Shield, Activity, BarChart3 } from 'lucide-react';
// import TopFootballStories from '../../data/TopFootballStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { footballTeamDetails } from '../../data/FootballTeamDetailData.js';

// const FootballTeamDetail = () => {
//   const { teamId } = useParams();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('overview');

//   // Data ab external file se aa raha hai
//   const team = footballTeamDetails[teamId] || footballTeamDetails["manchester-city"];

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
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-sky-50">
//       {/* Main Grid Layout */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

//           {/* Main Content */}
//           <div className="lg:col-span-8 space-y-6">

//             {/* Hero Section */}
//             <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white py-10 rounded-xl shadow-xl">
//               <div className="max-w-7xl mx-auto px-4">
//                 <div className="flex items-center gap-6 mb-6">
//                   <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
//                     <Shield className="w-12 h-12 text-sky-600" />
//                   </div>
//                   <div>
//                     <h1 className="text-4xl font-bold mb-1">{team.name}</h1>
//                     <p className="text-sky-100 text-lg">{team.nickname} • {team.league}</p>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                   <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
//                     <p className="text-3xl font-bold">#{team.currentSeason.position}</p>
//                     <p className="text-sky-100 text-sm">League Position</p>
//                   </div>
//                   <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
//                     <p className="text-3xl font-bold">{team.currentSeason.points}</p>
//                     <p className="text-sky-100 text-sm">Points</p>
//                   </div>
//                   <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
//                     <p className="text-3xl font-bold">+{team.currentSeason.goalDifference}</p>
//                     <p className="text-sky-100 text-sm">Goal Difference</p>
//                   </div>
//                   <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
//                     <p className="text-2xl font-bold">{team.manager}</p>
//                     <p className="text-sky-100 text-sm">Manager</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-6 mt-6 text-sm">
//                   <p className="flex items-center gap-2">
//                     <MapPin className="w-4 h-4" />
//                     {team.stadium} ({team.capacity.toLocaleString()})
//                   </p>
//                   <p className="flex items-center gap-2">
//                     <Calendar className="w-4 h-4" />
//                     Founded {team.founded}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Info Row */}
//             <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-8">
//               <div className="bg-white rounded-xl p-4 shadow text-center">
//                 <Target className="w-7 h-7 mx-auto mb-1 text-green-600" />
//                 <p className="text-2xl font-bold">{team.currentSeason.goalsFor}</p>
//                 <p className="text-xs text-gray-600">Goals Scored</p>
//               </div>
//               <div className="bg-white rounded-xl p-4 shadow text-center">
//                 <Shield className="w-7 h-7 mx-auto mb-1 text-blue-600" />
//                 <p className="text-2xl font-bold">{team.currentSeason.goalsAgainst}</p>
//                 <p className="text-xs text-gray-600">Conceded</p>
//               </div>
//               <div className="bg-white rounded-xl p-4 shadow text-center">
//                 <Trophy className="w-7 h-7 mx-auto mb-1 text-yellow-600" />
//                 <p className="text-2xl font-bold">{team.trophies.reduce((sum, t) => sum + t.count, 0)}</p>
//                 <p className="text-xs text-gray-600">Major Trophies</p>
//               </div>
//               <div className="bg-white rounded-xl p-4 shadow text-center hidden md:block">
//                 <Award className="w-7 h-7 mx-auto mb-1 text-purple-600" />
//                 <p className="text-xl font-bold">{team.teamValue}</p>
//                 <p className="text-xs text-gray-600">Squad Value</p>
//               </div>
//               <div className="bg-white rounded-xl p-4 shadow text-center">
//                 <div className="flex gap-1 justify-center">
//                   {team.currentSeason.form.map((result, idx) => (
//                     <span key={idx} className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${getFormColor(result)}`}>
//                       {result}
//                     </span>
//                   ))}
//                 </div>
//                 <p className="text-xs text-gray-600 mt-2">Recent Form</p>
//               </div>
//             </div>

//             {/* Tabs */}
//             <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
//               <div className="flex gap-3 overflow-x-auto pb-2">
//                 {['overview', 'squad', 'matches', 'trophies'].map(tab => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`px-5 py-2.5 rounded-lg font-semibold whitespace-nowrap transition-all ${
//                       activeTab === tab
//                         ? 'bg-sky-600 text-white shadow'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Tab Content */}
//             {activeTab === 'overview' && (
//               <div className="grid md:grid-cols-2 gap-5">
//                 <div className="bg-white rounded-xl shadow-md p-5">
//                   <h3 className="text-lg font-bold mb-3">Club Info</h3>
//                   <div className="space-y-2 text-sm">
//                     <div className="flex justify-between"><span className="text-gray-600">Stadium:</span><span className="font-medium">{team.stadium}</span></div>
//                     <div className="flex justify-between"><span className="text-gray-600">Capacity:</span><span className="font-medium">{team.capacity.toLocaleString()}</span></div>
//                     <div className="flex justify-between"><span className="text-gray-600">City:</span><span className="font-medium">{team.city}, England</span></div>
//                     <div className="flex justify-between"><span className="text-gray-600">Founded:</span><span className="font-medium">{team.founded}</span></div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'squad' && (
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {team.topPlayers.map((player, idx) => (
//                   <div key={idx} className="bg-white rounded-xl shadow-md p-5">
//                     <div className="flex items-center justify-between mb-3">
//                       <div>
//                         <h4 className="font-bold text-gray-800">{player.name}</h4>
//                         <p className="text-sm text-gray-600">{player.position}</p>
//                       </div>
//                       <div className="text-right">
//                         <p className="text-2xl font-bold text-sky-600">{player.goals}</p>
//                         <p className="text-xs text-gray-600">Goals</p>
//                       </div>
//                     </div>
//                     <div className="flex justify-between text-sm">
//                       <span className="text-gray-600">{player.assists} assists</span>
//                       <span className="font-medium">Rating: {player.rating}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {activeTab === 'matches' && (
//               <div className="space-y-4">
//                 {team.recentMatches.map((match, idx) => (
//                   <div key={idx} className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between">
//                     <div className="flex items-center gap-4">
//                       <span className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${getFormColor(match.result)}`}>
//                         {match.result}
//                       </span>
//                       <div>
//                         <p className="font-medium text-gray-800">vs {match.opponent}</p>
//                         <p className="text-xs text-gray-500">{new Date(match.date).toLocaleDateString()}</p>
//                       </div>
//                     </div>
//                     <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-6 py-3 rounded-lg font-bold text-xl">
//                       {match.score}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {activeTab === 'trophies' && (
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {team.trophies.map((trophy, idx) => (
//                   <div key={idx} className="bg-white rounded-xl shadow-md p-5 text-center">
//                     <Trophy className="w-12 h-12 mx-auto mb-3 text-yellow-600" />
//                     <h4 className="font-bold text-gray-800 mb-1">{trophy.name}</h4>
//                     <p className="text-3xl font-bold text-yellow-600">{trophy.count}</p>
//                     <p className="text-xs text-gray-600 mt-1">Titles</p>
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
//                       <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-sky-600 transition-colors">
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
//                 className="mt-6 w-full text-center text-sky-600 font-medium hover:underline text-sm"
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
//               className="mt-4 w-full text-center text-sky-600 font-medium hover:underline text-sm"
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
//                 className="text-sky-600 hover:underline font-medium text-sm sm:text-base"
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

// export default FootballTeamDetail;


import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Trophy, Users, MapPin, Calendar, Target, Award, Shield, Activity, BarChart3 } from 'lucide-react';
import TopFootballStories from '../../data/TopFootballStories.js';
import LatestNews from '../../data/LatestNews.js';
import { footballTeamDetails } from '../../data/FootballTeamDetailData.js';

const FootballTeamDetail = () => {
  const { teamId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Data ab external file se aa raha hai
  const team = footballTeamDetails[teamId] || footballTeamDetails["manchester-city"];

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-sky-50">
      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6">

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white py-10 rounded-xl shadow-xl">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center gap-6 mb-6">
                  <img
                    src={team.teamLogo}
                    alt={team.name}
                    className="w-20 h-20 rounded-full object-contain bg-white p-2 shadow-lg"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/80?text=MCFC'; }}
                  />
                  <div>
                    <h1 className="text-4xl font-bold mb-1">{team.name}</h1>
                    <p className="text-sky-100 text-lg">{team.nickname} • {team.league}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold">#{team.currentSeason.position}</p>
                    <p className="text-sky-100 text-sm">League Position</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold">{team.currentSeason.points}</p>
                    <p className="text-sky-100 text-sm">Points</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold">+{team.currentSeason.goalDifference}</p>
                    <p className="text-sky-100 text-sm">Goal Difference</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold">{team.manager}</p>
                    <p className="text-sky-100 text-sm">Manager</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 mt-6 text-sm">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {team.stadium} ({team.capacity.toLocaleString()})
                  </p>
                  <p className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Founded {team.founded}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Info Row */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-8">
              <div className="bg-white rounded-xl p-4 shadow text-center">
                <Target className="w-7 h-7 mx-auto mb-1 text-green-600" />
                <p className="text-2xl font-bold">{team.currentSeason.goalsFor}</p>
                <p className="text-xs text-gray-600">Goals Scored</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow text-center">
                <Shield className="w-7 h-7 mx-auto mb-1 text-blue-600" />
                <p className="text-2xl font-bold">{team.currentSeason.goalsAgainst}</p>
                <p className="text-xs text-gray-600">Conceded</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow text-center">
                <Trophy className="w-7 h-7 mx-auto mb-1 text-yellow-600" />
                <p className="text-2xl font-bold">{team.trophies.reduce((sum, t) => sum + t.count, 0)}</p>
                <p className="text-xs text-gray-600">Major Trophies</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow text-center hidden md:block">
                <Award className="w-7 h-7 mx-auto mb-1 text-purple-600" />
                <p className="text-xl font-bold">{team.teamValue}</p>
                <p className="text-xs text-gray-600">Squad Value</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow text-center">
                <div className="flex gap-1 justify-center">
                  {team.currentSeason.form.map((result, idx) => (
                    <span key={idx} className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${getFormColor(result)}`}>
                      {result}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-600 mt-2">Recent Form</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
              <div className="flex gap-3 overflow-x-auto pb-2">
                {['overview', 'squad', 'matches', 'trophies'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2.5 rounded-lg font-semibold whitespace-nowrap transition-all ${
                      activeTab === tab
                        ? 'bg-sky-600 text-white shadow'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-white rounded-xl shadow-md p-5">
                  <h3 className="text-lg font-bold mb-3">Club Info</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-600">Stadium:</span><span className="font-medium">{team.stadium}</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Capacity:</span><span className="font-medium">{team.capacity.toLocaleString()}</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">City:</span><span className="font-medium">{team.city}, England</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Founded:</span><span className="font-medium">{team.founded}</span></div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'squad' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {team.topPlayers.map((player, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-md p-5">
                    <div className="flex items-center gap-4 mb-3">
                      <img
                        src={player.playerImage}
                        alt={player.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-sky-100"
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/48?text=' + player.name.charAt(0); }}
                      />
                      <div>
                        <h4 className="font-bold text-gray-800">{player.name}</h4>
                        <p className="text-sm text-gray-600">{player.position}</p>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{player.assists} assists</span>
                      <span className="font-medium">Rating: {player.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'matches' && (
              <div className="space-y-4">
                {team.recentMatches.map((match, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${getFormColor(match.result)}`}>
                        {match.result}
                      </span>
                      <div className="flex items-center gap-3">
                        <img
                          src={match.opponentLogo}
                          alt={match.opponent}
                          className="w-10 h-10 object-contain"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                        <div>
                          <p className="font-medium text-gray-800">vs {match.opponent}</p>
                          <p className="text-xs text-gray-500">{new Date(match.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-6 py-3 rounded-lg font-bold text-xl">
                      {match.score}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'trophies' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {team.trophies.map((trophy, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-md p-5 text-center">
                    <img
                      src={trophy.trophyLogo}
                      alt={trophy.name}
                      className="w-12 h-12 mx-auto mb-3 object-contain"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/48?text=T'; }}
                    />
                    <h4 className="font-bold text-gray-800 mb-1">{trophy.name}</h4>
                    <p className="text-3xl font-bold text-yellow-600">{trophy.count}</p>
                    <p className="text-xs text-gray-600 mt-1">Titles</p>
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
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-sky-600 transition-colors">
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
                className="mt-6 w-full text-center text-sky-600 font-medium hover:underline text-sm"
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
              className="mt-4 w-full text-center text-sky-600 font-medium hover:underline text-sm"
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
                className="text-sky-600 hover:underline font-medium text-sm sm:text-base"
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

export default FootballTeamDetail;
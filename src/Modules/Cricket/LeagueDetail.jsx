// // src/Modules/Cricket/LeagueDetail.jsx
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import {
//   ChevronLeft,
//   MapPin,
//   Calendar,
//   Users,
//   Trophy,
//   TrendingUp,
//   Clock,
// } from 'lucide-react';
// import { cricketLeaguesData } from '../../data/cricketLeagues.js';

// export default function LeagueDetail() {
//   const { leagueId } = useParams();
//   const navigate = useNavigate();

//   const [league, setLeague] = useState(null);
//   const [activeTab, setActiveTab] = useState('overview');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate API call / data loading
//     setTimeout(() => {
//       const found = cricketLeaguesData?.leagues?.find((l) => l.id === leagueId);
//       setLeague(found);
//       setLoading(false);
//     }, 400);
//   }, [leagueId]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//       </div>
//     );
//   }

//   if (!league) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
//         <Trophy className="h-16 w-16 text-gray-400 mb-4" />
//         <h2 className="text-2xl font-bold text-gray-800 mb-2">League not found</h2>
//         <button
//           onClick={() => navigate('/leagues')}
//           className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//         >
//           Back to Leagues
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
//       {/* Hero Header */}
//       <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
//           <button
//             onClick={() => navigate('/leagues')}
//             className="mb-6 flex items-center gap-2 text-white hover:text-blue-100 transition-colors text-sm sm:text-base"
//           >
//             <ChevronLeft className="h-5 w-5" />
//             Back to Leagues
//           </button>

//           <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
//             <img
//               src={league.logo}
//               alt={league.name}
//               className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-2xl object-cover border-4 border-white/20 shadow-xl"
//             />
//             <div className="flex-1">
//               <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">{league.name}</h1>
//               <p className="text-base sm:text-lg text-blue-100 mb-4">{league.description || 'Premier cricket competition featuring top international and domestic talent.'}</p>
//               <div className="flex flex-wrap gap-4 text-sm">
//                 <div className="flex items-center gap-2">
//                   <MapPin className="h-4 w-4" /> {league.country}
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Calendar className="h-4 w-4" /> {league.season}
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Trophy className="h-4 w-4" /> {league.prize || '₹50 Crore+'} Prize
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Tabs Navigation */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
//         <div className="bg-white rounded-xl shadow-md mb-8 overflow-x-auto">
//           <div className="flex border-b min-w-max">
//             {['overview', 'standings', 'matches', 'stats', 'venues'].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-5 sm:px-8 py-4 font-semibold capitalize whitespace-nowrap transition-colors ${
//                   activeTab === tab
//                     ? 'text-blue-600 border-b-4 border-blue-600'
//                     : 'text-gray-600 hover:text-blue-600'
//                 }`}
//               >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Tab Contents */}
//         {activeTab === 'overview' && (
//           <div className="space-y-8">
//             {/* Key Stats Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               <div className="bg-white rounded-xl shadow-md p-6 text-center">
//                 <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
//                 <p className="text-3xl font-bold">{league.teams}</p>
//                 <p className="text-sm text-gray-600 mt-1">Teams</p>
//               </div>
//               <div className="bg-white rounded-xl shadow-md p-6 text-center">
//                 <Trophy className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
//                 <p className="text-3xl font-bold">{league.totalMatches || '—'}</p>
//                 <p className="text-sm text-gray-600 mt-1">Total Matches</p>
//               </div>
//               <div className="bg-white rounded-xl shadow-md p-6 text-center">
//                 <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
//                 <p className="text-3xl font-bold">{league.completedMatches || '—'}</p>
//                 <p className="text-sm text-gray-600 mt-1">Completed</p>
//               </div>
//               <div className="bg-white rounded-xl shadow-md p-6 text-center">
//                 <Calendar className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
//                 <p className="text-3xl font-bold">{league.format || '—'}</p>
//                 <p className="text-sm text-gray-600 mt-1">Format</p>
//               </div>
//             </div>

//             {/* Tournament Information + Top Performers */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               <div className="bg-white rounded-xl shadow-md p-6">
//                 <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
//                   <Trophy className="h-6 w-6 text-yellow-600" />
//                   Tournament Info
//                 </h3>
//                 <div className="space-y-3 text-sm">
//                   <div className="flex justify-between py-2 border-b">
//                     <span className="text-gray-600">Current Champion</span>
//                     <span className="font-semibold">{league.currentChampion || '—'}</span>
//                   </div>
//                   <div className="flex justify-between py-2 border-b">
//                     <span className="text-gray-600">Most Successful</span>
//                     <span className="font-semibold">{league.mostSuccessful || '—'}</span>
//                   </div>
//                   <div className="flex justify-between py-2 border-b">
//                     <span className="text-gray-600">Prize Money</span>
//                     <span className="font-semibold">{league.prize || '—'}</span>
//                   </div>
//                   <div className="flex justify-between py-2 border-b">
//                     <span className="text-gray-600">Start Date</span>
//                     <span className="font-semibold">
//                       {league.startDate ? new Date(league.startDate).toLocaleDateString() : '—'}
//                     </span>
//                   </div>
//                   <div className="flex justify-between py-2">
//                     <span className="text-gray-600">End Date</span>
//                     <span className="font-semibold">
//                       {league.endDate ? new Date(league.endDate).toLocaleDateString() : '—'}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {league.topScorer && (
//                 <div className="bg-white rounded-xl shadow-md p-6">
//                   <h3 className="text-xl font-bold mb-4">Top Scorer</h3>
//                   <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4">
//                     <p className="font-bold text-lg mb-1">{league.topScorer.name}</p>
//                     <p className="text-sm text-gray-600 mb-4">{league.topScorer.team}</p>
//                     <div className="grid grid-cols-2 gap-3 text-sm">
//                       <div>
//                         <p className="text-gray-600">Runs</p>
//                         <p className="font-bold text-xl text-blue-600">{league.topScorer.runs}</p>
//                       </div>
//                       <div>
//                         <p className="text-gray-600">Average</p>
//                         <p className="font-bold text-xl text-blue-600">{league.topScorer.average}</p>
//                       </div>
//                       <div>
//                         <p className="text-gray-600">Strike Rate</p>
//                         <p className="font-bold text-xl text-blue-600">{league.topScorer.strikeRate}</p>
//                       </div>
//                       <div>
//                         <p className="text-gray-600">100s/50s</p>
//                         <p className="font-bold text-xl text-blue-600">
//                           {league.topScorer.centuries}/{league.topScorer.fifties}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}

//         {activeTab === 'standings' && league.standings && (
//           <div className="bg-white rounded-xl shadow-md overflow-hidden">
//             <div className="overflow-x-auto">
//               <table className="w-full min-w-max">
//                 <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
//                   <tr>
//                     <th className="px-4 py-3 text-left text-sm font-semibold">Pos</th>
//                     <th className="px-4 py-3 text-left text-sm font-semibold">Team</th>
//                     <th className="px-4 py-3 text-center text-sm font-semibold">M</th>
//                     <th className="px-4 py-3 text-center text-sm font-semibold">W</th>
//                     <th className="px-4 py-3 text-center text-sm font-semibold">L</th>
//                     <th className="px-4 py-3 text-center text-sm font-semibold">Pts</th>
//                     <th className="px-4 py-3 text-center text-sm font-semibold">NRR</th>
//                     <th className="px-4 py-3 text-center text-sm font-semibold">Form</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y">
//                   {league.standings.map((team, index) => (
//                     <tr key={team.position} className={index < 4 ? 'bg-green-50' : ''}>
//                       <td className="px-4 py-4 text-sm font-bold">{team.position}</td>
//                       <td className="px-4 py-4">
//                         <div className="flex items-center gap-3">
//                           <img src={team.logo} alt={team.team} className="w-8 h-8 rounded-full" />
//                           <span className="font-semibold text-sm">{team.team}</span>
//                         </div>
//                       </td>
//                       <td className="px-4 py-4 text-center text-sm">{team.matches}</td>
//                       <td className="px-4 py-4 text-center text-sm font-semibold text-green-600">{team.won}</td>
//                       <td className="px-4 py-4 text-center text-sm font-semibold text-red-600">{team.lost}</td>
//                       <td className="px-4 py-4 text-center text-sm font-bold text-blue-600">{team.points}</td>
//                       <td className="px-4 py-4 text-center text-sm font-semibold">{team.nrr}</td>
//                       <td className="px-4 py-4">
//                         <div className="flex justify-center gap-1">
//                           {team.form.map((result, i) => (
//                             <span
//                               key={i}
//                               className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
//                                 result === 'W' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
//                               }`}
//                             >
//                               {result}
//                             </span>
//                           ))}
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}

//         {activeTab === 'matches' && (
//           <div className="space-y-10">
//             {league.recentMatches?.length > 0 && (
//               <div>
//                 <h3 className="text-2xl font-bold mb-5">Recent Matches</h3>
//                 <div className="space-y-5">
//                   {league.recentMatches.map((match) => (
//                     <div key={match.id} className="bg-white rounded-xl shadow-md p-6">
//                       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
//                         <div className="flex-1">
//                           <div className="font-bold text-lg mb-1">
//                             {match.team1} vs {match.team2}
//                           </div>
//                           <div className="text-sm text-gray-600 flex items-center gap-2">
//                             <MapPin className="h-4 w-4" />
//                             {match.venue}
//                           </div>
//                         </div>
//                         <div className="text-sm text-gray-600">
//                           {new Date(match.date).toLocaleDateString()}
//                         </div>
//                       </div>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                         <div className="bg-blue-50 rounded-lg p-4 text-center">
//                           <p className="font-semibold mb-1">{match.team1}</p>
//                           <p className="text-xl font-bold text-blue-700">{match.score1 || '—'}</p>
//                         </div>
//                         <div className="bg-blue-50 rounded-lg p-4 text-center">
//                           <p className="font-semibold mb-1">{match.team2}</p>
//                           <p className="text-xl font-bold text-blue-700">{match.score2 || '—'}</p>
//                         </div>
//                       </div>
//                       <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold text-center">
//                         {match.result || 'Result'}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {league.upcomingMatches?.length > 0 && (
//               <div>
//                 <h3 className="text-2xl font-bold mb-5">Upcoming Matches</h3>
//                 <div className="space-y-5">
//                   {league.upcomingMatches.map((match) => (
//                     <div key={match.id} className="bg-white rounded-xl shadow-md p-6">
//                       <div className="font-bold text-lg mb-3">
//                         {match.team1} vs {match.team2}
//                       </div>
//                       <div className="text-sm text-gray-600 space-y-2">
//                         <div className="flex items-center gap-2">
//                           <MapPin className="h-4 w-4" /> {match.venue}
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <Calendar className="h-4 w-4" /> {new Date(match.date).toLocaleDateString()}
//                         </div>
//                         {match.time && (
//                           <div className="flex items-center gap-2">
//                             <Clock className="h-4 w-4" /> {match.time}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {!league.recentMatches?.length && !league.upcomingMatches?.length && (
//               <div className="text-center py-12 text-gray-500">
//                 No match information available at the moment
//               </div>
//             )}
//           </div>
//         )}

//         {activeTab === 'stats' && (
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {league.topScorer && (
//               <div className="bg-white rounded-xl shadow-md p-6">
//                 <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
//                   <TrendingUp className="h-6 w-6 text-blue-600" />
//                   Batting Statistics
//                 </h3>
//                 <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
//                   <p className="font-bold text-2xl mb-3">{league.topScorer.name}</p>
//                   <p className="text-gray-600 mb-5">{league.topScorer.team}</p>
//                   <div className="grid grid-cols-2 gap-5">
//                     <div className="bg-white rounded-lg p-4 text-center shadow-sm">
//                       <p className="text-gray-600 text-sm">Runs</p>
//                       <p className="font-bold text-2xl text-blue-600">{league.topScorer.runs}</p>
//                     </div>
//                     <div className="bg-white rounded-lg p-4 text-center shadow-sm">
//                       <p className="text-gray-600 text-sm">Matches</p>
//                       <p className="font-bold text-2xl text-blue-600">{league.topScorer.matches || '—'}</p>
//                     </div>
//                     <div className="bg-white rounded-lg p-4 text-center shadow-sm">
//                       <p className="text-gray-600 text-sm">Average</p>
//                       <p className="font-bold text-2xl text-blue-600">{league.topScorer.average}</p>
//                     </div>
//                     <div className="bg-white rounded-lg p-4 text-center shadow-sm">
//                       <p className="text-gray-600 text-sm">Strike Rate</p>
//                       <p className="font-bold text-2xl text-blue-600">{league.topScorer.strikeRate}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {league.topWicketTaker && (
//               <div className="bg-white rounded-xl shadow-md p-6">
//                 <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
//                   <TrendingUp className="h-6 w-6 text-red-600" />
//                   Bowling Statistics
//                 </h3>
//                 <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
//                   <p className="font-bold text-2xl mb-3">{league.topWicketTaker.name}</p>
//                   <p className="text-gray-600 mb-5">{league.topWicketTaker.team}</p>
//                   <div className="grid grid-cols-2 gap-5">
//                     <div className="bg-white rounded-lg p-4 text-center shadow-sm">
//                       <p className="text-gray-600 text-sm">Wickets</p>
//                       <p className="font-bold text-2xl text-red-600">{league.topWicketTaker.wickets}</p>
//                     </div>
//                     <div className="bg-white rounded-lg p-4 text-center shadow-sm">
//                       <p className="text-gray-600 text-sm">Matches</p>
//                       <p className="font-bold text-2xl text-red-600">{league.topWicketTaker.matches || '—'}</p>
//                     </div>
//                     <div className="bg-white rounded-lg p-4 text-center shadow-sm">
//                       <p className="text-gray-600 text-sm">Average</p>
//                       <p className="font-bold text-2xl text-red-600">{league.topWicketTaker.average}</p>
//                     </div>
//                     <div className="bg-white rounded-lg p-4 text-center shadow-sm">
//                       <p className="text-gray-600 text-sm">Economy</p>
//                       <p className="font-bold text-2xl text-red-600">{league.topWicketTaker.economy}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {activeTab === 'venues' && league.venues?.length > 0 && (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {league.venues.map((venue) => (
//               <div key={venue.name} className="bg-white rounded-xl shadow-md p-6">
//                 <h3 className="font-bold text-lg mb-4">{venue.name}</h3>
//                 <div className="space-y-3 text-sm">
//                   <div className="flex items-center gap-2 text-gray-600">
//                     <MapPin className="h-4 w-4 text-blue-600" />
//                     <span>{venue.city}</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-gray-600">
//                     <Users className="h-4 w-4 text-blue-600" />
//                     <span>Capacity: {venue.capacity || '—'}</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-gray-600">
//                     <Trophy className="h-4 w-4 text-blue-600" />
//                     <span>{venue.matches || '—'} Matches</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {activeTab === 'venues' && (!league.venues || league.venues.length === 0) && (
//           <div className="text-center py-12 text-gray-500 bg-white rounded-xl shadow-md">
//             No venue information available
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// src/Modules/Cricket/LeagueDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  MapPin,
  Calendar,
  Users,
  Trophy,
  TrendingUp,
  Clock,
} from 'lucide-react';
import { cricketLeaguesData } from '../../data/cricketLeagues.js';
import TopStories from '../../data/TopStories.js';
import LatestNews from '../../data/LatestNews.js';

export default function LeagueDetail() {
  const { leagueId } = useParams();
  const navigate = useNavigate();

  const [league, setLeague] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const found = cricketLeaguesData?.leagues?.find((l) => l.id === leagueId);
      setLeague(found);
      setLoading(false);
    }, 400);
  }, [leagueId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!league) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
        <Trophy className="h-16 w-16 text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">League not found</h2>
        <button
          onClick={() => navigate('/leagues')}
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Back to Leagues
        </button>
      </div>
    );
  }

  const handleStoryClick = (id) => {
    navigate(`/details/cricket/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <button
            onClick={() => navigate('/leagues')}
            className="mb-6 flex items-center gap-2 text-white hover:text-blue-100 transition-colors text-sm sm:text-base"
          >
            <ChevronLeft className="h-5 w-5" />
            Back to Leagues
          </button>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <img
              src={league.logo || 'https://via.placeholder.com/160'}
              alt={league.name}
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-2xl object-cover border-4 border-white/20 shadow-xl"
            />
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">{league.name}</h1>
              <p className="text-base sm:text-lg text-blue-100 mb-4">
                {league.description || 'Premier cricket competition featuring top international and domestic talent.'}
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> {league.country || 'N/A'}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> {league.season || 'N/A'}
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4" /> {league.prize || '₹50 Crore+'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="bg-white rounded-xl shadow-md mb-8 overflow-x-auto">
          <div className="flex border-b min-w-max">
            {['overview', 'standings', 'matches', 'stats', 'venues'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 sm:px-8 py-4 font-semibold capitalize whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-4 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl shadow-md p-6 text-center">
                    <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <p className="text-3xl font-bold">{league.teams ?? '—'}</p>
                    <p className="text-sm text-gray-600 mt-1">Teams</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-6 text-center">
                    <Trophy className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                    <p className="text-3xl font-bold">{league.totalMatches ?? '—'}</p>
                    <p className="text-sm text-gray-600 mt-1">Total Matches</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-6 text-center">
                    <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <p className="text-3xl font-bold">{league.completedMatches ?? '—'}</p>
                    <p className="text-sm text-gray-600 mt-1">Completed</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-6 text-center">
                    <Calendar className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                    <p className="text-3xl font-bold">{league.format ?? '—'}</p>
                    <p className="text-sm text-gray-600 mt-1">Format</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Trophy className="h-6 w-6 text-yellow-600" />
                      Tournament Info
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Current Champion</span>
                        <span className="font-semibold">{league.currentChampion ?? '—'}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Most Successful</span>
                        <span className="font-semibold">{league.mostSuccessful ?? '—'}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Prize Money</span>
                        <span className="font-semibold">{league.prize ?? '—'}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Start Date</span>
                        <span className="font-semibold">
                          {league.startDate ? new Date(league.startDate).toLocaleDateString() : '—'}
                        </span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">End Date</span>
                        <span className="font-semibold">
                          {league.endDate ? new Date(league.endDate).toLocaleDateString() : '—'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {league.topScorer && typeof league.topScorer === 'object' && (
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <h3 className="text-xl font-bold mb-4">Top Scorer</h3>
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4">
                        <p className="font-bold text-lg mb-1">{league.topScorer.name ?? 'N/A'}</p>
                        <p className="text-sm text-gray-600 mb-4">{league.topScorer.team ?? '—'}</p>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div>
                            <p className="text-gray-600">Runs</p>
                            <p className="font-bold text-xl text-blue-600">{league.topScorer.runs ?? '—'}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Average</p>
                            <p className="font-bold text-xl text-blue-600">{league.topScorer.average ?? '—'}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Strike Rate</p>
                            <p className="font-bold text-xl text-blue-600">{league.topScorer.strikeRate ?? '—'}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">100s/50s</p>
                            <p className="font-bold text-xl text-blue-600">
                              {league.topScorer.centuries ?? '0'}/{league.topScorer.fifties ?? '0'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Standings Tab */}
            {activeTab === 'standings' && league.standings && Array.isArray(league.standings) && (
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-max">
                    <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Pos</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Team</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold">M</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold">W</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold">L</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold">Pts</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold">NRR</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold">Form</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {league.standings.map((team, index) => (
                        <tr key={team.position || index} className={index < 4 ? 'bg-green-50' : ''}>
                          <td className="px-4 py-4 text-sm font-bold">{team.position ?? '—'}</td>
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={team.logo || 'https://via.placeholder.com/32'}
                                alt={team.team}
                                className="w-8 h-8 rounded-full"
                              />
                              <span className="font-semibold text-sm">{team.team ?? 'N/A'}</span>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-center text-sm">{team.matches ?? '—'}</td>
                          <td className="px-4 py-4 text-center text-sm font-semibold text-green-600">
                            {team.won ?? '—'}
                          </td>
                          <td className="px-4 py-4 text-center text-sm font-semibold text-red-600">
                            {team.lost ?? '—'}
                          </td>
                          <td className="px-4 py-4 text-center text-sm font-bold text-blue-600">
                            {team.points ?? '—'}
                          </td>
                          <td className="px-4 py-4 text-center text-sm font-semibold">{team.nrr ?? '—'}</td>
                          <td className="px-4 py-4">
                            <div className="flex justify-center gap-1">
                              {(team.form || []).map((result, i) => (
                                <span
                                  key={i}
                                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                    result === 'W' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                                  }`}
                                >
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

            {/* Matches Tab - Compact & Safe */}
            {activeTab === 'matches' && (
              <div className="space-y-10">
                {league.recentMatches?.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold mb-5">Recent Matches</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {league.recentMatches.map((match, index) => (
                        <div
                          key={match.id || index}
                          className="bg-white rounded-xl shadow-md p-5 flex flex-col min-h-[260px] hover:shadow-lg transition-all duration-300"
                        >
                          <div className="flex-1">
                            <div className="font-bold text-lg mb-2 line-clamp-1">
                              {(match.team1 || 'Team A')} vs {(match.team2 || 'Team B')}
                            </div>
                            <div className="text-sm text-gray-600 space-y-1.5 mb-4">
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 flex-shrink-0" />
                                <span className="line-clamp-1">{match.venue || 'N/A'}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 flex-shrink-0" />
                                {match.date ? new Date(match.date).toLocaleDateString() : 'N/A'}
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-blue-50 rounded-lg p-3 text-center">
                                <p className="text-sm font-medium mb-1">{match.team1 || '?'}</p>
                                <p className="text-lg font-bold text-blue-700">{match.score1 ?? '—'}</p>
                              </div>
                              <div className="bg-blue-50 rounded-lg p-3 text-center">
                                <p className="text-sm font-medium mb-1">{match.team2 || '?'}</p>
                                <p className="text-lg font-bold text-blue-700">{match.score2 ?? '—'}</p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-auto pt-3">
                            <div className="bg-green-100 text-green-800 px-3 py-1.5 rounded-lg text-sm font-medium text-center">
                              {match.result || 'Result Pending'}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {league.upcomingMatches?.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold mb-5">Upcoming Matches</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {league.upcomingMatches.map((match, index) => (
                        <div
                          key={match.id || index}
                          className="bg-white rounded-xl shadow-md p-5 flex flex-col min-h-[230px] hover:shadow-lg transition-all duration-300"
                        >
                          <div className="flex-1">
                            <div className="font-bold text-lg mb-2 line-clamp-1">
                              {(match.team1 || 'Team A')} vs {(match.team2 || 'Team B')}
                            </div>
                            <div className="text-sm text-gray-600 space-y-1.5">
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 flex-shrink-0" />
                                <span className="line-clamp-1">{match.venue || 'N/A'}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 flex-shrink-0" />
                                {match.date ? new Date(match.date).toLocaleDateString() : 'N/A'}
                              </div>
                              {match.time && (
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 flex-shrink-0" />
                                  {match.time}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="mt-auto pt-3">
                            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1.5 rounded-full">
                              Upcoming
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {!league.recentMatches?.length && !league.upcomingMatches?.length && (
                  <div className="text-center py-12 text-gray-500 bg-white rounded-xl shadow-md">
                    No match information available at the moment
                  </div>
                )}
              </div>
            )}

            {/* Stats & Venues tabs remain same - safe rendering ke saath */}
          </div>

          {/* Desktop Sidebar - Top Stories */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-5">Top Cricket Stories</h3>
              <div className="space-y-4">
                {TopStories?.data?.TopStories?.slice(0, 5)?.map((story) => (
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
                )) || <p className="text-gray-500">No stories available</p>}
              </div>
              <button
                onClick={() => navigate('/all-top-cricket-stories')}
                className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
              >
                View All Stories →
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Top Stories */}
        <div className="lg:hidden mt-12">
          <div className="bg-white rounded-xl shadow-md p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top Cricket Stories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {TopStories?.data?.TopStories?.slice(0, 4)?.map((story) => (
                <div
                  key={story.id}
                  onClick={() => handleStoryClick(story.id)}
                  className="cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden bg-gray-50"
                >
                  <img
                    src={story.image || 'https://via.placeholder.com/300x180'}
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
              )) || <p className="text-gray-500">No stories available</p>}
            </div>
            <button
              onClick={() => navigate('/all-top-cricket-stories')}
              className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
            >
              View All Stories →
            </button>
          </div>
        </div>

        {/* Latest Sports News */}
        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Latest Sports News</h3>
              <button
                onClick={() => navigate('/all-latest-news')}
                className="text-blue-600 hover:underline font-medium text-sm sm:text-base"
              >
                View All →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {LatestNews?.data?.LatestNews?.slice(0, 6)?.map((article) => (
                <div
                  key={article.title}
                  onClick={() => handleNewsCardClick(article.title)}
                  className="bg-gray-50 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
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
                      {article.description || 'No description available'}
                    </p>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Source: {article.source || 'N/A'}</span>
                      <span>
                        {article.published
                          ? new Date(article.published).toLocaleDateString('en-US', {
                              month: 'short',
                              day: '2-digit',
                              year: 'numeric',
                            })
                          : 'N/A'}
                      </span>
                    </div>
                  </div>
                </div>
              )) || <p className="text-gray-500 col-span-full text-center py-8">No news available</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
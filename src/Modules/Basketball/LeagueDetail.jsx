// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Trophy, Calendar, TrendingUp, Users, ArrowLeft } from 'lucide-react';

// const LeagueDetail = () => {
//   const { leagueId } = useParams();

//   const leagueData = {
//     nba: {
//       name: 'NBA',
//       fullName: 'National Basketball Association',
//       logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/National_Basketball_Association_logo.svg/330px-National_Basketball_Association_logo.svg.png',
//       standings: [
//         { rank: 1, team: 'Boston Celtics', wins: 35, losses: 12, pct: '.745', streak: 'W3' },
//         { rank: 2, team: 'Oklahoma City Thunder', wins: 34, losses: 13, pct: '.723', streak: 'W5' },
//         { rank: 3, team: 'Cleveland Cavaliers', wins: 33, losses: 14, pct: '.702', streak: 'L1' },
//         { rank: 4, team: 'Denver Nuggets', wins: 32, losses: 15, pct: '.681', streak: 'W2' },
//         { rank: 5, team: 'Milwaukee Bucks', wins: 30, losses: 17, pct: '.638', streak: 'W1' }
//       ],
//       topScorers: [
//         { rank: 1, player: 'Luka Dončić', team: 'Dallas Mavericks', ppg: 33.8, rpg: 8.9, apg: 9.3 },
//         { rank: 2, player: 'Giannis Antetokounmpo', team: 'Milwaukee Bucks', ppg: 32.1, rpg: 11.4, apg: 6.2 },
//         { rank: 3, player: 'Shai Gilgeous-Alexander', team: 'Oklahoma City Thunder', ppg: 31.2, rpg: 5.6, apg: 6.8 },
//         { rank: 4, player: 'Joel Embiid', team: 'Philadelphia 76ers', ppg: 30.5, rpg: 11.2, apg: 5.7 },
//         { rank: 5, player: 'Kevin Durant', team: 'Phoenix Suns', ppg: 28.9, rpg: 6.8, apg: 5.1 }
//       ],
//       recentMatches: [
//         { home: 'Boston Celtics', away: 'LA Lakers', homeScore: 126, awayScore: 115, date: '2026-01-03' },
//         { home: 'Golden State Warriors', away: 'Miami Heat', homeScore: 118, awayScore: 112, date: '2026-01-03' },
//         { home: 'Denver Nuggets', away: 'Dallas Mavericks', homeScore: 108, awayScore: 120, date: '2026-01-02' }
//       ]
//     },
//     wnba: {
//       name: 'WNBA',
//       fullName: 'Women\'s National Basketball Association',
//       logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Women%27s_National_Basketball_Association_logo.svg/330px-Women%27s_National_Basketball_Association_logo.svg.png',
//       standings: [
//         { rank: 1, team: 'New York Liberty', wins: 18, losses: 5, pct: '.783', streak: 'W4' },
//         { rank: 2, team: 'Las Vegas Aces', wins: 17, losses: 6, pct: '.739', streak: 'W2' },
//         { rank: 3, team: 'Connecticut Sun', wins: 16, losses: 7, pct: '.696', streak: 'L1' },
//         { rank: 4, team: 'Minnesota Lynx', wins: 15, losses: 8, pct: '.652', streak: 'W3' },
//         { rank: 5, team: 'Seattle Storm', wins: 14, losses: 9, pct: '.609', streak: 'W1' }
//       ],
//       topScorers: [
//         { rank: 1, player: 'A\'ja Wilson', team: 'Las Vegas Aces', ppg: 27.3, rpg: 11.9, apg: 3.2 },
//         { rank: 2, player: 'Breanna Stewart', team: 'New York Liberty', ppg: 23.5, rpg: 9.1, apg: 4.0 },
//         { rank: 3, player: 'Sabrina Ionescu', team: 'New York Liberty', ppg: 20.2, rpg: 4.3, apg: 6.2 },
//         { rank: 4, player: 'Arike Ogunbowale', team: 'Dallas Wings', ppg: 22.1, rpg: 3.8, apg: 5.1 },
//         { rank: 5, player: 'Kelsey Plum', team: 'Las Vegas Aces', ppg: 18.9, rpg: 3.2, apg: 4.8 }
//       ],
//       recentMatches: [
//         { home: 'New York Liberty', away: 'Las Vegas Aces', homeScore: 89, awayScore: 92, date: '2025-06-12' },
//         { home: 'Connecticut Sun', away: 'Seattle Storm', homeScore: 78, awayScore: 85, date: '2025-06-11' }
//       ]
//     }
//   };

//   const league = leagueData[leagueId] || leagueData.nba;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4">
//           <Link to="/basketball/leagues" className="inline-flex items-center text-orange-100 hover:text-white mb-4">
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Back to Leagues
//           </Link>
//           <div className="flex items-center gap-4">
//             <img src={league.logo} alt={league.name} className="w-16 h-16 bg-white p-2 rounded-lg" />
//             <div>
//               <h1 className="text-3xl md:text-5xl font-bold">{league.name}</h1>
//               <p className="text-lg text-orange-100">{league.fullName}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Standings */}
//           <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
//             <div className="flex items-center gap-2 mb-6">
//               <Trophy className="w-6 h-6 text-orange-600" />
//               <h2 className="text-2xl font-bold text-gray-800">Standings</h2>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="border-b-2 border-gray-200">
//                     <th className="text-left py-3 text-gray-600 font-semibold">#</th>
//                     <th className="text-left py-3 text-gray-600 font-semibold">Team</th>
//                     <th className="text-center py-3 text-gray-600 font-semibold">W</th>
//                     <th className="text-center py-3 text-gray-600 font-semibold">L</th>
//                     <th className="text-center py-3 text-gray-600 font-semibold">PCT</th>
//                     <th className="text-center py-3 text-gray-600 font-semibold">Streak</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {league.standings.map((team) => (
//                     <tr key={team.rank} className="border-b hover:bg-orange-50">
//                       <td className="py-4 font-medium">{team.rank}</td>
//                       <td className="py-4 font-semibold text-gray-800">{team.team}</td>
//                       <td className="py-4 text-center">{team.wins}</td>
//                       <td className="py-4 text-center">{team.losses}</td>
//                       <td className="py-4 text-center font-medium">{team.pct}</td>
//                       <td className="py-4 text-center">
//                         <span className={`px-2 py-1 rounded text-sm font-medium ${
//                           team.streak.startsWith('W') 
//                             ? 'bg-green-100 text-green-700' 
//                             : 'bg-red-100 text-red-700'
//                         }`}>
//                           {team.streak}
//                         </span>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Recent Matches */}
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <div className="flex items-center gap-2 mb-6">
//               <Calendar className="w-6 h-6 text-orange-600" />
//               <h2 className="text-xl font-bold text-gray-800">Recent Matches</h2>
//             </div>
//             <div className="space-y-4">
//               {league.recentMatches.map((match, idx) => (
//                 <div key={idx} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
//                   <p className="text-xs text-gray-500 mb-2">{match.date}</p>
//                   <div className="flex justify-between items-center mb-1">
//                     <span className="text-sm font-medium">{match.home}</span>
//                     <span className="font-bold text-lg">{match.homeScore}</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-sm font-medium">{match.away}</span>
//                     <span className="font-bold text-lg">{match.awayScore}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Top Scorers */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
//           <div className="flex items-center gap-2 mb-6">
//             <TrendingUp className="w-6 h-6 text-orange-600" />
//             <h2 className="text-2xl font-bold text-gray-800">Top Scorers</h2>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b-2 border-gray-200">
//                   <th className="text-left py-3 text-gray-600 font-semibold">#</th>
//                   <th className="text-left py-3 text-gray-600 font-semibold">Player</th>
//                   <th className="text-left py-3 text-gray-600 font-semibold">Team</th>
//                   <th className="text-center py-3 text-gray-600 font-semibold">PPG</th>
//                   <th className="text-center py-3 text-gray-600 font-semibold">RPG</th>
//                   <th className="text-center py-3 text-gray-600 font-semibold">APG</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {league.topScorers.map((player) => (
//                   <tr key={player.rank} className="border-b hover:bg-orange-50">
//                     <td className="py-4 font-medium">{player.rank}</td>
//                     <td className="py-4 font-semibold text-gray-800">{player.player}</td>
//                     <td className="py-4 text-gray-600">{player.team}</td>
//                     <td className="py-4 text-center font-bold text-orange-600">{player.ppg}</td>
//                     <td className="py-4 text-center">{player.rpg}</td>
//                     <td className="py-4 text-center">{player.apg}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
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

const LeagueDetail = () => {
  const { leagueId } = useParams();
  const navigate = useNavigate();

  const leagueData = {
    nba: {
      name: 'NBA',
      fullName: 'National Basketball Association',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/National_Basketball_Association_logo.svg/800px-National_Basketball_Association_logo.svg.png',
      standings: [
        { rank: 1, team: 'Oklahoma City Thunder', wins: 35, losses: 12, pct: '.745', streak: 'W4' },
        { rank: 2, team: 'Boston Celtics', wins: 34, losses: 13, pct: '.723', streak: 'W2' },
        { rank: 3, team: 'Cleveland Cavaliers', wins: 33, losses: 14, pct: '.702', streak: 'L1' },
        { rank: 4, team: 'Denver Nuggets', wins: 32, losses: 15, pct: '.681', streak: 'W3' },
        { rank: 5, team: 'Houston Rockets', wins: 31, losses: 16, pct: '.660', streak: 'W5' }
      ],
      topScorers: [
        { rank: 1, player: 'Shai Gilgeous-Alexander', team: 'Oklahoma City Thunder', ppg: 32.1, rpg: 5.8, apg: 6.9 },
        { rank: 2, player: 'Luka Dončić', team: 'Dallas Mavericks', ppg: 31.8, rpg: 9.0, apg: 9.2 },
        { rank: 3, player: 'Giannis Antetokounmpo', team: 'Milwaukee Bucks', ppg: 31.2, rpg: 11.5, apg: 6.1 },
        { rank: 4, player: 'Nikola Jokić', team: 'Denver Nuggets', ppg: 29.8, rpg: 12.4, apg: 9.8 },
        { rank: 5, player: 'Joel Embiid', team: 'Philadelphia 76ers', ppg: 29.5, rpg: 10.8, apg: 5.5 }
      ],
      recentMatches: [
        { home: 'Oklahoma City Thunder', away: 'Charlotte Hornets', homeScore: 118, awayScore: 145, date: '2026-01-06' },
        { home: 'Houston Rockets', away: 'Phoenix Suns', homeScore: 112, awayScore: 114, date: '2026-01-06' },
        { home: 'Boston Celtics', away: 'LA Lakers', homeScore: 126, awayScore: 115, date: '2026-01-05' }
      ]
    },
    wnba: {
      name: 'WNBA',
      fullName: 'Women\'s National Basketball Association',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Women%27s_National_Basketball_Association_logo.svg/800px-Women%27s_National_Basketball_Association_logo.svg.png',
      standings: [
        { rank: 1, team: 'New York Liberty', wins: 18, losses: 5, pct: '.783', streak: 'W4' },
        { rank: 2, team: 'Las Vegas Aces', wins: 17, losses: 6, pct: '.739', streak: 'W2' },
        { rank: 3, team: 'Connecticut Sun', wins: 16, losses: 7, pct: '.696', streak: 'L1' },
        { rank: 4, team: 'Minnesota Lynx', wins: 15, losses: 8, pct: '.652', streak: 'W3' },
        { rank: 5, team: 'Seattle Storm', wins: 14, losses: 9, pct: '.609', streak: 'W1' }
      ],
      topScorers: [
        { rank: 1, player: 'A\'ja Wilson', team: 'Las Vegas Aces', ppg: 27.3, rpg: 11.9, apg: 3.2 },
        { rank: 2, player: 'Breanna Stewart', team: 'New York Liberty', ppg: 23.5, rpg: 9.1, apg: 4.0 },
        { rank: 3, player: 'Sabrina Ionescu', team: 'New York Liberty', ppg: 20.2, rpg: 4.3, apg: 6.2 },
        { rank: 4, player: 'Arike Ogunbowale', team: 'Dallas Wings', ppg: 22.1, rpg: 3.8, apg: 5.1 },
        { rank: 5, player: 'Kelsey Plum', team: 'Las Vegas Aces', ppg: 18.9, rpg: 3.2, apg: 4.8 }
      ],
      recentMatches: [
        { home: 'New York Liberty', away: 'Las Vegas Aces', homeScore: 89, awayScore: 92, date: '2025-09-15' },
        { home: 'Connecticut Sun', away: 'Seattle Storm', homeScore: 78, awayScore: 85, date: '2025-09-14' }
      ]
    }
    // Add more leagues if needed
  };

  const league = leagueData[leagueId] || leagueData.nba;

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
                <img src={league.logo} alt={league.name} className="w-16 h-16 bg-white p-2 rounded-lg" />
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
                          <td className="py-4 font-semibold text-gray-800">{team.team}</td>
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
                        <span className="text-sm font-medium">{match.home}</span>
                        <span className="font-bold text-lg">{match.homeScore}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{match.away}</span>
                        <span className="font-bold text-lg">{match.awayScore}</span>
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
                        <td className="py-4 font-semibold text-gray-800">{player.player}</td>
                        <td className="py-4 text-gray-600">{player.team}</td>
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
// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Trophy, TrendingUp, Users, Calendar, ArrowRight, Target, Award } from 'lucide-react';

// const FootballLeagueDetail = () => {
//   const { leagueId } = useParams();
//   const [activeTab, setActiveTab] = useState('standings');

//   // Mock league data
//   const leagueData = {
//     'premier-league': {
//       name: 'Premier League',
//       country: 'England',
//       icon: '🏴',
//       season: '2025/26',
//       founded: 1992,
//       teams: 20,
//       matches: 380,
//       description: 'The Premier League is the top tier of English football and is one of the most-watched sports leagues in the world.',
//       currentChampion: 'Manchester City',
//       topScorer: 'Erling Haaland - 28 goals',
//       standings: [
//         { pos: 1, team: 'Manchester City', played: 24, won: 18, drawn: 4, lost: 2, gf: 62, ga: 22, gd: 40, points: 58, form: ['W', 'W', 'D', 'W', 'W'] },
//         { pos: 2, team: 'Arsenal', played: 24, won: 17, drawn: 5, lost: 2, gf: 58, ga: 24, gd: 34, points: 56, form: ['W', 'D', 'W', 'W', 'W'] },
//         { pos: 3, team: 'Liverpool', played: 23, won: 16, drawn: 5, lost: 2, gf: 54, ga: 26, gd: 28, points: 53, form: ['W', 'W', 'D', 'W', 'L'] },
//         { pos: 4, team: 'Newcastle', played: 24, won: 14, drawn: 6, lost: 4, gf: 48, ga: 28, gd: 20, points: 48, form: ['W', 'D', 'D', 'W', 'W'] },
//         { pos: 5, team: 'Chelsea', played: 24, won: 13, drawn: 7, lost: 4, gf: 45, ga: 30, gd: 15, points: 46, form: ['D', 'W', 'L', 'W', 'D'] },
//         { pos: 6, team: 'Tottenham', played: 24, won: 13, drawn: 5, lost: 6, gf: 50, ga: 35, gd: 15, points: 44, form: ['W', 'W', 'L', 'D', 'W'] },
//         { pos: 7, team: 'Manchester United', played: 24, won: 12, drawn: 6, lost: 6, gf: 42, ga: 32, gd: 10, points: 42, form: ['L', 'D', 'W', 'W', 'D'] },
//         { pos: 8, team: 'Brighton', played: 24, won: 11, drawn: 7, lost: 6, gf: 40, ga: 35, gd: 5, points: 40, form: ['W', 'D', 'L', 'D', 'W'] }
//       ],
//       topScorers: [
//         { name: 'Erling Haaland', team: 'Manchester City', goals: 28, assists: 7 },
//         { name: 'Mohamed Salah', team: 'Liverpool', goals: 24, assists: 12 },
//         { name: 'Bukayo Saka', team: 'Arsenal', goals: 20, assists: 14 },
//         { name: 'Son Heung-min', team: 'Tottenham', goals: 18, assists: 9 },
//         { name: 'Alexander Isak', team: 'Newcastle', goals: 17, assists: 6 }
//       ],
//       recentMatches: [
//         { home: 'Manchester City', away: 'Arsenal', score: '2-2', date: '2026-01-02' },
//         { home: 'Liverpool', away: 'Chelsea', score: '3-1', date: '2026-01-02' },
//         { home: 'Tottenham', away: 'Man United', score: '1-1', date: '2026-01-01' }
//       ]
//     }
//   };

//   const league = leagueData[leagueId] || leagueData['premier-league'];

//   const getFormColor = (result) => {
//     const colors = { 'W': 'bg-green-500', 'D': 'bg-yellow-500', 'L': 'bg-red-500' };
//     return colors[result] || 'bg-gray-500';
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center gap-4 mb-4">
//             <span className="text-8xl">{league.icon}</span>
//             <div>
//               <h1 className="text-6xl font-bold mb-2">{league.name}</h1>
//               <p className="text-blue-100 text-xl">{league.country} • Season {league.season}</p>
//             </div>
//           </div>
//           <p className="text-blue-100 text-lg max-w-3xl mt-4">{league.description}</p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Quick Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
//           <div className="bg-white rounded-xl p-6 shadow-lg text-center">
//             <Trophy className="w-8 h-8 text-blue-600 mx-auto mb-2" />
//             <p className="text-3xl font-bold text-gray-800">{league.teams}</p>
//             <p className="text-sm text-gray-600">Teams</p>
//           </div>
//           <div className="bg-white rounded-xl p-6 shadow-lg text-center">
//             <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
//             <p className="text-3xl font-bold text-gray-800">{league.matches}</p>
//             <p className="text-sm text-gray-600">Matches</p>
//           </div>
//           <div className="bg-white rounded-xl p-6 shadow-lg text-center">
//             <Award className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
//             <p className="text-3xl font-bold text-gray-800">{league.founded}</p>
//             <p className="text-sm text-gray-600">Founded</p>
//           </div>
//           <div className="bg-white rounded-xl p-6 shadow-lg text-center col-span-2">
//             <Trophy className="w-8 h-8 text-purple-600 mx-auto mb-2" />
//             <p className="text-2xl font-bold text-gray-800">{league.currentChampion}</p>
//             <p className="text-sm text-gray-600">Current Champion</p>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//           <div className="flex gap-2 overflow-x-auto">
//             {['standings', 'top-scorers', 'recent-matches'].map(tab => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
//                   activeTab === tab
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Standings Table */}
//         {activeTab === 'standings' && (
//           <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
//                   <tr>
//                     <th className="px-6 py-4 text-left text-sm font-bold">Pos</th>
//                     <th className="px-6 py-4 text-left text-sm font-bold">Team</th>
//                     <th className="px-6 py-4 text-center text-sm font-bold">P</th>
//                     <th className="px-6 py-4 text-center text-sm font-bold">W</th>
//                     <th className="px-6 py-4 text-center text-sm font-bold">D</th>
//                     <th className="px-6 py-4 text-center text-sm font-bold">L</th>
//                     <th className="px-6 py-4 text-center text-sm font-bold">GF</th>
//                     <th className="px-6 py-4 text-center text-sm font-bold">GA</th>
//                     <th className="px-6 py-4 text-center text-sm font-bold">GD</th>
//                     <th className="px-6 py-4 text-center text-sm font-bold">Pts</th>
//                     <th className="px-6 py-4 text-center text-sm font-bold">Form</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                   {league.standings.map((team) => (
//                     <tr key={team.pos} className={`hover:bg-gray-50 ${
//                       team.pos <= 4 ? 'bg-green-50/50' : team.pos >= 18 ? 'bg-red-50/50' : ''
//                     }`}>
//                       <td className="px-6 py-4">
//                         <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold ${
//                           team.pos === 1 ? 'bg-yellow-400 text-white' :
//                           team.pos <= 4 ? 'bg-green-500 text-white' :
//                           team.pos >= 18 ? 'bg-red-500 text-white' :
//                           'bg-gray-200 text-gray-700'
//                         }`}>
//                           {team.pos}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4">
//                         <Link to={`/football/team/${team.team.toLowerCase().replace(' ', '-')}`} className="font-bold text-gray-800 hover:text-blue-600">
//                           {team.team}
//                         </Link>
//                       </td>
//                       <td className="px-6 py-4 text-center text-gray-700">{team.played}</td>
//                       <td className="px-6 py-4 text-center text-green-600 font-semibold">{team.won}</td>
//                       <td className="px-6 py-4 text-center text-yellow-600 font-semibold">{team.drawn}</td>
//                       <td className="px-6 py-4 text-center text-red-600 font-semibold">{team.lost}</td>
//                       <td className="px-6 py-4 text-center text-gray-700">{team.gf}</td>
//                       <td className="px-6 py-4 text-center text-gray-700">{team.ga}</td>
//                       <td className="px-6 py-4 text-center font-bold text-blue-600">
//                         {team.gd > 0 ? '+' : ''}{team.gd}
//                       </td>
//                       <td className="px-6 py-4 text-center">
//                         <span className="inline-block bg-blue-600 text-white font-bold px-3 py-1 rounded-full">
//                           {team.points}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="flex gap-1 justify-center">
//                           {team.form.map((result, idx) => (
//                             <span
//                               key={idx}
//                               className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${getFormColor(result)}`}
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

//         {/* Top Scorers */}
//         {activeTab === 'top-scorers' && (
//           <div className="space-y-4">
//             {league.topScorers.map((scorer, index) => (
//               <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-4">
//                     <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
//                       index === 0 ? 'bg-yellow-400 text-white' :
//                       index === 1 ? 'bg-gray-300 text-white' :
//                       index === 2 ? 'bg-orange-400 text-white' :
//                       'bg-gray-100 text-gray-700'
//                     }`}>
//                       {index + 1}
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-gray-800">{scorer.name}</h3>
//                       <p className="text-sm text-gray-600">{scorer.team}</p>
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="bg-blue-50 rounded-lg p-3 text-center">
//                         <p className="text-2xl font-bold text-blue-600">{scorer.goals}</p>
//                         <p className="text-xs text-gray-600">Goals</p>
//                       </div>
//                       <div className="bg-green-50 rounded-lg p-3 text-center">
//                         <p className="text-2xl font-bold text-green-600">{scorer.assists}</p>
//                         <p className="text-xs text-gray-600">Assists</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Recent Matches */}
//         {activeTab === 'recent-matches' && (
//           <div className="space-y-4">
//             {league.recentMatches.map((match, index) => (
//               <div key={index} className="bg-white rounded-xl shadow-lg p-6">
//                 <div className="flex items-center justify-between">
//                   <div className="flex-1 text-right">
//                     <p className="text-xl font-bold text-gray-800">{match.home}</p>
//                   </div>
//                   <div className="px-8">
//                     <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg">
//                       <p className="text-2xl font-bold">{match.score}</p>
//                     </div>
//                     <p className="text-xs text-gray-500 text-center mt-2">{new Date(match.date).toLocaleDateString()}</p>
//                   </div>
//                   <div className="flex-1 text-left">
//                     <p className="text-xl font-bold text-gray-800">{match.away}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FootballLeagueDetail;


import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Trophy, Target, Calendar, Award } from 'lucide-react';

const FootballLeagueDetail = () => {
  const { leagueId } = useParams();
  const [activeTab, setActiveTab] = useState('standings');

  // Updated mock data for realism (as of early January 2026)
  const leagueData = {
    'premier-league': {
      name: 'Premier League',
      country: 'England',
      icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      season: '2025/26',
      founded: 1992,
      teams: 20,
      matches: 380,
      description: 'The most competitive and watched football league in the world',
      currentChampion: 'Liverpool (Defending Champions)',
      topScorer: 'Erling Haaland - 19 goals',
      standings: [
        { pos: 1, team: 'Arsenal', played: 19, won: 14, drawn: 3, lost: 2, gf: 48, ga: 18, gd: 30, points: 45, form: ['W', 'W', 'W', 'D', 'W'] },
        { pos: 2, team: 'Manchester City', played: 19, won: 12, drawn: 5, lost: 2, gf: 42, ga: 20, gd: 22, points: 41, form: ['D', 'W', 'W', 'W', 'D'] },
        { pos: 3, team: 'Aston Villa', played: 19, won: 12, drawn: 3, lost: 4, gf: 40, ga: 25, gd: 15, points: 39, form: ['L', 'W', 'D', 'W', 'W'] },
        { pos: 4, team: 'Liverpool', played: 19, won: 9, drawn: 6, lost: 4, gf: 38, ga: 22, gd: 16, points: 33, form: ['D', 'W', 'L', 'W', 'D'] },
        { pos: 5, team: 'Chelsea', played: 19, won: 10, drawn: 4, lost: 5, gf: 35, ga: 28, gd: 7, points: 34, form: ['W', 'D', 'L', 'W', 'W'] },
        { pos: 6, team: 'Newcastle United', played: 19, won: 9, drawn: 5, lost: 5, gf: 32, ga: 26, gd: 6, points: 32, form: ['W', 'D', 'W', 'L', 'D'] },
        { pos: 7, team: 'Brighton', played: 19, won: 8, drawn: 7, lost: 4, gf: 30, ga: 24, gd: 6, points: 31, form: ['D', 'W', 'D', 'W', 'L'] },
        { pos: 8, team: 'Tottenham Hotspur', played: 19, won: 8, drawn: 5, lost: 6, gf: 36, ga: 32, gd: 4, points: 29, form: ['D', 'L', 'W', 'D', 'W'] }
      ],
      topScorers: [
        { name: 'Erling Haaland', team: 'Manchester City', goals: 19, assists: 5 },
        { name: 'Igor Thiago', team: 'Brentford', goals: 11, assists: 4 },
        { name: 'Antoine Semenyo', team: 'Bournemouth', goals: 9, assists: 3 },
        { name: 'Jean-Philippe Mateta', team: 'Crystal Palace', goals: 8, assists: 2 },
        { name: 'Dominic Calvert-Lewin', team: 'Everton', goals: 8, assists: 3 }
      ],
      recentMatches: [
        { home: 'Sunderland', away: 'Manchester City', score: '0-0', date: '2026-01-01' },
        { home: 'Liverpool', away: 'Leeds United', score: '0-0', date: '2026-01-01' },
        { home: 'Brentford', away: 'Tottenham Hotspur', score: '0-0', date: '2026-01-01' },
        { home: 'Crystal Palace', away: 'Fulham', score: '1-1', date: '2026-01-01' }
      ]
    }
  };

  const league = leagueData[leagueId] || leagueData['premier-league'];

  const getFormColor = (result) => {
    const colors = { 'W': 'bg-green-500', 'D': 'bg-yellow-500', 'L': 'bg-red-500' };
    return colors[result] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Compact Hero Section - Matching Leagues Page Style */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-5xl">{league.icon}</span>
            <div>
              <h1 className="text-4xl font-bold mb-1">{league.name}</h1>
              <p className="text-green-100 text-lg">{league.country} • Season {league.season}</p>
            </div>
          </div>
          <p className="text-green-100 text-base max-w-3xl">{league.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
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
          <div className="flex gap-3 overflow-x-auto pb-2">
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

        {/* Standings Table - Compact */}
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
                        <Link to={`/football/team/${team.team.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-green-600">
                          {team.team}
                        </Link>
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

        {/* Top Scorers - Compact Cards */}
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

        {/* Recent Matches - Compact */}
        {activeTab === 'recent-matches' && (
          <div className="space-y-4">
            {league.recentMatches.map((match, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between">
                <div className="text-right">
                  <p className="font-bold text-gray-800">{match.home}</p>
                </div>
                <div className="px-6 text-center">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-5 py-2 rounded-lg">
                    <p className="text-xl font-bold">{match.score}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{new Date(match.date).toLocaleDateString()}</p>
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-800">{match.away}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FootballLeagueDetail;
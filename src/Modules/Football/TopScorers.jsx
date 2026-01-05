// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Trophy, Target, TrendingUp, Award, Flame, Crown, Search, Filter } from 'lucide-react';

// const FootballTopScorers = () => {
//   const [selectedLeague, setSelectedLeague] = useState('all');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortBy, setSortBy] = useState('goals');

//   const scorers = [
//     {
//       id: 1,
//       rank: 1,
//       name: 'Erling Haaland',
//       team: 'Manchester City',
//       league: 'Premier League',
//       country: '🇳🇴',
//       position: 'Forward',
//       goals: 28,
//       assists: 7,
//       matches: 22,
//       minutesPerGoal: 67,
//       penalties: 4,
//       freeKicks: 0,
//       hatTricks: 3,
//       rating: 9.2,
//       form: ['⚽⚽', '⚽', '⚽', '⚽⚽', '⚽'],
//       value: '€180M'
//     },
//     {
//       id: 2,
//       rank: 2,
//       name: 'Harry Kane',
//       team: 'Bayern Munich',
//       league: 'Bundesliga',
//       country: '🏴󐁧󐁢󐁥󐁮󐁧󐁿',
//       position: 'Forward',
//       goals: 26,
//       assists: 8,
//       matches: 21,
//       minutesPerGoal: 73,
//       penalties: 5,
//       freeKicks: 1,
//       hatTricks: 2,
//       rating: 9.0,
//       form: ['⚽', '⚽⚽', '⚽', '', '⚽⚽'],
//       value: '€100M'
//     },
//     {
//       id: 3,
//       rank: 3,
//       name: 'Kylian Mbappé',
//       team: 'Real Madrid',
//       league: 'La Liga',
//       country: '🇫🇷',
//       position: 'Forward',
//       goals: 25,
//       assists: 10,
//       matches: 23,
//       minutesPerGoal: 82,
//       penalties: 3,
//       freeKicks: 2,
//       hatTricks: 2,
//       rating: 8.9,
//       form: ['⚽', '⚽', '⚽⚽', '⚽', ''],
//       value: '€200M'
//     },
//     {
//       id: 4,
//       rank: 4,
//       name: 'Mohamed Salah',
//       team: 'Liverpool',
//       league: 'Premier League',
//       country: '🇪🇬',
//       position: 'Forward',
//       goals: 24,
//       assists: 12,
//       matches: 23,
//       minutesPerGoal: 86,
//       penalties: 2,
//       freeKicks: 1,
//       hatTricks: 1,
//       rating: 8.9,
//       form: ['⚽', '⚽⚽', '', '⚽', '⚽'],
//       value: '€90M'
//     },
//     {
//       id: 5,
//       rank: 5,
//       name: 'Victor Osimhen',
//       team: 'Napoli',
//       league: 'Serie A',
//       country: '🇳🇬',
//       position: 'Forward',
//       goals: 23,
//       assists: 5,
//       matches: 22,
//       minutesPerGoal: 85,
//       penalties: 4,
//       freeKicks: 0,
//       hatTricks: 2,
//       rating: 8.7,
//       form: ['⚽⚽', '', '⚽', '⚽', '⚽'],
//       value: '€120M'
//     },
//     {
//       id: 6,
//       rank: 6,
//       name: 'Robert Lewandowski',
//       team: 'Barcelona',
//       league: 'La Liga',
//       country: '🇵🇱',
//       position: 'Forward',
//       goals: 22,
//       assists: 6,
//       matches: 24,
//       minutesPerGoal: 98,
//       penalties: 6,
//       freeKicks: 0,
//       hatTricks: 1,
//       rating: 8.6,
//       form: ['⚽', '', '⚽', '⚽', '⚽⚽'],
//       value: '€50M'
//     },
//     {
//       id: 7,
//       rank: 7,
//       name: 'Bukayo Saka',
//       team: 'Arsenal',
//       league: 'Premier League',
//       country: '🏴󐁧󐁢󐁥󐁮󐁧󐁿',
//       position: 'Winger',
//       goals: 20,
//       assists: 14,
//       matches: 23,
//       minutesPerGoal: 99,
//       penalties: 1,
//       freeKicks: 1,
//       hatTricks: 0,
//       rating: 8.5,
//       form: ['⚽', '⚽', '', '⚽', '⚽'],
//       value: '€130M'
//     },
//     {
//       id: 8,
//       rank: 8,
//       name: 'Lautaro Martínez',
//       team: 'Inter Milan',
//       league: 'Serie A',
//       country: '🇦🇷',
//       position: 'Forward',
//       goals: 19,
//       assists: 7,
//       matches: 22,
//       minutesPerGoal: 104,
//       penalties: 2,
//       freeKicks: 0,
//       hatTricks: 1,
//       rating: 8.4,
//       form: ['⚽', '⚽', '⚽⚽', '', '⚽'],
//       value: '€110M'
//     }
//   ];

//   const leagues = ['all', 'Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1'];

//   const filteredScorers = scorers
//     .filter(scorer => {
//       const matchesLeague = selectedLeague === 'all' || scorer.league === selectedLeague;
//       const matchesSearch = scorer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                            scorer.team.toLowerCase().includes(searchQuery.toLowerCase());
//       return matchesLeague && matchesSearch;
//     })
//     .sort((a, b) => {
//       if (sortBy === 'goals') return b.goals - a.goals;
//       if (sortBy === 'assists') return b.assists - a.assists;
//       if (sortBy === 'rating') return b.rating - a.rating;
//       return a.rank - b.rank;
//     });

//   const topScorer = filteredScorers[0];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-yellow-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="text-5xl font-bold mb-3">👑 Top Scorers</h1>
//           <p className="text-yellow-100 text-lg">World's leading goal scorers in 2025/26 season</p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Golden Boot Leader */}
//         {topScorer && (
//           <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-2xl shadow-2xl p-8 mb-8 text-white relative overflow-hidden">
//             <div className="absolute top-0 right-0 text-yellow-200 opacity-20">
//               <Crown className="w-64 h-64 transform rotate-12" />
//             </div>
//             <div className="relative z-10">
//               <div className="flex items-center gap-2 mb-4">
//                 <Crown className="w-8 h-8" />
//                 <h2 className="text-3xl font-bold">Golden Boot Leader</h2>
//               </div>
//               <div className="grid md:grid-cols-2 gap-8">
//                 <div>
//                   <div className="flex items-center gap-3 mb-4">
//                     <span className="text-6xl">{topScorer.country}</span>
//                     <div>
//                       <h3 className="text-4xl font-bold">{topScorer.name}</h3>
//                       <p className="text-yellow-100 text-lg">{topScorer.team} • {topScorer.league}</p>
//                     </div>
//                   </div>
//                   <div className="flex gap-6">
//                     <div>
//                       <p className="text-6xl font-bold">{topScorer.goals}</p>
//                       <p className="text-yellow-100">Goals</p>
//                     </div>
//                     <div>
//                       <p className="text-6xl font-bold">{topScorer.assists}</p>
//                       <p className="text-yellow-100">Assists</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="bg-white/20 backdrop-blur rounded-lg p-4">
//                     <p className="text-3xl font-bold">{topScorer.matches}</p>
//                     <p className="text-yellow-100">Matches</p>
//                   </div>
//                   <div className="bg-white/20 backdrop-blur rounded-lg p-4">
//                     <p className="text-3xl font-bold">{topScorer.minutesPerGoal}</p>
//                     <p className="text-yellow-100">Mins/Goal</p>
//                   </div>
//                   <div className="bg-white/20 backdrop-blur rounded-lg p-4">
//                     <p className="text-3xl font-bold">{topScorer.hatTricks}</p>
//                     <p className="text-yellow-100">Hat-tricks</p>
//                   </div>
//                   <div className="bg-white/20 backdrop-blur rounded-lg p-4">
//                     <p className="text-3xl font-bold">{topScorer.rating}</p>
//                     <p className="text-yellow-100">Rating</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Filters */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 type="text"
//                 placeholder="Search players or teams..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
//               />
//             </div>
//             <select
//               value={selectedLeague}
//               onChange={(e) => setSelectedLeague(e.target.value)}
//               className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
//             >
//               {leagues.map(league => (
//                 <option key={league} value={league}>
//                   {league === 'all' ? 'All Leagues' : league}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//               className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
//             >
//               <option value="goals">Sort by Goals</option>
//               <option value="assists">Sort by Assists</option>
//               <option value="rating">Sort by Rating</option>
//             </select>
//           </div>
//         </div>

//         {/* Scorers List */}
//         <div className="space-y-4">
//           {filteredScorers.map((scorer, index) => (
//             <Link
//               key={scorer.id}
//               to={`/football/player/${scorer.id}`}
//               className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
//             >
//               <div className="p-6">
//                 <div className="flex items-center gap-6">
//                   {/* Rank */}
//                   <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl ${
//                     index === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white' :
//                     index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-white' :
//                     index === 2 ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white' :
//                     'bg-gray-100 text-gray-700'
//                   }`}>
//                     #{scorer.rank}
//                   </div>

//                   {/* Player Info */}
//                   <div className="flex-1">
//                     <div className="flex items-center gap-3 mb-2">
//                       <span className="text-3xl">{scorer.country}</span>
//                       <div>
//                         <h3 className="text-2xl font-bold text-gray-800">{scorer.name}</h3>
//                         <p className="text-sm text-gray-600">{scorer.team} • {scorer.league}</p>
//                       </div>
//                     </div>

//                     {/* Stats Grid */}
//                     <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mt-4">
//                       <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-3 text-center">
//                         <p className="text-2xl font-bold text-yellow-700">{scorer.goals}</p>
//                         <p className="text-xs text-gray-600">Goals</p>
//                       </div>
//                       <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3 text-center">
//                         <p className="text-2xl font-bold text-green-700">{scorer.assists}</p>
//                         <p className="text-xs text-gray-600">Assists</p>
//                       </div>
//                       <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 text-center">
//                         <p className="text-2xl font-bold text-blue-700">{scorer.matches}</p>
//                         <p className="text-xs text-gray-600">Matches</p>
//                       </div>
//                       <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3 text-center">
//                         <p className="text-2xl font-bold text-purple-700">{scorer.minutesPerGoal}</p>
//                         <p className="text-xs text-gray-600">Min/Goal</p>
//                       </div>
//                       <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-3 text-center">
//                         <p className="text-2xl font-bold text-orange-700">{scorer.hatTricks}</p>
//                         <p className="text-xs text-gray-600">Hat-tricks</p>
//                       </div>
//                       <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-3 text-center">
//                         <p className="text-2xl font-bold text-pink-700">{scorer.rating}</p>
//                         <p className="text-xs text-gray-600">Rating</p>
//                       </div>
//                     </div>

//                     {/* Additional Stats */}
//                     <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-600">
//                       <span>⚽ Penalties: <strong>{scorer.penalties}</strong></span>
//                       <span>🎯 Free Kicks: <strong>{scorer.freeKicks}</strong></span>
//                       <span>💰 Value: <strong className="text-green-600">{scorer.value}</strong></span>
//                     </div>

//                     {/* Recent Form */}
//                     <div className="mt-4 pt-4 border-t border-gray-200">
//                       <p className="text-xs text-gray-500 mb-2">Recent Form (Last 5 matches)</p>
//                       <div className="flex gap-2">
//                         {scorer.form.map((match, idx) => (
//                           <div
//                             key={idx}
//                             className={`px-3 py-2 rounded-lg text-sm font-bold ${
//                               match ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'
//                             }`}
//                           >
//                             {match || '—'}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {filteredScorers.length === 0 && (
//           <div className="bg-white rounded-xl shadow-lg p-12 text-center">
//             <p className="text-gray-500 text-lg">No players found matching your criteria</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FootballTopScorers;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, Trophy, Search } from 'lucide-react';

const FootballTopScorers = () => {
  const [selectedLeague, setSelectedLeague] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Realistic data as of Jan 2026 + original detailed fields restored
  const scorers = [
    {
      id: 1,
      rank: 1,
      name: 'Erling Haaland',
      team: 'Manchester City',
      league: 'Premier League',
      country: '🇳🇴',
      position: 'Forward',
      goals: 19,
      assists: 5,
      matches: 18,
      minutesPerGoal: 85,
      penalties: 3,
      freeKicks: 0,
      hatTricks: 2,
      rating: 8.1,
      form: ['⚽⚽', '⚽', '', '⚽', '⚽'],
      value: '€180M'
    },
    {
      id: 2,
      rank: 1,
      name: 'Harry Kane',
      team: 'Bayern Munich',
      league: 'Bundesliga',
      country: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      position: 'Forward',
      goals: 19,
      assists: 8,
      matches: 17,
      minutesPerGoal: 81,
      penalties: 4,
      freeKicks: 1,
      hatTricks: 2,
      rating: 8.3,
      form: ['⚽', '⚽⚽', '⚽', '⚽', ''],
      value: '€110M'
    },
    {
      id: 3,
      rank: 3,
      name: 'Kylian Mbappé',
      team: 'Real Madrid',
      league: 'La Liga',
      country: '🇫🇷',
      position: 'Forward',
      goals: 18,
      assists: 6,
      matches: 18,
      minutesPerGoal: 90,
      penalties: 3,
      freeKicks: 2,
      hatTricks: 1,
      rating: 8.0,
      form: ['⚽', '⚽⚽', '', '⚽', '⚽'],
      value: '€200M'
    },
    // Baaki players add kar sakte ho if needed
  ];

  const leagues = ['all', 'Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1'];

  const filteredScorers = scorers
    .filter(scorer => {
      const matchesLeague = selectedLeague === 'all' || scorer.league === selectedLeague;
      const matchesSearch = scorer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           scorer.team.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesLeague && matchesSearch;
    });

  const topScorer = filteredScorers[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-yellow-50">
      {/* Compact Header */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">👑 Top Scorers</h1>
          <p className="text-yellow-100 text-lg">Europe's leading goalscorers – Season 2025/26</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Leader Card */}
        {topScorer && (
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl shadow-lg p-6 mb-8 text-white flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Trophy className="w-12 h-12" />
              <div>
                <h2 className="text-2xl font-bold">{topScorer.name}</h2>
                <p className="text-yellow-100">{topScorer.team} • {topScorer.league}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-5xl font-bold">{topScorer.goals}</p>
              <p className="text-yellow-100 text-lg">Goals</p>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-5 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search players or teams..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <select
              value={selectedLeague}
              onChange={(e) => setSelectedLeague(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 bg-white"
            >
              {leagues.map(league => (
                <option key={league} value={league}>
                  {league === 'all' ? 'All Leagues' : league}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Scorers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredScorers.map((scorer, index) => (
            <Link
              key={scorer.id}
              to={`/football/player/${scorer.id}`}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all block border border-gray-100"
            >
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                    index === 0 ? 'bg-yellow-400 text-white' :
                    index === 1 ? 'bg-gray-300 text-white' :
                    index === 2 ? 'bg-orange-400 text-white' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="text-center">
                    <Target className="w-8 h-8 text-yellow-600 mx-auto" />
                    <p className="text-3xl font-bold text-yellow-600">{scorer.goals}</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl">{scorer.country}</span>
                    <h3 className="text-lg font-bold text-gray-800">{scorer.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{scorer.team} • {scorer.league}</p>
                  <p className="text-sm text-gray-500 mt-2">{scorer.assists} assists • {scorer.matches} matches</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredScorers.length === 0 && (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <p className="text-gray-500 text-lg">No players found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FootballTopScorers;
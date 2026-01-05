// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Trophy, TrendingUp, Users, Calendar, ArrowRight, Search } from 'lucide-react';

// const FootballLeagues = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedContinent, setSelectedContinent] = useState('all');

//   const leagues = [
//     {
//       id: 'premier-league',
//       name: 'Premier League',
//       country: 'England',
//       continent: 'Europe',
//       icon: '🏴󐁧󐁢󐁥󐁮󐁧󐁿',
//       logo: '⚽',
//       season: '2025/26',
//       teams: 20,
//       matches: 380,
//       topScorer: 'Erling Haaland',
//       topTeam: 'Manchester City',
//       description: 'The most-watched football league in the world',
//       founded: 1992
//     },
//     {
//       id: 'la-liga',
//       name: 'La Liga',
//       country: 'Spain',
//       continent: 'Europe',
//       icon: '🇪🇸',
//       logo: '⚽',
//       season: '2025/26',
//       teams: 20,
//       matches: 380,
//       topScorer: 'Robert Lewandowski',
//       topTeam: 'Real Madrid',
//       description: 'Spain\'s top professional football division',
//       founded: 1929
//     },
//     {
//       id: 'serie-a',
//       name: 'Serie A',
//       country: 'Italy',
//       continent: 'Europe',
//       icon: '🇮🇹',
//       logo: '⚽',
//       season: '2025/26',
//       teams: 20,
//       matches: 380,
//       topScorer: 'Lautaro Martínez',
//       topTeam: 'Inter Milan',
//       description: 'Italy\'s premier football championship',
//       founded: 1898
//     },
//     {
//       id: 'bundesliga',
//       name: 'Bundesliga',
//       country: 'Germany',
//       continent: 'Europe',
//       icon: '🇩🇪',
//       logo: '⚽',
//       season: '2025/26',
//       teams: 18,
//       matches: 306,
//       topScorer: 'Harry Kane',
//       topTeam: 'Bayern Munich',
//       description: 'Germany\'s top-tier football league',
//       founded: 1963
//     },
//     {
//       id: 'ligue-1',
//       name: 'Ligue 1',
//       country: 'France',
//       continent: 'Europe',
//       icon: '🇫🇷',
//       logo: '⚽',
//       season: '2025/26',
//       teams: 18,
//       matches: 306,
//       topScorer: 'Kylian Mbappé',
//       topTeam: 'Paris Saint-Germain',
//       description: 'France\'s primary football competition',
//       founded: 1932
//     },
//     {
//       id: 'champions-league',
//       name: 'UEFA Champions League',
//       country: 'Europe',
//       continent: 'Europe',
//       icon: '🇪🇺',
//       logo: '🏆',
//       season: '2025/26',
//       teams: 36,
//       matches: 189,
//       topScorer: 'Kylian Mbappé',
//       topTeam: 'Real Madrid',
//       description: 'Europe\'s elite club competition',
//       founded: 1955
//     },
//     {
//       id: 'europa-league',
//       name: 'UEFA Europa League',
//       country: 'Europe',
//       continent: 'Europe',
//       icon: '🇪🇺',
//       logo: '🏆',
//       season: '2025/26',
//       teams: 36,
//       matches: 189,
//       topScorer: 'Victor Osimhen',
//       topTeam: 'Sevilla',
//       description: 'UEFA\'s secondary club competition',
//       founded: 1971
//     },
//     {
//       id: 'mls',
//       name: 'Major League Soccer',
//       country: 'USA & Canada',
//       continent: 'North America',
//       icon: '🇺🇸',
//       logo: '⚽',
//       season: '2026',
//       teams: 29,
//       matches: 612,
//       topScorer: 'Lionel Messi',
//       topTeam: 'Inter Miami',
//       description: 'Top professional soccer league in North America',
//       founded: 1993
//     },
//     {
//       id: 'copa-libertadores',
//       name: 'Copa Libertadores',
//       country: 'South America',
//       continent: 'South America',
//       icon: '🌎',
//       logo: '🏆',
//       season: '2026',
//       teams: 47,
//       matches: 138,
//       topScorer: 'Julián Álvarez',
//       topTeam: 'Fluminense',
//       description: 'Premier club competition in South America',
//       founded: 1960
//     },
//     {
//       id: 'premier-league-2',
//       name: 'EFL Championship',
//       country: 'England',
//       continent: 'Europe',
//       icon: '🏴󐁧󐁢󐁥󐁮󐁧󐁿',
//       logo: '⚽',
//       season: '2025/26',
//       teams: 24,
//       matches: 552,
//       topScorer: 'Josh Maja',
//       topTeam: 'Leeds United',
//       description: 'Second tier of English football',
//       founded: 2004
//     }
//   ];

//   const continents = ['all', 'Europe', 'North America', 'South America', 'Asia', 'Africa'];

//   const filteredLeagues = leagues.filter(league => {
//     const matchesSearch = league.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          league.country.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesContinent = selectedContinent === 'all' || league.continent === selectedContinent;
//     return matchesSearch && matchesContinent;
//   });

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="text-5xl font-bold mb-3">🏆 Football Leagues</h1>
//           <p className="text-green-100 text-lg">Explore top football leagues from around the world</p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Filters */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//           <div className="flex flex-col md:flex-row gap-4">
//             {/* Search */}
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 type="text"
//                 placeholder="Search leagues or countries..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//               />
//             </div>

//             {/* Continent Filter */}
//             <select
//               value={selectedContinent}
//               onChange={(e) => setSelectedContinent(e.target.value)}
//               className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white"
//             >
//               {continents.map(continent => (
//                 <option key={continent} value={continent}>
//                   {continent === 'all' ? 'All Continents' : continent}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Stats Overview */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//           <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg">
//             <Trophy className="w-8 h-8 mb-2" />
//             <p className="text-3xl font-bold">{filteredLeagues.length}</p>
//             <p className="text-blue-100">Total Leagues</p>
//           </div>
//           <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg">
//             <Users className="w-8 h-8 mb-2" />
//             <p className="text-3xl font-bold">{filteredLeagues.reduce((acc, l) => acc + l.teams, 0)}</p>
//             <p className="text-green-100">Total Teams</p>
//           </div>
//           <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
//             <Calendar className="w-8 h-8 mb-2" />
//             <p className="text-3xl font-bold">{filteredLeagues.reduce((acc, l) => acc + l.matches, 0)}</p>
//             <p className="text-purple-100">Total Matches</p>
//           </div>
//           <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6 shadow-lg">
//             <TrendingUp className="w-8 h-8 mb-2" />
//             <p className="text-3xl font-bold">Live</p>
//             <p className="text-orange-100">Active Season</p>
//           </div>
//         </div>

//         {/* Leagues Grid */}
//         <div className="grid md:grid-cols-2 gap-6">
//           {filteredLeagues.map(league => (
//             <Link
//               key={league.id}
//               to={`/football/league/${league.id}`}
//               className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden group"
//             >
//               {/* League Header */}
//               <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-6">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-5xl">{league.icon}</span>
//                   <span className="text-4xl">{league.logo}</span>
//                 </div>
//                 <h2 className="text-2xl font-bold mb-1">{league.name}</h2>
//                 <p className="text-green-100 text-sm">{league.country} • {league.continent}</p>
//               </div>

//               {/* League Details */}
//               <div className="p-6">
//                 <p className="text-gray-600 mb-4">{league.description}</p>

//                 <div className="grid grid-cols-2 gap-4 mb-4">
//                   <div className="bg-gray-50 rounded-lg p-3">
//                     <p className="text-xs text-gray-500 mb-1">Season</p>
//                     <p className="font-bold text-gray-800">{league.season}</p>
//                   </div>
//                   <div className="bg-gray-50 rounded-lg p-3">
//                     <p className="text-xs text-gray-500 mb-1">Teams</p>
//                     <p className="font-bold text-gray-800">{league.teams}</p>
//                   </div>
//                   <div className="bg-gray-50 rounded-lg p-3">
//                     <p className="text-xs text-gray-500 mb-1">Matches</p>
//                     <p className="font-bold text-gray-800">{league.matches}</p>
//                   </div>
//                   <div className="bg-gray-50 rounded-lg p-3">
//                     <p className="text-xs text-gray-500 mb-1">Founded</p>
//                     <p className="font-bold text-gray-800">{league.founded}</p>
//                   </div>
//                 </div>

//                 <div className="border-t border-gray-200 pt-4 space-y-2">
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-gray-600">Top Scorer:</span>
//                     <span className="font-semibold text-gray-800">{league.topScorer}</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-gray-600">Leading Team:</span>
//                     <span className="font-semibold text-gray-800">{league.topTeam}</span>
//                   </div>
//                 </div>

//                 <button className="w-full mt-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 group-hover:from-green-700 group-hover:to-emerald-800 transition-all">
//                   View League Details
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {filteredLeagues.length === 0 && (
//           <div className="bg-white rounded-xl shadow-lg p-12 text-center">
//             <p className="text-gray-500 text-lg">No leagues found matching your criteria</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FootballLeagues;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Users, Search, ArrowRight } from 'lucide-react';

const FootballLeagues = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('all');

  const leagues = [
    {
      id: 'premier-league',
      name: 'Premier League',
      country: 'England',
      continent: 'Europe',
      icon: '🏴',
      logo: '⚽',
      season: '2025/26',
      teams: 20,
      topScorer: 'Erling Haaland',
      topTeam: 'Liverpool (Defending Champions)',
      description: 'The most competitive and watched football league in the world'
    },
    {
      id: 'la-liga',
      name: 'La Liga',
      country: 'Spain',
      continent: 'Europe',
      icon: '🇪🇸',
      logo: '⚽',
      season: '2025/26',
      teams: 20,
      topScorer: 'Kylian Mbappé',
      topTeam: 'Barcelona',
      description: 'Home of technical mastery, global superstars and historic rivalries'
    },
    {
      id: 'serie-a',
      name: 'Serie A',
      country: 'Italy',
      continent: 'Europe',
      icon: '🇮🇹',
      logo: '⚽',
      season: '2025/26',
      teams: 20,
      topScorer: 'Lautaro Martínez',
      topTeam: 'Inter Milan',
      description: 'Known for tactical brilliance, defensive mastery and historic clubs'
    },
    {
      id: 'bundesliga',
      name: 'Bundesliga',
      country: 'Germany',
      continent: 'Europe',
      icon: '🇩🇪',
      logo: '⚽',
      season: '2025/26',
      teams: 18,
      topScorer: 'Harry Kane',
      topTeam: 'Bayern Munich',
      description: 'High-scoring games, passionate fans and incredible atmosphere'
    },
    {
      id: 'ligue-1',
      name: 'Ligue 1',
      country: 'France',
      continent: 'Europe',
      icon: '🇫🇷',
      logo: '⚽',
      season: '2025/26',
      teams: 18,
      topScorer: 'Kylian Mbappé (previous season leader)',
      topTeam: 'Paris Saint-Germain',
      description: 'A talent factory producing world-class players with attacking flair'
    },
    {
      id: 'champions-league',
      name: 'UEFA Champions League',
      country: 'Europe',
      continent: 'Europe',
      icon: '🇪🇺',
      logo: '🏆',
      season: '2025/26',
      teams: 36,
      topScorer: 'Erling Haaland / Victor Osimhen',
      topTeam: 'Ongoing season',
      description: 'The ultimate stage for Europe\'s best clubs to compete for glory'
    },
    {
      id: 'europa-league',
      name: 'UEFA Europa League',
      country: 'Europe',
      continent: 'Europe',
      icon: '🇪🇺',
      logo: '🏆',
      season: '2025/26',
      teams: 36,
      topScorer: 'Ongoing',
      topTeam: 'Tottenham Hotspur (Defending champions)',
      description: 'Europe\'s exciting secondary club competition full of drama'
    },
    {
      id: 'mls',
      name: 'Major League Soccer',
      country: 'USA & Canada',
      continent: 'North America',
      icon: '🇺🇸',
      logo: '⚽',
      season: '2026',
      teams: 29,
      topScorer: 'Lionel Messi',
      topTeam: 'Inter Miami',
      description: 'Rapidly growing league attracting global superstars and young talent'
    },
    {
      id: 'copa-libertadores',
      name: 'Copa Libertadores',
      country: 'South America',
      continent: 'South America',
      icon: '🌎',
      logo: '🏆',
      season: '2026',
      teams: 47,
      topScorer: 'Ongoing',
      topTeam: 'Ongoing',
      description: 'South America\'s premier club tournament known for passion and intensity'
    },
    {
      id: 'championship',
      name: 'EFL Championship',
      country: 'England',
      continent: 'Europe',
      icon: '🏴',
      logo: '⚽',
      season: '2025/26',
      teams: 24,
      topScorer: 'Current leader',
      topTeam: 'Promotion battle ongoing',
      description: 'One of the most competitive second-tier leagues with huge stakes'
    }
  ];

  const continents = ['all', 'Europe', 'North America', 'South America'];

  const filteredLeagues = leagues.filter(league => {
    const matchesSearch = league.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         league.country.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesContinent = selectedContinent === 'all' || league.continent === selectedContinent;
    return matchesSearch && matchesContinent;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">🏆 Football Leagues</h1>
          <p className="text-green-100 text-lg">Discover the best leagues worldwide – Season 2025/26</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-5 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search leagues or countries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>
            <select
              value={selectedContinent}
              onChange={(e) => setSelectedContinent(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 bg-white"
            >
              {continents.map(continent => (
                <option key={continent} value={continent}>
                  {continent === 'all' ? 'All Continents' : continent}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Compact Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 shadow text-center">
            <Trophy className="w-8 h-8 mx-auto mb-2 text-green-600" />
            <p className="text-2xl font-bold">{filteredLeagues.length}</p>
            <p className="text-sm text-gray-600">Leagues</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow text-center">
            <Users className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <p className="text-2xl font-bold">{filteredLeagues.reduce((acc, l) => acc + l.teams, 0)}</p>
            <p className="text-sm text-gray-600">Total Teams</p>
          </div>
        </div>

        {/* Equal Height League Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredLeagues.map(league => (
            <Link
              key={league.id}
              to={`/football/league/${league.id}`}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100 flex flex-col min-h-[380px]" // Key: min-h + flex col
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-4 rounded-t-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{league.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold">{league.name}</h3>
                    <p className="text-xs text-green-100">{league.country}</p>
                  </div>
                </div>
                <span className="text-3xl">{league.logo}</span>
              </div>

              {/* Body - grows to fill space */}
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div className="space-y-3">
                  <p className="text-sm text-gray-600 line-clamp-3">{league.description}</p> {/* Optional: limit lines */}

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-gray-50 rounded px-3 py-2">
                      <p className="text-gray-500 text-xs">Season</p>
                      <p className="font-semibold">{league.season}</p>
                    </div>
                    <div className="bg-gray-50 rounded px-3 py-2">
                      <p className="text-gray-500 text-xs">Teams</p>
                      <p className="font-semibold">{league.teams}</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Top Scorer:</span>
                      <span className="font-medium text-right max-w-[140px] truncate">{league.topScorer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Leading Team:</span>
                      <span className="font-medium text-right max-w-[140px] truncate">{league.topTeam}</span>
                    </div>
                  </div>
                </div>

                {/* Button always at bottom */}
                <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition">
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Link>
          ))}
        </div>

        {filteredLeagues.length === 0 && (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <p className="text-gray-500 text-lg">No leagues found</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FootballLeagues;
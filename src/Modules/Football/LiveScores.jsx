// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Clock, Calendar, Trophy, TrendingUp, Search, Filter } from 'lucide-react';

// const FootballLiveScores = () => {
//   const [activeTab, setActiveTab] = useState('live');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedLeague, setSelectedLeague] = useState('all');

//   // Mock data - Replace with API
//   const matches = [
//     {
//       id: 1,
//       league: 'Premier League',
//       leagueIcon: '🏴󐁧󐁢󐁥󐁮󐁧󐁿',
//       homeTeam: 'Manchester City',
//       awayTeam: 'Arsenal',
//       homeScore: 2,
//       awayScore: 2,
//       status: 'live',
//       minute: "78'",
//       venue: 'Etihad Stadium',
//       date: '2026-01-02',
//       time: '20:00',
//       events: [
//         { type: 'goal', team: 'home', player: 'Haaland', minute: 23 },
//         { type: 'goal', team: 'away', player: 'Saka', minute: 45 },
//         { type: 'goal', team: 'home', player: 'De Bruyne', minute: 67 },
//         { type: 'goal', team: 'away', player: 'Havertz', minute: 71 }
//       ]
//     },
//     {
//       id: 2,
//       league: 'La Liga',
//       leagueIcon: '🇪🇸',
//       homeTeam: 'Real Madrid',
//       awayTeam: 'Barcelona',
//       homeScore: 1,
//       awayScore: 0,
//       status: 'live',
//       minute: "34'",
//       venue: 'Santiago Bernabéu',
//       date: '2026-01-02',
//       time: '21:00',
//       events: [
//         { type: 'goal', team: 'home', player: 'Bellingham', minute: 12 }
//       ]
//     },
//     {
//       id: 3,
//       league: 'Premier League',
//       leagueIcon: '🏴󐁧󐁢󐁥󐁮󐁧󐁿',
//       homeTeam: 'Liverpool',
//       awayTeam: 'Chelsea',
//       homeScore: null,
//       awayScore: null,
//       status: 'upcoming',
//       minute: null,
//       venue: 'Anfield',
//       date: '2026-01-02',
//       time: '22:30'
//     },
//     {
//       id: 4,
//       league: 'Serie A',
//       leagueIcon: '🇮🇹',
//       homeTeam: 'Inter Milan',
//       awayTeam: 'Juventus',
//       homeScore: 3,
//       awayScore: 1,
//       status: 'finished',
//       minute: "FT",
//       venue: 'San Siro',
//       date: '2026-01-02',
//       time: '18:00',
//       events: [
//         { type: 'goal', team: 'home', player: 'Lautaro', minute: 15 },
//         { type: 'goal', team: 'away', player: 'Vlahovic', minute: 28 },
//         { type: 'goal', team: 'home', player: 'Thuram', minute: 56 },
//         { type: 'goal', team: 'home', player: 'Lautaro', minute: 82 }
//       ]
//     },
//     {
//       id: 5,
//       league: 'Bundesliga',
//       leagueIcon: '🇩🇪',
//       homeTeam: 'Bayern Munich',
//       awayTeam: 'Borussia Dortmund',
//       homeScore: 2,
//       awayScore: 2,
//       status: 'live',
//       minute: "HT",
//       venue: 'Allianz Arena',
//       date: '2026-01-02',
//       time: '19:30',
//       events: [
//         { type: 'goal', team: 'home', player: 'Kane', minute: 18 },
//         { type: 'goal', team: 'away', player: 'Adeyemi', minute: 25 },
//         { type: 'goal', team: 'home', player: 'Musiala', minute: 38 },
//         { type: 'goal', team: 'away', player: 'Füllkrug', minute: 44 }
//       ]
//     }
//   ];

//   const leagues = ['all', 'Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1'];

//   const filteredMatches = matches.filter(match => {
//     const matchesTab = activeTab === 'all' || match.status === activeTab;
//     const matchesLeague = selectedLeague === 'all' || match.league === selectedLeague;
//     const matchesSearch = match.homeTeam.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          match.awayTeam.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesTab && matchesLeague && matchesSearch;
//   });

//   const getStatusBadge = (status, minute) => {
//     if (status === 'live') {
//       return (
//         <span className="flex items-center gap-1 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
//           <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
//           {minute}
//         </span>
//       );
//     }
//     if (status === 'finished') {
//       return <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-bold">{minute}</span>;
//     }
//     return <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">Upcoming</span>;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8">
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="text-4xl font-bold mb-2">⚽ Football Live Scores</h1>
//           <p className="text-blue-100">Real-time match updates and commentary</p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Filters */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
//           <div className="flex flex-col lg:flex-row gap-4">
//             {/* Search */}
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 type="text"
//                 placeholder="Search teams..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             {/* League Filter */}
//             <div className="relative">
//               <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <select
//                 value={selectedLeague}
//                 onChange={(e) => setSelectedLeague(e.target.value)}
//                 className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
//               >
//                 {leagues.map(league => (
//                   <option key={league} value={league}>
//                     {league === 'all' ? 'All Leagues' : league}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Tabs */}
//           <div className="flex gap-2 mt-4 overflow-x-auto">
//             {['all', 'live', 'upcoming', 'finished'].map(tab => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
//                   activeTab === tab
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Matches Grid */}
//         <div className="space-y-4">
//           {filteredMatches.length === 0 ? (
//             <div className="bg-white rounded-xl shadow-lg p-12 text-center">
//               <p className="text-gray-500 text-lg">No matches found</p>
//             </div>
//           ) : (
//             filteredMatches.map(match => (
//               <Link
//                 key={match.id}
//                 to={`/football-scorecard/${match.id}`}
//                 className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
//               >
//                 <div className="p-6">
//                   {/* League Header */}
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center gap-2">
//                       <span className="text-2xl">{match.leagueIcon}</span>
//                       <span className="font-semibold text-gray-700">{match.league}</span>
//                     </div>
//                     {getStatusBadge(match.status, match.minute)}
//                   </div>

//                   {/* Teams and Score */}
//                   <div className="grid grid-cols-[1fr,auto,1fr] items-center gap-4">
//                     {/* Home Team */}
//                     <div className="text-right">
//                       <h3 className="text-xl font-bold text-gray-800">{match.homeTeam}</h3>
//                     </div>

//                     {/* Score */}
//                     <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg">
//                       <div className="text-3xl font-bold">
//                         {match.homeScore !== null ? `${match.homeScore} - ${match.awayScore}` : 'vs'}
//                       </div>
//                     </div>

//                     {/* Away Team */}
//                     <div className="text-left">
//                       <h3 className="text-xl font-bold text-gray-800">{match.awayTeam}</h3>
//                     </div>
//                   </div>

//                   {/* Match Info */}
//                   <div className="flex items-center justify-center gap-6 mt-4 text-sm text-gray-600">
//                     <div className="flex items-center gap-1">
//                       <Calendar className="w-4 h-4" />
//                       <span>{new Date(match.date).toLocaleDateString()}</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <Clock className="w-4 h-4" />
//                       <span>{match.time}</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <Trophy className="w-4 h-4" />
//                       <span>{match.venue}</span>
//                     </div>
//                   </div>

//                   {/* Events (for finished/live matches) */}
//                   {match.events && match.events.length > 0 && (
//                     <div className="mt-4 pt-4 border-t border-gray-200">
//                       <div className="flex flex-wrap gap-2">
//                         {match.events.map((event, idx) => (
//                           <span
//                             key={idx}
//                             className={`text-xs px-2 py-1 rounded ${
//                               event.team === 'home' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
//                             }`}
//                           >
//                             ⚽ {event.player} {event.minute}'
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </Link>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FootballLiveScores;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Clock, Calendar, Trophy, Search, Filter, MapPin } from 'lucide-react';

// import footballData from '../../data/FootballData.json';

// const FootballLiveScores = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('live');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCompetition, setSelectedCompetition] = useState('all');
//   const [matches, setMatches] = useState([]);
//   const [competitions, setCompetitions] = useState(['all']);

//   useEffect(() => {
//     if (footballData.status === 'success' && footballData.data.LiveMatches) {
//       setMatches(footballData.data.LiveMatches);
//       const uniqueCompetitions = ['all', ...new Set(footballData.data.LiveMatches.map(m => m.competition))];
//       setCompetitions(uniqueCompetitions);
//     }
//   }, []);

//   const filteredMatches = matches.filter(match => {
//     const matchesTab = activeTab === 'all' || 
//                       (activeTab === 'live' && match.status === 'Live') ||
//                       (activeTab === 'upcoming' && match.status === 'Upcoming') ||
//                       (activeTab === 'finished' && match.status === 'Finished');
    
//     const matchesCompetition = selectedCompetition === 'all' || match.competition === selectedCompetition;
    
//     const matchesSearch = match.teams.home.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          match.teams.away.name.toLowerCase().includes(searchQuery.toLowerCase());
    
//     return matchesTab && matchesCompetition && matchesSearch;
//   });

//   const getStatusBadge = (status, matchTime) => {
//     if (status === 'Live') {
//       return (
//         <span className="flex items-center gap-1.5 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
//           <span className="w-2 h-2 bg-white rounded-full"></span>
//           LIVE {matchTime}
//         </span>
//       );
//     }
//     if (status === 'Finished') {
//       return <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-bold">FT</span>;
//     }
//     return <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">Upcoming</span>;
//   };

//   const handleMatchClick = (matchId) => {
//     navigate(`/football-scorecard/${matchId}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white py-6 md:py-10 shadow-xl">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//             <div>
//               <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">⚽ Live Football Scores</h1>
//               <p className="text-blue-100 text-sm md:text-base">Real-time match updates from around the world</p>
//             </div>
//             <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
//               <div className="flex items-center gap-2">
//                 <Clock className="w-5 h-5" />
//                 <span className="font-semibold">{new Date().toLocaleTimeString()}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
//         {/* Filters */}
//         <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-6">
//           <div className="flex flex-col lg:flex-row gap-4 mb-4">
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 type="text"
//                 placeholder="Search teams..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//               />
//             </div>

//             <div className="relative min-w-[200px]">
//               <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
//               <select
//                 value={selectedCompetition}
//                 onChange={(e) => setSelectedCompetition(e.target.value)}
//                 className="w-full pl-10 pr-8 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white cursor-pointer"
//               >
//                 {competitions.map(comp => (
//                   <option key={comp} value={comp}>
//                     {comp === 'all' ? 'All Competitions' : comp}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
//             {['all', 'live', 'upcoming', 'finished'].map(tab => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-4 md:px-6 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
//                   activeTab === tab
//                     ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Compact Match Cards */}
//         <div className="space-y-3">
//           {filteredMatches.length === 0 ? (
//             <div className="bg-white rounded-xl shadow-lg p-12 text-center">
//               <div className="text-6xl mb-4">⚽</div>
//               <p className="text-gray-500 text-lg">No matches found</p>
//               <p className="text-gray-400 text-sm mt-2">Try adjusting your filters</p>
//             </div>
//           ) : (
//             filteredMatches.map(match => (
//               <div
//                 key={match.match_id}
//                 onClick={() => handleMatchClick(match.match_id)}
//                 className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100"
//               >
//                 {/* Competition & Status Bar */}
//                 <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2.5 flex items-center justify-between text-sm">
//                   <div className="flex items-center gap-2">
//                     <Trophy className="w-4 h-4" />
//                     <span className="font-medium truncate">{match.competition}</span>
//                   </div>
//                   {getStatusBadge(match.status, match.scores.current_score.match_time)}
//                 </div>

//                 {/* Match Content */}
//                 <div className="p-4">
//                   <div className="grid grid-cols-3 items-center gap-4">
//                     {/* Home Team */}
//                     <div className="text-right">
//                       <div className="flex justify-end items-center gap-3">
//                         <div className="text-right">
//                           <p className="font-bold text-lg text-gray-800">{match.teams.home.name}</p>
//                           <p className="text-xs text-gray-500">{match.teams.home.manager}</p>
//                         </div>
//                         <img 
//                           src={match.images.team1_logo} 
//                           alt={match.teams.home.name}
//                           className="w-10 h-10 object-contain"
//                           onError={(e) => e.target.style.display = 'none'}
//                         />
//                       </div>
//                     </div>

//                     {/* Score */}
//                     <div className="text-center">
//                       <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg shadow">
//                         <p className="text-3xl font-bold">
//                           {match.scores.current_score.home_goals} - {match.scores.current_score.away_goals}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Away Team */}
//                     <div className="text-left">
//                       <div className="flex items-center gap-3">
//                         <img 
//                           src={match.images.team2_logo} 
//                           alt={match.teams.away.name}
//                           className="w-10 h-10 object-contain"
//                           onError={(e) => e.target.style.display = 'none'}
//                         />
//                         <div className="text-left">
//                           <p className="font-bold text-lg text-gray-800">{match.teams.away.name}</p>
//                           <p className="text-xs text-gray-500">{match.teams.away.manager}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Date, Time, Venue */}
//                   <div className="mt-3 flex items-center justify-center gap-4 text-xs text-gray-600">
//                     <div className="flex items-center gap-1">
//                       <Calendar className="w-3.5 h-3.5" />
//                       <span>{new Date(match.schedule.date).toLocaleDateString()}</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <Clock className="w-3.5 h-3.5" />
//                       <span>{match.schedule.kickoff_time}</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <MapPin className="w-3.5 h-3.5" />
//                       <span className="truncate max-w-[150px]">{match.venue.name}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Footer Stats */}
//         {matches.length > 0 && (
//           <div className="mt-8 bg-white rounded-xl shadow-lg p-4 md:p-6">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
//               <div>
//                 <div className="text-2xl md:text-3xl font-bold text-blue-600">{matches.length}</div>
//                 <div className="text-xs md:text-sm text-gray-600 mt-1">Total Matches</div>
//               </div>
//               <div>
//                 <div className="text-2xl md:text-3xl font-bold text-red-600">
//                   {matches.filter(m => m.status === 'Live').length}
//                 </div>
//                 <div className="text-xs md:text-sm text-gray-600 mt-1">Live Now</div>
//               </div>
//               <div>
//                 <div className="text-2xl md:text-3xl font-bold text-green-600">
//                   {matches.filter(m => m.status === 'Finished').length}
//                 </div>
//                 <div className="text-xs md:text-sm text-gray-600 mt-1">Finished</div>
//               </div>
//               <div>
//                 <div className="text-2xl md:text-3xl font-bold text-blue-600">
//                   {matches.filter(m => m.status === 'Upcoming').length}
//                 </div>
//                 <div className="text-xs md:text-sm text-gray-600 mt-1">Upcoming</div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FootballLiveScores;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Calendar, Trophy, Search, Filter, MapPin } from 'lucide-react';
import footballData from '../../data/FootballData.json';
import TopFootballStories from '../../data/TopFootballStories.js';
import LatestNews from '../../data/LatestNews.js';

const FootballLiveScores = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('live');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCompetition, setSelectedCompetition] = useState('all');
  const [matches, setMatches] = useState([]);
  const [competitions, setCompetitions] = useState(['all']);

  const handleStoryClick = (id) => {
    navigate(`/details/football/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  useEffect(() => {
    if (footballData.status === 'success' && footballData.data.LiveMatches) {
      setMatches(footballData.data.LiveMatches);
      const uniqueCompetitions = ['all', ...new Set(footballData.data.LiveMatches.map(m => m.competition))];
      setCompetitions(uniqueCompetitions);
    }
  }, []);

  const filteredMatches = matches.filter(match => {
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'live' && match.status === 'Live') ||
                      (activeTab === 'upcoming' && match.status === 'Upcoming') ||
                      (activeTab === 'finished' && match.status === 'Finished');
    
    const matchesCompetition = selectedCompetition === 'all' || match.competition === selectedCompetition;
    
    const matchesSearch = match.teams.home.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         match.teams.away.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesTab && matchesCompetition && matchesSearch;
  });

  const getStatusBadge = (status, matchTime) => {
    if (status === 'Live') {
      return (
        <span className="flex items-center gap-1 text-[10px] sm:text-xs bg-red-500 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full font-bold animate-pulse">
          <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
          LIVE {matchTime}
        </span>
      );
    }
    if (status === 'Finished') {
      return <span className="text-[10px] sm:text-xs bg-gray-600 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full font-bold">FT</span>;
    }
    return <span className="text-[10px] sm:text-xs bg-blue-500 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full font-bold">Upcoming</span>;
  };

  const handleMatchClick = (matchId) => {
    navigate(`/football-scorecard/${matchId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left: Football Live Scores */}
          <div className="lg:col-span-8 space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white rounded-xl shadow-xl p-5 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">⚽ Live Football Scores</h1>
                  <p className="text-blue-100 text-sm sm:text-base">Real-time match updates from around the world</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-semibold">{new Date().toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-5">
              <div className="flex flex-col gap-4 mb-5">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search teams..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  />
                </div>

                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                  <select
                    value={selectedCompetition}
                    onChange={(e) => setSelectedCompetition(e.target.value)}
                    className="w-full pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white cursor-pointer text-sm sm:text-base"
                  >
                    {competitions.map(comp => (
                      <option key={comp} value={comp}>
                        {comp === 'all' ? 'All Competitions' : comp}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {['all', 'live', 'upcoming', 'finished'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all text-sm ${
                      activeTab === tab
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Match Cards - Fully Responsive */}
            <div className="space-y-4">
              {filteredMatches.length === 0 ? (
                <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12 text-center">
                  <div className="text-5xl sm:text-6xl mb-4">⚽</div>
                  <p className="text-gray-500 text-base sm:text-lg">No matches found</p>
                  <p className="text-gray-400 text-sm mt-2">Try adjusting your filters</p>
                </div>
              ) : (
                filteredMatches.map(match => (
                  <div
                    key={match.match_id}
                    onClick={() => handleMatchClick(match.match_id)}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100 overflow-hidden"
                  >
                    {/* Competition & Status */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm">
                      <div className="flex items-center gap-2 truncate">
                        <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="font-medium truncate">{match.competition}</span>
                      </div>
                      {getStatusBadge(match.status, match.scores.current_score.match_time)}
                    </div>

                    {/* Match Content - Responsive Layout */}
                    <div className="p-4 sm:p-5">
                      {/* Mobile: Vertical Stack | Desktop: 3-column grid */}
                      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:items-center gap-4 lg:gap-6">
                        {/* Home Team */}
                        <div className="flex flex-row-reverse lg:flex-row items-center justify-end lg:justify-end gap-3">
                          <div className="text-right lg:text-right">
                            <p className="font-bold text-base sm:text-lg text-gray-800 truncate max-w-[140px] sm:max-w-none">
                              {match.teams.home.name}
                            </p>
                            <p className="text-xs text-gray-500 hidden sm:block">{match.teams.home.manager}</p>
                          </div>
                          <img 
                            src={match.images.team1_logo} 
                            alt={match.teams.home.name}
                            className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0"
                            onError={(e) => e.target.style.display = 'none'}
                          />
                        </div>

                        {/* Score - Center */}
                        <div className="text-center order-first lg:order-none">
                          <div className="inline-block bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg">
                            <p className="text-2xl sm:text-4xl font-bold">
                              {match.scores.current_score.home_goals} - {match.scores.current_score.away_goals}
                            </p>
                          </div>
                        </div>

                        {/* Away Team */}
                        <div className="flex items-center gap-3">
                          <img 
                            src={match.images.team2_logo} 
                            alt={match.teams.away.name}
                            className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0"
                            onError={(e) => e.target.style.display = 'none'}
                          />
                          <div className="text-left">
                            <p className="font-bold text-base sm:text-lg text-gray-800 truncate max-w-[140px] sm:max-w-none">
                              {match.teams.away.name}
                            </p>
                            <p className="text-xs text-gray-500 hidden sm:block">{match.teams.away.manager}</p>
                          </div>
                        </div>
                      </div>

                      {/* Venue Info - Responsive Wrap */}
                      <div className="mt-4 flex flex-wrap justify-center gap-3 sm:gap-6 text-xs text-gray-600">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span className="text-xs sm:text-sm">{new Date(match.schedule.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="text-xs sm:text-sm">{match.schedule.kickoff_time}</span>
                        </div>
                        <div className="flex items-center gap-1.5 max-w-[180px]">
                          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                          <span className="truncate text-xs sm:text-sm">{match.venue.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Stats Footer */}
            {matches.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600">{matches.length}</div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">Total Matches</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-red-600">
                      {matches.filter(m => m.status === 'Live').length}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">Live Now</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-green-600">
                      {matches.filter(m => m.status === 'Finished').length}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">Finished</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-indigo-600">
                      {matches.filter(m => m.status === 'Upcoming').length}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">Upcoming</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar: Top Football Stories (Desktop) */}
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

      {/* Mobile Top Football Stories & Latest News */}
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

export default FootballLiveScores;
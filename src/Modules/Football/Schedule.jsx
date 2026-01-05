// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Calendar, Clock, MapPin, Trophy, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

// const FootballSchedule = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedLeague, setSelectedLeague] = useState('all');
//   const [viewMode, setViewMode] = useState('day'); // day, week, month

//   const matches = [
//     {
//       id: 1,
//       homeTeam: 'Manchester City',
//       awayTeam: 'Arsenal',
//       league: 'Premier League',
//       leagueIcon: '🏴󐁧󐁢󐁥󐁮󐁧󐁿',
//       date: '2026-01-02',
//       time: '20:00',
//       venue: 'Etihad Stadium',
//       city: 'Manchester',
//       status: 'upcoming',
//       tv: ['Sky Sports', 'NBC Sports'],
//       odds: { home: 2.10, draw: 3.40, away: 3.20 }
//     },
//     {
//       id: 2,
//       homeTeam: 'Real Madrid',
//       awayTeam: 'Barcelona',
//       league: 'La Liga',
//       leagueIcon: '🇪🇸',
//       date: '2026-01-02',
//       time: '21:00',
//       venue: 'Santiago Bernabéu',
//       city: 'Madrid',
//       status: 'upcoming',
//       tv: ['beIN Sports', 'ESPN+'],
//       odds: { home: 2.00, draw: 3.50, away: 3.60 }
//     },
//     {
//       id: 3,
//       homeTeam: 'Liverpool',
//       awayTeam: 'Chelsea',
//       league: 'Premier League',
//       leagueIcon: '🏴󐁧󐁢󐁥󐁮󐁧󐁿',
//       date: '2026-01-02',
//       time: '22:30',
//       venue: 'Anfield',
//       city: 'Liverpool',
//       status: 'upcoming',
//       tv: ['Sky Sports', 'USA Network'],
//       odds: { home: 1.90, draw: 3.60, away: 4.00 }
//     },
//     {
//       id: 4,
//       homeTeam: 'Bayern Munich',
//       awayTeam: 'Borussia Dortmund',
//       league: 'Bundesliga',
//       leagueIcon: '🇩🇪',
//       date: '2026-01-03',
//       time: '18:30',
//       venue: 'Allianz Arena',
//       city: 'Munich',
//       status: 'upcoming',
//       tv: ['ESPN+', 'Sky Germany'],
//       odds: { home: 1.75, draw: 3.80, away: 4.50 }
//     },
//     {
//       id: 5,
//       homeTeam: 'AC Milan',
//       awayTeam: 'Inter Milan',
//       league: 'Serie A',
//       leagueIcon: '🇮🇹',
//       date: '2026-01-03',
//       time: '20:45',
//       venue: 'San Siro',
//       city: 'Milan',
//       status: 'upcoming',
//       tv: ['Paramount+', 'DAZN'],
//       odds: { home: 2.80, draw: 3.30, away: 2.50 }
//     },
//     {
//       id: 6,
//       homeTeam: 'Paris Saint-Germain',
//       awayTeam: 'Marseille',
//       league: 'Ligue 1',
//       leagueIcon: '🇫🇷',
//       date: '2026-01-03',
//       time: '21:00',
//       venue: 'Parc des Princes',
//       city: 'Paris',
//       status: 'upcoming',
//       tv: ['beIN Sports', 'Ligue 1 Pass'],
//       odds: { home: 1.50, draw: 4.20, away: 6.50 }
//     },
//     {
//       id: 7,
//       homeTeam: 'Tottenham',
//       awayTeam: 'Manchester United',
//       league: 'Premier League',
//       leagueIcon: '🏴󐁧󐁢󐁥󐁮󐁧󐁿',
//       date: '2026-01-04',
//       time: '16:30',
//       venue: 'Tottenham Hotspur Stadium',
//       city: 'London',
//       status: 'upcoming',
//       tv: ['Sky Sports', 'USA Network'],
//       odds: { home: 2.40, draw: 3.40, away: 2.90 }
//     },
//     {
//       id: 8,
//       homeTeam: 'Atletico Madrid',
//       awayTeam: 'Sevilla',
//       league: 'La Liga',
//       leagueIcon: '🇪🇸',
//       date: '2026-01-04',
//       time: '19:00',
//       venue: 'Wanda Metropolitano',
//       city: 'Madrid',
//       status: 'upcoming',
//       tv: ['beIN Sports', 'ESPN+'],
//       odds: { home: 1.80, draw: 3.50, away: 4.30 }
//     }
//   ];

//   const leagues = ['all', 'Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1'];

//   const changeDate = (days) => {
//     const newDate = new Date(selectedDate);
//     newDate.setDate(newDate.getDate() + days);
//     setSelectedDate(newDate);
//   };

//   const formatDate = (date) => {
//     return date.toLocaleDateString('en-US', { 
//       weekday: 'long', 
//       year: 'numeric', 
//       month: 'long', 
//       day: 'numeric' 
//     });
//   };

//   const filteredMatches = matches.filter(match => {
//     const matchesLeague = selectedLeague === 'all' || match.league === selectedLeague;
//     const matchDate = new Date(match.date).toDateString();
//     const selectedDateStr = selectedDate.toDateString();
//     const matchesDate = viewMode === 'day' ? matchDate === selectedDateStr : true;
//     return matchesLeague && matchesDate;
//   });

//   const groupedMatches = filteredMatches.reduce((acc, match) => {
//     if (!acc[match.date]) {
//       acc[match.date] = [];
//     }
//     acc[match.date].push(match);
//     return acc;
//   }, {});

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="text-5xl font-bold mb-3">📅 Match Schedule</h1>
//           <p className="text-green-100 text-lg">Upcoming football fixtures and match times</p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Controls */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
//             {/* Date Navigation */}
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={() => changeDate(-1)}
//                 className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
//               >
//                 <ChevronLeft className="w-5 h-5" />
//               </button>
//               <div className="text-center min-w-[200px]">
//                 <p className="text-2xl font-bold text-gray-800">
//                   {selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric' })}
//                 </p>
//               </div>
//               <button
//                 onClick={() => changeDate(1)}
//                 className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
//               >
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </div>

//             {/* Today Button */}
//             <button
//               onClick={() => setSelectedDate(new Date())}
//               className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
//             >
//               Today
//             </button>
//           </div>

//           {/* Filters */}
//           <div className="flex flex-col md:flex-row gap-4">
//             <select
//               value={selectedLeague}
//               onChange={(e) => setSelectedLeague(e.target.value)}
//               className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
//             >
//               {leagues.map(league => (
//                 <option key={league} value={league}>
//                   {league === 'all' ? 'All Leagues' : league}
//                 </option>
//               ))}
//             </select>

//             <div className="flex gap-2">
//               {['day', 'week'].map(mode => (
//                 <button
//                   key={mode}
//                   onClick={() => setViewMode(mode)}
//                   className={`px-6 py-3 rounded-lg font-semibold transition-all ${
//                     viewMode === mode
//                       ? 'bg-green-600 text-white'
//                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   {mode.charAt(0).toUpperCase() + mode.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Matches */}
//         {Object.keys(groupedMatches).length === 0 ? (
//           <div className="bg-white rounded-xl shadow-lg p-12 text-center">
//             <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//             <p className="text-gray-500 text-lg">No matches scheduled for this date</p>
//           </div>
//         ) : (
//           <div className="space-y-8">
//             {Object.entries(groupedMatches).map(([date, dayMatches]) => (
//               <div key={date}>
//                 <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
//                   <Calendar className="w-6 h-6 text-green-600" />
//                   {new Date(date).toLocaleDateString('en-US', { 
//                     weekday: 'long', 
//                     month: 'long', 
//                     day: 'numeric' 
//                   })}
//                 </h2>
                
//                 <div className="space-y-4">
//                   {dayMatches.map(match => (
//                     <Link
//                       key={match.id}
//                       to={`/football-scorecard/${match.id}`}
//                       className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
//                     >
//                       <div className="p-6">
//                         {/* League & Time Header */}
//                         <div className="flex items-center justify-between mb-4">
//                           <div className="flex items-center gap-2">
//                             <span className="text-2xl">{match.leagueIcon}</span>
//                             <span className="font-semibold text-gray-700">{match.league}</span>
//                           </div>
//                           <div className="flex items-center gap-2 text-green-600">
//                             <Clock className="w-5 h-5" />
//                             <span className="text-xl font-bold">{match.time}</span>
//                           </div>
//                         </div>

//                         {/* Teams */}
//                         <div className="grid grid-cols-[1fr,auto,1fr] items-center gap-6 mb-4">
//                           <div className="text-right">
//                             <h3 className="text-2xl font-bold text-gray-800">{match.homeTeam}</h3>
//                           </div>
                          
//                           <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-lg">
//                             <p className="text-2xl font-bold">VS</p>
//                           </div>
                          
//                           <div className="text-left">
//                             <h3 className="text-2xl font-bold text-gray-800">{match.awayTeam}</h3>
//                           </div>
//                         </div>

//                         {/* Match Details */}
//                         <div className="grid md:grid-cols-3 gap-4 mb-4">
//                           <div className="flex items-center gap-2 text-gray-600">
//                             <MapPin className="w-4 h-4" />
//                             <div>
//                               <p className="text-sm font-semibold">{match.venue}</p>
//                               <p className="text-xs">{match.city}</p>
//                             </div>
//                           </div>
//                           <div className="flex items-center gap-2 text-gray-600">
//                             <Trophy className="w-4 h-4" />
//                             <div>
//                               <p className="text-sm font-semibold">Broadcast</p>
//                               <p className="text-xs">{match.tv.join(', ')}</p>
//                             </div>
//                           </div>
//                           <div className="flex items-center gap-2 text-gray-600">
//                             <Clock className="w-4 h-4" />
//                             <div>
//                               <p className="text-sm font-semibold">Status</p>
//                               <p className="text-xs capitalize">{match.status}</p>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Betting Odds */}
//                         <div className="pt-4 border-t border-gray-200">
//                           <p className="text-xs text-gray-500 mb-2">Betting Odds</p>
//                           <div className="grid grid-cols-3 gap-2">
//                             <div className="bg-blue-50 rounded-lg p-2 text-center">
//                               <p className="text-xs text-gray-600">Home</p>
//                               <p className="text-lg font-bold text-blue-600">{match.odds.home}</p>
//                             </div>
//                             <div className="bg-yellow-50 rounded-lg p-2 text-center">
//                               <p className="text-xs text-gray-600">Draw</p>
//                               <p className="text-lg font-bold text-yellow-600">{match.odds.draw}</p>
//                             </div>
//                             <div className="bg-red-50 rounded-lg p-2 text-center">
//                               <p className="text-xs text-gray-600">Away</p>
//                               <p className="text-lg font-bold text-red-600">{match.odds.away}</p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FootballSchedule;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';

const FootballSchedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedLeague, setSelectedLeague] = useState('all');
  const [viewMode, setViewMode] = useState('day');

  const matches = [
    {
      id: 1,
      homeTeam: 'Manchester City',
      awayTeam: 'Arsenal',
      league: 'Premier League',
      leagueIcon: '🏴󐁧󐁢󐁥󐁮󐁧󐁿',
      date: '2026-01-02',
      time: '20:00',
      venue: 'Etihad Stadium',
      city: 'Manchester',
      status: 'upcoming',
      tv: ['Sky Sports', 'NBC Sports'],
      odds: { home: 2.10, draw: 3.40, away: 3.20 }
    },
    {
      id: 2,
      homeTeam: 'Real Madrid',
      awayTeam: 'Barcelona',
      league: 'La Liga',
      leagueIcon: '🇪🇸',
      date: '2026-01-02',
      time: '21:00',
      venue: 'Santiago Bernabéu',
      city: 'Madrid',
      status: 'upcoming',
      tv: ['beIN Sports', 'ESPN+'],
      odds: { home: 2.00, draw: 3.50, away: 3.60 }
    },
    {
      id: 3,
      homeTeam: 'Liverpool',
      awayTeam: 'Chelsea',
      league: 'Premier League',
      leagueIcon: '🏴󐁧󐁢󐁥󐁮󐁧󐁿',
      date: '2026-01-02',
      time: '22:30',
      venue: 'Anfield',
      city: 'Liverpool',
      status: 'upcoming',
      tv: ['Sky Sports', 'USA Network'],
      odds: { home: 1.90, draw: 3.60, away: 4.00 }
    },
    {
      id: 4,
      homeTeam: 'Bayern Munich',
      awayTeam: 'Borussia Dortmund',
      league: 'Bundesliga',
      leagueIcon: '🇩🇪',
      date: '2026-01-03',
      time: '18:30',
      venue: 'Allianz Arena',
      city: 'Munich',
      status: 'upcoming',
      tv: ['ESPN+', 'Sky Germany'],
      odds: { home: 1.75, draw: 3.80, away: 4.50 }
    },
    {
      id: 5,
      homeTeam: 'AC Milan',
      awayTeam: 'Inter Milan',
      league: 'Serie A',
      leagueIcon: '🇮🇹',
      date: '2026-01-03',
      time: '20:45',
      venue: 'San Siro',
      city: 'Milan',
      status: 'upcoming',
      tv: ['Paramount+', 'DAZN'],
      odds: { home: 2.80, draw: 3.30, away: 2.50 }
    },
    {
      id: 6,
      homeTeam: 'Paris Saint-Germain',
      awayTeam: 'Marseille',
      league: 'Ligue 1',
      leagueIcon: '🇫🇷',
      date: '2026-01-03',
      time: '21:00',
      venue: 'Parc des Princes',
      city: 'Paris',
      status: 'upcoming',
      tv: ['beIN Sports', 'Ligue 1 Pass'],
      odds: { home: 1.50, draw: 4.20, away: 6.50 }
    },
    {
      id: 7,
      homeTeam: 'Tottenham',
      awayTeam: 'Manchester United',
      league: 'Premier League',
      leagueIcon: '🏴󐁧󐁢󐁥󐁮󐁧󐁿',
      date: '2026-01-04',
      time: '16:30',
      venue: 'Tottenham Hotspur Stadium',
      city: 'London',
      status: 'upcoming',
      tv: ['Sky Sports', 'USA Network'],
      odds: { home: 2.40, draw: 3.40, away: 2.90 }
    },
    {
      id: 8,
      homeTeam: 'Atletico Madrid',
      awayTeam: 'Sevilla',
      league: 'La Liga',
      leagueIcon: '🇪🇸',
      date: '2026-01-04',
      time: '19:00',
      venue: 'Wanda Metropolitano',
      city: 'Madrid',
      status: 'upcoming',
      tv: ['beIN Sports', 'ESPN+'],
      odds: { home: 1.80, draw: 3.50, away: 4.30 }
    }
  ];

  const leagues = ['all', 'Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1'];

  const changeDate = (days) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + days);
    setSelectedDate(newDate);
  };

  const filteredMatches = matches.filter(match => {
    const matchesLeague = selectedLeague === 'all' || match.league === selectedLeague;
    const matchDate = new Date(match.date).toDateString();
    const selectedDateStr = selectedDate.toDateString();
    const matchesDate = viewMode === 'day' ? matchDate === selectedDateStr : true;
    return matchesLeague && matchesDate;
  });

  const groupedMatches = filteredMatches.reduce((acc, match) => {
    if (!acc[match.date]) acc[match.date] = [];
    acc[match.date].push(match);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">📅 Match Schedule</h1>
          <p className="text-green-100">Upcoming football fixtures</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Controls */}
        <div className="bg-white rounded-xl shadow-md p-5 mb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button onClick={() => changeDate(-1)} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="text-center">
                <p className="text-xl font-bold text-gray-800">
                  {selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </p>
                <p className="text-sm text-gray-500">
                  {selectedDate.toLocaleDateString('en-US', { weekday: 'short' })}
                </p>
              </div>
              <button onClick={() => changeDate(1)} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => setSelectedDate(new Date())}
                className="ml-4 px-5 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700"
              >
                Today
              </button>
            </div>

            <div className="flex gap-3 items-center">
              <select
                value={selectedLeague}
                onChange={(e) => setSelectedLeague(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500"
              >
                {leagues.map(league => (
                  <option key={league} value={league}>
                    {league === 'all' ? 'All Leagues' : league}
                  </option>
                ))}
              </select>

              <div className="flex gap-2">
                {['day', 'week'].map(mode => (
                  <button
                    key={mode}
                    onClick={() => setViewMode(mode)}
                    className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                      viewMode === mode
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Matches */}
        {Object.keys(groupedMatches).length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-10 text-center">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">No matches scheduled</p>
          </div>
        ) : (
          <div className="space-y-6">
            {Object.entries(groupedMatches).map(([date, dayMatches]) => (
              <div key={date}>
                <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-600" />
                  {new Date(date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                </h2>

                <div className="space-y-3">
                  {dayMatches.map(match => (
                    <Link
                      key={match.id}
                      to={`/football-scorecard/${match.id}`}
                      className="block bg-white rounded-lg shadow hover:shadow-md transition-all duration-200 border border-gray-100"
                    >
                      <div className="p-4">
                        {/* League + Time */}
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{match.leagueIcon}</span>
                            <span className="text-sm font-medium text-gray-700">{match.league}</span>
                          </div>
                          <div className="flex items-center gap-1 text-green-600">
                            <Clock className="w-4 h-4" />
                            <span className="font-semibold">{match.time}</span>
                          </div>
                        </div>

                        {/* Teams */}
                        <div className="grid grid-cols-3 items-center gap-4 mb-3">
                          <div className="text-right">
                            <p className="text-lg font-bold text-gray-800 truncate">{match.homeTeam}</p>
                          </div>
                          <div className="text-center">
                            <span className="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-1.5 rounded-full text-sm font-bold">
                              VS
                            </span>
                          </div>
                          <div className="text-left">
                            <p className="text-lg font-bold text-gray-800 truncate">{match.awayTeam}</p>
                          </div>
                        </div>

                        {/* Details Row */}
                        <div className="flex justify-between items-center text-xs text-gray-600 border-t border-gray-100 pt-3">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{match.venue.split(' ').slice(-2).join(' ')}, {match.city}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Trophy className="w-3.5 h-3.5" />
                            <span className="truncate max-w-[150px]">{match.tv.join(', ')}</span>
                          </div>
                        </div>

                        {/* Odds */}
                        <div className="grid grid-cols-3 gap-2 mt-3">
                          <div className="bg-blue-50 rounded px-2 py-1.5 text-center">
                            <p className="text-xs text-gray-600">Home</p>
                            <p className="font-bold text-blue-700">{match.odds.home}</p>
                          </div>
                          <div className="bg-yellow-50 rounded px-2 py-1.5 text-center">
                            <p className="text-xs text-gray-600">Draw</p>
                            <p className="font-bold text-yellow-700">{match.odds.draw}</p>
                          </div>
                          <div className="bg-red-50 rounded px-2 py-1.5 text-center">
                            <p className="text-xs text-gray-600">Away</p>
                            <p className="font-bold text-red-700">{match.odds.away}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FootballSchedule;
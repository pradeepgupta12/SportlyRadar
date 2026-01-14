



// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Calendar, Clock, MapPin, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';
// import TopFootballStories from '../../data/TopFootballStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { footballSchedule } from '../../data/FootballScheduleData.js';

// const FootballSchedule = () => {
//   const navigate = useNavigate();
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedLeague, setSelectedLeague] = useState('all');
//   const [viewMode, setViewMode] = useState('day');

//   const leagues = ['all', 'Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1'];

//   const changeDate = (days) => {
//     const newDate = new Date(selectedDate);
//     newDate.setDate(newDate.getDate() + days);
//     setSelectedDate(newDate);
//   };

//   const filteredMatches = footballSchedule.filter(match => {
//     const matchesLeague = selectedLeague === 'all' || match.league === selectedLeague;
//     const matchDate = new Date(match.date).toDateString();
//     const selectedDateStr = selectedDate.toDateString();
//     const matchesDate = viewMode === 'day' ? matchDate === selectedDateStr : true;
//     return matchesLeague && matchesDate;
//   });

//   const groupedMatches = filteredMatches.reduce((acc, match) => {
//     if (!acc[match.date]) acc[match.date] = [];
//     acc[match.date].push(match);
//     return acc;
//   }, {});

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-10">
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="text-4xl font-bold mb-2">📅 Match Schedule</h1>
//           <p className="text-green-100">Upcoming football fixtures</p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-6">
//         {/* Controls */}
//         <div className="bg-white rounded-xl shadow-md p-5 mb-6">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//             <div className="flex items-center gap-3">
//               <button onClick={() => changeDate(-1)} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
//                 <ChevronLeft className="w-5 h-5" />
//               </button>
//               <div className="text-center">
//                 <p className="text-xl font-bold text-gray-800">
//                   {selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   {selectedDate.toLocaleDateString('en-US', { weekday: 'short' })}
//                 </p>
//               </div>
//               <button onClick={() => changeDate(1)} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => setSelectedDate(new Date())}
//                 className="ml-4 px-5 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700"
//               >
//                 Today
//               </button>
//             </div>

//             <div className="flex gap-3 items-center">
//               <select
//                 value={selectedLeague}
//                 onChange={(e) => setSelectedLeague(e.target.value)}
//                 className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500"
//               >
//                 {leagues.map(league => (
//                   <option key={league} value={league}>
//                     {league === 'all' ? 'All Leagues' : league}
//                   </option>
//                 ))}
//               </select>

//               <div className="flex gap-2">
//                 {['day', 'week'].map(mode => (
//                   <button
//                     key={mode}
//                     onClick={() => setViewMode(mode)}
//                     className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
//                       viewMode === mode
//                         ? 'bg-green-600 text-white'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {mode.charAt(0).toUpperCase() + mode.slice(1)}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Matches */}
//         {Object.keys(groupedMatches).length === 0 ? (
//           <div className="bg-white rounded-xl shadow-md p-10 text-center">
//             <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
//             <p className="text-gray-500">No matches scheduled</p>
//           </div>
//         ) : (
//           <div className="space-y-6">
//             {Object.entries(groupedMatches).map(([date, dayMatches]) => (
//               <div key={date}>
//                 <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
//                   <Calendar className="w-5 h-5 text-green-600" />
//                   {new Date(date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
//                 </h2>

//                 <div className="space-y-3">
//                   {dayMatches.map(match => (
//                     <Link
//                       key={match.id}
//                       to={`/football-scorecard/${match.id}`}
//                       className="block bg-white rounded-lg shadow hover:shadow-md transition-all duration-200 border border-gray-100"
//                     >
//                       <div className="p-4">
//                         {/* League + Time */}
//                         <div className="flex justify-between items-center mb-3">
//                           <div className="flex items-center gap-2">
//                             <span className="text-xl">{match.leagueIcon}</span>
//                             <span className="text-sm font-medium text-gray-700">{match.league}</span>
//                           </div>
//                           <div className="flex items-center gap-1 text-green-600">
//                             <Clock className="w-4 h-4" />
//                             <span className="font-semibold">{match.time}</span>
//                           </div>
//                         </div>

//                         {/* Teams */}
//                         <div className="grid grid-cols-3 items-center gap-4 mb-3">
//                           <div className="text-right">
//                             <p className="text-lg font-bold text-gray-800 truncate">{match.homeTeam}</p>
//                           </div>
//                           <div className="text-center">
//                             <span className="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-1.5 rounded-full text-sm font-bold">
//                               VS
//                             </span>
//                           </div>
//                           <div className="text-left">
//                             <p className="text-lg font-bold text-gray-800 truncate">{match.awayTeam}</p>
//                           </div>
//                         </div>

//                         {/* Details Row */}
//                         <div className="flex justify-between items-center text-xs text-gray-600 border-t border-gray-100 pt-3">
//                           <div className="flex items-center gap-1.5">
//                             <MapPin className="w-3.5 h-3.5" />
//                             <span>{match.venue.split(' ').slice(-2).join(' ')}, {match.city}</span>
//                           </div>
//                           <div className="flex items-center gap-1.5">
//                             <Trophy className="w-3.5 h-3.5" />
//                             <span className="truncate max-w-[150px]">{match.tv.join(', ')}</span>
//                           </div>
//                         </div>

//                         {/* Odds */}
//                         <div className="grid grid-cols-3 gap-2 mt-3">
//                           <div className="bg-blue-50 rounded px-2 py-1.5 text-center">
//                             <p className="text-xs text-gray-600">Home</p>
//                             <p className="font-bold text-blue-700">{match.odds.home}</p>
//                           </div>
//                           <div className="bg-yellow-50 rounded px-2 py-1.5 text-center">
//                             <p className="text-xs text-gray-600">Draw</p>
//                             <p className="font-bold text-yellow-700">{match.odds.draw}</p>
//                           </div>
//                           <div className="bg-red-50 rounded px-2 py-1.5 text-center">
//                             <p className="text-xs text-gray-600">Away</p>
//                             <p className="font-bold text-red-700">{match.odds.away}</p>
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
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';
import TopFootballStories from '../../data/TopFootballStories.js';
import LatestNews from '../../data/LatestNews.js';
import { footballSchedule } from '../../data/FootballScheduleData.js';
import SEO from '../../components/SEO.jsx';

const FootballSchedule = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedLeague, setSelectedLeague] = useState('all');
  const [viewMode, setViewMode] = useState('day');

  const leagues = ['all', 'Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1'];

  const changeDate = (days) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + days);
    setSelectedDate(newDate);
  };

  const filteredMatches = footballSchedule.filter(match => {
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

  // SEO data
  const seoTitle = 'Football Match Schedule - Upcoming Fixtures & Results | SportlyRadar';
  const seoDescription = 'Check all upcoming football matches schedule, fixtures, dates, times, venues, and odds for Premier League, La Liga, Serie A, Bundesliga & more.';
  const seoKeywords = 'football schedule, match fixtures, upcoming matches, football calendar, match times, football leagues, sports schedule';
  const currentUrl = window.location.href;

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        url={currentUrl}
        canonical={currentUrl}
      />
      
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
    </>
  );
};

export default FootballSchedule;
// import React, { useState } from 'react';
// import matchData from '../../data/CricketData.json';

// const LiveScores = () => {
//   const [selectedMainTab, setSelectedMainTab] = useState('live');
//   const [selectedFilterTab, setSelectedFilterTab] = useState('all');

//   const getMatchesByFilter = (filter) => {
//     if (filter === 'all') return matchData.live_matches;
//     if (filter === 'international') {
//       return matchData.live_matches.filter(match => 
//         ['Test', 'ODI', 'T20I'].includes(match.info.match_type)
//       );
//     }
//     if (filter === 'league') {
//       return matchData.live_matches.filter(match => 
//         match.info.series.toLowerCase().includes('league')
//       );
//     }
//     if (filter === 'domestic') {
//       return matchData.live_matches.filter(match => 
//         !['Test', 'ODI', 'T20I'].includes(match.info.match_type) && 
//         !match.info.series.toLowerCase().includes('league')
//       );
//     }
//     if (filter === 'women') {
//       return matchData.live_matches.filter(match => 
//         match.info.series.toLowerCase().includes('women')
//       );
//     }
//     return matchData.live_matches;
//   };

//   const getTeamNames = (series) => {
//     const teams = series.split(' vs ');
//     return teams.length === 2 ? teams : [series.split(' ')[0], series.split(' ')[2]];
//   };

//   const filteredMatches = getMatchesByFilter(selectedFilterTab);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <div className="bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 py-4 sm:py-6">
//             Live Cricket Score
//           </h1>
          
//           {/* Main Tabs */}
//           <div className="flex space-x-6 sm:space-x-8">
//             <button
//               onClick={() => setSelectedMainTab('live')}
//               className={`pb-3 sm:pb-4 px-1 font-medium text-sm sm:text-base transition-colors ${
//                 selectedMainTab === 'live'
//                   ? 'text-green-600 border-b-2 border-green-600'
//                   : 'text-gray-500 hover:text-gray-700'
//               }`}
//             >
//               Live
//             </button>
//             <button
//               onClick={() => setSelectedMainTab('recent')}
//               className={`pb-3 sm:pb-4 px-1 font-medium text-sm sm:text-base transition-colors ${
//                 selectedMainTab === 'recent'
//                   ? 'text-green-600 border-b-2 border-green-600'
//                   : 'text-gray-500 hover:text-gray-700'
//               }`}
//             >
//               Recent
//             </button>
//             <button
//               onClick={() => setSelectedMainTab('upcoming')}
//               className={`pb-3 sm:pb-4 px-1 font-medium text-sm sm:text-base transition-colors ${
//                 selectedMainTab === 'upcoming'
//                   ? 'text-green-600 border-b-2 border-green-600'
//                   : 'text-gray-500 hover:text-gray-700'
//               }`}
//             >
//               Upcoming
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Filter Chips */}
//       <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
//             <button
//               onClick={() => setSelectedFilterTab('all')}
//               className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-colors ${
//                 selectedFilterTab === 'all'
//                   ? 'bg-green-600 text-white'
//                   : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//               }`}
//             >
//               All
//             </button>
//             <button
//               onClick={() => setSelectedFilterTab('international')}
//               className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-colors ${
//                 selectedFilterTab === 'international'
//                   ? 'bg-green-600 text-white'
//                   : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//               }`}
//             >
//               International
//             </button>
//             <button
//               onClick={() => setSelectedFilterTab('league')}
//               className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-colors ${
//                 selectedFilterTab === 'league'
//                   ? 'bg-green-600 text-white'
//                   : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//               }`}
//             >
//               League
//             </button>
//             <button
//               onClick={() => setSelectedFilterTab('domestic')}
//               className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-colors ${
//                 selectedFilterTab === 'domestic'
//                   ? 'bg-green-600 text-white'
//                   : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//               }`}
//             >
//               Domestic
//             </button>
//             <button
//               onClick={() => setSelectedFilterTab('women')}
//               className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-colors ${
//                 selectedFilterTab === 'women'
//                   ? 'bg-green-600 text-white'
//                   : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//               }`}
//             >
//               Women
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Match Cards */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
//         {selectedMainTab === 'live' && (
//           <div className="space-y-4">
//             {filteredMatches.length > 0 ? (
//               filteredMatches.map((match) => {
//                 const teams = getTeamNames(match.info.series);
//                 const firstInnings = match.scorecard['1st_innings'];
//                 const currentInnings = match.scorecard['2nd_innings_current'] || match.scorecard['1st_innings_current'];
                
//                 return (
//                   <div
//                     key={match.match_id}
//                     className="bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200"
//                   >
//                     {/* Match Header */}
//                     <div className="bg-gray-100 px-4 py-3 rounded-t-lg flex items-center justify-between">
//                       <h3 className="font-semibold text-gray-600 text-sm sm:text-base uppercase">
//                         {match.info.series}
//                       </h3>
//                       <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </div>

//                     {/* Match Details */}
//                     <div className="px-4 py-3">
//                       <p className="text-xs sm:text-sm text-gray-600 mb-3">
//                         {match.info.match_number} • {match.info.venue.city}, {match.info.venue.name}
//                       </p>

//                       {/* Teams and Scores */}
//                       <div className="space-y-2">
//                         {/* First Team */}
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center space-x-3">
//                             <img 
//                               src={match.info.team1_flag} 
//                               alt={teams[0]}
//                               className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
//                               onError={(e) => e.target.style.display = 'none'}
//                             />
//                             <span className="font-medium text-sm sm:text-base text-gray-900">
//                               {teams[0]}
//                             </span>
//                           </div>
//                           {firstInnings && firstInnings.batting_team === teams[0] && (
//                             <span className="font-bold text-base sm:text-lg text-gray-900">
//                               {firstInnings.score}
//                             </span>
//                           )}
//                           {currentInnings && currentInnings.batting_team === teams[0] && (
//                             <span className="font-bold text-base sm:text-lg text-gray-900">
//                               {currentInnings.score} ({currentInnings.overs})
//                             </span>
//                           )}
//                         </div>

//                         {/* Second Team */}
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center space-x-3">
//                             <img 
//                               src={match.info.team2_flag} 
//                               alt={teams[1]}
//                               className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
//                               onError={(e) => e.target.style.display = 'none'}
//                             />
//                             <span className="font-medium text-sm sm:text-base text-gray-900">
//                               {teams[1]}
//                             </span>
//                           </div>
//                           {firstInnings && firstInnings.batting_team === teams[1] && (
//                             <span className="font-bold text-base sm:text-lg text-gray-900">
//                               {firstInnings.score}
//                             </span>
//                           )}
//                           {currentInnings && currentInnings.batting_team === teams[1] && (
//                             <span className="font-bold text-base sm:text-lg text-gray-900">
//                               {currentInnings.score} ({currentInnings.overs})
//                             </span>
//                           )}
//                         </div>
//                       </div>

//                       {/* Match Status */}
//                       <div className="mt-3 pt-3 border-t border-gray-200">
//                         <p className="text-xs sm:text-sm text-blue-600 font-medium">
//                           {match.info.current_status}
//                         </p>
//                       </div>

//                       {/* Action Links */}
//                       <div className="mt-3 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
//                         <button className="text-blue-600 hover:underline font-medium">
//                           Live Score
//                         </button>
//                         <span className="text-gray-400">|</span>
//                         <button className="text-gray-600 hover:text-blue-600">
//                           Scorecard
//                         </button>
//                         <span className="text-gray-400">|</span>
//                         <button className="text-gray-600 hover:text-blue-600">
//                           Full Commentary
//                         </button>
//                         <span className="text-gray-400">|</span>
//                         <button className="text-gray-600 hover:text-blue-600">
//                           News
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })
//             ) : (
//               <div className="text-center py-12">
//                 <p className="text-gray-500 text-sm sm:text-base">
//                   No live matches available in this category
//                 </p>
//               </div>
//             )}
//           </div>
//         )}

//         {selectedMainTab === 'recent' && (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-sm sm:text-base">Recent matches will appear here</p>
//           </div>
//         )}

//         {selectedMainTab === 'upcoming' && (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-sm sm:text-base">Upcoming matches will appear here</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LiveScores;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import matchData from '../../data/CricketData.json';

const LiveScores = () => {
  const [selectedMainTab, setSelectedMainTab] = useState('live');
  const [selectedFilterTab, setSelectedFilterTab] = useState('all');
  
  const navigate = useNavigate();

  const getMatchesByFilter = (filter) => {
    if (filter === 'all') return matchData.live_matches;
    if (filter === 'international') {
      return matchData.live_matches.filter(match =>
        ['Test', 'ODI', 'T20I'].includes(match.info.match_type)
      );
    }
    if (filter === 'league') {
      return matchData.live_matches.filter(match =>
        match.info.series.toLowerCase().includes('league')
      );
    }
    if (filter === 'domestic') {
      return matchData.live_matches.filter(match =>
        !['Test', 'ODI', 'T20I'].includes(match.info.match_type) &&
        !match.info.series.toLowerCase().includes('league')
      );
    }
    if (filter === 'women') {
      return matchData.live_matches.filter(match =>
        match.info.series.toLowerCase().includes('women')
      );
    }
    return matchData.live_matches;
  };

  // IMPROVED FUNCTION - Sirf clean team names return karega
  const getTeamNames = (series) => {
    // "vs" se split karo (case insensitive)
    const parts = series.split(/\s+vs\s+/i);

    if (parts.length === 2) {
      let team1 = parts[0].trim();
      let team2 = parts[1].trim();

      // Team2 se year remove karo (jaise 2025, 2024, 2026)
      team2 = team2.replace(/\b(19|20)\d{2}\b/g, '').trim();

      // Extra common words remove karo (Final, Edition, Series, etc.)
      team2 = team2
        .replace(/\b(Final|Semi.?Final|Qualifier|Eliminator|Edition|Series|Tour|ODI|T20|Test)\b/gi, '')
        .trim();

      // Multiple spaces ko single kar do
      team2 = team2.replace(/\s+/g, ' ');

      return [team1, team2 || 'Team 2'];
    }

    // Fallback agar "vs" nahi mila
    const words = series.split(' ').filter(word => 
      !/^(vs|VS|Vs)$/i.test(word) && 
      !/\b(19|20)\d{2}\b/.test(word)
    );
    return words.length >= 2 
      ? [words[0], words.slice(-1)[0]] 
      : [series, 'Opponent'];
  };

  const filteredMatches = getMatchesByFilter(selectedFilterTab);

  const handleCardClick = (matchId, e) => {
    if (e.target.tagName === 'BUTTON' && e.target.innerText.trim() === 'News') {
      return;
    }
    navigate(`/cricket-scorecard/${matchId}`);
  };

  const handleNewsClick = (e) => {
    e.stopPropagation();
    navigate('/all-latest-news');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header + Main Tabs */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 py-4 sm:py-6">
            Live Cricket Score
          </h1>
         
          <div className="flex space-x-6 sm:space-x-8 overflow-x-auto scrollbar-hide pb-4">
            <button
              onClick={() => setSelectedMainTab('live')}
              className={`pb-3 px-1 font-medium text-sm sm:text-base transition-colors whitespace-nowrap ${
                selectedMainTab === 'live'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Live
            </button>
            <button
              onClick={() => setSelectedMainTab('recent')}
              className={`pb-3 px-1 font-medium text-sm sm:text-base transition-colors whitespace-nowrap ${
                selectedMainTab === 'recent'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Recent
            </button>
            <button
              onClick={() => setSelectedMainTab('upcoming')}
              className={`pb-3 px-1 font-medium text-sm sm:text-base transition-colors whitespace-nowrap ${
                selectedMainTab === 'upcoming'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Upcoming
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Filter Chips */}
      <div className="sticky top-16 z-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
            {['all', 'international', 'league', 'domestic', 'women'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilterTab(filter)}
                className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-colors capitalize flex-shrink-0 ${
                  selectedFilterTab === filter
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {filter === 'all' ? 'All' : filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Match Cards - Compact Design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {selectedMainTab === 'live' && (
          <div className="space-y-4">
            {filteredMatches.length > 0 ? (
              filteredMatches.map((match) => {
                const teams = getTeamNames(match.info.series);
                const firstInnings = match.scorecard['1st_innings'];
                const currentInnings = match.scorecard['2nd_innings_current'] || match.scorecard['1st_innings_current'];

                return (
                  <div
                    key={match.match_id}
                    onClick={(e) => handleCardClick(match.match_id, e)}
                    className="bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 cursor-pointer border border-gray-200 shadow-sm hover:shadow-md"
                  >
                    {/* Match Header */}
                    <div className="bg-gray-100 px-4 py-2.5 rounded-t-lg flex items-center justify-between">
                      <h3 className="font-semibold text-gray-600 text-xs sm:text-sm uppercase truncate pr-2">
                        {match.info.series}
                      </h3>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>

                    {/* Match Details - Compact */}
                    <div className="px-4 py-3">
                      <p className="text-xs text-gray-600 mb-2">
                        {match.info.match_number} • {match.info.venue.city}, {match.info.venue.name}
                      </p>

                      <div className="space-y-3">
                        {/* First Team */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <img
                              src={match.info.team1_flag}
                              alt={teams[0]}
                              className="w-7 h-7 sm:w-9 sm:h-9 rounded-full object-cover flex-shrink-0"
                              onError={(e) => e.target.style.display = 'none'}
                            />
                            <span className="font-medium text-sm text-gray-900 truncate">
                              {teams[0]}
                            </span>
                          </div>
                          {(firstInnings && firstInnings.batting_team === teams[0]) || (currentInnings && currentInnings.batting_team === teams[0]) ? (
                            <span className="font-bold text-sm sm:text-base text-gray-900 text-right">
                              {firstInnings && firstInnings.batting_team === teams[0] ? firstInnings.score : ''}
                              {currentInnings && currentInnings.batting_team === teams[0] ? (
                                <>
                                  {currentInnings.score}
                                  <span className="text-xs font-normal text-gray-600"> ({currentInnings.overs})</span>
                                </>
                              ) : ''}
                            </span>
                          ) : null}
                        </div>

                        {/* Second Team */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <img
                              src={match.info.team2_flag}
                              alt={teams[1]}
                              className="w-7 h-7 sm:w-9 sm:h-9 rounded-full object-cover flex-shrink-0"
                              onError={(e) => e.target.style.display = 'none'}
                            />
                            <span className="font-medium text-sm text-gray-900 truncate">
                              {teams[1]}
                            </span>
                          </div>
                          {(firstInnings && firstInnings.batting_team === teams[1]) || (currentInnings && currentInnings.batting_team === teams[1]) ? (
                            <span className="font-bold text-sm sm:text-base text-gray-900 text-right">
                              {firstInnings && firstInnings.batting_team === teams[1] ? firstInnings.score : ''}
                              {currentInnings && currentInnings.batting_team === teams[1] ? (
                                <>
                                  {currentInnings.score}
                                  <span className="text-xs font-normal text-gray-600"> ({currentInnings.overs})</span>
                                </>
                              ) : ''}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-xs sm:text-sm text-blue-600 font-medium">
                          {match.info.current_status}
                        </p>
                      </div>

                      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/cricket-scorecard/${match.match_id}`);
                          }}
                          className="text-blue-600 hover:underline font-medium"
                        >
                          Live Score
                        </button>
                        <span className="text-gray-400">|</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/cricket-scorecard/${match.match_id}`);
                          }}
                          className="text-gray-600 hover:text-blue-600"
                        >
                          Scorecard
                        </button>
                        <span className="text-gray-400">|</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/cricket-scorecard/${match.match_id}`);
                          }}
                          className="text-gray-600 hover:text-blue-600"
                        >
                          Full Commentary
                        </button>
                        <span className="text-gray-400">|</span>
                        <button
                          onClick={handleNewsClick}
                          className="text-red-600 hover:text-red-700 font-medium"
                        >
                          News
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-sm sm:text-base">
                  No live matches available in this category
                </p>
              </div>
            )}
          </div>
        )}

        {selectedMainTab === 'recent' && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-sm sm:text-base">Recent matches will appear here</p>
          </div>
        )}

        {selectedMainTab === 'upcoming' && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-sm sm:text-base">Upcoming matches will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveScores;
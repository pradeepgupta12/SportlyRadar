// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import matchData from '../../data/CricketData.json';

// const LiveScores = () => {
//   const [selectedMainTab, setSelectedMainTab] = useState('live');
//   const [selectedFilterTab, setSelectedFilterTab] = useState('all');
  
//   const navigate = useNavigate();

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

//   // IMPROVED FUNCTION - Sirf clean team names return karega
//   const getTeamNames = (series) => {
//     // "vs" se split karo (case insensitive)
//     const parts = series.split(/\s+vs\s+/i);

//     if (parts.length === 2) {
//       let team1 = parts[0].trim();
//       let team2 = parts[1].trim();

//       // Team2 se year remove karo (jaise 2025, 2024, 2026)
//       team2 = team2.replace(/\b(19|20)\d{2}\b/g, '').trim();

//       // Extra common words remove karo (Final, Edition, Series, etc.)
//       team2 = team2
//         .replace(/\b(Final|Semi.?Final|Qualifier|Eliminator|Edition|Series|Tour|ODI|T20|Test)\b/gi, '')
//         .trim();

//       // Multiple spaces ko single kar do
//       team2 = team2.replace(/\s+/g, ' ');

//       return [team1, team2 || 'Team 2'];
//     }

//     // Fallback agar "vs" nahi mila
//     const words = series.split(' ').filter(word => 
//       !/^(vs|VS|Vs)$/i.test(word) && 
//       !/\b(19|20)\d{2}\b/.test(word)
//     );
//     return words.length >= 2 
//       ? [words[0], words.slice(-1)[0]] 
//       : [series, 'Opponent'];
//   };

//   const filteredMatches = getMatchesByFilter(selectedFilterTab);

//   const handleCardClick = (matchId, e) => {
//     if (e.target.tagName === 'BUTTON' && e.target.innerText.trim() === 'News') {
//       return;
//     }
//     navigate(`/cricket-scorecard/${matchId}`);
//   };

//   const handleNewsClick = (e) => {
//     e.stopPropagation();
//     navigate('/all-latest-news');
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header + Main Tabs */}
//       <div className="bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 py-4 sm:py-6">
//             Live Cricket Score
//           </h1>
         
//           <div className="flex space-x-6 sm:space-x-8 overflow-x-auto scrollbar-hide pb-4">
//             <button
//               onClick={() => setSelectedMainTab('live')}
//               className={`pb-3 px-1 font-medium text-sm sm:text-base transition-colors whitespace-nowrap ${
//                 selectedMainTab === 'live'
//                   ? 'text-green-600 border-b-2 border-green-600'
//                   : 'text-gray-500 hover:text-gray-700'
//               }`}
//             >
//               Live
//             </button>
//             <button
//               onClick={() => setSelectedMainTab('recent')}
//               className={`pb-3 px-1 font-medium text-sm sm:text-base transition-colors whitespace-nowrap ${
//                 selectedMainTab === 'recent'
//                   ? 'text-green-600 border-b-2 border-green-600'
//                   : 'text-gray-500 hover:text-gray-700'
//               }`}
//             >
//               Recent
//             </button>
//             <button
//               onClick={() => setSelectedMainTab('upcoming')}
//               className={`pb-3 px-1 font-medium text-sm sm:text-base transition-colors whitespace-nowrap ${
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

//       {/* Sticky Filter Chips */}
//       <div className="sticky top-16 z-40 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
//             {['all', 'international', 'league', 'domestic', 'women'].map((filter) => (
//               <button
//                 key={filter}
//                 onClick={() => setSelectedFilterTab(filter)}
//                 className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-colors capitalize flex-shrink-0 ${
//                   selectedFilterTab === filter
//                     ? 'bg-green-600 text-white'
//                     : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                 }`}
//               >
//                 {filter === 'all' ? 'All' : filter}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Match Cards - Compact Design */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
//                     onClick={(e) => handleCardClick(match.match_id, e)}
//                     className="bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 cursor-pointer border border-gray-200 shadow-sm hover:shadow-md"
//                   >
//                     {/* Match Header */}
//                     <div className="bg-gray-100 px-4 py-2.5 rounded-t-lg flex items-center justify-between">
//                       <h3 className="font-semibold text-gray-600 text-xs sm:text-sm uppercase truncate pr-2">
//                         {match.info.series}
//                       </h3>
//                       <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </div>

//                     {/* Match Details - Compact */}
//                     <div className="px-4 py-3">
//                       <p className="text-xs text-gray-600 mb-2">
//                         {match.info.match_number} • {match.info.venue.city}, {match.info.venue.name}
//                       </p>

//                       <div className="space-y-3">
//                         {/* First Team */}
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center space-x-2 sm:space-x-3">
//                             <img
//                               src={match.info.team1_flag}
//                               alt={teams[0]}
//                               className="w-7 h-7 sm:w-9 sm:h-9 rounded-full object-cover flex-shrink-0"
//                               onError={(e) => e.target.style.display = 'none'}
//                             />
//                             <span className="font-medium text-sm text-gray-900 truncate">
//                               {teams[0]}
//                             </span>
//                           </div>
//                           {(firstInnings && firstInnings.batting_team === teams[0]) || (currentInnings && currentInnings.batting_team === teams[0]) ? (
//                             <span className="font-bold text-sm sm:text-base text-gray-900 text-right">
//                               {firstInnings && firstInnings.batting_team === teams[0] ? firstInnings.score : ''}
//                               {currentInnings && currentInnings.batting_team === teams[0] ? (
//                                 <>
//                                   {currentInnings.score}
//                                   <span className="text-xs font-normal text-gray-600"> ({currentInnings.overs})</span>
//                                 </>
//                               ) : ''}
//                             </span>
//                           ) : null}
//                         </div>

//                         {/* Second Team */}
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center space-x-2 sm:space-x-3">
//                             <img
//                               src={match.info.team2_flag}
//                               alt={teams[1]}
//                               className="w-7 h-7 sm:w-9 sm:h-9 rounded-full object-cover flex-shrink-0"
//                               onError={(e) => e.target.style.display = 'none'}
//                             />
//                             <span className="font-medium text-sm text-gray-900 truncate">
//                               {teams[1]}
//                             </span>
//                           </div>
//                           {(firstInnings && firstInnings.batting_team === teams[1]) || (currentInnings && currentInnings.batting_team === teams[1]) ? (
//                             <span className="font-bold text-sm sm:text-base text-gray-900 text-right">
//                               {firstInnings && firstInnings.batting_team === teams[1] ? firstInnings.score : ''}
//                               {currentInnings && currentInnings.batting_team === teams[1] ? (
//                                 <>
//                                   {currentInnings.score}
//                                   <span className="text-xs font-normal text-gray-600"> ({currentInnings.overs})</span>
//                                 </>
//                               ) : ''}
//                             </span>
//                           ) : null}
//                         </div>
//                       </div>

//                       <div className="mt-3 pt-3 border-t border-gray-200">
//                         <p className="text-xs sm:text-sm text-blue-600 font-medium">
//                           {match.info.current_status}
//                         </p>
//                       </div>

//                       <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             navigate(`/cricket-scorecard/${match.match_id}`);
//                           }}
//                           className="text-blue-600 hover:underline font-medium"
//                         >
//                           Live Score
//                         </button>
//                         <span className="text-gray-400">|</span>
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             navigate(`/cricket-scorecard/${match.match_id}`);
//                           }}
//                           className="text-gray-600 hover:text-blue-600"
//                         >
//                           Scorecard
//                         </button>
//                         <span className="text-gray-400">|</span>
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             navigate(`/cricket-scorecard/${match.match_id}`);
//                           }}
//                           className="text-gray-600 hover:text-blue-600"
//                         >
//                           Full Commentary
//                         </button>
//                         <span className="text-gray-400">|</span>
//                         <button
//                           onClick={handleNewsClick}
//                           className="text-red-600 hover:text-red-700 font-medium"
//                         >
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
import TopStories from '../../data/TopStories.js';
import LatestNews from '../../data/LatestNews.js'; // ← Add this import

const LiveScores = () => {
  const [selectedMainTab, setSelectedMainTab] = useState('live');
  const [selectedFilterTab, setSelectedFilterTab] = useState('all');
  
  const navigate = useNavigate();

  // === Existing Match Filtering Logic (unchanged) ===
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

  const getTeamNames = (series) => {
    const parts = series.split(/\s+vs\s+/i);
    if (parts.length === 2) {
      let team1 = parts[0].trim();
      let team2 = parts[1].trim();
      team2 = team2.replace(/\b(19|20)\d{2}\b/g, '').trim();
      team2 = team2
        .replace(/\b(Final|Semi.?Final|Qualifier|Eliminator|Edition|Series|Tour|ODI|T20|Test)\b/gi, '')
        .trim();
      team2 = team2.replace(/\s+/g, ' ');
      return [team1, team2 || 'Team 2'];
    }
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

  const handleStoryClick = (id) => {
    navigate(`/details/cricket/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header + Tabs */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 py-4 sm:py-6">
            Live Cricket Score
          </h1>
         
          <div className="flex space-x-6 sm:space-x-8 overflow-x-auto scrollbar-hide pb-4 border-b border-gray-200">
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

      {/* Sticky Filter Tabs */}
      <div className="sticky top-16 z-40 bg-white  border-gray-200 shadow-sm">
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

      {/* Main Content: Matches + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left: Matches */}
          <div className="lg:col-span-8 space-y-4">
            {/* ... (Your existing matches rendering code - unchanged) ... */}
            {selectedMainTab === 'live' && (
              <>
                {filteredMatches.length > 0 ? (
                  filteredMatches.map((match) => {
                    const teams = getTeamNames(match.info.series);
                    const firstInnings = match.scorecard['1st_innings'];
                    const currentInnings = match.scorecard['2nd_innings_current'] || match.scorecard['1st_innings_current'];

                    return (
                      <div
                        key={match.match_id}
                        onClick={(e) => handleCardClick(match.match_id, e)}
                        className="bg-white rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer border border-gray-200 shadow-sm hover:shadow-md"
                      >
                        {/* Match card content - unchanged */}
                        <div className="bg-gray-100 px-4 py-2.5 rounded-t-lg flex items-center justify-between">
                          <h3 className="font-semibold text-gray-600 text-xs sm:text-sm uppercase truncate pr-2">
                            {match.info.series}
                          </h3>
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>

                        <div className="px-4 py-3">
                          <p className="text-xs text-gray-600 mb-2">
                            {match.info.match_number} • {match.info.venue.city}, {match.info.venue.name}
                          </p>

                          <div className="space-y-3">
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
                            <button onClick={(e) => { e.stopPropagation(); navigate(`/cricket-scorecard/${match.match_id}`); }} className="text-blue-600 hover:underline font-medium">
                              Live Score
                            </button>
                            <span className="text-gray-400">|</span>
                            <button onClick={(e) => { e.stopPropagation(); navigate(`/cricket-scorecard/${match.match_id}`); }} className="text-gray-600 hover:text-blue-600">
                              Scorecard
                            </button>
                            <span className="text-gray-400">|</span>
                            <button onClick={(e) => { e.stopPropagation(); navigate(`/cricket-scorecard/${match.match_id}`); }} className="text-gray-600 hover:text-blue-600">
                              Full Commentary
                            </button>
                            <span className="text-gray-400">|</span>
                            <button onClick={handleNewsClick} className="text-red-600 hover:text-red-700 font-medium">
                              News
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-12 bg-white rounded-lg">
                    <p className="text-gray-500 text-sm sm:text-base">
                      No live matches available in this category
                    </p>
                  </div>
                )}
              </>
            )}

            {selectedMainTab === 'recent' && (
              <div className="text-center py-12 bg-white rounded-lg">
                <p className="text-gray-500 text-sm sm:text-base">Recent matches will appear here</p>
              </div>
            )}

            {selectedMainTab === 'upcoming' && (
              <div className="text-center py-12 bg-white rounded-lg">
                <p className="text-gray-500 text-sm sm:text-base">Upcoming matches will appear here</p>
              </div>
            )}
          </div>

          {/* Right Sidebar: Top Cricket Stories (Desktop only) */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-5">Top Cricket Stories</h3>
              <div className="space-y-4">
                {TopStories.data.TopStories.slice(0, 5).map((story) => (
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
                onClick={() => navigate('/all-top-cricket-stories')}
                className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
              >
                View All Stories →
              </button>
            </div>
          </div>
        </div>

        {/* Mobile: Top Cricket Stories */}
        <div className="lg:hidden mt-10">
          <div className="bg-white rounded-xl shadow-md p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top Cricket Stories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TopStories.data.TopStories.slice(0, 4).map((story) => (
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
              onClick={() => navigate('/all-top-cricket-stories')}
              className="mt-4 w-full text-center text-blue-600 font-medium hover:underline text-sm"
            >
              View All Stories →
            </button>
          </div>
        </div>

        {/* === NEW: Latest Sports News Section (Below everything) === */}
        <div className="mt-12">
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

export default LiveScores;
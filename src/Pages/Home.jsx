// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// // Data imports
// import basketballData from '../data/BasketballData.json';
// import footballData from '../data/FootballData.json';
// import tennisData from '../data/LiveTennisMatches.js';
// import cricketData from '../data/CricketData.json';
// import hockeyData from '../data/LiveHockeyMatchDetail.js';
// import LatestSportsNews from '../Pages/LatestSportsNews.jsx';
// import Blogs from '../Pages/Blogs.jsx';

// const Home = () => {
//   const [allMatches, setAllMatches] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [cardsToShow, setCardsToShow] = useState(4);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const matches = [];
//     (basketballData.live_matches || []).forEach(m => matches.push({ ...m, sport: 'basketball' }));
//     (footballData.data?.LiveMatches || []).forEach(m => matches.push({ ...m, sport: 'football' }));
//     (tennisData.data?.LiveMatches || []).forEach(m => matches.push({ ...m, sport: 'tennis' }));
//     (cricketData.live_matches || []).forEach(m => matches.push({ ...m, sport: 'cricket' }));
//     (hockeyData.data?.matches || []).forEach(m => matches.push({ ...m, sport: 'hockey' }));
//     setAllMatches(matches);
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1280) {
//         setCardsToShow(4);
//       } else if (window.innerWidth >= 1024) {
//         setCardsToShow(3);
//       } else if (window.innerWidth >= 640) {
//         setCardsToShow(2);
//       } else {
//         setCardsToShow(1);
//       }
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleCardClick = (sport, matchId) => {
//     navigate(`/${sport}-scorecard/${matchId}`);
//   };

//   const handleMatchInfoClick = (sport, matchId, e) => {
//     e.stopPropagation();
//     navigate(`/${sport}-match-info/${matchId}`);
//   };

//   const handleScoreCardClick = (sport, matchId, e) => {
//     e.stopPropagation();
//     navigate(`/${sport}-scorecard/${matchId}`);
//   };

//   const getSportBadge = (sport) => {
//     const badges = {
//       basketball: { name: 'Basketball', color: 'bg-orange-500' },
//       football: { name: 'Football', color: 'bg-green-600' },
//       tennis: { name: 'Tennis', color: 'bg-purple-600' },
//       cricket: { name: 'Cricket', color: 'bg-blue-600' },
//       hockey: { name: 'Hockey', color: 'bg-red-600' }
//     };
//     return badges[sport] || { name: sport.toUpperCase(), color: 'bg-gray-600' };
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prev) => (prev > 0 ? prev - 1 : allMatches.length - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev < allMatches.length - 1 ? prev + 1 : 0));
//   };

//   const getVisibleMatches = () => {
//     if (allMatches.length === 0) return [];
    
//     const visible = [];
//     for (let i = 0; i < cardsToShow; i++) {
//       const index = (currentIndex + i) % allMatches.length;
//       visible.push(allMatches[index]);
//     }
//     return visible;
//   };

// const renderMatchCard = (match) => {
//   if (!match) return null;
//   const sport = match.sport;
//   const badge = getSportBadge(sport);

//   let team1Country = 'Unknown';
//   let team2Country = 'Unknown';
//   let score1 = '0', score2 = '0';
//   let statusText = 'Live';
//   let venueText = '';
//   let img1 = "https://via.placeholder.com/24";
//   let img2 = "https://via.placeholder.com/24";

//   // Basketball
//   if (sport === 'basketball' && match.teams?.length >= 2) {
//     team1Country = match.teams[0].country || 'Unknown';
//     team2Country = match.teams[1].country || 'Unknown';
//     score1 = match.teams[0].total_points ?? 0;
//     score2 = match.teams[1].total_points ?? 0;
//     statusText = `Q${match.match_info?.quarter || '?'} • ${match.match_info?.time_remaining || ''} left`;
//     venueText = `${match.arena?.name || ''}, ${match.arena?.city || ''}`;
//     img1 = match.images?.team1_flag || img1;
//     img2 = match.images?.team2_flag || img2;

//   // Football
//   } else if (sport === 'football' && match.teams?.home && match.teams?.away) {
//     team1Country = match.teams.home.country || 'Unknown';
//     team2Country = match.teams.away.country || 'Unknown';
//     score1 = match.scores?.current_score?.home_goals ?? 0;
//     score2 = match.scores?.current_score?.away_goals ?? 0;
//     statusText = match.match_summary?.current_status || 'Live';
//     venueText = `${match.venue?.name || ''}, ${match.venue?.city || ''}`;
//     img1 = match.images?.team1_logo || img1;
//     img2 = match.images?.team2_logo || img2;

//   // Tennis
//   } else if (sport === 'tennis' && match.players?.length >= 2) {
//     const p1 = match.players[0];
//     const p2 = match.players[1];
//     const isDoubles = p1.team !== undefined;

//     if (isDoubles) {
//       team1Country = `${p1.team[0].country} / ${p1.team[1].country}`;
//       team2Country = `${p2.team[0].country} / ${p2.team[1].country}`;
//     } else {
//       team1Country = p1.country || 'Unknown';
//       team2Country = p2.country || 'Unknown';
//     }

//     const currentSet = match.scorecard?.current_set;
//     if (currentSet) {
//       if (isDoubles) {
//         score1 = currentSet.team1_games ?? 0;
//         score2 = currentSet.team2_games ?? 0;
//       } else {
//         score1 = currentSet.player1_games ?? 0;
//         score2 = currentSet.player2_games ?? 0;
//       }
//     }

//     statusText = match.scorecard?.current_status || 'Live';
//     venueText = `${match.venue?.name || ''}, ${match.venue?.city || ''}`;

//   // Cricket
//   } else if (sport === 'cricket') {
//     const squadKeys = Object.keys(match.squads || {});
//     if (squadKeys.length >= 2) {
//       team1Country = match.squads[squadKeys[0]]?.country || 'Unknown';
//       team2Country = match.squads[squadKeys[1]]?.country || 'Unknown';
//     }

//     const currentInnings = match.scorecard?.['1st_innings_current'] || 
//                           match.scorecard?.['2nd_innings_current'] || 
//                           match.scorecard?.['1st_innings'];

//     score1 = currentInnings?.score || '—';
//     score2 = ''; // Cricket में आमतौर पर current batting team का score ही दिखाते हैं

//     statusText = match.info?.current_status || 'Live';
//     venueText = `${match.info?.venue?.name || ''}, ${match.info?.venue?.city || ''}`;
//     img1 = match.info?.team1_flag || img1;
//     img2 = match.info?.team2_flag || img2;

//   // Hockey
//   } else if (sport === 'hockey' && match.squads?.teams?.length >= 2) {
//     team1Country = match.squads.teams[0].country || 'Unknown';
//     team2Country = match.squads.teams[1].country || 'Unknown';

//     const scoreStr = match.scorecard?.current_score || '0 - 0';
//     const scores = scoreStr.split(' - ');
//     score1 = scores[0] || '0';
//     score2 = scores[1] || '0';

//     statusText = `Q${match.info?.current_quarter || '?'} • Ongoing`;
//     venueText = `${match.info?.venue?.name || ''}, ${match.info?.venue?.city || ''}`;
//     img1 = match.images?.team1_flag || img1;
//     img2 = match.images?.team2_flag || img2;
//   }

//   return (
//     <div
//       key={match.match_id}
//       className="relative bg-white rounded-lg shadow-md p-4 w-full cursor-pointer hover:shadow-lg transition-shadow"
//       onClick={() => handleCardClick(sport, match.match_id)}
//     >
//       <div className={`absolute top-2 right-2 ${badge.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm`}>
//         {badge.name}
//       </div>
//       <p className="text-xs sm:text-sm text-gray-500 truncate pr-20">
//         <span className="text-blue-600 font-medium">LIVE</span>
//       </p>

//       {/* Team 1 - Only Country */}
//       <div className="flex justify-between items-center mt-2">
//         <div className="flex items-center space-x-2 flex-1 min-w-0">
//           <img src={img1} alt="" className="w-6 h-6 object-cover flex-shrink-0" />
//           <div className="flex flex-col min-w-0">
//             <p className="text-xs sm:text-sm font-semibold truncate">{team1Country}</p>
//           </div>
//         </div>
//         <p className="text-sm sm:text-base font-bold ml-2">{score1}</p>
//       </div>

//       {/* Team 2 - Only Country */}
//       <div className="flex justify-between items-center mt-2">
//         <div className="flex items-center space-x-2 flex-1 min-w-0">
//           <img src={img2} alt="" className="w-6 h-6 object-cover flex-shrink-0" />
//           <div className="flex flex-col min-w-0">
//             <p className="text-xs sm:text-sm font-semibold truncate">{team2Country}</p>
//           </div>
//         </div>
//         <p className="text-sm sm:text-base font-bold ml-2">{score2}</p>
//       </div>

//       <p className="text-xs sm:text-sm text-gray-600 mt-2 truncate">{statusText}</p>
//       <p className="text-xs sm:text-sm text-gray-600 truncate">{venueText}</p>

//       <div className="flex justify-between mt-2">
//         <button
//           onClick={(e) => handleMatchInfoClick(sport, match.match_id, e)}
//           className="text-blue-600 text-xs sm:text-sm hover:underline"
//         >
//           Match Info
//         </button>
//         <button
//           onClick={(e) => handleScoreCardClick(sport, match.match_id, e)}
//           className="text-blue-600 text-xs sm:text-sm hover:underline"
//         >
//           Scorecard
//         </button>
//       </div>
//     </div>
//   );
// };

//   return (
//     <main className="w-full bg-gray-50 min-h-screen">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
//         {allMatches.length > 0 ? (
//           <div className="relative">
//             <button
//               onClick={handlePrevious}
//               className="absolute left-5 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-green-600 hover:bg-green-700 text-white rounded-full p-3 shadow-lg transition-all duration-200 flex items-center justify-center"
//               style={{ width: '35px', height: '35px' }}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
//               </svg>
//             </button>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-8">
//               {getVisibleMatches().map((match, idx) => (
//                 <div key={`${match.match_id}-${idx}`}>
//                   {renderMatchCard(match)}
//                 </div>
//               ))}
//             </div>

//             <button
//               onClick={handleNext}
//               className="absolute right-5 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-green-600 hover:bg-green-700 text-white rounded-full p-3 shadow-lg transition-all duration-200 flex items-center justify-center"
//               style={{ width: '35px', height: '35px' }}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//               </svg>
//             </button>
//           </div>
//         ) : (
//           <p className="text-gray-500 py-8 text-center">No live matches currently</p>
//         )}
//       </div>
//       <LatestSportsNews/>
//       <Blogs/>
//     </main>
//   );
// };

// export default Home;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Data imports
import basketballData from '../data/BasketballData.json';
import footballData from '../data/FootballData.json';
import tennisData from '../data/LiveTennisMatches.js';
import cricketData from '../data/CricketData.json';
import hockeyData from '../data/LiveHockeyMatchDetail.js';

import LatestSportsNews from '../Pages/LatestSportsNews.jsx';
import Blogs from '../Pages/Blogs.jsx';

const Home = () => {
  const [allMatches, setAllMatches] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);
  const navigate = useNavigate();

  // Load all live matches
  useEffect(() => {
    const matches = [];

    (basketballData.live_matches || []).forEach(m => 
      matches.push({ ...m, sport: 'basketball' })
    );

    (footballData.data?.LiveMatches || []).forEach(m => 
      matches.push({ ...m, sport: 'football' })
    );

    (tennisData.data?.LiveMatches || []).forEach(m => 
      matches.push({ ...m, sport: 'tennis' })
    );

    (cricketData.live_matches || []).forEach(m => 
      matches.push({ ...m, sport: 'cricket' })
    );

    (hockeyData.data?.matches || []).forEach(m => 
      matches.push({ ...m, sport: 'hockey' })
    );

    setAllMatches(matches);
  }, []);

  // Responsive cards count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setCardsToShow(4);
      else if (window.innerWidth >= 1024) setCardsToShow(3);
      else if (window.innerWidth >= 640) setCardsToShow(2);
      else setCardsToShow(1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Card click → Scorecard page (default tab: Info)
  const handleCardClick = (sport, matchId) => {
    const routes = {
      football: `/football-scorecard/${matchId}`,
      basketball: `/basketball-scorecard/${matchId}`,
      hockey: `/hockey-scorecard/${matchId}`,
      cricket: `/cricket-scorecard/${matchId}`,
      tennis: `/tennis-scorecard/${matchId}`,
    };

    const route = routes[sport];
    if (route) {
      navigate(route);
    }
  };

  // Schedule button click → Same scorecard page (opens Info tab by default)
  const handleScheduleClick = (sport, matchId, e) => {
    e.stopPropagation(); // Card के click को रोकता है
    const routes = {
      football: `/football-scorecard/${matchId}`,
      basketball: `/basketball-scorecard/${matchId}`,
      hockey: `/hockey-scorecard/${matchId}`,
      cricket: `/cricket-scorecard/${matchId}`,
      tennis: `/tennis-scorecard/${matchId}`,
    };

    const route = routes[sport];
    if (route) {
      navigate(route);
    }
  };

  // Sport badge
  const getSportBadge = (sport) => {
    const badges = {
      basketball: { name: 'Basketball', color: 'bg-orange-500' },
      football: { name: 'Football', color: 'bg-green-600' },
      tennis: { name: 'Tennis', color: 'bg-purple-600' },
      cricket: { name: 'Cricket', color: 'bg-blue-600' },
      hockey: { name: 'Hockey', color: 'bg-red-600' },
    };
    return badges[sport] || { name: sport.toUpperCase(), color: 'bg-gray-600' };
  };

  // Carousel navigation
  const handlePrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? allMatches.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === allMatches.length - 1 ? 0 : prev + 1));
  };

  const getVisibleMatches = () => {
    if (allMatches.length === 0) return [];
    const visible = [];
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % allMatches.length;
      visible.push(allMatches[index]);
    }
    return visible;
  };

  // Render match card
  const renderMatchCard = (match) => {
    if (!match) return null;
    const { sport } = match;
    const badge = getSportBadge(sport);

    let team1Name = 'Team 1';
    let team2Name = 'Team 2';
    let score1 = '—';
    let score2 = '—';
    let statusText = 'Live';
    let venueText = '';
    let img1 = "https://via.placeholder.com/24";
    let img2 = "https://via.placeholder.com/24";

    // Sport-specific data (same as before)
    if (sport === 'football') {
      team1Name = match.teams?.home?.name || 'Home';
      team2Name = match.teams?.away?.name || 'Away';
      score1 = match.scores?.current_score?.home_goals ?? match.scores?.home ?? 0;
      score2 = match.scores?.current_score?.away_goals ?? match.scores?.away ?? 0;
      statusText = match.match_summary?.current_status || match.status || 'Live';
      venueText = `${match.venue?.name || ''}, ${match.venue?.city || ''}`.trim() || 'Venue TBD';
      img1 = match.images?.team1_logo || img1;
      img2 = match.images?.team2_logo || img2;

    } else if (sport === 'basketball') {
      team1Name = match.teams?.[0]?.name || 'Team 1';
      team2Name = match.teams?.[1]?.name || 'Team 2';
      score1 = match.teams?.[0]?.total_points ?? 0;
      score2 = match.teams?.[1]?.total_points ?? 0;
      statusText = `Q${match.match_info?.quarter || '?'} • ${match.match_info?.time_remaining || ''} left`;
      venueText = `${match.arena?.name || ''}, ${match.arena?.city || ''}`.trim() || 'Venue TBD';
      img1 = match.images?.team1_flag || img1;
      img2 = match.images?.team2_flag || img2;

    } else if (sport === 'hockey') {
      team1Name = match.squads?.teams?.[0]?.name || 'Team 1';
      team2Name = match.squads?.teams?.[1]?.name || 'Team 2';
      score1 = match.scorecard?.team_stats?.[0]?.total_goals ?? 0;
      score2 = match.scorecard?.team_stats?.[1]?.total_goals ?? 0;
      statusText = `Q${match.info?.current_quarter || '?'} • Ongoing`;
      venueText = `${match.info?.venue?.name || ''}, ${match.info?.venue?.city || ''}`.trim() || 'Venue TBD';
      img1 = match.images?.team1_flag || img1;
      img2 = match.images?.team2_flag || img2;

    } else if (sport === 'cricket') {
      const squadKeys = Object.keys(match.squads || {});
      team1Name = squadKeys[0] || 'Team 1';
      team2Name = squadKeys[1] || 'Team 2';
      const currentInnings = match.scorecard?.['1st_innings_current'] || 
                            match.scorecard?.['2nd_innings_current'] || 
                            match.scorecard?.['1st_innings'];
      score1 = currentInnings?.score || '—';
      score2 = '';
      statusText = match.info?.current_status || 'Live';
      venueText = `${match.info?.venue?.name || ''}, ${match.info?.venue?.city || ''}`.trim() || 'Venue TBD';
      img1 = match.info?.team1_flag || img1;
      img2 = match.info?.team2_flag || img2;

    } else if (sport === 'tennis') {
      const p1 = match.players?.[0];
      const p2 = match.players?.[1];
      team1Name = p1?.name || 'Player 1';
      team2Name = p2?.name || 'Player 2';
      const currentSet = match.scorecard?.current_set;
      score1 = currentSet?.player1_games ?? currentSet?.team1_games ?? 0;
      score2 = currentSet?.player2_games ?? currentSet?.team2_games ?? 0;
      statusText = match.scorecard?.current_status || 'Live';
      venueText = `${match.venue?.name || ''}, ${match.venue?.city || ''}`.trim() || 'Venue TBD';
      img1 = match.images?.team1_flag || img1;
      img2 = match.images?.team2_flag || img2;
    }

    return (
      <div
        key={match.match_id}
        className="relative bg-white rounded-lg shadow-md p-4 w-full cursor-pointer hover:shadow-lg transition-shadow"
        onClick={() => handleCardClick(sport, match.match_id)}
      >
        {/* Badge */}
        <div className={`absolute top-2 right-2 ${badge.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm`}>
          {badge.name}
        </div>

        {/* Live */}
        <p className="text-xs sm:text-sm text-gray-500 truncate pr-20">
          <span className="text-blue-600 font-medium">LIVE</span>
        </p>

        {/* Team 1 */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center space-x-2 flex-1 min-w-0">
            <img src={img1} alt={team1Name} className="w-6 h-6 object-cover flex-shrink-0 rounded-full" />
            <p className="text-xs sm:text-sm font-semibold truncate">{team1Name}</p>
          </div>
          <p className="text-sm sm:text-base font-bold ml-2">{score1}</p>
        </div>

        {/* Team 2 */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center space-x-2 flex-1 min-w-0">
            <img src={img2} alt={team2Name} className="w-6 h-6 object-cover flex-shrink-0 rounded-full" />
            <p className="text-xs sm:text-sm font-semibold truncate">{team2Name}</p>
          </div>
          <p className="text-sm sm:text-base font-bold ml-2">{score2}</p>
        </div>

        {/* Status & Venue */}
        <p className="text-xs sm:text-sm text-gray-600 mt-2 truncate">{statusText}</p>
        <p className="text-xs sm:text-sm text-gray-600 truncate">{venueText}</p>

        {/* Schedule Button - अब scorecard page का Info tab खोलेगा */}
        <div className="flex justify-end mt-2">
          <button
            onClick={(e) => handleScheduleClick(sport, match.match_id, e)}
            className="text-blue-600 text-xs sm:text-sm hover:underline"
          >
            Schedule
          </button>
        </div>
      </div>
    );
  };

  return (
    <main className="w-full bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        {allMatches.length === 0 ? (
          <p className="text-center text-gray-500 py-10 text-lg">Loading live matches...</p>
        ) : allMatches.length > 0 ? (
          <div className="relative">
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              className="absolute left-5 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-green-600 hover:bg-green-700 text-white rounded-full p-3 shadow-lg transition-all duration-200 flex items-center justify-center"
              style={{ width: '35px', height: '35px' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-8">
              {getVisibleMatches().map((match, idx) => (
                <div key={`${match.match_id}-${idx}`}>
                  {renderMatchCard(match)}
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-5 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-green-600 hover:bg-green-700 text-white rounded-full p-3 shadow-lg transition-all duration-200 flex items-center justify-center"
              style={{ width: '35px', height: '35px' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-500 py-10 text-lg">No live matches currently</p>
        )}
      </div>

      <LatestSportsNews />
      <Blogs />
    </main>
  );
};

export default Home;


////// API vala code hai neeche 

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import LatestSportsNews from '../Pages/LatestSportsNews.jsx';
// import Blogs from '../Pages/Blogs.jsx';

// // Vite ke liye env variables
// const API_SPORTS_KEY = import.meta.env.VITE_API_SPORTS_KEY;
// const CRICKETDATA_KEY = import.meta.env.VITE_CRICKETDATA_KEY;
// const API_TENNIS_KEY = import.meta.env.VITE_API_TENNIS_KEY;

// const Home = () => {
//   const [allMatches, setAllMatches] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [cardsToShow, setCardsToShow] = useState(4);
//   const navigate = useNavigate();

//   // Responsive cards
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1280) setCardsToShow(4);
//       else if (window.innerWidth >= 1024) setCardsToShow(3);
//       else if (window.innerWidth >= 640) setCardsToShow(2);
//       else setCardsToShow(1);
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Live matches fetch from all APIs
//   const fetchLiveMatches = async () => {
//     setLoading(true);
//     const matches = [];

//     try {
//       // API-Sports: Football, Basketball, Hockey
//       if (API_SPORTS_KEY) {
//         // Football
//         const footballRes = await fetch('https://v3.football.api-sports.io/fixtures?live=all', {
//           headers: { 'x-apisports-key': API_SPORTS_KEY }
//         });
//         if (footballRes.ok) {
//           const footballData = await footballRes.json();
//           footballData.response?.forEach(f => {
//             const status = f.fixture.status.short;
//             if (['1H', '2H', 'HT', 'ET', 'P', 'LIVE'].includes(status)) {
//               matches.push({
//                 match_id: f.fixture.id,
//                 sport: 'football',
//                 teams: { home: f.teams.home, away: f.teams.away },
//                 scores: { home: f.goals.home ?? 0, away: f.goals.away ?? 0 },
//                 status: f.fixture.status.elapsed ? `${f.fixture.status.elapsed}'` : 'Live',
//                 venue: [f.fixture.venue?.name, f.fixture.venue?.city].filter(Boolean).join(', '),
//                 images: { team1_logo: f.teams.home.logo || '', team2_logo: f.teams.away.logo || '' }
//               });
//             }
//           });
//         }

//         // Basketball
//         const basketballRes = await fetch('https://v1.basketball.api-sports.io/games?live=all', {
//           headers: { 'x-apisports-key': API_SPORTS_KEY }
//         });
//         if (basketballRes.ok) {
//           const basketballData = await basketballRes.json();
//           basketballData.response?.forEach(g => {
//             matches.push({
//               match_id: g.id,
//               sport: 'basketball',
//               teams: [g.teams.home, g.teams.visitors],
//               scores: { home: g.scores?.home?.total ?? 0, away: g.scores?.visitors?.total ?? 0 },
//               status: g.periods?.current ? `Q${g.periods.current}` : 'Live',
//               venue: [g.arena?.name, g.arena?.city].filter(Boolean).join(', '),
//               images: { team1_flag: g.teams.home.logo || '', team2_flag: g.teams.visitors.logo || '' }
//             });
//           });
//         }

//         // Hockey
//         const hockeyRes = await fetch('https://v1.hockey.api-sports.io/games?live=all', {
//           headers: { 'x-apisports-key': API_SPORTS_KEY }
//         });
//         if (hockeyRes.ok) {
//           const hockeyData = await hockeyRes.json();
//           hockeyData.response?.forEach(h => {
//             matches.push({
//               match_id: h.id,
//               sport: 'hockey',
//               teams: [h.teams.home, h.teams.visitors],
//               scores: { home: h.scores?.home ?? 0, away: h.scores?.visitors ?? 0 },
//               status: h.status?.long || 'Live',
//               venue: [h.arena?.name, h.arena?.city].filter(Boolean).join(', '),
//               images: { team1_flag: h.teams.home.logo || '', team2_flag: h.teams.visitors.logo || '' }
//             });
//           });
//         }
//       }

//       // Cricket
//       if (CRICKETDATA_KEY) {
//         const cricketRes = await fetch(`https://api.cricapi.com/v1/currentMatches?apikey=${CRICKETDATA_KEY}&offset=0`);
//         if (cricketRes.ok) {
//           const cricketJson = await cricketRes.json();
//           cricketJson.data?.forEach(m => {
//             if (m.matchStarted && !m.matchEnded) {
//               const currentInnings = m.score?.find(s => s.inning?.toLowerCase().includes('current')) || m.score?.[0] || {};
//               matches.push({
//                 match_id: m.id,
//                 sport: 'cricket',
//                 team1: m.teams?.[0] || 'Team 1',
//                 team2: m.teams?.[1] || 'Team 2',
//                 score: currentInnings.r !== undefined ? `${currentInnings.r}/${currentInnings.w || 0} (${currentInnings.o})` : '—',
//                 status: m.status || 'Live',
//                 venue: m.venue || '',
//                 images: { team1_flag: '', team2_flag: '' }
//               });
//             }
//           });
//         }
//       }

//       // Tennis
//       if (API_TENNIS_KEY) {
//         const tennisRes = await fetch(`https://api.api-tennis.com/tennis/?method=get_livescore&APIkey=${API_TENNIS_KEY}`);
//         if (tennisRes.ok) {
//           const tennisJson = await tennisRes.json();
//           tennisJson.result?.forEach(t => {
//             if (t.event_live === '1') {
//               // Prefer current set score, fallback to final result
//               const displayScore = t.scores?.current_set || t.event_final_result || t.event_current_set || '0 - 0';
//               matches.push({
//                 match_id: t.event_key,
//                 sport: 'tennis',
//                 player1: t.event_first_player || 'Player 1',
//                 player2: t.event_second_player || 'Player 2',
//                 country1: t.event_first_player_country || '',
//                 country2: t.event_second_player_country || '',
//                 score: displayScore,
//                 status: t.event_status || 'Live',
//                 venue: t.tournament_name || '',
//                 images: { team1_flag: t.event_first_player_logo || '', team2_flag: t.event_second_player_logo || '' }
//               });
//             }
//           });
//         }
//       }

//     } catch (err) {
//       console.error('Error fetching matches:', err);
//     }

//     setAllMatches(matches);
//     setLoading(false);
//   };

//   // Initial load + polling
//   useEffect(() => {
//     fetchLiveMatches();
//     const interval = setInterval(fetchLiveMatches, 30000); // 30 seconds
//     return () => clearInterval(interval);
//   }, []);

//   const handleCardClick = (sport, matchId) => {
//     navigate(`/${sport}-scorecard/${matchId}`);
//   };

//   const handleScheduleClick = (sport, matchId, e) => {
//     e.stopPropagation();
//     navigate(`/${sport}-scorecard/${matchId}`);
//   };

//   const getSportBadge = (sport) => {
//     const badges = {
//       basketball: { name: 'Basketball', color: 'bg-orange-500' },
//       football: { name: 'Football', color: 'bg-green-600' },
//       tennis: { name: 'Tennis', color: 'bg-purple-600' },
//       cricket: { name: 'Cricket', color: 'bg-blue-600' },
//       hockey: { name: 'Hockey', color: 'bg-red-600' }
//     };
//     return badges[sport] || { name: sport.toUpperCase(), color: 'bg-gray-600' };
//   };

//   const handlePrevious = () => {
//     setCurrentIndex(prev => (prev === 0 ? allMatches.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex(prev => (prev === allMatches.length - 1 ? 0 : prev + 1));
//   };

//   const getVisibleMatches = () => {
//     if (allMatches.length === 0) return [];
//     const visible = [];
//     for (let i = 0; i < cardsToShow; i++) {
//       const index = (currentIndex + i) % allMatches.length;
//       visible.push(allMatches[index]);
//     }
//     return visible;
//   };

//   const renderMatchCard = (match) => {
//     if (!match) return null;
//     const sport = match.sport;
//     const badge = getSportBadge(sport);

//     let team1Country = 'Unknown';
//     let team2Country = 'Unknown';
//     let score1 = '0', score2 = '0';
//     let statusText = 'Live';
//     let venueText = '';
//     let img1 = "https://via.placeholder.com/24";
//     let img2 = "https://via.placeholder.com/24";

//     if (sport === 'football') {
//       team1Country = match.teams?.home?.name || 'Home';
//       team2Country = match.teams?.away?.name || 'Away';
//       score1 = match.scores?.home ?? 0;
//       score2 = match.scores?.away ?? 0;
//       statusText = match.status || 'Live';
//       venueText = match.venue || '';
//       img1 = match.images?.team1_logo || img1;
//       img2 = match.images?.team2_logo || img2;
//     } else if (sport === 'basketball') {
//       team1Country = match.teams?.[0]?.name || 'Team 1';
//       team2Country = match.teams?.[1]?.name || 'Team 2';
//       score1 = match.scores?.home ?? 0;
//       score2 = match.scores?.away ?? 0;
//       statusText = match.status || 'Live';
//       venueText = match.venue || '';
//       img1 = match.images?.team1_flag || img1;
//       img2 = match.images?.team2_flag || img2;
//     } else if (sport === 'hockey') {
//       team1Country = match.teams?.[0]?.name || 'Team 1';
//       team2Country = match.teams?.[1]?.name || 'Team 2';
//       score1 = match.scores?.home ?? 0;
//       score2 = match.scores?.away ?? 0;
//       statusText = match.status || 'Live';
//       venueText = match.venue || '';
//       img1 = match.images?.team1_flag || img1;
//       img2 = match.images?.team2_flag || img2;
//     } else if (sport === 'cricket') {
//       team1Country = match.team1;
//       team2Country = match.team2;
//       score1 = match.score;
//       score2 = '';
//       statusText = match.status;
//       venueText = match.venue;
//     } else if (sport === 'tennis') {
//       team1Country = `${match.player1}${match.country1 ? ` (${match.country1})` : ''}`;
//       team2Country = `${match.player2}${match.country2 ? ` (${match.country2})` : ''}`;
//       const scores = match.score.split(' - ');
//       score1 = scores[0]?.trim() || '0';
//       score2 = scores[1]?.trim() || '0';
//       statusText = match.status;
//       venueText = match.venue;
//       img1 = match.images?.team1_flag || img1;
//       img2 = match.images?.team2_flag || img2;
//     }

//     return (
//       <div
//         key={match.match_id}
//         className="relative bg-white rounded-lg shadow-md p-4 w-full cursor-pointer hover:shadow-lg transition-shadow"
//         onClick={() => handleCardClick(sport, match.match_id)}
//       >
//         <div className={`absolute top-2 right-2 ${badge.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm`}>
//           {badge.name}
//         </div>

//         <p className="text-xs sm:text-sm text-gray-500 truncate pr-20">
//           <span className="text-blue-600 font-medium">LIVE</span>
//         </p>

//         <div className="flex justify-between items-center mt-2">
//           <div className="flex items-center space-x-2 flex-1 min-w-0">
//             <img src={img1} alt={team1Country} className="w-6 h-6 object-cover flex-shrink-0 rounded-full" />
//             <p className="text-xs sm:text-sm font-semibold truncate">{team1Country}</p>
//           </div>
//           <p className="text-sm sm:text-base font-bold ml-2">{score1}</p>
//         </div>

//         <div className="flex justify-between items-center mt-2">
//           <div className="flex items-center space-x-2 flex-1 min-w-0">
//             <img src={img2} alt={team2Country} className="w-6 h-6 object-cover flex-shrink-0 rounded-full" />
//             <p className="text-xs sm:text-sm font-semibold truncate">{team2Country}</p>
//           </div>
//           <p className="text-sm sm:text-base font-bold ml-2">{score2}</p>
//         </div>

//         <p className="text-xs sm:text-sm text-gray-600 mt-2 truncate">{statusText}</p>
//         <p className="text-xs sm:text-sm text-gray-600 truncate">{venueText}</p>

//         <div className="flex justify-end mt-2">
//           <button
//             onClick={(e) => handleScheduleClick(sport, match.match_id, e)}
//             className="text-blue-600 text-xs sm:text-sm hover:underline"
//           >
//             Schedule
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <main className="w-full bg-gray-50 min-h-screen">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
//         {loading && allMatches.length === 0 ? (
//           <p className="text-center text-gray-500 py-10 text-lg">Loading live matches...</p>
//         ) : allMatches.length > 0 ? (
//           <div className="relative">
//             <button
//               onClick={handlePrevious}
//               className="absolute left-5 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-green-600 hover:bg-green-700 text-white rounded-full p-3 shadow-lg transition-all duration-200 flex items-center justify-center"
//               style={{ width: '35px', height: '35px' }}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
//               </svg>
//             </button>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-8">
//               {getVisibleMatches().map((match, idx) => (
//                 <div key={`${match.match_id}-${idx}`}>
//                   {renderMatchCard(match)}
//                 </div>
//               ))}
//             </div>

//             <button
//               onClick={handleNext}
//               className="absolute right-5 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-green-600 hover:bg-green-700 text-white rounded-full p-3 shadow-lg transition-all duration-200 flex items-center justify-center"
//               style={{ width: '35px', height: '35px' }}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//               </svg>
//             </button>
//           </div>
//         ) : (
//           <p className="text-center text-gray-500 py-10 text-lg">No live matches currently</p>
//         )}
//       </div>

//       <LatestSportsNews />
//       <Blogs />
//     </main>
//   );
// };

// export default Home;
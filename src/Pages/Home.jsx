



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

//   // Load all live matches
//   useEffect(() => {
//     const matches = [];

//     (basketballData.live_matches || []).forEach(m => 
//       matches.push({ ...m, sport: 'basketball' })
//     );

//     (footballData.data?.LiveMatches || []).forEach(m => 
//       matches.push({ ...m, sport: 'football' })
//     );

//     (tennisData.data?.LiveMatches || []).forEach(m => 
//       matches.push({ ...m, sport: 'tennis' })
//     );

//     (cricketData.live_matches || []).forEach(m => 
//       matches.push({ ...m, sport: 'cricket' })
//     );

//     (hockeyData.data?.matches || []).forEach(m => 
//       matches.push({ ...m, sport: 'hockey' })
//     );

//     setAllMatches(matches);
//   }, []);

//   // Responsive cards count
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

//   // Card click → Scorecard page
//   const handleCardClick = (sport, matchId) => {
//     const routes = {
//       football: `/football-scorecard/${matchId}`,
//       basketball: `/basketball-scorecard/${matchId}`,
//       hockey: `/hockey-scorecard/${matchId}`,
//       cricket: `/cricket-scorecard/${matchId}`,
//       tennis: `/tennis-scorecard/${matchId}`,
//     };

//     const route = routes[sport];
//     if (route) {
//       navigate(route);
//     }
//   };

//   // Schedule button click
//   const handleScheduleClick = (sport, matchId, e) => {
//     e.stopPropagation();
//     const routes = {
//       football: `/football-scorecard/${matchId}`,
//       basketball: `/basketball-scorecard/${matchId}`,
//       hockey: `/hockey-scorecard/${matchId}`,
//       cricket: `/cricket-scorecard/${matchId}`,
//       tennis: `/tennis-scorecard/${matchId}`,
//     };

//     const route = routes[sport];
//     if (route) {
//       navigate(route);
//     }
//   };

//   // Sport badge
//   const getSportBadge = (sport) => {
//     const badges = {
//       basketball: { name: 'Basketball', color: 'bg-orange-500' },
//       football: { name: 'Football', color: 'bg-green-600' },
//       tennis: { name: 'Tennis', color: 'bg-purple-600' },
//       cricket: { name: 'Cricket', color: 'bg-blue-600' },
//       hockey: { name: 'Hockey', color: 'bg-red-600' },
//     };
//     return badges[sport] || { name: sport.toUpperCase(), color: 'bg-gray-600' };
//   };

//   // Carousel navigation
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

//   // Render match card
//   const renderMatchCard = (match) => {
//     if (!match) return null;
//     const { sport } = match;
//     const badge = getSportBadge(sport);

//     let team1Name = 'Team 1';
//     let team2Name = 'Team 2';
//     let score1 = '—';
//     let score2 = '—';
//     let statusText = 'Live';
//     let venueText = '';
//     let img1 = "https://via.placeholder.com/24";
//     let img2 = "https://via.placeholder.com/24";

//     if (sport === 'football') {
//       team1Name = match.teams?.home?.name || 'Home';
//       team2Name = match.teams?.away?.name || 'Away';
//       score1 = match.scores?.current_score?.home_goals ?? match.scores?.home ?? 0;
//       score2 = match.scores?.current_score?.away_goals ?? match.scores?.away ?? 0;
//       statusText = match.match_summary?.current_status || match.status || 'Live';
//       venueText = `${match.venue?.name || ''}, ${match.venue?.city || ''}`.trim() || 'Venue TBD';
//       img1 = match.images?.team1_logo || img1;
//       img2 = match.images?.team2_logo || img2;

//     } else if (sport === 'basketball') {
//       team1Name = match.teams?.[0]?.name || 'Team 1';
//       team2Name = match.teams?.[1]?.name || 'Team 2';
//       score1 = match.teams?.[0]?.total_points ?? 0;
//       score2 = match.teams?.[1]?.total_points ?? 0;
//       statusText = `Q${match.match_info?.quarter || '?'} • ${match.match_info?.time_remaining || ''} left`;
//       venueText = `${match.arena?.name || ''}, ${match.arena?.city || ''}`.trim() || 'Venue TBD';
//       img1 = match.images?.team1_flag || img1;
//       img2 = match.images?.team2_flag || img2;

//     } else if (sport === 'hockey') {
//       team1Name = match.squads?.teams?.[0]?.name || 'Team 1';
//       team2Name = match.squads?.teams?.[1]?.name || 'Team 2';
//       score1 = match.scorecard?.team_stats?.[0]?.total_goals ?? 0;
//       score2 = match.scorecard?.team_stats?.[1]?.total_goals ?? 0;
//       statusText = `Q${match.info?.current_quarter || '?'} • Ongoing`;
//       venueText = `${match.info?.venue?.name || ''}, ${match.info?.venue?.city || ''}`.trim() || 'Venue TBD';
//       img1 = match.images?.team1_flag || img1;
//       img2 = match.images?.team2_flag || img2;

//     } else if (sport === 'cricket') {
//       const squadKeys = Object.keys(match.squads || {});
//       team1Name = squadKeys[0] || 'Team 1';
//       team2Name = squadKeys[1] || 'Team 2';
//       const currentInnings = match.scorecard?.['1st_innings_current'] || 
//                             match.scorecard?.['2nd_innings_current'] || 
//                             match.scorecard?.['1st_innings'];
//       score1 = currentInnings?.score || '—';
//       score2 = '';
//       statusText = match.info?.current_status || 'Live';
//       venueText = `${match.info?.venue?.name || ''}, ${match.info?.venue?.city || ''}`.trim() || 'Venue TBD';
//       img1 = match.info?.team1_flag || img1;
//       img2 = match.info?.team2_flag || img2;

//     } else if (sport === 'tennis') {
//       // NEW FIXED TENNIS BLOCK - Tested with your exact data
//       team1Name = 'Unknown';
//       team2Name = 'Unknown';

//       if (match.players && Array.isArray(match.players) && match.players.length === 2) {
//         // Singles matches
//         if (match.players[0].country && match.players[1].country) {
//           team1Name = match.players[0].country;
//           team2Name = match.players[1].country;
//         }
//         // Doubles matches
//         else if (match.players[0].team && match.players[1].team) {
//           const team1 = match.players[0].team;
//           const team2 = match.players[1].team;

//           const countries1 = team1.map(p => p.country).filter(Boolean);
//           const countries2 = team2.map(p => p.country).filter(Boolean);

//           team1Name = (countries1.length === 2 && countries1[0] === countries1[1])
//             ? countries1[0]
//             : countries1.join(' / ') || 'Team 1';

//           team2Name = (countries2.length === 2 && countries2[0] === countries2[1])
//             ? countries2[0]
//             : countries2.join(' / ') || 'Team 2';
//         }
//       }

//       const currentSet = match.scorecard?.current_set;
//       score1 = currentSet?.player1_games ?? currentSet?.team1_games ?? 0;
//       score2 = currentSet?.player2_games ?? currentSet?.team2_games ?? 0;

//       statusText = match.scorecard?.current_status || 'Live';
//       venueText = `${match.venue?.name || ''}, ${match.venue?.city || ''}`.trim() || 'Venue TBD';

//       img1 = match.images?.team1_flag || "https://via.placeholder.com/24";
//       img2 = match.images?.team2_flag || "https://via.placeholder.com/24";
//     }

//     return (
//       <div
//         key={match.match_id}
//         className="relative bg-white rounded-lg shadow-md p-4 w-full cursor-pointer hover:shadow-lg transition-shadow"
//         onClick={() => handleCardClick(sport, match.match_id)}
//       >
//         {/* Badge */}
//         <div className={`absolute top-2 right-2 ${badge.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm`}>
//           {badge.name}
//         </div>

//         {/* Live */}
//         <p className="text-xs sm:text-sm text-gray-500 truncate pr-20">
//           <span className="text-blue-600 font-medium">LIVE</span>
//         </p>

//         {/* Team 1 */}
//         <div className="flex justify-between items-center mt-2">
//           <div className="flex items-center space-x-2 flex-1 min-w-0">
//             <img src={img1} alt={team1Name} className="w-6 h-6 object-cover flex-shrink-0 rounded-full" />
//             <p className="text-xs sm:text-sm font-semibold truncate">{team1Name}</p>
//           </div>
//           <p className="text-sm sm:text-base font-bold ml-2">{score1}</p>
//         </div>

//         {/* Team 2 */}
//         <div className="flex justify-between items-center mt-2">
//           <div className="flex items-center space-x-2 flex-1 min-w-0">
//             <img src={img2} alt={team2Name} className="w-6 h-6 object-cover flex-shrink-0 rounded-full" />
//             <p className="text-xs sm:text-sm font-semibold truncate">{team2Name}</p>
//           </div>
//           <p className="text-sm sm:text-base font-bold ml-2">{score2}</p>
//         </div>

//         {/* Status & Venue */}
//         <p className="text-xs sm:text-sm text-gray-600 mt-2 truncate">{statusText}</p>
//         <p className="text-xs sm:text-sm text-gray-600 truncate">{venueText}</p>

//         {/* Schedule Button */}
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
//         {allMatches.length === 0 ? (
//           <p className="text-center text-gray-500 py-10 text-lg">Loading live matches...</p>
//         ) : allMatches.length > 0 ? (
//           <div className="relative">
//             {/* Previous Button */}
//             <button
//               onClick={handlePrevious}
//               className="absolute left-5 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-green-600 hover:bg-green-700 text-white rounded-full p-3 shadow-lg transition-all duration-200 flex items-center justify-center"
//               style={{ width: '35px', height: '35px' }}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
//               </svg>
//             </button>

//             {/* Cards Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-8">
//               {getVisibleMatches().map((match, idx) => (
//                 <div key={`${match.match_id}-${idx}`}>
//                   {renderMatchCard(match)}
//                 </div>
//               ))}
//             </div>

//             {/* Next Button */}
//             <button
//               onClick={handleNext}
//               className="absolute right-5 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-green-600 hover:bg-green-700 text-white rounded-full p-3 shadow-lg transition-all duration-200 flex items-center justify-center"
//               style={{ width: '35px', height: '35px' }}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
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
import SEO from '../components/SEO.jsx';

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

  // Card click → Scorecard page
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

  // Schedule button click
  const handleScheduleClick = (sport, matchId, e) => {
    e.stopPropagation();
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
      team1Name = 'Unknown';
      team2Name = 'Unknown';

      if (match.players && Array.isArray(match.players) && match.players.length === 2) {
        if (match.players[0].country && match.players[1].country) {
          team1Name = match.players[0].country;
          team2Name = match.players[1].country;
        }
        else if (match.players[0].team && match.players[1].team) {
          const team1 = match.players[0].team;
          const team2 = match.players[1].team;

          const countries1 = team1.map(p => p.country).filter(Boolean);
          const countries2 = team2.map(p => p.country).filter(Boolean);

          team1Name = (countries1.length === 2 && countries1[0] === countries1[1])
            ? countries1[0]
            : countries1.join(' / ') || 'Team 1';

          team2Name = (countries2.length === 2 && countries2[0] === countries2[1])
            ? countries2[0]
            : countries2.join(' / ') || 'Team 2';
        }
      }

      const currentSet = match.scorecard?.current_set;
      score1 = currentSet?.player1_games ?? currentSet?.team1_games ?? 0;
      score2 = currentSet?.player2_games ?? currentSet?.team2_games ?? 0;

      statusText = match.scorecard?.current_status || 'Live';
      venueText = `${match.venue?.name || ''}, ${match.venue?.city || ''}`.trim() || 'Venue TBD';

      img1 = match.images?.team1_flag || "https://via.placeholder.com/24";
      img2 = match.images?.team2_flag || "https://via.placeholder.com/24";
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

        {/* Schedule Button */}
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
      {/* SEO Component */}
      <SEO 
        title="SportlyRadar - Live Sports Scores, News & Updates"
        description="Get real-time live scores, match updates, and breaking sports news for football, basketball, cricket, tennis, hockey and more. Your ultimate sports tracking destination."
        keywords="live sports scores, football scores, basketball scores, cricket scores, tennis scores, hockey scores, sports news, match updates, live matches"
        canonical={window.location.href}
        image="https://sportlyradar.com/og-image.jpg"
        url={window.location.href}
      />
      
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
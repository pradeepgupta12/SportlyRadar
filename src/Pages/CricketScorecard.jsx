// // CricketScorecard.jsx
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ArrowLeft, ChevronRight } from 'lucide-react';
// import cricketData from '../data/CricketData.json';

// const CricketScorecard = () => {
//   const { matchId } = useParams();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('info');
//   const [matchData, setMatchData] = useState(null);

//   useEffect(() => {
//     const match = cricketData.live_matches.find(m => m.match_id === matchId);
//     setMatchData(match);
//   }, [matchId]);

//   if (!matchData) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <p className="text-gray-500 text-lg">Loading match data...</p>
//       </div>
//     );
//   }

//   const getTeamNames = () => {
//     const squadKeys = Object.keys(matchData.squads || {});
//     return { team1: squadKeys[0] || 'Team 1', team2: squadKeys[1] || 'Team 2' };
//   };

//   const teams = getTeamNames();

//   const tabs = [
//     { id: 'info', label: 'Info' },
//     { id: 'live', label: 'Live' },
//     { id: 'scorecard', label: 'Scorecard' },
//     { id: 'squads', label: 'Squads' },
//     { id: 'overs', label: 'Overs' },
//     { id: 'highlights', label: 'Highlights' }
//   ];

//   const InfoRow = ({ label, value, hasArrow }) => (
//     <div className="flex justify-between items-center p-3 sm:p-4 hover:bg-gray-50">
//       <span className="text-sm sm:text-base font-medium text-gray-700">{label}</span>
//       <div className="flex items-center gap-2">
//         <span className="text-sm sm:text-base text-gray-600 text-right">{value}</span>
//         {hasArrow && <ChevronRight className="w-4 h-4 text-gray-400" />}
//       </div>
//     </div>
//   );

//   const renderInfo = () => (
//     <div className=" p-4 sm:p-6">
//       <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">MATCH INFO</h2>
//       <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
//         <InfoRow label="Match" value={`${teams.team1} vs ${teams.team2} • ${matchData.info.match_number} • ${matchData.info.series}`} />
//         <InfoRow label="Series" value={matchData.info.series} hasArrow />
//         <InfoRow label="Date" value={matchData.info.date} />
//         <InfoRow label="Toss" value={matchData.info.toss} />
//         <InfoRow label="Venue" value={`${matchData.info.venue.name}, ${matchData.info.venue.city}`} hasArrow />
        
//         <div className="p-4">
//           <h3 className="font-semibold text-gray-800 mb-2">{teams.team1} squad</h3>
//           <div className="mb-3">
//             <p className="text-sm font-medium text-gray-700 mb-1">Players</p>
//             <p className="text-sm text-gray-600">{matchData.squads[teams.team1].playing_xi.join(', ')}</p>
//           </div>
//           {matchData.squads[teams.team1].bench?.length > 0 && (
//             <div className="mb-3">
//               <p className="text-sm font-medium text-gray-700 mb-1">Bench</p>
//               <p className="text-sm text-gray-600">{matchData.squads[teams.team1].bench.join(', ')}</p>
//             </div>
//           )}
//           <div>
//             <p className="text-sm font-medium text-gray-700 mb-1">Support Staff</p>
//             <p className="text-sm text-gray-600">{matchData.squads[teams.team1].support_staff.join(', ')}</p>
//           </div>
//         </div>

//         <div className="p-4">
//           <h3 className="font-semibold text-gray-800 mb-2">{teams.team2} squad</h3>
//           <div className="mb-3">
//             <p className="text-sm font-medium text-gray-700 mb-1">Players</p>
//             <p className="text-sm text-gray-600">{matchData.squads[teams.team2].playing_xi.join(', ')}</p>
//           </div>
//           {matchData.squads[teams.team2].bench?.length > 0 && (
//             <div className="mb-3">
//               <p className="text-sm font-medium text-gray-700 mb-1">Bench</p>
//               <p className="text-sm text-gray-600">{matchData.squads[teams.team2].bench.join(', ')}</p>
//             </div>
//           )}
//           <div>
//             <p className="text-sm font-medium text-gray-700 mb-1">Support Staff</p>
//             <p className="text-sm text-gray-600">{matchData.squads[teams.team2].support_staff.join(', ')}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderLive = () => {
//     const commentary = matchData.full_commentary_summary;
//     return (
//       <div className=" p-4 sm:p-6">
//         <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">LIVE COMMENTARY</h2>
        
//         <div className="space-y-4">
//           <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
//             <p className="text-sm font-semibold text-blue-800">{matchData.info.current_status}</p>
//             <p className="text-xs text-blue-600 mt-1">Day {matchData.info.day} • {matchData.info.session}</p>
//           </div>

//           {commentary && (
//             <>
//               {commentary['1st_innings'] && (
//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <h3 className="font-semibold text-gray-800 mb-2">1st Innings</h3>
//                   <p className="text-sm text-gray-700">{commentary['1st_innings']}</p>
//                 </div>
//               )}
//               {commentary['2nd_innings'] && (
//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <h3 className="font-semibold text-gray-800 mb-2">2nd Innings</h3>
//                   <p className="text-sm text-gray-700">{commentary['2nd_innings']}</p>
//                 </div>
//               )}
//             </>
//           )}

//           <div className="bg-green-50 p-4 rounded-lg">
//             <h3 className="font-semibold text-green-800 mb-2">Match Summary</h3>
//             <p className="text-sm text-gray-700">{matchData.overs_summary}</p>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderScorecard = () => {
//     const innings1 = matchData.scorecard['1st_innings'];
//     const innings2 = matchData.scorecard['2nd_innings_current'] || matchData.scorecard['1st_innings_current'];

//     return (
//       <div className="bg-white ">
//         {innings1 && (
//           <div className="mb-4">
//             <div className="bg-teal-600 text-white p-3 flex justify-between items-center">
//               <span className="font-semibold">{innings1.batting_team} 1st Innings</span>
//               <span className="font-bold">{innings1.score} ({innings1.overs} Ov)</span>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full text-sm">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="text-left p-2 sm:p-3 font-medium">Batter</th>
//                     <th className="p-2 text-center font-medium">R</th>
//                     <th className="p-2 text-center font-medium">B</th>
//                     <th className="p-2 text-center font-medium">4s</th>
//                     <th className="p-2 text-center font-medium">6s</th>
//                     <th className="p-2 text-center font-medium">SR</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                   {innings1.top_batsmen?.map((batsman, idx) => {
//                     const parts = batsman.split(' ');
//                     const runs = parts[parts.length - 1];
//                     const name = parts.slice(0, -1).join(' ');
//                     return (
//                       <tr key={idx} className="hover:bg-gray-50">
//                         <td className="p-2 sm:p-3">
//                           <div className="font-medium text-blue-600">{name}</div>
//                         </td>
//                         <td className="p-2 text-center font-semibold">{runs}</td>
//                         <td className="p-2 text-center">-</td>
//                         <td className="p-2 text-center">-</td>
//                         <td className="p-2 text-center">-</td>
//                         <td className="p-2 text-center">-</td>
//                       </tr>
//                     );
//                   })}
//                   <tr className="bg-gray-50 font-medium">
//                     <td className="p-2 sm:p-3">Extras</td>
//                     <td className="p-2 text-center" colSpan="5">
//                       {innings1.extras?.total || 0} (b {innings1.extras?.byes || 0}, lb {innings1.extras?.leg_byes || 0}, w {innings1.extras?.wides || 0}, nb {innings1.extras?.no_balls || 0})
//                     </td>
//                   </tr>
//                   <tr className="bg-gray-100 font-bold">
//                     <td className="p-2 sm:p-3">Total</td>
//                     <td className="p-2 text-center" colSpan="5">{innings1.score} ({innings1.overs} Overs, RR: {innings1.run_rate})</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>

//             {innings1.top_bowlers && (
//               <div className="overflow-x-auto mt-4">
//                 <table className="w-full text-sm">
//                   <thead className="bg-gray-100">
//                     <tr>
//                       <th className="text-left p-2 sm:p-3 font-medium">Bowler</th>
//                       <th className="p-2 text-center font-medium">W</th>
//                       <th className="p-2 text-center font-medium">R</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200">
//                     {innings1.top_bowlers.map((bowler, idx) => {
//                       const parts = bowler.split(' ');
//                       const figures = parts[parts.length - 1].split('/');
//                       const name = parts.slice(0, -1).join(' ');
//                       return (
//                         <tr key={idx} className="hover:bg-gray-50">
//                           <td className="p-2 sm:p-3 font-medium text-blue-600">{name}</td>
//                           <td className="p-2 text-center font-semibold">{figures[0]}</td>
//                           <td className="p-2 text-center">{figures[1]}</td>
//                         </tr>
//                       );
//                     })}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         )}

//         {innings2 && (
//           <div>
//             <div className="bg-teal-600 text-white p-3 flex justify-between items-center">
//               <span className="font-semibold">{innings2.batting_team} 2nd Innings</span>
//               <span className="font-bold">{innings2.score} ({innings2.overs} Ov)</span>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full text-sm">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="text-left p-2 sm:p-3 font-medium">Batter</th>
//                     <th className="p-2 text-center font-medium">R</th>
//                     <th className="p-2 text-center font-medium">B</th>
//                     <th className="p-2 text-center font-medium">4s</th>
//                     <th className="p-2 text-center font-medium">6s</th>
//                     <th className="p-2 text-center font-medium">SR</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                   {innings2.top_batsmen?.map((batsman, idx) => {
//                     const parts = batsman.split(' ');
//                     const runs = parts[parts.length - 1].replace('*', '');
//                     const name = parts.slice(0, -1).join(' ');
//                     return (
//                       <tr key={idx} className="hover:bg-gray-50">
//                         <td className="p-2 sm:p-3">
//                           <div className="font-medium text-blue-600">{name}{batsman.includes('*') ? ' *' : ''}</div>
//                         </td>
//                         <td className="p-2 text-center font-semibold">{runs}</td>
//                         <td className="p-2 text-center">-</td>
//                         <td className="p-2 text-center">-</td>
//                         <td className="p-2 text-center">-</td>
//                         <td className="p-2 text-center">-</td>
//                       </tr>
//                     );
//                   })}
//                   <tr className="bg-gray-50 font-medium">
//                     <td className="p-2 sm:p-3">Extras</td>
//                     <td className="p-2 text-center" colSpan="5">
//                       {innings2.extras?.total || 0} (b {innings2.extras?.byes || 0}, lb {innings2.extras?.leg_byes || 0}, w {innings2.extras?.wides || 0}, nb {innings2.extras?.no_balls || 0})
//                     </td>
//                   </tr>
//                   <tr className="bg-gray-100 font-bold">
//                     <td className="p-2 sm:p-3">Total</td>
//                     <td className="p-2 text-center" colSpan="5">{innings2.score} ({innings2.overs} Overs, RR: {innings2.run_rate})</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>

//             {innings2.top_bowlers && (
//               <div className="overflow-x-auto mt-4">
//                 <table className="w-full text-sm">
//                   <thead className="bg-gray-100">
//                     <tr>
//                       <th className="text-left p-2 sm:p-3 font-medium">Bowler</th>
//                       <th className="p-2 text-center font-medium">W</th>
//                       <th className="p-2 text-center font-medium">R</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200">
//                     {innings2.top_bowlers.map((bowler, idx) => {
//                       const parts = bowler.split(' ');
//                       const figures = parts[parts.length - 1].split('/');
//                       const name = parts.slice(0, -1).join(' ');
//                       return (
//                         <tr key={idx} className="hover:bg-gray-50">
//                           <td className="p-2 sm:p-3 font-medium text-blue-600">{name}</td>
//                           <td className="p-2 text-center font-semibold">{figures[0]}</td>
//                           <td className="p-2 text-center">{figures[1]}</td>
//                         </tr>
//                       );
//                     })}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     );
//   };

//   const renderSquads = () => (
//     <div className="bg-white">
//       <div className="flex border-b">
//         <div className="flex-1 bg-gray-50 p-3 text-center">
//           <img src={matchData.info.team1_flag} alt={teams.team1} className="w-8 h-8 mx-auto mb-1 object-contain" />
//           <span className="font-semibold text-sm">{teams.team1}</span>
//         </div>
//         <div className="flex-1 bg-gray-50 p-3 text-center">
//           <img src={matchData.info.team2_flag} alt={teams.team2} className="w-8 h-8 mx-auto mb-1 object-contain" />
//           <span className="font-semibold text-sm">{teams.team2}</span>
//         </div>
//       </div>

//       <h3 className="text-center font-semibold py-4 bg-gray-100">Playing XI</h3>

//       <div className="divide-y">
//         {matchData.squads[teams.team1].playing_xi.map((player, idx) => (
//           <div key={idx} className="flex items-center hover:bg-gray-50">
//             <div className="flex-1 p-3 sm:p-4 border-r">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
//                   <span className="text-gray-600 text-xs">👤</span>
//                 </div>
//                 <div className="min-w-0">
//                   <p className="font-medium text-sm truncate">{player}</p>
//                   <p className="text-xs text-gray-500">Batter</p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex-1 p-3 sm:p-4">
//               {matchData.squads[teams.team2].playing_xi[idx] && (
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
//                     <span className="text-gray-600 text-xs">👤</span>
//                   </div>
//                   <div className="min-w-0">
//                     <p className="font-medium text-sm truncate">{matchData.squads[teams.team2].playing_xi[idx]}</p>
//                     <p className="text-xs text-gray-500">Batter</p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const renderOvers = () => (
//     <div className=" p-4">
//       <h2 className="text-lg font-bold mb-4">OVERS DETAIL</h2>
//       <p className="text-gray-500 text-center py-8">Over-by-over details will be available soon</p>
//     </div>
//   );

//   const renderHighlights = () => (
//     <div className=" p-4">
//       <h2 className="text-lg font-bold mb-4">MATCH HIGHLIGHTS</h2>
      
//       {matchData.highlights && matchData.highlights.length > 0 ? (
//         <div className="space-y-4">
//           {matchData.highlights.map((highlight, idx) => (
//             <div key={idx} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
//               <div className="flex items-start gap-3">
//                 <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
//                   {idx + 1}
//                 </div>
//                 <div className="flex-1">
//                   <p className="font-semibold text-gray-800">{highlight}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-500 text-center py-8">No highlights available yet</p>
//       )}
//     </div>
//   );

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'info': return renderInfo();
//       case 'live': return renderLive();
//       case 'scorecard': return renderScorecard();
//       case 'squads': return renderSquads();
//       case 'overs': return renderOvers();
//       case 'highlights': return renderHighlights();
//       default: return renderInfo();
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="bg-white shadow-sm sticky top-0 z-10">
//         <div className="max-w-7xl mx-auto px-4 py-3">
//           <div className="flex items-center gap-3 mb-3">
//             <button 
//               onClick={() => navigate('/')}
//               className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//             >
//               <ArrowLeft className="w-5 h-5" />
//             </button>
//             <div className="flex-1 min-w-0">
//               <h1 className="text-base sm:text-lg font-bold truncate">
//                 {teams.team1} vs {teams.team2}, {matchData.info.match_number} - Live Cricket Score, Commentary
//               </h1>
//               <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-gray-600 mt-1">
//                 <span className="truncate">Series: {matchData.info.series}</span>
//                 <span>•</span>
//                 <span className="truncate">Venue: {matchData.info.venue.name}, {matchData.info.venue.city}</span>
//                 <span>•</span>
//                 <span>Date: {matchData.info.date}</span>
//               </div>
//             </div>
//           </div>

//           <div className="flex gap-1 overflow-x-auto scrollbar-hide">
//             {tabs.map(tab => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
//                   activeTab === tab.id
//                     ? 'text-teal-600 border-b-2 border-teal-600'
//                     : 'text-gray-600 hover:text-gray-900'
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto">
//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default CricketScorecard;

// src/Pages/CricketScorecard.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import cricketData from '../data/CricketData.json';
import TopStories from '../data/TopStories.js';
import LatestNews from '../data/LatestNews.js';

const CricketScorecard = () => {
  const { matchId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('info');
  const [matchData, setMatchData] = useState(null);

  useEffect(() => {
    const match = cricketData.live_matches.find(m => m.match_id === matchId);
    setMatchData(match);
  }, [matchId]);

  if (!matchData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading match data...</p>
      </div>
    );
  }

  const getTeamNames = () => {
    const squadKeys = Object.keys(matchData.squads || {});
    return { team1: squadKeys[0] || 'Team 1', team2: squadKeys[1] || 'Team 2' };
  };

  const teams = getTeamNames();

  const tabs = [
    { id: 'info', label: 'Info' },
    { id: 'live', label: 'Live' },
    { id: 'scorecard', label: 'Scorecard' },
    { id: 'squads', label: 'Squads' },
    { id: 'overs', label: 'Overs' },
    { id: 'highlights', label: 'Highlights' }
  ];

  const InfoRow = ({ label, value, hasArrow }) => (
    <div className="flex justify-between items-center p-3 sm:p-4 hover:bg-gray-50">
      <span className="text-sm sm:text-base font-medium text-gray-700">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm sm:text-base text-gray-600 text-right">{value}</span>
        {hasArrow && <ChevronRight className="w-4 h-4 text-gray-400" />}
      </div>
    </div>
  );

  const handleStoryClick = (id) => {
    navigate(`/details/cricket/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  // ==================== ALL RENDER FUNCTIONS (FULLY INCLUDED) ====================

  const renderInfo = () => (
    <div className="p-4 sm:p-0">
      <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">MATCH INFO</h2>
      <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
        <InfoRow label="Match" value={`${teams.team1} vs ${teams.team2} • ${matchData.info.match_number} • ${matchData.info.series}`} />
        <InfoRow label="Series" value={matchData.info.series} hasArrow />
        <InfoRow label="Date" value={matchData.info.date} />
        <InfoRow label="Toss" value={matchData.info.toss} />
        <InfoRow label="Venue" value={`${matchData.info.venue.name}, ${matchData.info.venue.city}`} hasArrow />

        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-2">{teams.team1} squad</h3>
          <div className="mb-3">
            <p className="text-sm font-medium text-gray-700 mb-1">Players</p>
            <p className="text-sm text-gray-600">{matchData.squads[teams.team1].playing_xi.join(', ')}</p>
          </div>
          {matchData.squads[teams.team1].bench?.length > 0 && (
            <div className="mb-3">
              <p className="text-sm font-medium text-gray-700 mb-1">Bench</p>
              <p className="text-sm text-gray-600">{matchData.squads[teams.team1].bench.join(', ')}</p>
            </div>
          )}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">Support Staff</p>
            <p className="text-sm text-gray-600">{matchData.squads[teams.team1].support_staff.join(', ')}</p>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-2">{teams.team2} squad</h3>
          <div className="mb-3">
            <p className="text-sm font-medium text-gray-700 mb-1">Players</p>
            <p className="text-sm text-gray-600">{matchData.squads[teams.team2].playing_xi.join(', ')}</p>
          </div>
          {matchData.squads[teams.team2].bench?.length > 0 && (
            <div className="mb-3">
              <p className="text-sm font-medium text-gray-700 mb-1">Bench</p>
              <p className="text-sm text-gray-600">{matchData.squads[teams.team2].bench.join(', ')}</p>
            </div>
          )}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">Support Staff</p>
            <p className="text-sm text-gray-600">{matchData.squads[teams.team2].support_staff.join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLive = () => {
    const commentary = matchData.full_commentary_summary;
    return (
      <div className="p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">LIVE COMMENTARY</h2>
        
        <div className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-sm font-semibold text-blue-800">{matchData.info.current_status}</p>
            <p className="text-xs text-blue-600 mt-1">Day {matchData.info.day} • {matchData.info.session}</p>
          </div>

          {commentary && (
            <>
              {commentary['1st_innings'] && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">1st Innings</h3>
                  <p className="text-sm text-gray-700">{commentary['1st_innings']}</p>
                </div>
              )}
              {commentary['2nd_innings'] && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">2nd Innings</h3>
                  <p className="text-sm text-gray-700">{commentary['2nd_innings']}</p>
                </div>
              )}
            </>
          )}

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Match Summary</h3>
            <p className="text-sm text-gray-700">{matchData.overs_summary}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderScorecard = () => {
    const innings1 = matchData.scorecard['1st_innings'];
    const innings2 = matchData.scorecard['2nd_innings_current'] || matchData.scorecard['1st_innings_current'];

    return (
      <div className="bg-white">
        {innings1 && (
          <div className="mb-8">
            <div className="bg-teal-600 text-white p-3 flex justify-between items-center">
              <span className="font-semibold">{innings1.batting_team} 1st Innings</span>
              <span className="font-bold">{innings1.score} ({innings1.overs} Ov)</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-2 sm:p-3 font-medium">Batter</th>
                    <th className="p-2 text-center font-medium">R</th>
                    <th className="p-2 text-center font-medium">B</th>
                    <th className="p-2 text-center font-medium">4s</th>
                    <th className="p-2 text-center font-medium">6s</th>
                    <th className="p-2 text-center font-medium">SR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {innings1.top_batsmen?.map((batsman, idx) => {
                    const parts = batsman.split(' ');
                    const runs = parts[parts.length - 1];
                    const name = parts.slice(0, -1).join(' ');
                    return (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="p-2 sm:p-3">
                          <div className="font-medium text-blue-600">{name}</div>
                        </td>
                        <td className="p-2 text-center font-semibold">{runs}</td>
                        <td className="p-2 text-center">-</td>
                        <td className="p-2 text-center">-</td>
                        <td className="p-2 text-center">-</td>
                        <td className="p-2 text-center">-</td>
                      </tr>
                    );
                  })}
                  <tr className="bg-gray-50 font-medium">
                    <td className="p-2 sm:p-3">Extras</td>
                    <td className="p-2 text-center" colSpan="5">
                      {innings1.extras?.total || 0} (b {innings1.extras?.byes || 0}, lb {innings1.extras?.leg_byes || 0}, w {innings1.extras?.wides || 0}, nb {innings1.extras?.no_balls || 0})
                    </td>
                  </tr>
                  <tr className="bg-gray-100 font-bold">
                    <td className="p-2 sm:p-3">Total</td>
                    <td className="p-2 text-center" colSpan="5">{innings1.score} ({innings1.overs} Overs, RR: {innings1.run_rate})</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {innings2 && (
          <div>
            <div className="bg-teal-600 text-white p-3 flex justify-between items-center">
              <span className="font-semibold">{innings2.batting_team} 2nd Innings</span>
              <span className="font-bold">{innings2.score} ({innings2.overs} Ov)</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-2 sm:p-3 font-medium">Batter</th>
                    <th className="p-2 text-center font-medium">R</th>
                    <th className="p-2 text-center font-medium">B</th>
                    <th className="p-2 text-center font-medium">4s</th>
                    <th className="p-2 text-center font-medium">6s</th>
                    <th className="p-2 text-center font-medium">SR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {innings2.top_batsmen?.map((batsman, idx) => {
                    const parts = batsman.split(' ');
                    const runs = parts[parts.length - 1].replace('*', '');
                    const name = parts.slice(0, -1).join(' ');
                    return (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="p-2 sm:p-3">
                          <div className="font-medium text-blue-600">{name}{batsman.includes('*') ? ' *' : ''}</div>
                        </td>
                        <td className="p-2 text-center font-semibold">{runs}</td>
                        <td className="p-2 text-center">-</td>
                        <td className="p-2 text-center">-</td>
                        <td className="p-2 text-center">-</td>
                        <td className="p-2 text-center">-</td>
                      </tr>
                    );
                  })}
                  <tr className="bg-gray-50 font-medium">
                    <td className="p-2 sm:p-3">Extras</td>
                    <td className="p-2 text-center" colSpan="5">
                      {innings2.extras?.total || 0} (b {innings2.extras?.byes || 0}, lb {innings2.extras?.leg_byes || 0}, w {innings2.extras?.wides || 0}, nb {innings2.extras?.no_balls || 0})
                    </td>
                  </tr>
                  <tr className="bg-gray-100 font-bold">
                    <td className="p-2 sm:p-3">Total</td>
                    <td className="p-2 text-center" colSpan="5">{innings2.score} ({innings2.overs} Overs, RR: {innings2.run_rate})</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderSquads = () => (
    <div className="bg-white">
      <div className="flex border-b">
        <div className="flex-1 bg-gray-50 p-3 text-center">
          <img src={matchData.info.team1_flag} alt={teams.team1} className="w-8 h-8 mx-auto mb-1 object-contain" />
          <span className="font-semibold text-sm">{teams.team1}</span>
        </div>
        <div className="flex-1 bg-gray-50 p-3 text-center">
          <img src={matchData.info.team2_flag} alt={teams.team2} className="w-8 h-8 mx-auto mb-1 object-contain" />
          <span className="font-semibold text-sm">{teams.team2}</span>
        </div>
      </div>

      <h3 className="text-center font-semibold py-4 bg-gray-100">Playing XI</h3>

      <div className="divide-y">
        {matchData.squads[teams.team1].playing_xi.map((player, idx) => (
          <div key={idx} className="flex items-center hover:bg-gray-50">
            <div className="flex-1 p-3 sm:p-4 border-r">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-600 text-xs">👤</span>
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-sm truncate">{player}</p>
                  <p className="text-xs text-gray-500">Batter</p>
                </div>
              </div>
            </div>
            <div className="flex-1 p-3 sm:p-4">
              {matchData.squads[teams.team2].playing_xi[idx] && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-600 text-xs">👤</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-sm truncate">{matchData.squads[teams.team2].playing_xi[idx]}</p>
                    <p className="text-xs text-gray-500">Batter</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderOvers = () => (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">OVERS DETAIL</h2>
      <p className="text-gray-500 text-center py-8">Over-by-over details will be available soon</p>
    </div>
  );

  const renderHighlights = () => (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">MATCH HIGHLIGHTS</h2>
      
      {matchData.highlights && matchData.highlights.length > 0 ? (
        <div className="space-y-4">
          {matchData.highlights.map((highlight, idx) => (
            <div key={idx} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-start gap-3">
                <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">{highlight}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center py-8">No highlights available yet</p>
      )}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'info': return renderInfo();
      case 'live': return renderLive();
      case 'scorecard': return renderScorecard();
      case 'squads': return renderSquads();
      case 'overs': return renderOvers();
      case 'highlights': return renderHighlights();
      default: return renderInfo();
    }
  };

  // ==================== JSX RETURN ====================
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3 mb-3">
            <button 
              onClick={() => navigate('/cricket/live')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex-1 min-w-0">
              <h1 className="text-base sm:text-lg font-bold truncate">
                {teams.team1} vs {teams.team2}, {matchData.info.match_number} - Live Cricket Score
              </h1>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-gray-600 mt-1">
                <span className="truncate">Series: {matchData.info.series}</span>
                <span>•</span>
                <span className="truncate">Venue: {matchData.info.venue.name}, {matchData.info.venue.city}</span>
                <span>•</span>
                <span>Date: {matchData.info.date}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-1 overflow-x-auto scrollbar-hide">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'text-teal-600 border-b-2 border-teal-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Main Content (Tabs) */}
          <div className="lg:col-span-8">
            {renderContent()}
          </div>

          {/* Desktop Sidebar: Top Cricket Stories */}
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

        {/* Latest Sports News Section */}
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

export default CricketScorecard;
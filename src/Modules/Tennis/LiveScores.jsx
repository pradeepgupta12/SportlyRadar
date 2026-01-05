import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Trophy, TrendingUp } from 'lucide-react';
import LiveTennisMatches from '../../data/LiveTennisMatches';

const LiveScores = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const liveMatches = LiveTennisMatches.data.LiveMatches;

  const filters = ['All', 'Grand Slam', 'ATP', 'WTA'];

  const filteredMatches = liveMatches.filter(match => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Grand Slam') return match.tournament.category === 'Grand Slam';
    if (selectedFilter === 'ATP') return match.match_type.includes("Men's");
    if (selectedFilter === 'WTA') return match.match_type.includes("Women's");
    return true;
  });

  const getMatchTypeColor = (type) => {
    if (type.includes("Men's")) return 'bg-blue-100 text-blue-700';
    if (type.includes("Women's")) return 'bg-pink-100 text-pink-700';
    return 'bg-purple-100 text-purple-700';
  };

  const renderPlayerInfo = (player, isTeam = false) => {
    if (isTeam && player.team) {
      return (
        <div className="space-y-1">
          {player.team.map((p, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-sm font-medium">{p.short_name}</span>
              <span className="text-xs text-gray-500">{p.country}</span>
            </div>
          ))}
        </div>
      );
    }
    return (
      <div className="flex items-center gap-2">
        <span className="font-medium">{player.short_name}</span>
        <span className="text-sm text-gray-500">{player.country}</span>
        {player.seed && (
          <span className="text-xs bg-gray-200 px-1.5 py-0.5 rounded">
            Seed {player.seed}
          </span>
        )}
      </div>
    );
  };

  const renderScore = (match) => {
    const { current_set, previous_sets } = match.scorecard;
    const isDoubles = match.match_type.includes('Doubles');

    return (
      <div className="space-y-2">
        <div className="flex gap-2 text-sm">
          {previous_sets.map((set, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[40px]">
              <span className="font-semibold">
                {isDoubles ? set.team1_games : set.player1_games}
              </span>
              <span className="font-semibold">
                {isDoubles ? set.team2_games : set.player2_games}
              </span>
            </div>
          ))}
          <div className="flex flex-col items-center min-w-[40px] bg-green-50 rounded px-2">
            <span className="font-bold text-green-700">
              {isDoubles ? current_set.team1_games : current_set.player1_games}
            </span>
            <span className="font-bold text-green-700">
              {isDoubles ? current_set.team2_games : current_set.player2_games}
            </span>
          </div>
        </div>
        <div className="text-xs text-gray-600">
          Current: {isDoubles ? current_set.team1_points : current_set.player1_points} - {isDoubles ? current_set.team2_points : current_set.player2_points}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Live Tennis Scores</h1>
          <p className="text-lg opacity-90">Real-time updates from tournaments worldwide</p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Live Matches */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="space-y-4">
          {filteredMatches.map((match) => (
            <Link
              key={match.match_id}
              to={`/tennis/match/${match.match_id}`}
              className="block bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6"
            >
              {/* Match Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="h-4 w-4 text-yellow-600" />
                    <span className="font-semibold text-gray-800">{match.series}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${getMatchTypeColor(match.match_type)}`}>
                      {match.match_type}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {match.venue.name}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {match.schedule.time}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-red-600">LIVE</span>
                </div>
              </div>

              {/* Match Score */}
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  {match.match_type.includes('Doubles') ? (
                    <>
                      {renderPlayerInfo(match.players[0], true)}
                      <div className="my-2 border-t border-gray-200"></div>
                      {renderPlayerInfo(match.players[1], true)}
                    </>
                  ) : (
                    <>
                      {renderPlayerInfo(match.players[0])}
                      <div className="my-2 border-t border-gray-200"></div>
                      {renderPlayerInfo(match.players[1])}
                    </>
                  )}
                </div>
                <div className="ml-6">
                  {renderScore(match)}
                </div>
              </div>

              {/* Current Status */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    {match.scorecard.current_status}
                  </span>
                  <span className="text-xs text-blue-600 font-medium">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredMatches.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No live matches at the moment</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveScores;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Clock, MapPin, Trophy, TrendingUp } from 'lucide-react';
// import LiveTennisMatches from '../../data/LiveTennisMatches';

// const LiveScores = () => {
//   const [selectedFilter, setSelectedFilter] = useState('All');
//   const liveMatches = LiveTennisMatches.data.LiveMatches;

//   const filters = ['All', 'Grand Slam', 'ATP', 'WTA'];

//   const filteredMatches = liveMatches.filter(match => {
//     if (selectedFilter === 'All') return true;
//     if (selectedFilter === 'Grand Slam') return match.tournament.category === 'Grand Slam';
//     if (selectedFilter === 'ATP') return match.match_type.includes("Men's");
//     if (selectedFilter === 'WTA') return match.match_type.includes("Women's");
//     return true;
//   });

//   const getMatchTypeColor = (type) => {
//     if (type.includes("Men's")) return 'bg-blue-100 text-blue-700';
//     if (type.includes("Women's")) return 'bg-pink-100 text-pink-700';
//     return 'bg-purple-100 text-purple-700';
//   };

//   const renderPlayerInfo = (player, isTeam = false) => {
//     if (isTeam && player.team) {
//       return (
//         <div className="space-y-1">
//           {player.team.map((p, idx) => (
//             <div key={idx} className="flex items-center gap-2">
//               <span className="text-sm font-medium">{p.short_name}</span>
//               <span className="text-xs text-gray-500">{p.country}</span>
//             </div>
//           ))}
//         </div>
//       );
//     }
//     return (
//       <div className="flex items-center gap-2">
//         <span className="font-medium">{player.short_name}</span>
//         <span className="text-sm text-gray-500">{player.country}</span>
//         {player.seed && (
//           <span className="text-xs bg-gray-200 px-1.5 py-0.5 rounded">
//             Seed {player.seed}
//           </span>
//         )}
//       </div>
//     );
//   };

//   const renderScore = (match) => {
//     const { current_set, previous_sets } = match.scorecard;
//     const isDoubles = match.match_type.includes('Doubles');

//     return (
//       <div className="space-y-2">
//         <div className="flex gap-2 text-sm">
//           {previous_sets.map((set, idx) => (
//             <div key={idx} className="flex flex-col items-center min-w-[40px]">
//               <span className="font-semibold">
//                 {isDoubles ? set.team1_games : set.player1_games}
//               </span>
//               <span className="font-semibold">
//                 {isDoubles ? set.team2_games : set.player2_games}
//               </span>
//             </div>
//           ))}
//           <div className="flex flex-col items-center min-w-[40px] bg-green-50 rounded px-2">
//             <span className="font-bold text-green-700">
//               {isDoubles ? current_set.team1_games : current_set.player1_games}
//             </span>
//             <span className="font-bold text-green-700">
//               {isDoubles ? current_set.team2_games : current_set.player2_games}
//             </span>
//           </div>
//         </div>
//         <div className="text-xs text-gray-600">
//           Current: {isDoubles ? current_set.team1_points : current_set.player1_points} - {isDoubles ? current_set.team2_points : current_set.player2_points}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="text-4xl font-bold mb-2">Live Tennis Scores</h1>
//           <p className="text-lg opacity-90">Real-time updates from tournaments worldwide</p>
//         </div>
//       </div>

//       {/* Filters */}
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         <div className="flex gap-3 overflow-x-auto pb-2">
//           {filters.map((filter) => (
//             <button
//               key={filter}
//               onClick={() => setSelectedFilter(filter)}
//               className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
//                 selectedFilter === filter
//                   ? 'bg-blue-600 text-white'
//                   : 'bg-white text-gray-700 hover:bg-gray-100'
//               }`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Live Matches */}
//       <div className="max-w-7xl mx-auto px-4 pb-12">
//         <div className="space-y-4">
//           {filteredMatches.map((match) => (
//             <Link
//               key={match.match_id}
//               to={`/tennis-scorecard/${match.match_id}`}
//               className="block bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6"
//             >
//               {/* Match Header */}
//               <div className="flex justify-between items-start mb-4">
//                 <div>
//                   <div className="flex items-center gap-2 mb-2">
//                     <Trophy className="h-4 w-4 text-yellow-600" />
//                     <span className="font-semibold text-gray-800">{match.series}</span>
//                     <span className={`text-xs px-2 py-1 rounded-full ${getMatchTypeColor(match.match_type)}`}>
//                       {match.match_type}
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-3 text-sm text-gray-600">
//                     <span className="flex items-center gap-1">
//                       <MapPin className="h-3 w-3" />
//                       {match.venue.name}
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <Clock className="h-3 w-3" />
//                       {match.schedule.time}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
//                   <span className="text-sm font-medium text-red-600">LIVE</span>
//                 </div>
//               </div>

//               {/* Match Score */}
//               <div className="flex justify-between items-center">
//                 <div className="flex-1">
//                   {match.match_type.includes('Doubles') ? (
//                     <>
//                       {renderPlayerInfo(match.players[0], true)}
//                       <div className="my-2 border-t border-gray-200"></div>
//                       {renderPlayerInfo(match.players[1], true)}
//                     </>
//                   ) : (
//                     <>
//                       {renderPlayerInfo(match.players[0])}
//                       <div className="my-2 border-t border-gray-200"></div>
//                       {renderPlayerInfo(match.players[1])}
//                     </>
//                   )}
//                 </div>
//                 <div className="ml-6">
//                   {renderScore(match)}
//                 </div>
//               </div>

//               {/* Current Status */}
//               <div className="mt-4 pt-4 border-t border-gray-100">
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm text-gray-600">
//                     {match.scorecard.current_status}
//                   </span>
//                   <span className="text-xs text-blue-600 font-medium">
//                     View Scorecard →
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {filteredMatches.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No live matches at the moment</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LiveScores;
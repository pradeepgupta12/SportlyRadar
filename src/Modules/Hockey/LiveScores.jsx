// import React from 'react';
// import { Link } from 'react-router-dom';
// import LiveHockeyMatchDetail from '../../data/LiveHockeyMatchDetail';

// const LiveScores = () => {
//   const matchData = LiveHockeyMatchDetail.data;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
//             Live Hockey Scores
//           </h1>
//           <p className="text-gray-600">
//             Watch live hockey matches from around the world
//           </p>
//         </div>

//         {/* Matches Grid */}
//         <div className="grid gap-6">
//           {matchData.matches.map((match) => (
//             <div
//               key={match.match_id}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
//             >
//               {/* Match Header */}
//               <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 md:px-6 py-4">
//                 <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
//                   <div>
//                     <p className="text-white/90 text-sm font-medium">
//                       {match.series}
//                     </p>
//                     <p className="text-white/70 text-xs">
//                       {match.match_type} • {match.match_number}
//                     </p>
//                   </div>
//                   <span
//                     className={`px-4 py-1.5 rounded-full text-xs font-bold ${
//                       match.info.status === 'Live'
//                         ? 'bg-red-500 text-white animate-pulse'
//                         : 'bg-green-500 text-white'
//                     }`}
//                   >
//                     {match.info.status}
//                   </span>
//                 </div>
//               </div>

//               {/* Match Body */}
//               <div className="p-4 md:p-6">
//                 <div className="grid md:grid-cols-3 gap-6 items-center">
//                   {/* Team 1 */}
//                   <div className="flex items-center gap-4">
//                     <img
//                       src={match.images.team1_flag}
//                       alt="Team 1"
//                       className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-lg shadow-md"
//                     />
//                     <div className="flex-1">
//                       <h3 className="font-bold text-base md:text-lg text-gray-900">
//                         {match.squads.teams[0].name}
//                       </h3>
//                       <p className="text-xl md:text-2xl font-bold text-blue-600">
//                         {match.scorecard.team_stats[0].total_goals}
//                       </p>
//                     </div>
//                   </div>

//                   {/* VS / Status */}
//                   <div className="text-center">
//                     <div className="text-2xl md:text-3xl font-bold text-gray-400">
//                       VS
//                     </div>
//                     {match.info.status === 'Live' && (
//                       <div className="mt-2">
//                         <p className="text-sm font-semibold text-gray-700">
//                           Q{match.info.current_quarter}
//                         </p>
//                         <p className="text-xs text-gray-500">
//                           {match.info.time_remaining_in_quarter}
//                         </p>
//                       </div>
//                     )}
//                     {match.info.status === 'Full Time' && (
//                       <p className="text-sm font-semibold text-green-600 mt-2">
//                         Full Time
//                       </p>
//                     )}
//                   </div>

//                   {/* Team 2 */}
//                   <div className="flex items-center gap-4 md:flex-row-reverse">
//                     <img
//                       src={match.images.team2_flag}
//                       alt="Team 2"
//                       className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-lg shadow-md"
//                     />
//                     <div className="flex-1 md:text-right">
//                       <h3 className="font-bold text-base md:text-lg text-gray-900">
//                         {match.squads.teams[1].name}
//                       </h3>
//                       <p className="text-xl md:text-2xl font-bold text-blue-600">
//                         {match.scorecard.team_stats[1].total_goals}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Match Info Footer */}
//                 <div className="mt-6 pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//                   <div className="text-sm text-gray-600">
//                     <p className="font-medium">{match.info.venue.name}</p>
//                     <p className="text-xs text-gray-500">
//                       {match.info.venue.city} • {match.info.date}
//                     </p>
//                   </div>
//                   <Link
//   to={`/hockey/scorecard/${match.match_id}`}  // ← YEH CHANGE
//   className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
// >
//   View Details
// </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LiveScores;


import React from 'react';
import { Link } from 'react-router-dom';
import LiveHockeyMatchDetail from '../../data/LiveHockeyMatchDetail';

const LiveScores = () => {
  const matchData = LiveHockeyMatchDetail.data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">🏒 Live Hockey Scores</h1>
          <p className="text-gray-600 text-sm">Real-time field hockey matches worldwide</p>
        </div>

        {/* Matches List */}
        <div className="space-y-5">
          {matchData.matches.map((match) => (
            <div
              key={match.match_id}
              className="bg-white rounded-lg shadow hover:shadow-md transition-all border border-gray-100"
            >
              {/* League Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-t-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-sm">{match.series}</p>
                    <p className="text-xs opacity-90">{match.match_type} • {match.match_number}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      match.info.status === 'Live'
                        ? 'bg-red-500 animate-pulse'
                        : 'bg-green-500'
                    }`}
                  >
                    {match.info.status}
                  </span>
                </div>
              </div>

              {/* Match Content */}
              <div className="p-5">
                <div className="grid grid-cols-3 items-center gap-4">
                  {/* Team 1 */}
                  <div className="flex items-center gap-3">
                    <img
                      src={match.images.team1_flag}
                      alt={match.squads.teams[0].name}
                      className="w-12 h-12 object-contain rounded"
                    />
                    <div>
                      <p className="font-semibold text-gray-800 truncate">{match.squads.teams[0].name}</p>
                      <p className="text-2xl font-bold text-blue-600">
                        {match.scorecard.team_stats[0].total_goals}
                      </p>
                    </div>
                  </div>

                  {/* Center - VS / Live Info */}
                  <div className="text-center">
                    <p className="text-xl font-bold text-gray-400">VS</p>
                    {match.info.status === 'Live' && (
                      <div className="mt-2 text-sm">
                        <p className="font-medium">Q{match.info.current_quarter}</p>
                        <p className="text-xs text-gray-500">{match.info.time_remaining_in_quarter}</p>
                      </div>
                    )}
                    {match.info.status === 'Full Time' && (
                      <p className="text-sm font-medium text-green-600 mt-2">Full Time</p>
                    )}
                  </div>

                  {/* Team 2 */}
                  <div className="flex items-center gap-3 justify-end">
                    <div className="text-right">
                      <p className="font-semibold text-gray-800 truncate">{match.squads.teams[1].name}</p>
                      <p className="text-2xl font-bold text-blue-600">
                        {match.scorecard.team_stats[1].total_goals}
                      </p>
                    </div>
                    <img
                      src={match.images.team2_flag}
                      alt={match.squads.teams[1].name}
                      className="w-12 h-12 object-contain rounded"
                    />
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-600">
                  <div>
                    <p className="font-medium">{match.info.venue.name}</p>
                    <p>{match.info.venue.city} • {match.info.date}</p>
                  </div>
                  <Link
                    to={`/hockey/scorecard/${match.match_id}`}
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {matchData.matches.length === 0 && (
          <div className="bg-white rounded-xl shadow-md p-10 text-center">
            <p className="text-gray-500">No live or recent matches available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveScores;


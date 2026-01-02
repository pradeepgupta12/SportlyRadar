// import React from 'react';
// import seriesData from '../../data/SeriesTournaments.json';

// const ICCMenWorld = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-6">
//       {/* Series Title */}
//       <h1 className="text-2xl font-bold text-gray-800 mb-6">
//         {seriesData.series}
//       </h1>

//       {/* Schedule */}
//       <div className="space-y-8">
//         {seriesData.schedule.map((day, index) => (
//           <div key={index}>
//             {/* Date Header */}
//             <div className="bg-green-100 text-gray-700 font-semibold px-4 py-2 uppercase text-sm">
//               {day.date}
//             </div>

//             {/* Matches */}
//             <div className="divide-y">
//               {day.matches.map((match, i) => (
//                 <div key={i} className="py-4 flex flex-col gap-3">
//                   {/* Match Info */}
//                   <p className="text-sm text-gray-600">
//                     {match.matchNumber}, {match.group} · {match.venue.city},{' '}
//                     {match.venue.stadium}
//                   </p>

//                   {/* Teams & Time */}
//                   <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
//                     {/* Teams */}
//                     <div className="space-y-2">
//                       {match.teams.map((team, t) => (
//                         <div key={t} className="flex items-center gap-3">
//                           <img
//                             src={team.flag}
//                             alt={team.name}
//                             className="w-7 h-5 object-cover rounded"
//                           />
//                           <span className="font-medium text-gray-800">
//                             {team.name}
//                           </span>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Time */}
//                     <div className="text-sm text-gray-700 md:text-right">
//                       <p className="font-semibold">{match.matchDay}</p>
//                       <p>{match.displayTime}</p>
//                     </div>
//                   </div>

//                   {/* Status */}
//                   <p className="text-orange-500 text-sm font-medium">
//                     {match.statusText}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ICCMenWorld;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import seriesData from '../../data/SeriesTournaments.json';

const ICCMenWorld = () => {
  const navigate = useNavigate();

 // handleMatchClick same rahega
const handleMatchClick = (dayIndex, matchIndex) => {
  const match = seriesData.schedule[dayIndex].matches[matchIndex];
  const matchId = match.matchId; // Ab real ID use ho raha

  navigate(`/cricket/series/icc-mens-t20-world-cup-2026/match/${matchId}`);
};

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        {seriesData.series}
      </h1>

      <div className="space-y-8">
        {seriesData.schedule.map((day, dayIndex) => (
          <div key={dayIndex}>
            <div className="bg-green-100 text-gray-700 font-semibold px-4 py-2 uppercase text-sm">
              {day.date}
            </div>

            <div className="divide-y">
              {day.matches.map((match, matchIndex) => (
                <div
                  key={matchIndex}
                  className="py-4 flex flex-col gap-3 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => handleMatchClick(dayIndex, matchIndex)}
                >
                  <p className="text-sm text-gray-600">
                    {match.matchNumber}, {match.group} · {match.venue.city}, {match.venue.stadium}
                  </p>

                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div className="space-y-2">
                      {match.teams.map((team, t) => (
                        <div key={t} className="flex items-center gap-3">
                          <img
                            src={team.flag}
                            alt={team.name}
                            className="w-7 h-5 object-cover rounded"
                          />
                          <span className="font-medium text-gray-800">
                            {team.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="text-sm text-gray-700 md:text-right">
                      <p className="font-semibold">{match.matchDay}</p>
                      <p>{match.displayTime}</p>
                    </div>
                  </div>

                  <p className="text-orange-500 text-sm font-medium">
                    {match.statusText}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ICCMenWorld;
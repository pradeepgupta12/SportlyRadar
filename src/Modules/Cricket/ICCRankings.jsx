// import React, { useState } from 'react';
// import IccRanking from '../../data/IccRanking';

// const ICCRankings = () => {
//   const [activeTab, setActiveTab] = useState('Test');

//   const { TestRankings, ODIRankings, T20Rankings } = IccRanking.data.IccRanking[0];

//   const rankingsData = {
//     Test: TestRankings,
//     ODI: ODIRankings,
//     T20: T20Rankings,
//   };

//   const currentRankings = rankingsData[activeTab];

//   return (
//     <main className="w-full max-w-full lg:max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 min-h-screen">
//       <style jsx>{`
//         .sticky-col {
//           position: sticky;
//           left: 0;
//           background: #f8fafc;
//           z-index: 10;
//           border-right: 1px solid #e2e8f0;
//         }
//         .table-header {
//           background: #f1f5f9;
//         }
//         .tab-active {
//           background-color: #16a34a;
//           color: white;
//         }
//         .tab-inactive {
//           background-color: #e5e7eb;
//           color: #374151;
//         }
//         @media (max-width: 640px) {
//           .mobile-text-xs {
//             font-size: 0.7rem;
//           }
//           .mobile-px {
//             padding-left: 0.375rem !important;
//             padding-right: 0.375rem !important;
//           }
//           .mobile-py {
//             padding-top: 0.25rem !important;
//             padding-bottom: 0.25rem !important;
//           }
//           .flag-mobile {
//             width: 18px !important;
//             height: 18px !important;
//           }
//         }
//       `}</style>

//       {/* Header - Compact */}
//       <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
//         ICC Team Rankings
//       </h2>

//       {/* Tabs - Tight Spacing */}
//       <div className="flex space-x-2 mb-5 overflow-x-auto pb-1 scrollbar-hide">
//         {['Test', 'ODI', 'T20'].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
//               activeTab === tab ? 'tab-active shadow-sm' : 'tab-inactive hover:bg-gray-300'
//             }`}
//           >
//             {tab === 'Test' ? 'Test' : tab + 'I'}
//           </button>
//         ))}
//       </div>

//       {/* Rankings Table - Super Compact */}
//       <div className="bg-white rounded-xl shadow-md overflow-hidden">
//         <div className="p-3 sm:p-4 border-b border-gray-200">
//           <h3 className="text-sm sm:text-base font-bold text-gray-800">
//             {activeTab === 'Test' ? 'Test' : activeTab + 'I'} Team Rankings
//           </h3>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full text-xs text-gray-700">
//             <thead>
//               <tr className="table-header text-gray-600 text-xs font-medium">
//                 <th className="py-2 px-3 text-center sticky-col">Pos</th>
//                 <th className="py-2 px-3 text-left">Team</th>
//                 <th className="py-2 px-3 text-center">M</th>
//                 <th className="py-2 px-3 text-center">Pts</th>
//                 <th className="py-2 px-3 text-center">Rating</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-100">
//               {currentRankings.map((team) => (
//                 <tr
//                   key={team.position}
//                   className="hover:bg-gray-50 transition-colors"
//                 >
//                   <td className="py-2.5 px-3 text-center font-bold text-gray-900 sticky-col mobile-text-xs">
//                     {team.position}
//                   </td>
//                   <td className="py-2.5 px-3 mobile-px">
//                     <div className="flex items-center space-x-2">
//                       <img
//                         src={team.team.logo}
//                         alt={team.team.name}
//                         className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded flag-mobile flex-shrink-0"
//                         onError={(e) => (e.target.style.display = 'none')}
//                       />
//                       <span className="font-medium text-gray-900 truncate mobile-text-xs">
//                         {team.team.name}
//                       </span>
//                     </div>
//                   </td>
//                   <td className="py-2.5 px-3 text-center mobile-text-xs">
//                     {team.matches}
//                   </td>
//                   <td className="py-2.5 px-3 text-center mobile-text-xs">
//                     {team.points.toLocaleString()}
//                   </td>
//                   <td className="py-2.5 px-3 text-center font-bold text-sm text-green-600 mobile-text-xs">
//                     {team.rating}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Methodology - Compact */}
//       <div className="mt-6 bg-white rounded-xl shadow-md p-4">
//         <h3 className="text-sm font-bold mb-2 text-gray-800">
//           How Rankings Are Calculated
//         </h3>
//         <p className="text-xs text-gray-600 leading-relaxed">
//           ICC rankings are based on a rolling period. Teams earn points for wins, with higher weight for recent matches and stronger opponents. 
//           Rating = Total Points ÷ Matches Played.
//         </p>
//         <p className="text-xs text-gray-500 mt-3 italic">
//           Updated: December 2025 • Source: ICC
//         </p>
//       </div>
//     </main>
//   );
// };

// export default ICCRankings;

import React, { useState } from 'react';
import IccRanking from '../../data/IccRanking';

const ICCRankings = () => {
  const [activeTab, setActiveTab] = useState('Test');

  // Data from JSON
  const { TestRankings, ODIRankings, T20Rankings, methodology, lastUpdated } = IccRanking.data.IccRanking[0];

  const rankingsData = {
    Test: TestRankings,
    ODI: ODIRankings,
    T20: T20Rankings,
  };

  const currentRankings = rankingsData[activeTab] || [];

  return (
    <main className="w-full max-w-full lg:max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 min-h-screen">
      <style jsx>{`
        .sticky-col {
          position: sticky;
          left: 0;
          background: #f8fafc;
          z-index: 10;
          border-right: 1px solid #e2e8f0;
        }
        .table-header {
          background: #f1f5f9;
        }
        .tab-active {
          background-color: #16a34a;
          color: white;
        }
        .tab-inactive {
          background-color: #e5e7eb;
          color: #374151;
        }
        @media (max-width: 640px) {
          .mobile-text-xs {
            font-size: 0.7rem;
          }
          .mobile-px {
            padding-left: 0.375rem !important;
            padding-right: 0.375rem !important;
          }
          .mobile-py {
            padding-top: 0.25rem !important;
            padding-bottom: 0.25rem !important;
          }
          .flag-mobile {
            width: 18px !important;
            height: 18px !important;
          }
        }
      `}</style>

      {/* Header */}
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
        ICC Men's Team Rankings
      </h2>

      {/* Tabs */}
      <div className="flex space-x-2 mb-5 overflow-x-auto pb-1 scrollbar-hide">
        {['Test', 'ODI', 'T20'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
              activeTab === tab ? 'tab-active shadow-sm' : 'tab-inactive hover:bg-gray-300'
            }`}
          >
            {tab === 'Test' ? 'Test' : tab + 'I'}
          </button>
        ))}
      </div>

      {/* Rankings Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-3 sm:p-4 border-b border-gray-200">
          <h3 className="text-sm sm:text-base font-bold text-gray-800">
            {activeTab === 'Test' ? 'Test' : activeTab + 'I'} Team Rankings
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-gray-700">
            <thead>
              <tr className="table-header text-gray-600 text-xs font-medium">
                <th className="py-2 px-3 text-center sticky-col">Pos</th>
                <th className="py-2 px-3 text-left">Team</th>
                <th className="py-2 px-3 text-center">M</th>
                <th className="py-2 px-3 text-center">Pts</th>
                <th className="py-2 px-3 text-center">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {currentRankings.map((team) => (
                <tr key={team.position} className="hover:bg-gray-50 transition-colors">
                  <td className="py-2.5 px-3 text-center font-bold text-gray-900 sticky-col mobile-text-xs">
                    {team.position}
                  </td>
                  <td className="py-2.5 px-3 mobile-px">
                    <div className="flex items-center space-x-2">
                      <img
                        src={team.team.logo}
                        alt={team.team.name}
                        className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded flag-mobile flex-shrink-0"
                        onError={(e) => (e.target.style.display = 'none')}
                      />
                      <span className="font-medium text-gray-900 truncate mobile-text-xs">
                        {team.team.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-2.5 px-3 text-center mobile-text-xs">
                    {team.matches}
                  </td>
                  <td className="py-2.5 px-3 text-center mobile-text-xs">
                    {team.points.toLocaleString()}
                  </td>
                  <td className="py-2.5 px-3 text-center font-bold text-sm text-green-600 mobile-text-xs">
                    {team.rating}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Methodology - Dynamic from JSON */}
      <div className="mt-6 bg-white rounded-xl shadow-md p-4">
        <h3 className="text-sm font-bold mb-2 text-gray-800">
          How ICC Rankings Are Calculated
        </h3>
        <div className="text-sm text-gray-600 leading-relaxed space-y-2">
          {methodology.summary && <p>{methodology.summary}</p>}
          {methodology.points && (
            <ul className="list-disc pl-5 space-y-1">
              {methodology.points.map((point, idx) => (
                <li key={idx}><strong>{point.title}:</strong> {point.desc}</li>
              ))}
            </ul>
          )}
          {methodology.weighting && <p className="mt-2"><strong>Weighting:</strong> {methodology.weighting}</p>}
          {methodology.note && <p className="mt-2 italic">{methodology.note}</p>}
        </div>
        <p className="text-xs text-gray-500 mt-3 italic">
          {lastUpdated} • Source: ICC Official
        </p>
      </div>
    </main>
  );
};

export default ICCRankings;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import IccRanking from '../../data/IccRanking';
// import TopStories from '../../data/TopStories.js';
// import LatestNews from '../../data/LatestNews.js';

// const ICCRankings = () => {
//   const [activeTab, setActiveTab] = useState('Test');

//   // Data from JSON
//   const { TestRankings, ODIRankings, T20Rankings, methodology, lastUpdated } = IccRanking.data.IccRanking[0];

//   const rankingsData = {
//     Test: TestRankings,
//     ODI: ODIRankings,
//     T20: T20Rankings,
//   };

//   const currentRankings = rankingsData[activeTab] || [];

//   const navigate = useNavigate();

//   const handleStoryClick = (id) => {
//     navigate(`/details/cricket/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

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

//       {/* Main Content: Rankings + Sidebar */}
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        
//         {/* Left: Rankings */}
//         <div className="lg:col-span-8 space-y-4">
//           {/* Header */}
//           <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
//             ICC Men's Team Rankings
//           </h2>

//           {/* Tabs */}
//           <div className="flex space-x-2 mb-5 overflow-x-auto pb-1 scrollbar-hide">
//             {['Test', 'ODI', 'T20'].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
//                   activeTab === tab ? 'tab-active shadow-sm' : 'tab-inactive hover:bg-gray-300'
//                 }`}
//               >
//                 {tab === 'Test' ? 'Test' : tab + 'I'}
//               </button>
//             ))}
//           </div>

//           {/* Rankings Table */}
//           <div className="bg-white rounded-xl shadow-md overflow-hidden">
//             <div className="p-3 sm:p-4 border-b border-gray-200">
//               <h3 className="text-sm sm:text-base font-bold text-gray-800">
//                 {activeTab === 'Test' ? 'Test' : activeTab + 'I'} Team Rankings
//               </h3>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full text-xs text-gray-700">
//                 <thead>
//                   <tr className="table-header text-gray-600 text-xs font-medium">
//                     <th className="py-2 px-3 text-center sticky-col">Pos</th>
//                     <th className="py-2 px-3 text-left">Team</th>
//                     <th className="py-2 px-3 text-center">M</th>
//                     <th className="py-2 px-3 text-center">Pts</th>
//                     <th className="py-2 px-3 text-center">Rating</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-100">
//                   {currentRankings.map((team) => (
//                     <tr key={team.position} className="hover:bg-gray-50 transition-colors">
//                       <td className="py-2.5 px-3 text-center font-bold text-gray-900 sticky-col mobile-text-xs">
//                         {team.position}
//                       </td>
//                       <td className="py-2.5 px-3 mobile-px">
//                         <div className="flex items-center space-x-2">
//                           <img
//                             src={team.team.logo}
//                             alt={team.team.name}
//                             className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded flag-mobile flex-shrink-0"
//                             onError={(e) => (e.target.style.display = 'none')}
//                           />
//                           <span className="font-medium text-gray-900 truncate mobile-text-xs">
//                             {team.team.name}
//                           </span>
//                         </div>
//                       </td>
//                       <td className="py-2.5 px-3 text-center mobile-text-xs">
//                         {team.matches}
//                       </td>
//                       <td className="py-2.5 px-3 text-center mobile-text-xs">
//                         {team.points.toLocaleString()}
//                       </td>
//                       <td className="py-2.5 px-3 text-center font-bold text-sm text-green-600 mobile-text-xs">
//                         {team.rating}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Methodology - Dynamic from JSON */}
//           <div className="mt-6 bg-white rounded-xl shadow-md p-4">
//             <h3 className="text-sm font-bold mb-2 text-gray-800">
//               How ICC Rankings Are Calculated
//             </h3>
//             <div className="text-sm text-gray-600 leading-relaxed space-y-2">
//               {methodology.summary && <p>{methodology.summary}</p>}
//               {methodology.points && (
//                 <ul className="list-disc pl-5 space-y-1">
//                   {methodology.points.map((point, idx) => (
//                     <li key={idx}><strong>{point.title}:</strong> {point.desc}</li>
//                   ))}
//                 </ul>
//               )}
//               {methodology.weighting && <p className="mt-2"><strong>Weighting:</strong> {methodology.weighting}</p>}
//               {methodology.note && <p className="mt-2 italic">{methodology.note}</p>}
//             </div>
//             <p className="text-xs text-gray-500 mt-3 italic">
//               {lastUpdated} • Source: ICC Official
//             </p>
//           </div>
//         </div>

//         {/* Right Sidebar: Top Cricket Stories (Desktop only) */}
//         <div className="hidden lg:block lg:col-span-4">
//           <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
//             <h3 className="text-lg font-bold text-gray-900 mb-5">Top Cricket Stories</h3>
//             <div className="space-y-4">
//               {TopStories.data.TopStories.slice(0, 5).map((story) => (
//                 <div
//                   key={story.id}
//                   onClick={() => handleStoryClick(story.id)}
//                   className="flex gap-3 cursor-pointer group hover:bg-gray-50 rounded-lg p-3 -mx-3 transition-colors"
//                 >
//                   <div className="flex-shrink-0">
//                     <img
//                       src={story.image || 'https://via.placeholder.com/100'}
//                       alt={story.title}
//                       className="w-20 h-20 object-cover rounded-lg"
//                     />
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-blue-600 transition-colors">
//                       {story.title}
//                     </h4>
//                     <p className="text-xs text-gray-500 mt-1">
//                       {new Date(story.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button
//               onClick={() => navigate('/all-top-cricket-stories')}
//               className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
//             >
//               View All Stories →
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile: Top Cricket Stories */}
//       <div className="lg:hidden mt-10">
//         <div className="bg-white rounded-xl shadow-md p-5">
//           <h3 className="text-lg font-bold text-gray-900 mb-4">Top Cricket Stories</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {TopStories.data.TopStories.slice(0, 4).map((story) => (
//               <div
//                 key={story.id}
//                 onClick={() => handleStoryClick(story.id)}
//                 className="cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
//               >
//                 <img
//                   src={story.image || 'https://via.placeholder.com/300'}
//                   alt={story.title}
//                   className="w-full h-40 object-cover"
//                 />
//                 <div className="p-3">
//                   <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
//                     {story.title}
//                   </h4>
//                   <p className="text-xs text-gray-500 mt-1">
//                     {new Date(story.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={() => navigate('/all-top-cricket-stories')}
//             className="mt-4 w-full text-center text-blue-600 font-medium hover:underline text-sm"
//           >
//             View All Stories →
//           </button>
//         </div>
//       </div>

//       {/* Latest Sports News Section (Below everything) */}
//       <div className="mt-12">
//         <div className="bg-white rounded-xl shadow-md p-6">
//           <div className="flex items-center justify-between mb-6">
//             <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
//               Latest Sports News
//             </h3>
//             <button
//               onClick={() => navigate('/all-latest-news')}
//               className="text-blue-600 hover:underline font-medium text-sm sm:text-base"
//             >
//               View All →
//             </button>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {LatestNews.data.LatestNews.slice(0, 6).map((article) => (
//               <div
//                 key={article.title}
//                 onClick={() => handleNewsCardClick(article.title)}
//                 className="bg-gray-50 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
//               >
//                 <img
//                   src={article.image || "https://via.placeholder.com/400x250"}
//                   alt={article.title}
//                   className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className="p-4">
//                   <h4 className="text-base font-semibold text-gray-800 line-clamp-2 mb-2">
//                     {article.title}
//                   </h4>
//                   <p className="text-sm text-gray-600 line-clamp-2 mb-3">
//                     {article.description}
//                   </p>
//                   <div className="flex justify-between text-xs text-gray-500">
//                     <span>Source: {article.source}</span>
//                     <span>
//                       {new Date(article.published).toLocaleDateString('en-US', {
//                         month: 'short',
//                         day: '2-digit',
//                         year: 'numeric',
//                       })}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default ICCRankings;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IccRanking from '../../data/IccRanking';
import TopStories from '../../data/TopStories.js';
import LatestNews from '../../data/LatestNews.js';

const ICCRankings = () => {
  const [activeTab, setActiveTab] = useState('Test');
  const [activeCategory, setActiveCategory] = useState('Batting');

  // Data from JSON
  const { TestRankings, ODIRankings, T20Rankings, methodology, lastUpdated, PlayerRankings } = IccRanking.data.IccRanking[0];

  const rankingsData = {
    Test: TestRankings,
    ODI: ODIRankings,
    T20: T20Rankings,
  };

  const isPlayers = activeTab.endsWith(' Players');
  const format = activeTab.replace(' Players', '');
  const formatDisplay = format === 'Test' ? 'Test' : format + 'I';
  const formatKey = format === 'T20' ? 'T20I' : format;

  let currentRankings = [];
  if (!isPlayers) {
    currentRankings = rankingsData[format] || [];
  } else {
    currentRankings = PlayerRankings[activeCategory][formatKey] || [];
  }

  const navigate = useNavigate();

  const handleStoryClick = (id) => {
    navigate(`/details/cricket/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

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

      {/* Main Content: Rankings + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        
        {/* Left: Rankings */}
        <div className="lg:col-span-8 space-y-4">
          {/* Header */}
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
            {isPlayers ? `ICC Men's Player Rankings - ${formatDisplay}` : "ICC Men's Team Rankings"}
          </h2>

          {/* Tabs */}
          <div className="flex space-x-2 mb-5 overflow-x-auto pb-1 scrollbar-hide">
            {['Test', 'ODI', 'T20', 'Test Players', 'ODI Players', 'T20 Players'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  if (tab.endsWith(' Players')) {
                    setActiveCategory('Batting');
                  }
                }}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                  activeTab === tab ? 'tab-active shadow-sm' : 'tab-inactive hover:bg-gray-300'
                }`}
              >
                {tab.endsWith(' Players') ? `${tab.replace(' Players', '') === 'Test' ? 'Test' : tab.replace(' Players', '') + 'I'} Players` : (tab === 'Test' ? 'Test' : tab + 'I')}
              </button>
            ))}
          </div>

          {/* Player Sub-Categories Tabs */}
          {isPlayers && (
            <div className="flex space-x-2 mb-5 overflow-x-auto pb-1 scrollbar-hide">
              {['Batting', 'Bowling', 'AllRounder'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                    activeCategory === cat ? 'tab-active shadow-sm' : 'tab-inactive hover:bg-gray-300'
                  }`}
                >
                  {cat === 'AllRounder' ? 'All-Rounder' : cat}
                </button>
              ))}
            </div>
          )}

          {/* Rankings Table */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-3 sm:p-4 border-b border-gray-200">
              <h3 className="text-sm sm:text-base font-bold text-gray-800">
                {isPlayers ? `${formatDisplay} ${activeCategory === 'AllRounder' ? 'All-Rounder' : activeCategory} Rankings` : `${formatDisplay} Team Rankings`}
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-gray-700">
                <thead>
                  <tr className="table-header text-gray-600 text-xs font-medium">
                    <th className="py-2 px-3 text-center sticky-col">Pos</th>
                    {!isPlayers ? (
                      <>
                        <th className="py-2 px-3 text-left">Team</th>
                        <th className="py-2 px-3 text-center">M</th>
                        <th className="py-2 px-3 text-center">Pts</th>
                        <th className="py-2 px-3 text-center">Rating</th>
                      </>
                    ) : (
                      <>
                        <th className="py-2 px-3 text-left">Player</th>
                        <th className="py-2 px-3 text-left">Team</th>
                        <th className="py-2 px-3 text-center">Rating</th>
                        <th className="py-2 px-3 text-center">Career Best</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {currentRankings.map((item) => (
                    <tr key={item.position} className="hover:bg-gray-50 transition-colors">
                      <td className="py-2.5 px-3 text-center font-bold text-gray-900 sticky-col mobile-text-xs">
                        {item.position}
                      </td>
                      {!isPlayers ? (
                        <>
                          <td className="py-2.5 px-3 mobile-px">
                            <div className="flex items-center space-x-2">
                              <img
                                src={item.team.logo}
                                alt={item.team.name}
                                className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded flag-mobile flex-shrink-0"
                                onError={(e) => (e.target.style.display = 'none')}
                              />
                              <span className="font-medium text-gray-900 truncate mobile-text-xs">
                                {item.team.name}
                              </span>
                            </div>
                          </td>
                          <td className="py-2.5 px-3 text-center mobile-text-xs">
                            {item.matches}
                          </td>
                          <td className="py-2.5 px-3 text-center mobile-text-xs">
                            {item.points.toLocaleString()}
                          </td>
                          <td className="py-2.5 px-3 text-center font-bold text-sm text-green-600 mobile-text-xs">
                            {item.rating}
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="py-2.5 px-3 mobile-px">
                            <div className="flex items-center space-x-2">
                              <img
                                src={item.player.avatar}
                                alt={item.player.name}
                                className="w-6 h-6 sm:w-8 sm:h-8 object-cover rounded-full flex-shrink-0"
                                onError={(e) => (e.target.style.display = 'none')}
                              />
                              <span className="font-medium text-gray-900 truncate mobile-text-xs">
                                {item.player.name}
                              </span>
                            </div>
                          </td>
                          <td className="py-2.5 px-3 text-left mobile-text-xs">
                            {item.player.country}
                          </td>
                          <td className="py-2.5 px-3 text-center font-bold text-sm text-green-600 mobile-text-xs">
                            {item.rating}
                          </td>
                          <td className="py-2.5 px-3 text-center mobile-text-xs">
                            {item.careerBest}
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Methodology - Only for Teams */}
          {!isPlayers && (
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
                {methodology.note && <p className="mt-2 italic">{methodology.note}</p>}
              </div>
              <p className="text-xs text-gray-500 mt-3 italic">
                {lastUpdated} • Source: ICC Official
              </p>
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

      {/* Latest Sports News Section (Below everything) */}
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
    </main>
  );
};

export default ICCRankings;
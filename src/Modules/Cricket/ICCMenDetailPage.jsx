// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import worldCupData from '../../data/ICCMenDetail.json'; // ← Aapka diya hua JSON

// const tabs = ['Info', 'Live', 'Scorecard', 'Squads', 'Overs', 'Highlights', 'Full Commentary', 'News'];

// const ICCMenDetailPage = () => {
//   const { matchId } = useParams();
//   const [activeTab, setActiveTab] = useState('Info');

//   // Match find karo matchId se
//   const match = worldCupData.matches.find(m => m.matchId === matchId);

//   if (!match) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-800">Match Not Found</h2>
//           <p className="text-gray-600 mt-2">Invalid match ID: {matchId}</p>
//         </div>
//       </div>
//     );
//   }

//   const { basic, tabs: matchTabs } = match;
//   const { matchNumber, group, teams, venue, date, time } = basic;
//   const [team1, team2] = teams;

//   // Helper: Country code for flags (flagcdn.com)
//   const getCountryCode = (teamName) => {
//     const codes = {
//       'India': 'in',
//       'Pakistan': 'pk',
//       'Australia': 'au',
//       'England': 'gb-eng',
//       'New Zealand': 'nz',
//       'South Africa': 'za',
//       'Afghanistan': 'af',
//       'Bangladesh': 'bd',
//       'West Indies': 'wi', // Custom, flagcdn doesn't have direct
//       'Sri Lanka': 'lk',
//       'Netherlands': 'nl',
//       'Ireland': 'ie',
//       'Zimbabwe': 'zw',
//       'United States of America': 'us',
//       'USA': 'us',
//       'Namibia': 'na',
//       'Nepal': 'np',
//       'Oman': 'om',
//       'UAE': 'ae',
//       'Canada': 'ca',
//       'Italy': 'it'
//     };
//     return codes[teamName] || 'xx'; // fallback
//   };

//   // Date formatting
//   const formatDate = (dateStr) => {
//     if (!dateStr) return 'TBA';
//     const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
//     return new Date(dateStr).toLocaleDateString('en-US', options);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header - Teal Background */}
//       <div className=" text-black py-6 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-2xl md:text-2xl font-bold">
//             {team1} vs {team2}
//           </h1>
//           <p className="text-lg mt-2 opacity-95">
//             {matchNumber}, {group} • {worldCupData.series}
//           </p>
//           <p className="text-md mt-1">
//             {formatDate(date)} • {time.local} Local ({time.gmt} GMT)
//           </p>
//           <p className="text-md">
//             Venue: {venue.stadium}, {venue.city}, {venue.country}
//           </p>
//         </div>
//       </div>

//       {/* Sticky Tabs */}
//       <div className="bg-white sticky top-16 z-20 shadow-md">
//         <div className="max-w-7xl mx-auto overflow-x-auto">
//           <div className="flex ">
//             {tabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
//                   activeTab === tab
//                     ? 'border-b-4 border-teal-600 text-teal-600'
//                     : 'text-gray-600 hover:text-gray-900'
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto p-4 md:p-8">
//         {/* INFO TAB */}
//         {activeTab === 'Info' && (
//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Left: Match Info Table */}
//             <div>
//               <h2 className="text-2xl font-bold mb-6">Match Information</h2>
//               <table className="w-full text-left">
//                 <tbody>
//                   <tr className="border-b">
//                     <td className="py-3 font-medium text-gray-700 w-32">Match</td>
//                     <td className="py-3 text-gray-900">{matchNumber} • {group}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-3 font-medium text-gray-700">Series</td>
//                     <td className="py-3 text-gray-900">{worldCupData.series}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-3 font-medium text-gray-700">Date</td>
//                     <td className="py-3 text-gray-900">{formatDate(date)}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-3 font-medium text-gray-700">Time</td>
//                     <td className="py-3 text-gray-900">
//                       {time.local} Local • {time.gmt} GMT
//                     </td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-3 font-medium text-gray-700">Venue</td>
//                     <td className="py-3 text-gray-900">
//                       {venue.stadium}, {venue.city}, {venue.country}
//                     </td>
//                   </tr>
//                   {matchTabs.info?.umpires && (
//                     <tr className="border-b">
//                       <td className="py-3 font-medium text-gray-700">Umpires</td>
//                       <td className="py-3 text-gray-900">
//                         {matchTabs.info.umpires.join(', ')}
//                       </td>
//                     </tr>
//                   )}
//                   {matchTabs.info?.weather && (
//                     <tr className="border-b">
//                       <td className="py-3 font-medium text-gray-700">Weather</td>
//                       <td className="py-3 text-gray-900">{matchTabs.info.weather}</td>
//                     </tr>
//                   )}
//                   {matchTabs.info?.pitch && (
//                     <tr>
//                       <td className="py-3 font-medium text-gray-700">Pitch Report</td>
//                       <td className="py-3 text-gray-900">{matchTabs.info.pitch}</td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>

//             {/* Right: Teams with Flags */}
//             <div>
//               <h2 className="text-2xl font-bold mb-6">Teams</h2>
//               <div className="space-y-6">
//                 <div className="bg-gray-100 rounded-lg p-6 flex items-center gap-5">
//                   <img
//                     src={`https://flagcdn.com/48x36/${getCountryCode(team1)}.png`}
//                     alt={team1}
//                     className="w-16 h-12 object-cover rounded shadow"
//                     onError={(e) => (e.target.style.display = 'none')}
//                   />
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-800">{team1}</h3>
//                     {matchTabs.squads?.[team1]?.captain && (
//                       <p className="text-sm text-gray-600">
//                         Captain: {matchTabs.squads[team1].captain}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 <div className="bg-gray-100 rounded-lg p-6 flex items-center gap-5">
//                   <img
//                     src={`https://flagcdn.com/48x36/${getCountryCode(team2)}.png`}
//                     alt={team2}
//                     className="w-16 h-12 object-cover rounded shadow"
//                     onError={(e) => (e.target.style.display = 'none')}
//                   />
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-800">{team2}</h3>
//                     {matchTabs.squads?.[team2]?.captain && (
//                       <p className="text-sm text-gray-600">
//                         Captain: {matchTabs.squads[team2].captain}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* SQUADS TAB */}
//         {activeTab === 'Squads' && (
//           <div>
//             <h2 className="text-2xl font-bold text-center mb-8">Playing Squads</h2>
//             {matchTabs.squads && Object.keys(matchTabs.squads).length > 0 ? (
//               <div className="grid md:grid-cols-2 gap-10">
//                 {Object.entries(matchTabs.squads).map(([teamName, squad]) => (
//                   <div key={teamName} className="bg-white rounded-lg shadow p-6">
//                     <div className="flex items-center gap-4 mb-6">
//                       <img
//                         src={`https://flagcdn.com/48x36/${getCountryCode(teamName)}.png`}
//                         alt={teamName}
//                         className="w-12 h-9 rounded"
//                         onError={(e) => (e.target.style.display = 'none')}
//                       />
//                       <h3 className="text-xl font-bold">{teamName}</h3>
//                     </div>
//                     {squad.players && squad.players.length > 0 ? (
//                       <ul className="space-y-2">
//                         {squad.players.map((player, i) => (
//                           <li key={i} className="flex justify-between">
//                             <span>{player.name || `Player ${i + 1}`}</span>
//                             {squad.captain === player.name && (
//                               <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded">Captain</span>
//                             )}
//                           </li>
//                         ))}
//                       </ul>
//                     ) : (
//                       <p className="text-gray-500 italic">Squad not announced yet</p>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p className="text-center text-gray-600 text-lg">
//                 Squads will be announced closer to the match date.
//               </p>
//             )}
//           </div>
//         )}

//         {/* Other Tabs - Placeholder (Future mein live data aayega) */}
//         {['Live', 'Scorecard', 'Overs', 'Highlights', 'Full Commentary', 'News'].includes(activeTab) && (
//           <div className="text-center py-20 bg-white rounded-lg shadow">
//             <p className="text-2xl text-gray-600 font-medium">
//               {activeTab} content not available yet
//             </p>
//             <p className="text-gray-500 mt-4">
//               This section will be updated once the match starts or highlights are available.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ICCMenDetailPage;

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import worldCupData from '../../data/ICCMenDetail.json';
import TopStories from '../../data/TopStories.js';
import LatestNews from '../../data/LatestNews.js';

const tabs = ['Info', 'Live', 'Scorecard', 'Squads', 'Overs', 'Highlights', 'Full Commentary', 'News'];

const ICCMenDetailPage = () => {
  const { matchId } = useParams();
  const [activeTab, setActiveTab] = useState('Info');
  const navigate = useNavigate();

  // Match find karo matchId se
  const match = worldCupData.matches.find(m => m.matchId === matchId);

  if (!match) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Match Not Found</h2>
          <p className="text-gray-600 mt-2">Invalid match ID: {matchId}</p>
        </div>
      </div>
    );
  }

  const { basic, tabs: matchTabs } = match;
  const { matchNumber, group, teams, venue, date, time } = basic;
  const [team1, team2] = teams;

  // Helper: Country code for flags
  const getCountryCode = (teamName) => {
    const codes = {
      'India': 'in',
      'Pakistan': 'pk',
      'Australia': 'au',
      'England': 'gb-eng',
      'New Zealand': 'nz',
      'South Africa': 'za',
      'Afghanistan': 'af',
      'Bangladesh': 'bd',
      'West Indies': 'wi',
      'Sri Lanka': 'lk',
      'Netherlands': 'nl',
      'Ireland': 'ie',
      'Zimbabwe': 'zw',
      'United States of America': 'us',
      'USA': 'us',
      'Namibia': 'na',
      'Nepal': 'np',
      'Oman': 'om',
      'UAE': 'ae',
      'Canada': 'ca',
      'Italy': 'it'
    };
    return codes[teamName] || 'xx';
  };

  // Date formatting
  const formatDate = (dateStr) => {
    if (!dateStr) return 'TBA';
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
  };

  const handleStoryClick = (id) => {
    navigate(`/details/cricket/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Layout Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left: Match Detail Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                {team1} vs {team2}
              </h1>
              <p className="text-lg text-gray-700 mt-3">
                {matchNumber}, {group} • {worldCupData.series}
              </p>
              <p className="text-base text-gray-700 mt-2">
                {formatDate(date)} • {time.local} Local ({time.gmt} GMT)
              </p>
              <p className="text-base text-gray-700 mt-1">
                Venue: {venue.stadium}, {venue.city}, {venue.country}
              </p>
            </div>

            {/* Sticky Tabs */}
            <div className="bg-white  shadow-sm sticky top-16 z-20 -mx-4 lg:mx-0 lg:rounded-t-xl overflow-hidden">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                        activeTab === tab
                          ? 'border-b-4 border-teal-600 text-teal-600'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-xl shadow-sm p-6 lg:p-8">
              {/* INFO TAB */}
              {activeTab === 'Info' && (
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left: Match Info Table */}
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Match Information</h2>
                    <table className="w-full text-left">
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 font-medium text-gray-700 w-32">Match</td>
                          <td className="py-3 text-gray-900">{matchNumber} • {group}</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 font-medium text-gray-700">Series</td>
                          <td className="py-3 text-gray-900">{worldCupData.series}</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 font-medium text-gray-700">Date</td>
                          <td className="py-3 text-gray-900">{formatDate(date)}</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 font-medium text-gray-700">Time</td>
                          <td className="py-3 text-gray-900">
                            {time.local} Local • {time.gmt} GMT
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 font-medium text-gray-700">Venue</td>
                          <td className="py-3 text-gray-900">
                            {venue.stadium}, {venue.city}, {venue.country}
                          </td>
                        </tr>
                        {matchTabs.info?.umpires && (
                          <tr className="border-b">
                            <td className="py-3 font-medium text-gray-700">Umpires</td>
                            <td className="py-3 text-gray-900">
                              {matchTabs.info.umpires.join(', ')}
                            </td>
                          </tr>
                        )}
                        {matchTabs.info?.weather && (
                          <tr className="border-b">
                            <td className="py-3 font-medium text-gray-700">Weather</td>
                            <td className="py-3 text-gray-900">{matchTabs.info.weather}</td>
                          </tr>
                        )}
                        {matchTabs.info?.pitch && (
                          <tr>
                            <td className="py-3 font-medium text-gray-700">Pitch Report</td>
                            <td className="py-3 text-gray-900">{matchTabs.info.pitch}</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* Right: Teams with Flags */}
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Teams</h2>
                    <div className="space-y-6">
                      <div className="bg-gray-100 rounded-lg p-6 flex items-center gap-5">
                        <img
                          src={`https://flagcdn.com/48x36/${getCountryCode(team1)}.png`}
                          alt={team1}
                          className="w-16 h-12 object-cover rounded shadow"
                          onError={(e) => (e.target.style.display = 'none')}
                        />
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{team1}</h3>
                          {matchTabs.squads?.[team1]?.captain && (
                            <p className="text-sm text-gray-600 mt-1">
                              Captain: {matchTabs.squads[team1].captain}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="bg-gray-100 rounded-lg p-6 flex items-center gap-5">
                        <img
                          src={`https://flagcdn.com/48x36/${getCountryCode(team2)}.png`}
                          alt={team2}
                          className="w-16 h-12 object-cover rounded shadow"
                          onError={(e) => (e.target.style.display = 'none')}
                        />
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{team2}</h3>
                          {matchTabs.squads?.[team2]?.captain && (
                            <p className="text-sm text-gray-600 mt-1">
                              Captain: {matchTabs.squads[team2].captain}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SQUADS TAB */}
              {activeTab === 'Squads' && (
                <div>
                  <h2 className="text-2xl font-bold text-center mb-8">Playing Squads</h2>
                  {matchTabs.squads && Object.keys(matchTabs.squads).length > 0 ? (
                    <div className="grid md:grid-cols-2 gap-10">
                      {Object.entries(matchTabs.squads).map(([teamName, squad]) => (
                        <div key={teamName} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                          <div className="flex items-center gap-4 mb-6">
                            <img
                              src={`https://flagcdn.com/48x36/${getCountryCode(teamName)}.png`}
                              alt={teamName}
                              className="w-12 h-9 rounded"
                              onError={(e) => (e.target.style.display = 'none')}
                            />
                            <h3 className="text-xl font-bold">{teamName}</h3>
                          </div>
                          {squad.players && squad.players.length > 0 ? (
                            <ul className="space-y-2">
                              {squad.players.map((player, i) => (
                                <li key={i} className="flex justify-between items-center">
                                  <span className="text-gray-800">{player.name || `Player ${i + 1}`}</span>
                                  {squad.captain === player.name && (
                                    <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded">Captain</span>
                                  )}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-500 italic">Squad not announced yet</p>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-gray-600 text-lg">
                      Squads will be announced closer to the match date.
                    </p>
                  )}
                </div>
              )}

              {/* Other Tabs - Placeholder */}
              {['Live', 'Scorecard', 'Overs', 'Highlights', 'Full Commentary', 'News'].includes(activeTab) && (
                <div className="text-center py-20 bg-gray-50 rounded-lg">
                  <p className="text-2xl text-gray-600 font-medium">
                    {activeTab} content not available yet
                  </p>
                  <p className="text-gray-500 mt-4">
                    This section will be updated once the match starts or highlights are available.
                  </p>
                </div>
              )}
            </div>
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
      </div>

      {/* Mobile: Top Cricket Stories */}
      <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
      </div>

      {/* Latest Sports News Section */}
      <div className="mt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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

export default ICCMenDetailPage;



// import React, { useState } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import { ArrowLeft, Trophy, Calendar, MapPin, Award } from 'lucide-react';

// import TopTennisStories from '../../data/TopTennisStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { grandSlamDetails } from '../../data/TennisGrandSlamDetail.js';

// const GrandSlamDetail = () => {
//   const { slamId } = useParams();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('overview');

//   // Get data from external file with fallback
//   const slam = grandSlamDetails[slamId];

//   if (!slam) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-600">
//         Grand Slam not found
//       </div>
//     );
//   }

//   const handleStoryClick = (id) => {
//     navigate(`/details/tennis/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-blue-50">
//       {/* Main Content - Same layout as LiveScores */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
//           {/* Left: Grand Slam Details */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Back Button + Header */}
//             <div>
//               <Link to="/tennis/grandslams" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm mb-4">
//                 <ArrowLeft className="w-4 h-4" /> Back to Grand Slams
//               </Link>

//               <div className={`bg-gradient-to-r ${slam.color} text-white rounded-xl shadow-xl p-6`}>
//                 <div className="flex items-center gap-4">
//                   <Trophy className="w-12 h-12" />
//                   <div>
//                     <h1 className="text-3xl sm:text-4xl font-bold">{slam.name}</h1>
//                     <div className="flex flex-wrap items-center gap-4 text-sm opacity-90 mt-2">
//                       <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{slam.location}</span>
//                       <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{slam.month}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               <div className="bg-white rounded-lg shadow p-4 text-center">
//                 <p className="text-xs text-gray-600">Founded</p>
//                 <p className="text-xl font-bold">{slam.founded}</p>
//               </div>
//               <div className="bg-white rounded-lg shadow p-4 text-center">
//                 <p className="text-xs text-gray-600">Prize Money</p>
//                 <p className="text-xl font-bold text-green-600">{slam.prize}</p>
//               </div>
//               <div className="bg-white rounded-lg shadow p-4 text-center">
//                 <p className="text-xs text-gray-600">Surface</p>
//                 <p className="text-xl font-bold">{slam.surface}</p>
//               </div>
//               <div className="bg-white rounded-lg shadow p-4 text-center">
//                 <p className="text-xs text-gray-600">Main Court</p>
//                 <p className="text-lg font-bold">{slam.mainCourt}</p>
//               </div>
//             </div>

//             {/* Tabs */}
//             <div className="bg-white rounded-xl shadow p-4">
//               <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
//                 {['overview', 'draws', 'champions', 'records'].map(tab => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
//                       activeTab === tab 
//                         ? 'bg-blue-600 text-white' 
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {tab === 'overview' ? 'Overview' : tab === 'draws' ? 'Draws' : tab === 'champions' ? 'Recent Champions' : 'Records'}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Tab Content */}
//             <div className="space-y-6">
//               {activeTab === 'overview' && (
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="bg-white rounded-xl shadow-md p-6">
//                     <h3 className="text-lg font-semibold mb-3">About</h3>
//                     <p className="text-gray-600">{slam.description}</p>
//                     <div className="mt-5">
//                       <p className="text-sm font-medium text-gray-700 mb-2">Traditions</p>
//                       <div className="flex flex-wrap gap-2">
//                         {slam.traditions.map((t, i) => (
//                           <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs">
//                             {t}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-white rounded-xl shadow-md p-6">
//                     <h3 className="text-lg font-semibold mb-3">Venue</h3>
//                     <p className="text-gray-700">{slam.venue}</p>
//                     <p className="text-sm text-gray-600 mt-2">Main Court: <span className="font-medium">{slam.mainCourt}</span></p>
//                   </div>
//                 </div>
//               )}

//               {activeTab === 'draws' && (
//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                   {slam.draws.map((d, i) => (
//                     <div key={i} className="bg-white rounded-xl shadow p-5 text-center">
//                       <p className="text-sm font-medium text-gray-700">{d.category}</p>
//                       <p className="text-2xl font-bold mt-2">{d.size}</p>
//                       <p className="text-xs text-gray-500">{d.size > 64 ? 'Players' : 'Teams'}</p>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {activeTab === 'champions' && (
//                 <div className="bg-white rounded-xl shadow-md overflow-hidden">
//                   <table className="w-full">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="text-left py-4 px-6 font-medium">Year</th>
//                         <th className="text-left py-4 px-6 font-medium">Men's Singles</th>
//                         <th className="text-left py-4 px-6 font-medium">Women's Singles</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-100">
//                       {slam.pastChampions.map((c, i) => (
//                         <tr key={i} className="hover:bg-gray-50">
//                           <td className="py-4 px-6 font-medium">{c.year}</td>
//                           <td className="py-4 px-6">{c.mens}</td>
//                           <td className="py-4 px-6">{c.womens}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}

//               {activeTab === 'records' && (
//                 <div className="space-y-6">
//                   <div className="bg-white rounded-xl shadow-md p-6">
//                     <h3 className="text-lg font-semibold mb-4">Most Singles Titles</h3>
//                     <div className="grid md:grid-cols-2 gap-5">
//                       <div className="bg-gray-50 rounded-lg p-5">
//                         <p className="text-sm text-gray-600">Men's</p>
//                         <p className="text-xl font-bold mt-1">{slam.records.mostTitles.mens}</p>
//                       </div>
//                       <div className="bg-gray-50 rounded-lg p-5">
//                         <p className="text-sm text-gray-600">Women's</p>
//                         <p className="text-xl font-bold mt-1">{slam.records.mostTitles.womens}</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-white rounded-xl shadow-md p-6">
//                     <h3 className="text-lg font-semibold mb-3">Longest Match</h3>
//                     <p className="text-gray-700">{slam.records.longestMatch}</p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Right Sidebar: Top Tennis Stories (Desktop only) */}
//           <div className="hidden lg:block lg:col-span-4">
//             <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
//               <h3 className="text-lg font-bold text-gray-900 mb-5">Top Tennis Stories</h3>
//               <div className="space-y-4">
//                 {TopTennisStories.data.TopTennisStories.slice(0, 5).map((story) => (
//                   <div
//                     key={story.id}
//                     onClick={() => handleStoryClick(story.id)}
//                     className="flex gap-3 cursor-pointer group hover:bg-gray-50 rounded-lg p-3 -mx-3 transition-colors"
//                   >
//                     <div className="flex-shrink-0">
//                       <img
//                         src={story.image || 'https://via.placeholder.com/100'}
//                         alt={story.title}
//                         className="w-20 h-20 object-cover rounded-lg"
//                       />
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-blue-600 transition-colors">
//                         {story.title}
//                       </h4>
//                       <p className="text-xs text-gray-500 mt-1">
//                         {new Date(story.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <button
//                 onClick={() => navigate('/all-top-tennis-stories')}
//                 className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
//               >
//                 View All Stories →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile: Top Tennis Stories Section */}
//       <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-xl shadow-md p-5">
//             <h3 className="text-lg font-bold text-gray-900 mb-4">Top Tennis Stories</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {TopTennisStories.data.TopTennisStories.slice(0, 4).map((story) => (
//                 <div
//                   key={story.id}
//                   onClick={() => handleStoryClick(story.id)}
//                   className="cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
//                 >
//                   <img
//                     src={story.image || 'https://via.placeholder.com/300'}
//                     alt={story.title}
//                     className="w-full h-40 object-cover"
//                   />
//                   <div className="p-3">
//                     <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
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
//               onClick={() => navigate('/all-top-tennis-stories')}
//               className="mt-4 w-full text-center text-blue-600 font-medium hover:underline text-sm"
//             >
//               View All Stories →
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Latest Sports News */}
//       <div className="mt-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-xl shadow-md p-6">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
//                 Latest Sports News
//               </h3>
//               <button
//                 onClick={() => navigate('/all-latest-news')}
//                 className="text-blue-600 hover:underline font-medium text-sm sm:text-base"
//               >
//                 View All →
//               </button>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {LatestNews.data.LatestNews.slice(0, 6).map((article) => (
//                 <div
//                   key={article.title}
//                   onClick={() => handleNewsCardClick(article.title)}
//                   className="bg-gray-50 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
//                 >
//                   <img
//                     src={article.image || "https://via.placeholder.com/400x250"}
//                     alt={article.title}
//                     className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="p-4">
//                     <h4 className="text-base font-semibold text-gray-800 line-clamp-2 mb-2">
//                       {article.title}
//                     </h4>
//                     <p className="text-sm text-gray-600 line-clamp-2 mb-3">
//                       {article.description}
//                     </p>
//                     <div className="flex justify-between text-xs text-gray-500">
//                       <span>Source: {article.source}</span>
//                       <span>
//                         {new Date(article.published).toLocaleDateString('en-US', {
//                           month: 'short',
//                           day: '2-digit',
//                           year: 'numeric',
//                         })}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GrandSlamDetail;


import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Trophy, Calendar, MapPin, Award } from 'lucide-react';

import TopTennisStories from '../../data/TopTennisStories.js';
import LatestNews from '../../data/LatestNews.js';
import { grandSlamDetails } from '../../data/TennisGrandSlamDetail.js';

const GrandSlamDetail = () => {
  const { slamId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Get data from external file with fallback
  const slam = grandSlamDetails[slamId];

  if (!slam) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Grand Slam not found
      </div>
    );
  }

  const handleStoryClick = (id) => {
    navigate(`/details/tennis/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-blue-50">
      {/* Main Content - Same layout as LiveScores */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left: Grand Slam Details */}
          <div className="lg:col-span-8 space-y-6">
            {/* Back Button + Header */}
            <div>
              <Link to="/tennis/grandslams" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm mb-4">
                <ArrowLeft className="w-4 h-4" /> Back to Grand Slams
              </Link>

              <div className={`bg-gradient-to-r ${slam.color} text-white rounded-xl shadow-xl p-6`}>
                <div className="flex items-center gap-4 sm:gap-6">
                  <img
                    src={slam.logo_url}
                    alt={`${slam.name} logo`}
                    className="h-14 w-14 sm:h-16 sm:w-16 object-contain rounded bg-white/20 p-2 flex-shrink-0 shadow-md"
                  />
                  <Trophy className="w-10 h-10 sm:w-12 sm:h-12 opacity-90 hidden sm:block" />
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-bold">{slam.name}</h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm opacity-90 mt-2">
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{slam.location}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{slam.month}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <p className="text-xs text-gray-600">Founded</p>
                <p className="text-xl font-bold">{slam.founded}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <p className="text-xs text-gray-600">Prize Money</p>
                <p className="text-xl font-bold text-green-600">{slam.prize}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <p className="text-xs text-gray-600">Surface</p>
                <p className="text-xl font-bold">{slam.surface}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <p className="text-xs text-gray-600">Main Court</p>
                <p className="text-lg font-bold">{slam.mainCourt}</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow p-4">
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {['overview', 'draws', 'champions', 'records'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                      activeTab === tab 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tab === 'overview' ? 'Overview' : tab === 'draws' ? 'Draws' : tab === 'champions' ? 'Recent Champions' : 'Records'}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {activeTab === 'overview' && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-3">About</h3>
                    <p className="text-gray-600">{slam.description}</p>
                    <div className="mt-5">
                      <p className="text-sm font-medium text-gray-700 mb-2">Traditions</p>
                      <div className="flex flex-wrap gap-2">
                        {slam.traditions.map((t, i) => (
                          <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-3">Venue</h3>
                    <p className="text-gray-700">{slam.venue}</p>
                    <p className="text-sm text-gray-600 mt-2">Main Court: <span className="font-medium">{slam.mainCourt}</span></p>
                  </div>
                </div>
              )}

              {activeTab === 'draws' && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {slam.draws.map((d, i) => (
                    <div key={i} className="bg-white rounded-xl shadow p-5 text-center">
                      <p className="text-sm font-medium text-gray-700">{d.category}</p>
                      <p className="text-2xl font-bold mt-2">{d.size}</p>
                      <p className="text-xs text-gray-500">{d.size > 64 ? 'Players' : 'Teams'}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'champions' && (
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-4 px-6 font-medium">Year</th>
                        <th className="text-left py-4 px-6 font-medium">Men's Singles</th>
                        <th className="text-left py-4 px-6 font-medium">Women's Singles</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {slam.pastChampions.map((c, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                          <td className="py-4 px-6 font-medium">{c.year}</td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <img
                                src={c.mens_logo_url || 'https://via.placeholder.com/40'}
                                alt={c.mens}
                                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-gray-200 flex-shrink-0"
                              />
                              <span>{c.mens}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <img
                                src={c.womens_logo_url || 'https://via.placeholder.com/40'}
                                alt={c.womens}
                                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-gray-200 flex-shrink-0"
                              />
                              <span>{c.womens}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'records' && (
                <div className="space-y-6">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-4">Most Singles Titles</h3>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="bg-gray-50 rounded-lg p-5">
                        <p className="text-sm text-gray-600">Men's</p>
                        <p className="text-xl font-bold mt-1">{slam.records.mostTitles.mens}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-5">
                        <p className="text-sm text-gray-600">Women's</p>
                        <p className="text-xl font-bold mt-1">{slam.records.mostTitles.womens}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-3">Longest Match</h3>
                    <p className="text-gray-700">{slam.records.longestMatch}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar: Top Tennis Stories (Desktop only) */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-5">Top Tennis Stories</h3>
              <div className="space-y-4">
                {TopTennisStories.data.TopTennisStories.slice(0, 5).map((story) => (
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
                onClick={() => navigate('/all-top-tennis-stories')}
                className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
              >
                View All Stories →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Top Tennis Stories Section */}
      <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top Tennis Stories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TopTennisStories.data.TopTennisStories.slice(0, 4).map((story) => (
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
              onClick={() => navigate('/all-top-tennis-stories')}
              className="mt-4 w-full text-center text-blue-600 font-medium hover:underline text-sm"
            >
              View All Stories →
            </button>
          </div>
        </div>
      </div>

      {/* Latest Sports News */}
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

export default GrandSlamDetail;
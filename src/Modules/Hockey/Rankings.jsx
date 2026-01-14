


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import TopHockeyStories from '../../data/TopHockeyStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { hockeyRankings } from '../../data/HockeyRankings.js';

// const Rankings = () => {
//   const navigate = useNavigate();
//   const [gender, setGender] = useState('men');

//   const handleStoryClick = (id) => {
//     navigate(`/details/hockey/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   // Data ab external file se aa raha hai
//   const rankings = hockeyRankings[gender] || [];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
//       {/* Main Grid Layout */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
//           {/* Left: Rankings Content */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Header */}
//             <div className="mb-6">
//               <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">🏑 FIH World Rankings</h1>
//               <p className="text-gray-600 text-sm">As of January 2026</p>
//             </div>

//             {/* Gender Toggle */}
//             <div className="bg-white rounded-xl shadow-md p-4 mb-6">
//               <div className="flex gap-3">
//                 <button
//                   onClick={() => setGender('men')}
//                   className={`flex-1 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
//                     gender === 'men'
//                       ? 'bg-blue-600 text-white'
//                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   Men's
//                 </button>
//                 <button
//                   onClick={() => setGender('women')}
//                   className={`flex-1 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
//                     gender === 'women'
//                       ? 'bg-blue-600 text-white'
//                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   Women's
//                 </button>
//               </div>
//             </div>

//             {/* Rankings List */}
//             <div className="bg-white rounded-xl shadow-md overflow-hidden">
//               {rankings.map((team, idx) => (
//                 <div
//                   key={team.rank}
//                   className={`p-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b last:border-b-0 ${
//                     idx < 3 ? 'bg-gradient-to-r from-yellow-50 to-transparent' : ''
//                   }`}
//                 >
//                   <div className="flex items-center gap-4">
//                     {/* Rank Badge */}
//                     <div
//                       className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white ${
//                         idx === 0 ? 'bg-yellow-500' :
//                         idx === 1 ? 'bg-gray-400' :
//                         idx === 2 ? 'bg-orange-500' :
//                         'bg-gray-600'
//                       }`}
//                     >
//                       {team.rank}
//                     </div>

//                     {/* Flag & Country */}
//                     <div className="flex items-center gap-3">
//                       <span className="text-3xl">{team.flag}</span>
//                       <div>
//                         <p className="font-semibold text-gray-800">{team.country}</p>
//                         {team.change !== 0 && (
//                           <p className={`text-xs ${team.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
//                             {team.change > 0 ? '↑' : '↓'} {Math.abs(team.change)} {Math.abs(team.change) === 1 ? 'position' : 'positions'}
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Points */}
//                   <div className="text-right">
//                     <p className="text-xl font-bold text-blue-600">{team.points}</p>
//                     <p className="text-xs text-gray-500">Points</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Note */}
//             <div className="mt-6 text-center text-xs text-gray-500">
//               Rankings updated after FIH Pro League matches and international events.
//             </div>
//           </div>

//           {/* Right Sidebar: Top Hockey Stories (Desktop Only) */}
//           <div className="hidden lg:block lg:col-span-4">
//             <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
//               <h3 className="text-lg font-bold text-gray-900 mb-5">Top Hockey Stories</h3>
//               <div className="space-y-4">
//                 {TopHockeyStories.data.TopHockeyStories.slice(0, 5).map((story) => (
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
//                 onClick={() => navigate('/all-top-hockey-stories')}
//                 className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
//               >
//                 View All Stories →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Top Hockey Stories */}
//       <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-xl shadow-md p-5">
//             <h3 className="text-lg font-bold text-gray-900 mb-4">Top Hockey Stories</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {TopHockeyStories.data.TopHockeyStories.slice(0, 4).map((story) => (
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
//               onClick={() => navigate('/all-top-hockey-stories')}
//               className="mt-4 w-full text-center text-blue-600 font-medium hover:underline text-sm"
//             >
//               View All Stories →
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Latest Sports News Section */}
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

// export default Rankings;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import TopHockeyStories from '../../data/TopHockeyStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { hockeyRankings } from '../../data/HockeyRankings.js';

// const Rankings = () => {
//   const navigate = useNavigate();
//   const [gender, setGender] = useState('men');

//   const handleStoryClick = (id) => {
//     navigate(`/details/hockey/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   const rankings = hockeyRankings[gender] || [];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
//       {/* Main Grid Layout */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
//           {/* Left: Rankings Content */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Header */}
//             <div className="mb-6">
//               <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">🏑 FIH World Rankings</h1>
//               <p className="text-gray-600 text-sm">As of January 2026</p>
//             </div>

//             {/* Gender Toggle */}
//             <div className="bg-white rounded-xl shadow-md p-4 mb-6">
//               <div className="flex gap-3">
//                 <button
//                   onClick={() => setGender('men')}
//                   className={`flex-1 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
//                     gender === 'men'
//                       ? 'bg-blue-600 text-white'
//                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   Men's
//                 </button>
//                 <button
//                   onClick={() => setGender('women')}
//                   className={`flex-1 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
//                     gender === 'women'
//                       ? 'bg-blue-600 text-white'
//                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   Women's
//                 </button>
//               </div>
//             </div>

//             {/* Rankings List */}
//             <div className="bg-white rounded-xl shadow-md overflow-hidden">
//               {rankings.map((team, idx) => (
//                 <div
//                   key={team.rank}
//                   className={`p-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b last:border-b-0 ${
//                     idx < 3 ? 'bg-gradient-to-r from-yellow-50 to-transparent' : ''
//                   }`}
//                 >
//                   <div className="flex items-center gap-4">
//                     {/* Rank Badge */}
//                     <div
//                       className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white ${
//                         idx === 0 ? 'bg-yellow-500' :
//                         idx === 1 ? 'bg-gray-400' :
//                         idx === 2 ? 'bg-orange-500' :
//                         'bg-gray-600'
//                       }`}
//                     >
//                       {team.rank}
//                     </div>

//                     {/* Flag & Country */}
//                     <div className="flex items-center gap-3">
//                       <img
//                         src={team.flag}
//                         alt={`${team.country} flag`}
//                         className="w-7 h-5 sm:w-8 sm:h-6 object-cover rounded shadow-sm"
//                         onError={(e) => { e.target.src = 'https://via.placeholder.com/32?text=Flag'; }}
//                       />
//                       <div>
//                         <p className="font-semibold text-gray-800">{team.country}</p>
//                         {team.change !== 0 && (
//                           <p className={`text-xs ${team.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
//                             {team.change > 0 ? '↑' : '↓'} {Math.abs(team.change)} {Math.abs(team.change) === 1 ? 'position' : 'positions'}
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Points */}
//                   <div className="text-right">
//                     <p className="text-xl font-bold text-blue-600">{team.points}</p>
//                     <p className="text-xs text-gray-500">Points</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Note */}
//             <div className="mt-6 text-center text-xs text-gray-500">
//               Rankings updated after FIH Pro League matches and international events.
//             </div>
//           </div>

//           {/* Right Sidebar: Top Hockey Stories (Desktop Only) */}
//           <div className="hidden lg:block lg:col-span-4">
//             <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
//               <h3 className="text-lg font-bold text-gray-900 mb-5">Top Hockey Stories</h3>
//               <div className="space-y-4">
//                 {TopHockeyStories.data.TopHockeyStories.slice(0, 5).map((story) => (
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
//                 onClick={() => navigate('/all-top-hockey-stories')}
//                 className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
//               >
//                 View All Stories →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Top Hockey Stories */}
//       <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-xl shadow-md p-5">
//             <h3 className="text-lg font-bold text-gray-900 mb-4">Top Hockey Stories</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {TopHockeyStories.data.TopHockeyStories.slice(0, 4).map((story) => (
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
//               onClick={() => navigate('/all-top-hockey-stories')}
//               className="mt-4 w-full text-center text-blue-600 font-medium hover:underline text-sm"
//             >
//               View All Stories →
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Latest Sports News Section */}
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

// export default Rankings;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopHockeyStories from '../../data/TopHockeyStories.js';
import LatestNews from '../../data/LatestNews.js';
import { hockeyRankings } from '../../data/HockeyRankings.js';
import SEO from '../../components/SEO';

const Rankings = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState('men');

  const handleStoryClick = (id) => {
    navigate(`/details/hockey/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  const rankings = hockeyRankings[gender] || [];

  return (
    <>
      <SEO
        title={`FIH Hockey World Rankings ${gender === 'men' ? "Men's" : "Women's"} - Latest Standings | SportlyRadar`}
        description={`Current FIH World Rankings for ${gender === 'men' ? "Men's" : "Women's"} hockey teams as of January 2026. View the latest positions, points, and rank changes for top international hockey nations.`}
        keywords={`FIH rankings, hockey world rankings, ${gender === 'men' ? "men's hockey" : "women's hockey"}, ice hockey rankings, international hockey, FIH Pro League, hockey standings`}
        canonical={`https://www.sportlyradar.com/hockey/rankings/${gender}`}
        url={`https://www.sportlyradar.com/hockey/rankings/${gender}`}
        image="https://via.placeholder.com/1200x630?text=FIH+Hockey+Rankings" // You can replace with actual hockey ranking or world cup image
        type="website"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        {/* Main Grid Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* Left: Rankings Content */}
            <div className="lg:col-span-8 space-y-6">
              {/* Header */}
              <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">🏑 FIH World Rankings</h1>
                <p className="text-gray-600 text-sm">As of January 2026</p>
              </div>

              {/* Gender Toggle */}
              <div className="bg-white rounded-xl shadow-md p-4 mb-6">
                <div className="flex gap-3">
                  <button
                    onClick={() => setGender('men')}
                    className={`flex-1 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      gender === 'men'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Men's
                  </button>
                  <button
                    onClick={() => setGender('women')}
                    className={`flex-1 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      gender === 'women'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Women's
                  </button>
                </div>
              </div>

              {/* Rankings List */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                {rankings.map((team, idx) => (
                  <div
                    key={team.rank}
                    className={`p-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b last:border-b-0 ${
                      idx < 3 ? 'bg-gradient-to-r from-yellow-50 to-transparent' : ''
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Rank Badge */}
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white ${
                          idx === 0 ? 'bg-yellow-500' :
                          idx === 1 ? 'bg-gray-400' :
                          idx === 2 ? 'bg-orange-500' :
                          'bg-gray-600'
                        }`}
                      >
                        {team.rank}
                      </div>

                      {/* Flag & Country */}
                      <div className="flex items-center gap-3">
                        <img
                          src={team.flag}
                          alt={`${team.country} flag`}
                          className="w-7 h-5 sm:w-8 sm:h-6 object-cover rounded shadow-sm"
                          onError={(e) => { e.target.src = 'https://via.placeholder.com/32?text=Flag'; }}
                        />
                        <div>
                          <p className="font-semibold text-gray-800">{team.country}</p>
                          {team.change !== 0 && (
                            <p className={`text-xs ${team.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {team.change > 0 ? '↑' : '↓'} {Math.abs(team.change)} {Math.abs(team.change) === 1 ? 'position' : 'positions'}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Points */}
                    <div className="text-right">
                      <p className="text-xl font-bold text-blue-600">{team.points}</p>
                      <p className="text-xs text-gray-500">Points</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Note */}
              <div className="mt-6 text-center text-xs text-gray-500">
                Rankings updated after FIH Pro League matches and international events.
              </div>
            </div>

            {/* Right Sidebar: Top Hockey Stories (Desktop Only) */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-5">Top Hockey Stories</h3>
                <div className="space-y-4">
                  {TopHockeyStories.data.TopHockeyStories.slice(0, 5).map((story) => (
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
                  onClick={() => navigate('/all-top-hockey-stories')}
                  className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
                >
                  View All Stories →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Top Hockey Stories */}
        <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Top Hockey Stories</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TopHockeyStories.data.TopHockeyStories.slice(0, 4).map((story) => (
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
                onClick={() => navigate('/all-top-hockey-stories')}
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
    </>
  );
};

export default Rankings;
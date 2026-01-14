

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import TopHockeyStories from '../../data/TopHockeyStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { hockeySchedule } from '../../data/HockeyScheduleData.js';

// const Schedule = () => {
//   const navigate = useNavigate();
//   const [selectedMonth, setSelectedMonth] = useState('june');

//   const handleStoryClick = (id) => {
//     navigate(`/details/hockey/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   const months = [
//     { id: 'june', label: 'June 2025' },
//     { id: 'july', label: 'July 2025' },
//   ];

//   // Data ab external file se aa raha hai
//   const currentMatches = hockeySchedule[selectedMonth] || [];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
//       {/* Main Grid Layout */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
//           {/* Left: Schedule Content */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Header */}
//             <div className="mb-8">
//               <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
//                 Hockey Schedule
//               </h1>
//               <p className="text-gray-600">
//                 Upcoming international hockey fixtures
//               </p>
//             </div>

//             {/* Month Filter */}
//             <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
//               <div className="flex flex-wrap gap-3">
//                 {months.map((month) => (
//                   <button
//                     key={month.id}
//                     onClick={() => setSelectedMonth(month.id)}
//                     className={`px-6 py-3 rounded-xl font-semibold transition-all ${
//                       selectedMonth === month.id
//                         ? 'bg-blue-600 text-white shadow-lg'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {month.label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Matches List */}
//             <div className="space-y-4">
//               {currentMatches.map((match) => (
//                 <div
//                   key={match.id}
//                   className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
//                 >
//                   <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 md:px-6 py-3">
//                     <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
//                       <div>
//                         <p className="text-white/90 text-sm font-medium">
//                           {match.series}
//                         </p>
//                       </div>
//                       <span
//                         className={`px-4 py-1.5 rounded-full text-xs font-bold ${
//                           match.status === 'Live'
//                             ? 'bg-red-500 text-white animate-pulse'
//                             : 'bg-white/20 text-white'
//                         }`}
//                       >
//                         {match.status}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="p-4 md:p-6">
//                     <div className="grid md:grid-cols-3 gap-6 items-center">
//                       {/* Team 1 */}
//                       <div className="flex items-center gap-4">
//                         <span className="text-4xl md:text-5xl">{match.flag1}</span>
//                         <div className="flex-1">
//                           <h3 className="font-bold text-base md:text-lg text-gray-900">
//                             {match.team1}
//                           </h3>
//                         </div>
//                       </div>

//                       {/* VS */}
//                       <div className="text-center">
//                         <div className="text-2xl md:text-3xl font-bold text-gray-400">
//                           VS
//                         </div>
//                         <p className="text-sm text-gray-600 mt-1">
//                           {match.date} • {match.time}
//                         </p>
//                       </div>

//                       {/* Team 2 */}
//                       <div className="flex items-center gap-4 md:flex-row-reverse">
//                         <span className="text-4xl md:text-5xl">{match.flag2}</span>
//                         <div className="flex-1 md:text-right">
//                           <h3 className="font-bold text-base md:text-lg text-gray-900">
//                             {match.team2}
//                           </h3>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="mt-6 pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//                       <div className="text-sm text-gray-600">
//                         <p className="font-medium">{match.venue}</p>
//                         <p className="text-xs text-gray-500">{match.city}</p>
//                       </div>

//                       {match.status === 'Live' ? (
//                         <Link
//                           to={`/hockey/scorecard/${match.id}`}
//                           className="w-full sm:w-auto px-6 py-2.5 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
//                         >
//                           Watch Live
//                         </Link>
//                       ) : (
//                         <button className="w-full sm:w-auto px-6 py-2.5 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
//                           Set Reminder
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
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

// export default Schedule;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import TopHockeyStories from '../../data/TopHockeyStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { hockeySchedule } from '../../data/HockeyScheduleData.js';

// const Schedule = () => {
//   const navigate = useNavigate();
//   const [selectedMonth, setSelectedMonth] = useState('june');

//   const handleStoryClick = (id) => {
//     navigate(`/details/hockey/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   const months = [
//     { id: 'june', label: 'June 2025' },
//     { id: 'july', label: 'July 2025' },
//   ];

//   const currentMatches = hockeySchedule[selectedMonth] || [];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
//       {/* Main Grid Layout */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
//           {/* Left: Schedule Content */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Header */}
//             <div className="mb-8">
//               <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
//                 Hockey Schedule
//               </h1>
//               <p className="text-gray-600">
//                 Upcoming international hockey fixtures
//               </p>
//             </div>

//             {/* Month Filter */}
//             <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
//               <div className="flex flex-wrap gap-3">
//                 {months.map((month) => (
//                   <button
//                     key={month.id}
//                     onClick={() => setSelectedMonth(month.id)}
//                     className={`px-6 py-3 rounded-xl font-semibold transition-all ${
//                       selectedMonth === month.id
//                         ? 'bg-blue-600 text-white shadow-lg'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {month.label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Matches List */}
//             <div className="space-y-4">
//               {currentMatches.map((match) => (
//                 <div
//                   key={match.id}
//                   className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
//                 >
//                   <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 md:px-6 py-3">
//                     <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
//                       <div>
//                         <p className="text-white/90 text-sm font-medium">
//                           {match.series}
//                         </p>
//                       </div>
//                       <span
//                         className={`px-4 py-1.5 rounded-full text-xs font-bold ${
//                           match.status === 'Live'
//                             ? 'bg-red-500 text-white animate-pulse'
//                             : 'bg-white/20 text-white'
//                         }`}
//                       >
//                         {match.status}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="p-4 md:p-6">
//                     <div className="grid md:grid-cols-3 gap-6 items-center">
//                       {/* Team 1 */}
//                       <div className="flex items-center gap-4">
//                         <img
//                           src={match.flag1}
//                           alt={match.team1}
//                           className="w-10 h-6 md:w-12 md:h-7 object-cover rounded shadow-sm"
//                           onError={(e) => { e.target.src = 'https://via.placeholder.com/48?text=Flag'; }}
//                         />
//                         <div className="flex-1">
//                           <h3 className="font-bold text-base md:text-lg text-gray-900">
//                             {match.team1}
//                           </h3>
//                         </div>
//                       </div>

//                       {/* VS */}
//                       <div className="text-center">
//                         <div className="text-2xl md:text-3xl font-bold text-gray-400">
//                           VS
//                         </div>
//                         <p className="text-sm text-gray-600 mt-1">
//                           {match.date} • {match.time}
//                         </p>
//                       </div>

//                       {/* Team 2 */}
//                       <div className="flex items-center gap-4 md:flex-row-reverse">
//                         <img
//                           src={match.flag2}
//                           alt={match.team2}
//                           className="w-10 h-6 md:w-12 md:h-7 object-cover rounded shadow-sm"
//                           onError={(e) => { e.target.src = 'https://via.placeholder.com/48?text=Flag'; }}
//                         />
//                         <div className="flex-1 md:text-right">
//                           <h3 className="font-bold text-base md:text-lg text-gray-900">
//                             {match.team2}
//                           </h3>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="mt-6 pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//                       <div className="text-sm text-gray-600">
//                         <p className="font-medium">{match.venue}</p>
//                         <p className="text-xs text-gray-500">{match.city}</p>
//                       </div>

//                       {match.status === 'Live' ? (
//                         <Link
//                           to={`/hockey/scorecard/${match.id}`}
//                           className="w-full sm:w-auto px-6 py-2.5 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
//                         >
//                           Watch Live
//                         </Link>
//                       ) : (
//                         <button className="w-full sm:w-auto px-6 py-2.5 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
//                           Set Reminder
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
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

// export default Schedule;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopHockeyStories from '../../data/TopHockeyStories.js';
import LatestNews from '../../data/LatestNews.js';
import { hockeySchedule } from '../../data/HockeyScheduleData.js';
import SEO from '../../components/SEO';

const Schedule = () => {
  const navigate = useNavigate();
  const [selectedMonth, setSelectedMonth] = useState('june');

  const handleStoryClick = (id) => {
    navigate(`/details/hockey/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  const months = [
    { id: 'june', label: 'June 2025' },
    { id: 'july', label: 'July 2025' },
  ];

  const currentMatches = hockeySchedule[selectedMonth] || [];

  return (
    <>
      <SEO
        title="Hockey Schedule 2025 - Upcoming International Fixtures | SportlyRadar"
        description="View the complete hockey schedule for 2025 including international matches, tournaments, dates, times, venues and live status updates."
        keywords="hockey schedule, upcoming hockey matches, international hockey fixtures, hockey 2025 calendar, FIH events, hockey tournaments"
        canonical="https://www.sportlyradar.com/hockey/schedule"
        url="https://www.sportlyradar.com/hockey/schedule"
        image="https://via.placeholder.com/1200x630?text=Hockey+Schedule+2025"
        type="website"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        {/* Main Grid Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* Left: Schedule Content */}
            <div className="lg:col-span-8 space-y-6">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
                  Hockey Schedule
                </h1>
                <p className="text-gray-600">
                  Upcoming international hockey fixtures
                </p>
              </div>

              {/* Month Filter */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                <div className="flex flex-wrap gap-3">
                  {months.map((month) => (
                    <button
                      key={month.id}
                      onClick={() => setSelectedMonth(month.id)}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                        selectedMonth === month.id
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {month.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Matches List */}
              <div className="space-y-4">
                {currentMatches.map((match) => (
                  <div
                    key={match.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 md:px-6 py-3">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                        <div>
                          <p className="text-white/90 text-sm font-medium">
                            {match.series}
                          </p>
                        </div>
                        <span
                          className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                            match.status === 'Live'
                              ? 'bg-red-500 text-white animate-pulse'
                              : 'bg-white/20 text-white'
                          }`}
                        >
                          {match.status}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 md:p-6">
                      <div className="grid md:grid-cols-3 gap-6 items-center">
                        {/* Team 1 */}
                        <div className="flex items-center gap-4">
                          <img
                            src={match.flag1}
                            alt={match.team1}
                            className="w-10 h-6 md:w-12 md:h-7 object-cover rounded shadow-sm"
                            onError={(e) => { e.target.src = 'https://via.placeholder.com/48?text=Flag'; }}
                          />
                          <div className="flex-1">
                            <h3 className="font-bold text-base md:text-lg text-gray-900">
                              {match.team1}
                            </h3>
                          </div>
                        </div>

                        {/* VS */}
                        <div className="text-center">
                          <div className="text-2xl md:text-3xl font-bold text-gray-400">
                            VS
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {match.date} • {match.time}
                          </p>
                        </div>

                        {/* Team 2 */}
                        <div className="flex items-center gap-4 md:flex-row-reverse">
                          <img
                            src={match.flag2}
                            alt={match.team2}
                            className="w-10 h-6 md:w-12 md:h-7 object-cover rounded shadow-sm"
                            onError={(e) => { e.target.src = 'https://via.placeholder.com/48?text=Flag'; }}
                          />
                          <div className="flex-1 md:text-right">
                            <h3 className="font-bold text-base md:text-lg text-gray-900">
                              {match.team2}
                            </h3>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="text-sm text-gray-600">
                          <p className="font-medium">{match.venue}</p>
                          <p className="text-xs text-gray-500">{match.city}</p>
                        </div>

                        {match.status === 'Live' ? (
                          <Link
                            to={`/hockey/scorecard/${match.id}`}
                            className="w-full sm:w-auto px-6 py-2.5 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
                          >
                            Watch Live
                          </Link>
                        ) : (
                          <button className="w-full sm:w-auto px-6 py-2.5 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                            Set Reminder
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
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

export default Schedule;
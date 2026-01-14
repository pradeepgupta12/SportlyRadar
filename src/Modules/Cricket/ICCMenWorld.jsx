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


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import seriesData from '../../data/SeriesTournaments.json';

// const ICCMenWorld = () => {
//   const navigate = useNavigate();

//  // handleMatchClick same rahega
// const handleMatchClick = (dayIndex, matchIndex) => {
//   const match = seriesData.schedule[dayIndex].matches[matchIndex];
//   const matchId = match.matchId; // Ab real ID use ho raha

//   navigate(`/cricket/series/icc-mens-t20-world-cup-2026/match/${matchId}`);
// };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-6">
//       <h1 className="text-2xl font-bold text-gray-800 mb-6">
//         {seriesData.series}
//       </h1>

//       <div className="space-y-8">
//         {seriesData.schedule.map((day, dayIndex) => (
//           <div key={dayIndex}>
//             <div className="bg-green-100 text-gray-700 font-semibold px-4 py-2 uppercase text-sm">
//               {day.date}
//             </div>

//             <div className="divide-y">
//               {day.matches.map((match, matchIndex) => (
//                 <div
//                   key={matchIndex}
//                   className="py-4 flex flex-col gap-3 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
//                   onClick={() => handleMatchClick(dayIndex, matchIndex)}
//                 >
//                   <p className="text-sm text-gray-600">
//                     {match.matchNumber}, {match.group} · {match.venue.city}, {match.venue.stadium}
//                   </p>

//                   <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
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

//                     <div className="text-sm text-gray-700 md:text-right">
//                       <p className="font-semibold">{match.matchDay}</p>
//                       <p>{match.displayTime}</p>
//                     </div>
//                   </div>

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

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import seriesData from '../../data/SeriesTournaments.json';
// import TopStories from '../../data/TopStories.js';
// import LatestNews from '../../data/LatestNews.js';

// const ICCMenWorld = () => {
//   const navigate = useNavigate();

//   const handleMatchClick = (dayIndex, matchIndex) => {
//     const match = seriesData.schedule[dayIndex].matches[matchIndex];
//     const matchId = match.matchId;

//     navigate(`/cricket/series/icc-mens-t20-world-cup-2026/match/${matchId}`);
//   };

//   const handleStoryClick = (id) => {
//     navigate(`/details/cricket/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Main Layout */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
//           {/* Left: Full Schedule */}
//           <div className="lg:col-span-8 space-y-6">
//             <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
//               {seriesData.series}
//             </h1>

//             <div className="space-y-8">
//               {seriesData.schedule.map((day, dayIndex) => (
//                 <div key={dayIndex} className="bg-white rounded-xl shadow-sm overflow-hidden">
//                   <div className="bg-green-100 text-gray-700 font-semibold px-5 py-3 uppercase text-sm">
//                     {day.date}
//                   </div>

//                   <div className="divide-y divide-gray-100">
//                     {day.matches.map((match, matchIndex) => (
//                       <div
//                         key={matchIndex}
//                         className="py-5 px-5 flex flex-col gap-3 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
//                         onClick={() => handleMatchClick(dayIndex, matchIndex)}
//                       >
//                         <p className="text-sm text-gray-600">
//                           {match.matchNumber}, {match.group} · {match.venue.city}, {match.venue.stadium}
//                         </p>

//                         <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
//                           <div className="space-y-3">
//                             {match.teams.map((team, t) => (
//                               <div key={t} className="flex items-center gap-3">
//                                 <img
//                                   src={team.flag}
//                                   alt={team.name}
//                                   className="w-8 h-6 object-cover rounded shadow-sm"
//                                   onError={(e) => (e.target.style.display = 'none')}
//                                 />
//                                 <span className="font-medium text-gray-800">
//                                   {team.name}
//                                 </span>
//                               </div>
//                             ))}
//                           </div>

//                           <div className="text-sm text-gray-700 md:text-right">
//                             <p className="font-semibold">{match.matchDay}</p>
//                             <p>{match.displayTime}</p>
//                           </div>
//                         </div>

//                         <p className="text-orange-500 text-sm font-medium">
//                           {match.statusText}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Sidebar: Top Cricket Stories (Desktop only) */}
//           <div className="hidden lg:block lg:col-span-4">
//             <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
//               <h3 className="text-lg font-bold text-gray-900 mb-5">Top Cricket Stories</h3>
//               <div className="space-y-4">
//                 {TopStories.data.TopStories.slice(0, 5).map((story) => (
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
//                 onClick={() => navigate('/all-top-cricket-stories')}
//                 className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
//               >
//                 View All Stories →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile: Top Cricket Stories */}
//       <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-xl shadow-md p-5">
//             <h3 className="text-lg font-bold text-gray-900 mb-4">Top Cricket Stories</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {TopStories.data.TopStories.slice(0, 4).map((story) => (
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
//               onClick={() => navigate('/all-top-cricket-stories')}
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

// export default ICCMenWorld;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import seriesData from '../../data/SeriesTournaments.json';
import TopStories from '../../data/TopStories.js';
import LatestNews from '../../data/LatestNews.js';
import SEO from '../../components/SEO';

const ICCMenWorld = () => {
  const navigate = useNavigate();

  const handleMatchClick = (dayIndex, matchIndex) => {
    const match = seriesData.schedule[dayIndex].matches[matchIndex];
    const matchId = match.matchId;

    navigate(`/cricket/series/icc-mens-t20-world-cup-2026/match/${matchId}`);
  };

  const handleStoryClick = (id) => {
    navigate(`/details/cricket/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  // Dynamic SEO values
  const pageTitle = `${seriesData.series} 2026 | Schedule, Fixtures & Updates`;
  const pageDescription = `View full schedule, fixtures, venues, dates and match details for ICC Men's T20 World Cup 2026 co-hosted by India & Sri Lanka. Live updates and more on SportlyRadar.`;
  const canonicalUrl = "https://www.sportlyradar.com/cricket/series/icc-mens-t20-world-cup-2026";
  const ogImage = "https://www.sportlyradar.com/images/t20-world-cup-2026-og.jpg"; // You can replace with actual OG image if available

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords="ICC T20 World Cup 2026, T20 WC 2026 schedule, ICC Men's T20 World Cup fixtures, India Sri Lanka T20 World Cup, cricket schedule 2026, T20 world cup matches"
        canonical={canonicalUrl}
        image={ogImage}
        url={canonicalUrl}
        type="website"
      />

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left: Full Schedule */}
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {seriesData.series}
            </h1>

            <div className="space-y-8">
              {seriesData.schedule.map((day, dayIndex) => (
                <div key={dayIndex} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="bg-green-100 text-gray-700 font-semibold px-5 py-3 uppercase text-sm">
                    {day.date}
                  </div>

                  <div className="divide-y divide-gray-100">
                    {day.matches.map((match, matchIndex) => (
                      <div
                        key={matchIndex}
                        className="py-5 px-5 flex flex-col gap-3 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => handleMatchClick(dayIndex, matchIndex)}
                      >
                        <p className="text-sm text-gray-600">
                          {match.matchNumber}, {match.group} · {match.venue.city}, {match.venue.stadium}
                        </p>

                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                          <div className="space-y-3">
                            {match.teams.map((team, t) => (
                              <div key={t} className="flex items-center gap-3">
                                <img
                                  src={team.flag}
                                  alt={team.name}
                                  className="w-8 h-6 object-cover rounded shadow-sm"
                                  onError={(e) => (e.target.style.display = 'none')}
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

export default ICCMenWorld;
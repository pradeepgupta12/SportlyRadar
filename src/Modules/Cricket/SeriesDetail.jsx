// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import cricketData from '../../data/ScheduleMatch.json';

// const SeriesDetail = () => {
//   const { slug } = useParams();
//   const navigate = useNavigate();

//   // Series mapping
//   const seriesMapping = {
//     'icc-mens-t20-world-cup-2026': 'ICC Mens T20 World Cup 2026',
//     'the-ashes-2025-26': 'The Ashes',
//     'ipl-2026': 'Indian Premier League',
//   };

//   const seriesName = seriesMapping[slug];

//   // Find matches for this series
//   const getSeriesMatches = () => {
//     const allMatches = [];
    
//     Object.keys(cricketData.cricket_matches).forEach((category) => {
//       const categoryMatches = cricketData.cricket_matches[category].matches || [];
//       categoryMatches.forEach((match) => {
//         // Match series name with the current series
//         if (match.series.name === seriesName) {
//           allMatches.push(match);
//         }
//       });
//     });

//     return allMatches;
//   };

//   const matches = getSeriesMatches();

//   const handleMatchClick = (matchId) => {
//     navigate(`/cricket/match/${matchId}`);
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return 'TBA';
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', {
//       weekday: 'short',
//       day: 'numeric',
//       month: 'short',
//       year: 'numeric',
//     }).toUpperCase().replace(',', '');
//   };

//   const formatTime = (dateString) => {
//     if (!dateString) return '';
//     const date = new Date(dateString);
//     return date.toLocaleTimeString('en-US', {
//       hour: 'numeric',
//       minute: '2-digit',
//       hour12: true,
//     });
//   };

//   if (!seriesName) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">Series Not Found</h2>
//           <button
//             onClick={() => navigate('/cricket/series')}
//             className="text-teal-600 hover:text-teal-700 font-medium"
//           >
//             ← Back to Series
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Back Button */}
//         <button
//           onClick={() => navigate('/cricket/series')}
//           className="mb-4 text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2"
//         >
//           ← Back to Series
//         </button>

//         {/* Series Header */}
//         <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">{seriesName}</h1>
//           {matches.length > 0 && (
//             <div className="flex items-center gap-4 text-sm text-gray-600">
//               <span className="font-medium">Format: {matches[0].series.format}</span>
//               <span>•</span>
//               <span className="font-medium">Season: {matches[0].series.season}</span>
//               <span>•</span>
//               <span className="font-medium">{matches.length} Match{matches.length > 1 ? 'es' : ''}</span>
//             </div>
//           )}
//         </div>

//         {/* Matches Schedule */}
//         <h2 className="text-2xl font-bold text-gray-900 mb-4">Schedule</h2>
        
//         <div className="space-y-4">
//           {matches.length === 0 ? (
//             <div className="bg-white rounded-lg shadow p-10 text-center">
//               <p className="text-gray-500 text-lg">No matches scheduled for this series yet.</p>
//             </div>
//           ) : (
//             matches.map((match) => {
//               const { matchInfo, series } = match;
//               const venue = matchInfo.venue || {};

//               return (
//                 <div
//                   key={match.matchId}
//                   onClick={() => handleMatchClick(match.matchId)}
//                   className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer p-5"
//                 >
//                   <div className="text-xs text-gray-500 font-medium mb-1">
//                     {formatDate(matchInfo.dateTime?.venueLocal)}
//                   </div>

//                   <div className="flex justify-between items-center">
//                     <div>
//                       <div className="text-sm font-semibold text-gray-700">
//                         {series.name}, {series.season}
//                       </div>
//                       <div className="text-lg font-bold text-gray-900 mt-1">
//                         {matchInfo.matchTitle}
//                         {matchInfo.day && ` • ${matchInfo.day}`}
//                       </div>
//                       <div className="text-sm text-gray-600 mt-1">
//                         {venue.name}, {venue.city}
//                       </div>
//                     </div>

//                     <div className="text-right">
//                       <div className="text-sm font-semibold text-gray-800">
//                         {formatTime(matchInfo.dateTime?.venueLocal)}
//                       </div>
//                       <div className="text-xs text-gray-500">
//                         {formatTime(matchInfo.dateTime?.gmt)} GMT
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SeriesDetail;


// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import cricketData from '../../data/ScheduleMatch.json';
// import TopStories from '../../data/TopStories.js';
// import LatestNews from '../../data/LatestNews.js';

// const SeriesDetail = () => {
//   const { slug } = useParams();
//   const navigate = useNavigate();

//   // Series mapping
//   const seriesMapping = {
//     'icc-mens-t20-world-cup-2026': 'ICC Mens T20 World Cup 2026',
//     'the-ashes-2025-26': 'The Ashes',
//     'ipl-2026': 'Indian Premier League',
//   };

//   const seriesName = seriesMapping[slug];

//   // Find matches for this series
//   const getSeriesMatches = () => {
//     const allMatches = [];
    
//     Object.keys(cricketData.cricket_matches).forEach((category) => {
//       const categoryMatches = cricketData.cricket_matches[category].matches || [];
//       categoryMatches.forEach((match) => {
//         if (match.series.name === seriesName) {
//           allMatches.push(match);
//         }
//       });
//     });

//     return allMatches;
//   };

//   const matches = getSeriesMatches();

//   const handleMatchClick = (matchId) => {
//     navigate(`/cricket/match/${matchId}`);
//   };

//   const handleStoryClick = (id) => {
//     navigate(`/details/cricket/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return 'TBA';
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', {
//       weekday: 'short',
//       day: 'numeric',
//       month: 'short',
//       year: 'numeric',
//     }).toUpperCase().replace(',', '');
//   };

//   const formatTime = (dateString) => {
//     if (!dateString) return '';
//     const date = new Date(dateString);
//     return date.toLocaleTimeString('en-US', {
//       hour: 'numeric',
//       minute: '2-digit',
//       hour12: true,
//     });
//   };

//   if (!seriesName) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">Series Not Found</h2>
//           <button
//             onClick={() => navigate('/cricket/series')}
//             className="text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2 mx-auto"
//           >
//             ← Back to Series
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Main Layout */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
//           {/* Left: Series Detail & Schedule */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Back Button */}
//             <button
//               onClick={() => navigate('/cricket/series')}
//               className="text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2"
//             >
//               ← Back to Series
//             </button>

//             {/* Series Header */}
//             <div className="bg-white rounded-xl shadow-md p-6">
//               <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
//                 {seriesName}
//               </h1>
//               {matches.length > 0 && (
//                 <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
//                   <span className="font-medium">Format: {matches[0].series.format}</span>
//                   <span className="hidden sm:inline">•</span>
//                   <span className="font-medium">Season: {matches[0].series.season}</span>
//                   <span className="hidden sm:inline">•</span>
//                   <span className="font-medium">
//                     {matches.length} Match{matches.length > 1 ? 'es' : ''}
//                   </span>
//                 </div>
//               )}
//             </div>

//             {/* Schedule Title */}
//             <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
//               Schedule
//             </h2>

//             {/* Matches List */}
//             <div className="space-y-4">
//               {matches.length === 0 ? (
//                 <div className="bg-white rounded-xl shadow-md p-10 text-center">
//                   <p className="text-gray-500 text-lg">
//                     No matches scheduled for this series yet.
//                   </p>
//                 </div>
//               ) : (
//                 matches.map((match) => {
//                   const { matchInfo, series } = match;
//                   const venue = matchInfo.venue || {};

//                   return (
//                     <div
//                       key={match.matchId}
//                       onClick={() => handleMatchClick(match.matchId)}
//                       className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer p-5"
//                     >
//                       <div className="text-xs text-gray-500 font-medium mb-1">
//                         {formatDate(matchInfo.dateTime?.venueLocal)}
//                       </div>

//                       <div className="flex justify-between items-center">
//                         <div>
//                           <div className="text-sm font-semibold text-gray-700">
//                             {series.name}, {series.season}
//                           </div>
//                           <div className="text-lg font-bold text-gray-900 mt-1">
//                             {matchInfo.matchTitle}
//                             {matchInfo.day && ` • ${matchInfo.day}`}
//                           </div>
//                           <div className="text-sm text-gray-600 mt-1">
//                             {venue.name}, {venue.city}
//                           </div>
//                         </div>

//                         <div className="text-right">
//                           <div className="text-sm font-semibold text-gray-800">
//                             {formatTime(matchInfo.dateTime?.venueLocal)}
//                           </div>
//                           <div className="text-xs text-gray-500">
//                             {formatTime(matchInfo.dateTime?.gmt)} GMT
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })
//               )}
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

// export default SeriesDetail;


import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import cricketData from '../../data/ScheduleMatch.json';
import TopStories from '../../data/TopStories.js';
import LatestNews from '../../data/LatestNews.js';
import SEO from '../../components/SEO';

const SeriesDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Series mapping
  const seriesMapping = {
    'icc-mens-t20-world-cup-2026': 'ICC Mens T20 World Cup 2026',
    'the-ashes-2025-26': 'The Ashes',
    'ipl-2026': 'Indian Premier League',
  };

  const seriesName = seriesMapping[slug];

  // Find matches for this series
  const getSeriesMatches = () => {
    const allMatches = [];
    
    Object.keys(cricketData.cricket_matches).forEach((category) => {
      const categoryMatches = cricketData.cricket_matches[category].matches || [];
      categoryMatches.forEach((match) => {
        if (match.series.name === seriesName) {
          allMatches.push(match);
        }
      });
    });

    return allMatches;
  };

  const matches = getSeriesMatches();

  const handleMatchClick = (matchId) => {
    navigate(`/cricket/match/${matchId}`);
  };

  const handleStoryClick = (id) => {
    navigate(`/details/cricket/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'TBA';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).toUpperCase().replace(',', '');
  };

  const formatTime = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  if (!seriesName) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Series Not Found</h2>
          <button
            onClick={() => navigate('/cricket/series')}
            className="text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2 mx-auto"
          >
            ← Back to Series
          </button>
        </div>
      </div>
    );
  }

  // ────────────────────────────────────────────────
  //                  DYNAMIC SEO
  // ────────────────────────────────────────────────
  const pageTitle = `${seriesName} Schedule & Fixtures | SportlyRadar`;
  const pageDescription = `View complete schedule, upcoming matches, dates, venues and details for ${seriesName}. Get fixtures, series information and cricket updates on SportlyRadar.`;
  const canonicalUrl = `https://www.sportlyradar.com/cricket/series/${slug}`;
  const ogImage = "https://www.sportlyradar.com/images/cricket-series-detail-og.jpg"; // fallback image

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={`${seriesName}, ${seriesName} schedule, ${seriesName} fixtures, ${seriesName} matches, cricket series, upcoming cricket, ${slug.replace(/-/g, ' ')}`}
        canonical={canonicalUrl}
        image={ogImage}
        url={canonicalUrl}
        type="website"
      />

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left: Series Detail & Schedule */}
          <div className="lg:col-span-8 space-y-6">
            {/* Back Button */}
            <button
              onClick={() => navigate('/cricket/series')}
              className="text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2"
            >
              ← Back to Series
            </button>

            {/* Series Header */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                {seriesName}
              </h1>
              {matches.length > 0 && (
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <span className="font-medium">Format: {matches[0].series.format}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="font-medium">Season: {matches[0].series.season}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="font-medium">
                    {matches.length} Match{matches.length > 1 ? 'es' : ''}
                  </span>
                </div>
              )}
            </div>

            {/* Schedule Title */}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Schedule
            </h2>

            {/* Matches List */}
            <div className="space-y-4">
              {matches.length === 0 ? (
                <div className="bg-white rounded-xl shadow-md p-10 text-center">
                  <p className="text-gray-500 text-lg">
                    No matches scheduled for this series yet.
                  </p>
                </div>
              ) : (
                matches.map((match) => {
                  const { matchInfo, series } = match;
                  const venue = matchInfo.venue || {};

                  return (
                    <div
                      key={match.matchId}
                      onClick={() => handleMatchClick(match.matchId)}
                      className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer p-5"
                    >
                      <div className="text-xs text-gray-500 font-medium mb-1">
                        {formatDate(matchInfo.dateTime?.venueLocal)}
                      </div>

                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm font-semibold text-gray-700">
                            {series.name}, {series.season}
                          </div>
                          <div className="text-lg font-bold text-gray-900 mt-1">
                            {matchInfo.matchTitle}
                            {matchInfo.day && ` • ${matchInfo.day}`}
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            {venue.name}, {venue.city}
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-sm font-semibold text-gray-800">
                            {formatTime(matchInfo.dateTime?.venueLocal)}
                          </div>
                          <div className="text-xs text-gray-500">
                            {formatTime(matchInfo.dateTime?.gmt)} GMT
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
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

export default SeriesDetail;
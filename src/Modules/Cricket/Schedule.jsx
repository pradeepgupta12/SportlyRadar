// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import cricketData from '../../data/ScheduleMatch.json'; // Adjust path if needed

// const Schedule = () => {
//   const [activeCategory, setActiveCategory] = useState('international');
//   const navigate = useNavigate();

//   const categories = [
//     { id: 'international', label: 'International' },
//     { id: 't20_leagues', label: 'T20 Leagues' },
//     { id: 'domestic', label: 'Domestic' },
//     { id: 'women', label: 'Women' },
//     { id: 'all', label: 'All Matches' },
//   ];

//   const getMatches = () => {
//     if (activeCategory === 'all') {
//       return [
//         ...cricketData.cricket_matches.international.matches,
//         ...cricketData.cricket_matches.t20_leagues.matches,
//         ...cricketData.cricket_matches.domestic.matches,
//         ...cricketData.cricket_matches.women.matches,
//       ];
//     }
//     return cricketData.cricket_matches[activeCategory]?.matches || [];
//   };

//   const matches = getMatches();

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

//   return (
//     <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold text-gray-900 mb-8">Cricket Schedule</h1>

//         {/* Category Tabs */}
//         <div className="flex flex-wrap gap-3 mb-8">
//           {categories.map((cat) => (
//             <button
//               key={cat.id}
//               onClick={() => setActiveCategory(cat.id)}
//               className={`px-5 py-2 rounded-full text-sm font-medium transition ${
//                 activeCategory === cat.id
//                   ? 'bg-teal-600 text-white'
//                   : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//               }`}
//             >
//               {cat.label}
//             </button>
//           ))}
//         </div>

//         {/* Matches */}
//         <div className="space-y-4">
//           {matches.length === 0 ? (
//             <p className="text-center text-gray-500 py-10">No matches scheduled.</p>
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

// export default Schedule;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cricketData from '../../data/ScheduleMatch.json';
import TopStories from '../../data/TopStories.js';
import LatestNews from '../../data/LatestNews.js';

const Schedule = () => {
  const [activeCategory, setActiveCategory] = useState('international');
  const navigate = useNavigate();

  const categories = [
    { id: 'international', label: 'International' },
    { id: 't20_leagues', label: 'T20 Leagues' },
    { id: 'domestic', label: 'Domestic' },
    { id: 'women', label: 'Women' },
    { id: 'all', label: 'All Matches' },
  ];

  const getMatches = () => {
    if (activeCategory === 'all') {
      return [
        ...cricketData.cricket_matches.international.matches,
        ...cricketData.cricket_matches.t20_leagues.matches,
        ...cricketData.cricket_matches.domestic.matches,
        ...cricketData.cricket_matches.women.matches,
      ];
    }
    return cricketData.cricket_matches[activeCategory]?.matches || [];
  };

  const matches = getMatches();

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left: Schedule Content */}
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Cricket Schedule
            </h1>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                    activeCategory === cat.id
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Matches List */}
            <div className="space-y-4">
              {matches.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg shadow">
                  <p className="text-gray-500 text-base">
                    No matches scheduled in this category.
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

      {/* Latest Sports News Section (Full width, below everything) */}
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

export default Schedule;
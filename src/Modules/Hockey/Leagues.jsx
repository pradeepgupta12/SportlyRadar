// import React from 'react';
// import { Link } from 'react-router-dom';

// const Leagues = () => {
//   const leagues = [
//     {
//       id: 1,
//       name: 'FIH Pro League',
//       country: 'International',
//       teams: 9,
//       logo: '🏑',
//       description: 'Premier international hockey league',
//       season: '2025-26',
//     },
//     {
//       id: 2,
//       name: 'Euro Hockey League',
//       country: 'Europe',
//       teams: 24,
//       logo: '🇪🇺',
//       description: 'Top European club competition',
//       season: '2025-26',
//     },
//     {
//       id: 3,
//       name: 'Hockey India League',
//       country: 'India',
//       teams: 8,
//       logo: '🇮🇳',
//       description: 'Premier hockey league in India',
//       season: '2025',
//     },
//     {
//       id: 4,
//       name: 'Australian Hockey League',
//       country: 'Australia',
//       teams: 10,
//       logo: '🇦🇺',
//       description: 'Top tier Australian hockey',
//       season: '2025',
//     },
//     {
//       id: 5,
//       name: 'Hoofdklasse',
//       country: 'Netherlands',
//       teams: 12,
//       logo: '🇳🇱',
//       description: 'Dutch national hockey league',
//       season: '2025-26',
//     },
//     {
//       id: 6,
//       name: 'Hockey Belgium League',
//       country: 'Belgium',
//       teams: 14,
//       logo: '🇧🇪',
//       description: 'Belgian premier hockey division',
//       season: '2025-26',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
//             Hockey Leagues
//           </h1>
//           <p className="text-gray-600">
//             Explore top hockey leagues from around the world
//           </p>
//         </div>

//         {/* Leagues Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {leagues.map((league) => (
//             <div
//               key={league.id}
//               className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
//             >
//               <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
//                 {league.logo}
//               </div>
//               <h3 className="text-xl font-bold mb-2 text-gray-900">
//                 {league.name}
//               </h3>
//               <p className="text-gray-600 text-sm mb-1">{league.country}</p>
//               <p className="text-gray-500 text-sm mb-3">
//                 {league.description}
//               </p>
//               <div className="flex items-center justify-between mb-4">
//                 <span className="text-sm text-gray-600">
//                   {league.teams} Teams
//                 </span>
//                 <span className="text-sm font-semibold text-blue-600">
//                   {league.season}
//                 </span>
//               </div>
//               <Link
//                 to={`/hockey/league/${league.id}`}
//                 className="block w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors text-center"
//               >
//                 View League
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Leagues;

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import TopHockeyStories from '../../data/TopHockeyStories.js';
// import LatestNews from '../../data/LatestNews.js';

// const Leagues = () => {
//   const navigate = useNavigate();

//   const leagues = [
//     {
//       id: 1,
//       name: 'FIH Pro League',
//       country: 'International',
//       teams: 9,
//       logo: '🏑',
//       description: 'Premier international hockey league',
//       season: '2025-26',
//     },
//     {
//       id: 2,
//       name: 'Euro Hockey League',
//       country: 'Europe',
//       teams: 24,
//       logo: '🇪🇺',
//       description: 'Top European club competition',
//       season: '2025-26',
//     },
//     {
//       id: 3,
//       name: 'Hockey India League',
//       country: 'India',
//       teams: 8,
//       logo: '🇮🇳',
//       description: 'Premier hockey league in India',
//       season: '2025',
//     },
//     {
//       id: 4,
//       name: 'Australian Hockey League',
//       country: 'Australia',
//       teams: 10,
//       logo: '🇦🇺',
//       description: 'Top tier Australian hockey',
//       season: '2025',
//     },
//     {
//       id: 5,
//       name: 'Hoofdklasse',
//       country: 'Netherlands',
//       teams: 12,
//       logo: '🇳🇱',
//       description: 'Dutch national hockey league',
//       season: '2025-26',
//     },
//     {
//       id: 6,
//       name: 'Hockey Belgium League',
//       country: 'Belgium',
//       teams: 14,
//       logo: '🇧🇪',
//       description: 'Belgian premier hockey division',
//       season: '2025-26',
//     },
//   ];

//   const handleStoryClick = (id) => {
//     navigate(`/details/hockey/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
//       {/* Main Grid Layout */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
//           {/* Left: Leagues List */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Header */}
//             <div className="mb-8">
//               <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
//                 Hockey Leagues
//               </h1>
//               <p className="text-gray-600">
//                 Explore top hockey leagues from around the world
//               </p>
//             </div>

//             {/* Leagues Grid - Fixed Height Cards + 2 Columns on Large Screens */}
//             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
//               {leagues.map((league) => (
//                 <div
//                   key={league.id}
//                   className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all group flex flex-col min-h-[320px]"
//                 >
//                   <div className="p-6 flex-1 flex flex-col">
//                     <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
//                       {league.logo}
//                     </div>
//                     <h3 className="text-xl font-bold mb-2 text-gray-900">
//                       {league.name}
//                     </h3>
//                     <p className="text-gray-600 text-sm mb-1">{league.country}</p>
//                     <p className="text-gray-500 text-sm mb-4 flex-1">
//                       {league.description}
//                     </p>
//                     <div className="flex items-center justify-between mb-6">
//                       <span className="text-sm text-gray-600">
//                         {league.teams} Teams
//                       </span>
//                       <span className="text-sm font-semibold text-blue-600">
//                         {league.season}
//                       </span>
//                     </div>
//                     <Link
//                       to={`/hockey/league/${league.id}`}
//                       className="block w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors text-center mt-auto"
//                     >
//                       View League
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Sidebar: Top Hockey Stories (Large Screens Only) */}
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

//       {/* Latest Sports News Section (All Devices) */}
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

// export default Leagues;


import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopHockeyStories from '../../data/TopHockeyStories.js';
import LatestNews from '../../data/LatestNews.js';
import { hockeyLeagues } from '../../data/HockeyLeagueData.js';

const Leagues = () => {
  const navigate = useNavigate();

  const handleStoryClick = (id) => {
    navigate(`/details/hockey/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left: Leagues List */}
          <div className="lg:col-span-8 space-y-6">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Hockey Leagues
              </h1>
              <p className="text-gray-600">
                Explore top hockey leagues from around the world
              </p>
            </div>

            {/* Leagues Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {hockeyLeagues.map((league) => (
                <div
                  key={league.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all group flex flex-col min-h-[320px]"
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                      {league.logo}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {league.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-1">{league.country}</p>
                    <p className="text-gray-500 text-sm mb-4 flex-1">
                      {league.description}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm text-gray-600">
                        {league.teams} Teams
                      </span>
                      <span className="text-sm font-semibold text-blue-600">
                        {league.season}
                      </span>
                    </div>
                    <Link
                      to={`/hockey/league/${league.id}`}
                      className="block w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors text-center mt-auto"
                    >
                      View League
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar: Top Hockey Stories (Large Screens Only) */}
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
  );
};

export default Leagues;



// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Clock, Trophy, Calendar, Users, MapPin } from 'lucide-react';
// import TopBasketballStories from '../../data/TopBasketballStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { leagues } from '../../data/BasketballLeagueData.js';

// const Leagues = () => {
//   const navigate = useNavigate();

//   const handleStoryClick = (id) => {
//     navigate(`/details/basketball/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-red-50">
//       {/* Main Container */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

//           {/* Left: Hero + Leagues */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Hero Header - Same as Live Scores */}
//             <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 text-white rounded-xl shadow-xl p-5 sm:p-8">
//               <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//                 <div>
//                   <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">🏀 Basketball Leagues</h1>
//                   <p className="text-orange-100 text-sm sm:text-base">Explore professional basketball leagues worldwide</p>
//                 </div>
//                 <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg text-sm">
//                   <div className="flex items-center gap-2">
//                     <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
//                     <span className="font-semibold">{new Date().toLocaleTimeString()}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Leagues Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
//               {leagues.map((league) => (
//                 <Link
//                   key={league.id}
//                   to={`/basketball/league/${league.id}`}
//                   className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col min-h-[520px]" // Min height for uniform cards
//                 >
//                   <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 flex items-center justify-center">
//                     <img 
//                       src={league.logo} 
//                       alt={league.name}
//                       className="h-24 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
//                     />
//                   </div>

//                   <div className="p-6 flex-1 flex flex-col justify-between"> {/* flex-1 ensures equal height */}
//                     <div>
//                       <h3 className="text-2xl font-bold text-gray-800 mb-2">{league.name}</h3>
//                       <p className="text-sm text-gray-600 mb-4">{league.fullName}</p>
                      
//                       <p className="text-gray-700 mb-4 line-clamp-2">{league.description}</p>

//                       <div className="space-y-2 mb-4">
//                         <div className="flex items-center text-sm text-gray-600">
//                           <MapPin className="w-4 h-4 mr-2 text-orange-600" />
//                           {league.country}
//                         </div>
//                         <div className="flex items-center text-sm text-gray-600">
//                           <Users className="w-4 h-4 mr-2 text-orange-600" />
//                           {league.teams} Teams
//                         </div>
//                         <div className="flex items-center text-sm text-gray-600">
//                           <Calendar className="w-4 h-4 mr-2 text-orange-600" />
//                           Founded {league.founded}
//                         </div>
//                       </div>
//                     </div>

//                     <div className="pt-4 border-t border-gray-200">
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <p className="text-xs text-gray-500 mb-1">Current Champion</p>
//                           <p className="font-semibold text-gray-800">{league.currentChampion}</p>
//                         </div>
//                         <Trophy className="w-8 h-8 text-yellow-500" />
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Right Sidebar: Top Stories (Desktop only) */}
//           <div className="hidden lg:block lg:col-span-4">
//             <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
//               <h3 className="text-lg font-bold text-gray-900 mb-5">Top Basketball Stories</h3>
//               <div className="space-y-4">
//                 {TopBasketballStories.data.TopBasketballStories.slice(0, 5).map((story) => (
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
//                       <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-orange-600 transition-colors">
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
//                 onClick={() => navigate('/all-top-basketball-stories')}
//                 className="mt-6 w-full text-center text-orange-600 font-medium hover:underline text-sm"
//               >
//                 View All Stories →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile: Top Basketball Stories */}
//       <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-xl shadow-md p-5">
//             <h3 className="text-lg font-bold text-gray-900 mb-4">Top Basketball Stories</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {TopBasketballStories.data.TopBasketballStories.slice(0, 4).map((story) => (
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
//               onClick={() => navigate('/all-top-basketball-stories')}
//               className="mt-4 w-full text-center text-orange-600 font-medium hover:underline text-sm"
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
//                 className="text-orange-600 hover:underline font-medium text-sm sm:text-base"
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
import { Clock, Trophy, Calendar, Users, MapPin } from 'lucide-react';
import TopBasketballStories from '../../data/TopBasketballStories.js';
import LatestNews from '../../data/LatestNews.js';
import { leagues } from '../../data/BasketballLeagueData.js';

const Leagues = () => {
  const navigate = useNavigate();

  const handleStoryClick = (id) => {
    navigate(`/details/basketball/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-red-50">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Left: Hero + Leagues */}
          <div className="lg:col-span-8 space-y-6">
            {/* Hero Header - Same as Live Scores */}
            <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 text-white rounded-xl shadow-xl p-5 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">🏀 Basketball Leagues</h1>
                  <p className="text-orange-100 text-sm sm:text-base">Explore professional basketball leagues worldwide</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-semibold">{new Date().toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Leagues Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {leagues.map((league) => (
                <Link
                  key={league.id}
                  to={`/basketball/league/${league.id}`}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col min-h-[520px]" // Min height for uniform cards
                >
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 flex items-center justify-center">
                    <img 
                      src={league.logo} 
                      alt={league.name}
                      className="h-24 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between"> {/* flex-1 ensures equal height */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{league.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{league.fullName}</p>
                      
                      <p className="text-gray-700 mb-4 line-clamp-2">{league.description}</p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-2 text-orange-600" />
                          {league.country}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="w-4 h-4 mr-2 text-orange-600" />
                          {league.teams} Teams
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-2 text-orange-600" />
                          Founded {league.founded}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={league.championLogo}
                            alt={`${league.currentChampion} logo`}
                            className="w-12 h-12 object-contain rounded-full shadow-sm"
                            onError={(e) => { e.target.src = 'https://via.placeholder.com/48?text=Logo'; }} // fallback if image fails
                          />
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Current Champion</p>
                            <p className="font-semibold text-gray-800">{league.currentChampion}</p>
                          </div>
                        </div>
                        <Trophy className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Sidebar: Top Stories (Desktop only) */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-5">Top Basketball Stories</h3>
              <div className="space-y-4">
                {TopBasketballStories.data.TopBasketballStories.slice(0, 5).map((story) => (
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
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-orange-600 transition-colors">
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
                onClick={() => navigate('/all-top-basketball-stories')}
                className="mt-6 w-full text-center text-orange-600 font-medium hover:underline text-sm"
              >
                View All Stories →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Top Basketball Stories */}
      <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top Basketball Stories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TopBasketballStories.data.TopBasketballStories.slice(0, 4).map((story) => (
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
              onClick={() => navigate('/all-top-basketball-stories')}
              className="mt-4 w-full text-center text-orange-600 font-medium hover:underline text-sm"
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
                className="text-orange-600 hover:underline font-medium text-sm sm:text-base"
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
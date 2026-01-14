


// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Trophy, Calendar, MapPin, ChevronRight, Clock } from 'lucide-react';
// import TopTennisStories from '../../data/TopTennisStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { grandSlams } from '../../data/TennisGrandSlamData.js';

// const GrandSlams = () => {
//   const navigate = useNavigate();

//   const handleStoryClick = (id) => {
//     navigate(`/details/tennis/${id}`);
//   };

//   const handleNewsClick = (title) => {
//     navigate(`/news-details/${encodeURIComponent(title)}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-blue-50">
//       {/* Hero Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="bg-gradient-to-r from-green-600 via-blue-600 to-indigo-700 text-white rounded-xl shadow-xl p-5 sm:p-8">
//           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//             <div>
//               <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">🏆 Grand Slam Tournaments</h1>
//               <p className="text-green-100 text-sm sm:text-base">The four majors – pinnacle of professional tennis</p>
//             </div>
//             <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg text-sm">
//               <div className="flex items-center gap-2">
//                 <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
//                 <span className="font-semibold">{new Date().toLocaleTimeString()}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

//           {/* Left Main Section: Grand Slams Cards */}
//           <div className="lg:col-span-8 space-y-6">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
//               {grandSlams.map((slam) => (
//                 <Link
//                   key={slam.id}
//                   to={`/tennis/grandslam/${slam.id}`}
//                   className="group bg-white rounded-lg shadow hover:shadow-md transition-all border border-gray-100"
//                 >
//                   <div className={`bg-gradient-to-r ${slam.color} text-white p-5 rounded-t-lg`}>
//                     <div className="flex items-center gap-3">
//                       <img
//                         src={slam.logo_url}
//                         alt={`${slam.name} logo`}
//                         className="h-10 w-10 sm:h-12 sm:w-12 object-contain rounded bg-white/20 p-1 flex-shrink-0"
//                       />
//                       <div className="flex-1">
//                         <h2 className="text-xl font-bold">{slam.name}</h2>
//                         <div className="flex items-center gap-2 text-sm opacity-90 mt-1">
//                           <MapPin className="w-4 h-4" />
//                           <span>{slam.location}</span>
//                         </div>
//                       </div>
//                       <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
//                     </div>
//                   </div>

//                   <div className="p-5">
//                     <p className="text-sm text-gray-600 mb-4">{slam.description}</p>

//                     <div className="grid grid-cols-2 gap-4 text-sm">
//                       <div>
//                         <p className="text-gray-500">Surface</p>
//                         <p className="font-semibold">{slam.surface}</p>
//                       </div>
//                       <div>
//                         <p className="text-gray-500">Held</p>
//                         <p className="font-semibold">{slam.month}</p>
//                       </div>
//                       <div>
//                         <p className="text-gray-500">Prize Money</p>
//                         <p className="font-semibold">{slam.prize}</p>
//                       </div>
//                       <div>
//                         <p className="text-gray-500">Venue</p>
//                         <p className="font-semibold truncate">{slam.venue}</p>
//                       </div>
//                     </div>

//                     <div className="mt-4 pt-4 border-t border-gray-100 text-sm">
//                       <p className="font-medium text-gray-700 mb-1">2025 Champions</p>
//                       <div className="grid grid-cols-2 gap-2 text-gray-600">
//                         <p>Men's: {slam.recentChampions.mens}</p>
//                         <p>Women's: {slam.recentChampions.womens}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>

//             {/* Quick Fact */}
//             <div className="bg-white rounded-xl shadow-md p-6 text-center">
//               <p className="text-lg font-semibold text-gray-800">
//                 Combined Prize Money: <span className="text-green-600">Over $300 Million</span>
//               </p>
//               <p className="text-sm text-gray-600 mt-2">
//                 The Grand Slams offer the highest prize money, ranking points, and prestige in tennis.
//               </p>
//             </div>
//           </div>

//           {/* Desktop Sidebar */}
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

//       {/* Mobile Top Tennis Stories */}
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
//                   onClick={() => handleNewsClick(article.title)}
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

// export default GrandSlams;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trophy, Calendar, MapPin, ChevronRight, Clock } from 'lucide-react';
import SEO from '../../components/SEO.jsx';
import TopTennisStories from '../../data/TopTennisStories.js';
import LatestNews from '../../data/LatestNews.js';
import { grandSlams } from '../../data/TennisGrandSlamData.js';

const GrandSlams = () => {
  const navigate = useNavigate();

  const handleStoryClick = (id) => {
    navigate(`/details/tennis/${id}`);
  };

  const handleNewsClick = (title) => {
    navigate(`/news-details/${encodeURIComponent(title)}`);
  };

  // SEO meta data
  const seoTitle = "Grand Slam Tournaments | Tennis Majors | SportlyRadar";
  const seoDescription = "Complete guide to all four Grand Slam tournaments - Australian Open, French Open, Wimbledon, US Open. Get schedules, venues, prize money and more.";
  const seoKeywords = "Grand Slam tournaments, Australian Open, French Open, Wimbledon, US Open, tennis majors, tennis tournaments, ATP, WTA";
  const seoImage = "https://sportlyradar.com/grand-slam-og-image.jpg";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-blue-50">
      {/* SEO Component */}
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        image={seoImage}
        url={window.location.href}
        type="website"
      />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-gradient-to-r from-green-600 via-blue-600 to-indigo-700 text-white rounded-xl shadow-xl p-5 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">🏆 Grand Slam Tournaments</h1>
              <p className="text-green-100 text-sm sm:text-base">The four majors – pinnacle of professional tennis</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-semibold">{new Date().toLocaleTimeString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Left Main Section: Grand Slams Cards */}
          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {grandSlams.map((slam) => (
                <Link
                  key={slam.id}
                  to={`/tennis/grandslam/${slam.id}`}
                  className="group bg-white rounded-lg shadow hover:shadow-md transition-all border border-gray-100"
                >
                  <div className={`bg-gradient-to-r ${slam.color} text-white p-5 rounded-t-lg`}>
                    <div className="flex items-center gap-3">
                      <img
                        src={slam.logo_url}
                        alt={`${slam.name} logo`}
                        className="h-10 w-10 sm:h-12 sm:w-12 object-contain rounded bg-white/20 p-1 flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h2 className="text-xl font-bold">{slam.name}</h2>
                        <div className="flex items-center gap-2 text-sm opacity-90 mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>{slam.location}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-sm text-gray-600 mb-4">{slam.description}</p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Surface</p>
                        <p className="font-semibold">{slam.surface}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Held</p>
                        <p className="font-semibold">{slam.month}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Prize Money</p>
                        <p className="font-semibold">{slam.prize}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Venue</p>
                        <p className="font-semibold truncate">{slam.venue}</p>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100 text-sm">
                      <p className="font-medium text-gray-700 mb-1">2025 Champions</p>
                      <div className="grid grid-cols-2 gap-2 text-gray-600">
                        <p>Men's: {slam.recentChampions.mens}</p>
                        <p>Women's: {slam.recentChampions.womens}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Quick Fact */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <p className="text-lg font-semibold text-gray-800">
                Combined Prize Money: <span className="text-green-600">Over $300 Million</span>
              </p>
              <p className="text-sm text-gray-600 mt-2">
                The Grand Slams offer the highest prize money, ranking points, and prestige in tennis.
              </p>
            </div>
          </div>

          {/* Desktop Sidebar */}
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

      {/* Mobile Top Tennis Stories */}
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
                  onClick={() => handleNewsClick(article.title)}
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

export default GrandSlams;
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Series = () => {
//   const navigate = useNavigate();

//   // Series data from Navbar
//   const cricketSeries = [
//     {
//       title: 'ICC Mens T20 World Cup 2026',
//       slug: 'icc-mens-t20-world-cup-2026',
//       format: 'T20',
//       year: '2026',
//       status: 'Upcoming',
//     },
//     {
//       title: 'The Ashes, 2025-26',
//       slug: 'the-ashes-2025-26',
//       format: 'Test',
//       year: '2025-26',
//       status: 'Ongoing',
//     },
//     {
//       title: 'Indian Premier League 2026',
//       slug: 'ipl-2026',
//       format: 'T20',
//       year: '2026',
//       status: 'Upcoming',
//     },
//   ];

//   const handleSeriesClick = (slug) => {
//     navigate(`/cricket/series/${slug}`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold text-gray-900 mb-8">Cricket Series & Tournaments</h1>

//         {/* Series List */}
//         <div className="space-y-4">
//           {cricketSeries.map((series) => (
//             <div
//               key={series.slug}
//               onClick={() => handleSeriesClick(series.slug)}
//               className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer p-6"
//             >
//               <div className="flex justify-between items-center">
//                 <div className="flex-1">
//                   <div className="flex items-center gap-3 mb-2">
//                     <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                       series.status === 'Ongoing' 
//                         ? 'bg-green-100 text-green-700' 
//                         : 'bg-blue-100 text-blue-700'
//                     }`}>
//                       {series.status}
//                     </span>
//                     <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
//                       {series.format}
//                     </span>
//                   </div>
                  
//                   <h2 className="text-xl font-bold text-gray-900 mb-1">
//                     {series.title}
//                   </h2>
                  
//                   <div className="text-sm text-gray-600">
//                     Season: {series.year}
//                   </div>
//                 </div>

//                 <div className="text-right">
//                   <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium text-sm">
//                     View Schedule
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Series;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import TopStories from '../../data/TopStories.js';
// import LatestNews from '../../data/LatestNews.js';

// const Series = () => {
//   const navigate = useNavigate();

//   // Series data from Navbar
//   const cricketSeries = [
//     {
//       title: 'ICC Mens T20 World Cup 2026',
//       slug: 'icc-mens-t20-world-cup-2026',
//       format: 'T20',
//       year: '2026',
//       status: 'Upcoming',
//     },
//     {
//       title: 'The Ashes, 2025-26',
//       slug: 'the-ashes-2025-26',
//       format: 'Test',
//       year: '2025-26',
//       status: 'Ongoing',
//     },
//     {
//       title: 'Indian Premier League 2026',
//       slug: 'ipl-2026',
//       format: 'T20',
//       year: '2026',
//       status: 'Upcoming',
//     },
//   ];

//   const handleSeriesClick = (slug) => {
//     navigate(`/cricket/series/${slug}`);
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
          
//           {/* Left: Series List */}
//           <div className="lg:col-span-8 space-y-6">
//             <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
//               Cricket Series & Tournaments
//             </h1>

//             {/* Series Cards */}
//             <div className="space-y-4">
//               {cricketSeries.map((series) => (
//                 <div
//                   key={series.slug}
//                   onClick={() => handleSeriesClick(series.slug)}
//                   className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer p-6"
//                 >
//                   <div className="flex justify-between items-center">
//                     <div className="flex-1">
//                       <div className="flex items-center gap-3 mb-2">
//                         <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                           series.status === 'Ongoing' 
//                             ? 'bg-green-100 text-green-700' 
//                             : 'bg-blue-100 text-blue-700'
//                         }`}>
//                           {series.status}
//                         </span>
//                         <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
//                           {series.format}
//                         </span>
//                       </div>
                      
//                       <h2 className="text-xl font-bold text-gray-900 mb-1">
//                         {series.title}
//                       </h2>
                      
//                       <div className="text-sm text-gray-600">
//                         Season: {series.year}
//                       </div>
//                     </div>

//                     <div className="text-right">
//                       <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium text-sm">
//                         View Schedule
//                       </button>
//                     </div>
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

// export default Series;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopStories from '../../data/TopStories.js';
import LatestNews from '../../data/LatestNews.js';
import SEO from '../../components/SEO';

const Series = () => {
  const navigate = useNavigate();

  // Series data from Navbar
  const cricketSeries = [
    {
      title: 'ICC Mens T20 World Cup 2026',
      slug: 'icc-mens-t20-world-cup-2026',
      format: 'T20',
      year: '2026',
      status: 'Upcoming',
    },
    {
      title: 'The Ashes, 2025-26',
      slug: 'the-ashes-2025-26',
      format: 'Test',
      year: '2025-26',
      status: 'Ongoing',
    },
    {
      title: 'Indian Premier League 2026',
      slug: 'ipl-2026',
      format: 'T20',
      year: '2026',
      status: 'Upcoming',
    },
  ];

  const handleSeriesClick = (slug) => {
    navigate(`/cricket/series/${slug}`);
  };

  const handleStoryClick = (id) => {
    navigate(`/details/cricket/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  // ────────────────────────────────────────────────
  //                  DYNAMIC SEO
  // ────────────────────────────────────────────────
  const pageTitle = "Cricket Series & Tournaments 2025-2026 | ICC, IPL, Ashes & More | SportlyRadar";
  const pageDescription = "Explore upcoming and ongoing cricket series including ICC Men's T20 World Cup 2026, The Ashes 2025-26, IPL 2026 and more. Get schedules, fixtures, live scores and updates on SportlyRadar.";
  const canonicalUrl = "https://www.sportlyradar.com/cricket/series";
  const ogImage = "https://www.sportlyradar.com/images/cricket-series-tournaments-og.jpg";

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords="cricket series, cricket tournaments, ICC T20 World Cup 2026, The Ashes 2025-26, IPL 2026, upcoming cricket matches, cricket fixtures, live cricket scores, international cricket, T20 leagues"
        canonical={canonicalUrl}
        image={ogImage}
        url={canonicalUrl}
        type="website"
      />

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left: Series List */}
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Cricket Series & Tournaments
            </h1>

            {/* Series Cards */}
            <div className="space-y-4">
              {cricketSeries.map((series) => (
                <div
                  key={series.slug}
                  onClick={() => handleSeriesClick(series.slug)}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer p-6"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          series.status === 'Ongoing' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {series.status}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                          {series.format}
                        </span>
                      </div>
                      
                      <h2 className="text-xl font-bold text-gray-900 mb-1">
                        {series.title}
                      </h2>
                      
                      <div className="text-sm text-gray-600">
                        Season: {series.year}
                      </div>
                    </div>

                    <div className="text-right">
                      <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium text-sm">
                        View Schedule
                      </button>
                    </div>
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

export default Series;